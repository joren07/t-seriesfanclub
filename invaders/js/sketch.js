var ship;
var invaders = [];
var drops = [];
var enemydrops = [];
let life = 3;
let level=1;
let start = false;



function starting() {
  if (start ==false){
    start = true;
    document.getElementById("pause").innerHTML = "";
    document.getElementById("startend").innerHTML = " press e to end the game";
  }else {
    start = false;
    setup();
    life = 3;
    level = 1;
    document.getElementById("pause").innerHTML = "the game is not started or has ended";
    document.getElementById("startend").innerHTML = " press e to start the game";
    document.getElementById("lives").innerHTML = "";
    document.getElementById("level").innerHTML = "";
  }
}
function removeAliens(){
  for (var j = 0; j < invaders.length; j++) {
    invaders.pop();
  }
}

function createInvaders(length, height){
  let jump = 0
  for (let j = 0; j < height ; j ++){
    for (var i = 0; i < length; i++) {
      invaders[jump + i] = new invader(i*45, 45 + (j*40));
      invaders[jump + i].xdir = level/3+1;
      }
      jump += length;
    }
  }

function setup() {
  let canvas = createCanvas(700, 520);
  canvas.parent('canvasholder');
  ship = new Ship();
  removebullets();
  removeAliens();
  createInvaders(4, 1);

}
function removebullets(){
  for (var i = 0; i < enemydrops.length; i++) {
    enemydrops[i].evaporate();
  }
  for (var i = 0; i < drops.length; i++) {
    drops[i].evaporate();
  }
}

function levelup(){
  if(level < 10) {
    if (invaders.length ==0){
      level ++
      createInvaders(4+Math.floor(level/3),Math.ceil(level/4) );
      console.log(invaders.length);
      removebullets();
    }
  }else if (invaders.length ==0){
    removebullets();
    alert("victory");
  }
}
function verloren(){
  if (life === 0 ){
    alert("you lose");
    removeAliens();
    createInvaders(4,1);
    removebullets();
    life = 3;
    level = 1;
    
  }
} 
function draw() {
  if(start==true){
  document.getElementById("level").innerHTML = " current level: " + level + " /10";
  document.getElementById("lives").innerHTML = life + " /3 lifes left";
  background(51);
  ship.show();
  ship.move();

  for (let i = 1; i < (life*20)-20 ; i+=20){
    rect(i+ i+10, 10, 20, 20);
  }

  for (var i = 0; i < drops.length; i++) {
    drops[i].show('green');
    drops[i].move();
    for (var j = 0; j < invaders.length; j++) {
      if (drops[i].hitsenemy(invaders[j])) {
       if(invaders[j].r===14){
        invaders[j].shrink(5); 
        invaders[j].color = 'darkblue';
       }else{
        invaders.splice(j , 1);
        levelup();
       }
        drops[i].evaporate();
      }
    }      
  }

  for (var i = 0; i < enemydrops.length; i++) {
    enemydrops[i].show('red');
    enemydrops[i].enemymove(level);
    verloren();
    if(enemydrops[i].hitsship(ship)){
      ship.color='red';
      life --;
      for (var i = 0; i < enemydrops.length; i++) {
        enemydrops[i].evaporate();
      }
      setTimeout(function(){ship.color='white';  }, 200);
      }
  }
  var edge = false;

  for (var i = 0; i < invaders.length; i++) {
    invaders[i].show();
    invaders[i].move();
    if (invaders[i].x > width || invaders[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (var i = 0; i < invaders.length; i++) {
      invaders[i].shiftDown(); 
        }
  }
 

  for (var i = drops.length-1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }
  
  for (var i = enemydrops.length-1; i >= 0; i--) {
    if (enemydrops[i].toDelete) {
      enemydrops.splice(i, 1);
    }
  }
}
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function enemyshoot(){
if (invaders.length > 0){
  let randomenemy = getRandomInt(0,invaders.length-1);
  let randshoot = getRandomInt(1,2);
  if (randshoot ===2){
    var drop = new Drop(invaders[randomenemy].x, invaders[randomenemy].y);
    enemydrops.push(drop);
    }
  }
}

window.setInterval(function(){
  enemyshoot();
}, 50 );

function keyReleased() {
  if (key != 'f') {
    ship.setDir(0);
  }
}
function keyPressed() {
  if (key === 'e')  {
    starting();
  }
  if (key === 'f')  {
    var drop = new Drop(ship.x, height-20);
    drops.push(drop);
  }
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
