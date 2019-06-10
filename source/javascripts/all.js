//= require jquery
//= require bootstrap-sprockets
//= require_tree .

const backBox = document.getElementById("back-box2");
const smallBox = document.getElementById("back-box2-small");


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


$(window).scroll(function(){
    $(".header").css("opacity", 1 - $(window).scrollTop() / 600);
  });


rotateBig();
rotateSmall();
