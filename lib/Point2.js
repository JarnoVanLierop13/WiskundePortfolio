class Point {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw(context){
    context.beginPath();
    context.fillStyle = this.color;
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }

  set position(vector) {
    this.x = vector.dx;
    this.y = vector.dy;
  }

  distanceToOtherPoint(p) {
    let dx = this.x - P.x;
    let dy = this.y - P.y;
    return Math.sqrt(dx*dx + dy+dy);
  }

  drag(){
    let mousePosition;
    console.log('point is gonna be dragged');
    document.addEventListener('mousedown',(evt)=>{
      mousePosition.x = evt.clientx;
      mousePosition.y = evt.clienty;
      console.log(mousePosition);
    });
  }
 get position() {
   let ans = new vector2d(this.x, this,y);
   return ans;
 }
}
