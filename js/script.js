const [body] = document.getElementsByTagName('body');
const navbar = document.getElementById('navbar');
body.onscroll = function (event) {
  console.log(event);
  const screenHeight = event.path[1].screen.height;
  const screenWidth = event.path[1].screen.width;
  if(screenHeight > screenWidth){
    // mobile view
    // dont do anything
  } else {
    const scrollYPosition = event.path[1].scrollY;
    if(scrollYPosition > 150){
      navbar.style.backgroundColor = "rgba(0,0,0,0.3)";
    } else {
      navbar.style.backgroundColor = "#333";
    }
  }
}

// Smooth Scroll Using smooth-scroll.polyfills.js




var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000
});