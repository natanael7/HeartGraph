// SETTINGS
"use strict";
let size = 400;

// VARIABLES

// FUNCTIONS
function pixel(x,y){
  push();
  stroke(255, 0, 0)
  circle(x,y,1);
  pop();
}
function graphLines(){
  let i;
  line(-150, 0, 150, 0);
  line(0, -150, 0, 150);
  triangle(150, 0, 145, 2, 145, -2);
  triangle(0, -150, -2, -145, 2, -145);
  for (i=-149;i<150; i++)
    if (i%10==0){
      line(i,2,i,-2)
      line(2,i,-2,i)
      textSize(5);
      text(i, i, 10);
      text(-i, 10, i);
      fill(0, 0, 0);
    }
}
function xFormula(p){
  return (16*sin(p)*sin(p)*sin(p))
}
function yFormula(p){
  return (13*cos(p)-5*cos(2*p)-2*cos(3*p)-cos(4*p))
}
function graph(){
   let i;
   for (i=-150; i<150; i++){
     let x=xFormula(i);
     let y=-yFormula(i);
     pixel(x,y);
   }
}
function functionFormula(){
  textSize(12);
  text('x=16sin(t)^3', -150, -180);
  text('f(x)=13cos(t)-5cos(2t)-2cos(3t)-cos(4t)', -150, -160);
  fill(0, 0, 0);
}
// KEY_EVENTS

// MAIN 
function setup() {
  createCanvas(size, size);
  background(123);
  frameRate(60);
}
function draw() {
  background(220);
  translate(200, 200);
  graphLines();
  graph(); 
  functionFormula();
}