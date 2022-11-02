let boxWidth, boxHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(5000, 5000)
  frameRate(30);
  background((round(random()) * 255));
}

function draw() {
  strokeWeight(random(3));

  if (random() < 0.1) {
    for (let i = 0; i < random(1000,10000); i++) {
      point(random(width), random(height))
    }
  }

  // if (random() < 0.4) {
  //   strokeWeight(random(10, 50));
  //   let y = random(height);
  //   line(0, y, width, y);
  // }

    strokeWeight(random(3));

  boxWidth = random(width / 20, width / 2);
  boxHeight = random(height / 20, height / 2);

  for (let y = 0; y <= height; y += boxHeight) {
    for (let x = 0; x <= width; x += boxWidth) {
      if (random() < 0.1) {
        rotate(random(PI))
      };

      // Draw stippled blocks
      if (random() < 0.7) {
        stipple(
          x,
          x + 2 * random(boxWidth / 3),
          y,
          y + 2 * random(boxHeight / 3),
          random(10000)
        );
      }

      //  Draw coloured blocks
      if (random() < 0.01) { // Originally 0.01
        noStroke();
        fill(round(random()) * 255); // Black or white?
        rect(x, y, x + random(boxWidth / 3),
          y + random(boxHeight / 3));
      }

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

      if (random() < 0.005) {
        if (random() < 0.5) {
          // Decide fill colour (50%)
          fill(round(random()) * 255);
        } else {
          noFill();
        }
        push();
        translate(random(width), random(height));
        rotate(random(PI));
        rect(0, 0, width, height);
        pop();
      }

      // Draw perpendicular lines
      if (random() < 0.05) {
        push();
        strokeWeight(random(1, 50))
        line(x, 0, x, height);
        line(0, y, width, y);
        pop();
      }

      // Draw psuedotext
      if (random() < 0.4) {
        strokeCap(PROJECT);
        strokeWeight(random(5));
        stroke(round(random()) * 255);
        let xsize = pow(random(10), 2);
        let ysize = pow(random(10), 2);
        minMarks = 3;
        maxMarks = random(20);
        spaces = 0.4;
        for (let i = 0; i < random(50); i++) {
          let n = x + xsize + i * xsize * random(-1, 1);
          let m = y + ysize + i * ysize;;
          push();
          translate(n, m);
          drawCharacter(xsize, ysize, minMarks, maxMarks, spaces);
          if (random() < 0.5) {
            noFill();
            circle(n, m, xsize);
          }
          pop();
        }
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

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   background((round(random()) * 255));
// }

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
