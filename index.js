// variable to check current state of menu
var a = false;

// function to handle menu click
function menuClick() {
  if (a == false) {
    document.getElementById("menu-container").style.display = "initial";
    a = true;
    document.getElementById("body").style.position = "fixed";
  } else {
    document.getElementById("menu-container").style.display = "none";
    a = false;
    document.getElementById("body").style.position = "initial";
  }
}
