var modal = document.querySelector(".wrapper")
var overlay =  document.querySelector(".overlay");
var btn = document.querySelector(".btnLogin-popup")
var close = document.querySelector(".icon-close")
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  

const closeModel = function(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden");
}
btn.addEventListener("click", openModal);
close.addEventListener("click", closeModel)