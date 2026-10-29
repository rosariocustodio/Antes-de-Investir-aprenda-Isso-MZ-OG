import React from 'react';
import { RumosSegurosLogo } from './RumosSegurosLogo';
import { BookMockup } from './BookMockup';
import { CtaButton } from './CtaButton';

interface TradeTravelFooterProps {
  onOrderClick: (e?: React.MouseEvent) => void;
}

export const TradeTravelFooter: React.FC<TradeTravelFooterProps> = ({ onOrderClick }) => {
  return (
    <footer 
      id="footer"
      data-section-theme="dark"
      className="bg-[#2C0A29] text-[#F8F4EE] pt-12 sm:pt-16 pb-28 sm:pb-16 px-5 sm:px-8 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[720px] mx-auto text-center flex flex-col items-center space-y-6 sm:space-y-7">
        
        {/* Logótipo Rumos Seguros */}
        <div className="flex justify-center">
          <RumosSegurosLogo variant="light" />
        </div>

        {/* Mockup do Livro Oficial no Rodapé (footer-mockup 3.png sem fundo, tamanho premium no mobile e PC) */}
        <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[390px] mx-auto flex justify-center items-center py-2 sm:py-3">
          <BookMockup 
            onPreviewClick={onOrderClick} 
            imageSrc="/footer-mockup 3.png" 
            size="lg" 
            loading="lazy"
          />
        </div>

        {/* Chamada Final Direta e Educativa */}
        <div className="space-y-3 max-w-[620px] mx-auto">
          <h2 className="font-headline font-bold text-white text-[26px] sm:text-[32px] md:text-[36px] leading-[1.18] tracking-tight">
            Antes de Dar o Próximo Passo, Aprende o Que Importa.
          </h2>
          <p className="font-content font-normal text-[#F8F4EE]/85 text-[14.5px] sm:text-[15.5px] leading-[1.6] max-w-[540px] mx-auto">
            Garante o teu guia digital e constrói uma base sólida para investir com segurança, discernimento e consciência em Moçambique.
          </p>
        </div>

        {/* Botão de Ação Principal */}
        <div className="w-full flex flex-col items-center gap-3 pt-1">
          <CtaButton
            variant="dark-section"
            size="lg"
            text="QUERO O MEU GUIA DIGITAL"
            onClick={onOrderClick}
            className="w-full max-w-[340px]"
          />

          <p className="font-content font-medium text-[11px] text-[#F8F4EE]/65 tracking-[0.2em] uppercase select-none">
            ACESSO IMEDIATO EM PDF • APENAS 299 MT
          </p>
        </div>

        {/* Rodapé Legal Limpo e Discreto */}
        <div className="w-full pt-8 mt-2 border-t border-white/10 text-white/50 text-[11px] sm:text-[11.5px] space-y-1.5 font-content">
          <p>
            © {new Date().getFullYear()} Rosario Paulino • Rumos Seguros. Todos os direitos reservados.
          </p>
          <p className="text-[10.5px] text-white/40 max-w-lg mx-auto leading-relaxed">
            Conteúdo com propósito educacional para desenvolvimento e organização financeira em Moçambique.
          </p>
        </div>

      </div>
    </footer>
  );
};

