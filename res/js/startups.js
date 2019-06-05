$(function() {
  // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    .fromTo(
      "section.kz-panel.kz-a",
      0,
      { x: "100%" },
      { x: "0%", ease: Linear.easeNone }
    ) // in from bottom
    .fromTo(
      "section.kz-panel.kz-b",
      1,
      { y: "100%" },
      { y: "0%", ease: Linear.easeNone }
    ) // in from right
    .fromTo(
      "section.kz-panel.kz-c",
      1,
      { x: "-100%" },
      { x: "0%", ease: Linear.easeNone }
    ) // in from top
    .fromTo(
      "section.kz-panel.kz-d",
      1,
      { y: "-100%" },
      { y: "0%", ease: Linear.easeNone }
    ) // in from left
    .fromTo(
      "section.kz-panel.kz-e",
      1,
      { x: "100%" },
      { x: "0%", ease: Linear.easeNone }
    ) // in from bottom
    .fromTo(
      "section.kz-panel.kz-f",
      1,
      { y: "100%" },
      { y: "0%", ease: Linear.easeNone }
    ) // in from right
    .fromTo(
      "section.kz-panel.kz-g",
      1,
      { x: "-100%" },
      { x: "0%", ease: Linear.easeNone }
    ) // in from top
    .fromTo(
      "section.kz-panel.kz-h",
      1,
      { y: "-100%" },
      { y: "0%", ease: Linear.easeNone }
    ) // in from left
    .fromTo(
      "section.kz-panel.kz-i",
      1,
      { x: "100%" },
      { x: "0%", ease: Linear.easeNone }
    ) // in from bottom
    .fromTo(
      "section.kz-panel.kz-j",
      1,
      { y: "100%" },
      { y: "0%", ease: Linear.easeNone }
    ) // in from right
    .fromTo(
      "section.kz-panel.kz-k",
      1,
      { x: "-100%" },
      { x: "0%", ease: Linear.easeNone }
    ); // in from top

  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#kz-container",
    triggerHook: "onLeave",
    duration: "1100%"
  })
    .setPin("#kz-container")
    .setTween(wipeAnimation)
    .addTo(controller);
});
