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

daftarForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const jsonData = {};
  for (const [key, value] of formData.entries()) {
    jsonData[key] = value;
  }

  const response = await fetch("/daftar/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });

  const responseData = await response.json();
  if (response.ok) {
    // Tampilkan pesan sukses jika request berhasil dengan jeda waktu
    Swal.fire({
      title: "Success!",
      text: "Akun berhasil didaftar",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      // Setelah jeda waktu selesai, reset form
      this.reset();
      window.location.href = "/login";
    });
  } else {
    Swal.fire({
      title: "Error!",
      text: "Kontak dengan user ini sudah ada!",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
});
