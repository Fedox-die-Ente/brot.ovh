import { useEffect, useState } from 'react';

type Bread = {
  id: number;
  x: number;
  y: number;
  rotation: number;
  emoji: string;
  speed: number;
};

export function BreadRain() {
  const [breads, setBreads] = useState<Bread[]>([]);
  const emojis = ['🍞', '🥨', '🥖', '🥐', '🥯', '🫓'];

  useEffect(() => {
    const interval = setInterval(() => {
      const newBread: Bread = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: -50,
        rotation: Math.random() * 360,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        speed: 2 + Math.random() * 3 // Randomized speed between 2-5
      };
      
      setBreads(prev => [...prev, newBread]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animation = requestAnimationFrame(function animate() {
      setBreads(prev => 
        prev
          .map(bread => ({
            ...bread,
            y: bread.y + bread.speed,
            rotation: bread.rotation + 2,
          }))
          .filter(bread => bread.y < window.innerHeight)
      );
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {breads.map(bread => (
        <div
          key={bread.id}
          className="absolute text-4xl"
          style={{
            left: `${bread.x}px`,
            top: `${bread.y}px`,
            transform: `rotate(${bread.rotation}deg)`,
            willChange: 'transform',
          }}
        >
          {bread.emoji}
        </div>
      ))}
    </div>
  );
}