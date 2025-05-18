function calculateWindChill(tempC, windKmh) {
  return (tempC <= 10 && windKmh > 4.8)
    ? Math.round((13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)) * 10) / 10
    : "N/A";
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.getElementById("lastModified");
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

const tempElem = document.getElementById("temp");
const windElem = document.getElementById("wind");
const chillElem = document.getElementById("chill");

if (tempElem && windElem && chillElem) {
  const temp = parseFloat(tempElem.textContent);
  const wind = parseFloat(windElem.textContent);
  if (!isNaN(temp) && !isNaN(wind)) {
    chillElem.textContent = calculateWindChill(temp, wind);
  } else {
    chillElem.textContent = "N/A";
  }
}

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
