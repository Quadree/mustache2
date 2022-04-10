noseX=0;
noseY=0;
function preload(){
mustcaheImage=loadImage("https://i.postimg.cc/DzDfMqB6/mustache-student-math-favorite-for-friday-the-the-1.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);

poseNet.on('pose', gotPoses);

}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y
        console.log("nose x ="+ noseX);
        console.log("nose y ="+ noseY);
    }
    
}
function modelLoaded(){
    console.log("Model is Loaded");
}

function draw(){
image(video,0,0,300,300);
image(mustcaheImage,noseX-15,noseY,40,40);
}

function takesnapshot(){
    save("myimage.png");
}