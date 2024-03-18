function setup() {
  createCanvas(710,400);
}

function draw() {
  background(160);
  
  textSize(20);
  textAlign(RIGHT);
  textStyle(NORMAL);
  draw_words(width * 0.25);
  
  textSize(30);
  textAlign(CENTER);
  textStyle(ITALIC);
  draw_words(width * 0.5);
  
  textSize(42);
  textAlign(LEFT);
  textStyle(BOLD);
  textLeading(50);
  draw_words(width * 0.75);
  
}

function draw_words(x)
{
  fill(0);
  text('ichi', x, 80);
  
  fill(65);
  text('ni', x, 150);
  
  fill(190);
  text('san', x, 220);
  
  fill(255);
  text('shi', x, 290);
}