const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', inFocusChange);

function inFocusChange (){
    inputEl.value.length === Number(inputEl.dataset.length) ? inputEl.classList.add('valid') : inputEl.classList.add('invalid');
};


