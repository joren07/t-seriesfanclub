var ship;
var aliens = [];
var aliens2 = [];
var aliens3 = [];
var drops = [];
var bullets = [];

function setup() {
  createCanvas(1340,659);
  ship = new Ship();
  for(var i = 0; i <15; i++){
    aliens[i] = new Alien(i*80+80, 60);
    aliens2[i] = new Alien2(i*80+80,125);
    aliens3[i] = new Alien3(i*80+80,190);
  }
}

function draw() {
  
  background(51);
  ship.show();
  ship.move();
  ship.takeDamage();
  for(var i = 0; i < bullets.length; i++){
    bullets[i].move();
    bullets[i].showBullet();
    if(bullets[i].hitsPlayer(ship)){  
      if(ship.checkDeath()){
        alert("Game Over.")
        setup();
      }
    }
    if(bullets[i].toDeleteEnemyBullet){
      bullets.splice(i,1);
      if(bullets[i].y>1000){
        bullets[i].evaporateEnemyBullet();
      }
    }
  }

  for(var j = 0; j <aliens.length; j++){
    var num = int(random(1,200));
    aliens[j].takeDamageAlien();
    

    if(num == 1){
      var enemybullet = new Enemybullet(aliens[j].x,aliens[j].y);
      bullets.push(enemybullet);
    }
  }

  for(var j = 0; j <aliens2.length; j++){
    var num = int(random(1,200));
    if(num == 1){
      var enemybullet = new Enemybullet(aliens2[j].x,aliens2[j].y);
      bullets.push(enemybullet);
    }
  }

  for(var j = 0; j <aliens3.length; j++){
    var num = int(random(1,200));
    if(num == 1){
      var enemybullet = new Enemybullet(aliens3[j].x,aliens3[j].y);
      bullets.push(enemybullet);
    }
  }

  for(var i = 0; i < drops.length; i++){
    drops[i].show();
    drops[i].move();
    for(var j = 0; j <aliens.length; j++){
      if (drops[i].hits(aliens[j])){
        drops[i].evaporate();
        aliens[j].die();
        if(drops[i].y<-400){
          drops[i].evaporate();
        }
      }
    }
    for(var j =0; j < aliens2.length; j++){
      if (drops[i].hits2(aliens2[j])){
        drops[i].evaporate();
        aliens2[j].die2();
        if(drops[i].y<-400){
          drops[i].evaporate();
        }
      }
    }
    for(var j =0; j < aliens3.length; j++){
      if (drops[i].hits2(aliens3[j])){
        drops[i].evaporate();
        aliens3[j].die3();
        if(drops[i].y<-400){
          drops[i].evaporate();
        }    
      }
    }
  }
  if(aliens.length === 0){
    if(aliens2.length === 0){
      alert("Victory Royale.");
      setup()
    }
  }  

var edge = false;

  for(var i = 0; i <aliens.length; i++){
    aliens[i].show();
    aliens[i].move();
    if (aliens[i].x > width || aliens[i].x < 0) {
      edge = true;
    }
  }

  for(var i = 0; i < aliens2.length; i++){
    aliens2[i].show2();
    aliens2[i].move2();
    if (aliens2[i].x > width || aliens2[i].x < 0) {
      edge = true;
    }
  }

  for(var i = 0; i < aliens3.length; i++){
    aliens3[i].show3();
    aliens3[i].move3();
    if (aliens3[i].x > width || aliens3[i].x < 0) {
      edge = true;
    }
  }

  if(edge) {
    for(var i = 0; i <aliens.length; i++){
      aliens[i].shiftDown();
  }
}

if(edge) {
  for(var i = 0; i <aliens2.length; i++){
    aliens2[i].shiftDown2();
}
}
if(edge){
  for(var i = 0; i <aliens3.length; i++){
    aliens3[i].shiftDown3();
}
}


  for(var i = drops.length-1; i >= 0; i--){
    if(drops[i].toDelete) {
      drops.splice(i,1);
    }
}
for(var j = aliens.length-1; j >= 0; j--){
  if(aliens[j].toDelete) {
    aliens.splice(j,1);
  }
}
for(var j = aliens2.length-1; j >= 0; j--){
  if(aliens2[j].toDelete2) {
    aliens2.splice(j,1);
  }
}

for(var j = aliens3.length-1; j >= 0; j--){
  if(aliens3[j].toDelete3) {
    aliens3.splice(j,1);0
  }
}

}

function keyReleased(){
  if (key != ' ') {
    ship.setDir(0);
  }
}

function keyPressed() {
  if(key === ' '){
    var drop = new Drop(ship.x, height-50);
    drops.push(drop);
  }
  if (keyCode === RIGHT_ARROW){
    ship.setDir(1);
  }
  if (keyCode === LEFT_ARROW){
    ship.setDir(-1);
  }
}