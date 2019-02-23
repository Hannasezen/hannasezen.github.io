//rendering product cards
function renderItems () {
  let cards = doc.querySelector('#arrivals-cards');
  for (let item of items) {
    if (item.new === true) {
      let card = doc.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                        <a href="./item.html" class="card__img start-card__img">
                          <img src="${item.img}" alt="new arrivals photo">
                          <div class="card__link">View item</div>
                        </a>
                        <div class="card__text">
                          <div class="card__desc">${item.title}</div>
                          <div class="card__price">£${item.price.toFixed(2)}</div>
                        </div>
                        `;
        cards.appendChild(card);
      }
    } 
}
renderItems();