document.addEventListener("DOMContentLoaded", function () {
  // === Hamburger Menu ===
  const toggleButton = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const expanded = navLinks.classList.contains('open');
      toggleButton.setAttribute('aria-expanded', expanded);
    });
  }

  // === Highlight active nav link ===
  const currentPage = window.location.pathname.split("/").pop();
  const navItems = document.querySelectorAll('.nav-link');
  navItems.forEach(link => {
    const targetPage = link.getAttribute('data-page');
    if (currentPage === targetPage) {
      link.classList.add('active');
    }
  });

  // === Footer info ===
  const yearSpan = document.getElementById('year');
  const lastModifiedSpan = document.getElementById('lastModified');
  const siteNameSpan = document.getElementById('siteName');

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;
  if (siteNameSpan) siteNameSpan.textContent = '🌮 Naija Snacks 🌮';

  // === Snack of the Day ===
  const snacks = [
    { name: "Puff-Puff - Sweet, fluffy fried dough balls.", image: "images/puff3.webp", alt: "Golden brown puff-puff balls frying" },
    { name: "Suya - Grilled, spicy meat skewer with yaji spice.", image: "images/suya1.webp", alt: "Grilled spicy suya skewers" },
    { name: "Chin Chin - Crunchy, sweet fried snack bites.", image: "images/chinchin.jpg", alt: "Bowl of crunchy chin chin" },
    { name: "Boli - Roasted plantain, soft and smoky.", image: "images/boli.jpg", alt: "Roasted plantain on fire" },
    { name: "Akara - Fried bean cakes, crispy on the outside.", image: "images/akara1.webp", alt: "Hot akara on tray" }
  ];

  const generateBtn = document.getElementById("generate-snack");
  const resultText = document.querySelector("#snack-result p");
  const resultImage = document.getElementById("snack-image");

  if (generateBtn && resultText && resultImage) {
    generateBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * snacks.length);
      const selectedSnack = snacks[randomIndex];
      resultText.textContent = `🌟 ${selectedSnack.name}`;
      resultImage.src = selectedSnack.image;
      resultImage.alt = selectedSnack.alt;
      resultImage.style.display = "block";
    });
  }

  // === Like buttons ===
  const likeButtons = document.querySelectorAll(".like-btn");
  likeButtons.forEach(button => {
    const snack = button.getAttribute("data-snack");
    const countSpan = document.getElementById(`like-count-${snack}`);
    let count = parseInt(localStorage.getItem(`likes-${snack}`)) || 0;
    let liked = localStorage.getItem(`liked-${snack}`) === "true";

    if (countSpan) countSpan.textContent = count;
    button.textContent = liked ? "👎 Unlike" : "👍 Like";

    button.addEventListener("click", () => {
      liked = !liked;
      count = liked ? count + 1 : Math.max(count - 1, 0);
      localStorage.setItem(`likes-${snack}`, count);
      localStorage.setItem(`liked-${snack}`, liked);
      if (countSpan) countSpan.textContent = count;
      button.textContent = liked ? "👎 Unlike" : "👍 Like";
    });
  });

  // === Snack filter ===
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const snackSections = document.querySelectorAll('.snack-section');

  if (filterButtons.length && snackSections.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        snackSections.forEach(section => {
          const category = section.dataset.category;
          section.style.display = (filter === 'all' || category.includes(filter)) ? 'block' : 'none';
        });

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  }

  // === Contact Form Logic ===
  const form = document.getElementById("contactForm");
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const msgField = document.getElementById("message");
  const confirmMsg = document.getElementById("confirmation-message");
  const submitBtn = document.getElementById("submitBtn");

  if (form && nameField && emailField && msgField && confirmMsg && submitBtn) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = nameField.value.trim();
      const email = emailField.value.trim();
      const message = msgField.value.trim();

      if (!name || !email || !message) {
        confirmMsg.textContent = "⚠️ Please fill in all required fields.";
        confirmMsg.style.color = "red";
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      setTimeout(() => {
        confirmMsg.textContent = "✅ Thank you for contacting Naija Snacks! We'll get back to you soon.";
        confirmMsg.style.color = "green";
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";

        setTimeout(() => {
          confirmMsg.textContent = "";
        }, 4000);
      }, 1200);
    });
  } else if (window.location.pathname.includes("contact")) {
    console.warn("🚨 One or more contact form elements could not be found on this page.");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  // === Header: Toggle hamburger ===
  const toggleButton = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // === Highlight active nav link ===
  const currentPage = window.location.pathname.split("/").pop();
  const navItems = document.querySelectorAll('.nav-link');
  navItems.forEach(link => {
    const targetPage = link.getAttribute('data-page');
    if (currentPage === targetPage) {
      link.classList.add('active');
    }
  });

  // === Footer info ===
  const yearSpan = document.getElementById('year');
  const lastModifiedSpan = document.getElementById('lastModified');
  const siteNameSpan = document.getElementById('siteName');

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;
  if (siteNameSpan) siteNameSpan.textContent = '🌮 Naija Snacks 🌮';

  // === Snack of the Day ===
  const snacks = [
    { name: "Puff-Puff - Sweet, fluffy fried dough balls.", image: "images/puff3.webp", alt: "Golden brown puff-puff balls frying" },
    { name: "Suya - Grilled, spicy meat skewer with yaji spice.", image: "images/suya1.webp", alt: "Grilled spicy suya skewers" },
    { name: "Chin Chin - Crunchy, sweet fried snack bites.", image: "images/chinchin.jpg", alt: "Bowl of crunchy chin chin" },
    { name: "Boli - Roasted plantain, soft and smoky.", image: "images/boli.jpg", alt: "Roasted plantain on fire" },
    { name: "Akara - Fried bean cakes, crispy on the outside.", image: "images/akara1.webp", alt: "Hot akara on tray" }
  ];

  const generateBtn = document.getElementById("generate-snack");
  const resultText = document.querySelector("#snack-result p");
  const resultImage = document.getElementById("snack-image");

  if (generateBtn && resultText && resultImage) {
    generateBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * snacks.length);
      const selectedSnack = snacks[randomIndex];
      resultText.textContent = `🌟 ${selectedSnack.name}`;
      resultImage.src = selectedSnack.image;
      resultImage.alt = selectedSnack.alt;
      resultImage.style.display = "block";
    });
  }

  // === Like buttons ===
  const likeButtons = document.querySelectorAll(".like-btn");
  likeButtons.forEach(button => {
    const snack = button.getAttribute("data-snack");
    const countSpan = document.getElementById(`like-count-${snack}`);
    let count = parseInt(localStorage.getItem(`likes-${snack}`)) || 0;
    let liked = localStorage.getItem(`liked-${snack}`) === "true";

    if (countSpan) countSpan.textContent = count;
    button.textContent = liked ? "👎 Unlike" : "👍 Like";

    button.addEventListener("click", () => {
      liked = !liked;
      count = liked ? count + 1 : Math.max(count - 1, 0);
      localStorage.setItem(`likes-${snack}`, count);
      localStorage.setItem(`liked-${snack}`, liked);
      if (countSpan) countSpan.textContent = count;
      button.textContent = liked ? "👎 Unlike" : "👍 Like";
    });
  });

  // === Snack filter ===
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const snackSections = document.querySelectorAll('.snack-section');

  if (filterButtons.length > 0 && snackSections.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        snackSections.forEach(section => {
          const category = section.dataset.category;
          section.style.display = (filter === 'all' || category.includes(filter)) ? 'block' : 'none';
        });

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  }

  // === Contact Form Logic ===
  const form = document.getElementById("contactForm");
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const msgField = document.getElementById("message");
  const confirmMsg = document.getElementById("confirmation-message");
  const submitBtn = document.getElementById("submitBtn");

  if (form && nameField && emailField && msgField && confirmMsg && submitBtn) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = nameField.value.trim();
      const email = emailField.value.trim();
      const message = msgField.value.trim();

      if (!name || !email || !message) {
        confirmMsg.textContent = "⚠️ Please fill in all required fields.";
        confirmMsg.style.color = "red";
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      setTimeout(() => {
        confirmMsg.textContent = "✅ Thank you for contacting Naija Snacks! We'll get back to you soon.";
        confirmMsg.style.color = "green";
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";

        setTimeout(() => {
          confirmMsg.textContent = "";
        }, 4000);
      }, 1200);
    });
  } else if (window.location.pathname.includes("contact")) {
    console.warn("🚨 One or more contact form elements could not be found on this page.");
  }

  // === Toggle Team Member Bios ===
  document.querySelectorAll('.bio-toggle').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const thisBio = this.closest('.team-member').querySelector('.bio');
      const allBios = document.querySelectorAll('.team-member .bio');

      allBios.forEach(bio => {
        if (bio !== thisBio) {
          bio.classList.remove('show');
        }
      });

      thisBio.classList.toggle('show');
    });
  });
});

 document.querySelectorAll('.bio-toggle').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const bio = this.closest('.team-member').querySelector('.bio');
      bio.classList.toggle('show');
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const expanded = navLinks.classList.contains('open');
      toggleButton.setAttribute('aria-expanded', expanded);
    });
  }

  // Highlight current page
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const expanded = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", String(!expanded));
  });
});
