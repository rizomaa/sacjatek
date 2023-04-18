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
