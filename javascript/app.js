const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu-container");
const navLinks = document.querySelectorAll("#nav-menu-container a");

// toggle hamburger
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

//  close menu when a link is clicked (mobile)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 767) {
      navMenu.classList.remove("open");
    }
  });
});
