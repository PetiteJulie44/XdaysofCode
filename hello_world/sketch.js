function setup() {
  createCanvas(400, 400);
  background(000);
}

function draw() {
  if (mouseIsPressed) {
    fill(100);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}