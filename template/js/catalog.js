
// open/close filters in catalog

doc.querySelector('#catalog-filters').addEventListener('click', function() {
  doc.querySelector('#filters-cross').classList.toggle('open');
  doc.querySelector('#filters-list').classList.toggle('open');
  doc.querySelectorAll('.dropdown-arrow')[0].classList.toggle('close');
})