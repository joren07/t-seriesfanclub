var s;
var scl = 20;

var food;

var score = 0;

function setup(){
    createCanvas(600, 600);
    s = new Snake();
    frameRate(15);
    pickLocation();
}


function pickLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw(){
    background(51);

    if (s.eat(food)){
        pickLocation();
    }
    s.death();
    s.update();
    s.show();

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed(){
    if(key === "w"){
        s.dir(0, -1);
    } else if (key === "s"){
        s.dir(0, 1);
    }else if (key === "d"){
        s.dir(1,0);
    }else if(key === "a"){
        s.dir(-1, 0);
    }
}

var scoreText = function() {
    var score_text = "Score: " + score;
    ctx.fillStyle = 'blue';
    ctx.fillText(score_text, 145, h-5);
}