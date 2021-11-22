function setup() {
  createCanvas(700, 700, WEBGL);
}

function draw() {
  background(0);
  noFill();
  stroke(20, 110, 200);
  rotateX(frameCount * 0.009);
  rotateY(frameCount * 0.009);
  box(100, 100, 100);
}

