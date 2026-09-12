/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TradeTravelHero } from './components/TradeTravelHero';
import { CollageAndTeachesSection } from './components/CollageAndTeachesSection';
import { ChapterHighlightsSection } from './components/ChapterHighlightsSection';
import { AuthorStorySection } from './components/AuthorStorySection';
import { SocialProofSection } from './components/SocialProofSection';
import { FAQSection } from './components/FAQSection';
import { TradeTravelFooter } from './components/TradeTravelFooter';
import { ChapterPreviewModal } from './components/ChapterPreviewModal';
import { PaymentModal } from './components/PaymentModal';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Monitor scroll for the sticky mobile order bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openPayment = () => setIsPaymentOpen(true);
  const openPreview = () => setIsPreviewOpen(true);

  return (
    <div className="min-h-screen bg-[#360A2F] text-[#F6F1EA] font-content antialiased relative overflow-x-hidden selection:bg-amber-500/30 selection:text-white">
      
      {/* 1. HERO SECTION (Reference: section-nhIViZnNNI) */}
      <TradeTravelHero
        onOrderClick={openPayment}
        onPreviewClick={openPreview}
      />

      {/* 2. INTRODUÇÃO / PROBLEMA (Reference: section-S6vgZBff0E) */}
      <CollageAndTeachesSection
        onOrderClick={openPayment}
      />

      {/* 3. O QUE O LIVRO ENSINA (Reference: section-txRipictny) */}
      <ChapterHighlightsSection
        onOpenPreview={openPreview}
        onOpenPayment={openPayment}
      />

      {/* 4. AUTOR (Reference: section-3k77WO9Shv) */}
      <AuthorStorySection
        onOrderClick={openPayment}
      />

      {/* 5. PROVA SOCIAL (Reference: section-PV_8UlfOm2) */}
      <SocialProofSection
        onOrderClick={openPayment}
      />

      {/* 6. FAQ (Reference: section-7aE7VZF2eb) */}
      <FAQSection />

      {/* 7. CTA FINAL & FOOTER (Reference: section-hWrS5YR9lm & section-QJmNIhFYhh) */}
      <TradeTravelFooter
        onOrderClick={openPayment}
      />

      {/* Modals & Overlays */}
      <ChapterPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onBuyClick={openPayment}
      />

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
      />

      {/* Sticky Bottom Order Bar */}
      <StickyBottomBar
        show={showStickyBar}
        onBuyClick={openPayment}
      />

    </div>
  );
}
