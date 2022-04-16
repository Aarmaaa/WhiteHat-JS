class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.li=[];
    this.pi=loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var pos=[this.body.position.x,this.body.position.y];
    this.li.push(pos);
    for(var i=0;i<this.li.length;i++){
      image(this.pi,this.li[i][0],this.li[i][1])

    }
    super.display();
  }
}
