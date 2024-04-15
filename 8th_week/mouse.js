let x = 50;
let y = 50;
function setup(){
  createCanvas(400, 400);
  // frameRate(10);
}

function draw(){
  background('rgb(84,163,84)');
  stroke(0);
  strokeWeight(5);
  line(mouseX, 0, mouseX + 30, 50);
  
  stroke(255);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
  strokeWeight(10);
  stroke('#03A9F4');
  point(200, mouseY);
  
  
    if (x > 100) {
     x -= 2;
   } else if (x < 100) {
     x += 2;
   }
   x += floor(movedX / 5);
   fill(255);
   rect(x, 50, 50, 50);
  
  if (y > 100) {
    y -= 2;
  } else if (y < 100) {
    y += 2;
  }
  y += floor(movedY / 5);
  fill(255);
  rect(50, y, 50, 50);
  
  
  fill(0,225,0);
  strokeWeight(3);
  stroke('green');
  if (mouseIsPressed === true) {
    if (mouseButton === LEFT) {
      ellipse(50, 190, 50, 50);
    }
    if (mouseButton === RIGHT) {
      rect(25, 170, 50, 50);
    }
    if (mouseButton === CENTER) {
      triangle(23, 75, 50, 20, 78, 75);
    }
  }
}