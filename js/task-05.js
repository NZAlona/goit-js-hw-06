const textInput = document.querySelector('#name-input');
console.log(textInput);

const textOutput = document.querySelector('#name-output');
console.log(textOutput);

textInput.addEventListener('input', onInputText);

function onInputText(event) {
  if (textInput.value.trim() === '') {
    textOutput.textContent = 'Anonymous';
  } else {
    textOutput.textContent = event.currentTarget.value.trim();
  }
}
