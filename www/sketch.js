var startX = 0;
var startY = 0;


function setup() {
createCanvas(windowWidth,windowHeight);


}
function draw() {
  text("start",10,10);
  text("GOAL",340,660)
square(startX , startY, 1,1);
line (60,60,0,60);   //左側のx,yと右側のx,y
stroke(126);
//if()       //もしある色に当たったらGOALになる

fill(20);

}


function keyPressed(){
  
        if(keyCode == UP_ARROW ){
         startY = startY - 5 ;
        background(255);
         
}
     if(keyCode == DOWN_ARROW ){
        startY = startY + 5;
       background(255);
}
      if(keyCode == LEFT_ARROW ){
        startX = startX - 5;
      background(255);
}
        if(keyCode == RIGHT_ARROW ){   
        startX = startX + 5;
        background(255);
}

  }
