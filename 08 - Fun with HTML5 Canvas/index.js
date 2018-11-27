const canvas       = document.querySelector('#draw'),
      context      = canvas.getContext('2d'),
      lineWidthMax = 60;

let isDrawing       = false,
    lastX           = 0,
    lastY           = 0,
    hue             = 0,
    lineWidth       = 1,
    lineWidthGrowth = true;

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = 'hsl(0, 100%, 50%)';
context.lineJoin    = 'round';
context.lineCap     = 'round';
context.lineWidth   = 0;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mousemove', draw);

function startDrawing(event) {
  isDrawing = true;
  setCoordinates(event);
}

function draw(event) {
  if (!isDrawing) {
    return;
  }

  // Set for current stroke
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.lineWidth   = lineWidth;

  // Draw
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();

  // Update for next stroke
  setCoordinates(event);
  hue++;
  if (lineWidth <= 0 || lineWidth >= lineWidthMax) {
    lineWidthGrowth = !lineWidthGrowth;
  }
  lineWidth += lineWidthGrowth ? 1 : -1;
}

function setCoordinates(event) {
  [lastX, lastY] = [event.offsetX, event.offsetY];
}
