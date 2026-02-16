const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const body = document.body;

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");   // <-- MATCH CSS
    body.classList.toggle("nav-open");  // scroll lock
});

// Auto close when link clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        body.classList.remove("nav-open");
    });
});
/* ================= HERO SEARCH LOGIC ================= */

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page reload

    const value = searchInput.value.trim();

    if (value === "") {
        alert("Please enter a search term.");
    } else {
        console.log("Searching for:", value);
        searchInput.value = "";
    }
});
