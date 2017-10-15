var menuIcon = document.querySelector("#menuIcon");

menuIcon.addEventListener("click", function() {

  var navUl = document.querySelector("#nav ul");

  if (navUl.classList) {
    navUl.classList.toggle("open");
  } else {
    //For IE9
    var classes = navUl.classname.split(" ");
    var i = classes.indexOf("open");

    if ( i >= 0) {
      classes.splice(i, 1);
    } else {
      classes.push("open");
      navUl.className = classes.join(" ");
    }
  }

  var menuIconBars = document.querySelectorAll("#menuIcon span"),
      bars = ["barOne", "barTwo", "barThree"];

  for (var i = 0; i < menuIconBars.length; i++ ) {
    menuIconBars[i].classList.toggle(bars[i]);
  }
});
