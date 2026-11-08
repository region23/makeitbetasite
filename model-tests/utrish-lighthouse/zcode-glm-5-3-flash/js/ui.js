// Interface: about panel with the verbatim prompt, H to hide, R to reset.
import { PROMPT_TEXT, MODEL_INFO, PLACE_INFO } from './prompt.js';

export function initUI(onReset) {
  document.getElementById('promptText').textContent = PROMPT_TEXT;
  document.title = `${PLACE_INFO.title} — animated miniature`;
  const modelEl = document.querySelector('.card .model strong');
  if (modelEl) modelEl.textContent = MODEL_INFO.name;

  window.addEventListener('keydown', (e) => {
    if (e.key === 'h' || e.key === 'H' || e.key === 'р' || e.key === 'Р') {
      document.body.classList.toggle('hide-ui');
    } else if (e.key === 'r' || e.key === 'R' || e.key === 'к' || e.key === 'К') {
      if (onReset) onReset();
    }
  });

  const hint = document.getElementById('hint');
  setTimeout(() => hint.classList.add('faded'), 7000);
  hint.addEventListener('pointerdown', () => hint.classList.add('faded'));
}
