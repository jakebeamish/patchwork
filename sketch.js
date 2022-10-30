let boxWidth, boxHeight;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(3);
  background((round(random()) * 255));
  // background('black');
  // noLoop();
  // blendMode(DIFFERENCE)

}

function draw() {
  strokeWeight(random(3));

  boxWidth = random(width/10, width/2);
  boxHeight = random(height/10, height/2);

  for (let y = 0; y <= height; y += boxHeight) {
    for (let x = 0; x <= width; x += boxWidth) {
      if (random() > 0.5) {
        stipple(
          x,
          x + 2 * random(boxWidth / 3),
          y,
          y + 2 * random(boxHeight / 3),
          random(10000)
        );
      } if (random() < 0.01) {
        noStroke();
        fill(round(random()) * 255);
        rect(x, y, x + random(boxWidth / 3),
        y + random(boxHeight / 3));
      } if (random() < 0.01) {
        if (random() < 0.5) {
        noFill();
      }
        circle(x, y, boxWidth * 2)
      }
      if (random() < 0.1) {
        line(x, 0, x, height);
        line(0, y, width, y);
      }
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
  resizeCanvas(windowWidth, windowHeight);
    background((round(random()) * 255));
  // background('black');
}
