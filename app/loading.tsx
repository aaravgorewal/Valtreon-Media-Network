import React from 'react';

/**
 * Next.js 15 App Router Streaming Loading Skeleton State
 * Swiss Modernist Architectural Boot Loader (Zero Layout Shift CLS 0.000)
 */
export default function Loading() {
  return (
    <div
      id="vmn-streaming-loader-skeleton"
      className="fixed inset-0 z-50 bg-[#080809] flex flex-col justify-between p-8 font-mono text-xs text-zinc-400 select-none animate-pulse"
      role="status"
      aria-label="Loading Valtreon Media Network Portal"
    >
      {/* Skeleton Top Bar */}
      <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-3.5 h-3.5 bg-[#9C8465]/40 animate-pulse" />
          <div className="h-3 w-32 bg-zinc-900 rounded-none" />
        </div>
        <div className="hidden sm:flex gap-6">
          <div className="h-2.5 w-16 bg-zinc-900" />
          <div className="h-2.5 w-16 bg-zinc-900" />
          <div className="h-2.5 w-16 bg-zinc-900" />
        </div>
      </div>

      {/* Skeleton Center Hero Placeholder */}
      <div className="w-full max-w-5xl mx-auto space-y-6">
        <div className="h-2.5 w-40 bg-[#9C8465]/30 tracking-widest" />
        <div className="space-y-3">
          <div className="h-10 w-full bg-zinc-900" />
          <div className="h-10 w-4/5 bg-zinc-900" />
          <div className="h-10 w-2/3 bg-zinc-900" />
        </div>
        <div className="h-4 w-1/2 bg-zinc-900/60 mt-4" />
        <div className="flex gap-4 pt-6">
          <div className="h-10 w-36 bg-zinc-800" />
          <div className="h-10 w-36 bg-zinc-900/50" />
        </div>
      </div>

      {/* Skeleton Footer Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-zinc-900 pt-4 text-[10px] text-zinc-600">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#9C8465] animate-ping" />
          <span>[ INITIALIZING_HYDRATION // STREAMING_RSC ]</span>
        </div>
        <div className="font-mono">VALTREON MEDIA NETWORK // ENTERPRISE GATE</div>
      </div>
    </div>
  );
}
