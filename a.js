
var image = new Image()
var eventType, keyCode
image.src = "back.jpg"

image.addEventListener('load',onLoad);

window.addEventListener('keydown',onKeyDown);
window.addEventListener('keyup',onKeyUp)

function onLoad(){
    var canvas = document.getElementById('game_canvas')
    var context = canvas.getContext('2d')

    canvas.width = 500;
    canvas.height = 500;

    context.fillStyle = '#666'
    context.font = '15px Arial'
    context.textBaseline = 'top'
    context.fillText('KeyCode is : '+keyCode,10,10)
    context.fillText('eventType is : '+eventType, 10,25)

    context.drawImage(image,100,100)

}

function onKeyDown(e){
  keyCode = e.keyCode
  eventType = e.type
  onLoad()
}

function onKeyUp(e){
  keyCode = e.keyCode
  eventType = e.type
  onLoad()
}
