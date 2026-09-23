const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = navMenu.querySelectorAll("a");
const expandButtons = document.querySelectorAll(".expand-btn");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

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

expandButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const isExpanding = !card.classList.contains("expanded");

    card.classList.toggle("expanded");
    btn.textContent = isExpanding ? "← Show less" : "Read more ↓";

    if (isExpanding) {
      card.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});