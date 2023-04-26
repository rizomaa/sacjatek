import images from "./images.js";
import video from "./video.js";

// section content
const listContent = document.querySelectorAll(".list-content");

function addList() {
  for (let i = 0; i < video.length; i++) {
    const element = video[i];
    const index = video.indexOf(element);

    for (let i = 0; i < element.length; i++) {
      const itemContent = document.createElement("div");
      itemContent.classList.add("list-content_item");
      listContent[index].append(itemContent);

      const containerContent = document.createElement("div");
      containerContent.classList.add("list-content_item-container");
      itemContent.append(containerContent);

      const buttonContent = document.createElement("button");
      buttonContent.classList.add("list-content_button");
      buttonContent.id = `${[i]}`;
      containerContent.append(buttonContent);

      const buttonContentImage = document.createElement("img");
      buttonContentImage.src = "assets/icons/play-alt.svg";
      buttonContentImage.classList.add("list-content_button-image");
      buttonContent.append(buttonContentImage);

      const textContent = document.createElement("p");
      containerContent.append(textContent);
      textContent.classList.add("text");
      textContent.classList.add("text-content");
      textContent.innerHTML = element[i].name;
    }
  }
}

addList();

// tabs

const tabsBlocks = document.querySelectorAll(".tabs__block");
const tabsItems = document.querySelector(".tabs__items");

tabsItems.addEventListener("click", (event) => {
  const tabItemsTarget = event.target.closest(".tabs__item");
  const tabItemsTargetID = tabItemsTarget.id;
  for (let i = 0; i < tabsBlocks.length; i++) {
    if(tabsBlocks[i] === tabsBlocks[tabItemsTargetID]) {
      tabsBlocks[tabItemsTargetID].classList.add("tabs__block-active")
    } else {
      tabsBlocks[i].classList.remove("tabs__block-active");
    }
    
    if(tabsBlocks[tabItemsTargetID].classList.contains("tabs__block-active")) {
      
    }
  }
  
});



const itemContent = document.querySelector(".list-content_item");
const playButton = document.querySelector(".list-content_button");

const videoContent = document.createElement("div");
videoContent.classList.add("list-content_video");
// itemContent.append(videoContent);

const frame = document.createElement("iframe");
frame.classList.add("frame");
videoContent.append(frame);
frame.src = "https://www.youtube.com/embed/0EwXNXLLn98";
frame.setAttribute("allow", "fullscreen");

// function videoOpen () {
//   videoContent.style.display = "flex";
//   console.log("click");
// }

// playButton.addEventListener("click", function () {
//   videoOpen();
// });

 // listContent[i].addEventListener("click", (event) => {
    //   console.log("click");
    //   const closestButtonContent = event.target.closest(".list-content_button");
    //   const closestButtonContentId = closestButtonContent.id;
    //   console.log(closestButtonContentId);
    //   const currentVideoData = video.find((el) => {});
    // });

// section uniqueness

const buttonUniqueness = document.querySelector("#button-uniqueness");
const ItemUniquenessInactive = document.querySelectorAll(
  ".item-uniqueness_inactive"
);

buttonUniqueness.addEventListener("click", function () {
  for (let i = 0; i < ItemUniquenessInactive.length; i++) {
    if (
      ItemUniquenessInactive[i].classList.contains("item-uniqueness_inactive")
    ) {
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
const ItemObtainingInactive = document.querySelectorAll(
  ".item-obtaining_inactive"
);

buttonObtaining.addEventListener("click", function () {
  for (let i = 0; i < ItemObtainingInactive.length; i++) {
    if (
      ItemObtainingInactive[i].classList.contains("item-obtaining_inactive")
    ) {
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
