
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,rect1,rect2,rect3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
   
    paper = new Paper(200,670,70);
    rect1 = new Dustbin(width/1.5,height-50,150,20);
	rect2 = new Dustbin(870,height-85,20,90);
	rect3 = new Dustbin(720,height-85,20,90);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  rect1.display();
  rect2.display();
  rect3.display()
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:145,y:-145});
   }
   }
   

