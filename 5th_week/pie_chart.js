let data = [35, 10, 45, 30, 60, 30, 75, 75]; // Example data
 
function setup() {
  createCanvas(720, 400); // Set canvas size
  noLoop(); // Stops draw() from looping
  noStroke(); // No outline for the slices
}
 
function draw() {
  background('#00BCD4');
  
  let lastAngle = 0; // Initialize last angle
  const total = data.reduce((acc, val) => acc + val, 0); // Calculate total sum of data
  
  for (let i = 0; i < data.length; i++) {
    const gray = map(i, 0, data.length - 1, 0, 225); // Map i to a color hue
    fill(gray); // Set fill color for slice
    
    // Calculate the angle for this slice
    let angle = (data[i] / total) * TWO_PI;
    
    // Draw the slice
    arc(width / 2, height / 2, 300, 300, lastAngle, lastAngle + angle);
    
    // Update the lastAngle for the next slice
    lastAngle += angle;
  }
}