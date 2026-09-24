const heroSlider = new Swiper(".hero-slider", {
  slidesPerView: 1,
  loop: true,
  speed: 1000,

  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

new Swiper('.product-carousel', {
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 20,
  speed: 500,
  loop: false,
  freeMode: false,

  navigation: {
    nextEl: '.product-carousel .swiper-button-next',
    prevEl: '.product-carousel .swiper-button-prev'
  },

  pagination: {
    el: '.product-carousel .swiper-pagination',
    clickable: true
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});