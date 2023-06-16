function burger() {
  const burger = document.querySelector(".icon-menu ");
  const burgerMenu = document.querySelector(".open-menu");
  const header = document.querySelector("header");
  const main = document.querySelector("main");

  const body = document.querySelector("body");
  if (burger) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("_active");
      body.classList.toggle("_lock");
      burgerMenu.classList.toggle("_active");
    });
  }
}

burger();
