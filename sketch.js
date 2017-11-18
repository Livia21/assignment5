var mySong;
var mySong2;
var x = 450;
var y = 100;
var w = 250;
  
var a = 250;
var b = 600;
var r = 150;  


var mycolorList = [
    '#c7a6cd',
    '#add8d5',
    '#a43e90',
    '#1d1d1b'];

function preload(){
    mySong = loadSound('assets/1.mp3');
    mySong2 = loadSound('assets/2.mp3');
}

function setup() {
     createCanvas(800, 800);
     background(mycolorList[0]);
}

function draw() {
if (mouseX > x && mouseX < x+w && mouseY > y && mouseY< y+w) {
    if (mySong2.isPlaying() == false) {
        mySong2.play();
    }
    fill(mycolorList[1]);
} 
else {
    fill(mycolorList[2]); 
    mySong2.pause();
}
     noStroke();
     rect(x,y,w,w);
    
     noFill();
     strokeWeight(10);
     stroke(mycolorList[3]);
     rect(500,150,w,w);
     
if(dist(a,b,mouseX,mouseY)< r) {
    //se la distanza fra punto(a,b) e la posizione del mouse è minore del raggio allora....
    if (mySong.isPlaying() == false) {
        mySong.play();
    }   
     fill(mycolorList[2]);
}
else {
    fill(mycolorList[1]); 
    mySong.pause();
}
    noStroke();
    ellipse(a,b,r*2);
}




