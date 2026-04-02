// js/slider.js
document.addEventListener('DOMContentLoaded', () => {

  const swiperEl = document.querySelector('.cards-swiper');
  if (!swiperEl) return;

  new Swiper('.cards-swiper', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    a11y: {
      prevSlideMessage: 'Card anterior',
      nextSlideMessage: 'Próximo card',
    },
  });

});
