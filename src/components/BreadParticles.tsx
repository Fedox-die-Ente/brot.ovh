import { useEffect, useRef } from 'react';

const BREAD_EMOJIS = ['🍞', '🥨', '🥖', '🥐', '🥯', '🫓'];

export function BreadParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{x: number; y: number; speed: number; emoji: string; rotation: number; rotationSpeed: number}> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 2,
        emoji: BREAD_EMOJIS[Math.floor(Math.random() * BREAD_EMOJIS.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4
      });
    }

    function animate() {

      if (!ctx) return console.error('Canvas context is null');
      if (!canvas) return console.error('Canvas is null');

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.font = '20px Arial';
        ctx.fillText(particle.emoji, -10, -10);
        ctx.restore();

        particle.y += particle.speed;
        particle.rotation += particle.rotationSpeed;

        if (particle.y > canvas.height) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />;
}