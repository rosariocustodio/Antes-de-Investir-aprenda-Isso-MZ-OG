import React from 'react';
import { AuthorImage } from './AuthorImage';

interface AuthorStorySectionProps {
  onOrderClick: () => void;
}

export const AuthorStorySection: React.FC<AuthorStorySectionProps> = ({ onOrderClick }) => {
  return (
    <section id="autor" className="py-12 sm:py-16 md:py-24 bg-[#FDF5F2] text-[#0E0E0D] px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-[#E4DAD9]">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header Title */}
        <div className="text-center max-w-[800px] mx-auto mb-8 sm:mb-12 md:mb-16">
          <p className="font-content font-bold text-[11px] sm:text-[12px] md:text-[13px] tracking-[1.8px] uppercase text-[#360A2F] mb-2 sm:mb-3">
            Conheça Rosario Paulino
          </p>
          <h2 className="font-headline font-normal text-[#360A2F] text-[26px] sm:text-[34px] md:text-[40px] lg:text-[44px] leading-[1.18] tracking-tight">
            Fundador da Rumos Seguros • Educador Financeiro
          </h2>
        </div>

        {/* 2-Column Responsive Layout for Desktop & Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 sm:gap-10 md:gap-10 lg:gap-14 xl:gap-16 mb-8 sm:mb-12">
          
          {/* Left Column: Author Image with balanced aspect ratio */}
          <div className="md:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-[380px] md:max-w-none overflow-hidden shadow-lg bg-[#E4DAD9]">
              <AuthorImage className="w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] object-cover" />
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="md:col-span-7 flex flex-col items-start text-left w-full space-y-4 sm:space-y-5 text-[#242B2E] font-content text-[14px] sm:text-[15px] md:text-[16px] leading-[1.65]">
            <p>
              Durante anos acompanhei de perto profissionais talentosos em Moçambique a trabalharem 12 a 14 horas diárias, acumulando rendimento com enorme esforço, mas vivendo numa ansiedade silenciosa sobre a durabilidade desse dinheiro e com medo constante de cometer um erro irreparável.
            </p>

            <p>
              Quando presenciei pessoas queridas a perderem as suas poupanças de anos em fraudes ou investimentos impulsivos, percebi que a falta de um método claro e seguro de educação financeira é a maior causa de frustração. Ganhar dinheiro sem saber protegê-lo não traz paz.
            </p>

            <p>
              Tomei a decisão de estruturar os princípios reais de organização, proteção contra golpes e investimento inteligente adaptados à nossa realidade em Moçambique. O objetivo não foi apenas ensinar finanças, mas devolver às pessoas a capacidade de fazerem escolhas por clareza e autonomia, e não por medo ou obrigação.
            </p>

            <p className="font-headline italic text-[16px] sm:text-[18px] md:text-[20px] text-[#360A2F] pt-2 border-l-2 border-[#360A2F] pl-4 leading-relaxed">
              "Este livro nasceu para ser o guia prático que eu gostaria de ter tido no início: direto ao ponto, honesto e focado na sua segurança."
            </p>

            {/* CTA Button */}
            <div className="pt-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOrderClick}
                className="font-button font-semibold text-[12px] sm:text-[13px] md:text-[14px] text-[#360A2F] tracking-[1.5px] sm:tracking-[2px] uppercase bg-transparent border-2 border-[#360A2F] rounded-none px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto inline-block text-center transition-colors duration-200 hover:bg-[#360A2F] hover:text-white cursor-pointer"
              >
                ADQUIRIR O LIVRO COMPLETO • 397 MT
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
