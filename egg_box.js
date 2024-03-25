function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background('gray');
  for (let i = 20; i <= width; i += 40)
  {
    for(let j = 20; j <= height; j += 40)
      {
        fill('yellow');
        stroke('blue');
        circle(i, j, 40);
      }
  }
}
