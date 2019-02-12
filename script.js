'use strict';

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
let cartSmall = doc.querySelector('#cart');
let cartOpen = doc.querySelector('#cart-open');
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
let addings = ["грибы", "оливки", "помидоры", "отстрый соус", "майонез"];
let cards = doc.querySelectorAll('li.pizza'); //collection of pizzas on the screen
let myCart = []; // array for pizzas in cart
if(window.localStorage.getItem('cart')) {
  myCart = JSON.parse(localStorage.getItem('cart'));
  cartQuantity.innerHTML = JSON.parse(localStorage.getItem('cart')).length;
}
// generate id for pizzas
function* generator () {
  for (let i = 16; i < 1000; i++) {
    yield i;
  }
}
let gen = generator();

// loading results on the page
window.onload = loadPizzas();

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
//for open the cart
cartSmall.addEventListener('click', openCart);
//close the cart
cartOpen.addEventListener('click', openCart);

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
    for (let adding of addings) {
      addingsStr += `<option value="${adding}">${adding}</option>`;
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
    li.addEventListener('click', function(event) {
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

let storagePizzas = JSON.stringify(pizzas);
localStorage.setItem('pizzas', storagePizzas)

function sortPizzas(event) {
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

function filterPizzas(event) {
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

function toggleView(event) {    
  let listPizzas = pizzaCards.getElementsByTagName('li');
  for (let i = 0; i < listPizzas.length; i++) {
    if (listPizzas[i].classList.contains('rotate')) {
      listPizzas[i].classList.remove('rotate');
    }
  };
  doc.body.classList.toggle('list');
}

function removeClassRotate (event) {
  if(!(doc.body.classList.contains('list'))) {
    event.currentTarget.classList.toggle('rotate');
  }
}

function changeIngredientsList (event) {
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

function addAddings (event) {
  if(event.target.classList.contains('addings')) {     
    this.querySelector('span.price').innerHTML -= -10;
    this.querySelector('span.callory-number').innerHTML -= -30;
    let li = doc.createElement('li');
    li.innerHTML = `<input type="checkbox" checked="true" value="${event.target.value}"
                      class="ingredient" id="${event.target.value}"></input>
                    <label for="${event.target.value}">${event.target.value}</label>`
    this.querySelector(".card__ingredients").appendChild(li)

  }  
}

function buyPizza(event) {
  if(event.target.classList.contains('card__btn')) {
    event.stopImmediatePropagation();
    let name = this.querySelector('.card__name').innerText.replace(/\'|\"/g, '');
    let ingredients = [];
    let p = this.querySelectorAll('.ingredient');
    for (let i = 0; i < p.length; i++) {
      if(p[i].checked === true) {
        ingredients[i] = p[i].value;
      }         
    }
    if(myCart.find(item => item.name === name && item.ingredients.sort().join('') === ingredients.sort().join('')))  {
      myCart.find(item => item.name === name && item.ingredients.sort().join('') === ingredients.sort().join('')).quantity += 1;
    } else {
      if (ingredients.length > 0) {
        myCart.push({
          name: name,
          price: this.querySelector('.card__price').innerText,
          ingredients: ingredients.filter(item => item !== ''),
          quantity: 1
        });
      } else {
        alert('Выберите ингредиенты для вашей пиццы');
      }        
    };
    let cartJSON = JSON.stringify(myCart);
      localStorage.setItem('cart', cartJSON);
      cartQuantity.innerHTML = myCart.length;
    if(cartOpen.classList.contains('open')) {
      renderCart();
    }
  }   
}

function createNewPizza(event) {
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
      id: gen.next().value,
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

function openCart() {
  renderCart();
  cartOpen.classList.toggle('open');
}

function renderCart() {
  cartList.innerHTML = '';
  for (let item of myCart) {
    let li = doc.createElement('li');
    li.classList.add('cart__item');
    li.innerHTML = `<div class="item__text">
                      <div class="item__name">${item.name}</div>
                      <div class="item__igredients">(${item.ingredients.join(', ')})</div>                      
                    </div>
                    <div class="item__controls">
                      <div class="item__price">${item.price}</div>
                      <div class="item__quantity">${item.quantity}</div>
                      <div class="item__buttons">
                        <button class="inc">+</button>
                        <button class="dec">-</button>
                      </div>
                    </div>`;
    cartList.appendChild(li);
  }
  let cartItems = doc.querySelectorAll('.cart__item');
  for (let i = 0; i < cartItems.length; i++) {
    cartItems[i].addEventListener('click', changeQuantity, true);
  }
}

function emptyCart(event) {
  event.stopPropagation();
  myCart = [];
  window.localStorage.setItem('cart', '');
  cartQuantity.innerHTML = '0';
  cartOpen.classList.remove('open');
}

function changeQuantity(event) {
  event.stopPropagation();
  if (event.target.classList.contains('inc')) {
    this.querySelector('.item__quantity').innerHTML -= -1;
  } else if (event.target.classList.contains('dec')) {
    if(parseInt(this.querySelector('.item__quantity').innerHTML) > 0) {
      this.querySelector('.item__quantity').innerHTML -= 1;
    }
  }
}
 
