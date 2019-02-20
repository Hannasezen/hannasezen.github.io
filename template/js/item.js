let imgBig = document.getElementById('item-big-img');
let imgsSmall = document.getElementById('item-small-images');
imgsSmall.addEventListener('click', function(event) {
  imgBig.getElementsByTagName('img')[0].src = event.target.src;
})