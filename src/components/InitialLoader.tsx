import React, { useState, useEffect } from 'react';

interface InitialLoaderProps {
  onComplete: () => void;
  disabled?: boolean;
}

export default function InitialLoader({ onComplete, disabled = false }: InitialLoaderProps) {
  const [progress, setProgress] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('ESTABLISHING_GRID_AXIS_PAINT');
  const [decryptTitle, setDecryptTitle] = useState<string>('V__________ M____ N______');
  const [hasStartedExit, setHasStartedExit] = useState<boolean>(false);

  const finalTitle = 'VALTREON MEDIA NETWORK';

  useEffect(() => {
    if (disabled) {
      onComplete();
      return;
    }

    // Progress chronograph ticker
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 4;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setHasStartedExit(true);
          setTimeout(() => {
            onComplete();
          }, 600); // Wait for fade-out exit
        }, 400);
      }

      setProgress(currentProgress);

      // Decrypt Title animation simulation
      let decrypted = '';
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_#[]/';
      for (let i = 0; i < finalTitle.length; i++) {
        if (finalTitle[i] === ' ') {
          decrypted += ' ';
        } else if (currentProgress > (i / finalTitle.length) * 100) {
          decrypted += finalTitle[i];
        } else {
          decrypted += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDecryptTitle(decrypted);

      // Status text updating chronologically
      if (currentProgress < 20) {
        setStatusText('INITIALIZING_PORTAL_GATEWAYS');
      } else if (currentProgress < 45) {
        setStatusText('ALIGNING_SWISS_BENTO_GRID_COORDINATES');
      } else if (currentProgress < 75) {
        setStatusText('COMPILING_CREATIVE_ROSTER_PORTFOLIOS');
      } else {
        setStatusText('VALTREON_ENV_READY');
      }
    }, 80);

    return () => clearInterval(interval);
  }, [disabled, onComplete]);

  if (disabled) return null;

  return (
    <div
      id="initial-first-paint-loader"
      className={`fixed inset-0 bg-[#080809] text-zinc-300 z-50 flex flex-col justify-between p-8 md:p-16 transition-all duration-500 ease-in-out ${
        hasStartedExit ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* 1. Structural Drafting single-pixel grid axes drawing instantly */}
      <div className="absolute inset-0 border-l border-r border-zinc-900/40 w-full max-w-7xl mx-auto pointer-events-none">
        <div className="absolute inset-y-0 left-1/3 border-r border-zinc-900/40" />
        <div className="absolute inset-y-0 left-2/3 border-r border-zinc-900/40" />
        <div className="absolute inset-x-0 top-1/4 border-b border-zinc-900/40" />
        <div className="absolute inset-x-0 top-3/4 border-b border-zinc-900/40" />
      </div>

      {/* Top Header metadata */}
      <div className="flex justify-between items-center font-mono text-[9px] text-zinc-500 z-10">
        <span>[ ENVIRONMENT // BOOT_SEQUENCE ]</span>
        <span>SYS_STATUS: CALIBRATING</span>
      </div>

      {/* Center Display Typography decrypting cleanly */}
      <div className="flex flex-col items-start gap-3 z-10 max-w-xl mx-auto my-auto w-full">
        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">[ DECRYPT_CORE_BRAND ]</span>
        <h1 className="font-sans font-medium text-3xl md:text-5xl text-zinc-100 tracking-tighter" id="decrypt-loader-heading">
          {decryptTitle}
        </h1>
        <div className="font-mono text-[10px] text-[#9C8465] mt-2 animate-pulse">
          {statusText}
        </div>
      </div>

      {/* Bottom Chronograph progress line (Single-Pixel wire) */}
      <div className="z-10 max-w-xl mx-auto w-full space-y-3">
        <div className="flex justify-between items-center font-mono text-[9px] text-zinc-500">
          <span>CALCULATION_SEQUENCE_RUNNING</span>
          <span id="chronograph-percentage-readout">[ SYNC // {progress}% ]</span>
        </div>
        
        {/* Progress Line */}
        <div className="w-full h-[1px] bg-zinc-900 relative">
          <div
            id="chronograph-progress-bar"
            className="absolute top-0 left-0 h-full bg-[#9C8465] transition-all duration-75"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="flex justify-between items-center font-mono text-[8px] text-zinc-600">
          <span>COORDINATE_GRID // SWISS_RATIONALISM</span>
          <span>©2026 VALTREON_NETWORK</span>
        </div>
      </div>
    </div>
  );
}
