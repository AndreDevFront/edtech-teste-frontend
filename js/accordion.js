
document.addEventListener('DOMContentLoaded', () => {

  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        items.forEach(outro => {
          if (outro !== item) outro.removeAttribute('open');
        });
      }
    });
  });

});
