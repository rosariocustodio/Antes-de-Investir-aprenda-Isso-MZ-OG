import React from 'react';
import { RumosSegurosLogo } from './RumosSegurosLogo';
import { BookMockup } from './BookMockup';
import { CHECKOUT_URL } from '../config/checkout';

interface TradeTravelFooterProps {
  onOrderClick: (e?: React.MouseEvent) => void;
}

export const TradeTravelFooter: React.FC<TradeTravelFooterProps> = ({ onOrderClick }) => {
  return (
    <footer className="bg-[#2C0A29] text-[#F8F4EE] pt-12 sm:pt-16 pb-28 sm:pb-16 px-5 sm:px-8 border-t border-white/10 overflow-hidden">
      <div className="max-w-[720px] mx-auto text-center flex flex-col items-center space-y-6 sm:space-y-7">
        
        {/* Logótipo Rumos Seguros */}
        <div className="flex justify-center">
          <RumosSegurosLogo variant="light" />
        </div>

        {/* Mockup do Livro Oficial */}
        <div className="relative w-full max-w-[300px] mx-auto flex justify-center items-center py-1">
          <BookMockup onPreviewClick={onOrderClick} imageSrc="/ebook-footer.png" size="sm" />
        </div>

        {/* Chamada Final Direta e Editorial */}
        <div className="space-y-3 max-w-[620px] mx-auto">
          <h2 className="font-headline font-normal text-white text-[26px] sm:text-[32px] md:text-[36px] leading-[1.18] tracking-tight">
            O Teu Progresso Financeiro Começa na Decisão de Hoje.
          </h2>
          <p className="font-content font-normal text-[#F8F4EE]/85 text-[14.5px] sm:text-[15.5px] leading-[1.6] max-w-[540px] mx-auto">
            Garanta o seu exemplar e assuma o controlo do seu património com método, clareza e tranquilidade.
          </p>
        </div>

        {/* Botão de Ação Principal */}
        <div className="w-full flex flex-col items-center gap-3 pt-1">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onOrderClick}
            className="w-full max-w-[340px] min-h-[50px] font-button font-medium text-[12.5px] sm:text-[13px] text-white tracking-[0.2em] uppercase bg-transparent border border-white/90 rounded-none py-3.5 inline-flex items-center justify-center text-center transition-all duration-200 hover:bg-white hover:text-[#2C0A29] cursor-pointer shadow-md active:scale-[0.99]"
          >
            QUERO O MEU EXEMPLAR
          </a>

          <p className="font-content font-medium text-[11px] text-[#F8F4EE]/65 tracking-[0.2em] uppercase select-none">
            EDIÇÃO OFICIAL • DISPONÍVEL EM MOÇAMBIQUE
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

