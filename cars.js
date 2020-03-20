//driving car
let myCar = {
  x: 400,
  sp: 5,
  y: 500,
  w: 40,
  h: 55,
  draw: function(){
    noStroke();
    fill(0,0,200);
    rect(this.x, this.y, this.w, this.h);
    stroke("white");
    line(this.x+10, this.y, this.x+10, this.y+55);
    line(this.x+30, this.y, this.x+30, this.y+55);
    fill(0,0,255);
    stroke(0);
    rect(this.x+5, this.y+10,this.w-10, this.h-20);
  },
  //this is move function
  move: function(){
      //while right arrow keyispreesed move the car right and car is not of the road
      if((keyIsPressed) && (keyCode===39) &&     (this.x+this.w!==width-150)){
    this.x+=this.sp;
  }
  ////while right arrow keyispreesed move the car to the left and car is not out of the road
  if((keyIsPressed) && (keyCode===37) && (this.x!==150)){
    this.x-=this.sp;
  }
  }
}
//enemies car1
let car1 = {
  x: 170,
  sp: 8,
  y: -50,
  w: 40,
  h: 55,
  col: [255, 0, 0],
  draw: function(){
    fill(this.col[0], this.col[1], this.col[2]);
    rect(this.x, this.y, this.w, this.h);
  },
  move: function(){
    //move the car1
      this.y+=this.sp;
    //if the car1 is out of the canvas bring it back to the top
  if(this.y>height){
    //car1 y value initialize to -50; 
    this.y=-50;
    }
  }
}
//enemies car2
let car2 = {
  x: 330,
  sp: 8,
  y: -250,
  w: 40,
  h: 55,
  col: [255, 0, 0],
  draw: function(){
    fill(this.col[0], this.col[1], this.col[2]);
    rect(this.x, this.y, this.w, this.h);
  },
  move: function(){
    //move the car2
      this.y+=this.sp;
    //if the car2 is out of the canvas bring it back to the top
  if(this.y>height){
    this.y=-50;
    }
  }
}

let car3 = {
  x: 330,
  sp: 8,
  y: -550,
  w: 40,
  h: 55,
  col: [255, 0, 0],
  draw: function(){
    fill(this.col[0], this.col[1], this.col[2]);
    rect(this.x, this.y, this.w, this.h);
  },
  move: function(){
    //move the car3
      this.y+=this.sp;
    //if the car3 is out of the canvas bring it back to the top
  if(this.y>height){
    this.y=-50;
    }
  }
}