const FullName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const ConfirmPassword = document.getElementById("passwordC");
const container = document.getElementById("messageContainer");

const signup = document.getElementById("signUpBtn");

function showError(message) {
  error = document.createElement("div");
  error.className = "error";
  error.innerText = `Error : ${message}`;
  container.innerHTML = "";
  container.appendChild(error);
}

function showSuccess(message) {
  error = document.createElement("div");
  error.className = "success";
  error.innerText = `Error : ${message}`;
  container.innerHTML = "";
  container.appendChild(error);
}

signup.addEventListener("click", (event) => {
  event.preventDefault();
  addUser();
});

function addUser() {
  if (
    FullName.value == "" ||
    email.value == "" ||
    password.value == "" ||
    ConfirmPassword.value == ""
  ) {
    showError("All Fields are Mandatory");
    return;
  } else if (password.value !== ConfirmPassword.value) {
    showError("Password does'nt match");
    return;
  }

  let token = generateToken();
  let user = {
    token: token,
    name: FullName.value,
    password: password.value,
    email: email.value,
  };
  localStorage.setItem("userState", JSON.stringify(user));

  showSuccess("Successfully Signed Up!!");
  FullName.value = "";
  password.value = "";
  email.value = "";

  window.location.href = "./profile.html";
}

function generateToken() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 16; i++) {
    let char = characters.charAt(Math.floor(Math.random() * characters.length));
    token += char;
  }
  return token;
}
