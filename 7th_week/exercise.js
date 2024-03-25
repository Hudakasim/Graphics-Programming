let a = 0;
let b = 0;
let c = 0;
let slider1, slider2, slider3;

function setup()
{
  createCanvas(720, 400);
  
  slider1 = createSlider(0, 225, 0, 1);
  slider1.position(10, 20);
  let h4 = createElement('h4', "red");
  h4.position(180, 0);
  slider1.input(update_colors);
  
  slider2 = createSlider(0, 225, 0, 1);
  slider2.position(10, 40);
  let h44 = createElement('h4', "green");
  h44.position(180, 20);
  slider2.input(update_colors);
  
  slider3 = createSlider(0, 225, 0, 1);
  slider3.position(10, 60);
  let h444 = createElement('h4', "blue");
  h444.position(180, 40);
  slider3.input(update_colors);
}

function draw()
{
    background(a, b, c);
}

function update_colors()
{
  a = slider1.value();
  b = slider2.value();
  c = slider3.value();
}