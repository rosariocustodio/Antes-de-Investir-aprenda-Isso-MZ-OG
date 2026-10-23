import React from 'react';

interface BookMockupProps {
  onPreviewClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  imageSrc?: string;
  showBadge?: boolean;
}

export const BookMockup: React.FC<BookMockupProps> = ({
  onPreviewClick,
  className = '',
  size = 'lg',
  imageSrc = '/mockup principal.webp',
}) => {
  // Proporções editoriais equilibradas para Mobile e Desktop
  const sizeClasses = {
    sm: 'w-[170px] sm:w-[195px]',
    md: 'w-[260px] sm:w-[300px] max-w-[88vw]',
    lg: 'w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[470px]',
  }[size];

  const webpSrc = imageSrc.endsWith('.webp') ? imageSrc : imageSrc.replace(/\.(png|jpg|jpeg)$/, '.webp');

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      <div
        onClick={onPreviewClick}
        title={onPreviewClick ? "Clique para folhear a amostra oficial" : undefined}
        className={`relative ${sizeClasses} mx-auto ${onPreviewClick ? 'cursor-pointer' : ''} group`}
      >
        {/* Sombra premium projetada por trás do livro */}
        <div 
          className="absolute inset-y-3 inset-x-4 sm:inset-y-5 sm:inset-x-6 bg-black/80 blur-xl sm:blur-2xl rounded-2xl pointer-events-none translate-y-3 sm:translate-y-5 translate-x-1.5" 
          aria-hidden="true" 
        />

        {/* Renderização nítida do livro à frente da sombra */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <picture className="w-full flex items-center justify-center">
            <source srcSet={webpSrc} type="image/webp" />
            <img
              src={imageSrc}
              alt="Antes de Investir, Aprenda Isto - Livro Oficial de Rosario Paulino"
              width="1024"
              height="1536"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              className="w-full h-auto object-contain block select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (!target.src.includes('mockup%20principal')) {
                  target.src = '/mockup principal.webp';
                }
              }}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

