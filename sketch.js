
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var Roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new bob(400,450,60);
	bob2=new bob(460,450,60);
	bob3=new bob(520,450,60);
	bob4=new bob(580,450,60);
    bob5=new bob(640,450,60);
	Roof=new roof(550,50,700,20);
	rope1=new rope(bob1.body,Roof.body,-145,0);
	rope2=new rope(bob2.body,Roof.body,-85,0);
	rope3=new rope(bob3.body,Roof.body,-30,0);
	rope4=new rope(bob4.body,Roof.body,24,0);
	rope5=new rope(bob5.body,Roof.body,85,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  Roof.display();
  rope1.display();
  rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-2500,y:2500});
}
}


