function Ship (){
    this.x = width/2;
    this.xdir = 0;
    this.live= 3;
    this.r = 20;
    this.y = height - 20;
    this.coll = color(255);
    this.damageColor = 0;

    this.show = function() {
        fill(this.coll);
        rectMode(CENTER);
        triangle(this.x, height-50, this.x+15, 650, this.x-15, 650);
    }

    this.changeColor = function(){
        this.coll = color(random(255),random(255),random(255));
    }

    this.takeDamage = function(){
        if(this.damageColor > 0){
            this.changeColor();
            this.damageColor -=1;
        }else{
            this.defaultColor();
        }
    }

    this.defaultColor = function(){
        this.coll = 255;
    }

    this.checkDeath = function(){
        if(this.live === 0){
            return true;
        }
        else{
            return false;
        }
    }

    this.setDir = function(dir) {
        this.xdir = dir;
    }
    this.move = function(dir){
        this.x += this.xdir*5;
        this.x = constrain(this.x,0, 1340);
    }
}