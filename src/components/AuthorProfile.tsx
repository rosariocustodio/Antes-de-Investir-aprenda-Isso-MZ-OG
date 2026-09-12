import React from 'react';
import { ShieldCheck, Award, CheckCircle, BookOpen, Quote } from 'lucide-react';
import { BOOK_DATA } from '../data/bookContent';

export const AuthorProfile: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-[#0B1528] border border-amber-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Subtle gold accent lighting */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Author Image / Avatar Showcase */}
        <div className="md:col-span-5 flex flex-col items-center text-center">
          <div className="relative w-48 sm:w-56 h-48 sm:h-56 rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-amber-400 via-amber-600 to-slate-800 shadow-2xl group">
            <div className="w-full h-full rounded-xl overflow-hidden bg-slate-900 relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
                alt="Rosario Paulino - Autor e Mentor Financeiro"
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            {/* Verified Badge */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-950/90 border border-amber-400/60 text-amber-300 text-[10px] font-bold tracking-wider uppercase shadow-lg flex items-center gap-1 whitespace-nowrap">
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              <span>Autor Oficial</span>
            </div>
          </div>

          <div className="mt-4 space-y-1">
            <h4 className="text-xl font-bold text-white tracking-tight">
              {BOOK_DATA.author}
            </h4>
            <p className="text-xs text-amber-300 font-medium">
              Fundador da Rumos Seguros
            </p>
            <p className="text-[11px] text-slate-400">
              {BOOK_DATA.edition}
            </p>
          </div>
        </div>

        {/* Author Message and Bio */}
        <div className="md:col-span-7 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
            <Quote className="w-3.5 h-3.5 text-amber-400" />
            <span>Mensagem do Autor</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
            "A minha missão não é vender ilusões. É ensinar a proteger o que você suou para conquistar."
          </h3>

          <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            <p>
              Durante anos, acompanhei de perto o sofrimento de famílias honestas que trabalham duro de sol a sol, mas que veem o fruto do seu trabalho ser destruído por falta de organização ou por caírem em golpes financeiros com promessas de dinheiro rápido.
            </p>
            <p>
              Investir não é um jogo de sorte nem exige que você seja milionário. Investir começa por aprender a <strong>estancar os vazamentos do orçamento</strong>, montar um colchão de segurança e ter a paciência estratégica dos investidores de longo prazo.
            </p>
            <p>
              Escrevi este guia prático de 29 capítulos para ser a sua <strong>autoescola financeira</strong>: simples, direto e aplicável desde o primeiro minuto.
            </p>
          </div>

          {/* Value Badges */}
          <div className="pt-2 grid grid-cols-2 gap-3 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sem termos difíceis de economista</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% focado na vida real</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Método testado e consistente</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Apoio direto via WhatsApp</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
