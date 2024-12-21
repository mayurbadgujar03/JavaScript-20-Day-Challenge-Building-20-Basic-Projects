if (typeof validator !== 'undefined') {
    const submitButtons = document.getElementById('submitButtons');

    submitButtons.addEventListener('click', func);

    function func(event) {
        console.log("mayur");

        event.preventDefault();

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const confirmPasswordError = document.getElementById('confirmPasswordError');

        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';


        try {

            const name = document.getElementById('name');
            let formName = name.value;
            if (!formName) {
                throw new Error("Name field cannot be empty!");
            }

            const email = document.getElementById('email');
            let formEmail = email.value;
            if (!validator.isEmail(formEmail)) {
                throw new Error("Please enter a valid email address.");
            }

            const password = document.getElementById('password');
            let formPassword = password.value;
            if (formPassword.length < 8 || !/\d/.test(formPassword)) {
                throw new Error("Password must be at least 8 characters long and include a number.");
            }

            const confirmPassword = document.getElementById('confirmPassword');
            let formConfirmPassword = confirmPassword.value;
            if (formPassword !== formConfirmPassword) {
                throw new Error("Passwords do not match.");
            }

            console.log("Form submitted successfully");

        } catch (error) {
            console.error(error)
            if (error.message === "Name field cannot be empty!") {
                nameError.textContent = error.message;
            } else if (error.message === "Please enter a valid email address.") {
                emailError.textContent = error.message;
            } else if (error.message === "Password must be at least 8 characters long and include a number.") {
                passwordError.textContent = error.message;
            } else if (error.message === "Passwords do not match.") {
                confirmPasswordError.textContent = error.message;
            }
        }
        const form = document.getElementById('registrationForm');
        alert("All Validations are completed properly!")
        form.submit();
    }
} else {
    console.error('Validator library is not loaded.');
}