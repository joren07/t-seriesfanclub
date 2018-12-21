function Alien3 (x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;
    this.toDelete3 = false;
    this.liveCounter = 0;
    
    this.xdir = 1;

    this.die3 = function() {
        this.liveCounter += 1;
        if(this.liveCounter == 1){
            this.toDelete3 = true;
        }
        
    }
    this.move3 = function() {
        this.x = this.x + this.xdir;
    }

    this.shiftDown3 = function() {
        this.xdir *= -1
        this.y += this.r;
    }

    this.show3 = function() {
        fill('green');
        rect(this.x, this.y, 60, 60);
    }
}