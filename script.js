// collapsible drawer
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const hamburgerMenu = document.querySelector(".hamburger-menu");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    hamburgerMenu.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
    closeIcon.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    hamburgerMenu.classList.toggle("active");
});

// contact form
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearError();

    let isValidated = true;

    const nameField = document.getElementById("name-field");
    const emailField = document.getElementById("email-field");
    const phoneField = document.getElementById("phone-field");
    const dobField = document.getElementById("dob-field");
    const genderField = document.getElementById("gender-field");
    const cityField = document.getElementById("city-field");
    const stateField = document.getElementById("state-field");
    const countryField = document.getElementById("country-field");
    const addressField = document.getElementById("address-field");
    const messageField = document.getElementById("message-field");
    const termsField = document.getElementById("terms-field");
    const counsellingSessionField = document.querySelector(
        'input[name="counselling-session"]:checked'
    );

    if (nameField.value === "") {
        showError("name-error", "Please enter your name");
        isValidated = false;
    }
    if (emailField.value === "") {
        showError("email-error", "Please enter your email address");
        isValidated = false;
    } else if (!emailField.value.includes("@")) {
        showError("email-error", "Please enter a valid email address");
        isValidated = false;
    }

    if (phoneField.value === "") {
        showError("phone-error", "Please enter your phone number");
        isValidated = false;
    } else if (phoneField.value.length !== 10) {
        showError("phone-error", "Please enter a valid phone number");
        isValidated = false;
    }

    if (dobField.value === "") {
        showError("dob-error", "Please enter your date of birth");
        isValidated = false;
    }

    if (genderField.value === "") {
        showError("gender-error", "Please select your gender");
        isValidated = false;
    }

    if (cityField.value === "") {
        showError("city-error", "Please enter your city");
        isValidated = false;
    }

    if (stateField.value === "") {
        showError("state-error", "Please enter your state");
        isValidated = false;
    }

    if (countryField.value === "") {
        showError("country-error", "Please enter your country");
        isValidated = false;
    }

    if (addressField.value === "") {
        showError("address-error", "Please enter your address");
        isValidated = false;
    }

    if (messageField.value === "") {
        showError("message-error", "Please enter your message");
        isValidated = false;
    }

    if (!counsellingSessionField?.value) {
        showError("counselling-session-error", "Please select an option");
        isValidated = false;
    }

    if (!termsField.checked) {
        showError("terms-error", "Please agree to the terms and conditions");
        isValidated = false;
    }

    if (!isValidated) {
        return;
    }

    // save data to local storage
    const currentData = JSON.parse(localStorage.getItem("data")) || [];
    currentData.push({
        id: Date.now(),
        name: nameField.value,
        email: emailField.value,
        phone: phoneField.value,
        dob: dobField.value,
        gender: genderField.value,
        city: cityField.value,
        state: stateField.value,
        country: countryField.value,
        address: addressField.value,
        message: messageField.value,
        counsellingSession: counsellingSessionField.value,
        terms: termsField.checked,
    });
    localStorage.setItem("data", JSON.stringify(currentData));

    // reset form
    form.reset();
    alert("Form submitted successfully!");
});

function showError(fieldName, errorMessage) {
    const errorField = document.getElementById(fieldName);
    errorField.textContent = errorMessage;
}

function clearError() {
    const errorFields = document.getElementsByClassName("error-message");
    Array.from(errorFields).forEach((element) => {
        element.textContent = "";
    });
}
