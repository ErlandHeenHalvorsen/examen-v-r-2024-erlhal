const baseUrl = "https://v2.api.noroff.dev/";
//
const slider = document.querySelector(".slide__inner");
const prevButton = document.querySelector(".previous_slide");

const nextButton = document.querySelector(".next_slide");

let slideLeft = 0; // -100, -200 '' ``

function prevSlide() {
  if (slideLeft >= 0) {
    console.log("vi er på første slide");
  } else {
    slideLeft = slideLeft + 100;
  }
  slider.style.left = `${slideLeft}vW`;
}

function nextSlide() {
  if (slideLeft <= -200) {
    console.log("vi er på siste slide");
  } else {
    slideLeft = slideLeft - 100;
  }
  slider.style.left = `${slideLeft}vW`;
}
//const prevSlide = () => {}

prevButton.addEventListener("click", (event) => {
  event.preventDefault();
  prevSlide();
});

nextButton.addEventListener("click", (event) => {
  event.preventDefault();
  nextSlide();
});

function autoSlider() {
  setInterval(() => {
    nextSlide();
  }, 5000);
}
//autoSlider();
