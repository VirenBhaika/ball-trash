
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var ground;
var rightSide;
var leftSide;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var options = {
		restitution: 0.8
	  }
	
	  ball = Bodies.circle(200,50,10,options);
	  World.add(world,ball);
	  
	   var ball_options = {
		isStatic:false
		restitution:0.3,
		friction:0,
		density:1.2
	  }
	   
	   var ground_options = {
		 isStatic: true
	   };
	
	  ground = Bodies.rectangle(width/2,670,width,20,ground_options);
	  World.add(world,ground);
	
	  ball = Bodies.circle(100,10,20,ball_options);
	  World.add(world,ball);

	  leftSide = Bodies.rectangle(1100,600,20,120);
	  World.add(world,leftSide);
	  
	  rectMode(CENTER);
	  ellipseMode(RADIUS);

	  Engine.run(engine);
	}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,1200,10);
  rect(leftSide.position.x,leftSide.position.y,20,120)

  drawSprites();
}