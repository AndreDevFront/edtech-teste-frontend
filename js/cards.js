// js/cards.js
document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const btn  = card.querySelector('.card-btn-abrir');
    const body = card.querySelector('.card-body');
    if (!btn || !body) return;

    btn.addEventListener('click', () => {
      const aberto = card.classList.toggle('aberto');
      card.setAttribute('aria-expanded', aberto);
      body.setAttribute('aria-hidden', !aberto);
      btn.textContent = aberto ? 'Fechar' : 'Abrir';
    });
  });

});
