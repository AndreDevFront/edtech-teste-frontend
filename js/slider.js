// js/slider.js
document.addEventListener('DOMContentLoaded', () => {

  const swiperEl = document.querySelector('.swiper');
  if (!swiperEl) return;

  new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 600,
    a11y: {
      prevSlideMessage: 'Slide anterior',
      nextSlideMessage: 'Próximo slide',
    },
  });

});
