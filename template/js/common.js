'use strict';

const doc = document;

// product cards

let items = [
  {
    title: 'Straight Leg Jeans',
    img: './img/arrival_1.png',
    description: '',
    price: 55.00,
    size: ['uk 18', 'uk 20', 'uk 22'],
    color: ['blue', 'golden'],
    new: true,
    category: 'women',
    fashion: 'sport'
  },
  {
    title: 'Boyfriend T-Shirt with Bohemian Print',
    img: './img/arrival_2.png',
    description: '',
    price: 34.25,
    size: ['uk 50', 'uk 52'],
    color: ['black', 'red'],
    new: true,
    category: 'men'
  },
  {
    title: 'Only Busted Knee Jean',
    img: './img/arrival_3.png',
    description: '',
    price: 140.50,
    size: ['uk 20', 'uk 22l'],
    color: ['golden', 'red'],
    new: true,
    category: 'women'
  },
  {
    title: 'Only Skinny Jeans',
    img: './img/arrival_4.png',
    description: '',
    price: 12.75,
    size: ['uk 18', 'uk 22s'],
    color: ['green', 'blue'],
    new: true,
    category: 'women'
  },
  {
    title: 'Neck Knitted Jumper',
    img: './img/arrival_4.png',
    description: '',
    price: 76.25,
    size: ['uk 18', 'uk 22s'],
    color: ['green', 'blue'],
    new: false,
    category: 'women'
  }
];

// for open/close headers search form
let form = doc.getElementById('search');
let searchInput = form.querySelector('#search__input');
form.addEventListener('click', search);
function search(event) {
  event.preventDefault();
  this.classList.toggle('open-search');
  searchInput.focus();
  if ((event.target.nodeName === 'IMG' || event.target.nodeName === 'BUTTON') && searchInput.value !== '') {
    console.log('send form');
    searchInput.value = '';
  }
}

// header menu on mobile version open/close
doc.querySelector('#burger-btn').addEventListener('click', function () {
  this.classList.toggle('active');
  doc.querySelector('#burger-menu').classList.toggle('open-menu');
})



