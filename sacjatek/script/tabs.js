import video from "./video.js";

// tabs

const tabsBlocks = document.querySelectorAll(".tabs__block");
const tabsItems = document.querySelector(".tabs__items");

tabsItems.addEventListener("click", (event) => {
  const tabItemsTarget = event.target.closest(".tabs__item");
  const tabItemsTargetID = tabItemsTarget.id;
  for (let i = 0; i < tabsBlocks.length; i++) {
    if (tabsBlocks[i] === tabsBlocks[tabItemsTargetID]) {
      tabsBlocks[tabItemsTargetID].classList.add("tabs__block-active");
    } else {
      tabsBlocks[i].classList.remove("tabs__block-active");
    }

    if (tabsBlocks[tabItemsTargetID].classList.contains("tabs__block-active")) {
    }
  }
});

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
      buttonContent.id = `${element[i].id}`;
      containerContent.append(buttonContent);

      const buttonContentImage = document.createElement("img");
      buttonContentImage.src = "assets/icons/play-alt.svg";
      buttonContentImage.alt = "play";
      buttonContentImage.classList.add("list-content_button-image");
      buttonContent.append(buttonContentImage);

      const textContent = document.createElement("p");
      containerContent.append(textContent);
      textContent.classList.add("text");
      textContent.classList.add("text-content");
      textContent.innerHTML = element[i].name;

      const videoContent = document.createElement("div");
      videoContent.classList.add("list-content_video");
      itemContent.append(videoContent);
      videoContent.id = `${element[i].id}`;
    }
  }
}

addList();

const itemContent = document.querySelector(".list-content_item");
const playButton = document.querySelector(".list-content_button");

const videoContent = document.createElement("div");
videoContent.classList.add("list-content_video");
itemContent.append(videoContent);

const frame = document.querySelector("iframe");
frame.classList.add("frame");

frame.setAttribute("allow", "fullscreen");

const tabsBody = document.querySelector(".tabs__body");

const modalWrap = document.querySelector(".modal_wrap");
const frameContainer = document.querySelector(".frame_container");

for (let i = 0; i < listContent.length; i++) {
  listContent[i].addEventListener("click", (event) => {
    const closestButtonContent = event.target.closest(".list-content_button");
    const closestButtonContentId = closestButtonContent.id;
    const currentVideoData = video[i].find((el) => {
      frame.src = el.src;
      frameContainer.style.display = "flex";
      return el.id === closestButtonContentId;
    });

    modalWrap.style.display = "block";
    body.classList.add("modal_wrap-active");

    return currentVideoData;
  });
}

modalWrap.addEventListener("click", () => {
  modalWrap.style.display = "none";
  body.classList.remove("modal_wrap-active");
  frameContainer.style.display = "none";
});