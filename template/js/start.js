//rendering product cards
function renderItems () {
  let cards = doc.querySelector('#arrivals-cards');
  for (let i = 0; i < items.length; i++) {
    if (items[i].new === true) {
      renderCard(items[i], cards);
      }
    }
  let links = cards.querySelectorAll('.card__img');
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add('start-card__img');
  }
}
renderItems();
