//;(() => {
  let slides = document.querySelectorAll('.slider__img');
  let slidesHolder = document.querySelector('#slider');
  let points = [];

  function renderPoints() {
    let pointsHolder = doc.querySelector('#control-points');
    for(let i = 0; i < slides.length; i++) {
      let point = document.createElement('li');
      point.classList.add('slider__point');
      points.push(point);
      pointsHolder.appendChild(point);

      point.addEventListener('click', function(event) {
        removeClass(slides);
        removeClass(points); 
        activePoint = point;
        let i = points.indexOf(point);
        activeSlide = slides[i];
        activeSlide.classList.add('active');
        activePoint.classList.add('active');
        clearInterval(interval);
        let interval = setInterval(moveSlide, 10000);
      })
    }
  };

  window.onload = renderPoints();

  let activeSlide = slides[0];
  let activePoint = points[0];

  activeSlide.classList.add('active');
  activePoint.classList.add('active');

  function interval() {
    setInterval(moveSlide, 10000)
  }

  function removeClass(items) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
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