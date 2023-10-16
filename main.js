function preload(){

}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Modelo iniciado!");
}
function draw(){
    image(video, 0, 0, 300,300)
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    console.log("Nariz x = "+results[0].pose.nose.x);
    console.log("Nariz y = "+results[0].pose.nose.y);
}
}
function filtro(){
    tintColor = document.getElementById("cor").value;
}








