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
  // 0 i++ 1 i++ 2 

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

  let interval = setInterval(moveSlide, 3000);

  

  /*function move (i) {
    removeClass(activeSlide);
    removeClass(activePoint);
    slides[i].classList.add('active');
    points[i].classList.add('active');
    ++i;
    if (i === 3) {
      i = 0;
    }*/

  /*slider.addEventListener('click', function() {
    if (event.target.classList.contains('slider__point')) {
      clearInterval(interval);
      i = (Array.from(points)).indexOf(event.target);
      setInterval(move, 3000);
    }
  })*/
  
//})()