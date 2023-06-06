const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", inFocusChange);

function inFocusChange() {
	const inputTrim = inputEl.value.trim();
	if (inputTrim.length === Number(inputEl.dataset.length)) {
		inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
	} else {
        inputEl.classList.remove("valid");
		inputEl.classList.add("invalid");
	}
}
