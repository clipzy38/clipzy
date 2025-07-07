const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let waveOffset = 0;

function drawWaves() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#00c6ff");
  gradient.addColorStop(1, "#0072ff");

  ctx.fillStyle = gradient;
  ctx.beginPath();

  const waveHeight = 40;
  const waveLength = canvas.width / 20;

  ctx.moveTo(0, canvas.height / 2);

  for (let i = 0; i < canvas.width; i++) {
    const y = Math.sin(i * 0.01 + waveOffset) * waveHeight + canvas.height / 2;
    ctx.lineTo(i, y);
  }

  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();

  waveOffset += 0.015;
  requestAnimationFrame(drawWaves);
}

drawWaves();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
