var frect,mrect;

function setup() {
  createCanvas(800,400);
 
  frect = createSprite(400,200,50,50);
  mrect = createSprite(200,200,50,50);
  mrect.velocityX=2;
}

function draw() {
  background(255,255,255);  

  
  

  if(mrect.x-frect.x<=(mrect.width+frect.width)/2 && frect.x-mrect.x<=(mrect.width+frect.width)/2 &&
  mrect.y-frect.y<=(mrect.height+frect.height)/2 && frect.y-mrect.y<=(mrect.height+frect.height)/2)
  {
    mrect.velocityX=-1*mrect.velocityX;
    frect.shapeColor="red";
  }
    else
    {
      mrect.shapeColor="green";
      frect.shapeColor="green";
    }
  drawSprites();
}