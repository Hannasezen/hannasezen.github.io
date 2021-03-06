// renders shopping cart items
function renderBag() {
  //taking elements from HTML
  let bagCards = doc.querySelector('#bag-cards');
  let totalPrice = doc.querySelector('#total-price');
  //counting total price of the cart
  let sum = 0;
  // 
  let uniqCards = _.uniqWith(bag, _.isEqual);
  let filteredProducts = [];
  for (let i = 0; i < uniqCards.length; i++) {
    let uniqArr =  _.filter(bag, function (item) {
      return item.color === uniqCards[i].color &&  item.size === uniqCards[i].size && item.title === uniqCards[i].title;
    });
    let totalCoast = 0;
    let totalQuantity = uniqArr.length;
    for (let i = 0; i < uniqArr.length; i++) {
      totalCoast += uniqArr[i].price;
    }
    uniqArr.price = totalCoast;
    uniqArr.quantity = totalQuantity;
    filteredProducts.push(uniqArr);
  }

  for (let i = 0; i < filteredProducts.length; i++) {
    sum += filteredProducts[i].price;
    let card = doc.createElement('div');
    //card.classList.add('card');
    card.classList.add('bag__card');
    let a = doc.createElement('a');
    a.classList.add('card__img');
    a.classList.add('bag-card__img');
    a.setAttribute('href', './item.html#' + filteredProducts[i][0].title);
    let img = doc.createElement('img');
    img.setAttribute('src', filteredProducts[i][0].img);
    let link = doc.createElement('div');
    link.classList.add('card__link');
    link.innerHTML = 'View item';
    a.appendChild(img);
    a.appendChild(link);
    card.appendChild(a);

    let desc = doc.createElement('div');
    desc.classList.add('bag-card__desc');
    let title = doc.createElement('div');
    title.classList.add('card__desc');
    title.classList.add('bag-card__title');
    title.innerHTML = filteredProducts[i][0].title;
    let price = doc.createElement('div');
    price.classList.add('bag-card__price');
    price.innerHTML = '£' + filteredProducts[i].price.toFixed(2);
    desc.appendChild(title);
    desc.appendChild(price);

    let params = doc.createElement('div');
    params.classList.add('bag-card__params');
    let color = doc.createElement('div');
    color.classList.add('bag-card__color');
    color.innerHTML = 'Color: <span class="item__color">' + filteredProducts[i][0].color + '</span>';
    let size = doc.createElement('div');
    size.classList.add('bag-card__size');
    size.innerHTML = 'Size: <span class="item__size">' + filteredProducts[i][0].size + '</span>';

    let quant = doc.createElement('div');
    let inc = doc.createElement('button');
    let dec = doc.createElement('button');
    let span = doc.createElement('span');
    inc.classList.add('item__inc');
    dec.classList.add('item__dec');
    quant.classList.add('bag-card__quantity');
    span.classList.add('item__quantity');
    span.innerHTML = filteredProducts[i].quantity;
    inc.innerHTML = "+";
    dec.innerHTML = "-";
    quant.innerHTML = 'Quantity:'
    quant.appendChild(dec);
    quant.appendChild(span);
    quant.appendChild(inc);

    params.appendChild(color);
    params.appendChild(size);
    params.appendChild(quant);
    desc.appendChild(params);
    

    let remove = doc.createElement('a');
    remove.classList.add('bag-card__remove');
    remove.classList.add('text-red');
    remove.setAttribute('href', '#');
    remove.innerHTML = 'Remove item';
    desc.appendChild(remove);
    card.appendChild(desc);

    bagCards.appendChild(card);
  }
  totalPrice.innerHTML = sum.toFixed(2);

  let cards = doc.querySelectorAll('.bag__card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(event) {
      if (event.target.classList.contains('bag-card__remove') || event.target.classList.contains('item__dec')) {
        event.preventDefault();
        let removeItem = _.find(bag, function (item) {
          return ((item.size === event.currentTarget.querySelectorAll('.item__size')[0].innerHTML.toLowerCase()) && (item.color === event.currentTarget.querySelectorAll('.item__color')[0].innerHTML.toLowerCase()) && (item.title === event.currentTarget.querySelectorAll('.bag-card__title')[0].innerHTML));
        });
        bag.splice(bag.indexOf(removeItem), 1);
        bagCards.innerHTML = '';
        if (bag.length === 0) {
          btnEmptyBag.setAttribute("disabled", "true");
          btnBuyNow.setAttribute("disabled", "true");
          showMessage('Your shopping bag is empty. Use <a href="./catalog.html"><strong>Catalog</strong></a> to add new items');
        } else {
          renderBag();
          renderBagsPrice();
          saveToLocalStorage();
        }        
      } else if (event.target.classList.contains('item__inc')) {
        event.preventDefault();
        let addItem = _.find(bag, function (item) {
          return ((item.size === event.currentTarget.querySelectorAll('.item__size')[0].innerHTML.toLowerCase()) && (item.color === event.currentTarget.querySelectorAll('.item__color')[0].innerHTML.toLowerCase()) && (item.title === event.currentTarget.querySelectorAll('.bag-card__title')[0].innerHTML));
        });
        bag.push(addItem);
        bagCards.innerHTML = '';
        renderBag();
        renderBagsPrice();
        saveToLocalStorage();
      }
    })
  }
}

window.onload = function() {
  if (bag.length > 0) {
    renderBag();
  } else {
    showMessage('Your shopping bag is empty. Use <a href="./catalog.html"><strong>Catalog</strong></a> to add new items');
    btnEmptyBag.setAttribute("disabled", "true");
    btnBuyNow.setAttribute("disabled", "true");
  }
};

// buy now button
let btnBuyNow = doc.querySelector('#buy-now-btn');
btnBuyNow.addEventListener('click', buyNow);

//empty bag button
let btnEmptyBag = doc.querySelector('#empty-bag');
btnEmptyBag.addEventListener('click', emptyBag);

// function buy products
function buyNow() {
  if (bag.length > 0) {
    bag.length = 0;
    
    showMessage('Thank you for your purchase');
  } else {
    showMessage('Your shopping bag is empty. Use <a href="./catalog.html"><strong>Catalog</strong></a> to add new items');
  }  
  btnBuyNow.setAttribute("disabled", "true");
  btnEmptyBag.setAttribute("disabled", "true");
}

// function delete all products from the cart
function emptyBag() {
  bag.length = 0;
  btnEmptyBag.setAttribute("disabled", "true");
  btnBuyNow.setAttribute("disabled", "true");
  showMessage('Your shopping bag is empty. Use <a href="./catalog.html"><strong>Catalog</strong></a> to add new items');
}

// shows the message after clearing the cart
function showMessage(text) {
  let message = doc.querySelector('#bag-message');
  message.innerHTML = text;
  message.classList.add('show-message');
  doc.querySelector('#bag-cards').innerHTML = '';
  doc.querySelector('#total-price').innerHTML = '0.00';
  renderBagsPrice();
  saveToLocalStorage();
}