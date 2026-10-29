import React from 'react';
import { CHECKOUT_URL } from '../config/checkout';

export interface CtaButtonProps {
  variant?: 'dark-section' | 'light-section';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  children?: React.ReactNode;
  text?: string;
  id?: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  variant = 'dark-section',
  size = 'md',
  href = CHECKOUT_URL,
  onClick,
  className = '',
  children,
  text,
  id,
}) => {
  const isDarkSection = variant === 'dark-section';

  // Variante compatível com fundo escuro (Ameixa / Hero / Footer): Ouro radiante
  // Variante compatível com fundo claro (Areia / Champagne / Secções centrais): Ameixa imperial profundo
  const variantClasses = isDarkSection
    ? 'text-[#22051E] bg-gradient-to-r from-[#C59B3F] via-[#E8CB85] to-[#B88B32] hover:from-[#D4AF4A] hover:via-[#F0D695] hover:to-[#C6983A] border border-[#F5DC9E]/80 shadow-[0_4px_20px_rgba(197,155,63,0.32)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.45)]'
    : 'text-[#FFF9F5] bg-gradient-to-r from-[#2C0A29] via-[#4A0E44] to-[#240622] hover:from-[#3D0F38] hover:via-[#5D1356] hover:to-[#32072F] border border-[#6B1B63]/70 shadow-[0_4px_20px_rgba(44,10,41,0.28)] hover:shadow-[0_6px_28px_rgba(44,10,41,0.42)]';

  const sizeClasses = {
    sm: 'py-2 sm:py-2.5 px-3 sm:px-6 min-h-[38px] sm:min-h-[42px] text-[clamp(10px,2.6vw,12px)] tracking-[clamp(0.06em,0.8vw,0.16em)]',
    md: 'py-3.5 px-6 sm:px-7 min-h-[48px] sm:min-h-[50px] text-[12px] sm:text-[13px] tracking-[0.18em]',
    lg: 'py-3.5 px-6 sm:px-8 min-h-[50px] sm:min-h-[52px] text-[12.5px] sm:text-[13px] tracking-[0.18em]',
  }[size];

  const shimmerColor = isDarkSection ? 'via-white/65' : 'via-white/45';

  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`relative group overflow-hidden inline-flex items-center justify-center text-center font-button font-bold uppercase rounded-xl transition-all duration-300 cursor-pointer active:scale-[0.98] select-none ${variantClasses} ${sizeClasses} ${className}`}
    >
      {/* Feixe de luz brilhando passando (Shimmer Sweep contínuo e elegante) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl" aria-hidden="true">
        <div className={`absolute top-0 bottom-0 w-28 bg-gradient-to-r from-transparent ${shimmerColor} to-transparent animate-shimmer-sweep`} />
      </div>

      <span className="relative z-10 flex items-center justify-center whitespace-nowrap">
        {text || children || 'QUERO O MEU GUIA DIGITAL'}
      </span>
    </a>
  );
};
