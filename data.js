/* Content for the Dreamhouse. Sources: Uche Osuji's resume (Oct 2026), her updated design brief (Oct 21 2026),
   the MP3 player final report, the addieq processor slides, and the public App Store listings.
   Nothing here is invented. Content that is not supplied yet is left out (see MISSING-ASSETS.md). */
window.DH = {
  person: {
    name: "Uche Osuji",
    email: "osujiun@rose-hulman.edu",
    linkedin: "https://www.linkedin.com/in/uchechiosuji",
    linkedinLabel: "linkedin.com/in/uchechiosuji",
    resumePdf: "assets/Uche-Osuji-Resume.pdf"
  },

  /* Scene order drives Previous / Next. Each photo is pre-cropped to 16:10, so hotspot x/y are percent of the image. */
  rooms: [
    { id: "exterior", name: "Exterior", short: "House", photo: "assets/rooms/exterior.jpg", w: 1075, h: 672,
      alt: "Scene from Barbie: Life in the Dreamhouse. The pink Dreamhouse with a front door, a fountain and a gated drive",
      hotspots: [
        { label: "Front door: enter", href: "#/living-room", x: 23.5, y: 53, icon: "door", side: "right" },
        { label: "Front gate: contact", href: "#/contact", x: 21, y: 71, icon: "mail", side: "right" }
      ] },
    { id: "living-room", name: "Living Room", short: "Living", photo: "assets/rooms/living-room.jpg", w: 600, h: 375,
      alt: "Scene from Barbie: Life in the Dreamhouse. A pink living room with framed pictures, an armchair and a white sofa",
      lede: "About Uche Osuji and the communities she is part of.",
      hotspots: [
        { label: "Family photo: about me", href: "#/living-room/about", x: 73, y: 16, icon: "album", side: "below" },
        { label: "Gallery wall: community", href: "#/living-room/community", x: 41, y: 18, icon: "tv", side: "below" },
        { label: "Sofa: activities", href: "#/living-room/activities", x: 80, y: 60, icon: "pin", side: "left" }
      ],
      next: "Next, see the product studio in the Kitchen or the engineering work in the Garage." },
    { id: "kitchen", name: "Kitchen", short: "Kitchen", photo: "assets/rooms/kitchen.jpg", w: 482, h: 301,
      alt: "Scene from Barbie: Life in the Dreamhouse. A pink kitchen with a breakfast table, counters and a chandelier",
      lede: "The product studio: CRWN and Hair Hub, each as its own case study.",
      hotspots: [
        { label: "Counter: CRWN", href: "#/work/crwn", x: 82, y: 62, icon: "tablet", side: "left" },
        { label: "Breakfast table: Hair Hub", href: "#/work/hair-hub", x: 14, y: 66, icon: "book", side: "right" },
        { label: "Pantry door: outcomes", href: "#/kitchen/outcomes", x: 52, y: 38, icon: "note", side: "below" },
        { label: "Shelf: how I work", href: "#/kitchen/how-i-work", x: 86, y: 36, icon: "board", side: "left" }
      ] },
    { id: "closet", name: "Closet", short: "Closet", photo: "assets/rooms/closet.jpg", w: 1149, h: 718,
      alt: "Scene from Barbie: Life in the Dreamhouse. A walk-in closet with shelves, clothing racks, a dressing screen, a mannequin and a zebra rug",
      lede: "Pick a look to see the matching projects and skills.",
      hotspots: [
        { label: "Engineer", role: "engineer", x: 30, y: 50, icon: "chip", side: "below" },
        { label: "Product Builder", role: "product", x: 48, y: 36, icon: "tablet", side: "below" },
        { label: "Community Leader", role: "community", x: 90, y: 54, icon: "badge", side: "left" },
        { label: "Drawers: all skills", href: "#/closet/skills", x: 64, y: 62, icon: "gem", side: "below" }
      ] },
    { id: "garage", name: "Garage", short: "Garage", photo: "assets/rooms/garage.jpg", w: 992, h: 620,
      alt: "Scene from Barbie: Life in the Dreamhouse. A garage with a pink convertible, wall cabinets, a workbench and a tool chest",
      lede: "The engineering workspace: internships and hardware projects.",
      hotspots: [
        { label: "Tool chest: Keurig Dr Pepper", href: "#/work/keurig-dr-pepper", x: 84, y: 38, icon: "laptop", side: "left" },
        { label: "Workbench: robot", href: "#/work/line-following-robot", x: 33, y: 42, icon: "robot", side: "left" },
        { label: "Cabinets: RISC-V", href: "#/work/risc-v-processor", x: 36, y: 13, icon: "chip", side: "right" },
        { label: "Car stereo: MP3 player", href: "#/work/mp3-player", x: 56, y: 62, icon: "music", side: "below" }
      ] }
  ],

  roles: {
    engineer: { name: "Engineer", room: "garage", accessories: "Laptop, circuit board, tools",
      blurb: "Embedded software, digital design and hardware projects.",
      projects: ["keurig-dr-pepper", "line-following-robot", "risc-v-processor", "mp3-player"],
      skills: ["Embedded Systems", "Software and Tools"] },
    product: { name: "Product Builder", room: "kitchen", accessories: "Tablet, sketches, planning notebook",
      blurb: "Mobile products for the textured hair community, from feedback to launch.",
      projects: ["crwn", "hair-hub"],
      skills: ["Product and Research"], extraSkills: ["React Native", "Expo", "JavaScript", "Supabase"] },
    community: { name: "Community Leader", room: "living-room", accessories: "Event badge, camera, scrapbook",
      blurb: "Leadership roles on campus and in student organizations.",
      projects: [], leadership: true, skills: [] }
  },

  skills: [
    { group: "Product and Research", items: ["Figma", "Jira"] },
    { group: "Software and Tools", items: ["C", "C++", "Python", "Java", "JavaScript", "Verilog", "MATLAB", "React Native", "Expo", "Supabase", "Git", "Jenkins", "Tera Term", "ModelSim", "PSpice", "LabVIEW", "DesignSpark", "CST Studio", "Ansys"] },
    { group: "Embedded Systems", items: ["ESP32", "MSP432", "Arduino", "Circuit Design", "PCB Design", "Breadboarding", "Soldering", "Oscilloscope", "PWM", "UART", "I2C", "BLE"] }
  ],

  education: {
    school: "Rose-Hulman Institute of Technology",
    degree: "BS Computer Engineering, minors in Geography and Spanish",
    grad: "May 2027", gpa: "3.25",
    deans: "Dean's List: Spring 2024, Winter 2026, Spring 2026",
    courses: "Computer Architecture I and II, Data Structures and Algorithms, Embedded Systems, Electronic Modeling, Communication Networks, High-Speed Digital Design, Signals and Systems"
  },

  leadership: [
    { org: "Adobe Student Ambassador", role: "Student Ambassador", dates: "Sep 2026 to Present" },
    { org: "Chi Omega Fraternity", role: "Recruitment and COB Chair", dates: "Dec 2024 to Present",
      img: "assets/community/chi-omega.jpg", alt: "Chi Omega members in red dresses posing together for a group photo" },
    { org: "Women's Varsity Cheer", role: "", dates: "Oct 2024 to Present",
      img: "assets/community/cheer.jpg", alt: "Uche Osuji in a cheer uniform holding black pom-poms on a stadium track" },
    { org: "National Society of Black Engineers (NSBE)", role: "Membership Chair", dates: "May 2024 to May 2025",
      img: "assets/community/nsbe.jpg", alt: "NSBE members posing in front of large lit-up NSBE letters" }
  ],

  /* Case studies. Sections: Overview, Problem and audience, My role and team, Decisions and tradeoffs, What we built,
     Results, What I learned. A section with no supplied content is not rendered. */
  projects: [
    { slug: "crwn", room: "kitchen", group: "Product", title: "CRWN", org: "CRWN", role: "Co-Founder and CTO",
      dates: "Sep 2025 to Present", place: "Remote",
      summary: "A mobile platform for the textured hair community, with hair profiles, social posts, community threads and provider profiles.",
      outcome: "100+ users in the first 48 hours",
      hero: { gallery: [
        { img: "assets/work/crwn/explore.jpg", alt: "CRWN Explore screen: a feed of hairstyle photos with filter tags" },
        { img: "assets/work/crwn/find-providers.jpg", alt: "CRWN Find providers screen: provider cards with locations and specialties" },
        { img: "assets/work/crwn/community.jpg", alt: "CRWN Community screen: discussion threads" },
        { img: "assets/work/crwn/hair-profile.jpg", alt: "CRWN Hair profile screen: a question about hair pattern with answer choices" }
      ], caption: "Screens from the CRWN App Store listing." },
      links: [{ href: "https://apps.apple.com/us/app/crwn/id6806900748", label: "CRWN on the App Store" }],
      tags: ["React Native", "Expo", "JavaScript", "Supabase"],
      sections: [
        { id: "overview", h: "Overview", p: ["CRWN is a full-stack mobile app for the textured hair community, now available on the Apple App Store. Uche Osuji co-founded it and leads the technology as CTO."] },
        { id: "problem", h: "Problem and audience", p: ["Built for people with textured hair and the hair providers they look for."] },
        { id: "role", h: "My role and team",
          list: ["Uche Osuji, CTO (developer)", "Sarah Nyaanga, CEO, also UX/UI designer and short-film director", "Laila Hunte, COO"],
          p: ["Technical: architected and developed the full-stack mobile MVP in React Native, Expo, JavaScript and Supabase.",
              "Product: prioritized user-generated content and provider profiles based on user and provider feedback.",
              "Launch: led launch and growth efforts, and secured $18,150 in non-dilutive funding through startup competitions and accelerators."] },
        { id: "decisions", h: "Decisions and tradeoffs", p: ["Feedback from users and providers decided what came first: user-generated content and provider profiles were prioritized for the MVP."] },
        { id: "built", h: "What we built", list: ["Hair profiles", "Social posts (user-generated content)", "Community threads", "Provider profiles", "Push notifications"] },
        { id: "results", h: "Results", stats: [["100+", "users in the first 48 hours"], ["300K+", "organic social views over eight months, zero ad spend"], ["$18,150", "non-dilutive funding"]] }
      ] },
    { slug: "hair-hub", room: "kitchen", group: "Product", title: "Hair Hub", org: "Hair Hub", role: "Product Manager",
      dates: "Jun 2024 to Jun 2025", place: "Remote",
      summary: "A DIY hair care app for Black women, with styling inspiration, tutorials, product recommendations and planning tools.",
      outcome: "12K+ downloads within nine months",
      hero: { gallery: [
        { img: "assets/work/hair-hub/discover-styles.jpg", alt: "Hair Hub Discover Styles screen: a grid of loc hairstyles with Not it and Save it buttons" },
        { img: "assets/work/hair-hub/style-detail.jpg", alt: "Hair Hub style detail screen: a hairstyle photo with a list of products" },
        { img: "assets/work/hair-hub/schedule-styles.jpg", alt: "Hair Hub Schedule Your Styles screen: a monthly calendar with scheduled styles" }
      ], caption: "Screens from the Hair Hub App Store listing." },
      links: [{ href: "https://apps.apple.com/us/app/hair-hub/id6651859481", label: "Hair Hub on the App Store" }],
      tags: ["Product management", "Launch"],
      sections: [
        { id: "overview", h: "Overview", p: ["Hair Hub is a hair inspiration and care app on the Apple App Store, published by Hair Hub, LLC. Uche Osuji was its Product Manager."] },
        { id: "problem", h: "Problem and audience", p: ["Built for Black women doing their own hair care, to help reduce hair care costs."] },
        { id: "role", h: "My role and team", list: ["Product Manager: translated user needs into styling inspiration, tutorials, product recommendations and planning tools.", "Led launch and growth through stakeholder partnerships, pitch competitions and a 15-person ambassador team."] },
        { id: "built", h: "What we built", list: ["Styling inspiration", "Tutorials", "Product recommendations", "Planning tools"] },
        { id: "results", h: "Results", stats: [["12K+", "downloads within nine months"], ["15", "person ambassador team"], ["1M+", "social views"]] }
      ] },
    { slug: "keurig-dr-pepper", room: "garage", group: "Engineering", title: "Keurig Dr Pepper", org: "Keurig Dr Pepper", role: "Software Engineering Intern (2025 and 2026)",
      dates: "Jun to Aug 2025, Jun to Aug 2026", place: "Benton Harbor, MI and Burlington, MA",
      summary: "Two summers of embedded and test software for commercial brewing systems: fault detection and recovery guidance in 2026, test automation and thermal testing in 2025.",
      outcome: "Exposed 2 previously undisplayed fault conditions",
      hero: { diagram: "kdp" },
      tags: ["C/C++", "Python", "UART", "Jenkins", "Jira"],
      note: "Only public details are shown here. The flow above is a simplified explanation, not internal material.",
      sections: [
        { id: "2026", h: "2026: SWE Intern, Embedded Software", sub: "Jun to Aug 2026 · Burlington, MA",
          list: ["Developed an end-to-end thermal cutoff fault detection and alerting feature in C/C++ for commercial brewing systems, exposing 2 previously undisplayed fault conditions and providing recovery guidance.",
                 "Implemented and validated fault communication across 3 software layers, using Tera Term over UART and Jenkins to test from board-level fault detection through user-facing HMI notifications.",
                 "Investigated, tracked and resolved 2 firmware and HMI defects using Jira and C/C++, eliminating low-water notification and brew counter errors that occurred on every brew."],
          p: ["Challenge: full ownership of a feature that had not been developed before."] },
        { id: "2025", h: "2025: SWE Intern, Brew Engine", sub: "Jun to Aug 2025 · Benton Harbor, MI",
          list: ["Built and deployed a Python GUI cycle-generation tool that automated testing for 13+ beverage-cycle variants, eliminating waits of up to three weeks for software team support on cycle changes.",
                 "Executed 48+ thermal lab tests on heating elements; the findings informed design changes for steam quality and beverage consistency.",
                 "Partnered with software, electrical and test engineers to reproduce system failures, isolate root causes and validate fixes."] },
        { id: "results", h: "Results", stats: [["2", "previously undisplayed faults now shown with recovery guidance"], ["2", "firmware and HMI defects resolved"], ["13+", "cycle variants automated"], ["48+", "thermal lab tests"]] },
        { id: "evidence", h: "Evidence", evidence: [{ img: "assets/work/kdp/uche-osuji-kdp-2026.jpg", alt: "Uche Osuji standing beside a screen showing a Keurig Dr Pepper title slide with her name, Summer 2026 Intern", caption: "Uche Osuji at Keurig Dr Pepper, summer 2026." }] }
      ] },
    { slug: "line-following-robot", room: "garage", group: "Engineering", title: "Vision Guided Line Following Robot", role: "Controls Engineer",
      dates: "Mar to May 2026",
      summary: "A vehicle that follows a line using camera data, with PID control on an ESP32 and live tuning over BLE.",
      outcome: "Live PID tuning and telemetry over BLE",
      hero: { diagram: "robot" },
      tags: ["ESP32", "C/C++", "PID", "I2C", "PWM", "BLE"],
      sections: [
        { id: "overview", h: "Overview", list: ["PID control on an ESP32 in C/C++.", "Reads HuskyLens line data over I2C.", "Drives the servo and ESC with 50 Hz PWM.", "A BLE interface tunes PID gains live and streams telemetry."] },
        { id: "role", h: "My role and team",
          p: ["Uche Osuji, Controls Engineer: implemented the PID controller on the ESP32 in C/C++, reading HuskyLens line data over I2C and driving the servo and ESC with 50 Hz PWM, and built the BLE interface to tune PID gains live and stream steering and throttle telemetry.",
              "Team 09: Alex Freel, Sristi Kamra, Charlie Landis and Uche Osuji."] },
        { id: "evidence", h: "Evidence", evidence: [{ img: "assets/work/robot/poster-and-vehicle.jpg", alt: "Uche Osuji holding the team's small line following vehicle next to the team poster", caption: "Uche Osuji with the vehicle and the Team 09 poster, Autonomous Line Following Vehicle with Capacitor Based Energy Storage." }] }
      ] },
    { slug: "risc-v-processor", room: "garage", group: "Engineering", title: "Pipelined RISC-V Processor", role: "Datapath Designer",
      dates: "Feb 2026",
      summary: "A 5-stage pipelined RISC-V processor in Verilog that supports all instruction formats, plus a custom addieq instruction.",
      outcome: "Custom addieq cut relPrimE(5040) by 1,200 ps",
      hero: { img: "assets/work/riscv/datapath.png", alt: "Pipelined datapath diagram with instruction memory, registers, an equality comparator, ALU, data memory, and hazard detection and forwarding units, with some paths highlighted in magenta", caption: "The team's pipelined datapath, from the addieq slides." },
      tags: ["RISC-V", "Verilog"],
      sections: [
        { id: "overview", h: "Overview", list: ["5-stage pipelined RISC-V processor.", "Written in Verilog.", "Supports all instruction formats.", "Adds a custom SB-type instruction, addieq."] },
        { id: "role", h: "My role and team", p: ["Uche Osuji, Datapath Designer.", "Team: Mia, Lizzy, Sofia and Uche."] },
        { id: "addieq", h: "Custom instruction: addieq",
          p: ["Syntax: addieq rs1, imm2, label. An SB-type branch that compares a register with a small immediate."],
          list: ["a = Reg[rs1], imm2 = sign-extended inst[24:20]", "result = a minus imm2", "If result is 0, branch to PC plus the branch offset; otherwise continue at PC + 4."],
          evidence: [{ img: "assets/work/riscv/addieq-test.png", alt: "Assembly test program: addieq x5, 1, L then addi x6, x0, 3, label L, addi x6, x0, 2. Expected result x5 = 1 and x6 = 2", caption: "Test program for addieq from the team's slides." }] },
        { id: "decisions", h: "Decisions and tradeoffs", list: ["Without addieq: no datapath changes needed, but slower execution.", "With addieq: quicker execution, but it only helps when checking a register against an immediate for equality."] },
        { id: "results", h: "Results", p: ["Benchmark relPrimE(5040), execution time before and after adding addieq."],
          stats: [["3,853,750 ps", "before addieq"], ["3,852,550 ps", "with addieq"], ["1,200 ps", "faster"]] }
      ] },
    { slug: "mp3-player", room: "garage", group: "Engineering", title: "Embedded MP3 Player", role: "Firmware Lead",
      dates: "Feb 2025",
      summary: "An embedded C music player on an MSP432 with an LCD, push buttons, a volume slider, a 6-song playlist and PWM audio.",
      outcome: "Note frequencies within 0.1% of target",
      hero: { img: "assets/work/mp3/player.jpg", alt: "The finished MP3 player: a painted light blue box with an LCD window, speaker opening, volume slider and four colored push buttons, labeled by hand", caption: "The finished player, from the final report." },
      tags: ["MSP432", "Embedded C", "PWM", "Oscilloscope"],
      sections: [
        { id: "overview", h: "Overview", list: ["Embedded C firmware on an MSP432P4111 using timers and interrupts.", "LCD screen, four push buttons and a slide potentiometer for volume.", "PWM audio through an NPN transistor driver.", "6-song playlist: Happy Birthday, Mozart, Beethoven, and the Hannah Montana, Teen Titans and Totally Spies theme songs."] },
        { id: "role", h: "My role and team", p: ["Uche Osuji, Firmware Lead: wrote the embedded C firmware, using timers and interrupts to control the playlist.", "Team: Uche Osuji and Gabby Guffey."] },
        { id: "controls", h: "Input controls", list: ["Power: restarts playback from the first song.", "Play/Pause: stops playback, and a second press picks up where it left off.", "Skip: next song.", "Back: previous song.", "Slider: adjusts the speaker volume."] },
        { id: "decisions", h: "Decisions and tradeoffs", p: ["The plan included an RGB LED that flashed with the beat, colored by frequency range. When it was added the speaker stopped working, so after debugging the team removed the feature and shipped the working player."] },
        { id: "results", h: "Results", p: ["Measured on the oscilloscope against the report's test plan."],
          stats: [["783.87 Hz", "G5, target 783.99 Hz"], ["493.83 Hz", "B4, target 493.88 Hz"], ["425.9 µs", "button press to note, under the 1 ms limit"], ["$4", "total bill of materials"]] },
        { id: "evidence", h: "Evidence", evidence: [
          { img: "assets/work/mp3/inside.jpg", alt: "Inside the box: the MSP432 LaunchPad, breadboard and jumper wires", caption: "Hardware inside the box." },
          { img: "assets/work/mp3/schematic.png", alt: "Circuit schematic with the MSP432 pins, LCD, push buttons, potentiometers and the NPN speaker driver", caption: "Circuit schematic. The report notes the fourth switch goes to P6.4, not P2.7." },
          { img: "assets/work/mp3/flowchart.png", alt: "Software flowchart: start, check play, skip and back buttons, play current, next or previous song, adjust volume", caption: "Software flowchart." },
          { img: "assets/work/mp3/scope-g5.png", alt: "Oscilloscope capture of the G5 note measurement", caption: "Scope capture: G5, highest note in Mozart." },
          { img: "assets/work/mp3/scope-b4.png", alt: "Oscilloscope capture of the B4 note measurement", caption: "Scope capture: B4, lowest note in Mozart." },
          { img: "assets/work/mp3/scope-latency.png", alt: "Oscilloscope capture showing the delay between the button signal and the start of the note", caption: "Scope capture: button press to note, 425.9 µs." }
        ] }
      ] }
  ]
};
