const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png")
}

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;


function setup(){
 createCanvas(2000,1000);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,3000,20);
  platform = new Ground(150, height, 200, 170);

  box1 = new Box(700,940,70,70);
  box2 = new Box(920,940,70,70);
  pig1 = new Pig(810, 900);
  log1 = new Log(810,890,300, PI/2);

  box3 = new Box(700,900,70,70);
  box4 = new Box(920,900,70,70);
  pig3 = new Pig(810, 940);

  log3 =  new Log(810,930,300, PI/2);

  box5 = new Box(810,880,70,70);
  log4 = new Log(760,870,150, PI/7);
  log5 = new Log(870,870,150, -PI/7); 
  
}


function draw(){

  if(playerCount === 2){
    game.update(1);
    console.log("dentro de 4")

    background(backgroundImg);
    Engine.update(engine);
      strokeWeight(4);
      box1.display();
      box2.display();
      ground.display();
      pig1.display();
      log1.display();
  
      box3.display();
      box4.display();
      pig3.display();
      log3.display();
  
      box5.display();
      log4.display();
      log5.display();
  
      platform.display();
          
  }
  
}
