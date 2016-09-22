var canvas = null;
var context = null;

var ball = new Image();
var block = new Image();

var clicked = false;

var ballx;
var bally;

var blockx;
var blocky;

var blockWidth;
var blockHeight;

var ballWidth;
var ballHeight;

ball.src = "ball.png"
block.src = "block.jpg"


function init(){
  canvas = document.getElementById('game_canvas')
  context = canvas.getContext('2d')
  canvas.width = 2000;
  canvas.height = 2000;

  blockx = 200, blocky = 0

  ballx = 210, bally = 300

  blockWidth = block.width
  blockHeight = block.height

  ballWidth = ball.width
  ballHeight = ball.height

}

function update(){

  context.clearRect(0,0,canvas.width,canvas.height)
  context.drawImage(ball,ballx,bally)
  context.drawImage(block,blockx,blocky)

  if(clicked){
    bally -= 10
  }

  //AABB출돌
  if(blocky > bally && (blocky-blockHeight) < bally && (blockx+blockWidth) > ballx && blockx < ballx){
    console.log("충돌데스네")
  }

  requestAnimationFrame(update)



}

function onclick(){
  clicked = true;
}

  requestAnimationFrame(update);

  window.addEventListener('click',onclick)
  window.addEventListener('load',init)
