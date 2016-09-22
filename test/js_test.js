// let a = "asdf"
//
// function varTest(){
//   var x = 1
//   if(true){
//     var x = 2
//     console.log(x)
//   }
//   console.log(x)
//
// }
//
// function letTest(){
//   let a = 1;
//   if(true){
//     let a = 2;
//     console.log(a)
//   }
//   console.log(a)
// }
//
// alert(a);

let arr = [1,2,3,4,5];
let obj = {var canvas = null;
var context = null;
var ball = new Image();



var playerx = 10;
var playery = 10;

ball.src = "ball.png"

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
  context.drawImage(ball,playerx,playery)
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

  'x':1,
  'y':2
}

for(var i = 0; i<arr.length; i++){
  array[i]
}

for(var variable in arr){
  if(arr.hasOwnProperty(variable)){
    console.log(variable);
  }

}

for(var variable in obj){
  if(arr.hasOwnProperty(variable)){
    console.log(variable);
  }


}
