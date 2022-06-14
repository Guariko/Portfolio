// TODO: Functions start */

function show(element, classToShowElement) {
    element.classList.toggle(classToShowElement);
}

function hide(element, classToBeRemoved) {
    element.classList.remove(classToBeRemoved);
}

// FIXME: Functions end //

// TODO: Header starts //

const headerNavBarContainer = document.querySelector(".header__nav__bar__container");
const closeHeaderNavBar = document.querySelector(".header__nav__bar__container .fa-times");
const showHeaderNavBar = document.querySelector(".header .fa-bars");
const classToShowElement = "active";
const headerNavBarItems = document.querySelectorAll(".header__nav__bar__item a");


showHeaderNavBar.addEventListener("click", e => {
    show(headerNavBarContainer, classToShowElement);
});

closeHeaderNavBar.addEventListener("click", e => {
    hide(headerNavBarContainer, classToShowElement);
});

headerNavBarItems.forEach(item => {
    item.addEventListener("click", e => {
        hide(headerNavBarContainer, classToShowElement);
    });
});

// FIXME: Header ends //

// TODO: Swiper starts //

var swiper = new Swiper(".project__images", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

// FIXME: Swiper ends //  
