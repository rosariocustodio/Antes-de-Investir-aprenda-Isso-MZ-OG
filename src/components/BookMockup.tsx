import React from 'react';
import { Eye, Sparkles } from 'lucide-react';

interface BookMockupProps {
  onPreviewClick?: () => void;
  className?: string;
  showBadge?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BookMockup: React.FC<BookMockupProps> = ({
  onPreviewClick,
  className = '',
  showBadge = true,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-full max-w-[240px]',
    md: 'w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px]',
    lg: 'w-full max-w-[290px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[480px]'
  };

  return (
    <div className={`relative w-full flex flex-col items-center justify-center select-none ${className}`}>
      
      {/* 3D Professional Book Mockup Container */}
      <div
        onClick={onPreviewClick}
        className={`relative w-full cursor-pointer group transition-all duration-300 hover:-translate-y-1 ${sizeClasses[size]}`}
      >
        {/* Official 3D Hardcover Book Mockup Image */}
        <div className="relative w-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] transition-all duration-300 flex items-center justify-center">
          <img
            src="/meu-mockup.png"
            alt="Antes de Investir Dinheiro, Aprenda Isso - Livro Oficial de Rosario Paulino"
            className="w-full h-auto max-h-[560px] object-contain block select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Optional Preview Action */}
      {showBadge && onPreviewClick && (
        <button
          type="button"
          onClick={onPreviewClick}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-400/50 text-amber-300 text-xs font-bold shadow-xl hover:bg-amber-500/20 hover:border-amber-400 transition-all cursor-pointer backdrop-blur-sm"
        >
          <Eye className="w-3.5 h-3.5 text-amber-400" />
          <span>Folhear o Capítulo 1 e Sumário Grátis</span>
          <Sparkles className="w-3 h-3 text-amber-400" />
        </button>
      )}
    </div>
  );
};
