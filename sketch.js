/*
Author: Boburjon Azimov
Descriptiion: It's a racing game, you should move without hitting the other cars, you can control the car by pressing left and rigt arrows
and every time you pass 10th car it will accelerate by 10km/hr, try to get as highest score as you can. Good luck
Date: 03/19/2020
collison code borrowed from B.Moren
https://github.com/bmoren/p5.collide2D/blob/master/p5.collide2d.js
*/


//scores array initialized 
let scores = [];
let i = 0;
let score = 0; 
let test = 0;

//game over text object
let txt = {
  _text: "GAME OVER!!!",
  _textScore: "Your score is: ",
  color: 255,
  stroke: 255,
  size: 38,
  size1: 24,
  x: 150,
  y: 300,
  x1: 200,
  y1: 350,
}

let bordL;
let bordR;
function setup() {
  //storing the scores to use it later for //levelup function
  for(let i=0; i<100;i++){
    test += 5;
    scores[i] = test;
 }
  //creating instance of Border class
  bordL = new Borders();
  bordR = new Borders();
  bordR.x = 450;
  createCanvas(canv.w, canv.h);
  background(canv.col);
}
 
function draw() {
  background(canv.col);
  moveLines();
  moveTrees();
  design();
  moveCars();
  levelUp();
  fill(0);
  rect(0,0,600,40);
  displayScore();
}
//design function, drawing the objects, by //calling their draw methods
function design(){
  bordL.draw();
  bordR.draw();
  trees.drawE();
  myCar.draw();
  trees.drawR();
  trees2.drawE();
  trees2.drawR();
}
//car moving function
function moveCars(){
    //if the car3 in initial position randomize //the appearance by changing x value
  if(car1.y<0){
    car1.x = random(155,410);
    //color of cars randomized
    car1.col[1] = random(255);
    car1.col[2] = random(255);
    car1.col[3] = random(255);
  }
  
  if(car1.y===-50 || car2.y===-50 || car3.y===-50){
      score++;
  }
    //if the car3 in initial position randomize //the appearance by changing x value
  if(car2.y<0){
    car2.x = random(155,410);
    car2.col[1] = random(255);
    car2.col[2] = random(255);
    car2.col[3] = random(255);
    //console.log("debuging");
  }
  //if the car3 in initial position randomize //the appearance by changing x value
  if(car3.y<0){
    car3.x = random(155,410);
    car3.col[1] = random(255);
    car3.col[2] = random(255);
    car3.col[3] = random(255);
    //console.log("debuging");
  }
  //moving and drawing the cars, by using cars //methods
  myCar.move();
  car1.draw();
  car1.move();
  car2.draw();
  car2.move();
  car3.draw();
  car3.move();
  //assigning colideCar function for car1, //passing arguement
  let collide = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car1.x, car1.y, car1.w, car1.h);
  //if colide returns true calls the stop function
  if(collide){
    stop();
  }
  //assigning colideCar function for car2, //passing arguement
  let collide2 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car2.x, car2.y, car2.w, car2.h);
  //if colide returns true calls the stop function
  if(collide2){
    stop();
  }
  //assigning colideCar function for car3, //passing arguement
    let collide3 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car3.x, car3.y, car3.w, car3.h);
  //if colide returns true calls the stop function
  if(collide3){
    stop();
  }
}

function collideCar(x, y, w, h, x2, y2, w2, h2) {
  //2d
  //add in a thing to detect rectMode CENTER
  if (x + w >= x2 &&    // r1 right edge past r2 left
      x <= x2 + w2 &&    // r1 left edge past r2 right
      y + h >= y2 &&    // r1 top edge past r2 bottom
      y <= y2 + h2) {    // r1 bottom edge past r2 top
        return true;
  }
  return false;
}
//moves the lines
function moveLines(){
  _line.draw();
  _line.move();
  _line1.draw();
  _line1.move();
}
//stops the game and displays the Game over
//and the final score
function stop(){
    background(0);
    stroke(txt.stroke);
    fill(txt.color);
    textSize(txt.size);
    text(txt._text, txt.x, txt.y);
    textSize(txt.size1);
    noStroke();
    text(`${txt._textScore}${score}`, txt.x1, txt.y1);
     noLoop();
}
//trees moving function
function moveTrees(){
  trees.moveE();
  trees.moveR();
  trees2.moveE();
  trees2.moveR();
}

function displayScore(){
    noStroke();
    fill(txt.color);
    textSize(16);
  //displaying the score
    text(`YOUR SCORE: ${score}`, 50, 20);
  //displaying the speed 
    fill(txt.color);
    textSize(16);
    text(`YOUR SPEED: ${car1.sp}0 km/h `, 400, 20);
}


//this function for increase the speed 
function levelUp(){
  //score is equal to the number in array speed //up
    if(score === scores[i])
    {
      
      console.log("speeding");
      //increment every objects speed by 1
      car1.sp++;
      car2.sp++;
      car3.sp++;
      trees.esp++;
      trees.rsp++;
      trees2.esp++;
      trees2.rsp++;
      _line.sp++;
      _line1.sp++;
      i++;
      score++;
    }
}


