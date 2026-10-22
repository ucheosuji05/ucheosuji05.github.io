/* Simplified evidence diagrams, labeled as simplified in their captions.
   Room scenes are supplied show stills (assets/rooms/*.jpg, set in data.js); the earlier SVG drawings were retired. */
(function () {
  "use strict";
  window.DH_SCENES = {};
  const flow = (steps, caption) => `<figure class="diagram"><ol class="flow">${steps.map(st => { const [a, b] = st.split("|"); return `<li><b>${a}</b>${b ? `<span>${b}</span>` : ""}</li>`; }).join("")}</ol><figcaption>${caption}</figcaption></figure>`;
  window.DH_DIAGRAMS = {
    kdp: flow(["Thermal cutoff|fault detected (C/C++)", "3 software|layers", "HMI alert|with recovery guidance", "Tested|UART + Jenkins"], "Simplified explanation of the 2026 fault alerting work. Not an internal diagram."),
    robot: flow(["HuskyLens|camera line data", "I2C|to the ESP32", "ESP32|PID in C/C++", "50 Hz PWM|servo and ESC"], "Simplified signal flow. A BLE link to the ESP32 tunes PID gains live and streams steering and throttle telemetry.")
  };
})();
