var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 40,
  loop: false,
  navigation: {
    prevEl: '.btn-prev',
    nextEl: '.btn-next',
  },
  breakpoints: {
    992: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1,
    }
  }
});