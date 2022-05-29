function preload(){

}

function setup(){
    canvas=createCanvas(500,400);
    canvas.position(70,200);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,500,400);
    stroke(168,10,10);
    Fill(168,10,10)
    colour(136,36,83)

}

function take_snapshot(){
    save("frame.png");
}