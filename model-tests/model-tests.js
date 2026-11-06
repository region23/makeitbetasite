async function copyPrompt(text, status) {
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = 'Промпт скопирован';
  } catch {
    status.textContent = 'Не удалось скопировать автоматически. Выделите текст промпта и скопируйте его вручную.';
  }
}
const copyButton = document.querySelector('#copy-prompt');
const promptText = document.querySelector('#prompt-text');
if (copyButton) {
  copyButton.addEventListener('click', () => copyPrompt(promptText.textContent, document.querySelector('#copy-status')));
}
