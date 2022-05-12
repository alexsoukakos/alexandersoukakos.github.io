let a = [];
let txtPts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  input = createInput();
  input.position(20, 65);

  button = createButton("GENERATE");
  button.position(input.x + input.width, 65);
  button.mousePressed(newWord);

  greeting = createElement("h1", "TYPE HERE");
  greeting.position(20, 5);

  noStroke();
}


function draw() {
  background(230, 250, 0);
  scale(1.5, 0.75);
  translate(0, 200);

  rect(350, 647, 240, 25, 30);
  fill(0);
  text("PRESS S TO SAVE YOUR TYPE", 380, 650, 225, 25);
  textSize(20);
  fill(100, 200);

  //im adding a stroke to try out but not invividual
  fill(0);
  a.forEach((e) => {
    rect(e.x + -8, e.y - 65, e.s + 20, e.s * 7);
  });
  fill(150);
  a.forEach((e) => {
    // fill(e.col);
    rect(e.x, e.y, e.s + 5, e.s * -5);
    e.s += e.ss;
    e.t--;
    //how it generates, change values to negatives
    if (e.s > e.m && e.ss > 0) e.ss = 0;
    if (e.t < 0 && e.ss == 0) e.ss = -1;
    if (e.s < 0) {
      e = g(e);
    }
  });
}

function test(w) {
  var word = w;

  textGrap = createGraphics(width, height);
  textGrap.background(255);
  textGrap.fill(0);
  textGrap.textFont("HELVETICA");
  textGrap.textStyle(BOLD);
  textGrap.textSize(min([width, height]) / 5);
  textGrap.textAlign(CENTER, CENTER);
  textGrap.text(word, width / 3, height / 1.5);

  //this is for tha square ammount, can change value
  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x += 2) {
      if (textGrap.get(x, y)[0] == 0) txtPts.push({ x: x, y: y });
    }
  }

  for (var i = 0; i < txtPts.length / 20; i++) {
    a[i] = g({});
  }
}

function g(o) {
  const pt = txtPts[int(random(txtPts.length - 1))];
  o.x = pt.x;
  o.y = pt.y;
  o.t = random(40, 90);
  o.s = 0;
  o.ss = 1;
  o.m = random(10, 10);
  return o;
}

function newWord() {
  test(input.value());
  clear();
  draw();
}

// function keyPressed(){
//    save();
//  }
