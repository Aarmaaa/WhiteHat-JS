class Thi{

constructor(a,b){

    var option={
        bodyA:a,
        bodyB:b,
        length:10,
        stiffness:0.005

    }

    this.constraint=Constraint.create(option);
    World.add(world,this.constraint)

}
display(){

push()
var a=this.constraint.bodyA.position
var b=this.constraint.bodyB.position

line(a.x,a.y,b.x,b.y)

pop()
}



}