let slider1;
let myPicker;
let button1;
let p2;
let flag = true;
let myInput;

function setup()
{
  createCanvas(400, 400);
  /* *************** CREATE SLIDER *************/
  slider1 = createSlider(0, 255, 0, 0);
  slider1.position(150, 20);
  slider1.size(100);
  
  /* *************** CREATE COLORPICKER *************/
  myPicker = createColorPicker('deeppink');
  myPicker.position(150, 80);
  
  /* *************** CREATE COLORPICKER *************/
  button1 = createButton('Click me');
  button1.position(150, 140);
  button1.mousePressed(printValue);
  p2 = createP('Tell me a story.');
  p2.position(180, 145);

  /* *************** CREATE INPUT *************/
  myInput = createInput();
  myInput.position(150, 200);
  myInput.size(100);
  
  /* *************** CREATE IMG *************/
  let img = createImg(
    'https://p5js.org/assets/img/asterisk-01.png',
    'The p5.js magenta asterisk.');
  img.position(150, 260);
  img.size(50,50);
  
  /* *************** CREATE FILEINPUT *************/
   let inputFile = createFileInput(displayInfo);
  inputFile.position(150, 320);
}

function draw()
{
  background(220);
  
  // print(slider1.value());
  
  // print(myPicker.value());
  
  // print(myInput.value());
}

function printValue()
{
  if (flag)
  {
    p2.hide();
    flag=false;
  }
  else
  {
    p2.show();
    flag=true;
  }
}

function displayInfo(file)
{
  background(220);

  // Display the p5.File's name.
  text(file.name, 200, 160, 80, 40);

  // Display the p5.File's type and subtype.
  text(`${file.type}/${file.subtype}`, 200, 200);

  // Display the p5.File's size in bytes.
  text(file.size, 200, 220);
}