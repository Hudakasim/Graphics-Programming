let d = 70;
let p1 = d; // 70
let p2 = p1 + d; // 140
let p3 = p2 + d; // 210
let p4 = p3 + d; // 280

function setup()
{
  createCanvas(500, 500);
  background(0); // black
}
function draw()
{
  // Draw box
  stroke(200); // gray
  line(p3, p3, p2, p3); // connect point (280, 280) to point (210, 280)
  line(p2, p3, p2, p2); 
  line(p2, p2, p3, p2);
  line(p3, p2, p3, p3);
  
  // Draw points
  stroke(255); // white
  point(p1, p1);
  point(p1, p3);
  point(p2, p4);
  point(p3, p1);
  point(p4, p2);
  point(p4, p4);
}