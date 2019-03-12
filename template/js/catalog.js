// all filters for catalog page
let filtersData = {
  'Fashion': {
    'Not selected': '',
    'Nail the 90s': 'nail the 90s',
    'Casual style': 'casual style',
    'New Look': 'new Look',
    'Sport': 'sport',
    'Vintage': 'vintage',
    'Classical style': 'Classical style'
  },
  'Product type': {
    'Not selected': '',
    'Coats & Jackets': ['coat', 'jacket'],
    'Dresses': ['dress'],
    'Jersey Tops': ['top', 'tshirt']
  },
  'Color': {
    'Not selected': '',
    'Black': 'black',
    'Blue': 'blue',
    'Red': 'red',
    'Green': 'green',
    'Golden': 'golden'
  },
  'Brand': {
    'Not selected': '',
    'Chi Chi London': 'Chi Chi London',
    'Antipodium': 'Antipodium',
    'Adidas': 'Adidas',
    'New Balance': 'New Balance',
    'River Island': 'River Island'
  },
  'Size': {
    'Not selected': '',
    'UK 2': '2',
    'UK 18': '18',
    'UK 18L': '18L',
    'UK 20': '20',
    'UK 20L': '20L',
    'UK 20S': '20S',
    'UK 22S': '22S',
    'UK 22': '22'
  },
  'Price rang': {
    'Not selected': '',
    'To £99': {min: 0, max: 99.99},
    '£100 - £299': {min: 100.00, max: 299.99},
    'From £300': {min: 300.00, max: 5999.99}
  }
};

// filtered products
let filteredItems = {};

//makes id for every filter
function makeIdFromTitle (title) {
  let res = title.toLowerCase().replace(/\W/g, '');
  return res;
}

//rendering filters to the catalog page
function renderFilters () {
  for (let key in filtersData) {
    let li = doc.createElement('li');
    li.classList.add('filters__item');

    let filterParams = doc.createElement('div');
    filterParams.classList.add('filter__params');
    let filterCategory = doc.createElement('h4');
    filterCategory.classList.add('filter__category');
    filterCategory.innerText = key;
    let filterSubcategory = doc.createElement('h4');
    filterSubcategory.classList.add('filter__subcategory');
    filterParams.appendChild(filterCategory);
    filterParams.appendChild(filterSubcategory);
    li.appendChild(filterParams);

    let span = doc.createElement('span');
    span.classList.add('filters__dropdown-arrow');
    span.classList.add('icon-arrow_drop_down');
    li.appendChild(span);

    let catalogSelect = doc.createElement('div');
    catalogSelect.classList.add('catalog__select');

    for (let i = 0; i < Object.keys(filtersData[key]).length; i++) {
      let input = doc.createElement('input');
      let label = doc.createElement('label');
      let inputId = makeIdFromTitle(key + ' ' + Object.keys(filtersData[key])[i]);

      input.type = 'radio';
      input.id = inputId;
      input.name = key;
      
      input.value = Object.keys(filtersData[key])[i];

      //input.value = Object.values(filtersData[key])[i];
      if (i === 0) {
        input.checked = true;
      }

      label.setAttribute('for', inputId);
      label.classList.add('select__item');
      if (i === 0) {
        label.classList.add('not-selected');
      };
      label.innerText = Object.keys(filtersData[key])[i];
      catalogSelect.appendChild(input);
      catalogSelect.appendChild(label);
    };
    li.appendChild(catalogSelect);
    doc.querySelector('#filters-list').appendChild(li);
  }
};
window.onload = renderFilters();

// open/close filters menu in catalog
doc.querySelector('#catalog-filters').addEventListener('click', function() {
  //doc.querySelector('#filters').classList.toggle('open-filters');
  doc.querySelector('body').classList.toggle('open-filters');
})

// event for select filters
let filters = doc.querySelectorAll('.filters__item');
for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener('click', selectFilters);
}

// changing selected filters
function selectFilters(event) {
  let param = makeIdFromTitle(this.querySelectorAll('.filter__category')[0].innerText);
  let selector = '#' + param;
  if (event.target.nodeName === 'LABEL') {
    if(event.target.classList.contains('not-selected')) {
      this.classList.remove('selected');
      doc.querySelector(selector).innerText = _.capitalize(param);
      doc.querySelector(selector).classList.remove('text-red');
      doc.querySelector('#catalog-cards').innerHTML = '';
      renderItems();
    } else {
      doc.querySelector('#catalog-cards').innerHTML = '';
      filteredItems = _.filter( items, function (item) {
        return _.includes( item[param], event.target.innerHTML.toLowerCase() )
      });
      renderItems(filteredItems);
      this.classList.add('selected');
      this.querySelectorAll('.filter__subcategory')[0].innerHTML = event.target.innerText;        
      doc.querySelector(selector).innerText = event.target.innerText;
      doc.querySelector(selector).classList.add('text-red');
    }           
  }
}

//rendering filtered products to the catalog page
function renderItems(arr) {
  arr = arr || items;
  let cards = doc.querySelector('#catalog-cards');
  _.forEach(arr, function (item) {
    renderCard(item, cards);
  } )
};

// rendering all products on the catalog page
function renderCatalogItems () {
  let cards = doc.querySelector('#catalog-cards');
  for (let i = 0; i < items.length; i++) {
    if (items[i].category === 'catalog') {
      renderCard(items[i], cards);
    }
  }
};

window.onload = renderCatalogItems();

