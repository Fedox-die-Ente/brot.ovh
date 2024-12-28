import { useEffect, useState } from 'react';

type BouncingBread = {
  id: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  rotation: number;
};

export function BouncingBreads() {
  const [breads, setBreads] = useState<BouncingBread[]>([...Array(20)].map((_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    velocityX: (Math.random() - 0.5) * 10,
    velocityY: (Math.random() - 0.5) * 10,
    rotation: Math.random() * 360,
  })));

  useEffect(() => {
    const gravity = 0.5;
    const bounce = -0.7;

    const animate = () => {
      setBreads(prevBreads =>
          prevBreads.map(bread => {
            let newX = bread.x + bread.velocityX;
            let newY = bread.y + bread.velocityY;
            let newVelocityX = bread.velocityX;
            let newVelocityY = bread.velocityY + gravity;

            if (newX > window.innerWidth - 50) {
              newX = window.innerWidth - 50;
              newVelocityX *= bounce;
            }
            if (newX < 0) {
              newX = 0;
              newVelocityX *= bounce;
            }
            if (newY > window.innerHeight - 50) {
              newY = window.innerHeight - 50;
              newVelocityY *= bounce;

              if (Math.random() < 0.5) {
                newVelocityY = (Math.random() * -50) - 5;
              }
            }

            return {
              ...bread,
              x: newX,
              y: newY,
              velocityX: newVelocityX,
              velocityY: newVelocityY,
              rotation: bread.rotation + 5,
            };
          })
      );
    };

    const interval = setInterval(animate, 20);
    return () => clearInterval(interval);
  }, []);

  return (
      <>
        {breads.map(bread => (
            <div
                key={bread.id}
                className="fixed text-7xl transform transition-transform"
                style={{
                  left: `${bread.x}px`,
                  top: `${bread.y}px`,
                  transform: `rotate(${bread.rotation}deg)`,
                }}
            >

              {['🍞', '🥨', '🥖', '🥐', '🥯', '🫓'][bread.id % 6]}
            </div>
        ))}
      </>
  );
}
