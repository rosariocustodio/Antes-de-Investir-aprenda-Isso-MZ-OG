import React from 'react';
import { CtaButton } from './CtaButton';

interface AuthorStorySectionProps {
  onOrderClick: (e?: React.MouseEvent) => void;
}

export const AuthorStorySection: React.FC<AuthorStorySectionProps> = ({ onOrderClick }) => {
  return (
    <section 
      id="autor"
      data-section-theme="light"
      className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-[#FDF5F2] text-[#0E0E0D] px-5 sm:px-8 lg:px-12"
    >
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

        {/* Story Text */}
        <div className="space-y-4 text-[#242B2E] font-content text-[15px] sm:text-[16px] leading-[1.7] max-w-[620px] mx-auto pt-2">
          <p>
            Durante anos, acompanhei de perto uma realidade preocupante em Moçambique: pessoas trabalhadoras que, na vontade legítima de fazer o dinheiro render, colocam as suas poupanças em negócios desconhecidos ou esquemas arriscados e acabam por perder tudo.
          </p>

          <p>
            A verdade é que ninguém nos ensina o essencial antes de começarmos a investir: como distinguir oportunidades reais de armadilhas, como analisar os riscos e que passos dar antes de colocar o primeiro Metical em jogo.
          </p>

          <p>
            Por isso escrevi <strong>Antes de Investir, Aprenda Isto</strong> e criei a <strong>Rumos Seguros</strong>. Um guia simples, 100% focado na nossa realidade, para que qualquer pessoa consiga compreender os fundamentos e tomar decisões conscientes e informadas.
          </p>

          {/* Standout Quote Box */}
          <div className="my-6 p-5 sm:p-6 bg-[#F5ECE8] border-l-2 border-[#360A2F]">
            <p className="font-headline italic text-[16px] sm:text-[17px] text-[#2C0A29] leading-relaxed">
              "Este guia digital é a conversa clara e sincera que todos deveriam ter antes de investir: direto ao ponto, sem promessas ilusórias e feito para proteger o teu esforço."
            </p>
          </div>

          {/* Button */}
          <div className="w-full flex justify-center pt-2 pb-4">
            <CtaButton
              variant="light-section"
              size="md"
              text="QUERO O MEU GUIA DIGITAL"
              onClick={onOrderClick}
              className="w-full max-w-[340px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
