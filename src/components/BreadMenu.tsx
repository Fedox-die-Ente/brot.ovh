import { Sandwich, Cookie, Croissant, Pizza } from 'lucide-react';

export function BreadMenu() {
  return (
    <div className="flex gap-8 mb-12">
      {[
        { Icon: Sandwich, text: "Stulle" },
        { Icon: Cookie, text: "Keks" },
        { Icon: Croissant, text: "Hörnchen" },
        { Icon: Pizza, text: "Flachbrot" }
      ].map(({ Icon, text }, i) => (
        <div
          key={i}
          className="group flex flex-col items-center gap-2 cursor-pointer"
        >
          <div className="p-4 bg-amber-100 rounded-full shadow-lg group-hover:bg-amber-200 transition-colors">
            <Icon 
              className="w-12 h-12 text-amber-700 group-hover:scale-110 transition-transform" 
            />
          </div>
          <span className="font-bold text-amber-800">{text}</span>
        </div>
      ))}
    </div>
  );
}