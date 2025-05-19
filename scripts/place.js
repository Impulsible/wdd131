// One-line wind chill function
const calculateWindChill = (t, v) =>
  (t <= 10 && v > 4.8)
    ? Math.round((13.12 + 0.6215 * t - 11.37 * v**0.16 + 0.3965 * t * v**0.16) * 10) / 10
    : "N/A";

// Set current year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Set last modified date
const lastModifiedSpan = document.getElementById("lastModified");
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

// Calculate wind chill for both desktop and mobile
function updateWindChill(tempId, windId, chillId) {
  const tempElem = document.getElementById(tempId);
  const windElem = document.getElementById(windId);
  const chillElem = document.getElementById(chillId);

  if (tempElem && windElem && chillElem) {
    const temp = parseFloat(tempElem.textContent);
    const wind = parseFloat(windElem.textContent);
    const chill = calculateWindChill(temp, wind);
    chillElem.textContent = (chill !== "N/A") ? `${chill}°C` : "N/A";
  }
}

updateWindChill("temp-desktop", "wind-desktop", "chill-desktop");
updateWindChill("temp-mobile", "wind-mobile", "chill-mobile");

// Add moon logo and wrap heading
const header = document.querySelector("header");
if (header) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("header-content");

  const moon = document.createElement("div");
  moon.innerHTML = `
    <svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg" class="crescent-moon">
      <circle cx="32" cy="32" r="24" fill="#007847"/>
      <path d="M44,32a16,16 0 1,1 -16,-16A12,12 0 1,0 44,32Z" fill="#ffffff"/>
    </svg>
  `;

  const heading = header.querySelector("h1");
  if (heading) {
    header.removeChild(heading);
    wrapper.appendChild(moon);
    wrapper.appendChild(heading);
    header.appendChild(wrapper);
  }
}

// Inject Google Font and style
document.head.insertAdjacentHTML("beforeend", `
  <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body, h1, h2, h3, p {
      font-family: 'Lora', serif;
    }

    header {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .crescent-moon {
      width: 64px;
      height: 64px;
    }
  </style>
`);
