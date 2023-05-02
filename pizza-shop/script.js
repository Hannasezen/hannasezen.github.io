"use strict";

const doc = document;
let listButton = doc.querySelector("#list");
let pizzaCards = doc.querySelector("#pizzaCards");
let sorts = doc.querySelector("#sorts");
let filters = doc.querySelector("#filters");
let newPizza = doc.getElementById("newpizza");
let cartQuantity = doc.querySelector(".cart__quantity");
let resultArray = []; //array for sorting
let filteredArray = []; // array for filter
let closeCartCross = doc.querySelector("#close__cross");
let cartSmall = doc.querySelector("#cart");
let cartOpen = doc.querySelector("#cart-open");
let cartList = doc.querySelector("#cart__list");
let pizzas = [
  {
    img: "./img/mashrooms.jpg",
    id: 1,
    name: "Pizza with mushrooms",
    ingredients: ["base", "sauce", "mushrooms", "tomatoes", "cheese"],
    callory: 578,
    price: 129,
  },
  {
    img: "./img/margarita.jpg",
    id: 2,
    name: "Pizza Margarita",
    ingredients: ["base", "sauce", "tomatoes", "mozzarella", "cheese"],
    callory: 362,
    price: 119,
  },
  {
    img: "./img/pepperony.jpeg",
    id: 3,
    name: "Pepperoni pizza",
    ingredients: ["base", "sauce", "salami", "ham", "cheese"],
    callory: 486,
    price: 149,
  },
  {
    img: "./img/salyami.jpg",
    id: 4,
    name: "Salami pizza",
    ingredients: ["base", "sauce", "tomatoes", "salami", "olives", "cheese"],
    callory: 379,
    price: 139,
  },
  {
    img: "./img/vegetarian.jpeg",
    id: 5,
    name: "Vegetarian pizza",
    ingredients: ["base", "sauce", "tomatoes", "corn", "cheese"],
    callory: 618,
    price: 79,
  },
  {
    img: "./img/firmennaya.jpg",
    id: 6,
    name: "Chief`s pizza",
    ingredients: [
      "base",
      "sauce",
      "tomatoes",
      "salami",
      "cucumbers",
      "mushrooms",
      "cheese",
    ],
    callory: 519,
    price: 118,
  },
  {
    img: "./img/fintess.jpg",
    id: 7,
    name: "Fitness pizza",
    ingredients: ["base", "sauce", "tomatoes", "cheese"],
    callory: 295,
    price: 59,
  },
  {
    img: "./img/vetchina.jpg",
    id: 8,
    name: "Pizza with ham",
    ingredients: ["base", "sauce", "tomatoes", "ham", "cheese"],
    callory: 356,
    price: 127,
  },
  {
    img: "./img/chiken.jpg",
    id: 9,
    name: "Pizza with chicken",
    ingredients: ["base", "sauce", "chicken", "pineapples", "cheese"],
    callory: 451,
    price: 136,
  },
  {
    img: "./img/family.jpg",
    id: 10,
    name: "Family pizza",
    ingredients: ["base", "sauce", "cucumbers", "salami", "chicken", "cheese"],
    callory: 623,
    price: 189,
  },
  {
    img: "./img/bavariya.jpg",
    id: 11,
    name: "Bavarian pizza",
    ingredients: ["base", "sauce", "tomatoes", "Bavarian sausages", "cheese"],
    callory: 456,
    price: 148,
  },
  {
    img: "./img/sea.jpg",
    id: 12,
    name: "Sea life",
    ingredients: [
      "base",
      "sauce",
      "tomatoes",
      "shrimps",
      "fish",
      "mussels",
      "cheese",
    ],
    callory: 519,
    price: 118,
  },
  {
    img: "./img/ukrainian.jpg",
    id: 13,
    name: "Ukrainian pizza",
    ingredients: [
      "base",
      "sauce",
      "tomatoes",
      "Salo",
      "garlic",
      "mushrooms",
      "cheese",
    ],
    callory: 676,
    price: 99,
  },
  {
    img: "./img/spring.jpg",
    id: 14,
    name: "Spring pizza",
    ingredients: ["base", "sauce", "tomatoes", "corn", "dill", "cheese"],
    callory: 369,
    price: 159,
  },
  {
    img: "./img/sweet.jpg",
    id: 15,
    name: "Sweet pizza",
    ingredients: ["base", "chocolate", "bananas", "nuts", "marshmallow"],
    callory: 1019,
    price: 154,
  },
];
let addings = ["mushrooms", "olives", "tomatoes", "hot sauce", "mayonnaise"];
let cards = doc.querySelectorAll("li.pizza"); //collection of pizzas on the screen
let myCart = []; // array for pizzas in cart
if (window.localStorage.getItem("pizzasCart")) {
  myCart = JSON.parse(localStorage.getItem("pizzasCart"));
  cartQuantity.innerHTML = JSON.parse(
    localStorage.getItem("pizzasCart")
  ).length;
}
// generate id for pizzas
function* generator() {
  for (let i = 16; i < 1000; i++) {
    yield i;
  }
}
let gen = generator();

// loading results on the page
window.onload = loadPizzas();

// user events
newPizza.addEventListener("submit", createNewPizza);
// change pages view
listButton.addEventListener("click", toggleView);
// for sort results on the page
sorts.addEventListener("click", sortPizzas);
//for filter pizzas
filters.addEventListener("click", filterPizzas);
// for clear the cart
closeCartCross.addEventListener("click", emptyCart);
//for open the cart
cartSmall.addEventListener("click", openCart);
//close the cart
cartOpen.addEventListener("click", openCart);

function loadPizzas(arr) {
  arr = arr || pizzas;
  for (let i = 0; i < arr.length; i++) {
    let li = doc.createElement("li");
    li.classList.add("pizza");

    let str = "";
    for (let j = 0; j < arr[i].ingredients.length; j++) {
      str += `<li>
                <input type="checkbox" checked="true" value="${arr[i].ingredients[j]}"
                  class="ingredient" id="${arr[i].ingredients[j]}"></input>
                  <label for="${arr[i].ingredients[j]}">${arr[i].ingredients[j]}</label>
              </li>`;
    }

    let addingsStr = "";
    for (let adding of addings) {
      addingsStr += `<option value="${adding}">${adding}</option>`;
    }

    li.innerHTML = `<div class="card__img">
                      <img src='${arr[i].img}'></img>
                    </div>
                    <div class="card__text">
                      <div class="card__description">
                        <div class="card__name">"${arr[i].name}"</div>
                        <ul class="card__ingredients"><h3>Ingredients: </h3>${str}</ul>
                        <div class="card__addings">
                          <select name="addings" class="addings">${addingsStr}</select>
                        </div>                          
                        <div class="card__callory"><span class="callory-number">${arr[i].callory}</span> kcal</div>
                      </div>
                      <div class="">
                        <div class="card__price"><span class="price">${arr[i].price}</span> UAH</div>
                        <button class="card__btn" title="Add to the cart">Order</button>
                      </div>
                    </div>`;

    pizzaCards.appendChild(li);

    li.addEventListener("click", removeClassRotate);
    li.addEventListener(
      "click",
      function (event) {
        if (
          event.target.nodeName === "INPUT" ||
          event.target.nodeName === "LABEL" ||
          event.target.nodeName === "SELECT"
        ) {
          event.stopPropagation();
        }
      },
      true
    );
    li.addEventListener("click", changeIngredientsList, true);
    li.addEventListener("change", addAddings, true);
    li.addEventListener("click", buyPizza, true);
  }
}

let storagePizzas = JSON.stringify(pizzas);
localStorage.setItem("pizzas", storagePizzas);

function sortPizzas(event) {
  if (event.target.nodeName === "BUTTON") {
    console.log("sortPizzas");
    event.stopImmediatePropagation();
    resultArray = pizzas.sort((a, b) => {
      let prop = event.target.id.slice(2).toLowerCase();
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    });
    pizzaCards.innerHTML = "";
    loadPizzas(resultArray);
  }
}

function filterPizzas(event) {
  if (event.target.nodeName === "INPUT") {
    console.log("filterPizzas");
    event.stopImmediatePropagation();
    filteredArray = pizzas.filter((item) =>
      item.ingredients.some((ing) => ing === event.target.value)
    );
    pizzaCards.innerHTML = "";
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
  let listPizzas = pizzaCards.getElementsByTagName("li");
  for (let i = 0; i < listPizzas.length; i++) {
    if (listPizzas[i].classList.contains("rotate")) {
      listPizzas[i].classList.remove("rotate");
    }
  }
  doc.body.classList.toggle("list");
}

function removeClassRotate(event) {
  if (!doc.body.classList.contains("list")) {
    event.stopPropagation();
    event.currentTarget.classList.toggle("rotate");
  }
}

function changeIngredientsList(event) {
  if (event.target.classList.contains("ingredient")) {
    console.log("changeIngredients");
    event.stopPropagation();
    if (event.target.checked === false) {
      this.getElementsByClassName("price")[0].innerHTML -= 10;
      this.getElementsByClassName("callory-number")[0].innerHTML -= 30;
    } else {
      this.getElementsByClassName("price")[0].innerHTML -= -10;
      this.getElementsByClassName("callory-number")[0].innerHTML -= -30;
    }
  }
}

function addAddings(event) {
  if (event.target.classList.contains("addings")) {
    console.log("addAddings");
    event.stopPropagation();
    this.querySelector("span.price").innerHTML -= -10;
    this.querySelector("span.callory-number").innerHTML -= -30;
    let li = doc.createElement("li");
    li.innerHTML = `<input type="checkbox" checked="true" value="${event.target.value}"
                      class="ingredient" id="${event.target.value}"></input>
                    <label for="${event.target.value}">${event.target.value}</label>`;
    this.querySelector(".card__ingredients").appendChild(li);
  }
}

function saveCartToStorage() {
  console.log("saveCartToStorage");
  let cartJSON = JSON.stringify(myCart);
  localStorage.setItem("pizzasCart", cartJSON);
}

function buyPizza(event) {
  if (event.target.classList.contains("card__btn")) {
    console.log("buyPizza");
    event.stopImmediatePropagation();
    let name = this.querySelector(".card__name").innerText.replace(
      /\'|\"/g,
      ""
    );
    let ingredients = [];
    let p = this.querySelectorAll(".ingredient");
    for (let i = 0; i < p.length; i++) {
      if (p[i].checked === true) {
        ingredients[i] = p[i].value;
      }
    }
    if (
      myCart.find(
        (item) =>
          item.name === name &&
          item.ingredients.sort().join("") === ingredients.sort().join("")
      )
    ) {
      myCart.find(
        (item) =>
          item.name === name &&
          item.ingredients.sort().join("") === ingredients.sort().join("")
      ).quantity += 1;
    } else {
      if (ingredients.length > 0) {
        myCart.push({
          name: name,
          price: this.querySelector(".card__price").innerText,
          ingredients: ingredients.filter((item) => item !== ""),
          quantity: 1,
        });
      } else {
        alert("Choose the ingredients for your pizza");
      }
    }
    saveCartToStorage();
    cartQuantity.innerHTML = myCart.length;
    if (cartOpen.classList.contains("open")) {
      renderCart();
    }
  }
}

function createNewPizza(event) {
  console.log("createNewPizza");
  event.preventDefault();
  let name = this.newtitle.value;
  let ingredients = [];
  let ingr = event.target.querySelectorAll(".newingredient");
  for (let i = 0; i < ingr.length; i++) {
    if (ingr[i].value !== "") {
      ingredients.push(ingr[i].value.toLowerCase());
    }
  }
  if (name !== "") {
    pizzas.push({
      name,
      id: gen.next().value,
      img: "./img/sea.jpg",
      ingredients,
      price: ingredients.length * 10,
      callory: ingredients.length * 30,
    });
    this.newtitle.value = "";
    for (let i = 0; i < ingr.length; i++) {
      ingr[i].value = "";
    }
    pizzaCards.innerHTML = "";
    loadPizzas();
  } else {
    alert("Enter the name of the new pizza");
  }
}

function openCart() {
  renderCart();
  cartOpen.classList.toggle("open");
}

function renderCart() {
  cartList.innerHTML = "";
  for (let item of myCart) {
    let li = doc.createElement("li");
    li.classList.add("cart__item");
    li.innerHTML = `<div class="item__text">
                      <div class="item__name">${item.name}</div>
                      <div class="item__igredients">(<span class="ingr-inner">${item.ingredients
                        .sort()
                        .join(", ")}</span>)</div>                      
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
  let cartItems = doc.querySelectorAll(".cart__item");
  for (let i = 0; i < cartItems.length; i++) {
    cartItems[i].addEventListener("click", changeQuantity, true);
  }
}

function emptyCart(event) {
  event.stopPropagation();
  myCart = [];
  window.localStorage.setItem("pizzasCart", "");
  cartQuantity.innerHTML = "0";
  cartOpen.classList.remove("open");
}

function changeQuantity(event) {
  event.stopPropagation();
  if (event.target.classList.contains("inc")) {
    myCart.find(
      (item) =>
        item.name === this.querySelector(".item__name").innerHTML &&
        item.ingredients.sort().join("") ===
          this.getElementsByClassName("ingr-inner")[0]
            .innerText.split(", ")
            .sort()
            .join("")
    ).quantity -= -1;
  } else if (event.target.classList.contains("dec")) {
    if (parseInt(this.querySelector(".item__quantity").innerHTML) > 1) {
      myCart.find(
        (item) =>
          item.name === this.querySelector(".item__name").innerHTML &&
          item.ingredients.sort().join("") ===
            this.getElementsByClassName("ingr-inner")[0]
              .innerText.split(", ")
              .sort()
              .join("")
      ).quantity -= 1;
    } else {
      myCart = myCart.filter((item) => {
        return (
          item.name !== this.querySelector(".item__name").innerHTML ||
          item.ingredients.sort().join("") !==
            this.getElementsByClassName("ingr-inner")[0]
              .innerText.split(", ")
              .sort()
              .join("")
        );
      });
      if (myCart.length === 0) {
        cartOpen.classList.toggle("open");
      }
    }
  }
  renderCart();
  cartQuantity.innerHTML = myCart.length;
  saveCartToStorage();
}

//open/close menus on mobiles
doc.querySelector("#filters-wrap").addEventListener("click", addHideClass);
doc.querySelector("#sorts").addEventListener("click", addHideClass);
doc.querySelector("#create").addEventListener("click", addHideClass);
doc.querySelector("#newpizza").addEventListener("click", function (event) {
  event.stopImmediatePropagation();
});

function addHideClass(event) {
  console.log("hide");
  this.querySelector(".mobile-hide").classList.toggle("hide");
}
