// open/close filters menu in catalog

doc.querySelector('#catalog-filters').addEventListener('click', function() {
  doc.querySelector('#filters').classList.toggle('open-filters');
})

// filters data
let filters = doc.querySelectorAll('.filters__item');
for (let filter of filters) {
  filter.addEventListener('click', function(event) {
    if (event.target.nodeName === 'LABEL') {
      if(event.target.classList.contains('not-selected')) {
        filter.classList.remove('selected');
      } else {
        filter.classList.add('selected');
        filter.querySelectorAll('.filter__subcategory')[0].innerHTML = event.target.innerText; 
      }           
    }
  })
}

