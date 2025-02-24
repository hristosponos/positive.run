var burgerMenu = document.getElementById("burger");
const menu = document.getElementById("burger-menu");
const menuLinks = document.querySelectorAll("#burger-menu li");


burgerMenu.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    burgerMenu.src = "assets/burger.svg";
  } else {
    menu.classList.add("active");
    burgerMenu.src = "assets/X.svg";
  }
});


menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    burgerMenu.src = "assets/burger.svg";
    menu.classList.remove("active");
  });
});