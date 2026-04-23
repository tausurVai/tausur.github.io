// Theme Toggle Logic
const themeBtn = document.getElementById("theme-toggle");
const icon = themeBtn.querySelector("i");
const body = document.body;

themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLight = body.classList.contains("light-mode");
    
    // Switch icon
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
    
    // Save preference
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
});

// Scroll Reveal Observer
const reveals = document.querySelectorAll(".reveal");

const observerOptions = {
    threshold: 0.15
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Optionally unobserve to only run animation once
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

reveals.forEach(reveal => {
    revealObserver.observe(reveal);
});

// Initial Load Setup
document.addEventListener("DOMContentLoaded", () => {
    // Check saved theme
    if (localStorage.getItem("portfolio-theme") === "light") {
        body.classList.add("light-mode");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
});