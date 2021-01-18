
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	boyI = loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     tree1 = new Tree(870,350,20,200);
	 tree2 = new Tree(930,350,20,200);
	 tree3 = new Tree(900,430,100,20);
     ground = new Ground();

	 stone = new Stone(200,300,30)

     mango1=new Mango(1100,100,30);
     mango2=new Mango(1170,130,30);
	 mango3=new Mango(1010,140,30);
	 mango4=new Mango(1000,70,30);
	 mango5=new Mango(800,85,30);
	 mango6=new Mango(950,130,30);
	 mango7=new Mango(750,70,30);
	 mango8=new Mango(700,150,30);

	 rope = new Sling(stone.body,{x:240,y:320})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  image(boyI ,200,240,200,300);
  tree1.display();
  tree2.display();
  tree3.display();
  image(tree3.image,870,230,750,500);
  ground.display();
  stone.display();
  rope.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);

  drawSprites();
//   text(mouseX+","+mouseY,300,200)
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:240, y:320}) 
	  rope.attach(stone.body);
	}
  }
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    rope.fly()
}
function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
		if(distance<=lmango.r+lstone.r)
	  {
		  Matter.Body.setStatic(lmango.body,false);
	  }
  
	}

