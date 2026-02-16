document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("open");
        document.body.classList.toggle("nav-open");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            document.body.classList.remove("nav-open");
        });
    });

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const value = searchInput.value.trim();

        if (value === "") {
            alert("Please enter a search term.");
            return;
        }

        console.log("Searching for:", value);
        searchInput.value = "";
    });

});
