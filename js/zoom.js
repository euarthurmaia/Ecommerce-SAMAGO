document.getElementById('img-container').addEventListener('mouseover', function(){
  imageZoom('imagem')  
})

function imageZoom(imgID){
let img = document.getElementById(imgID)
let lens = document.getElementById('lens')
lens.style.backgroundImage = `url( ${img.src} )`
let ratio = 3
lens.style.backgroundSize = (img.width * ratio) + 'px ' + (img.height * ratio) + 'px';
img.addEventListener("mousemove", moveLens)
lens.addEventListener("mousemove", moveLens)
img.addEventListener("touchmove", moveLens)

function moveLens(){
  let pos = getCursor();
  let positionLeft = pos.x - (lens.offsetWidth / 2);
  let positionTop = pos.y - (lens.offsetHeight / 2);

  if (positionLeft < 0) {
    positionLeft = 0;
  }

  if (positionTop < 0) {
    positionTop = 0;
  }

  if (positionLeft > img.width - lens.offsetWidth) {
    positionLeft = img.width - lens.offsetWidth;
  }

  if (positionTop > img.height - lens.offsetHeight) {
    positionTop = img.height - lens.offsetHeight;
  }

  lens.style.left = positionLeft + 'px';
  lens.style.top = positionTop + 'px';

  lens.style.backgroundPosition = "-" + (pos.x * ratio) + 'px -' +  (pos.y * ratio) + 'px'
}

function getCursor(){
      let e = window.event
      let bounds = img.getBoundingClientRect()
      let x = e.pageX - bounds.left
  let y = e.pageY - bounds.top
  x = x - window.pageXOffset;
  y = y - window.pageYOffset;
  
  return {'x':x, 'y':y}
}

img.addEventListener("mouseenter", function() {
  lens.style.zIndex = "2";
  lens.style.position = "absolute";
  lens.style.height = "125px";
  lens.style.width = "125px";
  lens.style.backgroundRepeat = "no-repeat";
  lens.style.cursor = "none";
});

}

imageZoom('imagem')