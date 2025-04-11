//  form
const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

email.addEventListener("invalid", function () {
    this.setCustomValidity("Please enter a valid email address.");
});

email.addEventListener("input", function () {
    this.setCustomValidity(""); // clear on input
});

password.addEventListener("invalid", function () {
    this.setCustomValidity("Password is required.");
});

password.addEventListener("input", function () {
    this.setCustomValidity("");
});

//  Password Icon
const togglePassword = document.getElementById('toggle-password');

togglePassword.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text';
    togglePassword.classList.remove('fa-eye');
    togglePassword.classList.add('fa-eye-slash'); // Or change icon to a closed eye
  } else {
    password.type = 'password';
    togglePassword.classList.remove('fa-eye-slash');
    togglePassword.classList.add('fa-eye'); // Or change icon to an open eye
  }
});