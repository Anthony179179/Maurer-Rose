//Maurer Rose: (sin(nk), k) (k = 0, d, 2d, 3d ..., 360d), where d is a positive integer

/*
If d = 36, for all the powers of 9 (1, 9, 81...) a regular pentagon will be displayed + 20?
All animations with pentagons are very cool
*/

let n = 0; //rose petals (can be n if odd, or 2n if even)
let d = 0; //d is the angle in degrees
let dSlider;
let nSlider;
let nInput;

let v = 1;

let a;
let b;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  dSlider = createSlider(0, 180, 0);
  nSlider = createSlider(0, 50, 2);

  /*let revButton = createButton("Reveal Values");
  revButton.position(50, 100);
  anButton.mousePressed(paragraph);*/

  

  //Toggle Animation Button
  let anButton = createButton("Toggle Animation");
  anButton.position(900, 450);
  anButton.mousePressed(startAnimation);

  function startAnimation() {
    v++;
  }

  //Input for d (angle in degrees)
  let dInput = createInput('');
  dInput.position(900, 300);
  dInput.size(300, 35);
  dInput.attribute("placeholder", "Angle (d)")

  dInput.input(dInputEvent);

  function dInputEvent() {
    if (this.value() != '') {
      a = this.value();
    }
    else {
      a = null;
    }
  }

  //Input for n (number of petals)
  let nInput = createInput('');
  nInput.position(900, 350);
  nInput.size(300, 35);
  nInput.attribute("placeholder", "Petals (n)")
  nInput.input(nInputEvent);

  function nInputEvent() {
    if (this.value() != '') {
      b = this.value();
    }
    else {
      b = null;
    }
  }

}

function draw() {
  background(30);
  translate(width / 2, height / 2);

  noFill();

  //d value
  if (a != null) {
    d = a;
  }
  else {
    if (v % 2 == 0) {
      d += 0.001;
    }
    else {
      d = dSlider.value();
    }
  }

  //n value
  if (b != null) {
    n = b;
  }
  else {
    if (v % 2 == 0) {
      n += 0.001;
    }
    else {
      n = nSlider.value();
    }
  }

  //Main Rose
  beginShape();
  stroke(255, 255, 255, 255);
  strokeWeight(1);
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 150 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();

  //Individual Petals
  noFill();
  beginShape();
  stroke(200, 100, 175, 150);
  strokeWeight(2);
  for (let i = 0; i < 361; i++) {
    let k = i;
    let r = 150 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);

    
  }
  endShape();

  let o = dSlider.value();
  paragraph = createP(o);
  paragraph.remove();
}