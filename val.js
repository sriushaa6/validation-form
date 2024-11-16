// Get form and input fields
const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Error display elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Helper function to display error
function displayError(element, message) {
    element.textContent = message;
}

// Form validation function
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let isValid = true;

    // Validate Full Name
    if (fullName.value.trim().length < 5) {
        displayError(nameError, "Name must be at least 5 characters long.");
        isValid = false;
    }

    // Validate Email
    if (!email.value.includes("@")) {
        displayError(emailError, "Enter a valid email with '@'.");
        isValid = false;
    }

    // Validate Phone Number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.value) || phone.value === "1234567890") {
        displayError(phoneError, "Enter a valid 10-digit phone number.");
        isValid = false;
    }

    // Validate Password
    const forbiddenPasswords = ["password", fullName.value.trim().toLowerCase()];
    if (password.value.length < 8 || forbiddenPasswords.includes(password.value.toLowerCase())) {
        displayError(passwordError, "Password must be at least 8 characters and not 'password' or your name.");
        isValid = false;
    }

    // Validate Confirm Password
    if (password.value !== confirmPassword.value) {
        displayError(confirmPasswordError, "Passwords do not match.");
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        alert("Form submitted successfully!");
        form.reset(); // Clear form
    }
}

// Attach event listener to form
form.addEventListener("submit", validateForm);