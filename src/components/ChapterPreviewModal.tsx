import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, ChevronRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { BOOK_DATA, CHAPTERS_LIST, SAMPLE_CHAPTER_EXCERPT } from '../data/bookContent';

interface ChapterPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBuyClick: () => void;
}

export const ChapterPreviewModal: React.FC<ChapterPreviewModalProps> = ({
  isOpen,
  onClose,
  onBuyClick
}) => {
  const [activeTab, setActiveTab] = useState<'toc' | 'intro' | 'chap1'>('intro');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-800 bg-slate-950/60">
            <div className="flex items-center gap-3">
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <BookOpen className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight">
                  Prévia Oficial do Livro
                </h3>
                <p className="text-[11px] sm:text-xs text-amber-300/80">
                  {BOOK_DATA.title} • {BOOK_DATA.author}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-900/90 px-3 sm:px-6 gap-1 sm:gap-2 pt-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('intro')}
              className={`pb-3 px-2.5 sm:px-3 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap relative min-h-[42px] ${
                activeTab === 'intro'
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Introdução do Autor
            </button>
            <button
              onClick={() => setActiveTab('chap1')}
              className={`pb-3 px-2.5 sm:px-3 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap relative min-h-[42px] ${
                activeTab === 'chap1'
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Capítulo 1
            </button>
            <button
              onClick={() => setActiveTab('toc')}
              className={`pb-3 px-2.5 sm:px-3 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap relative min-h-[42px] ${
                activeTab === 'toc'
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Índice ({CHAPTERS_LIST.length} Capítulos)
            </button>
          </div>

          {/* Body Content */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 text-slate-200 text-sm sm:text-base leading-relaxed">
            {activeTab === 'intro' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p>
                    <strong>Trecho autêntico da 1ª Edição:</strong> Leia abaixo a abertura onde Rosario Paulino expõe por que a falta de preparo custa tão caro na vida do trabalhador.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-white tracking-tight">
                  {SAMPLE_CHAPTER_EXCERPT.introTitle}
                </h4>

                <div className="space-y-3.5 text-slate-300 font-light">
                  {SAMPLE_CHAPTER_EXCERPT.introContent.split('\n\n').map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'chap1' && (
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white tracking-tight">
                  {SAMPLE_CHAPTER_EXCERPT.chapter1Title}
                </h4>

                <div className="space-y-3.5 text-slate-300 font-light">
                  {SAMPLE_CHAPTER_EXCERPT.chapter1Content.split('\n\n').map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
                  <p className="text-xs text-amber-300 font-medium">
                    Continua nos outros 28 capítulos práticos do livro...
                  </p>
                  <p className="text-xs text-slate-400">
                    O restante deste capítulo aborda a disciplina, a corrida de maratona vs. 100 metros e os 3 critérios de proteção.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'toc' && (
              <div className="space-y-3">
                <p className="text-xs text-slate-400">
                  Estrutura de 29 capítulos curtos, diretos e objetivos para ler sem cansar:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CHAPTERS_LIST.map((chap) => (
                    <div
                      key={chap.number}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/30 transition-all flex items-start gap-2.5"
                    >
                      <span className="w-6 h-6 rounded-md bg-amber-500/10 text-amber-300 text-xs font-bold flex items-center justify-center shrink-0">
                        {chap.number}
                      </span>
                      <div>
                        <h5 className="text-white text-xs sm:text-sm font-semibold leading-tight">
                          {chap.title}
                        </h5>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                          {chap.summary}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer with CTA */}
          <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">
              <span className="text-xs text-slate-400 line-through mr-2">De {BOOK_DATA.originalPrice} MT</span>
              <span className="text-lg sm:text-xl font-extrabold text-amber-400">Por apenas {BOOK_DATA.currentPrice} MT</span>
              <span className="text-xs text-emerald-400 font-semibold block sm:inline sm:ml-2">
                • Acesso Completo aos 29 Capítulos
              </span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Voltar à Página
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBuyClick();
                }}
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Garantir Meu Livro</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
