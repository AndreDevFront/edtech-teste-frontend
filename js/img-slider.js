(function () {
  'use strict';

  const track    = document.querySelector('.img-slider-track');
  const slides   = document.querySelectorAll('.img-slider-slide');
  const bullets  = document.querySelectorAll('.img-slider-bullet');
  const btnPrev  = document.querySelector('.img-slider-prev');
  const btnNext  = document.querySelector('.img-slider-next');

  if (!track || !slides.length) return;

  let current = 0;
  const total = slides.length;

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    bullets.forEach((b, i) => {
      b.classList.toggle('active', i === current);
      b.setAttribute('aria-selected', i === current ? 'true' : 'false');
    });
    if (btnPrev) btnPrev.disabled = current === 0;
    if (btnNext) btnNext.disabled = current === total - 1;
  }

  if (btnPrev) btnPrev.addEventListener('click', () => goTo(current - 1));
  if (btnNext) btnNext.addEventListener('click', () => goTo(current + 1));
  bullets.forEach((b, i) => b.addEventListener('click', () => goTo(i)));

  goTo(0);
})();
