import React, { Component, ReactNode, useState, useEffect, useRef } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackTitle?: string;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class SectionErrorBoundary extends (Component as any) {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: any) {
    console.error('Atelier Module Error:', error, errorInfo);
  }

  public handleRetry = () => {
    (this as any).setState({ hasError: false, error: null });
  };

  public render() {
    const { hasError } = (this as any).state;
    const { fallbackTitle, children } = (this as any).props;

    if (hasError) {
      return (
        <div
          role="alert"
          className="w-full min-h-[320px] bg-[#0E0E11] border border-amber-900/50 p-8 flex flex-col items-center justify-center text-center space-y-4 my-6"
        >
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-1 max-w-md">
            <span className="font-mono text-[10px] text-amber-400 uppercase tracking-widest font-bold block">
              [ MODULE DECRYPTION EXCEPTION ]
            </span>
            <h3 className="font-sans text-base font-medium text-white">
              {fallbackTitle || 'Atelier Component Interrupted'}
            </h3>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              A temporary network anomaly occurred while loading this sovereign media module.
            </p>
          </div>
          <button
            type="button"
            onClick={this.handleRetry}
            className="px-5 py-2.5 bg-[#181820] hover:bg-[#22222E] border border-[#9C8465] text-[#9C8465] hover:text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>RETRY DECRYPTION</span>
          </button>
        </div>
      );
    }

    return children;
  }
}

export interface LazyInViewSectionProps {
  children: ReactNode;
  fallback: ReactNode;
  sectionTitle?: string;
  rootMargin?: string;
}

export default function LazyInViewSection({
  children,
  fallback,
  sectionTitle,
  rootMargin = '250px 0px',
}: LazyInViewSectionProps) {
  const [isInView, setIsInView] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isInView) return;

    const el = containerRef.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [isInView, rootMargin]);

  return (
    <div ref={containerRef} className="w-full">
      <SectionErrorBoundary fallbackTitle={sectionTitle}>
        {isInView ? children : fallback}
      </SectionErrorBoundary>
    </div>
  );
}
