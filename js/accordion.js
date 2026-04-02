// js/accordion.js
// O accordion usa <details>/<summary> nativo do HTML5.
// Este script apenas garante que apenas 1 item fica aberto por vez (opcional).
document.addEventListener('DOMContentLoaded', () => {

  const items = document.querySelectorAll('details.faq-item');

  items.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        items.forEach(other => {
          if (other !== item && other.open) other.removeAttribute('open');
        });
      }
    });
  });

});
