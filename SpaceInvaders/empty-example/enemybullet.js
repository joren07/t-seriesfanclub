function Enemybullet (x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDeleteEnemyBullet = false;
    

    this.showBullet = function() {
        noStroke();
        fill('red');
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.hitsPlayer = function(ship){
        var d = dist(this.x, this.y, ship.x, ship.y) *2;
        if (d < this.r + ship.r){
            ship.damageColor = 100;
            ship.live -= 1;
            this.evaporateEnemyBullet();
            return true;
        } else {
            return false;
        }
    }

    this.evaporateEnemyBullet = function(){
        this.toDeleteEnemyBullet = true;
    }

    this.move = function() {
        this.y = this.y + 5;
    }

}