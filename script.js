const passwordEntry = document.querySelector("#password");

function togglePasswordVisibility() {

  if (passwordEntry.type === "password") {
    passwordEntry.type = "text";
  } else {
    passwordEntry.type = "password";
  }
}