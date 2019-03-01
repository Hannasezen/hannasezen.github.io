// click on the banners image
let banners = doc.querySelectorAll('.promos')[0];
banners.addEventListener('click', function(event) {
  if(event.target.classList.contains('promo__title') || event.target.classList.contains('promo__category')) {
    let link = event.target.closest('div').parentNode.querySelectorAll('a')[0].href;
    document.location.href = link;
  } else if (event.target.classList.contains('promo__text') || event.target.classList.contains('promo-small__text')) {
    let link = event.target.parentNode.querySelectorAll('a')[0].href;
    document.location.href = link;
  }
}, true)