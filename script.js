// Smooth Scroll for Navigation Links
document.querySelectorAll('header a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const sectionId = this.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // 60px padding from top
        behavior: "smooth",
      });
    }
  });
});

// Google Forms iframe Resize
window.addEventListener("DOMContentLoaded", () => {
  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframe.style.height =
      iframe.contentWindow.document.body.scrollHeight + "px";
  }
});
