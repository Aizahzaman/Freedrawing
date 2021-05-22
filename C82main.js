var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

mouse_events="";
var lastpositionofx;
var lastpositionofy;
color="red";


canvas.addEventListener("mousedown",MouseDown);

function MouseDown(e){
    mouse_events="mousedown";
    color=document.getElementById("input").value;
}

canvas.addEventListener("mouseup",MouseUp);

function MouseUp(e){
    mouse_events="mouseup";
}
    
canvas.addEventListener("mouseleave",MouseLeave);

function MouseLeave(e){
    mouse_events="mouseleave";
}

canvas.addEventListener("mousemove",MouseMove);

function MouseMove(e){
    
    current_mouse_x=e.clientX-canvas.offsetLeft;
    current_mouse_y=e.clientY-canvas.offsetTop;
    
    if (mouse_events=="mousedown") {

        ctx.beginPath(); 
        ctx.strokeStyle = color; 
        ctx.lineWidth = 5;
        
        ctx.moveTo(lastpositionofx,lastpositionofy);
        ctx.lineTo(current_mouse_x,current_mouse_y);
        ctx.stroke();

    }

lastpositionofx=current_mouse_x;
lastpositionofy=current_mouse_y;

}










function clearcanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}