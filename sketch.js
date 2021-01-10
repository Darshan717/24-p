
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
    world = engine.world;
    
function draw() {
    rectMode(CENTER);
    background(230);
   
    
    paperObject.display();
    groundObject.display();
    dustbinObj.display();
  
    
    
   
    
    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}
    
   
  }
  
  function keyPressed() {
        if (keyCode === UP_ARROW) {
  
          Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
  
