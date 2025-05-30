// Complete temples array with original + 21 new temples
const temples = [
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/c6b3cf4bce3e1adb39d332032cb27b2705fe5719/full/1600%2C/0/default"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://churchofjesuschrist.org/imgs/dc282da841b5d25245f246afddf928e6d60bdcf8/full/1600%2C/0/default"
  },
  {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://churchofjesuschrist.org/imgs/7e314b684cb2e8c0a09be9f4a1a237ea74e0669d/full/1600%2C/0/default"
  },
  {
    templeName: "Yigo Guam Temple",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/0180d5166f5f11ed87fbeeeeac1e511663a48334/full/1600%2C/0/default"
  },
  {
    templeName: "Washington D.C. Temple",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/bd50451123eec991e822e287a9f0ae891b228d95/full/1600%2C/0/default"
  },
  {
    templeName: "Fukuoka Japan Temple",
    location: "Fukuoka, Japan",
    dedicated: "September 17, 2016",
    area: "10,700 sq ft",
    imageUrl: "https://www.churchofjesuschrist.org/imgs/6ba3ebd40bb1c16a76c34b8f5d5e82e2090a023d/full/1600%2C/0/default"
  },
  {
    templeName: "Mexico City Mexico  Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/7595df1dacfaaae75e25ef20d295c3b17ae82657/full/1600%2C/0/default"
  },
  {
    templeName: "Boston Massachusetts",
    location: "Boston, Massachusetts, USA",
    dedicated: "2000, October, 1",
    area: 70000,
    imageUrl: "images/boston-massachusetts.jpeg"
  },
  {
    templeName: "Salt Lake City",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "images/salt-lake-city.jpeg"
  },
  {
    templeName: "Sydney Australia",
    location: "Sydney, Australia",
    dedicated: "1984, September, 20",
    area: 30000,
    imageUrl: "images/sydney-australia.jpg"
  },

  // 21 more temples:
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 37000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/08d5a9e90a0c8347a61d17335775c5e118b33a9a/full/1600%2C/0/default"
  },
 {
  templeName: "Cleveland Ohio Temple",
  location: "Cleveland, Ohio, USA",
  dedicated: "2022, May, 22",
  area: 90000,  // approx. 90,000 sq ft (official sources mention roughly this size)
  imageUrl: "https://www.churchofjesuschrist.org/imgs/b8f186ba13a611efbe75eeeeac1ec2585957b8be/full/500%2C/0/default"
},
  {
    templeName: "Freiberg Germany Temple",
    location: "Freiberg, Germany",
    dedicated: "1985, June, 29",
    area: 28000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/36e4c4f367cfab006feb507790c6d9e94c5d146c/full/1600%2C/0/default"
  },
  {
    templeName: "Bern Switzerland Temple",
    location: "Bern, Switzerland",
    dedicated: "1955, September, 11",
    area: 17500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/539a5d0d5b47f90efb7777065666cc5ec6946961/full/1600%2C/0/default"
  },
  {
    templeName: "London England Temple",
    location: "London, England, United Kingdom",
    dedicated: "1958, September, 7",
    area: 27000,
    imageUrl: "https://churchofjesuschrist.org/imgs/3a576e7992d0ccd390d9019e33265ddad023f556/full/1600%2C/0/default"
  },
  {
    templeName: "Hong Kong China Temple",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 13000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/26e0eb04a0a8e9fc7dddd0c1fabdcb0a46926047/full/800%2C/0/default"
  },
  {
    templeName: "Chicago Illinois Temple",
    location: "Chicago, Illinois, United States",
    dedicated: "1985, April, 28",
    area: 52000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/5dbebad7cd20cfc90592b6acb8c5864db3a98ade/full/1600%2C/0/default"
  },
  {
    templeName: "Columbia River Washington Temple",
    location: "Richland, Washington, United States",
    dedicated: "2001, January, 14",
    area: 19000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/418ed6e7e418786b68c563cc952d3c706f299b3e/full/1600%2C/0/default"
  },
  {
    templeName: "Houston Texas Temple",
    location: "Houston, Texas, United States",
    dedicated: "2000, August, 26",
    area: 41000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/a39f94f26161c5ce5dac43b41bbdd896c055bd45/full/1600%2C/0/default"
  },
  {
    templeName: "Denver Colorado Temple",
    location: "Denver, Colorado, United States",
    dedicated: "1986, October, 24",
    area: 39000,
    imageUrl: "https://churchofjesuschrist.org/imgs/fb93a7e38ae87f8d3651c9122531824cb4aba92b/full/1600%2C/0/default"
  },
  {
    templeName: "Portland Oregon Temple",
    location: "Portland, Oregon, United States",
    dedicated: "1989, April, 16",
    area: 28500,
    imageUrl: "https://churchofjesuschrist.org/imgs/bedc04279226377b6c9f40b97b67964520fcd798/full/1600%2C/0/default"
  },
  {
    templeName: "Oakland California Temple",
    location: "Oakland, California, United States",
    dedicated: "1964, January, 9",
    area: 21250,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/252e0ad7a71dedd42068e7ddcfe92d144298387f/full/1600%2C/0/default"
  },
  {
    templeName: "San Diego California Temple",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 35000,
    imageUrl: "https://churchofjesuschrist.org/imgs/4a0d917c90492f259a7a1124c1feaca9739c1853/full/1600%2C/0/default"
  },
  {
    templeName: "Columbus Ohio Temple",
    location: "Columbus, Ohio, United States",
    dedicated: "1999, April, 18",
    area: 42500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/9aea1121d343c8f73b2f358a692b33cf9a2db559/full/1600%2C/0/default"
  },
  {
    templeName: "Bountiful Utah Temple",
    location: "Bountiful, Utah, United States",
    dedicated: "1995, January, 7",
    area: 45000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/5ca3a3f9efd31c159cee4ff9648e4264d8bc7e4f/full/1600%2C/0/default"
  },
  {
    templeName: "Las Vegas Nevada Temple",
    location: "Las Vegas, Nevada, United States",
    dedicated: "1989, December, 16",
    area: 28500,
    imageUrl: "https://churchofjesuschrist.org/imgs/1eab980cebb4f108d04c93b07e31f0dd87ecd33e/full/1600%2C/0/default"
  },
  {
    templeName: "Madrid Spain Temple",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19",
    area: 25000,
    imageUrl: "https://churchofjesuschrist.org/imgs/b3e5b8083cd25f8ec92864259a71c45393ced315/full/1600%2C/0/default"
  },
  {
    templeName: "Sapporo Japan Temple",
    location: "Sapporo, Japan",
    dedicated: "2016, June, 17",
    area: 30000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/9a282c4e3d1c1beac18fbc313ec5f40b5ce34722/full/1600%2C/0/default"
  },
  {
    templeName: "Columbia South Carolina Temple",
    location: "Columbia, South Carolina, United States",
    dedicated: "1999, September, 18",
    area: 28000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/2f71cf60bc284ad6bb73b4c9f42518a9f4fdd362/full/1600%2C/0/default"
  },
  {
  templeName: "Accra Ghana Temple",
  location: "Accra, Ghana",
  dedicated: "2004, January, 11",
  area: 17000,
  imageUrl: "https://churchofjesuschrist.org/imgs/fac2f821c9895e1acd1325cbdb3fa447c4bb4e19/full/1600%2C/0/default"
}

];

document.addEventListener("DOMContentLoaded", () => {
  const templesContainer = document.getElementById("templesContainer");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  // Render temples list
  function renderTemples(list) {
    templesContainer.innerHTML = "";
    if (list.length === 0) {
      templesContainer.innerHTML = "<p>No temples found for this filter.</p>";
      return;
    }
    list.forEach((t) => {
      const card = document.createElement("div");
      card.className = "temple-card";
      card.innerHTML = `
        <img src="${t.imageUrl}" alt="Photo of ${t.templeName}" loading="lazy">
        <h3>${t.templeName}</h3>
        <p><strong>Location:</strong> ${t.location}</p>
        <p><strong>Dedicated:</strong> ${t.dedicated}</p>
        <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
      `;
      templesContainer.appendChild(card);
    });
  }

  // Filter temples
  function filterTemples(filter) {
    templesContainer.classList.remove("small-full-image", "old-full-image", "large-full-image");

    let filtered = [];
    switch (filter) {
      case "old":
        filtered = temples.filter((t) => new Date(t.dedicated).getFullYear() < 1900);
        templesContainer.classList.add("old-full-image");
        break;
      case "new":
        filtered = temples.filter((t) => new Date(t.dedicated).getFullYear() >= 2000);
        break;
      case "large":
        filtered = temples.filter((t) => t.area >= 90000);
        templesContainer.classList.add("large-full-image");
        break;
      case "small":
        filtered = temples.filter((t) => t.area < 90000);
        templesContainer.classList.add("small-full-image");
        break;
      case "home":
      default:
        filtered = temples;
        break;
    }
    return filtered;
  }

  document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
    navMenu.setAttribute("aria-hidden", String(expanded));

    // Toggle hamburger icon between ☰ and ✖
    hamburger.textContent = expanded ? "☰" : "✖";
  });

  // Close nav when clicking a nav button on mobile
  navMenu.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      if (window.innerWidth <= 600) {
        hamburger.setAttribute("aria-expanded", "false");
        navMenu.setAttribute("aria-hidden", "true");
        hamburger.textContent = "☰";
        hamburger.focus();
      }
      // Add your filter logic here if needed
    });

      const filterId = button.id;
      const filteredTemples = filterTemples(filterId);
      renderTemples(filteredTemples);
    });
  });

  // Initial render
  renderTemples(temples);

  // Update footer year and last modified (optional)
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
