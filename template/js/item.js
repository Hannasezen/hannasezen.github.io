//random card from data
let hash = decodeURI(window.location.hash.substring(1));
let productItem = _.find(items, function (item) {
  return item.title === hash;
});
console.log(bag);

//render product card
function renderItem() {
  productItem = productItem || items[0];
  let item = doc.querySelector('#item');
  item.querySelectorAll('.description__title')[0].innerHTML = productItem.title;
  item.querySelectorAll('.description__text')[0].innerHTML = productItem.description;
  item.querySelectorAll('.description__price')[0].innerHTML = '£' + productItem.price.toFixed(2);

  /*let size = item.querySelector('#sizes');
  for (let i in productItem.size) {
    let input = doc.createElement('input');
    let id = productItem.size[i].replace(' ', '');
    input.id = id;
    input.type = 'radio';
    input.name = 'size';
    input.value = id;

    let label = doc.createElement('label');
    label.setAttribute('for', id);
    label.innerHTML = productItem.size[i].toUpperCase();
    size.appendChild(input);
    size.appendChild(label);
  }
  let color = item.querySelector('#colors');
  for (let i in productItem.color) {
    let input = doc.createElement('input');
    let id = productItem.color[i].replace(' ', '');
    input.id = id;
    input.type = 'radio';
    input.name = 'color';
    input.value = id;

    let label = doc.createElement('label');
    label.setAttribute('for', id);
    label.innerHTML = productItem.color[i].toUpperCase();
    color.appendChild(input);
    color.appendChild(label);
  }*/
  renderInput('color', productItem.color);
  renderInput('size', productItem.size);
}

window.onload = renderItem();

//render input in color/size menu function
function renderInput(param, arr) {
  let selector = '#' + param + 's';
  let menu = doc.querySelector('#item').querySelector(selector);
  for (let i = 0; i < arr.length; i++) {
    let input = doc.createElement('input');
    let id = arr[i].replace(' ', '');
    input.id = id;
    input.type = 'radio';
    input.name = param;
    input.value = id;
    if (i === 0) {
      input.setAttribute('checked', true);
    }

    let label = doc.createElement('label');
    label.setAttribute('for', id);
    label.innerHTML = arr[i].toUpperCase();
    menu.appendChild(input);
    menu.appendChild(label);
  }
}

// select photo for make bigger
let imgBig = document.getElementById('item-big-img');
let imgsSmall = doc.querySelectorAll('.image-small');
for (let i = 0; i < imgsSmall.length; i++) {
  imgsSmall[i].addEventListener('click', function(event) {
    if (event.target.nodeName === 'IMG') {
      for (let i = 0; i < imgsSmall.length; i++) {
        imgsSmall[i].classList.remove('shadow');
      }
      imgBig.getElementsByTagName('img')[0].src = event.target.src;
      this.classList.add('shadow')
    }
  })
}

//add to bag
let btnBuy = doc.querySelector('#buy-btn');
btnBuy.addEventListener('click', addToCart);

function addToCart(event) {
  event.preventDefault();  
  let color = _.find(item_details_form.querySelectorAll('input[name="color"]'), 'checked');
  let size = _.find(item_details_form.querySelectorAll('input[name="size"]'), 'checked');
  if (color === undefined || size === undefined) {
    alert('Please choose color and size');
  } else {
    productItem.color = color.value;
    productItem.size = size.value;
    bag.push(_.assign({}, productItem));
    //bag.push(Object.assign({}, productItem));
    renderBagsPrice();
    saveToLocalStorage();
  }  
}

