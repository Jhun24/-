var canvas = null;
var context = null;
var image = new Image();



var playerx = 10;
var playery = 10;

image.src = "1.png"

var keyArr = [];

function init(){
  canvas = document.getElementById('game_canvas')
  context = canvas.getContext('2d')
  canvas.width = 3000;
  canvas.height = 3000;

  for(let i =0; i<256; i++){
    keyArr.push(false)
  }
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height)
  context.drawImage(image,playerx,playery)
  requestAnimationFrame(update)

  if(keyArr[37]){
   playerx-=10;
  }
  else if(keyArr[38]){
    playery-=10;
  }
  else if(keyArr[39]){
    playerx+=10;
  }
  else if(keyArr[40]){
    playery+=10;
  }

}


function onKeyDown(e){
 keyArr[e.keyCode] = true;
}
function onKeyUp(e){
  keyArr[e.keyCode] = false;
}

  requestAnimationFrame(update);

  window.addEventListener('load',init)
  window.addEventListener('keydown',onKeyDown)
  window.addEventListener('keyup',onKeyUp)
