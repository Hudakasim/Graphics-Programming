let value1 = 0;
let value2 = 0;
let colorValue = 0;
let value3 = 0;
let value4 = 0;
let value5 = 0;
function setup(){
  createCanvas(400, 400);
}

function draw(){
  background('#FFEB3B');
  
  fill(value1);
  rect(25, 25, 50, 50);
  
 
  fill(value2);
  rect(25, 80, 50, 50);
  
  fill(colorValue);
  rect(25, 135, 50, 50);
  
  fill(value3);
  rect(25, 215, 50, 50);
  
   fill(value4);
  rect(25, 270, 50, 50);
  
   fill(value5);
  rect(25, 325, 50, 50);
  textSize(25);
  fill('#FF9800')
  text("moved", 100, 50);
  text("drgged", 100, 105);
  text("pressed", 100, 160);
  text("released", 100, 240);
  text("clicked", 100, 295);
  text("double_clicked", 100, 350);
}
function mouseMoved() { // only moving 
  value1 = value1 + 5;
  if (value1 > 255) {
    value1 = 0;
  }
  return false;
}

function mouseDragged() { // moving and pressing
  value2 = value2 + 5;
  if (value2 > 255) {
    value2 = 0;
  }
}

function mousePressed() { 
  if (colorValue === 0) {
    colorValue = 255;
  } else {
    colorValue = 0;
  }
}

function mouseReleased() {
  if (value3 === 0) {
    value3 = 255;
  } else {
    value3 = 0;
  }
}

function mouseClicked() {
  if (value4 === 0) {
    value4 = 255;
  } else {
    value4 = 0;
  }
}

function doubleClicked() {
  if (value5 === 0) {
    value5 = 255;
  } else {
    value5 = 0;
  }
}