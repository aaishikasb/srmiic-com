$("#header__button").click(function() {
  $(this).toggleClass("hamburger--open");
  if ($(".kz-nav-menu").css("display") == "block") {
    $("body").removeClass("stop-scrolling");
    $(".kz-nav-menu").fadeOut(400);
    $("body").unbind("touchmove");
  } else {
    $("body").addClass("stop-scrolling");
    $(".kz-nav-menu").fadeIn(400);
    $("body").bind("touchmove", function(e) {
      e.preventDefault();
    });
  }
});

function updateNavImage(index) {
  const images = ["nav1.jpg", "nav2.jpg", "nav3.jpg", "nav4.jpg", "nav5.jpg"];
  var val =
    "linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.8)),url(res/img/" +
    images[index] +
    ")";
  if (index == -1) {
    val = "rgba(255,255,255,1)";
  }
  $(".kz-nav-menu").css("background", val);
}

function animateIncrementation() {
  $(".kz-number-tile-value").each((index, e) => {
    const v = $(e).attr("data-value");
    console.log(v);
    $(e)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(e).text()
        },
        {
          duration: 900,
          easing: "swing",
          step: function(now) {
            $(e).text(Math.ceil(now));
          }
        }
      );
  });
}

var number_bar = $(".kz-section-number-bar").offset().top;
var eventFired = false;

var gallery = $(".kz-section-gallery").offset().top;
var eventFired2 = false;

console.log(gallery);

$(window).scroll(function() {
  console.log($(window).scrollTop() + $(window).height() * 0.85);
  console.log(
    $(window).scrollTop() + $(window).height() * 0.85 > gallery &&
      eventFired2 == false
  );

  if (
    $(window).scrollTop() + $(window).height() * 0.85 > number_bar &&
    eventFired == false
  ) {
    animateIncrementation();
    eventFired = true;
  }

  if (
    $(window).scrollTop() + $(window).height() * 0.85 > gallery &&
    eventFired2 == false
  ) {
    $(".kz-grid div").css("filter", "grayscale(0)");
    $(".kz-grid div").css("transform", "scale(1)");
    eventFired2 = true;
    console.log("i run");
  }
});

$(document).ready(function() {
  if (
    $(window).scrollTop() + $(window).height() * 0.85 > number_bar &&
    eventFired == false
  ) {
    animateIncrementation();
    eventFired = true;
  }

  if (
    $(window).scrollTop() + $(window).height() * 0.85 > gallery &&
    eventFired2 == false
  ) {
    $(".kz-grid div").css("filter", "grayscale(0)");
    $(".kz-grid div").css("transform", "scale(1)");
    eventFired2 = true;
  }
});
