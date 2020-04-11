var mrect; 
var frect ;

function setup() {
  createCanvas(800,400);
 mrect = createSprite(400,200,50,50);
 frect = createSprite(600,200,70,100)
mrect.shapeColor = "blue";
mrect.debug = true;
frect.shapeColor = "blue";
frect.debug = true;
mrect.velocityX = 5;
}

function draw() {

  background(0);  
if(mrect.x-frect.x<mrect.width/2+frect.width/2 &&
frect.x-mrect.x<mrect.width/2+frect.width/2 &&
mrect.y-frect.y<mrect.height/2+frect.height/2 &&
frect.y-mrect.y<mrect.height/2+frect.height/2){
  mrect.shapeColor = "yellow";
  frect.shapeColor = "yellow";
mrect.velocityX = mrect.velocityX * (-1);
}
else {
 // mrect.shapeColor = "blue";
  frect.shapeColor = "blue";
}





  drawSprites();
}