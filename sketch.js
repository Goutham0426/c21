
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj1;
var groundObj2;
var groundObj;
var leftSide,rightSide

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}
ball = Bodies.circle(200,100,20,ball_options)
World.add(world,ball)

groundObj =new Ground(width/2,570,width,20)
groundObj1 =new Ground(20,300,20,780)
groundObj2 =new Ground(780,300,20,600)
leftSide = new Ground(700,500,20,120)
rightSide = new Ground(550,500,20,120)

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);

  groundObj.display();
  groundObj1.display();
  groundObj2.display();
  leftSide.display();
  rightSide.display();
fill("red")
  ellipse(ball.position.x,ball.position.y,20);

  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:0})
}

}



