function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-msg');
    errorMessages.forEach((msg) => {
        msg.innerHTML = ""; // Clear existing error messages
    });
}

function setError(id, error) {
    const element = document.getElementById(id + 'ErrorMsg');
    element.innerHTML = error; // Set the error message
}

function validateName() {
    const name = document.getElementById("name").value.trim();
    console.log("Validating Name:", name); // Log the name being validated
    if (name.length === 0) {
        setError("name", "*Length of name cannot be zero!");
        return false;
    }
    if (name.length < 5) {
        setError("name", "*Name must be at least 5 characters long!");
        return false;
    }
    setError("name", ""); // Clear error message if valid
    return true; // Name is valid
}

function validateEmail() {
    const email = document.getElementById("email").value.trim();
    console.log("Validating Email:", email); // Log the email being validated
    if (email.length === 0) {
        setError("email", "*Email cannot be empty!");
        return false;
    }
    if (email.length > 30) {
        setError("email", "*Email length should not exceed 30 characters!");
        return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic regex for email validation
    if (!emailPattern.test(email)) {
        setError("email", "*Please enter a valid email address!");
        return false;
    }
    setError("email", ""); // Clear error message if valid
    return true; // Email is valid
}

function validatePassword() {
    const password = document.getElementById("password").value.trim();
    console.log("Validating Password:", password); // Log the password being validated

    // Clear existing error messages
    setError("password", ""); 

    if (password.length < 8) {
        setError("password", "*Password should be at least 8 characters long!");
        return false;
    }

    // Check for at least one uppercase letter, one number, and one special character
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        setError("password", "*Password must include at least one uppercase letter, one number, and one special character!");
        return false;
    }

    setError("password", ""); // Clear error message if valid
    return true; // Password is valid
}

function setError(id, error) {
    const element = document.getElementById(id + 'ErrorMsg');
    element.innerHTML = error; // Set the error message
    element.style.display = error ? 'block' : 'none'; // Show or hide the error message
}

// The rest of your validation functions remain unchanged


function validateForm() {
    clearErrors(); // Clear existing error messages
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    console.log("Form Validation Results:", { isNameValid, isEmailValid, isPasswordValid });

    if (isNameValid && isEmailValid && isPasswordValid) {
        // Redirect to the To-Do List page on successful validation
        window.location.href = "index.html"; 
        return false; // Prevent default form submission
    }
    return false; // Prevent form submission if validation fails
}

// Add immediate validation on input fields
document.getElementById("name").addEventListener("input", validateName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("password").addEventListener("input", validatePassword);
document.getElementById('signInButton').addEventListener('click', function() {
    window.location.href = 'signin.html'; // Redirect to signin.html
});
