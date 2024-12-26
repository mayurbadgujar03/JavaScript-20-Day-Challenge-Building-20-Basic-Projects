const password = document.getElementById("password");
const passwordStrength = document.getElementById("password-strength");

function togglePasswordVisibility() {
    if(password.type === "password"){
        password.type = "text";
        document.getElementById("eye-icon").innerText = "🙈";
    } else{
        password.type = "password";
        document.getElementById("eye-icon").innerText = "👁️";
    }
}

password.oninput = function () {
    let passValue = password.value;
    console.log(passValue);
    passwordStrength.innerText = "";
    document.getElementById("meter-weak").classList.remove("weaks");
    document.getElementById("meter-medium").classList.remove("mediums");
    document.getElementById("meter-strong").classList.remove("strongs");

    if (passValue.match(/.{6,}/)) {
        passwordStrength.innerText = "Weak";
        document.getElementById("meter-weak").classList.add("weaks");
    }
    if (passValue.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)) {
        passwordStrength.innerText = "Medium";
        document.getElementById("meter-weak").classList.add("weaks");
        document.getElementById("meter-medium").classList.add("mediums");
    }
    if (passValue.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}/)) {
        passwordStrength.innerText = "Strong";
        document.getElementById("meter-weak").classList.add("weaks");
        document.getElementById("meter-medium").classList.add("mediums");
        document.getElementById("meter-strong").classList.add("strongs");
    }
};
