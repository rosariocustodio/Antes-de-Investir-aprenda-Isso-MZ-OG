import React from 'react';
import { CHECKOUT_URL } from '../config/checkout';

interface AuthorStorySectionProps {
  onOrderClick: (e?: React.MouseEvent) => void;
}

export const AuthorStorySection: React.FC<AuthorStorySectionProps> = ({ onOrderClick }) => {
  return (
    <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-[#FDF5F2] text-[#0E0E0D] px-5 sm:px-8 lg:px-12">
      <div className="max-w-[760px] mx-auto text-left">
        
        {/* Subtle top divider with diamond symbol exactly matching Screenshot 3 & 4 */}
        <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10 opacity-70">
          <div className="h-[1px] w-24 sm:w-36 bg-[#360A2F]/25" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#360A2F]/60" />
          <div className="h-[1px] w-24 sm:w-36 bg-[#360A2F]/25" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="font-content font-medium text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-[#360A2F] mb-1.5">
            CONHEÇA O AUTOR
          </p>
          <h2 className="font-headline font-bold text-[#360A2F] text-[34px] sm:text-[42px] leading-tight tracking-tight">
            Rosario Paulino
          </h2>
          <p className="font-content text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[#360A2F]/75 font-medium mt-1">
            FUNDADOR DA RUMOS SEGUROS • EDUCADOR FINANCEIRO
          </p>
        </div>

        {/* Author Photo with caption bar matching Screenshot 4 */}
        <div className="w-full max-w-[420px] mx-auto overflow-hidden shadow-md border border-[#360A2F]/15 mb-6">
          <picture className="w-full block bg-[#E4DAD9]">
            <source srcSet="/moderno-autor.webp" type="image/webp" />
            <img
              src="/moderno-autor.webp"
              alt="Rosario Paulino - Autor e Fundador da Rumos Seguros"
              width="420"
              height="420"
              className="w-full h-auto object-contain block select-none"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div className="bg-[#2C0A29] py-2.5 px-4 text-center">
            <p className="font-content text-[11px] font-semibold tracking-[0.2em] uppercase text-white/95">
              ROSARIO PAULINO
            </p>
            <p className="font-content text-[10px] text-white/70 tracking-wide mt-0.5">
              Autor &amp; Fundador • Rumos Seguros
            </p>
          </div>
        </div>

        {/* Story Text matching Screenshot 4 & 5 word for word */}
        <div className="space-y-4 text-[#242B2E] font-content text-[15px] sm:text-[16px] leading-[1.7] max-w-[620px] mx-auto pt-2">
          <p>
            Durante anos, acompanhei de perto uma realidade dolorosa em Moçambique: trabalhadores dedicados e famílias esforçadas que passam o mês a produzir, apenas para ver o salário desaparecer antes do dia 20.
          </p>

          <p>
            A verdade é que ninguém nos ensina nas escolas o essencial sobre o dinheiro: como proteger os rendimentos contra imprevistos, estancar perdas invisíveis e investir com segurança através dos canais formais e regulados da nossa economia.
          </p>

          <p>
            Por isso fundei a <strong>Rumos Seguros</strong>. Criei um método 100% prático, realista e desenhado para a realidade moçambicana, para que nenhum trabalhador volte a perder a tranquilidade por falta de orientação financeira.
          </p>

          {/* Standout Quote Box matching Screenshot 5 */}
          <div className="my-6 p-5 sm:p-6 bg-[#F5ECE8] border-l-2 border-[#360A2F]">
            <p className="font-headline italic text-[16px] sm:text-[17px] text-[#2C0A29] leading-relaxed">
              "Este livro é o mapa prático que eu gostaria de ter recebido: direto ao ponto, sem promessas ilusórias, feito para devolver a sua paz e liberdade de escolha."
            </p>
          </div>

          {/* Button matching Screenshot 5 */}
          <div className="w-full flex justify-center pt-2 pb-4">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOrderClick}
              className="w-full max-w-[340px] min-h-[48px] font-button font-medium text-[12px] sm:text-[12.5px] text-[#2C0A29] tracking-[0.18em] uppercase bg-transparent border border-[#2C0A29] rounded-none py-3.5 inline-flex items-center justify-center transition-all duration-200 hover:bg-[#2C0A29] hover:text-white cursor-pointer shadow-sm active:scale-[0.99]"
            >
              QUERO O MEU EXEMPLAR
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
