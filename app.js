
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

//TASK THREE

let drawing = false;
let tool = 'line';
let startX, startY;

document.querySelectorAll('input[name="tool"]').forEach((input)=>{
input.addEventListener('change', (event) => {
    tool = event.target.value;
});
});

function drawShape(currentX, currentY) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    if (tool === 'line') {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    } else if (tool === 'rectangle') {
        ctx.beginPath();
        ctx.strokeRect(
            Math.min(startX, currentX),
            Math.min(startY, currentY),
            Math.abs(currentX - startX),
            Math.abs(currentY - startY)
        );
        ctx.stroke();
    } else if (tool === 'circle') {
        ctx.beginPath();
        const radius = Math.sqrt((currentX - startX) ** 2 + (currentY - startY) ** 2);
        ctx.arc(startX, startY, radius, 0, Math.PI * 2);
        ctx.stroke();
    }
}


