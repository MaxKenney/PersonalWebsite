var Project1Div = document.getElementById("project1");
var Project2Div = document.getElementById("project2");
var Project3Div = document.getElementById("project3");
var Project4Div = document.getElementById("project4");
var project1Modal = document.getElementById("project1Modal");
var project2Modal = document.getElementById("project2Modal");
var project3Modal = document.getElementById("project3Modal");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
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