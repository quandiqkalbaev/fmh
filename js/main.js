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

try {
  var advantagesSlider = new Swiper(".advantages__slider", {
    pagination: {
      el: ".advantages__slider-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
} catch (e) {}

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
  //header fixed
  let lastScrollTop = 0;
  let navbar = document.querySelector(".header");
  const mobileScreenWidth = 1024;

  function toggleNavbarVisibility() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (window.innerWidth <= mobileScreenWidth) {
      navbar.style.opacity = scrollTop === 0 ? "0" : "1";
      navbar.style.visibilty = scrollTop === 0 ? "hidden" : "visible";
      navbar.style.zIndex = scrollTop === 0 ? -1 : 999;

      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
      } else {
        navbar.style.top = "0";
        navbar.style.position = "fixed";
        navbar.style.background = scrollTop === 0 ? "transparent" : "#212121";
      }
    } else if (scrollTop > lastScrollTop || scrollTop < 0) {
      navbar.style.opacity = "0";
      navbar.style.visibilty = "hidden";
      navbar.style.zIndex = -1;
    } else {
      navbar.style.opacity = "1";
      navbar.style.visibilty = "visible";
      navbar.style.zIndex = 9999;
      navbar.style.position = "fixed";
      navbar.style.background = scrollTop === 0 ? "transparent" : "#212121";
    }
    lastScrollTop = scrollTop;
  }

  toggleNavbarVisibility();
  window.addEventListener("scroll", toggleNavbarVisibility);
  window.addEventListener("resize", toggleNavbarVisibility);
} catch (e) {}

try {
  const connectionBtn = document.querySelector(".intro__connection-btn");
  const introSocial = document.querySelector(".intro__social");
  const introSocialClose = document.querySelector(".intro__social-close");

  connectionBtn.addEventListener("click", () => {
    introSocial.classList.add("intro__social--active");
  });

  introSocialClose.addEventListener("click", () => {
    introSocial.classList.remove("intro__social--active");
  });
} catch (e) {}

try {
  let init = false;
  let faqSLider;
  function swiperCard() {
    if (window.innerWidth <= 768) {
      if (!init) {
        init = true;
        faqSLider = new Swiper(".faq__slider", {
          slidesPerView: 1,
          autoHeight: false,

          pagination: {
            el: ".faq__slider-pagination",
            clickable: true,
          },
        });
      }
    } else if (init) {
      faqSLider.destroy();
      init = false;
    }
  }
  swiperCard();
  window.addEventListener("resize", swiperCard);
} catch (e) {}

try {
  const choiceSlider = new Swiper(".choice__slider", {
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
      el: ".choice__slider-pagination",
      clickable: true,
    },
  });
} catch (error) {}

try {
  const benefitsSlider = new Swiper(".benefits__slider", {
    pagination: {
      el: ".benefits__slider-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
} catch (error) {}
