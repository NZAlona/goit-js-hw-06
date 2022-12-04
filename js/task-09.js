function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
console.log(btn);
const textValue = document.querySelector('.color');
console.log(textValue);

const body = document.querySelector('body');
console.log(body);

btn.addEventListener('click', onButtonClick);

function onButtonClick() {
  const colorPicker = getRandomHexColor();
  body.style.backgroundColor = colorPicker;
  textValue.textContent = colorPicker;
}
