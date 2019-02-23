//rendering product cards
function renderItems () {
  let cards = doc.querySelector('#arrivals-cards');
  for (let i = 0; i < items.length; i++) {
    if (items[i].new === true) {
      let card = doc.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                        <a href="./item.html" class="card__img start-card__img">
                          <img src="${items[i].img}" alt="new arrivals photo">
                          <div class="card__link">View item</div>
                        </a>
                        <div class="card__text">
                          <div class="card__desc">${items[i].title}</div>
                          <div class="card__price">£${items[i].price.toFixed(2)}</div>
                        </div>
                        `;
        cards.appendChild(card);
      }
    } 
}
renderItems();