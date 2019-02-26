//random card from data
let hash = decodeURI(window.location.hash.substring(1));
console.log(hash);
let randomItem = _.find(items, function (item) {
  return item.title === hash;
});
console.log(randomItem);

//render product card
function renderItem() {
  let item = doc.querySelector('#item');
  item.querySelectorAll('.description__title')[0].innerHTML = randomItem.title;
  item.querySelectorAll('.description__text')[0].innerHTML = randomItem.description;
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

window.onload = renderItem();

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
btnBuy.addEventListener('click', function(event) {
  event.preventDefault();  
  let color = _.find(item_details_form.querySelectorAll('input[name="color"]'), 'checked');
  let size = _.find(item_details_form.querySelectorAll('input[name="size"]'), 'checked');
  if (color === undefined || size === undefined) {
    alert('Please choose color and size');
  } else {
    randomItem.color = color.value;
    randomItem.size = size.value;
    bag.push(Object.assign({}, randomItem));
    /*let obj = Object.create(randomItem);
    bag.push(obj);  */  
    renderBagsPrice();
    saveToLocalStorage();
  }  
})

