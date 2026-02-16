// ================= DAY 4 MOBILE NAV =================

const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("nav-open");
    document.body.classList.toggle("nav-open");
});

// ================= DAY 5 SEARCH =================

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const value = searchInput.value.trim();

    if (value === "") {
        alert("Please enter a search term.");
        return;
    }

    console.log("Searching for:", value);
});
