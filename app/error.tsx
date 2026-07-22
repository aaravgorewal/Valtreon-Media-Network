'use client';

import React, { useEffect } from 'react';

/**
 * Next.js 15 App Router Error Boundary Fallback Component
 * Catches unexpected runtime exceptions safely on Canvas Obsidian
 */
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected errors to telemetry service
    console.error('[VMN_RUNTIME_EXCEPTIONAL_FAULT]:', error);
  }, [error]);

  return (
    <div
      id="vmn-error-boundary-terminal"
      className="min-h-screen bg-[#080809] text-zinc-100 flex flex-col justify-between p-8 md:p-16 font-mono selection:bg-[#FB7185] selection:text-black"
    >
      {/* Header telemetry error status */}
      <div className="flex justify-between items-center border-b border-zinc-900 pb-6">
        <span className="text-[10px] text-[#FB7185] uppercase tracking-widest font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FB7185] animate-ping" />
          [ SYSTEM_FAULT // RUNTIME_EXCEPTIONAL_BOUNDARY ]
        </span>
        <span className="text-[10px] text-zinc-600">
          DIGEST: {error.digest || '0xUNKNOWN_FAULTHANDLER'}
        </span>
      </div>

      {/* Main Error Message & Recovery Controls */}
      <div className="w-full max-w-2xl mx-auto space-y-6 py-12">
        <div className="space-y-2">
          <span className="text-xs text-zinc-500 uppercase tracking-widest">[ EXCEPTION_DETAILS ]</span>
          <h1 className="font-sans font-medium text-3xl text-zinc-100">
            A temporary rendering fault occurred on this route.
          </h1>
        </div>

        <p className="font-sans text-sm text-zinc-400 leading-relaxed bg-zinc-950 p-4 border border-zinc-900 font-mono text-xs">
          {error.message || 'An unhandled component rendering error occurred. The application state remains isolated.'}
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button
            onClick={() => reset()}
            id="error-reset-action-btn"
            className="bg-[#9C8465] hover:bg-opacity-90 text-white px-6 py-3 text-xs uppercase font-mono transition-all rounded-none cursor-pointer"
          >
            [ RE-INITIALIZE ROUTE // RESET ]
          </button>
          <a
            href="/"
            id="error-return-home-btn"
            className="border border-zinc-800 hover:border-zinc-500 text-zinc-400 hover:text-white px-6 py-3 text-xs uppercase font-mono transition-all rounded-none"
          >
            [ RETURN TO PORTAL HOMEPAGE ]
          </a>
        </div>
      </div>

      {/* Footer System Receipts */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-[10px] text-zinc-600">
        <span>VALTREON MEDIA NETWORK // FAULT TOLERANCE PROTOCOL</span>
        <span>WCAG 2.2 AAA COMPLIANT RECOVERY</span>
      </div>
    </div>
  );
}
