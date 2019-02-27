  let slides = document.querySelectorAll('.slider__img');
  let points = [];

  (function renderPoints() {
    let pointsHolder = doc.querySelector('#control-points');
    for(let i = 0; i < slides.length; i++) {
      let point = document.createElement('li');
      point.classList.add('slider__point');
      points.push(point);
      pointsHolder.appendChild(point);
      if (i === 0) {
        point.classList.add('active');
      }
    }
  })()

  let index = 0;
  function moveSlide() {
    slides[index].classList.remove('active');
    points[index].classList.remove('active');
    index = (index + 1) % slides.length;   
    slides[index].classList.add('active');
    points[index].classList.add('active');
    console.log(index) 
  }

  function reternInterval () {
    return interval = setInterval(moveSlide, 10000);
  }

  reternInterval();

  let rightArrow = doc.querySelector('#slider-right-arrow');
  rightArrow.addEventListener('click', function() {
    clearInterval(interval);
    let i = _.findIndex(slides, function(slide) {
      return slide.classList.contains('active');
    });
    let index = i + 1;
    moveSlide();
    reternInterval();
  });

  let leftArrow = doc.querySelector('#slider-left-arrow');
  leftArrow.addEventListener('click', function() {
    clearInterval(interval);
    let i = _.findIndex(slides, function(slide) {
      return slide.classList.contains('active');
    });
    index = i -1;
    if (index === -1) {
      index = slides.length - 1;
    }
    slides[i].classList.remove('active');
    points[i].classList.remove('active');
    slides[index].classList.add('active');
    points[index].classList.add('active');
    reternInterval();
    
  });
