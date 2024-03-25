let checkbox1;
let checkbox2;
let checkbox3;
let radio1;
let mySelect;
function setup()
{
  createCanvas(400, 400);
  
  /* *************** CREATE CHECKBOX *************/
  checkbox1= createCheckbox('checkbox1');
  checkbox1.position(150, 20);
  checkbox2= createCheckbox('checkbox2', true); // true = it will be checked by default
  checkbox2.position(150, 40);
  checkbox3= createCheckbox('checkbox3');
  checkbox3.position(150, 60);
  
  /* *************** CREATE RADIO *************/
  radio1=createRadio();
  radio1.position(150, 100);
  radio1.size(200);
  radio1.option('Male');
  radio1.option('Female');
  radio1.option('Animal');
  radio1.selected('Male');
  
  /* *************** CREATE SELECT *************/
  mySelect = createSelect();
  mySelect.position(150, 140);
  mySelect.option('Istanbul', 'one');
  mySelect.option('Ankara', 'two');
  mySelect.option('İzmir', 'three');
  mySelect.option('Bursa', 'four');
  mySelect.selected('Istanbul');
}

function draw()
{
  background(220);
  
  if (checkbox1.checked())
    checkbox3.checked(true); 
  else
    checkbox3.checked(false);
  
  print(radio1.selected());
  
  let c = mySelect.selected();
  print(c);
}