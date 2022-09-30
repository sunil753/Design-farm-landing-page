window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

const hamburger = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger.addEventListener("click", () => {
  container.classList.toggle("open");
});
