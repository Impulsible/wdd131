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
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
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

// Form submit: add hidden 'submitted' input & reset after submit
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
    setTimeout(() => form.reset(), 0);
  });
}

const countKey = "reviewCount";
const incrementedKey = "reviewCountIncremented";
const allReviewsKey = "allReviews";

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

const params = getQueryParams();

if (params.submitted === "true" && !sessionStorage.getItem(incrementedKey)) {
  let count = parseInt(localStorage.getItem(countKey) || "0", 10);
  localStorage.setItem(countKey, ++count);
  sessionStorage.setItem(incrementedKey, "true");
}

const reviewCountEl = document.getElementById("reviewCount");
if (reviewCountEl) {
  reviewCountEl.textContent = localStorage.getItem(countKey) || "0";
}

// Render review summary & handle reset button
if (params.submitted === "true") {
  const product = params.productName || "N/A";
  const rating = params.rating || "N/A";
  const installDate = params.installDate || "N/A";
  const features = Array.isArray(params.features) ? params.features.join(", ") : (params.features || "None");
  const reviewText = params.review || "No written review.";
  const username = params.username || "Anonymous";

  const summaryHTML = `
    <h2 id="summaryTitle">Review Summary</h2>
    <ul id="summaryList">
      <li><strong>Product:</strong> ${product}</li>
      <li><strong>Rating:</strong> ${rating} star(s)</li>
      <li><strong>Installation Date:</strong> ${installDate}</li>
      <li><strong>Features Found Useful:</strong> ${features}</li>
      <li><strong>Review:</strong> ${reviewText}</li>
      <li><strong>Submitted by:</strong> ${username}</li>
    </ul>
    <button class="reset-btn" id="resetBtn">Reset All Reviews</button>
  `;

  const reviewSummarySection = document.getElementById("reviewSummarySection");
  if (reviewSummarySection) {
    reviewSummarySection.innerHTML = summaryHTML;

    const review = {
      product,
      rating,
      installDate,
      features,
      reviewText,
      username,
      date: new Date().toLocaleString(),
    };

    const allReviews = JSON.parse(localStorage.getItem(allReviewsKey)) || [];
    allReviews.push(review);
    localStorage.setItem(allReviewsKey, JSON.stringify(allReviews));

    const resetBtn = document.getElementById("resetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all reviews and reset the count?")) {
          localStorage.removeItem(countKey);
          localStorage.removeItem(allReviewsKey);
          sessionStorage.removeItem(incrementedKey);
          if (reviewCountEl) reviewCountEl.textContent = "0";
          reviewSummarySection.innerHTML = "";
          document.querySelector("#reviewTableWrapper table")?.remove();
          alert("All reviews and counters have been reset.");
        }
      });
    }
  }
}

// Toggle review table
const toggleBtn = document.getElementById("toggleTableBtn");
const exportBtn = document.getElementById("exportBtn");
let showing = false;

if (toggleBtn && exportBtn) {
  toggleBtn.addEventListener("click", () => {
    const wrapper = document.getElementById("reviewTableWrapper");
    if (!wrapper) return;
    if (showing) {
      wrapper.querySelector("table")?.remove();
      toggleBtn.textContent = "Show Reviews";
      showing = false;
    } else {
      const reviews = JSON.parse(localStorage.getItem(allReviewsKey)) || [];
      if (!reviews.length) return alert("No reviews to show.");

      const table = document.createElement("table");
      table.innerHTML = `
        <thead>
          <tr>
            <th>Product</th>
            <th>Rating</th>
            <th>Date</th>
            <th>Features</th>
            <th>Review</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          ${reviews.map(r => `
            <tr>
              <td>${r.product}</td>
              <td>${r.rating}</td>
              <td>${r.date}</td>
              <td>${r.features}</td>
              <td>${r.reviewText}</td>
              <td>${r.username}</td>
            </tr>
          `).join("")}
        </tbody>
      `;
      wrapper.insertBefore(table, wrapper.querySelector(".review-actions"));
      toggleBtn.textContent = "Hide Reviews";
      showing = true;
    }
  });

  // Export to CSV with quote escaping
  exportBtn.addEventListener("click", () => {
    const reviews = JSON.parse(localStorage.getItem(allReviewsKey)) || [];
    if (!reviews.length) return alert("No reviews to export.");

    const headers = ["Product", "Rating", "Date", "Features", "Review", "Username"];
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
