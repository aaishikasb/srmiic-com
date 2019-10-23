var array = ["res/img/TT/1.jpeg", "res/img/TT/2.jpeg", "res/img/TT/3.jpeg", "res/img/TT/4.jpeg", "res/img/TT/5.jpeg", "res/img/TT/6.jpeg", "res/img/TT/7.jpeg", "res/img/TT/8.jpg", "res/img/TT/9.jpg", "res/img/TT/10.jpg", "res/img/TT/11.jpg", "res/img/TT/12.jpg", "res/img/TT/13.jpg", "res/img/TT/14.jpg", "res/img/TT/15.jpeg", "res/img/TT/16.jpg"]

function getRandomImage() {
  return array[Math.floor(Math.random() * array.length)];
}

console.log(
  "%cThe developer console is disabled for good! :)\ncrafted with ♥ by SRMKZILLA (https://srmkzilla.net/)",
  "background: #212121; color: #f69510; padding: 6px; border-radius: 4px;"
);

//console.log = () => { }
console.error = () => { }
console.warn = () => { }

// $(document).ready(() => {
//   setInterval(() => {
//     console.log("ran");

//     var image = getRandomImage()
//     console.log(image)
//     $("#imageSwap1").fadeIn(3000).attr("src", image).delay(2000).fadeOut(500)

//   }, 6000)

// })


//////////////////////////////////////////////
//////   GRID IMAGE ASYNC ANIMATION   ///////
////////////////////////////////////////////


//1//
$(document).ready(function () {
  setImageOneOne();
});
function setImageOneOne() {
  $("#imageSwap1")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6000)
    .fadeOut(1000, function () {
      setImageOneTwo();
    });
}

function setImageOneTwo() {
  $("#imageSwap1")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6000)
    .fadeOut(1000, function () {
      setImageOneThree();
    });
}

function setImageOneThree() {
  $("#imageSwap1")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6000)
    .fadeOut(1000, function () {
      setImageOneOne();
    });
}
//1 ends //

//2//
$(document).ready(function () {
  setImageTwoOne();
});
function setImageTwoOne() {
  $("#imageSwap2")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6201)
    .fadeOut(1000, function () {
      setImageTwoTwo();
    });
}

function setImageTwoTwo() {
  $("#imageSwap2")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6201)
    .fadeOut(1000, function () {
      setImageTwoThree();
    });
}

function setImageTwoThree() {
  $("#imageSwap2")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6201)
    .fadeOut(1000, function () {
      setImageTwoOne();
    });
}
// 2 ends //
//3//
$(document).ready(function () {
  setImageThreeOne();
});
function setImageThreeOne() {
  $("#imageSwap3")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(5957)
    .fadeOut(1000, function () {
      setImageThreeTwo();
    });
}

function setImageThreeTwo() {
  $("#imageSwap3")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(5957)
    .fadeOut(1000, function () {
      setImageThreeThree();
    });
}

function setImageThreeThree() {
  $("#imageSwap3")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(5957)
    .fadeOut(1000, function () {
      setImageThreeOne();
    });
}
// 3 ends //
//4//
$(document).ready(function () {
  setImageFourOne();
});
function setImageFourOne() {
  $("#imageSwap4")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6110)
    .fadeOut(1000, function () {
      setImageFourTwo();
    });
}

function setImageFourTwo() {
  $("#imageSwap4")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6110)
    .fadeOut(1000, function () {
      setImageFourThree();
    });
}

function setImageFourThree() {
  $("#imageSwap4")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6110)
    .fadeOut(1000, function () {
      setImageFourOne();
    });
}
// 4 ends //
//5//
$(document).ready(function () {
  setImageFiveOne();
});
function setImageFiveOne() {
  $("#imageSwap5")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6523)
    .fadeOut(1000, function () {
      setImageFiveTwo();
    });
}

function setImageFiveTwo() {
  $("#imageSwap5")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6523)
    .fadeOut(1000, function () {
      setImageFiveThree();
    });
}

function setImageFiveThree() {
  $("#imageSwap5")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6523)
    .fadeOut(1000, function () {
      setImageFiveOne();
    });
}
// 5 ends //
//6//
$(document).ready(function () {
  setImageSixOne();
  changeH1Title();
});

function changeH1Title() {

  if ($('.kz-hero-box h1.kz-title') === undefined) return

  var width = $(this).width()
  if (width < 810) {
    $('.kz-hero-box h1.kz-title').text('SIIC')
  } else {
    $('.kz-hero-box h1.kz-title').text('SRM Innovation and Incubation Centre')
  }

  $(window).resize(function () {
    var width = $(this).width()
    if (width < 810) {
      $('.kz-hero-box h1.kz-title').text('SIIC')
    } else {
      $('.kz-hero-box h1.kz-title').text('SRM Innovation and Incubation Centre')
    }
  });

}

function setImageSixOne() {
  $("#imageSwap6")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(5879)
    .fadeOut(1000, function () {
      setImageSixTwo();
    });
}

function setImageSixTwo() {
  $("#imageSwap6")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(5879)
    .fadeOut(1000, function () {
      setImageSixThree();
    });
}

function setImageSixThree() {
  $("#imageSwap6")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(5879)
    .fadeOut(1000, function () {
      setImageSixOne();
    });
}
// 6 ends //
//7//
$(document).ready(function () {
  setImageSevenOne();
});
function setImageSevenOne() {
  $("#imageSwap7")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6623)
    .fadeOut(1000, function () {
      setImageSevenTwo();
    });
}

function setImageSevenTwo() {
  $("#imageSwap7")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6623)
    .fadeOut(1000, function () {
      setImageSevenThree();
    });
}

function setImageSevenThree() {
  $("#imageSwap7")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6623)
    .fadeOut(1000, function () {
      setImageSevenOne();
    });
}
// 7 ends //
//8//
$(document).ready(function () {
  setImageEightOne();
});
function setImageEightOne() {
  $("#imageSwap8")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6791)
    .fadeOut(1000, function () {
      setImageEightTwo();
    });
}

function setImageEightTwo() {
  $("#imageSwap8")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6791)
    .fadeOut(1000, function () {
      setImageEightThree();
    });
}

function setImageEightThree() {
  $("#imageSwap8")
    .fadeIn(1000)
    .html('<img class="w-100 h-100" src="' + getRandomImage() + '" alt="image" />')
    .delay(6791)
    .fadeOut(1000, function () {
      setImageEightOne();
    });
}
// 8 ends //
/////////////////////////////////////////
/////   ANIMATION ENDS HERE   //////////
///////////////////////////////////////

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
          step: function (now) {
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

$(window).scroll(function () {
  console.log("hello");

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

$(document).ready(function () {
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
