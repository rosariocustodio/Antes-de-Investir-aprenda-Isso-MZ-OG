import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BOOK_DATA } from '../data/bookContent';

interface StickyBottomBarProps {
  show: boolean;
  onBuyClick: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ show, onBuyClick }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-[#360A2F]/95 border-t border-white/20 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3 shadow-2xl"
        >
          <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-3">
            
            {/* Availability / Brand info */}
            <div className="flex items-center gap-3">
              <div>
                <div className="font-headline font-semibold text-[11px] sm:text-xs md:text-sm text-white tracking-wide truncate max-w-[190px] sm:max-w-none">
                  Antes de Investir Dinheiro, Aprenda Isso
                </div>
                <p className="font-content text-[9px] sm:text-[11px] text-[#F6F1EA]/80 flex items-center gap-1.5">
                  <span>Edição Oficial • Moçambique</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white font-semibold">397 MT</span>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center shrink-0">
              <button
                type="button"
                onClick={onBuyClick}
                className="font-button py-2 sm:py-2.5 px-3.5 sm:px-5 rounded-none border border-white text-white hover:bg-white hover:text-[#360A2F] font-semibold text-[10px] sm:text-[12px] uppercase tracking-[1.5px] sm:tracking-[2px] transition-colors cursor-pointer whitespace-nowrap min-h-[40px]"
              >
                GARANTIR EXEMPLAR
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
