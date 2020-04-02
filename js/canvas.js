// Variables!
var color ="red";
var radius = 15;

var x = 150;
var y = 150;
//You will want to add more

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var drawable = true;


//Listeners!!
//Add a listener for loading the window
window.addEventListener('load', function() {
    console.log("load window");
    canvas.width = 0.75*window.innerWidth;
    canvas.height = 0.75*window.innerHeight;
    ctx.fillStyle = color;
})

//Add a listener for the mouse movement
canvas.addEventListener('mousemove', function(e) {
    x = e.x;
    y = e.y;
    if (drawable) {
        draw();
    }
})

//Add a listener for the touch move
canvas.addEventListener('touchmove', function(e) {
    x = e.x;
    y = e.y;
    if (drawable) {
        draw();
    }
})

//Add a listener for the keydown
document.addEventListener('keydown', function(e) {
    console.log(e.keyCode)
    if(e.keyCode == 66){
        ctx.fillStyle = "#0000FF";
    }
    else if(e.keyCode == 82){
        ctx.fillStyle = "#FF0000";
    }
    else if(e.keyCode == 71){
        ctx.fillStyle = "#00FF00";
    }
    else if(e.keyCode == 89){
        ctx.fillStyle = "#FFFF00";
    }
    draw();

    if(e.keyCode == 38){
        console.log("up");
        drawable = false;
    }
    else if(e.keyCode == 40){
        console.log("down");
        drawable = true;
    }

    if(e.keyCode == 32){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
})

//Add a listener for the color picker
clr.addEventListener('input', function() {
    ctx.fillStyle = document.getElementById("clr").value;
    draw();
})



// Functions!
// I would add a function for draw
function draw(){
    console.log("I am going to draw!");
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.fill();
}
