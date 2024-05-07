import { baseUrl } from "./constants.js";
import CarouselInit from "./carousell.js";
import generateCard from "./cards.js";

async function loadIndex() {
  CarouselInit();
  const mainRow = document.querySelector(`.mainRow`);
  mainRow.innerHTML = await generateCard();

  const allCardButtons = document.querySelectorAll(".read-more-button");
  allCardButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = button.getAttribute("data-id");

      window.location.href = `/post/index.html?id=${id}`;
    });
  });
}

loadIndex();

// let res = await fetch("https://v2.api.noroff.dev/blog/posts/erlhal");
// res = await res.json();
// console.log(res);
