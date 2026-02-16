document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (hamburger && navbar) {

        hamburger.addEventListener("click", function () {
            navbar.classList.toggle("nav-open");
        });

        // Auto close when clicking link
        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                navbar.classList.remove("nav-open");
            });
        });
    }

});
