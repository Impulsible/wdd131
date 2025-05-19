// Wrap your code to ensure DOM is ready
document.addEventListener('DOMContentLoaded', () => {
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

  if (modifiedSpan) {
    modifiedSpan.textContent = document.lastModified;
  }
});
