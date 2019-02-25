;(() => {
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
  }

  let interval = setInterval(moveSlide, 10000);
})()