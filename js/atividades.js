// js/atividades.js
// Resposta correta da objetiva
const RESPOSTA_CORRETA = 'B';

document.addEventListener('DOMContentLoaded', () => {

  // ============ DISCURSIVA ============
  const textarea       = document.getElementById('resposta-discursiva');
  const btnResponder   = document.getElementById('btn-responder-discursiva');
  const btnAlterar     = document.getElementById('btn-alterar-discursiva');
  const feedbackDisc   = document.getElementById('feedback-discursiva');

  function salvarDiscursiva() {
    sessionStorage.setItem('discursiva_resposta', textarea.value);
    sessionStorage.setItem('discursiva_respondida', 'true');
  }

  function restaurarDiscursiva() {
    const respondida = sessionStorage.getItem('discursiva_respondida');
    const texto      = sessionStorage.getItem('discursiva_resposta') || '';
    if (respondida) {
      textarea.value    = texto;
      textarea.disabled = true;
      btnResponder.disabled = true;
      btnAlterar.disabled   = false;
      feedbackDisc.classList.add('visivel');
    }
  }

  textarea.addEventListener('input', () => {
    btnResponder.disabled = textarea.value.trim().length === 0;
  });

  btnResponder.addEventListener('click', () => {
    if (!textarea.value.trim()) return;
    salvarDiscursiva();
    textarea.disabled     = true;
    btnResponder.disabled = true;
    btnAlterar.disabled   = false;
    feedbackDisc.classList.add('visivel');
  });

  btnAlterar.addEventListener('click', () => {
    textarea.disabled     = false;
    btnResponder.disabled = textarea.value.trim().length === 0;
    btnAlterar.disabled   = true;
    feedbackDisc.classList.remove('visivel');
    sessionStorage.removeItem('discursiva_respondida');
    textarea.focus();
  });

  restaurarDiscursiva();

  // ============ OBJETIVA ============
  const checkboxes      = document.querySelectorAll('input[name="objetiva"]');
  const btnRespObj      = document.getElementById('btn-responder-objetiva');
  const btnAltObj       = document.getElementById('btn-alterar-objetiva');
  const feedbackObj     = document.getElementById('feedback-objetiva');
  const opcaoItems      = document.querySelectorAll('.opcao-item');

  function getSelectedValues() {
    return Array.from(checkboxes).filter(c => c.checked).map(c => c.value);
  }

  function salvarObjetiva(valores) {
    sessionStorage.setItem('objetiva_resposta',   JSON.stringify(valores));
    sessionStorage.setItem('objetiva_respondida', 'true');
  }

  function restaurarObjetiva() {
    const respondida = sessionStorage.getItem('objetiva_respondida');
    const valores    = JSON.parse(sessionStorage.getItem('objetiva_resposta') || '[]');
    if (respondida) {
      checkboxes.forEach(c => {
        if (valores.includes(c.value)) c.checked = true;
        c.disabled = true;
      });
      atualizarEstiloOpcoes();
      bloqueiarObjetiva(valores);
    }
  }

  function atualizarEstiloOpcoes() {
    opcaoItems.forEach(label => {
      const cb = label.querySelector('input');
      label.classList.toggle('selecionada', cb.checked);
    });
    btnRespObj.disabled = getSelectedValues().length === 0;
  }

  function bloqueiarObjetiva(valores) {
    checkboxes.forEach(c => c.disabled = true);
    btnRespObj.disabled = true;
    btnAltObj.disabled  = false;

    const acertou = valores.includes(RESPOSTA_CORRETA) && valores.length === 1;
    feedbackObj.classList.remove('feedback-sucesso', 'feedback-erro');
    if (acertou) {
      feedbackObj.classList.add('feedback-sucesso');
      feedbackObj.querySelector('strong').textContent = 'É isso aí!';
    } else {
      feedbackObj.classList.add('feedback-erro');
      feedbackObj.querySelector('strong').textContent = 'Tente novamente!';
    }
    feedbackObj.classList.add('visivel');
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', atualizarEstiloOpcoes);
  });

  btnRespObj.addEventListener('click', () => {
    const valores = getSelectedValues();
    if (!valores.length) return;
    salvarObjetiva(valores);
    bloqueiarObjetiva(valores);
  });

  btnAltObj.addEventListener('click', () => {
    checkboxes.forEach(c => { c.checked = false; c.disabled = false; });
    atualizarEstiloOpcoes();
    btnRespObj.disabled = true;
    btnAltObj.disabled  = true;
    feedbackObj.classList.remove('visivel');
    sessionStorage.removeItem('objetiva_respondida');
    sessionStorage.removeItem('objetiva_resposta');
  });

  restaurarObjetiva();

});
