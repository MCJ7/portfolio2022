/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function headerReponsive() {

  let currentClass = document.querySelector(".header");
  if (currentClass.className === "header") {
    currentClass.className += " responsive";
  } else {
    currentClass.className = "header";
  }
}
function resetReponsive() {
  let currentClass = document.querySelector(".header.responsive");
  currentClass.className="header"
}

let lightDark=()=> {
    let element = document.querySelector(".lightToDark");
    element.classList.toggle("dark-mode");
}
