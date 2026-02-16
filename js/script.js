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
