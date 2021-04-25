var hr, hrAngle; 
var min, minAngle;
var sec, secAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);

}

function draw() {
  background(0); 

  translate(200, 200);
  rotate(-90);

  //calculating time using predefined funcitons 
  hr = hour();
  min = minute();
  sec = second();

  strokeWeight(8);
  noFill();

  //SECONDS
  //the second arc
  stroke(0, 0, 255);
  secAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secAngle);

  //the second hands
  push();
  rotate(secAngle);
  stroke(0, 0, 255);
  line(0, 0, 100, 0);
  pop();

  //MINUTES
  //the minute arc
  stroke(0, 255, 0);
  minAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minAngle);

  //the minute hands
  push();
  rotate(minAngle);
  stroke(0, 255, 0);
  line(0, 0, 75, 0);
  pop();

  //HOURS
  //the hour arc
  stroke(255, 0, 0);
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hrAngle);

  //the hour hands
  push();
  rotate(hrAngle);
  stroke(255, 0, 0);
  line(0, 0, 50, 0);
  pop();

 
}