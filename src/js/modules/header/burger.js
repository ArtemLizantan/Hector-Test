function burger() {
  const burger = document.querySelector(".icon-menu ");
  const burgerMenu = document.querySelector(".header__navigation");
  const preScrin = document.querySelector(".menu__pre-scrin");
  const body = document.querySelector("body")

  if (burger) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("_active");
      body.classList.toggle("_lock")
      burgerMenu.classList.toggle("_active");
      preScrin.classList.toggle("_active");
    });
  }
}

burger();
