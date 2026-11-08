const prompt = await fetch('./prompt.txt').then(response => response.text());
import { createDiorama } from './scene.js';

const ui = document.querySelector('#interface');
const dialog = document.querySelector('#about-dialog');
document.querySelector('#prompt').textContent = prompt;
let scene;
try {
  scene = createDiorama(document.querySelector('#scene'));
} catch (error) {
  console.error(error);
  document.querySelector('#error').hidden = false;
}
function resetView() { scene?.reset?.(); }
document.querySelector('#reset').addEventListener('click', resetView);
document.querySelector('#about').addEventListener('click', () => dialog.showModal());
document.querySelector('#close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.querySelector('#copy').addEventListener('click', async event => {
  try {
    await navigator.clipboard.writeText(prompt);
    event.currentTarget.textContent = 'Copied';
    setTimeout(() => { event.currentTarget.textContent = 'Copy prompt'; }, 2000);
  } catch {
    event.currentTarget.textContent = 'Select the text to copy';
  }
});
window.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey || /^(INPUT|TEXTAREA)$/.test(event.target.tagName)) return;
  if (event.key.toLowerCase() === 'h') {
    if (dialog.open) dialog.close();
    ui.hidden = !ui.hidden;
  }
  if (event.key.toLowerCase() === 'r' && !dialog.open) resetView();
});
