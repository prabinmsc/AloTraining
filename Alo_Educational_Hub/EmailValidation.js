document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.innerText = "";
    passwordError.innerText = "";

    let isValid = true;

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Password validation (Minimum 8 characters, at least one number and one special character)
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.innerText = "Password must be at least 8 characters long and include a number and special character.";
        isValid = false;
    }

    if (isValid) {
        alert("Login successful!");
        // Here you can proceed with form submission or authentication logic.
    }
});
