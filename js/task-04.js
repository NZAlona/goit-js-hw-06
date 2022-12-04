let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');

const btnIncrement = document.querySelector('button[data-action="increment"]');

const valueEl = document.querySelector('#value');

btnDecrement.addEventListener('click', onBtnDecrementClick);

btnIncrement.addEventListener('click', onBtnIncrementClick);

function onBtnDecrementClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onBtnIncrementClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
