function Alien2 (x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;
    this.toDelete2 = false;
    this.liveCounter = 0;
    
    this.xdir = 1;

    this.die2 = function() {
        this.liveCounter += 1;
        if(this.liveCounter == 2){
            this.toDelete2 = true;
        }
        
    }
    this.move2 = function() {
        this.x = this.x + this.xdir;
    }

    this.shiftDown2 = function() {
        this.xdir *= -1
        this.y += this.r;
    }

    this.show2 = function() {
        fill(255, 0, 200);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
}