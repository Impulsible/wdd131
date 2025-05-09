document.addEventListener("DOMContentLoaded", () => {
  // Update the current year dynamically in the footer or anywhere required
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  // Display the last modified date of the document
  document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});

// Scroll to the top of the page smoothly when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Optional: Add event listener for back-to-top button click (if not using inline onclick)
document.getElementById("back-to-top-button").addEventListener("click", scrollToTop);
