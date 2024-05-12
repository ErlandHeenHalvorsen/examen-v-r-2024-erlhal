import { baseUrl } from "./constants.js";

const cardImg = document.querySelector(`.card-container-img`);
const gameTitle = document.querySelector(`.game-title`);
const gameRating = document.querySelector(`.game-rating`);
const cardText = document.querySelector(`.card-text`);
///

const params = new URLSearchParams(document.location.search);
const id = params.get("id");
console.log(params);
console.log(id);

async function getIndexCard() {
  let res = await fetch(`${baseUrl}/blog/posts/erlhal/${id}`);
  res = await res.json();
  let data = res.data;
  console.log(data);
  gameTitle.innerHTML = data.title;
  if (data.media) {
    cardImg.setAttribute("src", data.media.url);
    cardImg.setAttribute("alt", data.media.alt);
  } else {
    cardImg.setAttribute("src", "/img/gameOver.jpg");
  }
  if (data.body) {
    cardText.innerHTML = data.body;
  } else {
    cardText.innerHTML = `
    <p>This post is empty. Maybe something is being worked on?</p> 
    <img src="/img/giphy.gif" style="height:200px;width:200px;">
      `;
  }
}
getIndexCard();

/* let res = await fetch(`${baseUrl}/blog/posts/erlhal/${id}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});
console.log(res); */
