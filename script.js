'use strict';

//variables
let listButton = document.querySelector('#list');
let pizzaCards = document.querySelector('#pizzaCards');
let sorts = document.querySelector('#sorts');
let newPizza = document.getElementById('newpizza');
let cartQuantity = document.querySelector('.cart__quantity');
let resultArray = []; //array for sorting
let closeCartCross = document.querySelector('#close__cross');
let cartList = document.querySelector('#cart__list');
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
    ingredients: ['основа', 'соус', 'куриное филе', 'ананасы', 'сыр'],
    callory: 451,
    price: 136
  },
  {
    img: './img/family.jpg',
    name: 'Семейная пицца',
    ingredients: ['основа', 'соус', 'огурцы', 'салями', 'куриное филе', 'сыр'],
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
let cards = pizzaCards.querySelectorAll('li.pizza');
let myCart = [];
if(window.localStorage.getItem('cart')) {
  myCart = JSON.parse(localStorage.getItem('cart'));
  cartQuantity.innerHTML = JSON.parse(localStorage.getItem('cart')).length;
}

// loading results on the page
window.onload = loadPizzas();

// sort buttons
let sortPrice = document.querySelector('#byPrice');
let sortCallory = document.querySelector('#byCallory');
let sortName = document.querySelector('#byName');

// user events
newPizza.addEventListener('submit', createNewPizza);
// change pages view
listButton.addEventListener('click', toggleView);
// for sort results on the page
sorts.addEventListener('click', sortPizzas);
// for clear the cart
closeCartCross.addEventListener('click', emptyCart);


function loadPizzas (arr) {
  arr = arr || pizzas;
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.classList.add('pizza');
/*
    let cardImg = document.createElement('div');
    cardImg.classList.add('card__img');

    let img = document.createElement('img');
    img.src = arr[i].img;

    cardImg.appendChild(img);

    let cardText = document.createElement('div');
    cardText.classList.add('card__text');

    let cardDescription = document.createElement('div');
    cardDescription.classList.add('card__description');

    let cardName = document.createElement('div');
    cardName.classList.add('card__name');
    cardName.innerHTML = arr[i].name;
    cardDescription.appendChild(cardName);

    let cardIngredients = document.createElement('ul');
    cardIngredients.classList.add('card__ingredients');
    cardIngredients.innerHTML = "Состав пиццы:";
    
    for (let j = 0; j < arr[i].ingredients.length; j++) {
      let cardIngredient = document.createElement('li');
      cardIngredient.innerHTML = arr[i].ingredients[j];
      let ingredient = document.createElement('input');
      ingredient.setAttribute("type", "checkbox");
      ingredient.setAttribute("checked", "true");
      ingredient.classList.add('ingredient');
      cardIngredient.appendChild(ingredient);      
      cardIngredients.appendChild(cardIngredient);
    }
    cardDescription.appendChild(cardIngredients);

    let cardCallory = document.createElement('div');
    cardCallory.classList.add('card__callory');
    cardCallory.innerHTML = `${arr[i].callory} кКал`;
    cardDescription.appendChild(cardCallory);

    cardText.appendChild(cardDescription);

    let cardPrice = document.createElement('div');
    cardPrice.classList.add('card__price');
    let price = document.createElement('span');
    price.classList.add('price');
    price.innerHTML = arr[i].price;
    cardPrice.innerHTML = 'цена ';
    cardPrice.appendChild(price);
    cardText.appendChild(cardPrice);

    li.appendChild(cardImg);
    li.appendChild(cardText);
*/
    var str = '';
    for (let j = 0; j < arr[i].ingredients.length; j++) {
      str += `<li><input type="checkbox" checked="true" value="${arr[i].ingredients[j]}" class="ingredient">${arr[i].ingredients[j]}</input></li>`
    }

    li.innerHTML = `<div class="card__img">
                      <img src='${arr[i].img}'></img>
                    </div>
                    <div class="card__text">
                      <div class="card__description">
                        <div class="card__name">"${arr[i].name}"</div>
                        <ul class="card__ingredients"><h3>Ингредиенты: </h3>${str}</ul>
                        <div class="card__callory"><span class="callory-number">${arr[i].callory}</span> кКал</div>
                      </div>
                      <div class="card__price"><span class="price">${arr[i].price}</span> грн</div>
                      <button class="card__btn" title="Добавить в корзину">Заказать</button>
                    </div>`
                    
    pizzaCards.appendChild(li);

    li.addEventListener('click', removeClassRotate);
    li.addEventListener('click', changeIngredientsList, true);
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

function toggleView() {    
  let listPizzas = pizzaCards.getElementsByTagName('li');
  for (let i = 0; i < listPizzas.length; i++) {
    if (listPizzas[i].classList.contains('rotate')) {
      listPizzas[i].classList.remove('rotate');
    }
  };
  document.body.classList.toggle('list');
}

function removeClassRotate () {
  if(!(document.body.classList.contains('list'))) {
    event.currentTarget.classList.toggle('rotate');
  }
}

function changeIngredientsList () {
  if (event.target.classList.contains('ingredient')) {
    event.stopImmediatePropagation();
    if (event.target.checked === false) {
      this.getElementsByClassName('price')[0].innerHTML -= 10;
      this.getElementsByClassName('callory-number')[0].innerHTML -= 30;
      
    } else {
      this.getElementsByClassName('price')[0].innerHTML -= -10;
      this.getElementsByClassName('callory-number')[0].innerHTML -= -30;
    }    
    
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
      ingredients.push(ingr[i].value);
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
  localStorage.removeItem('cart');
  cartQuantity.innerHTML = '0';
}