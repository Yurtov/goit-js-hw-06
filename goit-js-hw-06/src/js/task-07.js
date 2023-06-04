const refs = {
    sliderEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
};

refs.sliderEl.addEventListener('input', textFontSize);

function textFontSize (){
    refs.textEl.style.fontSize = `${refs.sliderEl.value}px`
};