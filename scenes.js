/* Original illustrated scenes (SVG, 1600x1000 = 16:10). Placeholders for Uche's real room photos.
   Hotspot coordinates in data.js are percent of this canvas, so a 16:10 photo drops in without moving them. */
(function () {
  const W = 1600, H = 1000;
  const svg = (id, body, defs) => `<svg class="scene-art" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false"><defs>${defs || ""}</defs>${body}</svg>`;
  const lg = (id, a, b, vertical = true) => `<linearGradient id="${id}" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
  const spark = (x, y, s = 1, c = "#fff") => `<path transform="translate(${x} ${y}) scale(${s})" d="M0-18 4-4 18 0 4 4 0 18-4 4-18 0-4-4z" fill="${c}"/>`;
  const shadow = `<filter id="sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#30152E" flood-opacity=".18"/></filter>`;

  const exterior = svg("ex", `
    <rect width="1600" height="1000" fill="url(#exSky)"/>
    <circle cx="1380" cy="150" r="70" fill="#FFF9F4" opacity=".9"/><circle cx="1380" cy="150" r="110" fill="#FFF9F4" opacity=".25"/>
    <g fill="#fff" opacity=".85"><ellipse cx="300" cy="170" rx="120" ry="34"/><ellipse cx="380" cy="150" rx="80" ry="40"/><ellipse cx="1050" cy="110" rx="110" ry="28"/><ellipse cx="1120" cy="96" rx="60" ry="30"/></g>
    ${spark(620, 120, 1.2)}${spark(760, 260, .8)}${spark(140, 330, .9)}${spark(1530, 300, .7)}
    <path d="M0 720 Q400 650 800 700 T1600 690 V1000 H0z" fill="#CDEFD8"/>
    <path d="M0 780 Q500 730 1000 770 T1600 760 V1000 H0z" fill="#B8E6C6"/>
    <g filter="url(#sh)">
      <ellipse cx="380" cy="905" rx="300" ry="62" fill="#fff"/>
      <ellipse cx="380" cy="902" rx="276" ry="50" fill="url(#exPool)"/>
      <path d="M200 900q40-14 80 0t80 0 80 0 80 0" stroke="#fff" stroke-width="6" fill="none" opacity=".7" stroke-linecap="round"/>
    </g>
    <g>
      <rect x="1700" y="0" width="1" height="1"/>
      <path d="M690 860 q-6-200 18-330" stroke="#8A5A44" stroke-width="18" fill="none" stroke-linecap="round"/>
      <g fill="#5DBB8A"><path d="M708 530q-90-20-150 40 80-10 150-30z"/><path d="M708 530q90-30 150 30-80-12-150-25z"/><path d="M708 530q-40-80-130-90 60 40 125 95z"/><path d="M708 530q50-80 140-80-70 30-135 85z"/></g>
    </g>
    <g filter="url(#sh)">
      <rect x="860" y="400" width="660" height="460" rx="18" fill="#F7A8CF"/>
      <rect x="860" y="400" width="660" height="40" rx="12" fill="#fff" opacity=".35"/>
      <rect x="830" y="356" width="720" height="50" rx="16" fill="#D60073"/>
      <rect x="830" y="356" width="720" height="14" rx="7" fill="#fff" opacity=".3"/>
      <rect x="840" y="610" width="700" height="26" rx="10" fill="#fff"/>
      <g fill="#fff">${[0,1,2,3,4,5,6,7,8,9,10,11].map(i => `<rect x="${852 + i * 58}" y="560" width="10" height="56" rx="5"/>`).join("")}</g>
      <rect x="846" y="552" width="688" height="14" rx="7" fill="#fff"/>
      <g>${[910, 1150, 1330].map(x => `<rect x="${x}" y="440" width="${x === 1150 ? 140 : 150}" height="104" rx="14" fill="url(#exGlass)" stroke="#fff" stroke-width="8"/><path d="M${x + 20} 530 l50-74" stroke="#fff" stroke-width="10" opacity=".55" stroke-linecap="round"/>`).join("")}</g>
      <g>${[900, 1260].map(x => `<rect x="${x}" y="676" width="160" height="120" rx="60" fill="url(#exGlass)" stroke="#fff" stroke-width="8"/><path d="M${x + 30} 780 l60-80" stroke="#fff" stroke-width="10" opacity=".5" stroke-linecap="round"/>`).join("")}</g>
      <path d="M1076 860 V700 a52 52 0 0 1 104 0 V860z" fill="#fff"/>
      <path d="M1086 860 V704 a42 42 0 0 1 84 0 V860z" fill="#D60073"/>
      <path d="M1100 720 a28 28 0 0 1 56 0" fill="none" stroke="#fff" stroke-width="5" opacity=".6"/>
      <circle cx="1154" cy="790" r="7" fill="#FFF9F4"/>
      ${spark(1128, 650, .9, "#FFF9F4")}
      <rect x="1050" y="856" width="156" height="16" rx="6" fill="#fff"/><rect x="1030" y="870" width="196" height="16" rx="6" fill="#FCE4F0"/>
    </g>
    <path d="M1060 886 Q1000 940 980 1000 H1260 Q1230 940 1196 886z" fill="#FFF9F4" opacity=".9"/>
    <g filter="url(#sh)" transform="translate(20 0)">
      <rect x="794" y="800" width="12" height="110" rx="4" fill="#fff"/>
      <path d="M760 770 h80 v52 h-80z" fill="#D60073"/><path d="M760 770 a40 30 0 0 1 80 0z" fill="#E8359A"/>
      <rect x="836" y="742" width="8" height="40" fill="#30152E"/><rect x="836" y="742" width="26" height="14" fill="#9FE7E5"/>
    </g>
    <g fill="#E8359A">${[[900,880],[960,900],[1300,890],[1360,870],[1440,895]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="22"/><circle cx="${x + 26}" cy="${y + 4}" r="18" fill="#D9C4F2"/>`).join("")}</g>
  `, lg("exSky", "#D9C4F2", "#FCE4F0") + lg("exPool", "#9FE7E5", "#5CCFD0") + lg("exGlass", "#BFF3F1", "#7FD6E0") + shadow);

  const living = svg("lr", `
    <rect width="1600" height="720" fill="url(#lrWall)"/>
    <rect y="600" width="1600" height="120" fill="#F6CFE2"/><rect y="596" width="1600" height="10" fill="#fff"/>
    <rect y="720" width="1600" height="280" fill="url(#lrFloor)"/>
    <g stroke="#E8C3A8" stroke-width="3">${[0,1,2,3,4,5,6,7].map(i => `<line x1="${i * 230}" y1="720" x2="${i * 230 - 120}" y2="1000"/>`).join("")}</g>
    <ellipse cx="780" cy="880" rx="560" ry="90" fill="#D9C4F2" opacity=".75"/>
    <g filter="url(#sh)">
      <rect x="110" y="210" width="280" height="250" rx="16" fill="#C99A6E"/><rect x="126" y="226" width="248" height="218" rx="10" fill="#E6C29C"/>
      <rect x="146" y="250" width="90" height="70" rx="6" fill="#fff" transform="rotate(-4 191 285)"/><rect x="250" y="246" width="100" height="60" rx="6" fill="#9FE7E5" transform="rotate(5 300 276)"/>
      <rect x="160" y="340" width="80" height="80" rx="6" fill="#FCE4F0" transform="rotate(3 200 380)"/><rect x="262" y="330" width="90" height="90" rx="6" fill="#D9C4F2" transform="rotate(-3 307 375)"/>
      ${[[190,252],[300,250],[200,344],[306,334]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="#D60073"/>`).join("")}
    </g>
    <g filter="url(#sh)">
      <rect x="640" y="150" width="270" height="200" rx="14" fill="#fff"/><rect x="660" y="170" width="230" height="160" rx="8" fill="url(#lrArt)"/>
      <path d="M775 290 c-50-30-60-70-30-80 15-5 25 5 30 15 5-10 15-20 30-15 30 10 20 50-30 80z" fill="#fff" opacity=".85"/>
    </g>
    <g filter="url(#sh)">
      <rect x="1140" y="290" width="320" height="210" rx="18" fill="#30152E"/><rect x="1154" y="304" width="292" height="182" rx="10" fill="url(#lrTv)"/>
      <g fill="#fff" opacity=".9"><circle cx="1240" cy="380" r="26"/><circle cx="1300" cy="370" r="26"/><circle cx="1360" cy="380" r="26"/><rect x="1210" y="420" width="180" height="16" rx="8"/></g>
      <rect x="1100" y="560" width="400" height="120" rx="18" fill="#FFF9F4"/><rect x="1120" y="590" width="170" height="70" rx="10" fill="#D9C4F2"/><rect x="1310" y="590" width="170" height="70" rx="10" fill="#D9C4F2"/>
      <rect x="1290" y="500" width="20" height="60" fill="#30152E"/>
    </g>
    <g filter="url(#sh)">
      <rect x="470" y="470" width="620" height="230" rx="60" fill="#E8359A"/>
      <rect x="430" y="560" width="700" height="190" rx="50" fill="#D60073"/>
      <rect x="500" y="580" width="270" height="110" rx="34" fill="#F7A8CF"/><rect x="790" y="580" width="270" height="110" rx="34" fill="#F7A8CF"/>
      <rect x="510" y="586" width="250" height="26" rx="13" fill="#fff" opacity=".3"/><rect x="800" y="586" width="250" height="26" rx="13" fill="#fff" opacity=".3"/>
      <rect x="400" y="560" width="90" height="190" rx="40" fill="#E8359A"/><rect x="1070" y="560" width="90" height="190" rx="40" fill="#E8359A"/>
      <circle cx="560" cy="530" r="44" fill="#9FE7E5"/><circle cx="1000" cy="530" r="44" fill="#D9C4F2"/>
    </g>
    <g filter="url(#sh)">
      <ellipse cx="760" cy="830" rx="190" ry="34" fill="#fff"/><rect x="580" y="800" width="360" height="30" rx="15" fill="#FFF9F4"/>
      <rect x="700" y="770" width="120" height="44" rx="6" fill="#D60073" transform="rotate(-6 760 792)"/><rect x="706" y="764" width="108" height="10" rx="4" fill="#fff" transform="rotate(-6 760 792)"/>
      ${spark(760, 788, .7)}
    </g>
    <g filter="url(#sh)"><rect x="1500" y="560" width="10" height="1" fill="none"/>
      <rect x="40" y="680" width="80" height="90" rx="20" fill="#FFF9F4"/>
      <g fill="#5DBB8A"><ellipse cx="60" cy="620" rx="22" ry="60" transform="rotate(-20 60 620)"/><ellipse cx="100" cy="610" rx="22" ry="66" transform="rotate(18 100 610)"/><ellipse cx="80" cy="600" rx="18" ry="70"/></g>
    </g>
    ${spark(560, 120, .8, "#fff")}${spark(1000, 90, .6, "#fff")}${spark(1520, 180, .7, "#fff")}
  `, lg("lrWall", "#FFF9F4", "#FCE4F0") + lg("lrFloor", "#F6DCC8", "#EBC4A8") + lg("lrArt", "#9FE7E5", "#D9C4F2", false) + lg("lrTv", "#D9C4F2", "#F7A8CF", false) + shadow);

  const kitchen = svg("kt", `
    <rect width="1600" height="1000" fill="#FFF9F4"/>
    <rect y="0" width="1600" height="620" fill="url(#ktWall)"/>
    <g fill="#9FE7E5" opacity=".55">${Array.from({ length: 13 }, (_, i) => Array.from({ length: 3 }, (_, j) => `<rect x="${380 + i * 56}" y="${390 + j * 50}" width="50" height="44" rx="8"/>`).join("")).join("")}</g>
    <g filter="url(#sh)">
      ${[400, 580, 760, 940].map(x => `<rect x="${x}" y="120" width="160" height="210" rx="16" fill="#D9C4F2"/><rect x="${x + 14}" y="134" width="132" height="182" rx="10" fill="#E5D6F7"/><circle cx="${x + 134}" cy="225" r="7" fill="#D60073"/>`).join("")}
      <rect x="380" y="540" width="760" height="40" rx="10" fill="#fff"/><rect x="380" y="572" width="760" height="70" fill="#D9C4F2"/>
    </g>
    <rect y="640" width="1600" height="360" fill="url(#ktFloor)"/>
    <g opacity=".5" fill="#fff">${Array.from({ length: 9 }, (_, i) => `<rect x="${i * 200 + ((i % 2) * 0)}" y="${i % 2 ? 720 : 840}" width="180" height="90" rx="6"/>`).join("")}</g>
    <g filter="url(#sh)">
      <rect x="1180" y="130" width="280" height="250" rx="14" fill="#fff"/><rect x="1196" y="146" width="248" height="218" rx="8" fill="#FCE4F0"/>
      ${[[1216,170,"#9FE7E5"],[1310,170,"#D9C4F2"],[1216,262,"#F7A8CF"],[1310,262,"#fff"]].map(([x, y, c]) => `<rect x="${x}" y="${y}" width="80" height="80" rx="6" fill="${c}"/>`).join("")}
      <path d="M1400 180 v150" stroke="#D60073" stroke-width="6" stroke-dasharray="14 10" stroke-linecap="round"/>
    </g>
    <g filter="url(#sh)">
      <rect x="70" y="160" width="280" height="720" rx="36" fill="#F7A8CF"/><rect x="70" y="160" width="280" height="250" rx="36" fill="#E8359A"/>
      <rect x="86" y="420" width="248" height="8" fill="#fff" opacity=".6"/>
      <rect x="310" y="230" width="14" height="110" rx="7" fill="#fff"/><rect x="310" y="470" width="14" height="160" rx="7" fill="#fff"/>
      <rect x="110" y="210" width="80" height="70" rx="6" fill="#FFF9F4" transform="rotate(-5 150 245)"/><rect x="200" y="230" width="80" height="70" rx="6" fill="#9FE7E5" transform="rotate(4 240 265)"/>
      <rect x="120" y="300" width="80" height="70" rx="6" fill="#D9C4F2" transform="rotate(3 160 335)"/><rect x="210" y="320" width="76" height="60" rx="6" fill="#FFF9F4" transform="rotate(-4 248 350)"/>
      <circle cx="150" cy="214" r="9" fill="#D60073"/><circle cx="240" cy="234" r="9" fill="#30152E"/>
    </g>
    <g filter="url(#sh)">
      <rect x="440" y="590" width="760" height="40" rx="14" fill="#fff"/><rect x="460" y="626" width="720" height="250" rx="20" fill="#D60073"/>
      <rect x="480" y="650" width="330" height="200" rx="14" fill="#E8359A"/><rect x="830" y="650" width="330" height="200" rx="14" fill="#E8359A"/>
      <rect x="610" y="470" width="96" height="124" rx="12" fill="#30152E" transform="rotate(-8 658 532)"/><rect x="620" y="482" width="76" height="98" rx="6" fill="url(#ktScreen)" transform="rotate(-8 658 532)"/>
      <path d="M960 590 l100-30 l40 30z" fill="#fff"/><rect x="950" y="556" width="160" height="40" rx="6" fill="#9FE7E5" transform="rotate(-6 1030 576)"/><rect x="956" y="548" width="148" height="12" rx="4" fill="#fff" transform="rotate(-6 1030 576)"/>
      <rect x="820" y="540" width="70" height="54" rx="12" fill="#D9C4F2"/><circle cx="840" cy="536" r="14" fill="#F7A8CF"/><circle cx="866" cy="530" r="14" fill="#E8359A"/>
    </g>
    <g stroke="#30152E" stroke-width="4">${[620, 1000].map(x => `<line x1="${x}" y1="0" x2="${x}" y2="70"/>`).join("")}</g>
    <g fill="#D60073">${[620, 1000].map(x => `<path d="M${x - 50} 110 a50 40 0 0 1 100 0z"/><circle cx="${x}" cy="114" r="10" fill="#FFF9F4"/>`).join("")}</g>
    ${spark(1520, 480, .7, "#D9C4F2")}${spark(1560, 600, .5, "#F7A8CF")}
  `, lg("ktWall", "#FCE4F0", "#FFF9F4") + lg("ktFloor", "#F3E3F7", "#E2CDEF") + lg("ktScreen", "#9FE7E5", "#F7A8CF") + shadow);

  const outfit = (cx, dress, accent) => `
    <path d="M${cx} 190 v22 m-50 18 l50-18 l50 18" stroke="#30152E" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M${cx - 50} 236 q50 24 100 0 l16 120 q60 160 70 290 h-272 q10-130 70-290z" fill="${dress}"/>
    <path d="M${cx - 50} 236 q50 24 100 0 l6 50 q-56 22-112 0z" fill="#fff" opacity=".35"/>
    <rect x="${cx - 110}" y="470" width="220" height="12" rx="6" fill="${accent}" opacity=".9"/>`;
  const closet = svg("cl", `
    <rect width="1600" height="1000" fill="url(#clWall)"/>
    <rect y="780" width="1600" height="220" fill="url(#clFloor)"/>
    <ellipse cx="800" cy="900" rx="520" ry="70" fill="#FCE4F0"/>
    <g filter="url(#sh)">
      ${[352, 800, 1248].map(cx => `<path d="M${cx - 190} 790 V280 a190 190 0 0 1 380 0 V790z" fill="#fff"/><path d="M${cx - 170} 780 V284 a170 170 0 0 1 340 0 V780z" fill="#FFF9F4"/><rect x="${cx - 160}" y="160" width="320" height="10" rx="5" fill="#C9B4E6"/>`).join("")}
    </g>
    <g stroke="#C9B4E6" stroke-width="8" stroke-linecap="round">${[352, 800, 1248].map(cx => `<line x1="${cx - 140}" y1="190" x2="${cx + 140}" y2="190"/>`).join("")}</g>
    ${outfit(352, "#9FE7E5", "#30152E")}${outfit(800, "#D60073", "#FFF9F4")}${outfit(1248, "#D9C4F2", "#D60073")}
    <g filter="url(#sh)">
      ${[352, 800, 1248].map(cx => `<rect x="${cx - 160}" y="680" width="320" height="22" rx="8" fill="#E8D9F7"/>`).join("")}
      <rect x="220" y="636" width="90" height="48" rx="6" fill="#30152E"/><rect x="228" y="642" width="74" height="34" rx="4" fill="#9FE7E5"/>
      <rect x="330" y="640" width="70" height="44" rx="6" fill="#5DBB8A"/><g fill="#FFF9F4"><rect x="342" y="652" width="10" height="10"/><rect x="362" y="652" width="10" height="10"/><rect x="382" y="652" width="10" height="10"/></g>
      <rect x="420" y="620" width="16" height="64" rx="6" fill="#8A5A44" transform="rotate(20 428 652)"/>
      <rect x="690" y="620" width="70" height="64" rx="10" fill="#30152E"/><rect x="698" y="628" width="54" height="48" rx="6" fill="#F7A8CF"/>
      <rect x="780" y="636" width="90" height="48" rx="4" fill="#fff" stroke="#D9C4F2" stroke-width="4"/><path d="M792 664 q20-20 40 0 t30 0" stroke="#D60073" stroke-width="4" fill="none"/>
      <rect x="880" y="628" width="50" height="56" rx="6" fill="#9FE7E5"/>
      <rect x="1140" y="626" width="70" height="58" rx="10" fill="#D60073"/><circle cx="1175" cy="652" r="16" fill="#FFF9F4"/><circle cx="1175" cy="652" r="8" fill="#30152E"/>
      <rect x="1230" y="636" width="60" height="48" rx="6" fill="#fff" stroke="#D60073" stroke-width="4"/><rect x="1300" y="630" width="70" height="54" rx="6" fill="#F7A8CF"/><path d="M1240 650 h40" stroke="#D60073" stroke-width="4"/>
    </g>
    <g filter="url(#sh)">
      <ellipse cx="800" cy="930" rx="170" ry="34" fill="#D60073"/><rect x="630" y="880" width="340" height="56" rx="28" fill="#E8359A"/>
      <rect x="720" y="830" width="160" height="70" rx="14" fill="#FFF9F4"/><rect x="712" y="818" width="176" height="26" rx="10" fill="#D9C4F2"/>
      <circle cx="770" cy="866" r="10" fill="#9FE7E5"/><circle cx="800" cy="870" r="10" fill="#D60073"/><circle cx="830" cy="866" r="10" fill="#D9C4F2"/>
    </g>
    ${spark(150, 120, .9, "#fff")}${spark(1460, 110, .8, "#fff")}${spark(580, 90, .6, "#fff")}${spark(1030, 80, .6, "#fff")}
  `, lg("clWall", "#D9C4F2", "#F3E8FB") + lg("clFloor", "#FFF9F4", "#F5E6EE") + shadow);

  const garage = svg("gr", `
    <rect width="1600" height="1000" fill="url(#grWall)"/>
    <g fill="#fff" opacity=".35">${Array.from({ length: 6 }, (_, i) => `<rect x="0" y="${i * 18}" width="1600" height="8"/>`).join("")}</g>
    <rect y="740" width="1600" height="260" fill="url(#grFloor)"/>
    <g filter="url(#sh)">
      <rect x="380" y="150" width="760" height="380" rx="16" fill="#FFF9F4"/>
      <g fill="#D9C4F2">${Array.from({ length: 18 }, (_, i) => Array.from({ length: 8 }, (_, j) => `<circle cx="${410 + i * 41}" cy="${178 + j * 44}" r="5"/>`).join("")).join("")}</g>
      <path d="M460 200 v120 m-24-120 h48" stroke="#30152E" stroke-width="10" stroke-linecap="round"/>
      <path d="M560 200 l40 110" stroke="#D60073" stroke-width="12" stroke-linecap="round"/><circle cx="556" cy="194" r="20" fill="none" stroke="#D60073" stroke-width="10"/>
      <rect x="1000" y="200" width="90" height="56" rx="10" fill="#9FE7E5"/><path d="M1020 228 h50" stroke="#30152E" stroke-width="6"/>
      <rect x="790" y="360" width="180" height="140" rx="10" fill="#2E8B6A"/><g stroke="#B9F1D4" stroke-width="4" fill="none"><path d="M810 390 h50 v40 h60"/><path d="M810 470 h80 v-30 h60"/></g>
      <rect x="850" y="400" width="54" height="54" rx="4" fill="#30152E"/><g fill="#E6C29C">${[0,1,2,3].map(i => `<circle cx="${820 + i * 40}" cy="${485}" r="6"/>`).join("")}</g>
    </g>
    <g filter="url(#sh)">
      <rect x="40" y="660" width="1520" height="40" rx="10" fill="#C99A6E"/><rect x="40" y="660" width="1520" height="12" rx="6" fill="#E6C29C"/>
      <rect x="80" y="700" width="30" height="220" fill="#A7774F"/><rect x="1490" y="700" width="30" height="220" fill="#A7774F"/><rect x="760" y="700" width="30" height="220" fill="#A7774F"/>
    </g>
    <g filter="url(#sh)">
      <rect x="130" y="380" width="160" height="280" rx="22" fill="#D60073"/><rect x="150" y="400" width="120" height="70" rx="10" fill="#30152E"/><rect x="160" y="410" width="100" height="18" rx="4" fill="#9FE7E5"/>
      <rect x="170" y="540" width="80" height="80" rx="10" fill="#FFF9F4"/><rect x="186" y="560" width="48" height="56" rx="6" fill="#F7A8CF"/>
      <path d="M300 660 l20-80 h130 l20 80z" fill="#30152E"/><rect x="320" y="520" width="130" height="64" rx="6" fill="#30152E"/><rect x="328" y="528" width="114" height="48" rx="4" fill="#9FE7E5"/>
      <path d="M338 560 l20-14 20 10 22-20 30 18" stroke="#30152E" stroke-width="4" fill="none"/>
    </g>
    <g filter="url(#sh)">
      <rect x="500" y="560" width="160" height="86" rx="20" fill="#9FE7E5"/><rect x="520" y="520" width="100" height="50" rx="12" fill="#30152E"/><circle cx="550" cy="544" r="12" fill="#F7A8CF"/><circle cx="590" cy="544" r="12" fill="#F7A8CF"/>
      <circle cx="530" cy="648" r="22" fill="#30152E"/><circle cx="630" cy="648" r="22" fill="#30152E"/><circle cx="530" cy="648" r="9" fill="#D9C4F2"/><circle cx="630" cy="648" r="9" fill="#D9C4F2"/>
      <rect x="566" y="490" width="8" height="30" fill="#30152E"/><circle cx="570" cy="486" r="8" fill="#D60073"/>
    </g>
    <g filter="url(#sh)">
      <rect x="1060" y="574" width="120" height="86" rx="16" fill="#D9C4F2"/><circle cx="1120" cy="626" r="24" fill="#FFF9F4"/><circle cx="1120" cy="626" r="10" fill="#D60073"/><rect x="1080" y="586" width="80" height="16" rx="4" fill="#30152E"/>
      <path d="M1190 600 q20 -20 0 -44 M1210 610 q34 -34 0 -72" stroke="#D60073" stroke-width="6" fill="none" stroke-linecap="round"/>
    </g>
    <g filter="url(#sh)">
      <rect x="1290" y="300" width="210" height="140" rx="12" fill="#30152E"/><rect x="1302" y="312" width="186" height="116" rx="6" fill="#FCE4F0"/>
      <g fill="#D60073"><rect x="1320" y="330" width="50" height="30" rx="4"/><rect x="1420" y="380" width="50" height="30" rx="4"/></g><path d="M1370 345 q30 0 50 50" stroke="#30152E" stroke-width="4" fill="none" stroke-dasharray="8 6"/>
      <rect x="1385" y="440" width="20" height="40" fill="#30152E"/><rect x="1350" y="478" width="90" height="12" rx="4" fill="#30152E"/>
      <rect x="1300" y="586" width="170" height="60" rx="10" fill="#FFF9F4" stroke="#D60073" stroke-width="5"/><rect x="1250" y="606" width="56" height="10" rx="4" fill="#30152E"/>
      <circle cx="1350" cy="650" r="14" fill="#30152E"/><circle cx="1420" cy="650" r="14" fill="#30152E"/>
    </g>
    ${spark(1540, 120, .7, "#fff")}${spark(240, 120, .8, "#fff")}
  `, lg("grWall", "#EDE3F5", "#F8EEF6") + lg("grFloor", "#D8D0DF", "#C6BCCF") + shadow);

  window.DH_SCENES = { exterior, "living-room": living, kitchen, closet, garage };

  /* Simplified evidence diagrams. Each restates resume text only; captions say so. */
  const flow = (steps, caption) => `<figure class="diagram"><ol class="flow">${steps.map(st => { const [a, b] = st.split("|"); return `<li><b>${a}</b><span>${b}</span></li>`; }).join("")}</ol><figcaption>${caption}</figcaption></figure>`;
  window.DH_DIAGRAMS = {
    kdp: flow(["Thermal cutoff|fault detected (C/C++)", "3 software|layers", "HMI alert|with recovery guidance", "Tested|UART + Jenkins"], "Simplified flow of the 2026 fault alerting work, drawn from resume text. Not an internal diagram."),
    robot: flow(["HuskyLens|line data", "I2C", "ESP32|PID in C/C++", "50 Hz PWM|servo and ESC"], "Simplified signal flow from resume text. A BLE link to the ESP32 gives live PID tuning and telemetry."),
    riscv: flow(["IF|fetch", "ID|decode", "EX|execute", "MEM|memory", "WB|write back"], "Generic 5-stage pipeline for reference. Not Uche's actual datapath diagram (placeholder below)."),
    mp3: flow(["MSP432|timers + interrupts", "PWM|audio out", "NPN|driver", "Speaker|0.1% on scope"], "Simplified signal path from resume text.")
  };
})();
