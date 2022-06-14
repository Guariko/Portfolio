// TODO: Functions //

function show(element) {
      element.classList.toggle("show");
}

// FIXME: Functions end //

// TODO: Header section starts //

const headerNavBar = document.querySelector(".header__nav__bar__container");
const bars = document.querySelector(".fa-bars");
const headerNavBarItems = document.querySelectorAll(".header__navegation__bar__item");

bars.addEventListener("click", () => {
    show(headerNavBar);
});

headerNavBarItems.forEach(item => {
  item.addEventListener("click", () => {
    headerNavBar.classList.remove("show");
  })
});

// FIXME: Header section ends //

// TODO: Popular swiper starts //

let swiper = new Swiper(".popular__swiper", {
        slidesPerView: 1,
        spaceBetween: 35,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
           500: {
               slidesPerView: 2,
           },

           900: {
               slidesPerView: 3,
           }
        }
      });

// FIXME: Popular swiper ends //

// TODO: Featured section starts //

const logoClass = document.querySelectorAll(".logo__class");
const all = document.querySelectorAll(".featured__grid__content");

logoClass.forEach(logo => {
  logo.addEventListener("click", e => {
     logoClass.forEach(logo2 => {
       if (logo2.getAttribute("class").includes("active")) {
         logo2.classList.remove("active");
       }
     });

     logo.classList.toggle("active");
     
     if (logo.getAttribute("class").includes("all")) {
            all.forEach(element => {
              if (element.getAttribute("class").includes("active")) {
                element.classList.remove("active");
              }
            })

            all.forEach(element => {
              element.classList.toggle("active");
            })
     }

     else if (logo.getAttribute("class").includes("tesla")) {
           all.forEach(element => {
             if (element.getAttribute("class").includes("active")) {
               element.classList.remove("active");
             };

             if (element.getAttribute("class").includes("tesla")) {
               element.classList.toggle("active");
             };
           })
     }

     else if (logo.getAttribute("class").includes("porsche")) {
            all.forEach(element => {
              if (element.getAttribute("class").includes("active")) {
                element.classList.remove("active");
              };
 
              if (element.getAttribute("class").includes("porsche")) {
                element.classList.toggle("active");
              };
            })
     }

     else if (logo.getAttribute("class").includes("other")) {
       all.forEach(element => {
        if (element.getAttribute("class").includes("active")) {
          element.classList.remove("active");
        };

        if (element.getAttribute("class").includes("other")) {
          element.classList.toggle("active");
        };
       })
     };
  })
});

// FIXME: Featured section ends //

// TODO: Scroll reveal //

const revelar = document.querySelectorAll(".reveal");

ScrollReveal({
    reset: true,
    duration: 2000,
    distance: '50px',
    origin: "top",
});

revelar.forEach(element => {
  ScrollReveal().reveal(element, {delay: 600});
});

// FIXME: Scroll reveal ends */

