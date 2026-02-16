document.addEventListener("DOMContentLoaded", function () {

    /* ================= DAY 4 - MOBILE NAV ================= */

    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (hamburger && navbar) {

        hamburger.addEventListener("click", function () {
            navbar.classList.toggle("nav-open");
            document.body.classList.toggle("nav-open");
        });

        // Auto close when clicking a link
        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                navbar.classList.remove("nav-open");
                document.body.classList.remove("nav-open");
            });
        });
    }


    /* ================= DAY 5 - HERO SEARCH ================= */

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    if (searchForm && searchInput) {

        searchForm.addEventListener("submit", function (event) {

            event.preventDefault(); // stop page reload

            const value = searchInput.value.trim();

            if (value === "") {
                alert("Please enter a search term.");
                return;
            }

            console.log("Searching for:", value);
            searchInput.value = "";
        });

    }

});
