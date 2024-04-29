let slider;
let slideLeft;
let slideMin;
let slideMax;
let autoPlay;

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
    slider.classList.add("sliderAnimasjon");
  } else {
    slideLeft = slideLeft - 100;
  }
  slider.style.left = `${slideLeft}vW`;
}

function autoSlider() {
  setInterval(() => {
    if (autoPlay) {
      nextSlide();
    }
  }, 5000);
}

function CarouselInit() {
  slider = document.querySelector(".slide__inner");
  const prevButton = document.querySelector(".previous_slide");
  const nextButton = document.querySelector(".next_slide");

  slideLeft = 0;
  slideMin = -200;
  slideMax = 0;
  autoPlay = true;

  prevButton.addEventListener("click", (event) => {
    event.preventDefault();
    prevSlide();
  });

  nextButton.addEventListener("click", (event) => {
    event.preventDefault();
    nextSlide();
  });

  slider.addEventListener("mouseover", (event) => {
    event.preventDefault();
    autoPlay = false;
  });

  slider.addEventListener("mouseout", (event) => {
    event.preventDefault();
    autoPlay = true;
  });

  autoSlider();
}

export default CarouselInit;
