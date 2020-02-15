const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine,world;
var stick1;
var stick2;
var stick3;
var stick4;
 var stick5;
 var stick6;
 var stick7;
 var stick8; 

function setup() {
 var canvas = createCanvas(1200,525);
var stick4 =createSprite(200,375,80,300);
	var stick1 =createSprite(215,375,80,300);
	stick1.shapeColor ="gold";
	var stick2 =createSprite(300,380,75,380);
	stick2.shapeColor ="red";
    var stick3 = createSprite(380,380,75,380);
    stick3.shapeColor = "red";
	var stick4 =createSprite(115,375,80,300);
   stick4.shapeColor ="gold";
	var stick5 = createSprite(460,380,75,380);
	stick5.shapeColor ="red";
	var stick6 =createSprite(540,380,75,380);
    stick6.shapeColor = "red";
	var stick7 = createSprite(620,380,75,300);
    stick7.shapeColor ="gold";
	var stick8 =createSprite(700,380,75,300);
    stick8.shapeColor ="gold";





}

function draw() {
	
  background("black");
 
  drawSprites();
}