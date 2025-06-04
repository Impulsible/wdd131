const products = [
  { id: "fc-1888", name: "Flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "Power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "Time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "Low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "Warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name; // <-- Use product name as value for clarity
    option.textContent = product.name;
    select.appendChild(option);
  });

  // Rating emoji/label update
  document.querySelectorAll('input[name="rating"]').forEach(input => {
    input.addEventListener("change", () => {
      const value = input.value;
      const ratingDisplay = document.getElementById("selectedRating");
      if (!ratingDisplay) return;

      const emojis = ["😡", "😕", "😐", "😊", "😍"];
      const labels = ["Poor", "Fair", "Average", "Good", "Excellent"];
      const index = parseInt(value, 10) - 1;

      ratingDisplay.textContent = `You selected ${value} out of 5 stars — ${labels[index]} ${emojis[index]}`;
    });
  });

  // Form submit: add hidden 'submitted' input
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', () => {
      if (!form.querySelector('input[name="submitted"]')) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'submitted';
        input.value = 'true';
        form.appendChild(input);
      }
      // Do NOT reset form here — let page navigate away
    });
  }
});

// Utility to parse URL query params (can move to review page)
function getQueryParams() {
  const params = {};
  const query = window.location.search.slice(1);
  if (!query) return params;
  query.split("&").forEach(pair => {
    const [key, val] = pair.split("=");
    const decoded = decodeURIComponent((val || "").replace(/\+/g, " "));
    params[key] = params[key] ? [].concat(params[key], decoded) : decoded;
  });
  return params;
}

// Export button listener (make sure this runs on review.html)
document.addEventListener('DOMContentLoaded', () => {
  const exportBtn = document.getElementById("exportBtn");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const allReviewsKey = "allReviews";
      const reviews = JSON.parse(localStorage.getItem(allReviewsKey)) || [];
      if (!reviews.length) return alert("No reviews to export.");

      const headers = ["Product", "Rating", "InstallDate", "Features", "ReviewText", "Username"];
      const csvRows = [
        headers.join(","),
        ...reviews.map(r =>
          headers.map(h => {
            const val = r[h.toLowerCase()] || "";
            return `"${String(val).replace(/"/g, '""')}"`;
          }).join(",")
        )
      ];

      const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
      const link = document.createElement("a");
      link.href = encodeURI(csvContent);
      link.download = "reviews.csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});


function animateCountUp(element, endValue, duration = 1000) {
  const startValue = 0;
  const frameRate = 30;
  const steps = Math.ceil(duration / frameRate);
  const increment = (endValue - startValue) / steps;
  let current = startValue;
  let step = 0;

  const interval = setInterval(() => {
    current += increment;
    step++;
    element.textContent = `Total reviews submitted: ${Math.floor(current)}`;
    if (step >= steps) {
      element.textContent = `Total reviews submitted: ${endValue}`;
      clearInterval(interval);
    }
  }, frameRate);
}

