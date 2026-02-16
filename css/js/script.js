const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    document.body.classList.toggle("nav-open");
});

/* Auto close when link clicked */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        document.body.classList.remove("nav-open");
    });
});
