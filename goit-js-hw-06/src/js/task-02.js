const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientEl = document.querySelector('#ingredients')

const elements = ingredients.map(nameOfIngridient => {
  const liEl = document.createElement('li')
  liEl.classList.add('item')
  liEl.textContent = nameOfIngridient;
  return liEl;
})

ingredientEl.append(...elements)

