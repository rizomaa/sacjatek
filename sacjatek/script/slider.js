import images from "./images.js";

// slider

const sliderButtonPrev = document.querySelector(".slider-button-prev");
const sliderButtonNext = document.querySelector(".slider-button-next");
const sliderImage = document.querySelector(".slider-image");
const sliderTitle = document.querySelector(".slider-title");
const sliderText = document.querySelector(".slider-text");
let num = 11;

function getImageSlider() {
  sliderImage.src = images[num].img;
  sliderImage.alt = images[num].name;
  sliderTitle.innerHTML = `${images[num].name}, ${images[num].years}`;
  sliderText.innerHTML = images[num].description;
}

getImageSlider();

function getSlideNext() {
  num = num + 1;
  if (num > images.length - 1) {
    num = 0;
  }

  getImageSlider(num);
}

function getSlidePrev() {
  num = num - 1;
  if (num < 0) {
    num = images.length - 1;
  }
  getImageSlider(num);
}

sliderButtonPrev.addEventListener("click", function () {
  getSlidePrev();
  console.log("click");
});

sliderButtonNext.addEventListener("click", function () {
  getSlideNext();
  console.log("click");
});
