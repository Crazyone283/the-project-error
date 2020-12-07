var wall, thickness;
var bullet;
var speed, weight;

function setup() {
  createCanvas(1600, 400); 
  speed = random(223, 321)
  weight = random(30, 52)
  thickness = random(22, 83)
  bullet=createSprite(50, 200, thickness, 50)
  bullet.velocityX = speed;
}

function hascollided(lbullet, lwall)
{
   bulletrightedge=lbullet.x + lbullet.width;
   wallleftedge=lwall.x;
   if (bulletrightedge>=wallleftedge)
   {
       return true 
   } 
   return false
}

function draw() {
  background(255,255,255); 
  bullet.velocityX = speed;
  if(hascollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }
    
    if(damage<10)
    {
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}