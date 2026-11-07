// ui.js — title, hints, and the "about" panel: model identity + the full generation prompt
import { PROMPT_TEXT } from './prompt.js';

export function initUI() {
  const btn = document.getElementById('aboutBtn');
  const panel = document.getElementById('about');
  const closeBtn = document.getElementById('aboutClose');
  const copyBtn = document.getElementById('copyPrompt');
  const pre = document.getElementById('promptText');

  pre.textContent = PROMPT_TEXT;

  btn.addEventListener('click', () => panel.classList.toggle('open'));
  closeBtn.addEventListener('click', () => panel.classList.remove('open'));
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(PROMPT_TEXT);
      copyBtn.textContent = 'copied ✓';
    } catch {
      const ta = document.createElement('textarea');
      ta.value = PROMPT_TEXT;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      copyBtn.textContent = 'copied ✓';
    }
    setTimeout(() => { copyBtn.textContent = 'copy prompt'; }, 1600);
  });
}
