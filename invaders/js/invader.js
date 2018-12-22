function invader(x, y) {
  this.color = 'blue';

  this.x = x;
  this.y = y;
  this.r = 14;

  this.xdir = 1;

  this.shrink = function(amount) {
    this.r = this.r - amount;
  }

  this.shiftDown = function() {
    this.xdir *= -1 ;
    this.y += 20;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.show = function() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

}