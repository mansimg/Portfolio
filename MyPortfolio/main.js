// alert("Hey! this is an alert box")
var myButton = document.querySelector("button");

myButton.onclick = function() {
  setUserName();
}
function setUserName(){
  var name = prompt("Please enter your name: ");
  localStorage.setItem("name: ", name);
  myHeading.innerHTML();
}
