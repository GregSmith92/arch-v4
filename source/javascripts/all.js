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
    $(".home-text").css("opacity", 1.8 - $(window).scrollTop() / 300);
  });

$(window).scroll(function(){
    $(".project-header").css("opacity", -1.4 + $(window).scrollTop() / 400);
  });

$('#globe-photo').hover(
    function(){
        $('#globe-info').css('display', 'block');
                       },
    function(){
        $('#globe-info').css('display', 'none');
               }
);

$('#cha-photo').hover(
    function(){
        $('#cha-info').css('display', 'block');
                       },
    function(){
        $('#cha-info').css('display', 'none');
               }
);


rotateBig();
rotateSmall();
