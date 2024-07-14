const eventBtn = document.getElementById("event-btn");
const navLinks = document.getElementById("nav-links");
const eventBtnIcon = eventBtn.querySelector("i");

eventBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  eventBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-event-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  eventBtnIcon.setAttribute("class", "ri-event-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});


// contact container
ScrollReveal().reveal(".contact__container", {
  ...scrollRevealOption,
  interval: 500,
});
