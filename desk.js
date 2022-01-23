my_desk = "";
status = "";
objects = [];

function preload(){
    my_desk = loadImage('Desk.jpg');
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
    objectDetector.detect(my_desk, gotResult);
}

function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        objects = result;
    }
}

function draw(){
    image(my_desk, 0, 0, 500, 450);

    if(status != ""){
        for(i=0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status - Detecting Objects :D";
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}