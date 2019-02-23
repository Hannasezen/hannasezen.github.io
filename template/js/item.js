//random card from data
let randomItem = items[_.random(0, items.length - 1)];

//render product card
function renderItem() {
  let item = doc.querySelector('#item');
  item.querySelectorAll('.description__title')[0].innerHTML = randomItem.title;
  item.querySelectorAll('.description__text')[0].innerHTML = randomItem.desc;
  item.querySelectorAll('.description__price')[0].innerHTML = '£' + randomItem.price.toFixed(2);

  let size = item.querySelector('#sizes');
  for (let i in randomItem.size) {
    let input = doc.createElement('input');
    let id = randomItem.size[i].replace(' ', '');
    input.id = id;
    input.type = 'radio';
    input.name = 'size';
    input.value = id;

    let label = doc.createElement('label');
    label.setAttribute('for', id);
    label.innerHTML = randomItem.size[i].toUpperCase();
    size.appendChild(input);
    size.appendChild(label);
  }
  let color = item.querySelector('#colors');
  for (let i in randomItem.color) {
    let input = doc.createElement('input');
    let id = randomItem.color[i].replace(' ', '');
    input.id = id;
    input.type = 'radio';
    input.name = 'color';
    input.value = id;

    let label = doc.createElement('label');
    label.setAttribute('for', id);
    label.innerHTML = randomItem.color[i];
    color.appendChild(input);
    color.appendChild(label);
  }
}

// select photo for make bigger
let imgBig = document.getElementById('item-big-img');
let imgsSmall = document.getElementById('item-small-images');
imgsSmall.addEventListener('click', function(event) {
  imgBig.getElementsByTagName('img')[0].src = event.target.src;
})

//add to bag
let btnBuy = doc.querySelector('#buy-btn');
btnBuy.addEventListener('click', function(event) {
  event.preventDefault();
  let color = _.find(item_details_form.querySelectorAll('input[name="color"]'), 'checked');
  let size = _.find(item_details_form.querySelectorAll('input[name="size"]'), 'checked');
  if (color === undefined || size === undefined) {
    alert('Please choose color and size');
  } else {
    randomItem.color = color.value;
    randomItem.size = size.value;
    bag.push(randomItem);
    renderBagsPrice();
    saveToLocalStorage();
  }  
})

window.onload = renderItem();