
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var db1,db2,db3;
var ground1,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1400,400);


	engine = Engine.create();
	world = engine.world;

    ball = new paper(80,150);
	ground1 = new ground(600,335,12000,20);
	db2=new dustbin(1067.5,285,15,70);
	db3=new dustbin(932.5,285,15,70);
	db1=new dustbin(1000,320,150,15);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  db2.display();
  db3.display();
  db1.display();
  ground1.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode=== UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-85});
	}
	}
	


