// About panel: open/close, Escape to close, copy-the-prompt button.
const btn = document.getElementById('about-btn');
const panel = document.getElementById('about');
const close = document.getElementById('about-close');
const copy = document.getElementById('copy-prompt');
const prompt = document.getElementById('prompt');
const prompt2 = document.getElementById('prompt-2');

function setOpen(open) {
  panel.hidden = !open;
  btn.setAttribute('aria-expanded', String(open));
  if (open) close.focus(); else btn.focus();
}
btn.addEventListener('click', () => setOpen(panel.hidden));
close.addEventListener('click', () => setOpen(false));
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !panel.hidden) setOpen(false);
});

copy.addEventListener('click', async () => {
  const text = prompt.textContent + (prompt2 ? '\n\n---\n\n' + prompt2.textContent : '');
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(prompt);
    const sel = window.getSelection();
    sel.removeAllRanges(); sel.addRange(range);
    document.execCommand('copy');
    sel.removeAllRanges();
  }
  copy.textContent = 'Copied';
  setTimeout(() => { copy.textContent = 'Copy prompt'; }, 1600);
});
