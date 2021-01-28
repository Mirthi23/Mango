
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
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,200,30);
	mango3=new mango(900,180,30);
	mango4=new mango(1200,180,30);
	mango5=new mango(1200,300,30);
	mango6=new mango(1090,100,30);
	mango7=new mango(1200,250,30);
	mango8=new mango(1000,300,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);


	stoneObj = new stone(250,402,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  textSize(20);
  text("Press SPACE for a second chance to play!",200,300);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stoneObj.display();
  groundObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
 




}





function mouseDragged(){
  
        Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
	stoneObj.fly();
	
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
  }

}


function detectCollision(lstone,lmango)
{
   mangoBodyPosition = lmango.body.position;
   stoneBodyPosition = lstone.body.position;

   var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

   if(distance<=lmango.r+lstone.r)
   {
	   Matter.Body.setStatic(lmango.body,false);
   }



}