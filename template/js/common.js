const doc = document;

// for open/close headers search form
doc.getElementById('search').addEventListener('click', search);
function search(event) {
  event.preventDefault();
  this.classList.toggle('open-search');
  this.querySelector('#search__input').focus();
}

// header menu on mobile version open/close

doc.querySelector('#burger-btn').addEventListener('click', function () {
  this.classList.toggle('active');
  doc.querySelector('#burger-menu').classList.toggle('open-menu');
})

