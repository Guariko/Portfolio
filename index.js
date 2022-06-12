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

showHeaderNavBar.addEventListener("click", e => {
    show(headerNavBarContainer, classToShowElement);
});

closeHeaderNavBar.addEventListener("click", e => {
    hide(headerNavBarContainer, classToShowElement);
});

// FIXME: Header ends //
