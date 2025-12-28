const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const strengthBar = document.getElementById("strength");
const strengthText = document.getElementById("strengthText");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

lengthSlider.oninput = () => {
    lengthValue.textContent = lengthSlider.value;
};

function generatePassword() {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const sym = "!@#$%^&*()_+{}[]<>?";

    let characters = "";

    if (uppercase.checked) characters += upper;
    if (lowercase.checked) characters += lower;
    if (numbers.checked) characters += num;
    if (symbols.checked) characters += sym;

    if (characters === "") {
        alert("Please select at least one option!");
        return;
    }

    let password = "";
    for (let i = 0; i < lengthSlider.value; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    passwordField.value = password;
    checkStrength(password);
}

function checkStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) {
        strengthBar.style.width = "30%";
        strengthBar.style.background = "red";
        strengthText.textContent = "Weak Password";
    } 
    else if (strength <= 4) {
        strengthBar.style.width = "70%";
        strengthBar.style.background = "orange";
        strengthText.textContent = "Medium Password";
    } 
    else {
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
        strengthText.textContent = "Strong Password";
    }
}
