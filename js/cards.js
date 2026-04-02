// js/cards.js
document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const btn  = card.querySelector('.card-btn-abrir');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const jaAberto = card.classList.contains('aberto');

      // Fecha todos os outros cards primeiro
      cards.forEach(c => {
        c.classList.remove('aberto');
        c.setAttribute('aria-expanded', 'false');
        const b = c.querySelector('.card-btn-abrir');
        if (b) b.textContent = 'Abrir';
      });

      // Se o clicado não estava aberto, abre ele
      if (!jaAberto) {
        card.classList.add('aberto');
        card.setAttribute('aria-expanded', 'true');
        btn.textContent = 'Fechar';
      }
    });
  });

});
