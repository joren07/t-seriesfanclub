function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 4;
  this.toDelete = false;

  this.show = function(color) {
    noStroke();
    fill(color);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.hitsenemy = function(enemy) {
    var d = dist(this.x, this.y, enemy.x, enemy.y);
    if (d < this.r + enemy.r) {
      return true;
    } else {
      return false;
    }
  }

  this.hitsship = function(ship) {
    var d = dist(this.x, this.y, ship.x ,ship.y );
    if (d <  this.r+ 6) {
      return true;
    } else {
      return false;
    }
  } 

  this.move = function() {
    this.y = this.y -5   ;
  }
  
  this.enemymove = function(){
    this.y = this.y +5;
    this.r = 5;
  }
  
}