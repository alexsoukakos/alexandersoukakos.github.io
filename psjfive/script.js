function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(3);
  stroke('peru');
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     value = 255;
//   }