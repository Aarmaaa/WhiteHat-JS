var ball;

var database;
var firebaseball;

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var firebaseballposition=database.ref("ball/position")
    firebaseballposition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
firebaseball=data.val()
ball.x=firebaseball.x
ball.y=firebaseball.y
}

function showError(){

console.log("error")

}

function writePosition(x,y){
database.ref("ball/position").set({
'x':firebaseball.x+x,
'y':firebaseball.y+y

})

}