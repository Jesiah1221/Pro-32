const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon1
var ground1
var ground2
var slingshot
var gameState = "onSling";
var box1
var box2
var box3
var box4
var box5
var box6
var box7
var box8
var box9
var box10
var box11
var box12
var box13
var box14
var box15
var box16
var box17
var box18

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
    world = engine.world;

    polygon1 = new polygon(250,450,40,40);

    ground1 = new Ground(300,600,200,5)

    ground2 = new Ground(600,550,200,5)

    box1 = new box(300,580,20,40);
    box2 = new box(280,580,20,40);
    box3 = new box(320,580,20,40);
    box4 = new box(260,580,20,40);
    box5 = new box(340,580,20,40);
    box6 = new box(300,540,20,40);
    box7 = new box(280,540,20,40);
    box8 = new box(320,540,20,40);
    box9 = new box(300,500,20,40);
    box10 = new box(600,530,20,40);
    box11 = new box(620,530,20,40);
    box12 = new box(580,530,20,40);
    box13 = new box(560,530,20,40);
    box14 = new box(640,530,20,40);
    box15 = new box(580,510,20,40);
    box16 = new box(560,510,20,40);
    box17 = new box(620,510,20,40);
    box18 = new box(600,470,20,40);



    slingshot = new SlingShot(polygon1.body,{x:250, y:450})

    //polygon1 = Bodies.circle(50,200,20);
    World.add(world, polygon1);


    Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  //strokeWeight(4);
  polygon1.display();
  ground1.display();
  ground2.display();
  slingshot.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  


  drawSprites();
 
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){

       Matter.Body.setPosition(polygon1.body, {x:200, y:50})
       slingshot.attach(polygon1.body);
    }
}
