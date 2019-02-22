//;(() => {
  let slides = document.querySelectorAll('.slider__img');
  let slidesHolder = document.querySelector('#slider');
  let points = [];

  (function renderPoints() {
    let pointsHolder = doc.querySelector('#control-points');
    for(let slide of slides) {
      let point = document.createElement('li');
      point.classList.add('slider__point');
      points.push(point);
      pointsHolder.appendChild(point);
    }
  })()

  let activeSlide = slides[0];
  let activePoint = points[0];

  activeSlide.classList.add('active');
  activePoint.classList.add('active');

  function removeClass(items) {
    for (let item of items) {
      item.classList.remove('active');
    }    
  }

  function moveSlide() {
    let index = (Array.from(slides)).indexOf(activeSlide);
    removeClass(slides);
    removeClass(points); 
    index++;   
    activeSlide = slides[index];
    activeSlide.classList.add('active');
    activePoint = points[index];
    activePoint.classList.add('active');    
    if (index === slides.length - 1) {
      return activeSlide = slides[99];
    }
  }

  let interval = setInterval(moveSlide, 10000);
//})()