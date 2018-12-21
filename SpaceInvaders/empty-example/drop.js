function Drop (x, y) {
    this.x = x;
    this.y = y;
    this.r = 4;
    this.toDelete = false;

    this.show = function() {
        noStroke();
        fill('grey');
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.evaporate = function(){
        this.toDelete = true;
    }

    this.hits = function(alien){
        var d = dist(this.x, this.y, alien.x, alien.y);
        if (d < this.r + alien.r){
            alien.damageColorAlien = 100;
            return true;

        } else {
            return false;
        }
    }

    this.hits2 = function(alien2){
        var d = dist(this.x, this.y, alien2.x, alien2.y);
        if (d < this.r + alien2.r){
            return true;
        } else {
            return false;
        }
    }

    this.move = function() {
        this.y = this.y - 5;
    }
}