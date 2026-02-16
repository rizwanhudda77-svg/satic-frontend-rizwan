/* ================= RESET ================= */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ================= DAY 1 - DESIGN TOKENS ================= */
:root {
    --primary-color: #4a6cf7;
    --bg-color: #f4f4f4;
}

/* ================= GLOBAL ================= */
body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--bg-color);
}

body.nav-open {
    overflow: hidden;
}

main {
    padding: 60px 20px;
    text-align: center;
}

footer {
    background: var(--primary-color);
    color: white;
    padding: 15px;
    text-align: center;
}

/* ================= DAY 3 - NAVBAR ================= */

.navbar {
    background: white;
    padding: 15px 40px;
    border-bottom: 1px solid #ddd;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-container {
    display: flex;
    align-items: center;
    position: relative;
}

/* Brand Left */
.brand {
    font-weight: 700;
    font-size: 20px;
    color: var(--primary-color);
}

/* Center Links */
.nav-links {
    list-style: none;
    display: flex;
    gap: 30px;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.nav-links a {
    text-decoration: none;
    color: black;
    font-weight: 500;
    transition: 0.2s;
}

.nav-links a:hover {
    color: var(--primary-color);
}

.nav-links a.active {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
}

/* CTA Right */
.nav-cta {
    margin-left: auto;
}

/* Hamburger */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    margin-left: 20px;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: black;
}

/* ================= DAY 2 - BUTTON SYSTEM ================= */

.btn {
    padding: 10px 22px;
    border-radius: 6px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: 0.2s;
}

.btn-primary {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

.btn-primary:hover {
    opacity: 0.9;
}

.btn-primary:active {
    transform: scale(0.96);
}

.btn-outline {
    background: transparent;
    color: var(--primary-color);
    border-color: var(--primary-color);
}

.btn-outline:hover {
    background: var(--primary-color);
    color: white;
}

.btn-outline:active {
    transform: scale(0.96);
}

.btn:disabled {
    background: #ddd;
    border-color: #bbb;
    color: #888;
    cursor: not-allowed;
    opacity: 0.6;
}

.button-group {
    margin: 25px 0;
}

/* ================= DAY 5 - HERO ================= */

.hero {
    background: white;
    padding: 80px 20px 60px;
    text-align: center;
}

.hero h1 {
    font-size: 36px;
    margin-bottom: 10px;
}

.hero p {
    margin-bottom: 30px;
    color: #555;
}

.search-form {
    display: flex;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
}

.search-form input {
    flex: 1;
    padding: 12px 15px;
    border: 2px solid #ccc;
    border-right: none;
    border-radius: 6px 0 0 6px;
    outline: none;
}

.search-form input:focus {
    border-color: var(--primary-color);
}

.search-btn {
    padding: 0 18px;
    border: 2px solid var(--primary-color);
    background: var(--primary-color);
    color: white;
    border-radius: 0 6px 6px 0;
    cursor: pointer;
}

.search-btn:hover {
    opacity: 0.9;
}

.visually-hidden {
    position: absolute;
    left: -9999px;
}

/* ================= MOBILE - DAY 4 ================= */

@media (max-width: 768px) {

    /* Hide center + CTA */
    .nav-links {
        display: none;
        position: static;
        transform: none;
    }

    .nav-cta {
        display: none;
    }

    /* Show hamburger */
    .hamburger {
        display: flex;
        margin-left: auto;
    }

    /* When open */
    .navbar.nav-open .nav-links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;

        background: white;
        gap: 30px;
        z-index: 999;
    }

    .navbar.nav-open .nav-cta {
        display: block;
        position: fixed;
        bottom: 120px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
    }

    .hero h1 {
        font-size: 28px;
    }
}

/* ================= JOURNEY LIST ================= */

.journey-list {
    list-style: none;
    margin-top: 20px;
}

.journey-list li {
    background: white;
    padding: 12px;
    margin: 15px auto;
    width: 300px;
    border-radius: 8px;
}
