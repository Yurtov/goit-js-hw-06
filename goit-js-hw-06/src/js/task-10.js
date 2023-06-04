function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controls: document.querySelector('#controls'),
  inputNumberEl: document.querySelector('input'),
  createBtnEl: document.querySelector('button[data-create]'),
  destroyBtnEl: document.querySelector('button[data-destroy]'),
  divBoxEl: document.getElementById('boxes'),
};

refs.createBtnEl.addEventListener('click', () => {
  createBoxes(refs.inputNumberEl.valueAsNumber);
  refs.inputNumberEl.value = '';
});

refs.destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.inputNumberEl.value = '';
  refs.divBoxEl.innerHTML = '';
}

function createBoxes(amount) {
  let size = 30;
  const newBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const box = `<div class="item" style="margin-top: 15px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    newBoxes.push(box);
  }
  refs.divBoxEl.insertAdjacentHTML('beforeend', newBoxes.join(''));
}
