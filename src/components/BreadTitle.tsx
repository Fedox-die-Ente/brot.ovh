export function BreadTitle() {
  return (
    <div className="relative group">
      <h1 className="text-9xl font-black text-amber-800 mb-8 drop-shadow-lg relative z-10">
        brot.ovh
      </h1>
      <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 
                    opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500 z-0" />
    </div>
  );
}