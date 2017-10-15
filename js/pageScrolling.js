var links = $("#links li a");

links.bind("click", function() {
  var t = $(this).attr("href"),
  to = $(t).offset().top;
  $("html, body").animate({
    scrollTop: to
  }, 1000);
});

var first = $("#header").offset().top,
    second = $("#secondSection").offset().top,
    third = $("#thirdSection").offset().top,
    prev = 0;

/*$(window).bind("mousewheel", function(e) {
  var w = $(window).scrollTop();
  if (e.originalEvent.wheelDelta >= 0) {
    if (w === third) {
      $("html, body").animate({
        scrollTop: second
      }, 700);
    }
    if (w === second) {
      $("html, body").animate({
        scrollTop: first
      }, 700);
    }
  } else {
    if (w === first) {
      $("html, body").animate({
        scrollTop: second
      }, 700);
    }
    if (w === second) {
      $("html, body").animate({
        scrollTop: third
      }, 700);
    }
  }
});*/

$(window).on("mousewheel DOMMouseScroll", function(e) {
  var delta = e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -e.originalEvent.detail;
  var w = $(window).scrollTop();

  if (delta >= 0) {
    console.log("up" + w);
    if (w == first) {
      $("html, body").stop();
      console.log("stop up");
    }
    if (w == second && w > first) {
      $("html, body").animate({
        scrollTop: first
      }, 500);
    }
    if (w == third && w > second) {
      $("html, body").animate({
        scrollTop: second
      }, 500);
    }
  } else {
    console.log("down" + w);
    if (w < second && w == first) {
      $("html, body").animate({
        scrollTop: second
      }, 500);
    }
    if (w < third && w == second) {
      $("html, body").animate({
        scrollTop: third
      }, 500);
    }
    if (w === third) {
      $("html, body").stop();
      console.log("stop down");
    }
  }
});
