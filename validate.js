const user = JSON.parse(localStorage.getItem("userState"));
const logoutBtn = document.getElementById("logoutBtn");
// console.log(user);
if (user.token == undefined) window.location.href = "./index.html";

const detailsContainer = document.getElementById("detailsContainer");

const FullName = document.createElement("div");
FullName.className = "detail";
FullName.innerText = `Full Name : ${user.name}`;
detailsContainer.appendChild(FullName);

const email = document.createElement("div");
email.className = "detail";
email.innerText = `Email : ${user.email}`;
detailsContainer.appendChild(email);

const token = document.createElement("div");
token.className = "detail";
token.innerText = `Token : ${user.token}`;
detailsContainer.appendChild(token);

const password = document.createElement("div");
password.className = "detail";
password.innerText = `Password : ${user.password}`;
detailsContainer.appendChild(password);

logoutBtn.addEventListener("click", (event) => {
  let user = {
    token: undefined,
  };
  localStorage.setItem("userState", JSON.stringify(user));
  window.location.href = "./index.html";
});
