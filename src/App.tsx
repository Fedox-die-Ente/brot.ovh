import { BreadParticles } from './components/BreadParticles';
import { BreadTitle } from './components/BreadTitle';
import { BreadCarousel } from './components/BreadCarousel';
import { BreadGame } from './components/BreadGame';
import { BreadRain } from './components/BreadRain';
import { BouncingBreads } from './components/BouncingBread';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      <BreadParticles />
      <BreadRain />
      <BouncingBreads />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl mx-auto text-center">
          <BreadTitle />
          
          <div className="space-y-12">
            {/*<BreadGame />*/}
            <BreadCarousel />

            <div className="mt-12 bg-white/80 backdrop-blur p-8 rounded-3xl shadow-2xl 
                          transform hover:rotate-2 transition-all duration-500 hover:scale-105">
              <p className="text-4xl font-black text-amber-900 mb-6">
                WILLKOMMEN IN DER BROT-DIMENSION! 🍞
              </p>
              <p className="text-2xl text-amber-800 font-bold">
                Hier dreht sich alles um's Brot! 🤪
                <br />
                BROT IST LEBEN! BROT IST LIEBE! 🥨
              </p>
            </div>

            <div className="flex gap-4 justify-center mt-8">
              {Array.from({ length: 7 }).map((_, i) => (
                <span 
                  key={i}
                  className="text-5xl animate-bounce"
                  style={{ 
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: '1s'
                  }}
                >
                  {['🍞', '🥨', '🥖', '🥐', '🥯', '🫓'][i]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}