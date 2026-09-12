import React from 'react';

interface AuthorImageProps {
  className?: string;
}

export const AuthorImage: React.FC<AuthorImageProps> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}>
      {/* Supports local image /rosario-paulino.jpg if present, otherwise fallback */}
      <img
        src="/rosario-paulino.jpg"
        onError={(e) => {
          // Fallback to stock executive portrait if custom image is not yet uploaded
          (e.currentTarget as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=85';
        }}
        alt="Rosario Paulino - Fundador da Rumos Seguros e Autor"
        className="w-full h-full object-cover object-center"
        referrerPolicy="no-referrer"
      />
      
      {/* Soft gradient bottom vignette for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

      {/* Floating Author Credentials Tag */}
      <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-amber-500/40 rounded-xl p-3 shadow-lg flex items-center justify-between">
        <div>
          <div className="text-white font-extrabold text-sm sm:text-base leading-tight">
            Rosario Paulino
          </div>
          <div className="text-amber-400 text-xs font-semibold">
            Autor & Fundador da Rumos Seguros
          </div>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold tracking-wider uppercase border border-amber-500/40">
          Oficial
        </div>
      </div>
    </div>
  );
};
