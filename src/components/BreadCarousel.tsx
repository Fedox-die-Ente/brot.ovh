import { useState, useEffect } from 'react';

const BREAD_FACTS = [
  "Ein Deutscher isst durchschnittlich 56kg Brot pro Jahr! 🍞",
  "Es gibt über 3.000 Brotsorten in Deutschland! 🥖",
  "Das erste Brot wurde vor über 10.000 Jahren gebacken! 🫓",
  "Die größte Brezel der Welt wog 842 kg! 🥨",
  "Brot und Brötchen sind deutsches Kulturerbe! 🥐",
  "Warum kann Brot keine Geheimnisse bewahren? Weil es immer alles ausplaudert – Scheibe für Scheibe! 🍞",
  "Was sagt ein Brötchen zum anderen beim Picknick? „Lass uns krümeln!“ 🥐",
  "Warum ging das Toastbrot ins Fitnessstudio? Es wollte nicht länger so weich sein! 🥴",
  "Wie nennt man ein trauriges Brot? Toast im Regen. 😢",
  "Warum liebt Brot Partys? Weil es immer auf 'ne Scheibe eingeladen wird! 🎉",
  "Was macht ein Brot im Fitnessstudio? Es pumpt Eisen – oder besser gesagt Körner! 💪",
  "Warum durfte der Laib Brot nicht Auto fahren? Es war ständig überladen! 🚗",
  "Was sagt der Bäcker zu seinem frechen Brot? „Noch so ein Spruch, und du wirst getoastet!“ 😄",
  "Warum hat das Croissant schlechte Laune? Es fühlt sich immer verdreht! 🥐",
  "Wie begrüßt man ein Brot? „Na, backfrisch dabei?“ 😊",
  "Warum spielt das Baguette so schlecht Verstecken? Es ist einfach zu auffällig! 😏",
  "Was ist das Lieblingsspiel von Brot? Memory – es liebt es, sich zu erinnern! 🧩",
  "Warum konnte das Toast nicht schlafen? Es hatte Angst, wieder gebuttert zu werden! 🛏️🔥",
];


export function BreadCarousel() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % BREAD_FACTS.length);
        setIsVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-amber-100/80 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-2xl mx-auto
                    transform hover:scale-105 transition-all duration-300">
      <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-2xl font-bold text-amber-900">{BREAD_FACTS[index]}</p>
      </div>
    </div>
  );
}