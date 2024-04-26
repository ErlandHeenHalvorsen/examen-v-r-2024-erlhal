const baseUrl = "https://v2.api.noroff.dev/";
//
const slider = document.querySelector(".slide__inner");
const prevButton = document.querySelector(".previous_slide");
const nextButton = document.querySelector(".next_slide");

let slideLeft = 0; // -100, -200 '' ``
let slideMin = -200;
let slideMax = 0;

let autoPlay = true;

function prevSlide() {
  if (slideLeft >= 0) {
    slideLeft = slideMin;
  } else {
    slideLeft = slideLeft + 100;
  }
  slider.style.left = `${slideLeft}vW`;
}

function nextSlide() {
  if (slideLeft <= -200) {
    slideLeft = slideMax;
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
    if (autoPlay) {
      nextSlide();
    }
  }, 5000);
}
autoSlider();

slider.addEventListener("mouseover", (event) => {
  event.preventDefault();
  autoPlay = false;
  console.log("stop carousell");
});
slider.addEventListener("mouseout", (event) => {
  event.preventDefault();
  autoPlay = true;
  console.log("started carousell");
});
