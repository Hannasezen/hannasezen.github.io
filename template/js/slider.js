// slides/points arrays
let slides = document.querySelectorAll('.slider__img');
let points = [];

for (let i = 0; i < slides.length; i++) {
  slides[i].addEventListener('swipe', function(e) {
    alert(e);
  })
}

// renders poin for every slide
(function renderPoints() {
  let pointsHolder = doc.querySelector('#control-points');
  for(let i = 0; i < slides.length; i++) {
    let point = document.createElement('li');
    point.classList.add('slider__point');
    point.setAttribute('data-index', i)
    points.push(point);
    pointsHolder.appendChild(point);
    if (i === 0) {
      point.classList.add('active');
    }
  }
})();

// points funtionality
doc.querySelector('#control-points').addEventListener('click', function(event) {
  if(event.target.nodeName === 'LI') {
    clearInterval(interval);
    for (let i = 0; i < points.length; i++) {
      points[i].classList.remove('active');
      slides[i].classList.remove('active');
    };
    index = event.target.getAttribute('data-index');
    slides[index].classList.add('active');
    points[index].classList.add('active');
    reternInterval();
  }
})

// function for move slide
let index = 0;
function moveSlide() {
  index = _.findIndex(slides, function (slide) {
    return slide.classList.contains('active');
  })
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    points[i].classList.remove('active');
  }
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
  points[index].classList.add('active');    
}

// move slide with interval
function reternInterval () {
  return interval = setInterval(moveSlide, 10000);
};

reternInterval();

// sliders arrows
let rightArrow = doc.querySelector('#slider-right-arrow');

// right arrow funtionality
rightArrow.addEventListener('click', function() {
  clearInterval(interval);
  let i = _.findIndex(slides, function(slide) {
    return slide.classList.contains('active');
  });
  let index = i + 1;
  moveSlide();
  reternInterval();
});

// left arrow funtionality
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

  

