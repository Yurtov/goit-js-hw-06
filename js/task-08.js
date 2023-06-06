const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", inSubmitForm);

function inSubmitForm(event) {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value.trim() === "") {
		alert("Please, fill in all the fields");
	} else {
		const inputDataObject = {
			email: email.value,
			password: password.value,
		};
		console.log(inputDataObject);
		event.currentTarget.reset();
	}
}
