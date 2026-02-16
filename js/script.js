const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
    hamburger.classList.toggle("active");
    body.classList.toggle("no-scroll");
});

// Auto close when link clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("nav-open");
        hamburger.classList.remove("active");
        body.classList.remove("no-scroll");
    });
});
