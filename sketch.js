const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
//nameSpacing


var engine,world;
var ground, ball, ball2, ball3;

function setup() {  
  var canvas= createCanvas(400,400);
  
  engine =Engine.create();
  
  world=engine.world;
  
  //Customizing the object properties
  var ground_options = {
    isStatic: true
  }
  var ball_options = {
    restitution: 1.0
  }
  var ball2_options = {
    restitution: 9.0
  }
  var ball3_options = {
    restitution: 2.0
  }

  //Creating the bodies that will behave like real objects
  ground = Bodies.rectangle(200, 390, 400, 10, ground_options);
  ball = Bodies.circle(100, 200, 20, ball_options);
  ball2 = Bodies.circle(300, 200, 40, ball2_options);
  ball3 = Bodies.circle(200, 200, 70, ball3_options);


  //Adding them to the world so that they function properly
  World.add(world, ground);
  World.add(world, ball);
  World.add(world, ball2);
  World.add(world, ball3);
  /*console.log(object);
  console.log(object.type)*/

}

function draw() {
  background(0); 

  //Updating Engine
  Engine.update(engine);
  
  //Setting the positions to the center
  rectMode(CENTER);
  ellipseMode(RADIUS);

  //Drawing the bodies onto the screen
  rect(ground.position.x,ground.position.y,400,10);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  ellipse(ball2.position.x, ball2.position.y, 40, 40);
  ellipse(ball3.position.x, ball3.position.y, 70, 70);
  
}