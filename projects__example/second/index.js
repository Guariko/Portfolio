// TODO: Functions //

function show(element, elementClass) {
     element.classList.toggle(elementClass);
}

function hide(element, elementClass) {
    element.classList.remove(elementClass);
}

function changeBaseOnWindowSize(element, windowSizeToVerify, ifValue, elseValue) {

    if (window.innerWidth >= windowSizeToVerify) {
        element.innerHTML = ifValue;
    }
    
    else {
        element.innerHTML = elseValue;
    };

}

// FIXME: Funtions end //

// TODO: Header starts //

const headerBars = document.querySelector(".header .fa-bars");
const headerNavBar = document.querySelector(".header__nav__bar__container");
const closeHeaderNavBar = document.querySelector(".header__nav__bar__container .fa-times");
const headerNavBarItem = document.querySelectorAll(".header__nav__bar__item a");

headerNavBarItem.forEach(item => {
    item.addEventListener("click", () => {
        hide(headerNavBar, "active");
    })
});

headerBars.addEventListener("click", () => {
    show(headerNavBar, "active");
});

closeHeaderNavBar.addEventListener("click", () => {
    hide(headerNavBar, "active");
});

// FIXME: Header ends //

// TODO: Steps and contact //

let stepsTitle = document.querySelector(".steps h2");
const stepsTitleIfValue = "Steps to start your <br/> plants off right";
const stepsTitleElseValue = "Steps to start your plants off right";
changeBaseOnWindowSize(stepsTitle, 400, stepsTitleIfValue, stepsTitleElseValue);

const contactInformation = document.querySelector(".contact__information h2");
let contactInformationIfValue = "Reach out to us today <br/>via any of the given <br/>information";
let contactInformationElseValue = "Reach out to us today via any of the given information";

changeBaseOnWindowSize(contactInformation, 939, contactInformationIfValue, contactInformationElseValue);


window.addEventListener("resize", () => {
    changeBaseOnWindowSize(stepsTitle, 400, stepsTitleIfValue, stepsTitleElseValue);
    changeBaseOnWindowSize(contactInformation, 939, contactInformationIfValue, contactInformationElseValue);
});

// FIXME: Steps and contact end //

// TODO: FAQs starts //

const questionContent = document.querySelectorAll(".question__content");

questionContent.forEach(question => {
    question.addEventListener("click", () => {

        if (question.getAttribute("class").includes("active")) {
            question.children[0].children[0].textContent = "+";
            hide(question, "active");
        }
        
        else {
            question.children[0].children[0].textContent = "-";
            show(question, "active");
        }
    });
});

// FIXME: FAQs ends //

// TODO: Footer starts //

const mobileContent = document.querySelectorAll(".mobile .more__informations");
const footerContent = document.querySelector(".footer__content");
const cardsContainer = document.querySelector(".cards__container");
const mobile = document.querySelector(".mobile");

if (window.innerWidth >= 958) {

    footerContent.insertBefore(mobileContent[1], cardsContainer);
    footerContent.insertBefore(mobileContent[0], mobileContent[1]);
    if ( Array.from(footerContent.children).includes(mobile)) {
        footerContent.removeChild(mobile);
    };
}

else {
        
    footerContent.insertBefore(mobile, cardsContainer);
    mobileContent.forEach(content => {
          mobile.appendChild(content);
      })
}

window.addEventListener("resize", () => {

    if (window.innerWidth >= 958) {
    
        footerContent.insertBefore(mobileContent[1], cardsContainer);
        footerContent.insertBefore(mobileContent[0], mobileContent[1]);
        if ( Array.from(footerContent.children).includes(mobile)) {
            footerContent.removeChild(mobile);
        };
    }

    else {
        
        footerContent.insertBefore(mobile, cardsContainer);
        mobileContent.forEach(content => {
              mobile.appendChild(content);
          })
    }
    
})

// FIXME: Footer ends //