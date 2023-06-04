function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const refs = {
  colorBodyEl: document.querySelector('body'),
  nameColorEl: document.querySelector('.color'),
  changeColorBtnEl: document.querySelector('.change-color'),
};

refs.changeColorBtnEl.addEventListener('click', randomColorBody);

function randomColorBody (){
 refs.colorBodyEl.style.backgroundColor = getRandomHexColor();
 refs.nameColorEl.textContent = getRandomHexColor();
}

