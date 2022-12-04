const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputValidationCheck);

function onInputValidationCheck() {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add('valid');
  } else {
    input.classList.replace('valid', 'invalid');
  }
}
