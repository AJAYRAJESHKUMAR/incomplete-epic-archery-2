const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(width - 340,computerBase.body.position.y - 180,120,120);
    
    
    
    
 
  
  //Create an arrow Object
  Matter.Body.setAngle(thisBody,-PI/2);  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();

  
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


  //Display arrow();
  arrow.display();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    arrow.shoot(playerArcher.body.angle);
  }
  if(move==="UP"&& computerArcher.body.angle<1.77){
    angleValue=0.1;
      }else{
        angleValue=-0.1;
              } 
              if(move==="DOWN"&&computerArcher.body.angle>1.47) {
                angleValue=-0.1;
                              } else{
                                angleValue=0.1;
                              } 
      //Call shoot() function and pass angle of playerArcher
      
      function shoot(archerAngle){
var velocity=p5.vector.fromAngle(archerAngle);
velocity.mult(20);
Matter.body.setStatic(this.body,false);
Matter.vody.setvelocity(this.body,{x:velocity.x,y:velocity.y});
      }




  
}



