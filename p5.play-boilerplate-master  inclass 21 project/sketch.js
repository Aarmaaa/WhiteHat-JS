
var a,b,c
function setup(){
createCanvas(400,400);

  a=createSprite(200,200,50,50);
  b=createSprite(250,250,50,50);
  c=createSprite(100,200,50,50);

}

function draw(){

  background("white");
a.x=mouseX;
a.y=mouseY;

if(is(a,b)){
  a.shapeColor="red";
  b.shapeColor="red";
}
else{
  a.shapeColor="blue";
  b.shapeColor="black";

}
is(a,c);

console.log(sum(5,10));
drawSprites();
}

function is(d,e){

  if(d.x-e.x<=d.width/2+e.width/2 && e.x-d.x<=d.width/2+e.width/2 && d.y-e.y<=d.height/2+e.height/2 && e.y-d.y<=d.height/2+e.height/2){

    return true
  }
  else
  {
    return false

  }


}


function sum(s,j){

  return s+j;


}