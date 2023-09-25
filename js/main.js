import { useDynamicAdapt } from "./dynamicAdapt.js";

useDynamicAdapt();

try {
  // Burger Menu
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".header__menu");

  hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("hamburger--active");
    menu.classList.toggle("header__menu--active");

    if (hamburger.classList.contains("hamburger--active")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });
} catch (e) {}

// try {
//   var advantagesSlider = new Swiper(".advantages__slider", {
//     slidesPerView: 3,
//     spaceBetween: 24,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// } catch (e) {}

try {
  //arguments accordeon
  const title = document.querySelectorAll(".arguments__item-showall");

  title.forEach((elem) => {
    const text = elem.parentNode.children[1];
    const number = elem.parentNode.parentNode.children[0].children[0];
    const showAll = elem.parentNode.children[2].children[0].children[0];

    elem.addEventListener("click", () => {
      elem.classList.toggle("arguments__item-showall--active");
      number.classList.toggle("arguments__item-number--active");

      // При клике изменяем max-height в зависимости от состояния
      if (elem.classList.contains("arguments__item-showall--active")) {
        text.style.height = text.scrollHeight + "px";
        text.style.color = "#fff";
        showAll.style.transform = "rotate(-180deg)";
      } else {
        text.style.height = 58 + "px";
        text.style.color = "#919191";
        showAll.style.transform = "rotate(0)";
      }
    });
  });
} catch (e) {}

try {
  //who accordeon
  const title = document.querySelectorAll(".who__item-showall");

  title.forEach((elem) => {
    const text = elem.parentNode.children[1];
    const showAll = elem.parentNode.children[2].children[0].children[0];

    elem.addEventListener("click", () => {
      elem.classList.toggle("arguments__item-showall--active");

      // При клике изменяем max-height в зависимости от состояния
      if (elem.classList.contains("arguments__item-showall--active")) {
        text.style.height = text.scrollHeight + "px";
        showAll.style.transform = "rotate(-180deg)";
      } else {
        text.style.height = 58 + "px";
        showAll.style.transform = "rotate(0)";
      }
    });
  });
} catch (e) {}

try {
  let lastScrollTop = 0;
  let navbar = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-80px";
    } else {
      navbar.style.top = "0";
      navbar.style.position = "fixed";
      navbar.style.background = "#212121";
    }
    lastScrollTop = scrollTop;
  });
} catch (e) {}
