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
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// if (prefersDarkScheme.matches) {
//   document.body.classList.add("dark-theme");
// } else {
//   document.body.classList.remove("dark-theme");
// }

// let canvas = document.querySelector("#draw-game");
// let brush = canvas.getContext("2d");
// brush.arc(335, 110, 35, 4, 2.5 * Math.PI);
// let grd = brush.createLinearGradient(0, 0, 200, 0);
// brush.fillStyle = grd;
// brush.lineWidth = 15;

// brush.stroke();
