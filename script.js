$(".modal .close").click(function() {
  // Get the modal that this close button belongs to
  var modal = $(this).closest(".modal");
  modal.hide();
});

var Project1Div = document.getElementById("project1");
var Project2Div = document.getElementById("project2");
var Project3Div = document.getElementById("project3");
var Project4Div = document.getElementById("project4");
var project1Modal = document.getElementById("project1Modal");
var project2Modal = document.getElementById("project2Modal");
var project3Modal = document.getElementById("project3Modal");

// When the user clicks the button, open the modal 
Project1Div.onclick = function() {
  project1Modal.style.display = "block";
}
Project2Div.onclick = function() {
  project2Modal.style.display = "block";
}
Project3Div.onclick = function() {
  project3Modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == project1Modal || 
  	event.target == project2Modal ||
  	event.target == project3Modal ||
  	event.target == project4Modal) {
    project1Modal.style.display = "none";
    project2Modal.style.display = "none";
    project3Modal.style.display = "none";
  }
}

$(document).ready(function(){
  
  var typed = new Typed(".typed", {
    strings: ["XR Developer", "Software Engineer", "Unity Developer"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  })
});