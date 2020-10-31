const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic : true,
    restitution :1 
  }
  ground = Bodies.rectangle(400,390, 800,20,options);
  World.add(world, ground);
  console.log(ground);
}

function draw() {
  background(0); 
  Engine.update(engine);
  fill ("green");
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,800,20) ;
  
}