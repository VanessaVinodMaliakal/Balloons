const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var world, engine, constraint;
var balloon1, balloon2, balloon3, balloon4, balloon5, gift, thread, count, Visibility;
var backgroungImg, giftImg

count = 0
//balloon1.Visibility = -1000

function preload()
{
backgroundImg = loadImage("sky.jpg")
giftImg = loadImage("redGift.png")	
}

function setup() {
	createCanvas(1440,755);

	engine = Engine.create();
	world = engine.world;
	
	ball1 = new Ball(880, 210, 180, 180 )
	
	ball2 = new Ball2(805, 80, 160, 180)
	
}

function draw() {
    Engine.update(engine)
	background(backgroundImg);

	
push()
	if(mousePressedOver(ball1)){
        World.remove(world,ball1)
        tint(255, ball1.Visibility)
        text("thank you", 200, 200)
}
else
{
    ball1.display()
}
 pop()  
 push()
   if(mousePressedOver(ball2)){
	World.remove(world,ball2)
	tint(255, ball2.Visibility)
	text("thank you", 200, 200)
}
else
{
ball2.display()
}
pop()  
}

	




