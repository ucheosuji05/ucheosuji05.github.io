# Missing assets

Everything below shows on the site as a clearly marked **Placeholder** (dashed box, "Needed from Uche: ..."). Nothing was invented to fill these gaps. Content on the site comes only from Uche's resume, her design brief, and the previous version of the site.

## 1. Room photos (scene backgrounds)

Pages 7 to 11 of the design brief PDF are image-only and could not be extracted, and no room or Dreamhouse photos exist in this repo. Each scene is currently an original SVG illustration (in `scenes.js`).

| Scene | Expected file | Used by |
|---|---|---|
| Exterior (homepage) | `assets/rooms/exterior.jpg` | `#/` |
| Living room | `assets/rooms/living-room.jpg` | `#/living-room` |
| Kitchen | `assets/rooms/kitchen.jpg` | `#/kitchen` |
| Closet | `assets/rooms/closet.jpg` | `#/closet` |
| Garage | `assets/rooms/garage.jpg` | `#/garage` |

Format: 16:10 landscape, 1600x1000 or larger (2400x1500 ideal), JPG or WebP, under about 400 KB each. Keep the same camera angle, crop, saturation and lighting across all five. On the exterior, keep the left 45% of the frame quiet (sky or lawn); the intro card sits there on large screens.

**To swap one in:** drop the file at the path above, then in `data.js` set that room's `photo` to the path (the commented value is already there). Hotspot positions are percent of the image (`x`, `y`), so they stay attached as the scene scales. Check each marker against the real photo and nudge `x`/`y` only if the object sits somewhere else. If a proposed object is not in the photo, keep the hotspot; it still works as a labeled marker.

## 2. Resume PDF

- `assets/Uche-Osuji-Resume.pdf`, then set `person.resumePdf` in `data.js`. Until then the Resume panel shows the full resume as text with a "Print or save as PDF" button. Remove the phone number from the PDF before adding it (the site never shows a phone number).

## 3. Portrait and personal photos (Living room)

- Portrait or framed photo of Uche for the About panel (4:5), suggested `assets/people/uche-portrait.jpg`
- Photo album: 3 personal photos (personal, Rose-Hulman, friends or family), suggested `assets/album/1.jpg` to `3.jpg`
- Optional character illustration of Uche (the brief says to do this only after navigation and content work; deliberately skipped)

## 4. Leadership and community (TV gallery, bulletin board)

- One photo each for NSBE, Adobe Student Ambassador, Chi Omega, and cheer, suggested `assets/community/<org>.jpg`
- For each role: one action and one concrete example. Outcomes only if documented.
- **Cheer:** role and dates. Cheer is in the design brief but not on the resume, so it is listed with "Details to confirm".
- Bulletin board: specific events with name, date, and what Uche did at each
- About: a short note in Uche's words on why engineering, product building and community matter to her; interests

## 5. Product case studies (Kitchen)

**CRWN**
- App screenshots (hero plus "What we built"), suggested `assets/work/crwn/*.png`
- A real feedback example, and a before and after flow showing a change driven by feedback
- Team members and what each owns, so Uche's contribution reads separately from the team's
- Problem statement and any research
- What I learned (Uche's reflection)

**Hair Hub**
- App screenshots, suggested `assets/work/hair-hub/*.png`
- The DIY hair care problem in Uche's words; feature decisions and why; team size and ownership
- What I learned

**How I work (planning board):** Uche's own description of her process. Each step currently points to resume evidence only.

## 6. Engineering work (Garage)

- **Keurig Dr Pepper:** optional approved, public-safe diagram. The site shows a simplified flow drawn only from resume text and labels it as such. No internal screens. Reflection.
- **Line following robot:** photo, demo video, telemetry or tuning screenshot, team, reflection
- **RISC-V processor:** Uche's actual datapath diagram, simulation evidence (for example, waveforms), team, reflection. The site shows a generic 5-stage pipeline labeled "not Uche's actual datapath".
- **MP3 player:** photo, oscilloscope capture, input controls design, team, reflection
- **Wireless trailer system:** everything. It is in the brief (marked in progress) but not on the resume, so only the title and "In progress" are shown: problem, team role, system diagram, app flow, and what is proposed versus demonstrated.

**To add a project image:** in `data.js`, replace a `{ ph: "..." }` entry under `hero` or `evidence` with `{ img: "assets/work/crwn/home.png", alt: "Describe the screen", caption: "Optional caption" }`.
