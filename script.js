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

    const nameField = document.querySelector(".name-field");
    const emailField = document.querySelector(".email-field");
    const phoneField = document.querySelector(".phone-field");
    const dobField = document.querySelector(".dob-field");
    const genderField = document.querySelector(".gender-field");
    const cityField = document.querySelector(".city-field");
    const stateField = document.querySelector(".state-field");
    const countryField = document.querySelector(".country-field");
    const addressField = document.querySelector(".address-field");
    const messageField = document.querySelector(".message-field");
    const counsellingField = document.getElementsByName("counselling");
    const termsField = document.querySelector(".terms-field");

    if (nameField.value === "") {
        showError(nameField, "Full Name is required");
    }
    if (emailField.value === "") {
        showError(emailField, "Email is required");
    }
    if(phoneField.value === "" || phoneField.value.length !== 10) {
        showError(phoneField, "Phone number is invalid");
    }
});

function showError(field, message) {
    const error = document.createElement("p");
    error.classList.add("text-red-500");
    error.innerText = message;
    field.insertAdjacentElement("afterend", error);
}
