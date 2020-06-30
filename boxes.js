class Box{
    constructor(x, y, width, height){
var rod ={
'restitution' : 0,
isStatic:true

}
        this.body = Bodies.rectangle(x, y, width, height,rod );
        this.width = width;
        this.height = height;
       
       World.add(world, this.body)
            }
display(){
    var pos=  this.body.position;
	rectMode(CENTER);
     fill(211, 0, 0);
 rect(pos.x, pos.y, this.width,this.height);

          }
}