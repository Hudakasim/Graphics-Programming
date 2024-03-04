function setup()
{
  createCanvas(210, 100);
  background(127);
}

function draw()
{
  ellipse(20, 50, 33, 33); // left circle
  
  push(); // start new drawing state (state 1)
  
  strokeWeight(10);
  fill(204, 153, 0);
  ellipse(60, 50, 33, 33); // left middle circle
  
  push(); // start another new drawing state (state 2)
  
  stroke(0, 102, 153);
  ellipse(105, 50, 33, 33); // right middle circle
  
  pop(); // restore previous state (state 2)
  ellipse(150, 50, 33, 33);
  
  pop(); // restore original state (state 1)
  ellipse(190, 50, 33, 33);
}