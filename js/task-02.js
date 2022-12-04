const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

let liArray = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const listLi = document.createElement('li');

  listLi.textContent = ingredients[i];
  listLi.classList.add('js-item');

  liArray.push(listLi);
}

const listIngredients = document.querySelector('#ingredients');

listIngredients.append(...liArray);
