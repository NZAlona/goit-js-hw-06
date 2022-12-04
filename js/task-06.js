const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputValidationCheck);

function onInputValidationCheck() {
  input.classList.remove('valid', 'invalid');
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}
