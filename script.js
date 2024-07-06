// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('header a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const sectionId = this.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);

    window.scrollTo({
      top: section.offsetTop - 60, // 60px padding from top
      behavior: "smooth",
    });
  });
});

// Toggle Menu for Mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Google Forms iframe Resize
window.addEventListener("DOMContentLoaded", () => {
  const iframe = document.querySelector("iframe");
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
});
