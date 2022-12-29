function reportWindowSize() {

  const shape = document.getElementById("galleryHeader");

  if (window.innerWidth <= 400) {
    shape.setAttribute("viewBox", "-65 0 550 100");
  } else if (window.innerWidth <= 600) {
    shape.setAttribute("viewBox", "-120 0 650 100");
  } else if (window.innerWidth <= 900) {
    shape.setAttribute("viewBox", "-160 0 750 100");
  } else {
    shape.setAttribute("viewBox", "-460 0 1350 100");
  }
}
window.onload = reportWindowSize();


// const shape = document.getElementById("galleryHeader");


// function createFiller() {
//   const svg = document.createElement('div');
//   svg.classList.add('headerFillerTest');
//   svg.innerHTML = ('hello');
//   header.append(svg);
//   return svg;
// }
const headerObs = document.getElementById("galleryContainer");

const loadImg = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  //  else alert("intercepting");
  else
    // window.onload = reportWindowSize();
    $("#galleryHeader").load(location.href + " #galleryHeader>*", "");
};

const headerObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-100px',
});

headerObserver.observe(headerObs);