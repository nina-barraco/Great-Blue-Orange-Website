function clickNav(x) {
    var display = document.getElementById("topnav-mobile-js");
    display.classList.toggle("display-topnav-mobile");
  }

function fadeIn(x) {
  var fadeElements = Array.from(document.getElementsByClassName("fade-js"));
  var windowHeight = window.innerHeight;
  function checkPosition() {
    for (var i = 0; i < fadeElements.length; i++) {
      var positionFromTop = fadeElements[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        fadeElements[i].classList.add("fade-animation");
      }
    }
  };
  checkPosition();
}