import React from 'react';

interface AuthorImageProps {
  className?: string;
  imgClassName?: string;
}

export const AuthorImage: React.FC<AuthorImageProps> = ({
  className = '',
  imgClassName = '',
}) => {
  return (
    <div className={`relative overflow-hidden bg-[#E4DAD9] ${className}`}>
      <picture className="w-full h-full block">
        <source srcSet="/moderno-autor.webp" type="image/webp" />
        <img
          src="/moderno-autor.webp"
          alt="Rosario Paulino - Autor do livro Antes de Investir, Aprenda Isto"
          className={`w-full h-full object-cover object-top ${imgClassName}`}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      </picture>
    </div>
  );
};
