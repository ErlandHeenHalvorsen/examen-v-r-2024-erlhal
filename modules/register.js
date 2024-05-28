import { baseUrl } from "./constants.js";
////
const registerName = document.querySelector("#reg-name");
const registerEmail = document.querySelector("#reg-email");
const registerPassword = document.querySelector("#reg-password");
const registerButton = document.querySelector("#reg-button");

async function registerAdmin() {
  const data = {
    name: registerName.value,
    email: registerEmail.value,
    password: registerPassword.value,
  };

  const response = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}
registerButton.addEventListener("click", () => registerAdmin());
