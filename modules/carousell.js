import { fetchCarouselPosts } from "./url.js";

const slideInner = document.querySelector(".slide__inner");

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

async function generateSlides() {
  const latestPosts = await fetchCarouselPosts();

  let html = "";

  latestPosts.map((post) => {
    html += `
      <div class="slider__item">
        <img
          src="${post.media.url}"
        />
        <div class="slider_content">
          <span class="slider_title">${post.title}</span>
          <p class="slider_text">
            ${post.body}
          </p>
          <button class="sliderCTA" data-id="${post.id}">Read More</button>
        </div>
      </div>
    `;
  });

  slideInner.innerHTML = html;

  const buttonCta = document.querySelectorAll(".sliderCTA");
  buttonCta.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const id = button.getAttribute("data-id");
      const nextLocation = `/post/index.html?id=${id}`;
      window.location.href = nextLocation;
    });
  });
}

function CarouselInit() {
  generateSlides();

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
export { generateSlides };
