let boxWidth, boxHeight;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
  // noLoop();

}

function draw() {
  boxWidth = random(width/50, width/2);
  boxHeight = random(height/50, height/2);

  for (let y = 0; y <= height; y += boxHeight) {
    for (let x = 0; x <= width; x += boxWidth) {
      if (random() > 0.9) {
        stipple(
          x - random(boxWidth / 3),
          x + random(boxWidth / 3),
          y - random(boxHeight / 3),
          y + random(boxHeight / 3),
          random(1000)
        )}
    }
  }





}

function stipple(xmin, xmax, ymin, ymax, dots) {
  if (random() > 0.5) {
    stroke('black');
  } else {
    stroke('white');
  }
  for (let i = 0; i < dots; i++) {
    let x = random(xmin, xmax);
    let y = random(ymin, ymax);
    point(x, y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
