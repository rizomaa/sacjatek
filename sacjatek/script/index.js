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
console.log(listContent)

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

      // const frame = document.createElement("iframe");
      // frame.classList.add("frame");
      // videoContent.append(frame);
      // frame.src = `${element[i].src}`;
      // frame.setAttribute("allow", "fullscreen");
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

// console.log("click");

// tabsBody.addEventListener("click", (event) => {
//   console.log("click");

// });

const modalWrap = document.querySelector(".modal_wrap");
const frameContainer = document.querySelector(".frame_container");


console.log(listContent.length)

for (let i = 0; i < listContent.length; i++) {
  listContent[i].addEventListener("click", (event) => {
    const closestButtonContent = event.target.closest(".list-content_button");
    const closestButtonContentId = closestButtonContent.id;
    console.log(closestButtonContentId);
    const currentVideoData = video[i].find((el) => {
      console.log(el.id);
      frame.src = el.src;
      // console.log(frame.src);
      // const videoContent = document.createElement("div");
      // videoContent.classList.add("list-content_video");
      // console.log(itemContent);
      // itemContent.append(videoContent);
      frameContainer.style.display = "flex";
      // videoContent.append(frame);
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
  frame.style.display = "none";
});

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
      buttonUniqueness.innerHTML = "Меней цікавостак";
    } else {
      ItemUniquenessInactive[i].classList.add("item-uniqueness_inactive");
      buttonUniqueness.classList.remove("button-uniqueness-active");
      buttonUniqueness.innerHTML = "Болей цікавостак";
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
      // buttonObtaining.innerHTML = "Паказаць меньш";
    } else {
      ItemObtainingInactive[i].classList.add("item-obtaining_inactive");
      buttonObtaining.classList.remove("button-obtaining-active");
      // buttonObtaining.innerHTML = "Што яшчэ засвоіце";
    }
  }
});
