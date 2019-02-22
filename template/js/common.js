'use strict';

const doc = document;

// product cards

let items = [
  {
    title: 'Straight Leg Jeans',
    img: './img/arrival_1.png',
    description: '',
    price: 55.00,
    sizes: ['UK18', 'UK20', 'UK22'],
    colors: ['blue', 'golden'],
    new: true,
    category: 'women'
  },
  {
    title: 'Boyfriend T-Shirt with Bohemian Print',
    img: './img/arrival_2.png',
    description: '',
    price: 34.25,
    sizes: ['UK50', 'UK52'],
    colors: ['black', 'red'],
    new: true,
    category: 'men'
  },
  {
    title: 'Only Busted Knee Jean',
    img: './img/arrival_3.png',
    description: '',
    price: 140.50,
    sizes: ['UK20', 'UK22L'],
    colors: ['golden', 'red'],
    new: true,
    category: 'women'
  },
  {
    title: 'Only Skinny Jeans',
    img: './img/arrival_4.png',
    description: '',
    price: 12.75,
    sizes: ['UK18', 'UK22S'],
    colors: ['green', 'blue'],
    new: true,
    category: 'women'
  },
  {
    title: 'Neck Knitted Jumper',
    img: './img/arrival_4.png',
    description: '',
    price: 76.25,
    sizes: ['UK18', 'UK22S'],
    colors: ['green', 'blue'],
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

