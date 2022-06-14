// TODO: Functions //

function appendClass(element, classElement) {
    element.classList.toggle(classElement);
}

function removeClass(element, classElement) {
    element.classList.remove(classElement);
}

function changeTitle (element, widthSize, IfValue, ElseValue) {
    if (window.innerWidth >= widthSize) {
        element.innerHTML = IfValue;
    }

    else {
        element.innerHTML = ElseValue;
    }
}

// FIXME: Function ends //

// TODO: Header //

const closeHeaderNavBar = document.querySelector(".header .fa-times");
const headerNavBar = document.querySelector(".header__nav__bar__container");
const headerBars = document.querySelector(".header .fa-bars");

headerBars.addEventListener("click", e => {
    appendClass(headerNavBar, "active");
})

closeHeaderNavBar.addEventListener("click", e => {
    removeClass(headerNavBar, "active");
});

// FIXME: Header ends //

// TODO: Discount section //

const discountTitle = document.querySelector(".discount__content h2");
const discountTitleIfValue = "Immerse yourself in <br/>your music";
const discountTitleElseValue = "Immerse yourself in your music";


changeTitle(discountTitle, 650, discountTitleIfValue, discountTitleElseValue);

window.addEventListener("resize", e => {
    changeTitle(discountTitle, 650, discountTitleIfValue, discountTitleElseValue);
});

// FIXME: Discount section ends //

// TODO: Footer adjustments //

const footer = document.querySelector(".footer");
const footerNavBarContainerMobile = document.querySelector(".footer__content");
const footerNavBars = document.querySelectorAll(".footer__nav__bar__container");
const footerForm = document.querySelector(".footer__brand__icons__container");
const footerNavBarBreakPoint = 861;


function changeMobileAndDesktopFooter() {

    if (window.innerWidth >= footerNavBarBreakPoint) {
          
        if (Array.from(footer.children).includes(footerNavBarContainerMobile)) {
            
            footer.removeChild(footerNavBarContainerMobile);
            footer.insertBefore(footerNavBars[1], footerForm);
            footer.insertBefore(footerNavBars[0], footerNavBars[1]);
        };
    }
    
    else {

        if (!Array.from(footer.children).includes(footerNavBarContainerMobile)) {

            footer.insertBefore(footerNavBarContainerMobile, footerForm);
            footerNavBars.forEach(navbar => {
                footerNavBarContainerMobile.appendChild(navbar);
            });
        }
    }
}

changeMobileAndDesktopFooter();

window.addEventListener("resize", e => {
    changeMobileAndDesktopFooter();
});



