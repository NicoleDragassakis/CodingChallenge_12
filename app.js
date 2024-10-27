
//TASK TWO

const canvas = document.getElementById("appCanvas");
const ctx = canvas.getContext('2d'); //For a 2d canvas drawing context
ctx.fillStyle = "#ff0000"; //I want to add white later #FFFFFF
ctx.fillRect(0,0, canvas.width, canvas.height);

// event listeners for mouse events to handle drawing

canvas.addEventListener('mousedown', (event) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
});
canvas.addEventListener('mousemove', (event) => {
    if (drawing) {
        ctx.strokeStyle = color;
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
});
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.closePath();
});
canvas.addEventListener('mouseout', () => {
    drawing = false;
    ctx.closePath();
});


