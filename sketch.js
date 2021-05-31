const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;



var snowFlakes = [];

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;


bgImg = loadImage("snow3.jpg")
}

function draw() {
  background(bgImg);  

  Engine.update(engine);
  
  
  if (frameCount%60===0){
   snowFlakes.push(new snow(random(50,250),-2));
  }

  if (frameCount%60===0){
    snowFlakes.push(new snow(random(250,450),-2));
   }

   if (frameCount%60===0){
    snowFlakes.push(new snow(random(450,650),-2));
   }

   if (frameCount%60===0){
    snowFlakes.push(new snow(random(650,850),-2));
   }
   
   if (frameCount%60===0){
    snowFlakes.push(new snow(random(850,1050),-2));
   }
   
   


  for (var a = 0; a < snowFlakes.length; a++) {
  snowFlakes[a].display();   
  }

  
  
}