const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const shapeSelect = document.getElementById('shape');
const colorInput = document.getElementById('color');
const sizeInput = document.getElementById('size');

canvas.addEventListener('click', function(event) {
    const x = event.offsetX; 
    const y = event.offsetY;

    const shapeType = shapeSelect.value; 
    const color = colorInput.value; 
    const size = parseInt(sizeInput.value);

    ctx.fillStyle = color;

    if (shapeType === 'circle') {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    } else if (shapeType === 'square') {
        ctx.fillRect(x - size / 2, y - size / 2, size, size);
    } else if (shapeType === 'triangle') {
        ctx.beginPath();
        ctx.moveTo(x, y - size / 2);  
        ctx.lineTo(x - size / 2, y + size / 2); 
        ctx.lineTo(x + size / 2, y + size / 2); 
        ctx.closePath();
        ctx.fill();
    }
});
