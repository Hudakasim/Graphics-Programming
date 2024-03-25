let p1;
let p2;
let checkbox;
let slider;

function setup() {
  createCanvas(200, 200);
  background(200);

  let cnv = select('canvas');
  cnv.style('border', '5px deeppink dashed');

  createButton('1');
  createButton('2');
  createButton('3');

  let buttons = selectAll('button');

  for (let i = 0; i < 3; i += 1) {
    buttons[i].position(0, i * 30);
  }
  
  p1=createP('Hello World');
  p1.position(10, 100);
  p1.mousePressed(rem);
  
  p2=createP('Graphic Programming');
  p2.position(10, 120);
  p2.mousePressed(remAll);
  
  checkbox = createCheckbox(' circle');
  checkbox.position(10, 160);
  checkbox.changed(repaint);
  
  slider = createSlider(0, 255, 200);
  slider.position(0, 180);
  slider.input(repaint2);
}

function draw(){
  
}

function rem(){
  p1.remove();
}

function remAll(){
  removeElements();
}

function repaint() {
  background(200);
  if (checkbox.checked() === true) {
    circle(50, 50, 30);
  }
}

function repaint2() {
  let g = slider.value();
  background(g);
}