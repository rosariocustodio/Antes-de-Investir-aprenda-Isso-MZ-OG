import React from 'react';

interface RumosSegurosLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const RumosSegurosLogo: React.FC<RumosSegurosLogoProps> = ({
  variant = 'light',
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      {/* Script font logo matching exact screenshot */}
      <span 
        className="text-[#E5B558] text-[28px] sm:text-[32px] leading-none font-bold tracking-normal"
        style={{ fontFamily: "'Caveat', cursive, serif" }}
      >
        Rumos Seguros
      </span>
      <span className="text-white/80 font-content text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-medium mt-0.5">
        ROSARIO PAULINO
      </span>
    </div>
  );
};
