import React from 'react';
import { BookMockup } from './BookMockup';
import { RumosSegurosLogo } from './RumosSegurosLogo';
import { CHECKOUT_URL } from '../config/checkout';

interface TradeTravelHeroProps {
  onOrderClick: (e?: React.MouseEvent) => void;
  onPreviewClick: () => void;
}

export const TradeTravelHero: React.FC<TradeTravelHeroProps> = ({
  onOrderClick,
  onPreviewClick,
}) => {
  return (
    <section className="relative w-full bg-[#2C0A29] text-[#F8F4EE] pt-7 sm:pt-9 md:pt-12 pb-14 sm:pb-16 md:pb-20 px-5 sm:px-8 lg:px-12 border-b border-white/10 overflow-hidden">
      
      {/* Vinheta atmosférica profunda e sóbria */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#3D0F38_0%,#240622_100%)] pointer-events-none opacity-95" 
        aria-hidden="true" 
      />

      <div className="relative max-w-[1140px] mx-auto z-10">
        
        {/* Cabeçalho de marca Rumos Seguros */}
        <header className="flex items-center justify-start mb-7 sm:mb-9 md:mb-12">
          <RumosSegurosLogo variant="light" />
        </header>

        {/* Layout Principal: 2 colunas equilibradas no PC, fluxo vertical no Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-10 lg:gap-14">
          
          {/* Coluna de Texto e Ação */}
          <div className="md:col-span-7 text-center md:text-left flex flex-col items-center md:items-start">

            {/* Título Principal H1 */}
            <h1 className="font-headline font-normal text-white text-[32px] xs:text-[36px] sm:text-[42px] md:text-[46px] lg:text-[52px] leading-[1.12] tracking-[-0.015em] mb-4 sm:mb-5 max-w-[620px]">
              Ganhar Dinheiro Custa. <br className="hidden sm:inline" />
              <span className="text-[#F8F4EE]">Aprenda a Não o Perder.</span>
            </h1>

            {/* Subtítulo com clareza e ritmo editorial */}
            <p className="font-content text-[#F8F4EE]/85 font-normal text-[15px] sm:text-[16.5px] md:text-[17.5px] leading-[1.6] mb-6 sm:mb-8 max-w-[530px]">
              O guia prático para proteger o dinheiro que já tem, e aprender a fazê-lo crescer —{' '}
              <span className="text-white font-medium">antes de dar o próximo passo.</span>
            </p>

            {/* Mockup no Mobile (posicionado harmonicamente entre subtítulo e botão) */}
            <div className="md:hidden w-full flex justify-center py-2 mb-6">
              <div className="w-full max-w-[270px]">
                <BookMockup 
                  onPreviewClick={onPreviewClick} 
                  imageSrc="/ebook-hero.webp" 
                  size="md" 
                />
              </div>
            </div>

            {/* Bloco de CTA e Garantias */}
            <div className="w-full max-w-[340px] flex flex-col items-center md:items-start">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-order-book-btn"
                onClick={onOrderClick}
                className="w-full min-h-[50px] font-button font-medium text-[12.5px] sm:text-[13px] text-white tracking-[0.2em] uppercase bg-transparent border border-white/90 rounded-none py-3.5 px-6 inline-flex items-center justify-center text-center transition-all duration-200 hover:bg-white hover:text-[#2C0A29] cursor-pointer shadow-md active:scale-[0.99]"
              >
                QUERO O MEU EXEMPLAR
              </a>

              {/* Linha discreta de segurança e transparência (sóbria, sem ícones coloridos) */}
              <div className="w-full flex items-center justify-center md:justify-start gap-2 text-[10.5px] sm:text-[11px] text-white/60 font-content mt-3.5 select-none tracking-normal">
                <span>Pagamento seguro</span>
                <span className="text-white/30">•</span>
                <span>Acesso imediato</span>
                <span className="text-white/30">•</span>
                <span>Suporte directo</span>
              </div>
            </div>

          </div>

          {/* Coluna do Mockup no Desktop (PC) */}
          <div className="hidden md:flex md:col-span-5 justify-center items-center w-full pl-2 lg:pl-6">
            <div className="w-full max-w-[360px] lg:max-w-[400px] xl:max-w-[430px] flex justify-center">
              <BookMockup 
                onPreviewClick={onPreviewClick} 
                imageSrc="/ebook-hero.webp" 
                size="lg" 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

