// render shopping cart items
function renderBag() {
  let bagCards = doc.querySelector('#bag-cards');
  console.log(bag);
  console.log(bagCards);
  for (let i = 0; i < bag.length; i++) {
    let card = doc.createElement('div');
    card.classList.add('card', 'bag__card');
    let a = doc.createElement('a');
    a.classList.add('card__img', 'bag-card__img');
    a.setAttribute('href', './item.html');
    let img = doc.createElement('img');
    img.setAttribute('src', bag[i].img);
    let link = doc.createElement('div');
    link.classList.add('card__link');
    link.innerHTML = 'View item';
    a.appendChild(img);
    a.appendChild(link);
    card.appendChild(a);

    let desc = doc.createElement('div');
    desc.classList.add('bag-card__desc');
    let title = doc.createElement('div');
    title.classList.add('card__desc', 'bag-card__title');
    title.innerHTML = bag[i].title;
    let price = doc.createElement('div');
    price.classList.add('bag-card__price');
    price.innerHTML = '£' + bag[i].price;

    let params = doc.createElement('div');
    params.classList.add('bag-card__params');
    let color = doc.createElement('div');
    color.classList.add('bag-card__color');
    color.innerHTML = 'Color: <span class="item__color">' + bag[i].color + '</span>';
    let size = doc.createElement('div');
    size.classList.add('bag-card__size');
    size.innerHTML = 'Size: <span class="item__size">' + bag[i].size + '</span>';
    let quant = doc.createElement('div');
    quant.classList.add('bag-card__quantity');
    quant.innerHTML = 'Quantity: <span class="item__quantity">' + bag[i].quantity + '</span>';
    params.appendChild(color);
    params.appendChild(size);
    params.appendChild(quant);
    desc.appendChild(params);
    

    let remove = doc.createElement('a');
    remove.classList.add('bag-card__remove', 'text-red');
    remove.setAttribute('href', '#');
    remove.innerHTML = 'Remove item';
    desc.appendChild(remove);
    card.appendChild(desc);

    bagCards.appendChild(card);
  }
}

window.onload = renderBag();