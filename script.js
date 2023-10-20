const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close the menu when a link is clicked
nav.addEventListener("click", () => {
  nav.classList.remove("active");
});
