
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1, trash1,bottom,left,right;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new ground(100,650,1600,20); 
	trash1 = new trash(100,600,10);
	bottom = new dustbin(width/1.3,575,150,150);
	//left = new dustbin(width/1.4 - 50,590,100,200);
	//right = new dustbin(width/1.8 + 260,590,100,200);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);
  ground1.display();
  bottom.display();
  trash1.display();
  //left.display();
 // right.display();
  drawSprites();
 
}

	function keyPressed(){
		if(keyCode === UP_ARROW){
            Matter.Body.applyForce(trash1.body,trash1.body.position,{x:185,y:-185});
        }
	}




