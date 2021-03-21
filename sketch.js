
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(900,200,30);
	mango4=new mango(1200,250,30);
	mango5=new mango(1100,200,30);
	mango6=new mango(1000,260,30);
	mango7=new mango(1000,180,30);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone(230,410,30);
  launcherObject=new rope(stoneObj.body,{x:235,y:410});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  text("PRESS SPACE TO PLUCK MORE MANGOES",100,50);
  image(boy ,200,340,200,300);


  stoneObj.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();


  groundObject.display();
  launcherObject.display();


  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  detectcollision(stoneObj,mango6);
  detectcollision(stoneObj,mango7);
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcherObject.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:410}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectcollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
      if(distance<=lmango.r+lstone.r) {
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }