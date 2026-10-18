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
  imageSrc = '/ebook-hero.webp',
}) => {
  // Proporções editoriais equilibradas para Mobile e Desktop
  const sizeClasses = {
    sm: 'w-[170px] sm:w-[195px]',
    md: 'w-[230px] sm:w-[265px] max-w-[80vw]',
    lg: 'w-full max-w-[340px] lg:max-w-[390px] xl:max-w-[420px]',
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
                if (!target.src.includes('mockup-hero-OG.png') && !target.src.includes('mockup-footer-OG.webp') && !target.src.includes('ebook-hero') && !target.src.includes('ebook-footer')) {
                  target.src = '/hero-mockup1.png';
                }
              }}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

