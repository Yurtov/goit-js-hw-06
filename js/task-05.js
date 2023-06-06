const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange({ currentTarget }) {
	currentTarget.value.trim() !== ""
		? (outputEl.textContent = currentTarget.value)
		: (outputEl.textContent = "Anonymous");
}
