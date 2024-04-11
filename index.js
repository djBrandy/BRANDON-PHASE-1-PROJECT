const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submitButton = document.getElementById('submitButton');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (checkInputs()) {
        window.location.href = 'index2.html'; // Navigate to new page only if inputs are valid
    }
});

function checkInputs() {
    let isValid = true; // Variable to track if all inputs are valid

    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
        isValid = false; // Set isValid to false if username is blank
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
        isValid = false; // Set isValid to false if email is blank
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
        isValid = false; // Set isValid to false if email is not valid
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
        isValid = false; // Set isValid to false if password is blank
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
        isValid = false; // Set isValid to false if password2 is blank
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
        isValid = false; // Set isValid to false if passwords do not match
    } else {
        setSuccessFor(password2);
    }

    return isValid; // Return the value of isValid
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    // Regular expression to validate email format
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}




document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buttons');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert("You first need to create an account.");
        });
    });
});









