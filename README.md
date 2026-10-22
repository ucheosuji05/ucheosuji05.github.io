# ucheosuji05.github.io

Uche Osuji's portfolio as an interactive Dreamhouse. The exterior is the homepage; the living room, kitchen, closet and garage hold her story, product case studies, career selector and engineering work. Every project also appears in a plain **All Work** list, and Resume and Contact are in the top bar of every room.

Static HTML, CSS and JS. No build step, no dependencies. GitHub Pages serves `index.html` from the root of `main` (`.nojekyll` is kept).

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Files

| File | What it holds |
|---|---|
| `index.html` | Shell: top bar, view, scene bar, panel dialog |
| `data.js` | All content, rooms, scene photos, hotspots, roles, skills, case studies |
| `scenes.js` | Simplified evidence diagrams (KDP flow, robot signal flow) |
| `app.js` | Hash router, scenes, hotspots, panels, closet selector, focus handling |
| `styles.css` | Visual system (Fredoka, DM Sans, Pacifico wordmark; palette from the brief) |
| `MISSING-ASSETS.md` | What is still outstanding and where each file goes |
| `assets/` | Scene photos, resume PDF, icons, portrait, community and project images |

## Shareable links

| Link | Opens |
|---|---|
| `#/` | Exterior (home) |
| `#/living-room`, `#/kitchen`, `#/closet`, `#/garage` | A room |
| `#/closet/engineer`, `#/closet/product`, `#/closet/community` | Closet with a look selected |
| `#/work` | All Work list |
| `#/work/crwn`, `#/work/hair-hub`, `#/work/keurig-dr-pepper`, `#/work/line-following-robot`, `#/work/risc-v-processor`, `#/work/mp3-player` | Case study |
| `#/work/<slug>/<section>` | Case study scrolled to a section, e.g. `#/work/crwn/results` |
| `#/living-room/about`, `/community`, `/activities`, `#/kitchen/outcomes`, `/how-i-work`, `#/closet/skills` | Room panels |
| `#/resume`, `#/contact` | Available from anywhere |

## Scene backgrounds

The five rooms use stills from Barbie: Life in the Dreamhouse, supplied by Uche Osuji. Each is pre-cropped to 16:10 in `assets/rooms/` (exterior, living-room, kitchen, closet, garage) and set as that room's `photo` in `data.js`, with its pixel size in `w`/`h`. Hotspot `x`/`y` are percent of the cropped image, so they stay on the same object as the scene scales. On screens under 900 px the hotspots become a list of large buttons under the image. The scenes are not Uche's artwork and the site is not affiliated with Mattel; the footer says so.

## Accessibility

- Everything works by keyboard with a visible focus ring. Panels are modal dialogs: focus is trapped inside, Escape or the close button closes them, and focus returns to the control that opened them.
- Touch targets are at least 44x44 px. On phones, each room shows the scene image followed by large labeled buttons, so nothing relies on tiny objects or hover.
- `prefers-reduced-motion` turns off the room transition and sparkles. No audio.
- Colors meet WCAG AA. Pale palette colors are used only as surfaces, never for small text.

## Content rules

Only content Uche Osuji supplied (resume, design brief, project reports and slides, photos) and her public App Store listings. No invented metrics, photos or contributions. No phone number. A section with nothing supplied yet is hidden, and the gap is listed in `MISSING-ASSETS.md`. Independent personal portfolio, not affiliated with Mattel.
