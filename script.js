// function setViewBox() {
    // const mySVG = document.getElementById('galleryHeader');
    // console.log(mySVG);
    // var windWidth = window.innerWidth;
    // console.log(windowWidth);
    // console.log("Hello world!");
    
    // if (viewport_width <= 600) { 
    //    mySVG.setAttribute("viewBox", "-430 0 1600 100") 
    // };
  

 
//   window.addEventListener(onWindowResize, "setViewBox", );

  // window.addEventListener("resize", setViewBox());

// const windowWidth = window.innerWidth ||
//   document.documentElement.clientWidth ||
//   document.body.clientWidth;

// const windowHeight = window.innerHeight ||
//   document.documentElement.clientHeight ||
//   document.body.clientHeight;

// // used getElementById for specific SVG
// const shape = document.getElementById("galleryHeader");

// function onWindowResize(){
// console.log(windowWidth, windowHeight);

// if (windowWidth < 600 || windowHeight < 900) {
//   shape.setAttribute("viewBox", "0 0 400 800");
// }
// }

// Added an Event Listener
// window.addEventListener("resize", onWindowResize);

// const heightOutput = document.querySelector("#height");
// const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  // heightOutput.textContent = window.innerHeight;
  // widthOutput.textContent = window.innerWidth;
  const shape = document.getElementById("galleryHeader");
  if (window.innerWidth <= 600) {
      shape.setAttribute("viewBox", "-120 0 650 100");
  } else if (window.innerWidth <= 900 ) {
        shape.setAttribute("viewBox", "-150 0 750 100");
      
  } else {
    shape.setAttribute("viewBox", "-450 0 1350 100");
  }
}





window.onload = reportWindowSize;
//https://primarytech.com/using-svg-with-media-queries/


/* var svg, originalViewBox, max20em, mq, updateViewBox;

svg = document.querySelector('svg');
 Store the original value in a variable 
originalViewBox = svg.getAttribute('viewBox');

Define our media query and media query object 
mq = matchMedia("(max-width: 20em)");

 Define the handler 
updateViewBox = function(){
if (mq.matches) {
Change the viewBox dimensions to show the hexagon 
svg.setAttribute('viewBox', "0 0 200 174");
} else {
svg.setAttribute('viewBox', originalViewBox);
}
}

 Fire on document load 
 WebKit/Blink browsers
svg.onload = updateViewBox;

 Firefox & IE
svg.addEventListener('SVGLoad', updateViewBox, true);

 Fire if the media condition changes 
mq.addListener(updateViewBox);

</script>  }*/