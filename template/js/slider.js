//;(() => {
  let slides = document.querySelectorAll('.slider__img');
  let points = document.querySelectorAll('.slider__point');
  let slider = document.querySelector('#slider');

  function removeClass(elem) {
    elem.classList.remove('active');
  }

  function moveSlide() {

  }

  

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