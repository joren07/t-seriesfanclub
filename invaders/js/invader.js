function invader(x, y) {


    this.x = x;
    this.y = y;
    this.r = 15;
  
    this.xdir = 1;
  
    this.shrink = function(amount) {
      this.r = this.r - amount;
    }
  
    this.shiftDown = function() {
      this.xdir *= -1 ;
      this.y += 15;
    }
  
    this.move = function() {
      this.x = this.x + this.xdir;
    }
  
    this.show = function() {
      noStroke();
      fill('blue');
      ellipse(this.x, this.y, this.r*2, this.r*2);
    }
  
  }