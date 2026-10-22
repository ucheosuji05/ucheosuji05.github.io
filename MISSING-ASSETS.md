# Still outstanding

Updated October 21 2026. Nothing on the site is invented. A section with nothing supplied yet is **hidden**, not shown as a placeholder. Each item below lists what to send and where it goes.

## 1. Logo

- The header uses the afro-puff silhouette with a pink bow that Uche Osuji supplied (`logo-silhouette.png`), keyed to transparent, next to the name "Uche Osuji". The same mark is the favicon and Apple touch icon (`favicon.ico`, `assets/icons/`).
- **Still needed:** the clean, licensed original as a transparent PNG or SVG, plus a small icon version. The supplied file carries a stock-site watermark ("svgs...") across the neck. It was not edited out. It cannot be seen at header or favicon sizes, but it shows faintly at large sizes, so no large version of the mark is published.

## 2. Scene backgrounds (higher resolution)

All five rooms use the supplied stills from Barbie: Life in the Dreamhouse, cropped to 16:10 in `assets/rooms/`. They are low resolution and look soft on a 1440 px desktop. Uncropped originals at 1920 px wide or more would fix that.

The kitchen and living room are conventional upscales of the small stills (light denoise, Lanczos resampling and a mild unsharp mask; no AI or generative upscaling, so no detail was added). This smooths the blockiness a little but cannot add real detail; a true higher-resolution still would still be better. The original crops `kitchen.jpg` and `living-room.jpg` are kept beside them.

| Room | File used | Supplied size | Cropped to |
|---|---|---|---|
| Exterior | `exterior.jpg` | 1199x672 (12 px black bar on the right) | 1075x672 |
| Living room | `living-room-b-sofa.jpg` | 600x450 | 600x375, upscaled to 1920x1200 (`living-room-1920.jpg`) |
| Kitchen | `kitchen.jpg` | 529x301 | 482x301, upscaled to 1920x1199 (`kitchen-1920.jpg`, still the softest) |
| Closet | `closet-a-zebra-rug.jpg` | 1200x718 | 1149x718 |
| Garage | `garage-b-car.jpg` | 992x828 | 992x620 |

Alternates not used: `living-room-a-staircase.jpg` (735x476), `closet-b-runway.jpg` (736x428), `garage-a-doors.jpg` (730x398).

To swap a scene: crop it to 16:10, save it over the file in `assets/rooms/`, update `w`/`h` in `data.js`, and check each hotspot's `x`/`y` (percent of the image).

## 3. Living room

- **Photo album:** a personal photo, a Rose-Hulman photo, and a friends or family photo, each with a short caption (`assets/album/1.jpg` to `3.jpg`). The portrait is in (`assets/people/uche-portrait.jpg`).
- **About note:** in Uche Osuji's words, why engineering, product building and community matter to her, plus up to three interests. Only varsity cheer is listed for now.
- **Leadership:** an Adobe Student Ambassador photo (the brief has only the Adobe logo, which is not used). For each of NSBE, Adobe, Chi Omega and cheer: one action she took and one concrete example or result.
- **Activities board:** 3 to 5 events with name, month and year, and what she did. The board shows only resume roles and dates for now.

## 4. Product case studies (Kitchen)

App Store screenshots and links are in for both products.

**CRWN:** a two-sentence problem statement and one research finding or anonymized feedback example; one prioritization story (feedback, change, why, what was deferred); a before and after screen or flow; what she learned and would improve. Hidden until supplied: What I learned.

**Hair Hub:** team size and who owned what; one feature decision for the first release; a short reflection. Hidden until supplied: Decisions and tradeoffs, What I learned.

**How I work:** her own description of how she works and one real example that connects the five steps.

## 5. Engineering (Garage)

- **Keurig Dr Pepper:** her approach and a short reflection for each internship. A photo from summer 2026 and the stated challenge are in.
- **Line following robot:** a short demo video and a telemetry or tuning screenshot; one tuning challenge; a reflection. The poster photo and team are in.
- **RISC-V processor:** a simulation waveform; teammates' full names and roles if she wants them shown (the slides give first names only); a reflection. The team datapath, addieq RTL, test program and benchmark result are in.
- **MP3 player:** a reflection. The photo, schematic, flowchart, scope captures, controls and measured results are in, all from the final report.
- **Wireless trailer system:** hidden. It is not on the resume and the brief has no details for it. The junior design repo (Rose-Hulman-ECE-Junior-Design/junior-design-project-team09-fklo) is private, so it could not be checked. The Team 09 poster in the brief (Alex Freel, Sristi Kamra, Charlie Landis, Uche Osuji) is for an autonomous line following vehicle, which suggests that repo is the line following project, not a trailer. If a trailer project exists, send its role, dates, team, problem, a system diagram, and what is completed versus proposed.

## 6. To confirm

- **Robot project name:** the resume says "Vision Guided Line Following Robot, Embedded Systems Project". The poster says "Autonomous Line Following Vehicle with Capacitor Based Energy Storage". The site uses the resume title and quotes the poster title in the photo caption.
- **Contact:** preferred email and exact LinkedIn URL. The site uses osujiun@rose-hulman.edu and linkedin.com/in/uchechiosuji from the resume.
