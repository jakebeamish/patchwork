let boxWidth, boxHeight;

let xsize = 10
let ysize = 10
let margin = 300;

let minMarks = 2;
let maxMarks = 10;
let spaces = 0.3;

let rows = 40;
let cols = 40;




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

  boxWidth = random(width / 10, width / 2);
  boxHeight = random(height / 10, height / 2);

  for (let y = 0; y <= height; y += boxHeight) {
    for (let x = 0; x <= width; x += boxWidth) {

      // Draw stippled blocks

      // if (random() > 0.5) {
      //   stipple(
      //     x,
      //     x + 2 * random(boxWidth / 3),
      //     y,
      //     y + 2 * random(boxHeight / 3),
      //     random(10000)
      //   );
      // }

      //  Draw coloured blocks
      //
      // if (random() < 0.01) { // Originally 0.01
      //   noStroke();
      //   fill(round(random()) * 255); // Black or white?
      //   rect(x, y, x + random(boxWidth / 3),
      //     y + random(boxHeight / 3));
      // }

      // Draw circles

      if (random() < 0.01) { // Originally 0.01
        // Decide to fill or not (50%)
        if (random() < 0.5) {
          // Decide fill colour (50%)
          fill(round(random()) * 255);
        } else {
          noFill();
        }
        circle(x, y, boxWidth * 2)
      }

      // Draw perpendicular lines

      if (random() < 0.01) {
        line(x, 0, x, height);
        line(0, y, width, y);
      }

      // Draw psuedotext

      if (random() < 0.2) {
        strokeCap(PROJECT);
        strokeWeight(2);
        stroke(round(random()) * 255);
        let xsize = random(40);
        let ysize = random(40);

        push();
        translate(x, y);
        drawCharacter(xsize, ysize);
        pop();
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

function drawCharacter(xsize, ysize) {
  if (random() < spaces) return;
  for (let i = 0; i < random(minMarks, maxMarks); i++) {
    line(
      floor(random() * 3 - 1) * xsize,
      floor(random() * 3 - 1) * ysize,
      floor(random() * 3 - 1) * xsize,
      floor(random() * 3 - 1) * ysize
    )
  }
}
