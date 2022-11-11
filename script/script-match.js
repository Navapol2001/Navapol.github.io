// let model = document.getElementsByClassName("model")
// let btn = document.getElementById("btn");
// let span = document.getElementsByClassName("close")[0];
let model = document.querySelector("#myModel");
let btn = document.querySelector("#btn");
let span = document.querySelector(".close");

btn.onclick = function() {
   model.style.display = "block";
}
span.onclick = function() {
   model.style.display = "none";
}
window.onclick = function(event) {
   if(event.target == model) {
      model.style.display = "none";
   }
}

let model1 = document.querySelector("#myModel1");
let btn1 = document.querySelector("#btn1");
let span1 = document.querySelector(".close1");

btn1.onclick = function() {
   model1.style.display = "block";
}
span1.onclick = function() {
   model1.style.display = "none";
}
window.onclick = function(event) {
   if(event.target == model1) {
      model1.style.display = "none";
   }
}