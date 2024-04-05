const hidePassword = document.getElementById("hide-password");
const passwordInput = document.getElementById("password");
const passwordStrengthMessage = document.getElementById(
  "password-strength-message"
);
const daftarForm = document.getElementById("daftar-form");

hidePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

passwordInput.addEventListener("focus", function () {
  // Show the password strength message when input gets focus
  passwordStrengthMessage.style.display = "block";
});

// Add blur event listener to password input
passwordInput.addEventListener("blur", function () {
  // Hide the password strength message when input loses focus
  passwordStrengthMessage.style.display = "none";
});
