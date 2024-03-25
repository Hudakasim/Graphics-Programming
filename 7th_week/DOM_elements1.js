function setup() {
  createCanvas(400, 400);
  
  /* *************** CREATE ELEMENTS *************/
  let h1 = createElement('h1','merhaba');
  h1.style('color', 'deeppink');
  h1.position(10,10);
  let h5 = createElement('h5', 'hello');
  h5.style('color', 'blue');
  h5.position(13,10);
  
  /* ************ CREATE DIV & SPAN **************/
   let div1 = createDiv('this is a div');
   div1.position(10, 100);
   div1.size(80,20);
   div1.style('border', '2px solid #FFEB3B');
  
  let div2 = createDiv();
  div2.position(10, 150);
  let s1 = createSpan('this');
  let s2 = createSpan('is');
  s2.style('color', 'deeppink');
  let s3 = createSpan('a spans');
  s1.parent(div2);
  s2.parent(div2);
  s3.parent(div2);
  div2.style('border', '2px solid #00BCD4');
  s1.style('border', '1px solid #FFEB3B');
  s2.style('border', '1px solid #FFEB3B');
  s3.style('border', '1px solid #FFEB3B');
  
  /* *************** CREATE P & A *************/
  
  let p1 = createP('Tell me a story.');
  p1.position(10, 200);
  p1.style('font-family', 'Tohama');
  p1.style('font-size', '10pt');
  p1.style('color', 'blue');
  
  let a1 = createA('http://p5js.org/', 'Click here', '_blank');
  a1.position(10, 250);
}

function draw()
{
  background(220);
}