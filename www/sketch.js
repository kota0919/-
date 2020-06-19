var startX = 0;
var startY = 0;
let startTime;
const oneSec = 1000; //1秒
//const oneMin = (oneSec/3600) / 60;
//const oneHour = oneSec /3600; 
let elapsedTime = 0; //経過時間値
let count = 0; //秒数カウント
let finishTime;

function setup() {
createCanvas(windowWidth,windowHeight);

startTime = millis();
textSize(30);

stroke(255)
background(204);


}
function draw() {
background(204);
text(count + '秒経過',100,500);


const now = millis();

elapsedTime = now - startTime;
if(elapsedTime >= oneSec){
count++;
startTIme = millis();
}
 else if 
 (startX == 360 && startY == 400 ){
   
 }


if (startX == 360 && startY == 400){
  startX = 0;
  startY = 0;
}
//if(){}
//startX =0;
//startY =0;


  text("start",30,20);
  text("GOAL",280,460);
square(startX , startY, 20,20);


stroke(0,0,255);
line (40,40,0,40);   //左側のx,yと右側のx,y
line(40,40,40,70);
line(70,0,70,40)
line(100,70,40,70);
line(100,70,100,30);
line(100,30,140,30);
line(140,30,140,100);
line(140,100,220,100);
line(170,0,170,80);
line(170,80,250,80);
line(220,150,220,100);
line(250,80,250,170);
line(50,170,250,170);
line(220,150,30,150);
line(30,150,30,200);
line(30,200,270,200);
line(80,170,80,180);
line(100,200,100,190);
line(120,170,120,180);
line(140,200,140,190);
line(160,170,160,180);
line(180,200,180,190);
line(200,170,200,180);
line(270,200,270,250);
line(250,170,300,170);
line(300,170,300,280);
line(270,250,200,250);
line(300,280,180,280);
line(180,280,180,220);
line(200,250,200,200);
line(160,200,160,250);
line(180,280,100,280);
line(140,280,140,220);
line(120,200,120,250);
line(120,250,80,250);
line(80,250,80,300);
line(80,300,300,300);
line(320,300,320,100);
line(300,180,300,120);
line(320,100,270,100);
line(270,20,270,150);
line(190,60,270,60);
line(170,40,250,40);
line(170,0,400,0);
line(300,0,300,60);
line(320,100,320,40);
line(340,0,340,300);
line(300,300,300,350);
line(320,320,360,320);
line(320,320,320,300);
line(360,430,360,20);
line(300,350,180,350);
line(320,300,320,380);
line(320,380,200,380);
line(180,350,180,380);
line(200,380,200,400);
line(180,380,80,380);
line(200,400,100,400);
line(80,380,80,420);
line(80,420,340,420);

stroke(126);
square(340,400, 40,30);

fill (220,20,0);




}




function keyPressed(){
  
        if(keyCode == UP_ARROW ){
         startY = startY - 10 ;
        background(255);
         
}
     if(keyCode == DOWN_ARROW ){
        startY = startY + 10;
       background(255);
}
      if(keyCode == LEFT_ARROW ){
        startX = startX - 10;
      background(255);
}
        if(keyCode == RIGHT_ARROW ){   
        startX = startX + 10;
        background(255);
}

  }
