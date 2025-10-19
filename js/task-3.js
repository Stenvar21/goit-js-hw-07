const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', event => {
  const trimmedValue = event.currentTarget.value.trim();
  outputElement.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
