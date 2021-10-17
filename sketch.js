const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var standIMG, boyM;
var boyS, boy1, boy2, boy3, boy4, boy5, boy6, boy7, boy8;

function perload(){
 standIMG = loadImage("img/BoyS.png");
 boyM = loadAnimation("img/Boy1.png", "img/Boy2.png", "img/Boy3.png",  "img/Boy4.png", "img/Boy5.png", "img/Boy6.png", "img/Boy7.png", "img/Boy8.png");
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine); 

  boyS = createSprite(50, 550, 20, 20);
  boyS.addImage( boyM)

  //outer side walls
  //walls1 = new Swall()
  


  //wall1 = createSprite()
  
}
 
function draw() {
  background("black");  
  Engine.update(engine)

  drawSprites();
}