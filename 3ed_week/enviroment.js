let b = 9;
function setup() {
  createCanvas(600, 200);
  print("hello");
  let a = 5; // let --> work in the scoop
  print(a);
  // pc screen's W & H
  print(displayWidth);
  print(displayHeight);
  // preview windows's W & H
  print(windowWidth);
  print(windowHeight);
  // canvas's W & H
  print(width);
  print(height);
}

function draw() {
  background(220, 141, 155);
  describe("hello", LABEL);
  describe("merhaba", FALLBACK);
  print(b);
  cursor(WAIT);
  // noCursor();
  if (focused === true){
    background(225,0,0);
  }
}

function windowResized ()
{
  resizeCanvas(width - 10,height - 10);
}