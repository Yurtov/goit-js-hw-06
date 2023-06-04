const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', inFocusChange);

function inFocusChange (){
    const inputTrim = inputEl.value.trim();
    inputTrim.length === Number(inputEl.dataset.length) ? inputEl.classList.add('valid') : inputEl.classList.add('invalid');
};

