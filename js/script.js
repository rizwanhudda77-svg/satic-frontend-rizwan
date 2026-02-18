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
/* ================= DAY 8 - CONTACT VALIDATION ================= */

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

function validateName() {
    const value = nameInput.value.trim();

    if (value.length < 3) {
        nameInput.classList.add("input-error");
        nameInput.classList.remove("input-success");
        nameError.textContent = "Name must be at least 3 characters.";
        return false;
    } else {
        nameInput.classList.remove("input-error");
        nameInput.classList.add("input-success");
        nameError.textContent = "";
        return true;
    }
}

function validateEmail() {
    const value = emailInput.value.trim();

    if (!value.includes("@") || !value.includes(".")) {
        emailInput.classList.add("input-error");
        emailInput.classList.remove("input-success");
        emailError.textContent = "Enter a valid email address.";
        return false;
    } else {
        emailInput.classList.remove("input-error");
        emailInput.classList.add("input-success");
        emailError.textContent = "";
        return true;
    }
}

function validateMessage() {
    const value = messageInput.value.trim();

    if (value.length === 0) {
        messageInput.classList.add("input-error");
        messageInput.classList.remove("input-success");
        messageError.textContent = "Message cannot be empty.";
        return false;
    } else {
        messageInput.classList.remove("input-error");
        messageInput.classList.add("input-success");
        messageError.textContent = "";
        return true;
    }
}

function checkFormValidity() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    submitBtn.disabled = !(isNameValid && isEmailValid && isMessageValid);
}

/* Real-time validation */
nameInput.addEventListener("input", checkFormValidity);
emailInput.addEventListener("input", checkFormValidity);
messageInput.addEventListener("input", checkFormValidity);

/* Prevent actual submit */
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
});
/* ================= DAY 10 - BACK TO TOP ================= */

const backToTopBtn = document.getElementById("backToTop");

let isVisible = false;

window.addEventListener("scroll", () => {

    if (window.scrollY > 500 && !isVisible) {
        backToTopBtn.classList.add("show-btn");
        isVisible = true;
    }

    if (window.scrollY <= 500 && isVisible) {
        backToTopBtn.classList.remove("show-btn");
        isVisible = false;
    }

});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
