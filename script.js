// INTRO FINISH
setTimeout(() => {
  document.body.classList.add("loaded");
}, 2000);

// PARTICLE NETWORK
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 40; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#0b234d20";
    ctx.fill();

    particles.forEach(q => {
      let dx = p.x - q.x;
      let dy = p.y - q.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = "#0b234d10";
        ctx.stroke();
      }
    });
  });

  requestAnimationFrame(draw);
}

draw();
