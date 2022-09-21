"use strict";
var submitForm = (e) => {
    e.preventDefault();
    resetValidation();
    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;
    var userPhone = document.getElementById("phone").value;
    var userGender = document.getElementById("gender")
        .value;
    var userAddress = document.getElementById("address")
        .value;
    var userDob = document.getElementById("dob").value;
    var userPassword = document.getElementById("password")
        .value;
    var isValid = true;
    if (userName.length === 0) {
        var nameInput = document.getElementById("name");
        nameInput.style.borderColor = "#EB1D36";
        nameInput.style.borderWidth = "1px";
        var required = document.getElementById("required-name");
        required.style.display = "block";
        isValid = false;
    }
    if (userEmail.length === 0) {
        var nameInput = document.getElementById("email");
        nameInput.style.borderColor = "#EB1D36";
        nameInput.style.borderWidth = "1px";
        var required = document.getElementById("required-email");
        required.style.display = "block";
        isValid = false;
    }
    // else if (!userEmail.includes("@")) {
    //   console.log(userEmail.includes("@"));
    //   var nameInput = document.getElementById("email") as HTMLInputElement;
    //   nameInput.style.borderColor = "#EB1D36";
    //   nameInput.style.borderWidth = "1px";
    //   var required = document.getElementById("valid-email") as HTMLElement;
    //   required.style.display = "block";
    //   isValid = false;
    // }
    if (userPhone.length === 0) {
        var nameInput = document.getElementById("phone");
        nameInput.style.borderColor = "#EB1D36";
        nameInput.style.borderWidth = "1px";
        var required = document.getElementById("required-phone");
        required.style.display = "block";
        isValid = false;
    }
    else if (userPhone.toString().length !== 10) {
        var phoneInput = document.getElementById("phone");
        phoneInput.style.borderColor = "#EB1D36";
        phoneInput.style.borderWidth = "1px";
        var required = document.getElementById("valid-phone");
        required.style.display = "block";
        isValid = false;
    }
    if (userGender.length === 0) {
        var genderInput = document.getElementById("gender");
        genderInput.style.borderColor = "#EB1D36";
        genderInput.style.borderWidth = "1px";
        var required = document.getElementById("required-gender");
        required.style.display = "block";
        isValid = false;
    }
    if (userDob.length === 0) {
        var dobInput = document.getElementById("dob");
        dobInput.style.borderColor = "#EB1D36";
        dobInput.style.borderWidth = "1px";
        var required = document.getElementById("required-dob");
        required.style.display = "block";
        isValid = false;
    }
    if (userAddress.length === 0) {
        var addressInput = document.getElementById("address");
        addressInput.style.borderColor = "#EB1D36";
        addressInput.style.borderWidth = "1px";
        var required = document.getElementById("required-address");
        required.style.display = "block";
        isValid = false;
    }
    if (userPassword.length === 0) {
        var passwordInput = document.getElementById("password");
        passwordInput.style.borderColor = "#EB1D36";
        passwordInput.style.borderWidth = "1px";
        var required = document.getElementById("required-password");
        required.style.display = "block";
        isValid = false;
    }
    else if (userPassword.length < 6) {
        var passwordInput = document.getElementById("password");
        passwordInput.style.borderColor = "#EB1D36";
        passwordInput.style.borderWidth = "1px";
        var required = document.getElementById("min-password");
        required.style.display = "block";
        isValid = false;
    }
    if (isValid) {
        console.log({
            name: userName,
            email: userEmail,
            phone: userPhone,
            gender: userGender,
            dob: userDob,
            address: userAddress,
            password: userPassword,
        });
    }
};
var resetValidation = () => {
    var nameInput = document.getElementById("name");
    nameInput.style.borderColor = "rgb(214, 214, 214)";
    nameInput.style.borderWidth = "1.3px";
    var required = document.getElementById("required-name");
    required.style.display = "none";
    var emailInput = document.getElementById("email");
    emailInput.style.borderColor = "rgb(214, 214, 214)";
    var required = document.getElementById("required-email");
    required.style.display = "none";
    var phoneInput = document.getElementById("phone");
    phoneInput.style.borderColor = "rgb(214, 214, 214)";
    var required = document.getElementById("required-phone");
    required.style.display = "none";
    var required = document.getElementById("valid-phone");
    required.style.display = "none";
    var genderInput = document.getElementById("gender");
    genderInput.style.borderColor = "rgb(214, 214, 214)";
    var required = document.getElementById("required-gender");
    required.style.display = "none";
    var dobInput = document.getElementById("dob");
    dobInput.style.borderColor = "rgb(214, 214, 214)";
    var required = document.getElementById("required-dob");
    required.style.display = "none";
    var addressInput = document.getElementById("address");
    addressInput.style.borderColor = "rgb(214, 214, 214)";
    var required = document.getElementById("required-address");
    required.style.display = "none";
    var passwordInput = document.getElementById("password");
    passwordInput.style.borderColor = "rgb(214, 214, 214)";
    var required = document.getElementById("required-password");
    required.style.display = "none";
    var required = document.getElementById("min-password");
    required.style.display = "none";
};
var resetForm = (e) => {
    e.preventDefault();
    resetValidation();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("address").value = "";
    document.getElementById("password").value = "";
};
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", submitForm);
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetForm);
//# sourceMappingURL=script.js.map