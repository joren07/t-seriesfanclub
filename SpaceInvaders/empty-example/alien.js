function Alien (x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;
    this.toDelete = false;
    this.liveCounter = 0;
    this.collAlien = color(255);
    this.damageColorAlien = 0;
    this.xdir = 1;

    this.die = function() {
        this.liveCounter += 1;
        if(this.liveCounter == 3){
            this.toDelete = true;
        }
    }
    this.takeDamageAlien = function(){
        if(this.damageColorAlien > 0){
            this.coll = color(random(255),random(255),random(255));
            this.damageColorAlien -=1;
        }else{
            this.defaultColorAlien();
        }
    }

    this.defaultColorAlien = function(){
        this.collAlien = 255;
    }

    this.move = function() {
        this.x = this.x + this.xdir;
    }

    this.shiftDown = function() {
        this.xdir *= -1
        this.y += this.r;
    }

    this.show = function() {
        fill(this.collAlien);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
}