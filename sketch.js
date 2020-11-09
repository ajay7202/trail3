
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint=Matter.Constraint;
//var boyimg;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	boy = new Boy(150,550);
	mango1 = new Mangoes(909,300,20,20);
	mango2 = new Mangoes(870,250,20,20);
	mango3 = new Mangoes(850,350,20,20);
	mango4 = new Mangoes(820,300,20,20);
	mango5 = new Mangoes(1000,300,20,20);
	mango6 = new Mangoes(950,250,20,20);
	mango7 = new Mangoes(940,350,20,20);
	tree = new Tree(890,400,350,350);
	stone = new Stone(50,200,30,20);
	
	
    stone = new Stone(200,50);

	slingshot = new SlingShot(stone.body,{x:200, y:50});
	
	
	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
	background("white");
  rectMode(CENTER);
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

