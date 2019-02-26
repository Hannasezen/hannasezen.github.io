//rendering product cards
function renderItems () {
  let cards = doc.querySelector('#arrivals-cards');
  for (let i = 0; i < items.length; i++) {
    if (items[i].new === true) {

        let card = doc.createElement('div');
        card.classList.add('card');
        let a = doc.createElement('a');
        a.classList.add('card__img', 'start-card__img');
        a.setAttribute('href', './item.html#' + items[i].title);
        let img = doc.createElement('img');
        img.setAttribute('src', items[i].img);
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
        desc.innerHTML = items[i].title;
        let price = doc.createElement('div');
        price.classList.add('card__price');
        price.innerHTML = items[i].price.toFixed(2);
        text.appendChild(desc);
        text.appendChild(price);
        card.appendChild(text);

        cards.appendChild(card);
      }
    } 
}
renderItems();
