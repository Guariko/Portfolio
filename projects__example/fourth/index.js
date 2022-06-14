// TODO: Functions //

function show(element, classElement) {
    element.classList.toggle(classElement);
}

function hide(element, classElement) {
    element.classList.remove(classElement);
}

// FIXME: Functions end //

// TODO: Aside bar //

const showElement = "active";
const headerBars = document.querySelector(".header .fa-bars");
const asideBar = document.querySelector(".aside__bar");
const asideBarItems = document.querySelectorAll(".aside__bar__item");
const desktopbreakPoint = 1000;


headerBars.addEventListener("pointerdown", e => {

    show(asideBar, showElement);
    if (!asideBarItems[0].getAttribute("class").includes("active")) {
        show(asideBarItems[0], showElement)    
    };

    

    if (window.innerWidth >= desktopbreakPoint) {
        if (asideBar.getAttribute("class").includes(showElement)) {

            const root = document.querySelector(":root");
            root.style.setProperty("--left-width-aside-header", "25rem");

            
        }
        
        else {
            const root = document.querySelector(":root");
            root.style.setProperty("--left-width-aside-header", "8rem"); 
  
        }
    }
});

asideBarItems.forEach(item => {
    item.addEventListener("pointermove", e => {
        if (asideBarItems[0].getAttribute("class").includes("active")) {
            hide(asideBarItems[0], showElement);
        };
    });
}
)

asideBarItems.forEach(item => {
    item.addEventListener("pointerdown", e => {
        if (asideBarItems[0].getAttribute("class").includes("active")) {
            hide(asideBarItems[0], showElement);
        };
    });
}
)

asideBar.addEventListener("pointerout", e => {
    if (window.innerWidth >= desktopbreakPoint && (!asideBarItems[0].getAttribute("class").includes("active"))) {
        show(asideBarItems[0], showElement);
    }
})

// FIXME: Aside bar ends //
