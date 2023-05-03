var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.6,
  spaceBetween: 34,
  slidesPerGroup: 1,
  centermode: true,
  autoplay: true,
  loop: false,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1.1,
      spaceBetween: 10
    },
    450: {
      slidesPerView: 0.8,
      spaceBetween: 10
    },
    // when window width is >= 480px
    500: {
      slidesPerView: 1.5,
      spaceBetween: 15
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    1199: {
      slidesPerView: 2.9,
      spaceBetween: 25
    },
    // when window width is >= 640px
    1360: {
      slidesPerView: 3.2,
      spaceBetween: 34
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
