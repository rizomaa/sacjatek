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