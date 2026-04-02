
document.addEventListener('DOMContentLoaded', () => {

  // ================================================
  // ATIVIDADE DISCURSIVA
  // ================================================
  const textarea      = document.getElementById('resposta-discursiva');
  const btnResponder  = document.getElementById('btn-responder-discursiva');
  const btnAlterar    = document.getElementById('btn-alterar-discursiva');
  const feedback      = document.getElementById('feedback-discursiva');

  function aplicarEstadoDiscursiva(respondido) {
    textarea.disabled     = respondido;
    btnResponder.disabled = respondido;
    btnAlterar.disabled   = !respondido;
    feedback.classList.toggle('visivel', respondido);
  }

  const dadosDiscursiva = JSON.parse(sessionStorage.getItem('discursiva') || 'null');
  if (dadosDiscursiva) {
    textarea.value = dadosDiscursiva.resposta;
    aplicarEstadoDiscursiva(dadosDiscursiva.respondido);
  }

  btnResponder.addEventListener('click', () => {
    if (!textarea.value.trim()) return;
    aplicarEstadoDiscursiva(true);
    sessionStorage.setItem('discursiva', JSON.stringify({
      resposta:   textarea.value,
      respondido: true
    }));
  });

  btnAlterar.addEventListener('click', () => {
    aplicarEstadoDiscursiva(false);
    sessionStorage.setItem('discursiva', JSON.stringify({
      resposta:   textarea.value,
      respondido: false
    }));
  });


  // ================================================
  // ATIVIDADE OBJETIVA
  // ================================================
  const opcoes           = document.querySelectorAll('.opcao-item');
  const checkboxes       = document.querySelectorAll('.opcao-item input[type="checkbox"]');
  const btnResponderObj  = document.getElementById('btn-responder-objetiva');
  const btnAlterarObj    = document.getElementById('btn-alterar-objetiva');
  const feedbackObj      = document.getElementById('feedback-objetiva');

  function atualizarBtnResponder() {
    const algumSelecionado = [...checkboxes].some(cb => cb.checked);
    btnResponderObj.disabled = !algumSelecionado;
  }

  function destacarSelecionadas() {
    opcoes.forEach(opcao => {
      const cb = opcao.querySelector('input');
      opcao.classList.toggle('selecionada', cb.checked);
    });
  }

  function aplicarEstadoObjetiva(respondido) {
    checkboxes.forEach(cb => cb.disabled = respondido);
    btnResponderObj.disabled = respondido;
    btnAlterarObj.disabled   = !respondido;
    feedbackObj.classList.toggle('visivel', respondido);
  }

  function obterSelecionadas() {
    return [...checkboxes]
      .map((cb, i) => cb.checked ? i : null)
      .filter(i => i !== null);
  }

  const dadosObjetiva = JSON.parse(sessionStorage.getItem('objetiva') || 'null');
  if (dadosObjetiva) {
    dadosObjetiva.selecionadas.forEach(idx => {
      if (checkboxes[idx]) checkboxes[idx].checked = true;
    });
    destacarSelecionadas();
    aplicarEstadoObjetiva(dadosObjetiva.respondido);
    if (!dadosObjetiva.respondido) atualizarBtnResponder();
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      destacarSelecionadas();
      atualizarBtnResponder();
      sessionStorage.setItem('objetiva', JSON.stringify({
        selecionadas: obterSelecionadas(),
        respondido: false
      }));
    });
  });

  btnResponderObj.addEventListener('click', () => {
    aplicarEstadoObjetiva(true);
    sessionStorage.setItem('objetiva', JSON.stringify({
      selecionadas: obterSelecionadas(),
      respondido: true
    }));
  });

  btnAlterarObj.addEventListener('click', () => {
    aplicarEstadoObjetiva(false);
    atualizarBtnResponder();
    sessionStorage.setItem('objetiva', JSON.stringify({
      selecionadas: obterSelecionadas(),
      respondido: false
    }));
  });

});
