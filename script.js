const models = document.getElementsByClassName("models");
// const moreBtn = document.getElementById("more-button");
//console.log(models);
const just = document.getElementById("justification");
const paths = ["./assets/all-folded.glb", "./assets/big.glb", "./assets/small.glb", "./assets/dark.glb", "./assets/rugged.glb"];

if(window.innerWidth < 400) {
  console.log('small');
  just.style.maxHeight = "180";
  just.style.overflow = "hidden";
  just.style.transition = "max-height .3s ease-in"
}
function toggleContent() {
  just.style.maxHeight = "none";
}

// moreBtn.addEventListener("click", toggleContent);


