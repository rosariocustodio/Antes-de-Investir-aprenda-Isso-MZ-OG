import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delayMs = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's motion preferences or slow connection / data saver
    const nav = typeof navigator !== 'undefined' ? (navigator as any) : null;
    const connection = nav?.connection || nav?.mozConnection || nav?.webkitConnection;
    const isSlowConnection = connection?.saveData || connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g';

    if (
      (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) ||
      isSlowConnection
    ) {
      setIsVisible(true);
      return;
    }

    const currentRef = ref.current;
    if (!currentRef) return;

    // Safety timeout: ensure content is always visible even if scroll observer stalls on low-end devices
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(safetyTimer);
          if (delayMs > 0) {
            setTimeout(() => {
              setIsVisible(true);
            }, delayMs);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.04,
        rootMargin: '0px 0px 100px 0px', // Aciona antes de entrar na tela para carregamento antecipado
      }
    );

    observer.observe(currentRef);

    return () => {
      clearTimeout(safetyTimer);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '750ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transform will-change-transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-7'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
