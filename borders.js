
//Border class
class Borders{
  //border constructor
  constructor(){
  this.x = 0;
  this.y = 0;
  this.h = 600;
  this.w = 150;
  this.col = "#03fca1";
  }
  //draw function
  draw(){
      stroke(0);
      strokeWeight(3);
      fill(this.col);
      rect(this.x, this.y, this.w, this.h);
  }
}