const burgerMenu = document.getElementById("burger");
const menu = document.getElementById("burger-menu");

burgerMenu.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    burgerMenu.src = "assets/burger.svg";
  } else {
    menu.classList.add("active");
    burgerMenu.src = "assets/X.svg";
  }
});
