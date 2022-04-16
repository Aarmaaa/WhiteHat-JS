var box,box2,box3,box4,box5;

var ground,gr

var en;

var bg;

var log1,log2,log3,log4;

var pig,pig2;

var bird1;

function preload(){

bg=loadImage("bg.png")
gr=loadImage("base.png")

}


function setup() {
  createCanvas(1200,500);

  en=Matter.Engine.create();

box=new Box(800,425,70,70);
box2=new Box(1000,425,70,70)
box3=new Box(800,350,70,70);
box4=new Box(1000,350,70,70);
box5=new Box(900,280,70,70);

log1=new Log(900,380,270,15);
log2=new Log(900,310,270,15)
log3=new Log(830,215,15,170);
log4=new Log(970,215,15,170)

pig1=new Pig(900,445,50,50)
pig2=new Pig(900,345,50,50)

bird1=new Bird(200,350,45,45);

Matter.Body.setAngle(log3.body,PI/7);
Matter.Body.setAngle(log4.body,-PI/7);

log2.body.friction=1.3;
log3.body.friction=1.3;
log4.body.friction=1.3;
box5.body.friction=1.3;






ground=Matter.Bodies.rectangle(600,480,1200,20);
Matter.World.add(en.world,ground);

ground.isStatic=true;
}


function draw(){
background(bg);

Matter.Engine.update(en);


imageMode(CENTER)
image(gr,ground.position.x,ground.position.y,1200,20);

bird1.body.position.x=mouseX;
bird1.body.position.y=mouseY;

en.world.gravity.y=2

box.displace();
box2.displace();
box3.displace();
box4.displace();
box5.displace(); 

log1.displace();
log2.displace();
log3.displace();
log4.displace();

pig1.displace();
pig2.displace();

bird1.displace();

}