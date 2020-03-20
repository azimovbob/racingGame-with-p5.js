
//Trees object

let trees = {
    ex: 92,
    ey: 20,
    ew: 30,
    eh: 75,
    esp: 5,
   //left Tree head drawing
    drawE: function (){
      noStroke();
        fill("#1e704a");
        ellipse(this.ex, this.ey, this.ew, this.eh);
    },
  //moving the trees head
    moveE: function(){
      this.ey+=this.esp;
      if(this.ey>height){
        this.ey = -100;
        this.ry = -70;
      }
    },
    rx: 85,
    ry: 50,
    rw: 15,
    rh: 50,
    rsp: 5,
   //left tree trunk
    drawR: function(){
      noStroke();
      fill("#3d1d10");
      rect(this.rx, this.ry, this.rw, this.rh);
    },
      moveR: function(){
      this.ry+=this.rsp;
    }
}

let trees2 = {
    ex: 488,
    ey: 220,
    ew: 30,
    eh: 75,
    esp: 5,
  //right tree head
    drawE: function (){
      noStroke();
        fill("#1e704a");
        ellipse(this.ex, this.ey, this.ew, this.eh);
    },
  //right tree head is moving
    moveE: function(){
      this.ey+=this.esp;
      if(this.ey>height){
        this.ey = -100;
        this.ry = -70;
      }
    },
    rx: 481,
    ry: 250,
    rw: 15,
    rh: 50,
    rsp: 5,
  //right tree trunk 
    drawR: function(){
      noStroke();
      fill("#3d1d10");
      rect(this.rx, this.ry, this.rw, this.rh);
    },//right tree trunk is moving
      moveR: function(){
      this.ry+=this.rsp;
    }
}