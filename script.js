

function reportWindowSize() {
  // heightOutput.textContent = window.innerHeight;
  // widthOutput.textContent = window.innerWidth;
  const shape = document.getElementById("galleryHeader");
  if (window.innerWidth <= 400) {
      shape.setAttribute("viewBox", "-65 0 550 100");
    } else if (window.innerWidth <= 600 ) {
      shape.setAttribute("viewBox", "-120 0 650 100");
    } else if (window.innerWidth <= 900 ) {
        shape.setAttribute("viewBox", "-160 0 750 100");
      
  } else {
    shape.setAttribute("viewBox", "-450 0 1350 100");
  }
}





window.onload = reportWindowSize;
