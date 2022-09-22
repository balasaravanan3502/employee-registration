var errorHandler = (id: string, requiredId: string) => {
  var nameInput = document.getElementById(id) as HTMLInputElement;
  nameInput.style.borderColor = "#b54653";
  nameInput.style.borderWidth = "1px";

  var required = document.getElementById(requiredId) as HTMLElement;
  required.style.display = "block";
};

const validateEmail = (email: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

var submitForm = (e: any) => {
  e.preventDefault();

  resetValidation();
  var userName = (document.getElementById("name") as HTMLInputElement).value;
  var userEmail = (document.getElementById("email") as HTMLInputElement).value;
  var userPhone = (document.getElementById("phone") as HTMLInputElement).value;
  var userGender = (document.getElementById("gender") as HTMLInputElement)
    .value;
  // var userAddress = (document.getElementById("address") as HTMLInputElement)
  //   .value;
  var userDob = (document.getElementById("dob") as HTMLInputElement).value;
  var userPassword = (document.getElementById("password") as HTMLInputElement)
    .value;
  var userConfirmPassword = (
    document.getElementById("confirm-password") as HTMLInputElement
  ).value;

  var isValid = true;

  if (userName.length === 0) {
    errorHandler("name", "required-name");
    isValid = false;
  }

  if (userEmail.length === 0) {
    errorHandler("email", "required-email");
    isValid = false;
  } else if (!validateEmail(userEmail)) {
    errorHandler("email", "valid-email");
    isValid = false;
  }

  if (userPhone.length === 0) {
    errorHandler("phone", "required-phone");
    isValid = false;
  } else if (userPhone.toString().length !== 10) {
    errorHandler("phone", "valid-phone");
    isValid = false;
  }

  if (userDob.length === 0) {
    errorHandler("dob", "required-dob");
    isValid = false;
  }

  // if (userAddress.length === 0) {
  //   errorHandler("address", "required-address");
  //   isValid = false;
  // }

  if (userPassword.length === 0) {
    errorHandler("password", "required-password");
    isValid = false;
  } else if (userPassword.length < 6) {
    errorHandler("password", "min-password");
    isValid = false;
  }

  if (userConfirmPassword.length === 0) {
    errorHandler("confirm-password", "required-confirm-password");
    isValid = false;
  } else if (userConfirmPassword !== userPassword) {
    errorHandler("confirm-password", "match-confirm-password");
    isValid = false;
  }

  if (isValid) {
    console.log({
      name: userName,
      email: userEmail,
      phone: userPhone,
      gender: userGender,
      dob: userDob,
      // address: userAddress,
      password: userPassword,
    });

    console.log("!@3123");

    var successDiv = document.getElementById("success") as HTMLElement;
    successDiv.style.display = "flex";
    successDiv.style.justifyContent = "center";
  }
};

var resetValidation = () => {
  var nameInput = document.getElementById("name") as HTMLInputElement;
  nameInput.style.borderColor = "rgb(214, 214, 214)";
  nameInput.style.borderWidth = "1.3px";
  var required = document.getElementById("required-name") as HTMLElement;
  required.style.display = "none";

  var emailInput = document.getElementById("email") as HTMLInputElement;
  emailInput.style.borderColor = "rgb(214, 214, 214)";
  var required = document.getElementById("required-email") as HTMLElement;
  required.style.display = "none";
  var required = document.getElementById("valid-email") as HTMLElement;
  required.style.display = "none";

  var phoneInput = document.getElementById("phone") as HTMLInputElement;
  phoneInput.style.borderColor = "rgb(214, 214, 214)";

  var required = document.getElementById("required-phone") as HTMLElement;
  required.style.display = "none";

  var required = document.getElementById("valid-phone") as HTMLElement;
  required.style.display = "none";

  var genderInput = document.getElementById("gender") as HTMLInputElement;
  genderInput.style.borderColor = "rgb(214, 214, 214)";

  var dobInput = document.getElementById("dob") as HTMLInputElement;
  dobInput.style.borderColor = "rgb(214, 214, 214)";

  var required = document.getElementById("required-dob") as HTMLElement;
  required.style.display = "none";

  // var addressInput = document.getElementById("address") as HTMLInputElement;
  // addressInput.style.borderColor = "rgb(214, 214, 214)";

  // var required = document.getElementById("required-address") as HTMLElement;
  // required.style.display = "none";

  var passwordInput = document.getElementById("password") as HTMLInputElement;
  passwordInput.style.borderColor = "rgb(214, 214, 214)";
  var required = document.getElementById("required-password") as HTMLElement;
  required.style.display = "none";

  var required = document.getElementById("min-password") as HTMLElement;
  required.style.display = "none";

  var passwordInput = document.getElementById(
    "confirm-password"
  ) as HTMLInputElement;
  passwordInput.style.borderColor = "rgb(214, 214, 214)";
  var required = document.getElementById(
    "required-confirm-password"
  ) as HTMLElement;
  required.style.display = "none";

  var required = document.getElementById(
    "match-confirm-password"
  ) as HTMLElement;
  required.style.display = "none";
};

var resetForm = (e: any) => {
  e.preventDefault();
  resetValidation();

  (document.getElementById("name") as HTMLInputElement).value = "";
  (document.getElementById("email") as HTMLInputElement).value = "";
  (document.getElementById("phone") as HTMLInputElement).value = "";
  (document.getElementById("gender") as HTMLInputElement).value = "";
  // (document.getElementById("address") as HTMLInputElement).value = "";
  (document.getElementById("dob") as HTMLInputElement).value = "";
  // (document.getElementById("address") as HTMLInputElement).value = "";
  (document.getElementById("password") as HTMLInputElement).value = "";
};

var submitButton = document.getElementById("submit") as HTMLButtonElement;
submitButton.addEventListener("click", submitForm);

var resetButton = document.getElementById("reset") as HTMLButtonElement;
resetButton.addEventListener("click", resetForm);
