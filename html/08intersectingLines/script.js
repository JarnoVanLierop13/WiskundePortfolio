
// #08 intersectingLines
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,100,15,"blue");
let B = new Point(600,200,15,"blue");
let C = new Point(800,100,15,"yellow");
let D = new Point(300,200,15,"yellow");

let S = new Point(250,250,5,"red");

let l = new LinearFunction(1,1);//line
let m = new LinearFunction(1,1);//line

A.drag();
B.drag();
C.drag();
D.drag();

function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
  
    l.letTwoPointsDefineLine(A,B);
    m.letTwoPointsDefineLine(C,D);
  

    S.x = l.intersection(m).x;
    S.y = l.intersection(m).y;
  
    l.draw(context);
    m.draw(context);
  
    A.draw(context);
    B.draw(context);
    C.draw(context);
    D.draw(context);
    S.draw(context);

    A.print(context, "A");
    B.print(context, "B");
    C.print(context, "C");
    D.print(context, "D");
    S.print(context, "S");

    
  
  }
  
  animate();