/* Dreamhouse router, scenes, panels. No build step. Hash routes:
   #/                     exterior (home)
   #/living-room|kitchen|closet|garage
   #/closet/engineer|product|community   closet with a look selected
   #/<room>/<panel>       room panel (about, community, activities, outcomes, how-i-work, skills)
   #/work                 All Work list
   #/work/<slug>[/<sec>]  project case study (deep link), optional section
   #/resume  #/contact    available everywhere */
(function () {
  "use strict";
  const D = window.DH, SCENES = window.DH_SCENES, DIAG = window.DH_DIAGRAMS;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  const room = id => D.rooms.find(r => r.id === id);
  const project = s => D.projects.find(p => p.slug === s);
  const roomIdx = id => D.rooms.findIndex(r => r.id === id);

  const shell = $("#shell"), view = $("#view"), bar = $("#scenebar");
  const overlay = $("#overlay"), dialog = $("#panel"), pBody = $("#panel-body"), pTab = $("#panel-tab");
  let currentView = null, currentRole = null, panelKey = null, opener = null;

  /* ---------- icons ---------- */
  const ICON_PATHS = {
    door: "M7 21V5a5 5 0 0 1 10 0v16M4 21h16M14 13h.01",
    mail: "M4 9h16v9H4zM4 9l8 5 8-5M18 9V4h3",
    album: "M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2zM9 9h6M9 13h4",
    tv: "M3 7h18v11H3zM8 3l4 4 4-4M8 21h8",
    pin: "M4 4h16v12H4zM9 8h.01M15 8h.01M12 16v5",
    tablet: "M6 3h12v18H6zM11 18h2",
    book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM8 7h7",
    note: "M5 4h14v12l-4 4H5zM15 20v-4h4M8 9h8M8 13h5",
    board: "M3 4h18v12H3zM7 8h4M7 11h7M12 16l-3 5M12 16l3 5",
    chip: "M7 7h10v10H7zM10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4",
    badge: "M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z",
    gem: "M6 3h12l3 6-9 12L3 9zM3 9h18M9 3l3 18M15 3l-3 18",
    laptop: "M5 5h14v10H5zM2 19h20",
    robot: "M6 9h12v9H6zM12 5v4M9 13h.01M15 13h.01M3 13v3M21 13v3M12 4h.01",
    music: "M9 18V5l11-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM20 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
    trailer: "M3 7h13v9H3zM16 12h5M7 19a2 2 0 1 0 0-.1M13 19a2 2 0 1 0 0-.1",
    arrow: "M5 12h14M13 6l6 6-6 6", back: "M19 12H5M11 6l-6 6 6 6", home: "M3 11l9-8 9 8M5 10v10h14V10",
    close: "M6 6l12 12M18 6L6 18", list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    doc: "M6 2h9l5 5v15H6zM14 2v6h6M9 13h6M9 17h6", heart: "M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 6-8 11-8 11z"
  };
  const icon = (n, cls = "ico") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${ICON_PATHS[n] || ICON_PATHS.heart}"/></svg>`;

  /* ---------- small builders ---------- */
  // Content not yet supplied is hidden, never shown as a placeholder.
  const ph = () => "";
  const roleDates = l => [l.role, l.dates].filter(Boolean).map(esc).join(" · ");
  const tags = list => list && list.length ? `<ul class="tags" aria-label="Tags">${list.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : "";
  const panelFooter = (backLabel) => `<div class="panel-foot">
      <button type="button" class="btn" data-close>${icon("back")}<span>${esc(backLabel)}</span></button>
      <a class="btn alt" href="#/resume">${icon("doc")}<span>Resume</span></a>
      <a class="btn alt" href="#/contact">${icon("mail")}<span>Contact</span></a></div>`;
  const viewName = v => v === "work" ? "All Work" : (room(v) || room("exterior")).name;

  /* ---------- routing ---------- */
  const ROOM_PANELS = { "living-room": ["about", "community", "activities"], kitchen: ["outcomes", "how-i-work"], closet: ["skills"] };
  function parse() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
    const [a, b, c] = parts;
    if (!a) return { view: "exterior" };
    if (a === "work") {
      if (!b) return { view: "work" };
      const p = project(b);
      if (!p) return { view: "work" };
      return { view: currentView || p.room, panel: "project:" + b, section: c };
    }
    if (a === "resume" || a === "contact") return { view: currentView || "exterior", panel: a };
    if (room(a)) {
      if (a === "closet" && b && D.roles[b]) return { view: "closet", role: b };
      if (b && (ROOM_PANELS[a] || []).includes(b)) return { view: a, panel: a + ":" + b };
      return { view: a };
    }
    return { view: "exterior" };
  }
  const hashFor = v => v === "exterior" ? "#/" : v === "work" ? "#/work" : "#/" + v + (v === "closet" && currentRole ? "/" + currentRole : "");

  function render() {
    const r = parse();
    const viewChanged = r.view !== currentView;
    if (r.view === "closet") currentRole = r.role || (viewChanged ? null : currentRole);
    if (viewChanged) { renderView(r.view); }
    else if (r.view === "closet") updateCloset(false);
    if (r.panel) {
      openPanel(r.panel, r.section, viewChanged);
    } else {
      const wasOpen = !!panelKey;
      if (wasOpen) closePanelUI();
      if (viewChanged) focusHeading();
      else if (wasOpen) returnFocus();
    }
    updateTitle(r);
  }
  function updateTitle(r) {
    let t = viewName(r.view);
    if (r.panel) t = panelTitle(r.panel) + " · " + t;
    document.title = (r.view === "exterior" && !r.panel ? "Uche Osuji | Computer Engineering @ Rose-Hulman" : t + " | Uche Osuji");
  }
  function focusHeading() { const h = $("#view h1"); if (h) h.focus({ preventScroll: true }); window.scrollTo(0, 0); }
  function returnFocus() {
    const t = opener; opener = null;
    if (t && document.contains(t) && t.getClientRects().length) t.focus();
    else focusHeading();
  }

  /* ---------- views ---------- */
  function hotspotHTML(h) {
    const inner = `<span class="hs-dot">${icon(h.icon)}</span><span class="hs-label">${esc(h.label)}</span>`;
    const style = `left:${h.x}%;top:${h.y}%`;
    if (h.role) return `<button type="button" class="hs side-${h.side || "right"}" style="${style}" data-role="${h.role}" aria-pressed="false">${inner}</button>`;
    return `<a class="hs side-${h.side || "right"}" style="${style}" href="${h.href}">${inner}</a>`;
  }
  function spotButtonHTML(h) {
    const inner = `${icon(h.icon)}<span>${esc(h.label)}</span>${icon("arrow", "ico chev")}`;
    if (h.role) return `<li><button type="button" class="spot" data-role="${h.role}" aria-pressed="false">${inner}</button></li>`;
    return `<li><a class="spot" href="${h.href}">${inner}</a></li>`;
  }
  function sceneHTML(r) {
    const art = r.photo ? `<img class="scene-art" src="${esc(r.photo)}" alt="" width="${r.w || 1600}" height="${r.h || 1000}" decoding="async"${r.id === "exterior" ? ' fetchpriority="high"' : ""}>` : SCENES[r.id];
    return `<div class="scene-wrap"><div class="scene" role="group" aria-label="${esc(r.name)} scene">
        <div class="scene-img" role="img" aria-label="${esc(r.alt)}">${art}</div>
        ${r.id === "exterior" ? introHTML("in-scene") : ""}
        <div class="hotspots">${r.hotspots.map(hotspotHTML).join("")}</div>
      </div></div>
      <nav class="spots" aria-label="In the ${esc(r.name)}"><ul>${r.hotspots.map(spotButtonHTML).join("")}</ul></nav>`;
  }
  function introHTML(where) {
    const roles = Object.entries(D.roles).map(([k, v]) => `<li><a class="chip-link" href="#/closet/${k}">${esc(v.name)}</a></li>`).join("");
    const map = D.rooms.filter(r => r.id !== "exterior").map(r => `<li><a href="#/${r.id}">${esc(r.name)}</a></li>`).join("");
    const h = where === "in-scene" ? "h1" : "p";
    return `<div class="intro ${where}">
      <${h} class="intro-h" ${h === "h1" ? 'tabindex="-1"' : 'aria-hidden="true"'}>Hi, I'm <span class="wordmark">Uche Osuji</span>. I can be…</${h}>
      <ul class="roles" aria-label="I can be">${roles}</ul>
      <p class="intro-copy">Computer engineering student building products, solving problems, and creating community.</p>
      <p class="intro-meta">Computer Engineering @ Rose-Hulman '27</p>
      <div class="actions">
        <a class="btn" href="#/living-room">${icon("door")}<span>Enter the Dreamhouse</span></a>
        <a class="btn alt" href="#/work">${icon("list")}<span>View My Work</span></a>
        <a class="btn alt" href="#/resume">${icon("doc")}<span>Resume</span></a>
      </div>
      <p class="dl-line"><a class="text-link" href="${esc(D.person.resumePdf)}" download>Download resume (PDF)</a></p>
      <nav class="mini-map" aria-label="House map"><p>House map</p><ul>${map}</ul></nav>
    </div>`;
  }
  function renderView(v) {
    currentView = v;
    view.classList.remove("enter"); void view.offsetWidth; view.classList.add("enter");
    if (v === "work") { view.innerHTML = workHTML(); renderBar(v); return; }
    const r = room(v);
    document.body.dataset.view = v;
    if (v === "exterior") {
      view.innerHTML = `<section class="room exterior" aria-label="Exterior">${introHTML("in-flow")}${sceneHTML(r)}</section>`;
      // Only one h1: in-flow intro is shown on narrower screens, in-scene on wide ones.
      fixExteriorHeadings();
    } else {
      view.innerHTML = `<section class="room" aria-labelledby="room-title">
        <div class="room-head"><h1 id="room-title" tabindex="-1">${esc(r.name)}</h1><p class="lede">${esc(r.lede || "")}</p></div>
        ${sceneHTML(r)}
        ${v === "closet" ? `<section id="closet-result" class="closet-result" aria-live="polite"></section>` : ""}
        ${r.next ? `<p class="next-hint">${esc(r.next)} <a href="#/kitchen">Kitchen</a> · <a href="#/garage">Garage</a></p>` : ""}
      </section>`;
      if (v === "closet") updateCloset(false);
    }
    renderBar(v);
    preloadNext(v);
  }
  // The intro exists twice: inside the scene's quiet sky area on large screens, above the scene otherwise.
  // Use the in-scene card only when it actually fits inside the scene; expose only the visible copy as the h1.
  const wide = matchMedia("(min-width: 1000px)");
  function fixExteriorHeadings() {
    const ext = $(".room.exterior"), inScene = $(".intro.in-scene"), inFlow = $(".intro.in-flow");
    if (!ext || !inScene || !inFlow) return;
    const apply = useScene => {
      const [on, off] = useScene ? [inScene, inFlow] : [inFlow, inScene];
      ext.classList.toggle("flow-mode", !useScene);
      off.setAttribute("aria-hidden", "true"); off.inert = true; off.hidden = true;
      on.removeAttribute("aria-hidden"); on.inert = false; on.hidden = false;
    };
    let useScene = wide.matches;
    if (useScene) {
      apply(true);
      const scene = inScene.parentElement;
      if (inScene.offsetTop + inScene.offsetHeight > scene.clientHeight - 12) useScene = false;
    }
    apply(useScene);
    const active = document.activeElement;
    const hadFocus = active && active.classList && active.classList.contains("intro-h");
    $$(".intro-h", useScene ? inScene : inFlow).forEach(h => swapTag(h, "h1"));
    $$(".intro-h", useScene ? inFlow : inScene).forEach(h => swapTag(h, "p"));
    if (hadFocus) { const h = $("#view h1"); if (h) h.focus({ preventScroll: true }); }
  }
  let rz;
  window.addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(() => currentView === "exterior" && fixExteriorHeadings(), 120); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => currentView === "exterior" && fixExteriorHeadings());
  function swapTag(el, tag) {
    if (el.tagName.toLowerCase() === tag) return;
    const n = document.createElement(tag); n.className = el.className; n.innerHTML = el.innerHTML;
    if (tag === "h1") n.tabIndex = -1; else n.setAttribute("aria-hidden", "true");
    el.replaceWith(n);
  }

  function preloadNext(v) {
    const nxt = D.rooms[roomIdx(v) + 1];
    $$("link[data-preload]").forEach(l => l.remove());
    if (nxt && nxt.photo) { const l = document.createElement("link"); l.rel = "preload"; l.as = "image"; l.href = nxt.photo; l.dataset.preload = ""; document.head.appendChild(l); }
  }
  function renderBar(v) {
    if (v === "work") {
      bar.innerHTML = `<a class="bar-btn" href="#/">${icon("home")}<span>Back to House</span></a><span class="bar-name">All Work</span><span></span>`;
      return;
    }
    const i = roomIdx(v), prev = D.rooms[i - 1], next = D.rooms[i + 1];
    bar.innerHTML = `${v === "exterior" ? `<span></span>` : `<a class="bar-btn" href="#/">${icon("home")}<span>Back to House</span></a>`}
      <span class="bar-name" aria-current="location">${esc(room(v).name)}</span>
      <span class="bar-pn">${prev && prev.id !== "exterior" ? `<a class="bar-btn" href="#/${prev.id}" aria-label="Previous room: ${esc(prev.name)}">${icon("back")}<span class="pn-label">${esc(prev.name)}</span></a>` : ""}
      ${next ? `<a class="bar-btn" href="#/${next.id}" aria-label="Next room: ${esc(next.name)}"><span class="pn-label">${esc(next.name)}</span>${icon("arrow")}</a>` : ""}</span>`;
  }

  function workHTML() {
    const item = p => `<li class="work-item"><a href="#/work/${p.slug}"><span class="wi-title">${esc(p.title)}</span>${p.status ? ` <span class="badge">${esc(p.status)}</span>` : ""}</a>
      <p class="wi-meta">${esc(p.role)} · ${esc(p.dates)}</p><p class="wi-sum">${esc(p.summary)}</p></li>`;
    const group = g => D.projects.filter(p => p.group === g).map(item).join("");
    return `<section class="page" aria-labelledby="work-title">
      <h1 id="work-title" tabindex="-1">All Work</h1>
      <p class="page-lede">Every project and role in one plain list. Each one has its own link you can share.</p>
      <h2>Product</h2><ul class="work-list">${group("Product")}</ul>
      <h2>Engineering</h2><ul class="work-list">${group("Engineering")}</ul>
      <h2>Community and leadership</h2><ul class="work-list">${D.leadership.map(l => `<li class="work-item"><span class="wi-title">${esc(l.org)}</span><p class="wi-meta">${roleDates(l)}</p></li>`).join("")}</ul>
      <p><a class="text-link" href="#/living-room/community">Open the community gallery</a></p>
      <h2>Education</h2><ul class="work-list"><li class="work-item"><span class="wi-title">${esc(D.education.school)}</span><p class="wi-meta">${esc(D.education.degree)} · ${esc(D.education.grad)}</p></li></ul>
    </section>`;
  }

  /* ---------- closet ---------- */
  function updateCloset(announceScroll) {
    $$("[data-role]").forEach(b => { const on = b.dataset.role === currentRole; b.setAttribute("aria-pressed", on); b.classList.toggle("sel", on); });
    const out = $("#closet-result"); if (!out) return;
    const role = D.roles[currentRole];
    if (!role) { out.innerHTML = `<h2>Choose a look</h2><p>Pick Engineer, Product Builder or Community Leader to see the matching work and skills. Everything is also in <a href="#/work">All Work</a>.</p>`; return; }
    const projs = role.projects.map(project).map(p => `<li><a class="mini-card" href="#/work/${p.slug}"><span class="mc-title">${esc(p.title)}</span><span class="mc-meta">${esc(p.role)} · ${esc(p.dates)}</span></a></li>`).join("");
    const lead = role.leadership ? D.leadership.map(l => `<li><a class="mini-card" href="#/living-room/community"><span class="mc-title">${esc(l.org)}</span><span class="mc-meta">${roleDates(l)}</span></a></li>`).join("") : "";
    const skillTags = D.skills.filter(s => role.skills.includes(s.group)).map(s => `<div class="skill-group"><h4>${esc(s.group)}</h4>${tags(s.items)}</div>`).join("") +
      (role.extraSkills ? `<div class="skill-group"><h4>Used on CRWN</h4>${tags(role.extraSkills)}</div>` : "");
    const dest = room(role.room);
    out.innerHTML = `<h2>${esc(role.name)}</h2><p>${esc(role.blurb)}</p><p class="acc">Accessories: ${esc(role.accessories)}</p>
      <h3>${role.leadership ? "Leadership" : "Projects"}</h3><ul class="mini-cards">${projs || lead}</ul>
      ${skillTags ? `<h3>Skills</h3>${skillTags}` : ""}
      <a class="btn" href="#/${dest.id}">${icon("arrow")}<span>Go to the ${esc(dest.name)}</span></a>`;
    if (announceScroll) out.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
  }

  /* ---------- panels ---------- */
  const PANELS = {
    about: () => ({ room: "living-room", title: "About Uche Osuji", html: aboutHTML() }),
    community: () => ({ room: "living-room", title: "Community and leadership", html: communityHTML() }),
    activities: () => ({ room: "living-room", title: "Activities", html: activitiesHTML() }),
    outcomes: () => ({ room: "kitchen", title: "Product outcomes", html: outcomesHTML() }),
    "how-i-work": () => ({ room: "kitchen", title: "How I work", html: howHTML() }),
    skills: () => ({ room: "closet", title: "Skills", html: skillsHTML() }),
    resume: () => ({ title: "Resume", html: resumeHTML() }),
    contact: () => ({ title: "Contact", html: contactHTML() })
  };
  function panelSpec(key) {
    if (key.startsWith("project:")) { const p = project(key.slice(8)); return { room: null, title: p.title, html: projectHTML(p) }; }
    const name = key.includes(":") ? key.split(":")[1] : key;
    return PANELS[name]();
  }
  const panelTitle = key => panelSpec(key).title;

  function openPanel(key, section, viewChanged) {
    const spec = panelSpec(key);
    const where = spec.room ? room(spec.room).name : viewName(currentView);
    if (key !== panelKey) {
      pTab.textContent = `${where} / ${spec.title}`;
      pBody.innerHTML = `<h2 id="panel-title" tabindex="-1">${esc(spec.title)}</h2>${spec.html}${panelFooter("Back to " + where)}`;
      pBody.scrollTop = 0;
    }
    const first = !panelKey;
    panelKey = key;
    document.body.classList.toggle("print-panel", true);
    if (first) {
      if (!opener || !document.contains(opener)) opener = viewChanged ? null : opener;
      overlay.hidden = false; shell.inert = true; shell.setAttribute("aria-hidden", "true");
      document.documentElement.classList.add("locked");
      requestAnimationFrame(() => overlay.classList.add("open"));
    }
    if (section) {
      const s = $("#s-" + CSS.escape(section), pBody);
      if (s) { s.scrollIntoView({ block: "start" }); s.setAttribute("tabindex", "-1"); s.focus({ preventScroll: true }); return; }
    }
    $("#panel-title").focus({ preventScroll: true });
  }
  function closePanelUI() {
    panelKey = null;
    overlay.classList.remove("open"); overlay.hidden = true;
    shell.inert = false; shell.removeAttribute("aria-hidden");
    document.documentElement.classList.remove("locked");
    document.body.classList.remove("print-panel");
  }
  function requestClose() {
    if (!panelKey) return;
    history.replaceState(null, "", hashFor(currentView));
    render();
  }

  /* ---------- panel content ---------- */
  function projectHTML(p) {
    const media = m => m.img ? `<figure class="shot"><img src="${esc(m.img)}" alt="${esc(m.alt || "")}" loading="lazy" decoding="async">${m.caption ? `<figcaption>${esc(m.caption)}</figcaption>` : ""}</figure>` : "";
    const gallery = g => `<figure class="gallery"><ul class="phones">${g.gallery.map(m => `<li><img src="${esc(m.img)}" alt="${esc(m.alt)}" loading="lazy" decoding="async" width="600" height="1299"></li>`).join("")}</ul>${g.caption ? `<figcaption>${esc(g.caption)}</figcaption>` : ""}</figure>`;
    const hero = p.hero.diagram ? DIAG[p.hero.diagram] : p.hero.gallery ? gallery(p.hero) : media(p.hero);
    const sec = s => {
      const body = (s.sub ? `<p class="sub">${esc(s.sub)}</p>` : "") +
        (s.p || []).map(t => `<p>${esc(t)}</p>`).join("") +
        (s.list ? `<ul class="bullets">${s.list.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : "") +
        (s.stats ? `<ul class="stats">${s.stats.map(([n, l]) => `<li><span class="stat-n">${esc(n)}</span><span class="stat-l">${esc(l)}</span></li>`).join("")}</ul>` : "") +
        (s.evidence && s.evidence.some(e => e.img) ? `<div class="evidence">${s.evidence.map(media).join("")}</div>` : "");
      if (!body) return "";
      return `<section class="cs-sec" id="s-${esc(s.id)}"><h3>${esc(s.h)}</h3>${body}</section>`;
    };
    return `<div class="cs-top">
        <div class="cs-hero">${hero}</div>
        <p class="cs-sum">${esc(p.summary)}</p>
        <dl class="cs-meta">
          <div><dt>Organization</dt><dd>${esc(p.org || p.title)}</dd></div>
          <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
          <div><dt>Dates</dt><dd>${esc(p.dates)}${p.place ? " · " + esc(p.place) : ""}</dd></div>
          <div><dt>Outcome</dt><dd>${esc(p.outcome)}</dd></div>
        </dl>
        ${p.status ? `<p><span class="badge">${esc(p.status)}</span></p>` : ""}
        ${tags(p.tags)}
        ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
        ${p.links ? `<p class="cs-links">${p.links.map(l => `<a class="btn alt" href="${esc(l.href)}" target="_blank" rel="noopener">${icon("arrow")}<span>${esc(l.label)}</span></a>`).join(" ")}</p>` : ""}
        <p class="share">Share this project: <a href="#/work/${p.slug}">ucheosuji05.github.io/#/work/${p.slug}</a></p>
      </div>${p.sections.map(sec).join("")}`;
  }
  function aboutHTML() {
    const e = D.education;
    return `<div class="about">
      <div class="about-img"><img src="assets/people/uche-portrait.jpg" alt="Portrait of Uche Osuji smiling outdoors in a white top" width="746" height="933" decoding="async"></div>
      <div class="about-text">
        <p>Computer Engineering student at ${esc(e.school)}, graduating ${esc(e.grad)}, with minors in Geography and Spanish.</p>
        <p>I build across the stack, from embedded C/C++ firmware on commercial brewers to a full-stack mobile app I co-founded.</p>
        <ul class="facts"><li><b>GPA</b> ${esc(e.gpa)}</li><li><b>${esc(e.deans.split(":")[0])}</b> ${esc(e.deans.split(": ")[1])}</li></ul>
        <p class="small"><b>Courses:</b> ${esc(e.courses)}</p>
      </div></div>
      <h3>Outside class and work</h3><p>Women's Varsity Cheer since October 2024. <a class="text-link" href="#/living-room/community">See community and leadership</a></p>
      <p class="next-hint">Explore next: <a href="#/kitchen">the Kitchen (product studio)</a> or <a href="#/garage">the Garage (engineering)</a>.</p>`;
  }
  function communityHTML() {
    return `<p>Leadership roles and teams, each listed separately.</p>
      <ul class="lead-list">${D.leadership.map(l => `<li class="lead${l.img ? "" : " no-img"}">
        ${l.img ? `<img src="${esc(l.img)}" alt="${esc(l.alt)}" loading="lazy" decoding="async">` : ""}
        <div><h3>${esc(l.org)}</h3><p class="sub">${roleDates(l)}</p></div></li>`).join("")}</ul>
      <p>Related: at Hair Hub, Uche Osuji led the launch with a 15-person ambassador team. <a href="#/work/hair-hub">Open Hair Hub</a></p>`;
  }
  function activitiesHTML() {
    const items = [
      ["Spring 2024", "Dean's List", "Rose-Hulman"],
      ["May 2024 to May 2025", "NSBE Membership Chair", "National Society of Black Engineers"],
      ["Jun 2024 to Jun 2025", "Hair Hub, Product Manager", "Launch through partnerships, pitch competitions and a 15-person ambassador team"],
      ["Oct 2024 to Present", "Women's Varsity Cheer", "Rose-Hulman"],
      ["Dec 2024 to Present", "Chi Omega Fraternity, Recruitment and COB Chair", "Rose-Hulman"],
      ["Sep 2025 to Present", "CRWN, Co-Founder and CTO", "Secured $18,150 in non-dilutive funding through startup competitions and accelerators"],
      ["Winter and Spring 2026", "Dean's List", "Rose-Hulman"],
      ["Jun to Aug 2025", "Keurig Dr Pepper, SWE Intern, Brew Engine", "Benton Harbor, MI"],
      ["Jun to Aug 2026", "Keurig Dr Pepper, SWE Intern, Embedded Software", "Burlington, MA"],
      ["Sep 2026 to Present", "Adobe Student Ambassador", "Student Ambassador"]
    ];
    return `<ol class="timeline">${items.map(([d, t, c]) => `<li><span class="tl-date">${esc(d)}</span><span class="tl-title">${esc(t)}</span><span class="tl-note">${esc(c)}</span></li>`).join("")}</ol>`;
  }
  function outcomesHTML() {
    const notes = [
      ["100+", "users in the first 48 hours", "crwn"], ["300K+", "organic social views over eight months, zero ad spend", "crwn"], ["$18,150", "non-dilutive funding", "crwn"],
      ["12K+", "downloads within nine months", "hair-hub"], ["1M+", "social views", "hair-hub"], ["15", "person ambassador team", "hair-hub"]
    ];
    return `<p>Product results, pinned up in the kitchen. Each note opens the project's results.</p>
      <ul class="notes">${notes.map(([n, l, s], i) => `<li class="n${i % 3}"><a href="#/work/${s}/results"><span class="stat-n">${esc(n)}</span><span class="stat-l">${esc(l)}</span><span class="note-src">${esc(project(s).title)}</span></a></li>`).join("")}</ul>`;
  }
  function howHTML() {
    const steps = [
      ["Feedback", "At CRWN, feedback decided which features came first.", "crwn/decisions"],
      ["Prioritization", "User-generated content and provider profiles went first in the CRWN MVP.", "crwn/decisions"],
      ["Prototyping", "Built the CRWN mobile MVP in React Native and Expo on Supabase.", "crwn/built"],
      ["Testing", "At Keurig Dr Pepper: Tera Term over UART, Jenkins through HMI notifications, and 48+ thermal lab tests.", "keurig-dr-pepper/2026"],
      ["Iteration", "Reproduced failures and validated fixes with cross-functional teams at KDP; tuned PID live over BLE on the robot.", "keurig-dr-pepper/2025"]
    ];
    return `<p>The planning board. Each step points at real work where it happened.</p>
      <ul class="steps">${steps.map(([h, t, l], i) => `<li><h3><span class="step-n">${i + 1}</span> ${esc(h)}</h3><p>${esc(t)}</p><a class="text-link" href="#/work/${l}">See it</a></li>`).join("")}</ul>`;
  }
  function skillsHTML() {
    return `<p>Skills grouped by how they are used. Labeled tags only, no scores.</p>
      ${D.skills.map(s => `<div class="skill-group"><h3>${esc(s.group)}</h3>${tags(s.items)}</div>`).join("")}`;
  }
  function resumeHTML() {
    const e = D.education, P = D.person;
    const exp = [
      ["CRWN", "Co-Founder and CTO", "Sep 2025 to Present · Remote", ["Built a full-stack mobile MVP (React Native, Expo, JavaScript, Supabase) with hair profiles, social posts, community threads and push notifications.", "Prioritized user-generated content and provider profiles based on user and provider feedback.", "Secured $18,150 in non-dilutive funding through startup competitions and accelerators.", "100+ users in the first 48 hours and 300K+ organic social views over eight months, with zero ad spend."], "crwn"],
      ["Keurig Dr Pepper", "SWE Intern, Embedded Software", "Jun to Aug 2026 · Burlington, MA", ["Developed an end-to-end thermal cutoff fault detection and alerting feature in C/C++ for commercial brewing systems, exposing 2 previously undisplayed fault conditions with recovery guidance.", "Implemented and validated fault communication across 3 software layers, testing with Tera Term over UART and Jenkins through user-facing HMI notifications.", "Resolved 2 firmware and HMI defects (low-water notification and brew counter errors) using Jira and C/C++."], "keurig-dr-pepper"],
      ["Keurig Dr Pepper", "SWE Intern, Brew Engine", "Jun to Aug 2025 · Benton Harbor, MI", ["Built a Python GUI cycle-generation tool automating testing for 13+ beverage-cycle variants, removing waits of up to three weeks.", "Ran 48+ thermal lab tests on heating elements that informed steam quality and consistency design changes.", "Reproduced failures and validated fixes with cross-functional teams."], "keurig-dr-pepper"],
      ["Hair Hub", "Product Manager", "Jun 2024 to Jun 2025 · Remote", ["DIY hair care app for Black women: styling inspiration, tutorials, product recommendations and planning tools.", "Led the launch through partnerships, pitch competitions and a 15-person ambassador team.", "12K+ downloads in nine months and 1M+ social views."], "hair-hub"]
    ];
    const projs = ["line-following-robot", "risc-v-processor", "mp3-player"].map(project);
    return `<div class="resume-actions">
        <button type="button" class="btn" data-print>${icon("doc")}<span>Print or save as PDF</span></button>
        ${P.resumePdf ? `<a class="btn alt" href="${esc(P.resumePdf)}" download>${icon("doc")}<span>Download PDF</span></a>` : ""}
      </div>
      <p class="r-contact"><a href="mailto:${esc(P.email)}">${esc(P.email)}</a> · <a href="${esc(P.linkedin)}" target="_blank" rel="noopener">${esc(P.linkedinLabel)}</a></p>
      <p class="r-name"><b>Uche Osuji</b></p>
      <section class="r-sec"><h3>Education</h3><p><b>${esc(e.school)}</b>, ${esc(e.grad)}<br>${esc(e.degree)}<br>GPA ${esc(e.gpa)} · ${esc(e.deans)}</p><p class="small"><b>Courses:</b> ${esc(e.courses)}</p></section>
      <section class="r-sec"><h3>Experience</h3>${exp.map(([o, r, d, b, s]) => `<div class="r-item"><p><b>${esc(o)}</b>, ${esc(r)}<br><span class="sub">${esc(d)}</span></p><ul class="bullets">${b.map(x => `<li>${esc(x)}</li>`).join("")}</ul><a class="text-link no-print" href="#/work/${s}">Case study</a></div>`).join("")}</section>
      <section class="r-sec"><h3>Projects</h3>${projs.map(p => `<div class="r-item"><p><b>${esc(p.title)}</b>, ${esc(p.role)}<br><span class="sub">${esc(p.dates)}</span></p><p>${esc(p.summary)}</p><a class="text-link no-print" href="#/work/${p.slug}">Case study</a></div>`).join("")}</section>
      <section class="r-sec"><h3>Skills</h3>
        <p><b>Languages:</b> C, C++, Python, Java, JavaScript, Verilog, MATLAB</p>
        <p><b>Tools:</b> Git, Jenkins, Jira, Tera Term, ModelSim, PSpice, Figma, LabVIEW, DesignSpark, CST Studio, Ansys</p>
        <p><b>Hardware:</b> Arduino, Circuit Design, PCB Design, Breadboarding, Soldering, Oscilloscope</p>
        <p><b>Protocols:</b> UART, I2C, BLE</p></section>
      <section class="r-sec"><h3>Leadership</h3><ul class="bullets">${D.leadership.map(l => `<li><b>${esc(l.org)}</b>${l.role ? ", " + esc(l.role) : ""} (${esc(l.dates)})</li>`).join("")}</ul></section>`;
  }
  function contactHTML() {
    const P = D.person;
    return `<p>Let's build something together.</p>
      <div class="contact-actions">
        <a class="btn" href="mailto:${esc(P.email)}">${icon("mail")}<span>${esc(P.email)}</span></a>
        <a class="btn alt" href="${esc(P.linkedin)}" target="_blank" rel="noopener">${icon("arrow")}<span>LinkedIn</span></a>
      </div>`;
  }

  /* ---------- rooms menu (house map) ---------- */
  const roomsBtn = $("#rooms-btn"), roomsPop = $("#rooms-pop");
  roomsPop.innerHTML = `<p class="pop-h">House map</p><ul class="house-map">${D.rooms.map(r => `<li class="hm-${r.id}"><a href="${r.id === "exterior" ? "#/" : "#/" + r.id}">${esc(r.name)}</a></li>`).join("")}</ul>`;
  function setRooms(open, focusBack) {
    roomsBtn.setAttribute("aria-expanded", open); roomsPop.hidden = !open;
    if (open) { $$("a", roomsPop).forEach(a => a.removeAttribute("aria-current")); const cur = $(`a[href="${currentView === "exterior" ? "#/" : "#/" + currentView}"]`, roomsPop); if (cur) cur.setAttribute("aria-current", "page"); (cur || $("a", roomsPop)).focus(); }
    else if (focusBack) roomsBtn.focus();
  }
  roomsBtn.addEventListener("click", () => setRooms(roomsPop.hidden));
  roomsPop.addEventListener("click", e => { if (e.target.closest("a")) setRooms(false); });
  document.addEventListener("click", e => { if (!roomsPop.hidden && !e.target.closest(".rooms-menu")) setRooms(false); });
  roomsPop.addEventListener("focusout", e => { if (!roomsPop.hidden && e.relatedTarget && !roomsPop.contains(e.relatedTarget) && e.relatedTarget !== roomsBtn) setRooms(false); });

  /* ---------- events ---------- */
  document.addEventListener("click", e => {
    const t = e.target.closest("a[href^='#/'], button");
    if (!t) return;
    if (t.matches("[data-close]")) { requestClose(); return; }
    if (t.matches("[data-print]")) { window.print(); return; }
    if (t.matches("[data-role]")) {
      currentRole = t.dataset.role;
      history.replaceState(null, "", "#/closet/" + currentRole);
      updateCloset(true); sparkle(t); return;
    }
    // Remember the opener for focus return. Links inside an open panel keep the original opener.
    if (t.tagName === "A" && !overlay.contains(t)) opener = t;
  });
  $("#panel-close").addEventListener("click", requestClose);
  overlay.addEventListener("mousedown", e => { if (e.target === overlay) requestClose(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (!roomsPop.hidden) { e.preventDefault(); setRooms(false, true); return; }
      if (panelKey) { e.preventDefault(); requestClose(); }
      return;
    }
    if (e.key === "Tab" && panelKey) {
      const f = $$("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])", dialog).filter(el => el.getClientRects().length);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (!dialog.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
      else if (e.shiftKey && (document.activeElement === first || document.activeElement === $("#panel-title"))) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  function sparkle(el) {
    if (reduceMotion()) return;
    el.classList.remove("spark"); void el.offsetWidth; el.classList.add("spark");
    setTimeout(() => el.classList.remove("spark"), 900);
  }
  window.addEventListener("hashchange", render);
  $("#y").textContent = new Date().getFullYear();
  render();
})();
