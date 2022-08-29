var monst1, monst2, monst3;
var player;
var wall1, wall2, wall3, wall4;
var gameState = 0;

function setup() {
  createCanvas(800,800);
  player = createSprite(400,400,40,40);
  wall1 = createSprite(20,60,300,300);
  wall2 = createSprite(760,60,300,300);
  wall3 = createSprite(12,720,300,300);
  wall4 = createSprite(760,720,300,300);
}

function draw() {
  background('black');
  
  createMonstUp();
  createMonstDown();
  createMonstLeft();
  createMonstRight();
  
  drawSprites();
}

function createMonstUp() {
  if (frameCount % 280 == 0) {
  monst1 = createSprite(random(250,550),20,40,40);
  monst1.velocityY = 5;
  monst1.shapeColor = "red";
}
  if (frameCount %  350 == 0) {
    fill('blue');
    monst2 = createSprite(random(250,550),40,40,40);
    monst2.shapeColor = "blue";
  }
}

function createMonstDown() {
  if (frameCount % 230 == 0) {
    monst1 = createSprite(random(250,550),780,40,40);
    monst1.velocityY = -5;
    monst1.shapeColor = "red";
}
  if (frameCount % 400 == 0) {
    monst2 = createSprite(random(250,550),760,40,40);
    monst2.shapeColor = "blue";
}
}

function createMonstLeft() {
  if (frameCount % 150 == 0) {
    monst1 = createSprite(20,random(250,550),40,40);
    monst1.velocityX = 5;
    monst1.shapeColor = "red";
  }
  if (frameCount %  300 == 0) {
    monst2 = createSprite(40,random(250,550),40,40);
    monst2.shapeColor = "blue";
  }
}

function createMonstRight() {
  if (frameCount % 340 == 0) {
    monst1 = createSprite(780,random(250,550),40,40);
    monst1.velocityX = -5;
    monst1.shapeColor = "red";
  }
  if (frameCount %  250 == 0) {
    monst2 = createSprite(760,random(250,550),40,40);
    monst2.shapeColor = "blue";
  }
}