const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange ({currentTarget}) {
    outputEl.textContent = currentTarget.value;
};

