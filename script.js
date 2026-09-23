const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

document.addEventListener("click", (event) => {
  const clickedInsideMenu = navMenu.contains(event.target);
  const clickedToggle = navToggle.contains(event.target);

  if (!clickedInsideMenu && !clickedToggle && navMenu.classList.contains("open")) {
    navMenu.classList.remove("open");
  }
});