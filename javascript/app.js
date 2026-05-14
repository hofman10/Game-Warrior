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

// Mouse tracking for Recent Games cards
const recentGamesCards = document.querySelectorAll("#recent-games .box");

recentGamesCards.forEach((card) => {
  const cardInner = card.querySelector(".box-inner");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    cardInner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    cardInner.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  });
});
