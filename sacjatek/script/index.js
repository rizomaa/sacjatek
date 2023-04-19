import images from "./images.js";

// section content 

const playButton = document.querySelector(".list-content_button");
const video = document.querySelector(".list-content_video");

console.log(playButton);
console.log(video);

function videoOpen () {
  video.style.display = "block";
  console.log("click");
}

playButton.addEventListener("click", function () {
  videoOpen();
});



// section uniqueness

const buttonUniqueness = document.querySelector("#button-uniqueness");
const ItemUniquenessInactive = document.querySelectorAll(".item-uniqueness_inactive");

buttonUniqueness.addEventListener("click", function() {
  for(let i=0; i<ItemUniquenessInactive.length; i++) {
    if(ItemUniquenessInactive[i].classList.contains("item-uniqueness_inactive")) {
      ItemUniquenessInactive[i].classList.remove("item-uniqueness_inactive");
      buttonUniqueness.classList.add("button-uniqueness-active");
      buttonUniqueness.innerHTML = "Паказаць меньш";
    } else {
      ItemUniquenessInactive[i].classList.add("item-uniqueness_inactive");
      buttonUniqueness.classList.remove("button-uniqueness-active");
      buttonUniqueness.innerHTML = "Паказаць больш";
    }
  }
});


// section obtaining

const buttonObtaining = document.querySelector("#button-obtaining");
const ItemObtainingInactive = document.querySelectorAll(".item-obtaining_inactive");

buttonObtaining.addEventListener("click", function() {
  for(let i=0; i<ItemObtainingInactive.length; i++) {
    if(ItemObtainingInactive[i].classList.contains("item-obtaining_inactive")) {
      ItemObtainingInactive[i].classList.remove("item-obtaining_inactive");
      buttonObtaining.classList.add("button-obtaining-active");
      buttonObtaining.innerHTML = "Паказаць меньш";
    } else {
      ItemObtainingInactive[i].classList.add("item-obtaining_inactive");
      buttonObtaining.classList.remove("button-obtaining-active");
      buttonObtaining.innerHTML = "Паказаць больш";
    }
  }
});

// burger menu 



// slider

const sliderButtonPrev = document.querySelector(".slider-button-prev");
const sliderButtonNext = document.querySelector(".slider-button-next");
const sliderImage = document.querySelector(".slider-image");
const sliderTitle = document.querySelector(".slider-title");
const sliderText = document.querySelector(".slider-text");
let num = 0;


function getImageSlider () {
  sliderImage.src = images[num].img;
  sliderImage.alt = images[num].name;
  sliderTitle.innerHTML = `${images[num].name}, ${images[num].years}`;
  sliderText.innerHTML = images[num].description;
  console.log(num);
}

getImageSlider ();


function getSlideNext () {
  num = num+1;
  if(num > images.length-1) {
    num = 0;
  }

  getImageSlider (num);
}

function getSlidePrev () {
  num = num-1;
  if(num < 0) {
    num = images.length-1;
  }
  getImageSlider (num);
}

sliderButtonPrev.addEventListener("click", function () {
  getSlidePrev ();
  console.log("click")
});

sliderButtonNext.addEventListener("click", function () {
  getSlideNext ();
  console.log("click")
});