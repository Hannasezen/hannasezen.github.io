'use strict';

const doc = document;

// product cards

let items = [
  {
    title: 'Straight Leg Jeans',
    img: './img/arrival_1.png',
    smallImg: './img/arrival_1_small.png',
    description: '',
    price: 55.00,
    size: ['uk 18', 'uk 20', 'uk 22'],
    color: ['blue', 'golden'],
    new: true,
    category: 'women',
    fashion: 'sport',
    producttype: 'coats &amp; jackets',
    brand: 'chi chi london'
  },
  {
    title: 'Boyfriend T-Shirt with Bohemian Print',
    img: './img/arrival_2.png',
    smallImg: './img/arrival_2_small.png',
    description: '',
    price: 34.25,
    size: ['uk 50', 'uk 52'],
    color: ['black', 'red'],
    new: true,
    category: 'men',
    fashion: 'nail the 90s',
    producttype: 'jersey tops',
    brand: 'antipodium'
  },
  {
    title: 'Only Busted Knee Jean',
    img: './img/arrival_3.png',
    smallImg: './img/arrival_3_small.png',
    description: '',
    price: 140.50,
    size: ['uk 20', 'uk 22l'],
    color: ['golden', 'red'],
    new: true,
    category: 'women',
    fashion: ['casual style', 'vintage'],
    producttype: 'jersey tops',
    brand: 'new balance'
  },
  {
    title: 'Only Skinny Jeans',
    img: './img/arrival_4.png',
    smallImg: './img/arrival_4_small.png',
    description: '',
    price: 12.75,
    size: ['uk 18', 'uk 22s'],
    color: ['green', 'blue'],
    new: true,
    category: 'women',
    fashion: ['new look', 'sport'],
    producttype: 'dresses',
    brand: 'river island'
  },
  {
    title: 'Neck Knitted Jumper',
    img: './img/arrival_4.png',
    smallImg: './img/arrival_4_small.png',
    description: '',
    price: 76.25,
    size: ['uk 18', 'uk 22s'],
    color: ['green', 'blue'],
    new: false,
    category: 'women',
    fashion: ['new look', 'classical style'],
    producttype: 'jersey tops',
    brand: 'adidas'
  }
];

// for open/close header`s search form
let form = doc.getElementById('search');
form.addEventListener('click', search);
function search(event) {
  event.preventDefault();
  let searchInput = form.querySelector('#search__input');
  this.classList.toggle('open-search');
  form.querySelector('#search__input').focus();
  if ((event.target.nodeName === 'IMG' || event.target.nodeName === 'BUTTON') && searchInput.value !== '') {
    console.log('send form');
    form.querySelector('#search__input').value = '';
  }
}

// header burger-menu on mobile version open/close
doc.querySelector('#burger-btn').addEventListener('click', function () {
  this.classList.toggle('active');
  doc.querySelector('#burger-menu').classList.toggle('open-menu');
})

//shopping bag
let bag = [];

let bagPrice = doc.querySelector('#bag-price');
let bagQuantity = doc.querySelector('#bag-quantity');

function renderBagsPrice() {
  let price = 0;
  for (let i = 0; i < bag.length; i++) {
    price += bag[i].price;
  }
  bagPrice.innerHTML = price.toFixed(2);
  bagQuantity.innerHTML = bag.length;
}

function saveToLocalStorage() {
  if(window.sessionStorage && window.localStorage) {
    localStorage.setItem('cart', JSON.stringify(bag));
  }
}

function lookLocalStorage () {
  if(window.sessionStorage && window.localStorage) {
    if (localStorage.getItem('cart') !== null) {
      bag = JSON.parse(localStorage.getItem('cart'));
      let sum = 0;
      for (let i = 0; i < bag.length; i++) {
        sum += bag[i].price;
      };
      bagPrice.innerHTML = sum.toFixed(2);
      bagQuantity.innerHTML = bag.length;
    }
  }  
}

window.onload = lookLocalStorage();




