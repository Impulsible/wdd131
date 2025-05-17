// temples.js

// Toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded);
  
  navMenu.classList.toggle('active');
  
  hamburger.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
  
  navMenu.setAttribute('aria-hidden', navMenu.classList.contains('active') ? 'false' : 'true');
});


  // Footer dynamic year and last modified
  const yearSpan = document.getElementById("current-year");
  const modifiedSpan = document.getElementById("last-modified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  document.getElementById("lastModified").textContent = document.lastModified;

