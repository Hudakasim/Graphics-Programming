let fillVal=0;
let value = 0;
let val=0;
let diameter = 50;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  fill(245, 123, 158);
  textSize(50);
  text(key, 33, 65);
  
  /*if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }*/
  
  for (let i = 20; i < height / 4; i = i + 100){
    for(let j = 20; j < width; j = j + 100){
      rect(j, i, 50, 50);
    }
  }
  
  fill(fillVal);

  for (let i = height /4; i < height / 2; i = i + 100){
    for(let j = 20; j < width; j = j + 100){
      rect(j, i, 50, 50);
    }
  }
  
  fill(value);
  for (let i = height / 2; i < height * 0.75; i = i + 100){
    for(let j = 20; j < width; j = j + 100){
      rect(j, i, 50, 50);
    }
  }
  fill(val);
  for (let i = height *0.75; i < height; i = i + 100){
    for(let j = 20; j < width; j = j + 100){
      rect(j, i, 50, 50);
    }
  }
  if (keyIsDown(107) || keyIsDown(187)) {
    diameter += 1;
  }
   if (keyIsDown(109) || keyIsDown(189)) {
    diameter -= 1;
  }
  clear();
  fill(255, 0, 0);
  ellipse(200, 200, diameter, diameter);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    fillVal = 'pink';
  } else if (keyCode === DOWN_ARROW) {
    fillVal = 0;
  }
  return false;
}

function keyReleased() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
  return false;
} 

function keyTyped() {
  if (key === 'a') {
    val = 'red';
  } else if (key === 'b') {
    val = 0;
  }
   return false;
}