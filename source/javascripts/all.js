//= require jquery
//= require bootstrap-sprockets
//= require_tree .

const backBox = document.getElementById("back-box");
const headers = document.querySelector(".header");
console.log(headers);
console.log(backBox);

const rotate = (query) => {
  window.addEventListener("scroll", (event) => {
    backBox.style.transform = "rotate("+window.pageYOffset+"deg)";
  });
};

rotate();
