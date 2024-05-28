import { baseUrl } from "./constants.js";
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector(".loginBtn");

async function submitForm() {
  loginButton.disable = true;

  const data = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  let res = await fetch("https://v2.api.noroff.dev/auth/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
  let result = await res.json();

  console.log(result);

  if (result.data.accessToken) {
    localStorage.setItem("token", JSON.stringify(result.data.accessToken));
    window.location.href = "/index.html";
  } else {
    console.log("no token");
  }
}
submitForm();

loginButton.addEventListener(`click`, () => submitForm());
passwordInput.addEventListener("keydown", (event) => {
  let key = event.key;
  if (key === "Enter") {
    submitForm();
  }
});
