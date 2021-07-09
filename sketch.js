
function setup() {
  let cnv=createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function preload(){
  img=loadImage("malo.png");
}

function draw() {
  background(0);
  translate(width/2, height/2);
  image(img,-100,-100,200,200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke("#07EDB0");
  noFill();

  let secondAngle = map(sc, 0, 60, 0, 360);
  fill(255,255,255,15);
  arc(0, 0, 300, 300, 0, secondAngle,PIE);

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);
  stroke("#03634A");
  let hourAngle = map(hr % 12, 0, 12, 0, 360);

  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke("#1EAFC2");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("#07EDB0");
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();
 
  let millisecond = millis();
  let millisecondAngle = map(millisecond, 0,1000,0,360)
  push();
  stroke("#8A817C");
  arc(-230,200,100,100,0,millisecondAngle);
  pop();
  

  stroke(255);
  point(0, 0);
}
