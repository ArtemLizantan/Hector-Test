function headerMenu() {
  const buttonCatalog = document.querySelector(".header__link--catalog");
  const buttonCloseCatalog = document.querySelector(".menu__button-close");
  const menu = document.querySelector(".menu");
  buttonCatalog.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.add("_open");
  });
  buttonCloseCatalog.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.remove("_open");
  });
}

headerMenu();
