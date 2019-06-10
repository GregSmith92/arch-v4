//= require jquery
//= require bootstrap-sprockets
//= require_tree .

const backBox = document.getElementById("back-box2");
const smallBox = document.getElementById("back-box2-small");
// console.log(smallBox);

const rotateBig = (query) => {
  window.addEventListener("scroll", (event) => {
    backBox.style.transform = "rotate("+(window.pageYOffset / 10)+"deg)";
  });
};

const rotateSmall = (query) => {
  window.addEventListener("scroll", (event) => {
    smallBox.style.transform = "rotate(-"+(window.pageYOffset / 2)+"deg)";
  });
};

rotateBig();
rotateSmall();
