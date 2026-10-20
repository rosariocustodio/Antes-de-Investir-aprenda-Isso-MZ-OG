import React, { useState, useEffect } from 'react';
import { ShieldAlert } from 'lucide-react';
import { TradeTravelHero } from './components/TradeTravelHero';
import { CollageAndTeachesSection } from './components/CollageAndTeachesSection';
import { AuthorStorySection } from './components/AuthorStorySection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { TradeTravelFooter } from './components/TradeTravelFooter';
import { StickyBottomBar } from './components/StickyBottomBar';
import { ChapterPreviewModal } from './components/ChapterPreviewModal';
import { CHECKOUT_URL } from './config/checkout';

export const App: React.FC = () => {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isScreenshotBlocked, setIsScreenshotBlocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Proteção contra screenshot, cópia, corte, clique direito e atalhos de inspeção/DevTools
  useEffect(() => {
    const triggerScreenshotBlock = () => {
      // 1. Limpa a área de transferência para que a captura de tela fique vazia
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('');
        }
      } catch (err) {}

      // 2. Ativa o escudo anti-screenshot visual
      setIsScreenshotBlocked(true);

      // 3. Desativa automaticamente após 2.5s
      setTimeout(() => {
        setIsScreenshotBlocked(false);
      }, 2500);
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const key = (e.key || '').toUpperCase();

      // Bloqueio de tecla PrintScreen (Captura de tela padrão)
      if (e.key === 'PrintScreen' || e.code === 'PrintScreen' || e.keyCode === 44) {
        e.preventDefault();
        triggerScreenshotBlock();
        return false;
      }

      // Bloquear atalho de captura do Windows (Win + Shift + S) ou Mac (Cmd + Shift + 3 / 4 / 5)
      if (isCtrlOrCmd && e.shiftKey) {
        if (key === 'S' || key === '3' || key === '4' || key === '5') {
          e.preventDefault();
          e.stopPropagation();
          triggerScreenshotBlock();
          return false;
        }
      }

      // Bloquear atalhos de Gravação de Ecrã do Windows (Win + Alt + R / Alt + R) e Xbox Game Bar (Win + G / Alt + G)
      if ((e.metaKey || e.altKey) && (key === 'R' || key === 'G')) {
        e.preventDefault();
        e.stopPropagation();
        triggerScreenshotBlock();
        return false;
      }

      // Bloquear tecla F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Atalhos de inspeção e cópia
      if (isCtrlOrCmd) {
        // Ctrl + Shift + I / J / C (Inspecionar / Console / DevTools)
        if (e.shiftKey && (key === 'I' || key === 'J' || key === 'C')) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        // Ctrl + U (Ver Código Fonte)
        if (key === 'U') {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        // Ctrl + S (Guardar Página)
        if (key === 'S') {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        // Ctrl + P (Imprimir)
        if (key === 'P') {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        // Ctrl + C (Copiar), Ctrl + A (Selecionar Tudo), Ctrl + X (Cortar)
        if (key === 'C' || key === 'A' || key === 'X') {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      // PrintScreen em alguns navegadores e teclados só é reportado em keyup
      if (e.key === 'PrintScreen' || e.code === 'PrintScreen' || e.keyCode === 44) {
        triggerScreenshotBlock();
      }
    };

    const handleBlur = () => {
      // Quando a janela perde foco por ferramenta externa de captura de ecrã
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('');
        }
      } catch (err) {}
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  const handleBuyClick = (e?: React.MouseEvent) => {
    const checkoutEventId = 'InitiateCheckout_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);

    // 1. Disparar evento InitiateCheckout no Meta Pixel (Browser)
    try {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'InitiateCheckout', {
          content_name: 'Antes de Investir, Aprenda Isto',
          content_category: 'E-book / Finanças',
          value: 349.00,
          currency: 'MZN'
        }, { eventID: checkoutEventId });
      }
    } catch (err) {
      console.warn('Pixel tracking error', err);
    }

    // 2. Disparar evento InitiateCheckout no Meta Conversions API (Server-Side)
    try {
      const getCookie = (name: string) => {
        try {
          const m = document.cookie.match(new RegExp('(^|;\\s*)' + name + '=([^;]*)'));
          return m ? decodeURIComponent(m[2]) : undefined;
        } catch (e) {
          return undefined;
        }
      };

      fetch('/api/meta-events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: 'InitiateCheckout',
          event_id: checkoutEventId,
          event_source_url: window.location.href,
          fbp: getCookie('_fbp'),
          fbc: getCookie('_fbc'),
          custom_data: {
            content_name: 'Antes de Investir, Aprenda Isto',
            content_category: 'E-book / Finanças',
            value: 349.00,
            currency: 'MZN'
          }
        }),
        keepalive: true
      }).catch(() => {});
    } catch (err) {
      console.warn('CAPI tracking error', err);
    }

    // Se o clique veio de um elemento que não é um link com target _blank (ex: click no mockup):
    if (!e || !(e.currentTarget instanceof HTMLAnchorElement)) {
      const opened = window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
      if (!opened || opened.closed || typeof opened.closed === 'undefined') {
        window.location.href = CHECKOUT_URL;
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#2C0A29] text-[#F8F4EE] font-content antialiased relative overflow-x-hidden selection:bg-amber-500/30 selection:text-white">
      {/* 1. Hero Section (Screenshot 1) */}
      <TradeTravelHero
        onOrderClick={handleBuyClick}
        onPreviewClick={() => setIsPreviewOpen(true)}
      />

      {/* 2. Colagem Editorial e o que o Método Ensina (Screenshots 2 e 3) */}
      <CollageAndTeachesSection
        onOrderClick={handleBuyClick}
      />

      {/* 3. Conheça o Autor Rosario Paulino (Screenshots 4 e 5) */}
      <AuthorStorySection
        onOrderClick={handleBuyClick}
      />

      {/* 4. Preço & Investimento 349 MT (Screenshots 5 e 6) */}
      <PricingSection
        onOrderClick={handleBuyClick}
      />

      {/* 5. Perguntas Frequentes (Screenshots 6 e 7) */}
      <FAQSection />

      {/* 6. Footer Oficial (Screenshots 7 e 8) */}
      <TradeTravelFooter
        onOrderClick={handleBuyClick}
      />

      {/* 7. Barra Fixa Inferior (Sticky Bar) */}
      <StickyBottomBar
        show={showStickyBar}
        onBuyClick={handleBuyClick}
      />

      {/* 8. Modal de Amostra Oficial */}
      <ChapterPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onBuyClick={handleBuyClick}
      />

      {/* 9. Escudo de Proteção Anti-Screenshot e Anti-Gravação */}
      {isScreenshotBlocked && (
        <div 
          onClick={() => setIsScreenshotBlocked(false)}
          className="fixed inset-0 z-[999999] bg-[#2C0A29]/95 backdrop-blur-3xl flex flex-col items-center justify-center p-6 text-center select-none cursor-pointer animate-in fade-in duration-100"
          role="alert"
          aria-live="assertive"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-5 text-amber-400 shadow-2xl">
            <ShieldAlert className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          
          <span className="font-content text-amber-400 font-medium text-[11px] sm:text-[12px] tracking-[0.25em] uppercase mb-2">
            Proteção de Conteúdo Ativa
          </span>
          
          <h3 className="font-headline font-normal text-white text-[24px] sm:text-[30px] leading-tight mb-3 max-w-md">
            Gravação e Captura de Ecrã Não Permitidas
          </h3>
          
          <p className="font-content text-white/70 text-[13px] sm:text-[14px] leading-relaxed max-w-sm mb-6">
            O conteúdo deste livro e desta página é propriedade intelectual protegida da Rumos Seguros. Gravações de vídeo e capturas de ecrã são estritamente proibidas.
          </p>

          <button
            onClick={() => setIsScreenshotBlocked(false)}
            className="font-button text-[12px] uppercase tracking-[0.2em] text-white/80 border border-white/30 px-6 py-2.5 hover:bg-white/10 transition-colors"
          >
            Continuar a Leitura
          </button>
        </div>
      )}

      {/* 10. Marca d'Água Forense Anti-Pirataria (Invisível na leitura, gravada em vídeos/câmaras) */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 overflow-hidden opacity-[0.03] select-none flex flex-wrap gap-20 items-center justify-around rotate-[-15deg] scale-125"
        aria-hidden="true"
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="text-white text-[11px] sm:text-[12px] font-semibold tracking-[0.25em] uppercase whitespace-nowrap">
            Rumos Seguros • Propriedade Oficial • Gravação Proibida
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;
