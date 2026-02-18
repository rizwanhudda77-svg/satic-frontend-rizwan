// ================= DAY 4 - HAMBURGER =================
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("nav-open");
    });
}

// ================= DAY 5 - HERO SEARCH =================
const searchForm = document.getElementById("searchForm");

if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Search triggered!");
    });
}

// ================= DAY 7 - TOAST SYSTEM =================
const toastContainer = document.getElementById("toast-container");
const successBtn = document.getElementById("successBtn");
const errorBtn = document.getElementById("errorBtn");

function createToast(message, type) {
    const toast = document.createElement("div");
    toast.classList.add("toast", type);

    toast.innerHTML = `
        <span>${type === "success" ? "✔ " : "⚠ "} ${message}</span>
        <button>&times;</button>
    `;

    toastContainer.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    // Auto remove after 3s
    const autoRemove = setTimeout(() => {
        removeToast(toast);
    }, 3000);

    // Manual close
    toast.querySelector("button").addEventListener("click", () => {
        clearTimeout(autoRemove);
        removeToast(toast);
    });
}

function removeToast(toast) {
    toast.classList.remove("show");

    setTimeout(() => {
        toast.remove(); // DOM CLEANUP
    }, 300);
}

// Button Listeners
if (successBtn) {
    successBtn.addEventListener("click", () => {
        createToast("Operation Successful!", "success");
    });
}

if (errorBtn) {
    errorBtn.addEventListener("click", () => {
        createToast("Something went wrong!", "error");
    });
}
