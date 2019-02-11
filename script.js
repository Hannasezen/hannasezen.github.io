'use strict';

//variables
const doc = document;
let listButton = doc.querySelector('#list');
let pizzaCards = doc.querySelector('#pizzaCards');
let sorts = doc.querySelector('#sorts');
let filters = doc.querySelector('#filters');
let newPizza = doc.getElementById('newpizza');
let cartQuantity = doc.querySelector('.cart__quantity');
let resultArray = []; //array for sorting
let filteredArray = []; // array for filter
let closeCartCross = doc.querySelector('#close__cross');
let cartList = doc.querySelector('#cart__list');
let pizzas = [
  {
    img: './img/mashrooms.jpg',
    name: 'Грибная пицца',
    ingredients: ['основа', 'соус', 'грибы', 'помидоры', 'сыр'],
    callory: 578,
    price: 129
  },
  {
    img: './img/margarita.jpg',
    name: 'Маргарита пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'моцарелла', 'сыр'],
    callory: 362,
    price: 119
  },
  {
    img: './img/pepperony.jpeg',
    name: 'Пепперони пицца',
    ingredients: ['основа', 'соус', 'салями', 'ветчина', 'сыр'],
    callory: 486,
    price: 149
  },
  {
    img: './img/salyami.jpg',
    name: 'Салями пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'салями', 'оливки', 'сыр'],
    callory: 379,
    price: 139
  },
  {
    img: './img/vegetarian.jpeg',
    name: 'Вегетарианская пицца',
    ingredients: ['основа', 'cоус', 'помидоры', 'кукуруза', 'сыр'],
    callory: 618,
    price: 79
  },
  {
    img: './img/firmennaya.jpg',
    name: 'Фирменная пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'салями', 'огурцы', 'грибы', 'сыр'],
    callory: 519,
    price: 118
  },
  {
    img: './img/fintess.jpg',
    name: 'Фитнесс пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'сыр'],
    callory: 295,
    price: 59
  },
  {
    img: './img/vetchina.jpg',
    name: 'Ветчина пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'ветчина', 'сыр'],
    callory: 356,
    price: 127
  },
  {
    img: './img/chiken.jpg',
    name: 'Куриная пицца',
    ingredients: ['основа', 'соус', 'курица', 'ананасы', 'сыр'],
    callory: 451,
    price: 136
  },
  {
    img: './img/family.jpg',
    name: 'Семейная пицца',
    ingredients: ['основа', 'соус', 'огурцы', 'салями', 'курица', 'сыр'],
    callory: 623,
    price: 189
  },
  {
    img: './img/bavariya.jpg',
    name: 'Баварская пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'баварские колбаски', 'сыр'],
    callory: 456,
    price: 148
  },
  {
    img: './img/sea.jpg',
    name: 'Морская пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'креветки', 'рыба', 'мидии', 'сыр'],
    callory: 519,
    price: 118
  },
  {
    img: './img/ukrainian.jpg',
    name: 'Украинская пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'сало', 'чеснок', 'грибы', 'сыр'],
    callory: 676,
    price: 99
  },
  {
    img: './img/spring.jpg',
    name: 'Весенняя пицца',
    ingredients: ['основа', 'соус', 'помидоры', 'кукуруза', 'укроп', 'сыр'],
    callory: 369,
    price: 159
  },
  {
    img: './img/sweet.jpg',
    name: 'Сладкая пицца',
    ingredients: ['основа', 'нутелла', 'бананы', 'орехи', 'зефир'],
    callory: 1019,
    price: 154
  }
];
let addings = {
  "добавка": {
    price: '',
    callory: ''
  },
  "грибы": {
    price: 20,
    callory: 45
  },
  "оливки": {
    price: 19,
    callory: 17
  },
  "помидоры": {
    price: 8,
    callory: 7
  },
  "отстрый соус": {
    price: 15,
    callory: 0
  },
  "майонез": {
    price: 12,
    callory: 27
  }
}
let cards = doc.querySelectorAll('li.pizza'); //collection of pizzas on the screen
let myCart = []; // array for pizzas in cart
if(window.localStorage.getItem('cart')) {
  myCart = JSON.parse(localStorage.getItem('cart'));
  cartQuantity.innerHTML = JSON.parse(localStorage.getItem('cart')).length;
}

// loading results on the page
window.onload = loadPizzas();

// sort buttons
let sortPrice = doc.querySelector('#byPrice');
let sortCallory = doc.querySelector('#byCallory');
let sortName = doc.querySelector('#byName');

// user events
newPizza.addEventListener('submit', createNewPizza);
// change pages view
listButton.addEventListener('click', toggleView);
// for sort results on the page
sorts.addEventListener('click', sortPizzas);
//for filter pizzas
filters.addEventListener('click', filterPizzas);
// for clear the cart
closeCartCross.addEventListener('click', emptyCart);


function loadPizzas (arr) {
  arr = arr || pizzas;
  for (let i = 0; i < arr.length; i++) {
    let li = doc.createElement('li');
    li.classList.add('pizza');

    let str = '';
    for (let j = 0; j < arr[i].ingredients.length; j++) {
      str += `<li>
                <input type="checkbox" checked="true" value="${arr[i].ingredients[j]}"
                  class="ingredient" id="${arr[i].ingredients[j]}"></input>
                  <label for="${arr[i].ingredients[j]}">${arr[i].ingredients[j]}</label>
              </li>`;
    }

    let addingsStr = '';
    for (let adding in addings) {
      addingsStr += `<option value="${adding}">${adding}, ${addings[adding].callory} кКал, ${addings[adding].price} грн</option>`;
    }

    li.innerHTML = `<div class="card__img">
                      <img src='${arr[i].img}'></img>
                    </div>
                    <div class="card__text">
                      <div class="card__description">
                        <div class="card__name">"${arr[i].name}"</div>
                        <ul class="card__ingredients"><h3>Ингредиенты: </h3>${str}</ul>
                        <div class="card__addings">
                          <select name="addings" class="addings">${addingsStr}</select>
                        </div>                          
                        <div class="card__callory"><span class="callory-number">${arr[i].callory}</span> кКал</div>
                      </div>
                      <div class="">
                        <div class="card__price"><span class="price">${arr[i].price}</span> грн</div>
                        <button class="card__btn" title="Добавить в корзину">Заказать</button>
                      </div>
                    </div>`
                    
    pizzaCards.appendChild(li);

    li.addEventListener('click', removeClassRotate);
    li.addEventListener('click', function() {
      if (event.target.nodeName === "INPUT"
          || event.target.nodeName === "LABEL"
          || event.target.nodeName === "SELECT"
          ) {
        event.stopPropagation();
      }
    }, true)
    li.addEventListener('click', changeIngredientsList, true);
    li.addEventListener('change', addAddings, true);
    li.addEventListener('click', buyPizza, true);
  }
}

let storageObj = JSON.stringify(pizzas);
localStorage.setItem('pizzas', storageObj)

function sortPizzas() {
  if (event.target.nodeName === "BUTTON") {
    resultArray = pizzas.sort((a, b) => {
      let prop = event.target.id.slice(2).toLowerCase();
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    })
    pizzaCards.innerHTML = '';
    loadPizzas(resultArray);
  }  
}

function filterPizzas() {
  if(event.target.nodeName === "INPUT") {   
    filteredArray = pizzas.filter(item => item.ingredients.some(ing => ing === event.target.value))
    pizzaCards.innerHTML = '';
    let radios = filters.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].value !== event.target.value) {
        radios[i].checked = false;
      }
    }
    loadPizzas(filteredArray);    
  }  
}

function toggleView() {    
  let listPizzas = pizzaCards.getElementsByTagName('li');
  for (let i = 0; i < listPizzas.length; i++) {
    if (listPizzas[i].classList.contains('rotate')) {
      listPizzas[i].classList.remove('rotate');
    }
  };
  doc.body.classList.toggle('list');
}

function removeClassRotate () {
  if(!(doc.body.classList.contains('list'))) {
    event.currentTarget.classList.toggle('rotate');
  }
}

function changeIngredientsList () {
  if (event.target.classList.contains('ingredient')) {
    if (event.target.checked === false) {
      this.getElementsByClassName('price')[0].innerHTML -= 10;
      this.getElementsByClassName('callory-number')[0].innerHTML -= 30;
      
    } else {
      this.getElementsByClassName('price')[0].innerHTML -= -10;
      this.getElementsByClassName('callory-number')[0].innerHTML -= -30;
    }      
  }
}

function addAddings () {
  if(event.target.classList.contains('addings')) {
    let selectQuantity = this.querySelectorAll('.addings');
    if (selectQuantity.length < 6) {
      let select = doc.createElement('select');
      select.setAttribute('name', 'addings');
      select.setAttribute('class', 'addings');
      for (let adding in addings) {
        let option = doc.createElement('option');
        option.setAttribute('value', adding);
        option.innerHTML = `${adding}, ${addings[adding].callory} кКал, ${addings[adding].price} грн`
        select.appendChild(option);
      }
      this.querySelector('.card__addings').appendChild(select);
    }
    let selectedOption = Object.keys(addings).find(adding => adding === event.target.value);
    console.log(selectedOption);
    this.querySelector('span.price').innerHTML -= -10;
    this.querySelector('span.callory-number').innerHTML -= -30;
    console.log(event.target.value);

  }  
}

function buyPizza() {
  if(event.target.classList.contains('card__btn')) {
    event.stopImmediatePropagation();
    let ingredients = [];
    let p = this.querySelectorAll('.ingredient');
    for (let i = 0; i < p.length; i++) {
      if(p[i].checked === true) {
        ingredients[i] = p[i].value;
      }      
    }
    myCart.push({
      name: this.querySelector('.card__name').innerText.replace(/\'|\"/g, ''),
      price: this.querySelector('.card__price').innerText,
      ingredients: ingredients.filter(item => item !== '')
    });    
    let cartJSON = JSON.stringify(myCart);
    localStorage.setItem('cart', cartJSON);
    cartQuantity.innerHTML = JSON.parse(localStorage.getItem('cart')).length;
  }
}

function createNewPizza() {
  event.preventDefault();
  let name = this.newtitle.value;
  let ingredients = [];
  let ingr = event.target.querySelectorAll('.newingredient');
  for (let i = 0; i < ingr.length; i++) {
    if (ingr[i].value !== '') {
      ingredients.push(ingr[i].value.toLowerCase());
    }
  }
  if (name !== '') {
    pizzas.push({
      name,
      img: "./img/sea.jpg",
      ingredients,
      price: 0,
      callory: 0
    });
    this.newtitle.value = '';
    for (let i = 0; i < ingr.length; i++) {
      ingr[i].value = '';
    }
    pizzaCards.innerHTML = '';
    loadPizzas();
  } else {
    alert('Введите название новой пиццы');
  }  
}

function emptyCart() {
  event.preventDefault();
  myCart = [];
  window.localStorage.setItem('cart', '');
  cartQuantity.innerHTML = '0';
}
 
