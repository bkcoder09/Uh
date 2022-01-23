status = "";

function preload(){
    my_room = loadImage('Bedroom.jpg');
}

function setup(){
    canvas = createCanvas(500, 450);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("status").innerHTML = "Status - Detecting Objects :D"
}

function modelLoaded(){
    console.log("Model is Loaded :|");
    status = true;
    objectDetector.detect(my_room, gotResult);
}

function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(my_room, 0, 0, 500, 450);

    fill("#000000");
    text("Bed", 150, 125);
    noFill();
    stroke("#FF0000");
    rect(125, 100, 300, 300);

    fill("#000000");
    text("Lamp", 30, 120);
    noFill();
    stroke("#FF0000");
    rect(25, 100, 100, 100);

    fill("#000000");
    text("Lamp", 430, 140);
    noFill();
    stroke("#FF0000");
    rect(425, 125, 70, 100);
}