var wall, thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  bullet=createSprite(400, 200, 50, 50);
  bullet.shapeColor=("white");
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=10;
}

function draw() {
  background("red");  
  
  drawSprites();
  if(hasCollided(bullet,wall)){
   
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
  }
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x =bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
}