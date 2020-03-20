
//broken yellow lines
let _line = {
  x: 300,
  y:0,
  x2: 300,
  y2: 50,
  sp: 5,
  col: "#dbd109",
  draw: function(){
      strokeWeight(5);
      stroke("#dbd109");
      line(this.x, this.y, this.x2, this.y2);
  },
  //moving function
  move: function(){
    this.y+=this.sp;
    this.y2+=this.sp;
    if(this.y>height){
      this.y=-50;
      this.y2=100;
    }
  }
}
//second broken lines
let _line1 = {
  x: 300,
  y: 300,
  x2: 300,
  y2: 350,
  sp: 5,
  col: "#dbd109",
  draw: function(){
      strokeWeight(5);
      stroke("#dbd109");
      line(this.x, this.y, this.x2, this.y2);
  },
  //moving the second line
  move: function(){
    this.y+=this.sp;
    this.y2+=this.sp;
    if(this.y>height){
      this.y=-50;
      this.y2=100;
    }
  }
}

