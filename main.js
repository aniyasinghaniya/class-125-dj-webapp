song=""

function prelaod(){
  song=loadSound("music.mp3")

}

scorerightW=0;
scoreleftW=0;

rightwristX=0;
rightwristY=0;

leftwristX=0;
leftwristY=0;


function setup(){
  canvas=createCanvas(400,300)
  canvas.center()
  webcam=createCapture(VIDEO)
  webcam.hide()

  poseNet=ml5.poseNet(webcam,modelLoaded);
  poseNet.on('pose',gotPoses)
}
function modelLoaded(){
 console.log("mode Loaded succesfully")
}

function gotPoses(){
  
}

function draw(){
 image(webcam,0,0,400,300)
}