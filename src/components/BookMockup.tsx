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
  const sizeClasses = {
    sm: 'w-[160px] sm:w-[190px]',
    md: 'w-[240px] sm:w-[270px]',
    lg: 'w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]',
  }[size];

  const webpSrc = imageSrc.endsWith('.webp') ? imageSrc : imageSrc.replace(/\.(png|jpg|jpeg)$/, '.webp');

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <div
        onClick={onPreviewClick}
        className={`relative ${sizeClasses} mx-auto ${onPreviewClick ? 'cursor-pointer' : ''}`}
      >
        <picture className="w-full flex items-center justify-center">
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={imageSrc}
            alt="Antes de Investir, Aprenda Isto"
            width="1024"
            height="1536"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="w-full h-auto object-contain block select-none pointer-events-none drop-shadow-2xl"
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
  );
};
