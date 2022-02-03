//starts here p5.js Commands
function preload(){

}
function setup(){
  var canvas =createCanvas(600,700);
  canvas.position(110,500);
  video=createCapture(VIDEO);
  video.hide();
  tint_color="";

}

function draw(){
    image(video,150,200,400,300);
    tint(tint_color);
    line(10,30 ,650, 30);
    
  stroke("blue");
  strokeWeight(9);
  line(30,10 ,30, 650);
  line(10,30 ,650, 30);
  stroke("blue");
  strokeWeight(9);
  line(30,30,650,30)

}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;       
}
function take_snapshot(){
    save("my_selfie.png");
}


//ends here