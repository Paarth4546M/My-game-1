const World = Matter.World
const Bodies = Matter.Bodies
const Engine = Matter.Engine

var world,engine;
var outerTop_left,outerTop_right,outerLeft,outerRight,outerBottom;
var wall1,wall2,wall3,wall4,wall5,wall6;

function setup() {
  createCanvas(700,700);
 engine = Engine.create()
 world = engine.world;

 outerTop_left = new Box(150,80,150,5)
 outerTop_right = new Box(450,80,300,5)
 outerRight = new Box(598,330,5,500)
 outerBottom = new Box(337,580,520,5)
 outerLeft = new Box(78,330,5,500)

wall1 = new Box(250,220,5,70)
wall2 = new Box(550,200,90,5)
wall3 = new Box(565,420,60,5)
wall4 = new Box(250,420,5,70)
wall5 = new Box(273,388,40,5)
wall6 = new Box(360,315,5,100)


}

function draw() {
  background(200); 
  Engine.update(engine)


  outerTop_left.display()
  outerTop_right.display();
  outerRight.display()
  outerBottom.display()
  outerLeft.display()

  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  wall5.display()
  wall6.display()
 


 fill("blue")
  text(mouseX + "," + mouseY, mouseX, mouseY);
  drawSprites();
}