function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputValue: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  divContainer: document.querySelector('#boxes'),
};

refs.btnCreate.addEventListener('click', onBtnCreateClick);

function onBtnCreateClick() {
  createBoxes(refs.inputValue.valueAsNumber);
  refs.inputValue.value = '';
}

refs.btnDestroy.addEventListener('click', onBtnDestroyClick);

function onBtnDestroyClick() {
  refs.divContainer.innerHTML = '';
}

function createBoxes(amount) {
  let markup = '';
  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="background-color:${getRandomHexColor()}; width:${
      30 + 10 * i
    }px; height:${30 + 10 * i}px"></div>`;
  }

  refs.divContainer.insertAdjacentHTML('beforeend', markup);
}
