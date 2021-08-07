class bob{
    constructor(x,y,r){
var options={
    isStatic:false,
    restitution:1,
    friction:0,
    density:0.8,
}
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.rectangle(this.x,this.y,this.r,options)
World.add(world,this.body)
    }
    display(){
    var paperpos=this.body.position;
    push();
    translate(paperpos.x,paperpos.y);
    rectMode(CENTER);
    pop();
    }
  
     } 

    

    
