function setup() 
{
  createCanvas(720, 400);
}

function draw() 
{
  background(102);
  
  push();
  translate(width * 0.2, height * 0.5); // after u draw the shape move it t another coordinants
  star(0, 0, 5, 70, 3);
  pop();
  
  push();
  translate(width * 0.5, height * 0.5);
  star(0, 0, 80, 100, 40);
  pop();
  
  push();
  translate(width * 0.8, height * 0.5);
  star(0, 0, 30, 70, 5);
  pop();
}

function star(x, y, radius1, radius2, npoints) 
{
  let angle = TWO_PI / npoints;
  let half_angle = angle / 2.0;
  
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle)
    {
      let sx = x + cos(a) * radius2;
      let sy = x + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + half_angle) * radius1;
      sy = y + sin(a + half_angle) * radius1;
      vertex(sx, sy);
    }
  endShape(CLOSE);
}