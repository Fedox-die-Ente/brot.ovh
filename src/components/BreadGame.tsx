import { useState } from 'react';

export function BreadGame() {
  const [score, setScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setScore(prev => prev + 1);
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="text-center mb-8 select-none">
      <div className="bg-amber-100/60 backdrop-blur rounded-lg p-4 inline-block">
        <p className="text-amber-900 font-bold mb-2">Klick das Brot! Score: {score}</p>
        <div 
          onClick={handleClick}
          className={`text-8xl cursor-pointer transition-transform duration-200 inline-block select-none
                     ${isAnimating ? 'scale-150' : 'hover:scale-125'}`}
        >
          🍞
        </div>
      </div>
    </div>
  );
}