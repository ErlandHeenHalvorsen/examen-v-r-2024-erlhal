import { baseUrl } from "./constants.js";
import getIdFromUrl from "./url.js";

const cardImg = document.querySelector(`.card-container-img`);
const gameTitle = document.querySelector(`.game-title`);
const gameRating = document.querySelector(`.game-rating`);
const cardText = document.querySelector(`.card-text`);

const id = getIdFromUrl();

async function fetchPost(postId) {
  let res = await fetch(`${baseUrl}/blog/posts/erlhal/${postId}`);
  res = await res.json();
  let data = res.data;
  return data;
}

async function getIndexCard() {
  let data = await fetchPost(id);
  let body = data.body.replace(/\\n/gm, "<br><br>");
  console.log(data);
  gameTitle.innerHTML = `<h2>${data.title}</h2>`;
  if (data.media) {
    cardImg.setAttribute("src", data.media.url);
    cardImg.setAttribute("alt", data.media.alt);
  } else {
    cardImg.setAttribute("src", "/img/gameOver.jpg");
  }
  if (data.body) {
    cardText.innerHTML = body;
  } else {
    cardText.innerHTML = `
    <p>This post is empty. Maybe something is being worked on?</p> 
    <img src="/img/giphy.gif" style="height:200px;width:200px;">
      `;
  }
}
getIndexCard();

export default fetchPost;
