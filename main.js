pic = "";
status = "";
objects = [];

function preload(){
    pic = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(700, 450);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects =D";
}

function modelLoaded(){
    console.log(" The Model Is Loaded ");
    status = true;
    objectDetector.detect(pic, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}

function draw(){
    image(pic, 0, 0, 700, 450);

    if(status != ""){
        for(i=0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "Status - Detecting Object =D";
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label+" "+percent+"%", objects[i].x+15, objects[i].y+15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}