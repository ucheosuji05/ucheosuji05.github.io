/* Content for the Dreamhouse. Source of truth: Uche's resume and her design brief.
   Nothing here is invented. Anything not on the resume is a marked placeholder (see MISSING-ASSETS.md). */
window.DH = {
  person: {
    name: "Uche Osuji",
    email: "osujiun@rose-hulman.edu",
    linkedin: "https://www.linkedin.com/in/uchechiosuji",
    linkedinLabel: "linkedin.com/in/uchechiosuji",
    // Drop her resume PDF at this path and set it here to show a Download button everywhere.
    resumePdf: null // e.g. "assets/Uche-Osuji-Resume.pdf"
  },

  /* Scene order drives Previous / Next. photo: set to a path once the real photo is added
     (16:10, e.g. 1600x1000). Hotspots are percent of the image, so they stay put after the swap. */
  rooms: [
    { id: "exterior", name: "Exterior", short: "House", photo: null, // "assets/rooms/exterior.jpg"
      alt: "Illustration of a pink modern dreamhouse with a front door, mailbox and pool",
      hotspots: [
        { label: "Front door: enter", href: "#/living-room", x: 70.5, y: 79, icon: "door", side: "right" },
        { label: "Mailbox: contact", href: "#/contact", x: 51.25, y: 80, icon: "mail", side: "below" }
      ] },
    { id: "living-room", name: "Living Room", short: "Living", photo: null, // "assets/rooms/living-room.jpg"
      alt: "Illustration of a living room with a pink sofa, a TV, a bulletin board and a photo album on the coffee table",
      lede: "About Uche and the communities she is part of.",
      hotspots: [
        { label: "Photo album: about me", href: "#/living-room/about", x: 47, y: 79, icon: "album", side: "right" },
        { label: "TV: community", href: "#/living-room/community", x: 80, y: 40, icon: "tv", side: "left" },
        { label: "Bulletin board: activities", href: "#/living-room/activities", x: 15, y: 34, icon: "pin", side: "right" }
      ],
      next: "Next, see the product studio in the Kitchen or the engineering work in the Garage." },
    { id: "kitchen", name: "Kitchen", short: "Kitchen", photo: null, // "assets/rooms/kitchen.jpg"
      alt: "Illustration of a kitchen with a fridge covered in notes, an island with a tablet and a recipe book, and a planning board",
      lede: "The product studio: CRWN and Hair Hub, each as its own case study.",
      hotspots: [
        { label: "Tablet: CRWN", href: "#/work/crwn", x: 41, y: 55, icon: "tablet", side: "left" },
        { label: "Recipe book: Hair Hub", href: "#/work/hair-hub", x: 63, y: 57, icon: "book", side: "right" },
        { label: "Fridge notes: outcomes", href: "#/kitchen/outcomes", x: 13, y: 40, icon: "note", side: "right" },
        { label: "Planning board: how I work", href: "#/kitchen/how-i-work", x: 82, y: 25, icon: "board", side: "left" }
      ] },
    { id: "closet", name: "Closet", short: "Closet", photo: null, // "assets/rooms/closet.jpg"
      alt: "Illustration of a walk-in closet with three outfit displays and a jewelry box of skill tags",
      lede: "Pick a look to see the matching projects and skills.",
      hotspots: [
        { label: "Engineer", role: "engineer", x: 22, y: 50, icon: "chip", side: "below" },
        { label: "Product Builder", role: "product", x: 50, y: 50, icon: "tablet", side: "below" },
        { label: "Community Leader", role: "community", x: 78, y: 50, icon: "badge", side: "below" },
        { label: "Jewelry box: all skills", href: "#/closet/skills", x: 50, y: 88, icon: "gem", side: "right" }
      ] },
    { id: "garage", name: "Garage", short: "Garage", photo: null, // "assets/rooms/garage.jpg"
      alt: "Illustration of a garage workbench with a brewer and laptop, a robot, a circuit board, a music player and a trailer model",
      lede: "The engineering workspace: internships and hardware projects.",
      hotspots: [
        { label: "Brewer: Keurig Dr Pepper", href: "#/work/keurig-dr-pepper", x: 14, y: 50, icon: "laptop", side: "right" },
        { label: "Robot", href: "#/work/line-following-robot", x: 36, y: 60, icon: "robot", side: "below" },
        { label: "Circuit board: RISC-V", href: "#/work/risc-v-processor", x: 55, y: 44, icon: "chip", side: "below" },
        { label: "MP3 player", href: "#/work/mp3-player", x: 70, y: 63, icon: "music", side: "below" },
        { label: "Trailer system", href: "#/work/trailer-system", x: 86.5, y: 61, icon: "trailer", side: "below" }
      ] }
  ],

  roles: {
    engineer: { name: "Engineer", room: "garage", accessories: "Laptop, circuit board, tools",
      blurb: "Embedded software, digital design and hardware projects.",
      projects: ["keurig-dr-pepper", "line-following-robot", "risc-v-processor", "mp3-player", "trailer-system"],
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
    { org: "NSBE", role: "Membership Chair", dates: "May 2024 to May 2025" },
    { org: "Adobe", role: "Student Ambassador", dates: "Sep 2026 to Present" },
    { org: "Chi Omega Fraternity", role: "Recruitment and COB Chair", dates: "Dec 2024 to Present" },
    { org: "Cheer", role: "Role to confirm", dates: "Dates to confirm", placeholder: true }
  ],

  /* Case studies. Structure from the brief:
     Overview, Problem and audience, My role and team, Decisions and tradeoffs, What we built, Results, What I learned.
     ph: "..." renders a clearly marked placeholder for content only Uche can supply. */
  projects: [
    { slug: "crwn", room: "kitchen", group: "Product", title: "CRWN", org: "CRWN", role: "Co-Founder and CTO",
      dates: "Sep 2025 to Present", place: "Remote",
      summary: "A mobile platform for textured hair, with personalized hair profiles, social posts, community threads and provider profiles.",
      outcome: "100+ users in the first 48 hours",
      hero: { ph: "CRWN app screenshot (home or hair profile screen)" },
      tags: ["React Native", "Expo", "JavaScript", "Supabase"],
      sections: [
        { id: "overview", h: "Overview", p: ["CRWN is a full-stack mobile app for the textured hair community. Uche co-founded it and leads the technology as CTO."] },
        { id: "problem", h: "Problem and audience", p: ["Built for people with textured hair and the hair providers they look for."], ph: "The specific problem statement and any research behind it" },
        { id: "role", h: "My role and team", list: ["My contribution: built the full-stack mobile MVP in React Native, Expo, JavaScript and Supabase.", "My contribution: secured $18,150 in non-dilutive funding through startup competitions and accelerators."], ph: "Who else is on the team and what they own, so Uche's work reads separately from the team's" },
        { id: "decisions", h: "Decisions and tradeoffs", p: ["Feedback decided what came first: user-generated content and provider profiles were prioritized for the MVP."], ph: "A real feedback example and what was deferred because of it" },
        { id: "built", h: "What we built", list: ["Personalized hair profiles", "Social posts (user-generated content)", "Community threads", "Provider profiles", "Push notifications"], evidence: [{ ph: "App screenshots" }, { ph: "Before and after flow showing a change driven by feedback" }] },
        { id: "results", h: "Results", stats: [["100+", "users in the first 48 hours"], ["300K+", "organic social views over eight months, zero ad spend"], ["$18,150", "non-dilutive funding"]] },
        { id: "learned", h: "What I learned", ph: "Uche's own reflection" }
      ] },
    { slug: "hair-hub", room: "kitchen", group: "Product", title: "Hair Hub", org: "Hair Hub", role: "Product Manager",
      dates: "Jun 2024 to Jun 2025", place: "Remote",
      summary: "A DIY hair care app for Black women, with inspiration, tutorials, product recommendations and planning tools. A separate, earlier project from CRWN.",
      outcome: "12K+ downloads within nine months",
      hero: { ph: "Hair Hub app screenshot" },
      tags: ["Product management", "Launch"],
      sections: [
        { id: "overview", h: "Overview", p: ["Hair Hub is its own product, not part of CRWN's history. Uche was the Product Manager."] },
        { id: "problem", h: "Problem and audience", p: ["Built for Black women doing their own hair care at home."], ph: "The DIY hair care problem in Uche's words" },
        { id: "role", h: "My role and team", list: ["Product Manager.", "Drove the launch through partnerships, pitch competitions and a 15-person ambassador team."], ph: "Team size and who owned what" },
        { id: "decisions", h: "Decisions and tradeoffs", ph: "Feature decisions and why (for example, what made the first release)" },
        { id: "built", h: "What we built", list: ["Hair inspiration", "Tutorials", "Product recommendations", "Planning tools"], evidence: [{ ph: "App screenshots" }] },
        { id: "results", h: "Results", stats: [["12K+", "downloads within nine months"], ["15", "person ambassador team"], ["1M+", "social views"]] },
        { id: "learned", h: "What I learned", ph: "Uche's own reflection" }
      ] },
    { slug: "keurig-dr-pepper", room: "garage", group: "Engineering", title: "Keurig Dr Pepper", org: "Keurig Dr Pepper", role: "Software Engineering Intern (2025 and 2026)",
      dates: "Jun to Aug 2025, Jun to Aug 2026", place: "Benton Harbor, MI and Burlington, MA",
      summary: "Two summers of embedded and test software for brewers: fault detection and recovery guidance in 2026, test automation and thermal testing in 2025.",
      outcome: "Exposed 2 previously undisplayed fault conditions",
      hero: { diagram: "kdp" },
      tags: ["C/C++", "Python", "UART", "Jenkins", "Jira"],
      note: "Only public resume details are shown here. Diagrams are simplified and drawn from the resume, not internal material.",
      sections: [
        { id: "2026", h: "2026: SWE Intern, Embedded Software", sub: "Jun to Aug 2026 · Burlington, MA",
          list: ["Built end-to-end thermal cutoff fault detection and alerting in C/C++ for commercial brewers, exposing 2 previously undisplayed fault conditions with recovery guidance.", "Carried fault communication across 3 software layers.", "Testing approach: Tera Term over UART, and Jenkins through HMI notifications.", "Resolved 2 firmware and HMI defects (low-water notification, brew counter) using Jira and C/C++."] },
        { id: "2025", h: "2025: SWE Intern, Brew Engine", sub: "Jun to Aug 2025 · Benton Harbor, MI",
          list: ["Built a Python GUI cycle-generation tool that automates testing for 13+ beverage-cycle variants, removing waits of up to three weeks.", "Ran 48+ thermal lab tests on heating elements; the findings informed steam quality and consistency design changes.", "Reproduced failures and validated fixes with cross-functional teams."] },
        { id: "results", h: "Results", stats: [["2", "previously undisplayed faults now shown with recovery guidance"], ["2", "firmware and HMI defects resolved"], ["13+", "cycle variants automated"], ["48+", "thermal lab tests"]] },
        { id: "evidence", h: "Evidence", evidence: [{ ph: "An approved, public-safe diagram from KDP (if Uche can share one)" }] },
        { id: "learned", h: "What I learned", ph: "Uche's own reflection" }
      ] },
    { slug: "line-following-robot", room: "garage", group: "Engineering", title: "Vision Guided Line Following Robot", role: "Controls Engineer",
      dates: "Mar to May 2026",
      summary: "A robot that follows a line using camera data, with PID control on an ESP32 and live tuning over BLE.",
      outcome: "Live PID tuning and telemetry over BLE",
      hero: { diagram: "robot" },
      tags: ["ESP32", "C/C++", "PID", "I2C", "PWM", "BLE"],
      sections: [
        { id: "overview", h: "Overview", list: ["PID control on an ESP32 in C/C++.", "Reads HuskyLens line data over I2C.", "Drives the servo and ESC with 50 Hz PWM.", "A BLE interface allows live PID tuning and telemetry."] },
        { id: "role", h: "My role and team", p: ["Controls Engineer."], ph: "Team members and who did what" },
        { id: "evidence", h: "Evidence", evidence: [{ ph: "Photo of the robot" }, { ph: "Demo video" }, { ph: "Telemetry or tuning screenshot" }] },
        { id: "learned", h: "What I learned", ph: "Uche's own reflection" }
      ] },
    { slug: "risc-v-processor", room: "garage", group: "Engineering", title: "Pipelined RISC-V Processor", role: "Datapath Designer",
      dates: "Feb 2026",
      summary: "A 5-stage pipelined RISC-V processor in Verilog that supports all instruction formats.",
      outcome: "All RISC-V instruction formats supported",
      hero: { diagram: "riscv" },
      tags: ["RISC-V", "Verilog"],
      sections: [
        { id: "overview", h: "Overview", list: ["5-stage pipelined RISC-V processor.", "Written in Verilog.", "Supports all instruction formats."] },
        { id: "role", h: "My role and team", p: ["Datapath Designer."], ph: "Team members and who did what" },
        { id: "evidence", h: "Evidence", evidence: [{ ph: "Uche's architecture diagram of the actual datapath" }, { ph: "Simulation evidence (for example, waveforms)" }] },
        { id: "learned", h: "What I learned", ph: "Uche's own reflection" }
      ] },
    { slug: "mp3-player", room: "garage", group: "Engineering", title: "Embedded MP3 Player", role: "Firmware Lead",
      dates: "Feb 2025",
      summary: "An embedded C music player on an MSP432 with a 6-song playlist and PWM audio.",
      outcome: "Notes within 0.1% on the oscilloscope",
      hero: { diagram: "mp3" },
      tags: ["MSP432", "Embedded C", "PWM", "Oscilloscope"],
      sections: [
        { id: "overview", h: "Overview", list: ["Embedded C on an MSP432 using timers and interrupts.", "Plays a 6-song playlist.", "PWM audio through an NPN driver."] },
        { id: "results", h: "Results", stats: [["0.1%", "note accuracy, verified on the oscilloscope"], ["6", "song playlist"]] },
        { id: "role", h: "My role and team", p: ["Firmware Lead."], ph: "Team members, and the input controls design" },
        { id: "evidence", h: "Evidence", evidence: [{ ph: "Photo of the player" }, { ph: "Oscilloscope capture" }] },
        { id: "learned", h: "What I learned", ph: "Uche's own reflection" }
      ] },
    { slug: "trailer-system", room: "garage", group: "Engineering", title: "Wireless Trailer System", role: "Role to confirm",
      dates: "In progress", status: "In progress",
      summary: "Listed in Uche's design brief as an in-progress project. It is not on her resume yet, so no details are published here.",
      outcome: "In progress",
      hero: { ph: "System diagram" },
      tags: [],
      sections: [
        { id: "status", h: "Status", p: ["In progress. Proposed and demonstrated work will be labeled separately once details are confirmed."] },
        { id: "details", h: "Details", ph: "Problem, team role, system diagram, app flow, and what is proposed versus demonstrated" }
      ] }
  ]
};
