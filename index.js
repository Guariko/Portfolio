// TODO: Functions start */

function show(element, classToShowElement) {
  element.classList.toggle(classToShowElement);
}

function hide(element, classToBeRemoved) {
  element.classList.remove(classToBeRemoved);
}

// FIXME: Functions end //

// TODO: Header starts //

const headerNavBarContainer = document.querySelector(
  ".header__nav__bar__container"
);
const closeHeaderNavBar = document.querySelector(
  ".header__nav__bar__container .fa-times"
);
const showHeaderNavBar = document.querySelector(".header .fa-bars");
const classToShowElement = "active";
const headerNavBarItems = document.querySelectorAll(
  ".header__nav__bar__item a"
);

showHeaderNavBar.addEventListener("click", (e) => {
  show(headerNavBarContainer, classToShowElement);
});

closeHeaderNavBar.addEventListener("click", (e) => {
  hide(headerNavBarContainer, classToShowElement);
});

headerNavBarItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    hide(headerNavBarContainer, classToShowElement);
  });
});

// FIXME: Header ends //

// TODO: Swiper starts //

var swiper = new Swiper(".project__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mobile__project__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// FIXME: Swiper ends //
