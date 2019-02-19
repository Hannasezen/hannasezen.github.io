const doc = document;

// for open/close headers search form
doc.getElementsByClassName('search')[0].addEventListener('click', search);
function search(event) {
  this.style.width = "180px";
}

// header menu on mobile version open/close

doc.querySelector('#burger-btn').addEventListener('click', function () {
  this.classList.toggle('active');
  doc.querySelector('#burger-menu').classList.toggle('open');
})

