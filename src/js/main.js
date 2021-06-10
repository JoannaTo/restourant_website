import "../scss/main.scss";

const data = [
  {
    title: "John Doe",
    src: "./img/pexels-andrea-piacquadio-3767407.jpg ",
    text: "some text",
  },
  {
    title: "Jane Doe",
    src: "./img/pexels-andrea-piacquadio-3767407.jpg ",
    text: "some text",
  },
];

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
