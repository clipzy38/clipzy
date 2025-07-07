const canvas = document.getElementById('blobCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Blob {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = 40 + Math.random() * 60;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.color = `hsla(${Math.random() * 360}, 70%, 60%, 0.25)`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // If blob moves off screen, reset it
    if (
      this.x < -100 || this.x > canvas.width + 100 ||
      this.y < -100 || this.y > canvas.height + 100
    ) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 30;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

const blobs = [];
for (let i = 0; i < 15; i++) {
  blobs.push(new Blob());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  blobs.forEach(blob => {
    blob.update();
    blob.draw();
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
