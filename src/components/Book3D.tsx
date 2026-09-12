import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Sparkles } from 'lucide-react';

interface Book3DProps {
  onPreviewClick?: () => void;
  interactive?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Book3D: React.FC<Book3DProps> = ({
  onPreviewClick,
  interactive = true,
  size = 'md'
}) => {
  const [rotateY, setRotateY] = useState(-18);
  const [rotateX, setRotateX] = useState(8);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateY(-18 + (x / rect.width) * 16);
    setRotateX(8 - (y / rect.height) * 12);
  };

  const handleMouseLeave = () => {
    setRotateY(-18);
    setRotateX(8);
  };

  const dimensions = {
    sm: 'w-[220px] h-[330px]',
    md: 'w-[280px] sm:w-[320px] h-[420px] sm:h-[480px]',
    lg: 'w-[320px] sm:w-[360px] h-[480px] sm:h-[540px]',
  }[size];

  return (
    <div
      className="relative perspective-1000 flex flex-col items-center justify-center py-4 cursor-pointer select-none group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onPreviewClick}
    >
      {/* Golden halo glow behind the book */}
      <div className="absolute w-72 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-amber-500/20 transition-all duration-700" />

      {/* 3D Book Container */}
      <motion.div
        className={`relative ${dimensions} transform-style-3d transition-transform duration-300 ease-out`}
        style={{
          transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(-1deg)`,
        }}
      >
        {/* Book Cover Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1528] via-[#0E1A30] to-[#070D18] rounded-r-md rounded-l-xs border-y border-r border-amber-500/30 overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-7 text-center">
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:12px_12px] opacity-40 pointer-events-none" />

          {/* Spine light sheen reflection */}
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 via-white/10 to-transparent pointer-events-none" />

          {/* Top Title Group */}
          <div className="relative z-10 pt-2">
            <h1 className="text-white font-extrabold tracking-tight text-3xl sm:text-4xl leading-[1.08] drop-shadow-md">
              <span className="block text-slate-100 font-extrabold">ANTES DE</span>
              <span className="block text-slate-100 font-black tracking-wide">INVESTIR</span>
              <span className="block text-slate-100 font-extrabold">DINHEIRO,</span>
              <span className="block text-amber-300 tracking-wider">APRENDA ISSO</span>
            </h1>

            {/* Subtle Divider Line */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-3" />

            <p className="text-amber-200/90 font-semibold tracking-widest text-[11px] sm:text-[12px] uppercase">
              Um Guia Prático
            </p>
            <p className="text-amber-400/90 font-bold tracking-widest text-[10px] sm:text-[11px] uppercase">
              Para Começar Certo
            </p>
          </div>

          {/* Bottom Illustration Graphic (Compass + Growth Chart) */}
          <div className="relative z-10 flex items-end justify-between px-2 pt-4 pb-2">
            
            {/* Antique Golden Compass */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              <div className="absolute inset-0 rounded-full border-4 border-amber-400 bg-gradient-to-br from-amber-600/30 to-amber-950/80 shadow-[0_0_15px_rgba(217,119,6,0.3)] flex items-center justify-center">
                {/* Compass Dial markings */}
                <div className="w-full h-full rounded-full border border-amber-300/40 relative flex items-center justify-center">
                  <span className="absolute top-1 text-[9px] font-bold text-amber-200">N</span>
                  <span className="absolute bottom-1 text-[8px] font-bold text-amber-200/80">S</span>
                  <span className="absolute left-1 text-[8px] font-bold text-amber-200/80">O</span>
                  <span className="absolute right-1 text-[8px] font-bold text-amber-200/80">L</span>
                  
                  {/* Golden Needle with green center jewel */}
                  <div className="w-1 h-14 bg-gradient-to-t from-amber-200 via-amber-500 to-emerald-400 rounded-full rotate-45 transform origin-center shadow-md flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 border border-amber-200 shadow-sm" />
                  </div>
                </div>
              </div>
              {/* Compass Ring hanger on top */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-amber-400 -z-10" />
            </div>

            {/* Rising Golden Financial Growth Chart */}
            <div className="relative flex items-end gap-1.5 pb-1">
              <div className="w-2 h-4 bg-amber-400/50 rounded-t-xs" />
              <div className="w-2 h-7 bg-amber-400/65 rounded-t-xs" />
              <div className="w-2 h-10 bg-amber-400/80 rounded-t-xs" />
              <div className="w-2 h-14 bg-amber-400 rounded-t-xs relative">
                {/* Rising Golden Arrow */}
                <div className="absolute -top-3 -right-2 text-amber-300 font-bold text-xs transform -rotate-12 animate-pulse">
                  ↗
                </div>
              </div>
            </div>

          </div>

          {/* Author Footnote on Cover */}
          <div className="relative z-10 pt-1 text-[10px] text-slate-400/80 uppercase tracking-widest border-t border-slate-700/50">
            Rosario Paulino • 1ª Edição
          </div>

        </div>

        {/* Book Spine (Left 3D side) */}
        <div
          className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#040810] via-[#0b172a] to-[#040810] border-l border-amber-500/20 origin-left flex items-center justify-center shadow-inner"
          style={{
            transform: 'rotateY(-90deg)',
          }}
        >
          <span
            className="text-[10px] sm:text-[11px] font-bold tracking-widest text-amber-200/80 whitespace-nowrap -rotate-90 select-none uppercase"
          >
            Antes de Investir Dinheiro, Aprenda Isso • Rosario Paulino
          </span>
        </div>

        {/* Realistic Book Pages Edges (Right side) */}
        <div
          className="absolute right-0 top-1 bottom-1 w-6 bg-gradient-to-r from-amber-50 via-slate-100 to-amber-100 origin-right border-y border-r border-slate-300 shadow-md"
          style={{
            transform: 'rotateY(90deg) translateZ(0px)',
            backgroundImage: 'repeating-linear-gradient(0deg, #f8fafc, #f8fafc 1px, #e2e8f0 1px, #e2e8f0 2px)'
          }}
        />

        {/* Realistic Book Pages Top Edge */}
        <div
          className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-slate-200 to-amber-50 origin-top shadow-inner"
          style={{
            transform: 'rotateX(90deg)',
            backgroundImage: 'repeating-linear-gradient(90deg, #f8fafc, #f8fafc 1px, #e2e8f0 1px, #e2e8f0 2px)'
          }}
        />

      </motion.div>

      {/* Ground Projection Shadow */}
      <div
        className="w-48 sm:w-60 h-7 bg-black/60 rounded-full blur-md -mt-3 -z-10 transform scale-y-50"
      />

      {/* Interactive Floating Badge */}
      {interactive && onPreviewClick && (
        <motion.button
          type="button"
          onClick={onPreviewClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/40 text-amber-300 text-xs font-semibold shadow-lg hover:bg-amber-500/20 hover:border-amber-400 transition-all backdrop-blur-sm"
        >
          <Eye className="w-3.5 h-3.5 text-amber-400" />
          <span>Toque para espiar o Capítulo 1 por dentro</span>
          <Sparkles className="w-3 h-3 text-amber-400 animate-spin" />
        </motion.button>
      )}
    </div>
  );
};
