var column = document.querySelectorAll("#flex div"),
    colHeader = document.querySelectorAll("#flex .threeColumn h2"),
    col = document.querySelector("#flex .threeColumn");

//Removes "openSection" class from previously opened section
function closeIt() {
  for(var i = 0; i < column.length; i++) {
    if ( column[i].classList.contains("openSection")) {
      column[i].classList.remove("openSection");
    }
  }
}

function openIt(e) {
  e = e || window.event;
  var tar = e.target;
  for (var i = 0; i < colHeader.length; i++) {
    if (tar == colHeader[i] || tar == colHeader[i].parentElement) {
      closeIt();
      colHeader[i].parentElement.classList.toggle("openSection");
    }
  }
}

window.addEventListener("resize", function() {
  var width = document.body.offsetWidth;
  if (width <= 580) {
    //Add click eventlistner to each column
    //Only adds eventlistner if page < 520px
    for (var i = 0; i < column.length; i++) {
      column[i].addEventListener("click", openIt);
    }
  } else {
    closeIt();
    for (var x = 0; x < column.length; x++) {
      column[x].removeEventListener("click", openIt);
    }
  }
})
