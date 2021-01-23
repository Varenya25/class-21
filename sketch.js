var movingRect, fixedRect ;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 100);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(600, 200, 50, 50);
  movingRect.shapeColor = "green";
  object1 = createSprite(500, 200, 50, 50);
  object1.shapeColor = "pink";
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (isTouching (movingRect, object1)) {
    movingRect.shapeColor = "red";
    object1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    object1.shapeColor = "green";
  }

  drawSprites();
}
