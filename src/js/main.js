import "../scss/main.scss";

console.log("hello");
var navLinkItems = document.querySelectorAll(".nav-link");

navLinkItems.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinkItems.forEach((link) => link.classList.remove("clicked-hr"));
    navLink.classList.add("clicked-hr");
  });
});
var navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop >= 150 ||
    document.documentElement.scrollTop >= 150
  ) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});
