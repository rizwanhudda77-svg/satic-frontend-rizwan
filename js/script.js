document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navbar");

    hamburger.addEventListener("click", function () {
        navbar.classList.toggle("nav-open");
        document.body.classList.toggle("nav-open");
    });

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const value = searchInput.value.trim();

        if (value === "") {
            alert("Please enter a search term.");
            return;
        }

        console.log("Searching for:", value);
    });

});
