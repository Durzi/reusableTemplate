
let img = document.querySelectorAll("#myGrid img"),
    modal = document.querySelector(".modal"),
    modalImg = document.querySelector(".modalImg"),
    section = document.querySelector("#thirdSection"),
    close = document.querySelector("#closeModal");

var menuIconBars = document.querySelectorAll("#menuIcon span"),
    bars = ["barOne", "barTwo", "barThree"];

//Loop through the images and add an event listener to each image
for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function() {
    modal.style.display = "flex";
    section.classList.toggle("blurSection");
    window.scrollTo(0, section.offsetTop);
    document.body.classList.toggle("modal-open");
    modalImg.setAttribute("src", this.getAttribute("src"));
  });

  //if you click off the image it closes modal
  modal.addEventListener("click", function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
      section.classList.remove("blurSection");
      document.body.classList.remove("modal-open");
    }
  });


  //if you click close "x" it will close modal
  close.addEventListener("click", function() {
    modal.style.display = "none";
    section.classList.remove("blurSection");
    document.body.classList.remove("modal-open");
  });
}
