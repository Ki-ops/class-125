noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",getPoses);
}

function modelLoaded(){
    console.log("poseNet had been initialized");
}

function getPoses(results){
 if(results.length>0){
    console.log(results)
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    differecne=floor(leftWristX-rightWristX);
 }
}
function draw() {
    background("black");
    fill("purple");
    square(noseX,noseY,difference);
}