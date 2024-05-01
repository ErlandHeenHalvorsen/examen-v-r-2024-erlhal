import { baseUrl } from "./constants.js";
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector(".loginBtn");

async function submitForm() {
  const data = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  let res = await fetch("https:v2.api.noroff.dev/auth/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  res = await res.json();

  console.log(res);

  if (res.data.accessToken) {
    localStorage.setItem("token", JSON.stringify(res.data.accessToken));
  } else {
    console.log("no token");
  }
}

loginButton.addEventListener(`click`, () => submitForm());
passwordInput.addEventListener("keydown", (event) => {
  let key = event.key;
  if (key === "Enter") {
    submitForm();
  }
});
