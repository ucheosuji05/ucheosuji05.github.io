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
| `data.js` | All content (resume-based), rooms, hotspots, roles, skills, case studies |
| `scenes.js` | Original SVG room illustrations and simplified evidence diagrams |
| `app.js` | Hash router, scenes, hotspots, panels, closet selector, focus handling |
| `styles.css` | Visual system (Fredoka, DM Sans, Pacifico wordmark; palette from the brief) |
| `MISSING-ASSETS.md` | Every placeholder and the files it expects |

## Shareable links

| Link | Opens |
|---|---|
| `#/` | Exterior (home) |
| `#/living-room`, `#/kitchen`, `#/closet`, `#/garage` | A room |
| `#/closet/engineer`, `#/closet/product`, `#/closet/community` | Closet with a look selected |
| `#/work` | All Work list |
| `#/work/crwn`, `#/work/hair-hub`, `#/work/keurig-dr-pepper`, `#/work/line-following-robot`, `#/work/risc-v-processor`, `#/work/mp3-player`, `#/work/trailer-system` | Case study |
| `#/work/<slug>/<section>` | Case study scrolled to a section, e.g. `#/work/crwn/results` |
| `#/living-room/about`, `/community`, `/activities`, `#/kitchen/outcomes`, `/how-i-work`, `#/closet/skills` | Room panels |
| `#/resume`, `#/contact` | Available from anywhere |

## Room photos

Scenes are illustrations until Uche's photos arrive. Expected files (16:10, 1600x1000 or larger):

- `assets/rooms/exterior.jpg`
- `assets/rooms/living-room.jpg`
- `assets/rooms/kitchen.jpg`
- `assets/rooms/closet.jpg`
- `assets/rooms/garage.jpg`

Add the file, then set that room's `photo` in `data.js`. Hotspots are stored as percent of the image, so they do not move when the photo replaces the illustration. Only the next room's photo is preloaded. Details are in `MISSING-ASSETS.md`.

## Accessibility

- Everything works by keyboard with a visible focus ring. Panels are modal dialogs: focus is trapped inside, Escape or the close button closes them, and focus returns to the control that opened them.
- Touch targets are at least 44x44 px. On phones, each room shows the scene image followed by large labeled buttons, so nothing relies on tiny objects or hover.
- `prefers-reduced-motion` turns off the room transition and sparkles. No audio.
- Colors meet WCAG AA. Pale palette colors are used only as surfaces, never for small text.

## Content rules

Only resume content and what was already on the site. No invented metrics, photos or contributions. No phone number. Missing evidence is a marked placeholder listed in `MISSING-ASSETS.md`. Original illustrations only; not affiliated with any toy brand.
