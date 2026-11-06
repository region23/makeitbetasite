async function copyPrompt(text, status) {
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = 'Промпт скопирован';
  } catch {
    status.textContent = 'Не удалось скопировать автоматически. Выделите текст промпта и скопируйте его вручную.';
  }
}
const copyButton = document.querySelector('#copy-prompt');
const copyExtendedButton = document.querySelector('#copy-extended-prompt');
const promptText = document.querySelector('#prompt-text');
if (copyButton) {
  copyButton.addEventListener('click', () => copyPrompt(promptText.textContent, document.querySelector('#copy-status')));
}
if (copyExtendedButton) {
  copyExtendedButton.addEventListener('click', () => {
    const addition = document.querySelector('.prompt-extra blockquote').textContent;
    copyPrompt(promptText.textContent + '\n\n' + addition, document.querySelector('#copy-extended-status'));
  });
}
