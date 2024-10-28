
//TASK TWO

const canvas = document.getElementById("appCanvas");
const ctx = canvas.getContext('2d');
let drawing = false;
let tool = 'line';
let startX, startY;
let color = "#000000";
let shapes= []; //this will store shapes which will allow the canvas to retain the previous edits
ctx.fillStyle = "#ff0000";
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener('mousedown', (event) => {
    drawing = true;
    startX = event.offsetX;
    startY = event.offsetY;
});

canvas.addEventListener('mousemove', (event) => {
    if (drawing) {
        drawShape(event.offsetX, event.offsetY, true); // Draw the current shape
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.closePath();
});

canvas.addEventListener('mouseout', () => {
    drawing = false;
    ctx.closePath();
})

//TASK THREE

document.querySelectorAll('input[name="tool"]').forEach((input) => {
    input.addEventListener('change', (event) => {
        tool = event.target.value;
    });
});

function drawShape(currentX, currentY, isPreview) {
    if (isPreview) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        shapes.forEach(shape => shape()); 
    }
    
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

    if (!isPreview) {
        shapes.push(() => drawShape(currentX, currentY, false)); //pushes the shapes in order to store them
    }
}

//TASK FOUR
const colorPicker = document.getElementById('colorPicker');
const clearCanvasBtn = document.getElementById('clearCanvas');

colorPicker.addEventListener('input', (event) => {
    color = event.target.value;
});

clearCanvasBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
