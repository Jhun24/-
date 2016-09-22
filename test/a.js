
var image = new Image()
var eventType, keyCode

var playerx = 100;
var playery = 100;

var mousex;
var mousey;

var isDrag = false;

image.src = "back.jpg"

image.addEventListener('load',onLoad);

window.addEventListener('keydown',onKeyDown);
window.addEventListener('keyup',onKeyUp);

window.addEventListener('mousedown',onMouseDown);
window.addEventListener('mouseup',onMouseUp);

window.addEventListener('mousemove',onMouseMove);

window.addEventListener('click',onClick);
window.addEventListener('dblclick',onDblClick);

window.addEventListener('contextmenu',contextMenu);

function onLoad(){
    var canvas = document.getElementById('game_canvas')
    var context = canvas.getContext('2d')

    canvas.width = 500;
    canvas.height = 500;

    context.drawImage(image,playerx,playery)

    context.fillStyle = '#666'
    context.font = '15px Arial'
    context.textBaseline = 'top'
    context.fillText('KeyCode is : '+keyCode,10,10)
    context.fillText('eventType is : '+eventType, 10,25)



}

function onKeyDown(e){
  keyCode = e.keyCode
  eventType = e.type

  if(e.keyCode == 37){
    playerx-=10;
  }
  else if(e.keyCode == 38){
    playery-=10;
  }
  else if(e.keyCode == 39){
    playerx+=10;
  }
  else if(e.keyCode == 40){
    playery+=10;
  }

  onLoad()
}

function onKeyUp(e){
  keyCode = e.keyCode
  eventType = e.type

  onLoad()
}

function onMouseDown(e){
  eventType = e.type
  mousex = e.clientX
  mousey = e.clientY

  isDrag = true
  onLoad()
}

function onMouseUp(e){
  eventType = e.type
  mousex = e.clientX
  mousey = e.clientY

  isDrag = false
  onLoad()
}

function onMouseMove(e){
  eventType = e.type
  mousex = e.clientX
  mousey = e.clientY

  if(isDrag){
    playerx = mousex
    playery = mousey
  }
  onLoad()
}
