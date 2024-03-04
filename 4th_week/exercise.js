function setup()
{
  createCanvas(400, 400);
  background(127);
}

function draw()
{
  let a = 20;
  for(let i = 0; i < 10; i++)
    {
      circle(a, (width / 2), 40);
      a+=40;
    }
  let b = 20;
  for(let i = 0; i < 10; i++)
    {
      circle((height / 2), b, 40);
      b+=40;
    }
}