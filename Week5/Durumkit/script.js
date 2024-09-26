var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("./drumkit-docs/boom.wav");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("./drumkit-docs/clap.wav");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("./drumkit-docs/hihat.wav");
      tom3.play();
      break;

    case "f":
      var tom3 = new Audio("./drumkit-docs/kick.wav");
      tom3.play();
      break;

    case "g":
      var tom3 = new Audio("./drumkit-docs/openhat.wav");
      tom3.play();
      break;

    case "h":
      var tom3 = new Audio("./drumkit-docs/ride.wav");
      tom3.play();
      break;

    case "j":
      var tom3 = new Audio("./drumkit-docs/snare.wav");
      tom3.play();
      break;

    case "k":
      var tom3 = new Audio("./drumkit-docs/tink.wav");
      tom3.play();
      break;

    case "l":
      var tom3 = new Audio("./drumkit-docs/tom.wav");
      tom3.play();
      break;
  }
}