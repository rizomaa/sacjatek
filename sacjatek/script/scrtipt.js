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
const blockUniquenessInactive = document.querySelectorAll(".block-uniqueness-content_inactive");

buttonUniqueness.addEventListener("click", function() {
  for(let i=0; i<blockUniquenessInactive.length; i++) {
    if(blockUniquenessInactive[i].classList.contains("block-uniqueness-content_inactive")) {
      blockUniquenessInactive[i].classList.remove("block-uniqueness-content_inactive");
      buttonUniqueness.classList.add("block-uniqueness-button-active");
      buttonUniqueness.innerHTML = "Паказаць меньш";
    } else {
      blockUniquenessInactive[i].classList.add("block-uniqueness-content_inactive");
      buttonUniqueness.classList.remove("block-uniqueness-button-active");
      buttonUniqueness.innerHTML = "Паказаць больш";
    }
  }
})
