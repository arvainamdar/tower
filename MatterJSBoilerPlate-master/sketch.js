
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{ polygonImage=loadImage("polygon.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground= new Ground(600,500,300,20)
   box1 = new Box(550,480,40,40); 
   box2 = new Box(590,480,40,40); 
   box3 = new Box(610,480,40,40); 
   box4 = new Box(570,440,40,40); 
   box5 = new Box(600,440,40,40);
    box6 = new Box(585,400,40,40); 
poly=Bodies.polygon(200,200,6,40);
World.add(world,poly);

chain = new SlingShot(poly,{x:200,y:200})

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);

  imageMode(CENTER)
  image(polygonImage,poly.position.x,poly.position.y,80,80)
  
ground.display();
 box1.display();
 box2.display();
box3.display();
box4.display();
box5.display();
box6.display();

chain.display();
}

function mouseDragged(){
	Matter.Body.setPosition(poly,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
	chain.fly();
  }
  function keyPressed(){
	if(keyCode===32){
		chain.attach(poly)
	   
	}
   
  }
