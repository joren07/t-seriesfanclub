function Ship() {
  this.x = width/2;
  this.xdir = 0;
  this.y = height-10;
  this.color = 'white';
  

  this.show = function() {
    fill(this.color);
    rectMode(CENTER);
    rect(this.x, height-10, 20, 20);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    this.x = constrain(this.x,10,690);
    this.x += this.xdir*4;     
  }
}