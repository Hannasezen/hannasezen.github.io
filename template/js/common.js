'use strict';

const doc = document;

// product cards

let items = [
  {
    title: 'Straight Leg Jeans',
    img: './img/arrival_1.png',
    smallImg: './img/arrival_1_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 55.00,
    size: ['uk 18', 'uk 20', 'uk 22'],
    color: ['blue', 'golden'],
    new: true,
    category: 'women',
    fashion: 'sport',
    producttype: 'coats &amp; jackets',
    brand: 'chi chi london',
    quantity: 1
  },
  {
    title: 'Boyfriend T-Shirt with Bohemian Print',
    img: './img/arrival_2.png',
    smallImg: './img/arrival_2_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 34.25,
    size: ['uk 50', 'uk 52'],
    color: ['black', 'red'],
    new: true,
    category: 'men',
    fashion: 'nail the 90s',
    producttype: 'jersey tops',
    brand: 'antipodium',
    quantity: 1
  },
  {
    title: 'Only Busted Knee Jean',
    img: './img/arrival_3.png',
    smallImg: './img/arrival_3_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 140.50,
    size: ['uk 20', 'uk 22l'],
    color: ['golden', 'red'],
    new: true,
    category: 'women',
    fashion: ['casual style', 'vintage'],
    producttype: 'jersey tops',
    brand: 'new balance',
    quantity: 1
  },
  {	
    title: 'Only Skinny Jeans',	
    img: './img/arrival_4.png',	
    smallImg: './img/arrival_4_small.png',	
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',	
    price: 12.75,	
    size: ['uk 18', 'uk 22s'],	
    color: ['green', 'blue'],	
    new: true,	
    category: 'women',	
    fashion: ['new look', 'sport'],	
    producttype: 'jersey tops',	
    brand: 'river island',	
    quantity: 1	
  },
  {
    title: 'Neck Knitted Jumper',
    img: './img/women4.png',
    smallImg: './img/arrival_4_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 76.25,
    size: ['uk 18', 'uk 22s'],
    color: ['green', 'blue'],
    new: false,
    category: 'women',
    fashion: ['new look', 'classical style'],
    producttype: 'coats &amp; jackets',
    brand: 'adidas',
    quantity: 1
  },
  {
    title: 'Only Skinny Jeans',
    img: './img/women4.png',
    smallImg: './img/arrival_4_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 65.59,
    size: ['uk 18', 'uk 22s'],
    color: ['green', 'red', 'golden'],
    new: false,
    category: 'catalog',
    fashion: ['casual style', 'classical style'],
    producttype: 'jersey tops',
    brand: 'new balance',
    quantity: 1
  },
  {
    title: 'Neck Knitted Jumper',
    img: './img/arrival_4.png',
    smallImg: './img/arrival_4_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 76.25,
    size: ['uk 18', 'uk 22s'],
    color: ['green', 'blue', 'red'],
    new: false,
    category: 'catalog',
    fashion: ['new look', 'classical style'],
    producttype: 'coats &amp; jackets',
    brand: 'chi chi london',
    quantity: 1
  },
  {
    title: 'Turtle Neck Jumper in Rib',
    img: './img/arrival_1.png',
    smallImg: './img/arrival_4_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 130.25,
    newItem: true,
    size: ['uk 18', 'uk 20s'],
    color: ['green', 'black'],
    new: false,
    category: 'catalog',
    fashion: ['new look', 'casual style'],
    producttype: 'coats &amp; jackets',
    brand: 'new balance',
    quantity: 1
  },
  {
    title: 'With Patchwork Crochet',
    img: './img/women5.png',
    smallImg: './img/arrival_4_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 80.60,
    size: ['uk 18', 'uk 20l'],
    color: ['black', 'blue'],
    new: false,
    category: 'catalog',
    fashion: ['casual style', 'classical style'],
    producttype: 'jersey tops',
    brand: 'antipodium',
    quantity: 1
  },
  {
    title: 'Levi’s Jeans for women',
    img: './img/women7.png',
    smallImg: './img/arrival_4_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 0,
    message: 'More colours',
    size: ['uk 18', 'uk 22s'],
    color: ['blue', 'red'],
    new: false,
    category: 'catalog',
    fashion: ['new look', 'classical style'],
    producttype: 'dresses',
    brand: 'river island',
    quantity: 1
  },
  {
    title: 'Boyfriend T-Shirt with Bohemian Print',
    img: './img/women8.png',
    smallImg: './img/arrival_4_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 90.00,
    message: '',
    sale: true,
    oldPrice: 120.00,
    discount: '25%',
    size: ['uk 2', 'uk 22s'],
    color: ['red', 'blue'],
    new: false,
    category: 'catalog',
    fashion: 'sport',
    producttype: 'jersey tops',
    brand: 'antipodium',
    quantity: 1
  },
  {
    title: 'Colour Block',
    img: './img/women9.png',
    smallImg: './img/arrival_4_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 550.00,
    size: ['uk 20l', 'uk 22s'],
    color: ['green', 'golden'],
    new: false,
    category: 'catalog',
    fashion: 'nail the 90s',
    producttype: 'coats &amp; jackets',
    brand: 'chi chi london',
    quantity: 1
  },
  {
    title: 'Monki Festival Knitted',
    img: './img/women10.png',
    smallImg: './img/arrival_4_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 24.75,
    size: ['uk 18l', 'uk 22s'],
    color: ['black', 'red'],
    new: false,
    category: 'catalog',
    fashion: ['new look', 'vintage'],
    producttype: 'jersey tops',
    brand: 'river island',
    quantity: 1
  },
  {
    title: 'Oversized Cardigan',
    img: './img/arrival_3.png',
    smallImg: './img/arrival_4_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 90.00,
    size: ['uk 18l', 'uk 22s'],
    color: ['green', 'blue'],
    new: false,
    category: 'catalog',
    fashion: 'sport',
    producttype: 'dresses',
    brand: 'antipodium',
    quantity: 1
  },
  {
    title: 'Paul & Joe Sister Jumper with Neon Trims',
    img: './img/women11.png',
    smallImg: './img/arrival_4_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 19.75,
    newItem: true,
    size: ['uk 18l', 'uk 22s'],
    color: ['green', 'blue'],
    new: false,
    category: 'catalog',
    fashion: ['new look', 'nail the 90s'],
    producttype: 'jersey tops',
    brand: 'adidas',
    quantity: 1
  },
  {
    title: 'Only Busted Knee Jean',
    img: './img/women12.png',
    smallImg: './img/arrival_4_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 140.50,
    size: ['uk 18', 'uk 22s'],
    color: ['green', 'blue'],
    new: false,
    category: 'catalog',
    fashion: ['new look', 'vintage'],
    producttype: 'jersey tops',
    brand: 'chi chi london',
    quantity: 1
  },
  {
    title: 'Boyfriend T-Shirt with Bohemian Print',
    img: './img/women13.png',
    smallImg: './img/arrival_4_small.png',
    description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs and a subtle stripe pattern throughout. ',
    price: 85.75,
    size: ['uk 18', 'uk 22s'],
    color: ['green', 'blue'],
    new: false,
    category: 'catalog',
    fashion: ['nail the 90s', 'classical style'],
    producttype: 'coats &amp; jackets',
    brand: 'adidas',
    quantity: 1
  }
];

// for open/close header`s search form
let formSearch = doc.getElementById('search');
let btnSearch = formSearch.querySelectorAll('.search__btn')[0];

btnSearch.addEventListener('click', function(event) {
  let inputSearch = formSearch.querySelector('#search__input').value
  if (inputSearch !== '') {
    event.preventDefault();
    formSearch.querySelector('#search__input').value = ''
    formSearch.classList.toggle('open-search');
    console.log('form sended');
  } else if (inputSearch === '') {
    event.preventDefault();
    formSearch.classList.toggle('open-search');
  }
})

// header burger-menu on mobile version open/close
doc.querySelector('#burger-btn').addEventListener('click', function () {
  this.classList.toggle('active');
  doc.querySelector('#header-menu').classList.toggle('open-menu');
})

//shopping bag at header
let bag = [];

let bagPrice = doc.querySelector('#bag-price');
let bagQuantity = doc.querySelector('#bag-quantity');

function renderBagsPrice() {
  let price = 0;
  for (let i = 0; i < bag.length; i++) {
    price += bag[i].price;
  }
  if (bag.length > 0) {
    bagPrice.innerHTML = '£' + price.toFixed(2);
  } else {
    bagPrice.innerHTML = '';
  }  
  bagQuantity.innerHTML = bag.length;
};
window.onload = renderBagsPrice();

// saves current bag array to the local storage
function saveToLocalStorage() {
  if(!!window.sessionStorage && !!window.localStorage) {
    console.log('storage');
    window.localStorage.setItem('cart', JSON.stringify(bag));
  } else {
    console.log(window.localStorage);
  }
  
};

// takes current bag array from the local storage
function lookLocalStorage () {
  if(!!window.sessionStorage && !!window.localStorage) {
    if (window.localStorage.getItem('cart') !== null) {
      bag = JSON.parse(localStorage.getItem('cart'));
      renderBagsPrice();      
    }
  }  
}

window.onload = lookLocalStorage();

// rendering product cards
function renderCard(item, cards) {
  let card = doc.createElement('div');
  card.classList.add('card');
  let a = doc.createElement('a');
  a.classList.add('card__img');
  a.setAttribute('href', './item.html#' + item.title);
  let img = doc.createElement('img');
  img.setAttribute('src', item.img);
  img.setAttribute('alt', "new arrivals photo");
  let link = doc.createElement('div');
  link.classList.add('card__link');
  link.innerHTML = 'View item';
  a.appendChild(img);
  a.appendChild(link);
  card.appendChild(a);

  let text = doc.createElement('div');
  text.classList.add('card__text');
  let desc = doc.createElement('div');
  desc.classList.add('card__desc');
  desc.innerHTML = item.title;
  text.appendChild(desc);
  card.appendChild(text);

  let price = doc.createElement('div');
    price.classList.add('card__price');

  if (item.message) {
    let message = doc.createElement('span');
    message.innerText = item.message;
    message.classList.add('price-message');
    price.appendChild(message);    
  }

  if (item.sale) {
    let sale = doc.createElement('span');
    sale.classList.add('price-sale-message');
    let discount = doc.createElement('span');
    discount.classList.add('price-discount-message');
    discount.innerHTML = item.discount;
    let oldPrice = doc.createElement('span');
    oldPrice.classList.add('price-old-price-message');
    oldPrice.innerHTML = '£' + item.oldPrice.toFixed(2);
    sale.appendChild(oldPrice);
    sale.appendChild(discount);
    price.appendChild(sale);
  }

  if (item.price > 0) {    
    let pound = doc.createElement('span');
    pound.innerHTML = '£';
    price.appendChild(pound);
    let priceSpan = doc.createElement('span');
    priceSpan.innerText = item.price.toFixed(2);
    price.appendChild(priceSpan);    
  }

  text.appendChild(price);  

  if (item.newItem) {
    let newItem = doc.createElement('span');
    newItem.innerText = 'New';
    newItem.classList.add('price-new-item-message');
    price.appendChild(newItem);    
  }  

  cards.appendChild(card);
}

