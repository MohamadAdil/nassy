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