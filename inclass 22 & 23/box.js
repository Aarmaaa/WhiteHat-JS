class Box
{

constructor(a,b,c,d){

    this.body=Matter.Bodies.rectangle(a,b,c,d);
    Matter.World.add(en.world,this.body)
    this.width=c;
    this.height=d;

    this.image=loadImage("wood1.png")

}

displace(){

push()

translate(this.body.position.x,this.body.position.y)

rotate(this.body.angle*180/PI);

imageMode(CENTER)

image(this.image,0,0,this.width,this.height);

pop();

}



}