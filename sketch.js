
var newX=200



function setup() {
  createCanvas(displayWidth,displayHeight);
for(var i=0; i<25; i++){
  spaceship1=new SpaceShip(newX)
  newX=spaceship1.width + newX + 300
}
  


}

function draw() {
  background(255,255,255);  
  drawSprites();
}