const buttonMenu = document.querySelector(".header-button");
const burgerMenu = document.querySelector(".header-burger_menu");
const modalWrap = document.querySelector(".modal_wrap");
const body = document.querySelector("body");


buttonMenu.addEventListener("click", function() {
  if (buttonMenu.classList.contains("button-active")) {
    buttonMenu.classList.remove("button-active");
    burgerMenu.classList.remove("burger_menu-active");
    modalWrap.style.display = "none";
    body.classList.remove("modal_wrap-active");
  } else {
    buttonMenu.classList.add("button-active");
    burgerMenu.classList.add("burger_menu-active");
    modalWrap.style.display = "block";
    body.classList.add("modal_wrap-active");
  }
});

modalWrap.addEventListener("click", () => {
  burgerMenu.classList.remove("burger_menu-active");
  buttonMenu.classList.remove("button-active");
  modalWrap.style.display = "none";
  body.classList.remove("modal_wrap-active");
});

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.remove("burger_menu-active");
  buttonMenu.classList.remove("button-active");
  modalWrap.style.display = "none";
  body.classList.remove("modal_wrap-active");
});