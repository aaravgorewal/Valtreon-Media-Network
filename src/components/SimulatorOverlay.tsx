import React from 'react';
import { LatencyTier } from '../types';
import { Shield, Battery, EyeOff, Radio, RefreshCw } from 'lucide-react';

interface SimulatorOverlayProps {
  latency: LatencyTier;
  setLatency: (tier: LatencyTier) => void;
  reducedMotion: boolean;
  setReducedMotion: (active: boolean) => void;
  lowPowerMode: boolean;
  setLowPowerMode: (active: boolean) => void;
  onResetAll: () => void;
  simulatedTimeMs: number;
}

export default function SimulatorOverlay({
  latency,
  setLatency,
  reducedMotion,
  setReducedMotion,
  lowPowerMode,
  setLowPowerMode,
  onResetAll,
  simulatedTimeMs
}: SimulatorOverlayProps) {
  return (
    <div
      id="simulator-control-panel"
      className="border border-zinc-800 bg-zinc-950/90 p-5 backdrop-blur-md text-zinc-300 rounded-none shadow-xl"
    >
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#9C8465]" />
          <span className="font-mono text-xs uppercase tracking-widest font-semibold text-zinc-200">
            [ VMN // KINETIC_SIMULATOR ]
          </span>
        </div>
        <button
          onClick={onResetAll}
          id="btn-reset-simulator"
          className="font-mono text-[10px] text-zinc-500 hover:text-zinc-200 flex items-center gap-1 transition-colors uppercase"
          title="Reset Simulator to default states"
        >
          <RefreshCw className="w-3 h-3" /> [ RESET_CALIBRATION ]
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. Network Delay Control */}
        <div className="space-y-2">
          <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block">
            01. Network Connection Quality
          </label>
          <div className="grid grid-cols-3 gap-1" role="group" aria-label="Network Quality Simulation Selection">
            {(['fast', 'delayed', 'offline'] as LatencyTier[]).map(tier => {
              const isActive = latency === tier;
              return (
                <button
                  key={tier}
                  onClick={() => setLatency(tier)}
                  id={`btn-latency-${tier}`}
                  className={`py-2 px-1 font-mono text-[10px] uppercase border transition-all text-center rounded-none ${
                    isActive
                      ? 'bg-zinc-800 border-[#9C8465] text-zinc-100'
                      : 'border-zinc-900 bg-zinc-950 hover:border-zinc-700 text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <span className="block font-semibold">{tier}</span>
                  <span className="text-[8px] opacity-60">
                    {tier === 'fast' ? '≤150ms' : tier === 'delayed' ? '3G (1.5s)' : 'Offline'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Low Battery / Low Power Mode */}
        <div className="space-y-2">
          <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block">
            02. Energy Conservation Tier
          </label>
          <button
            onClick={() => {
              setLowPowerMode(!lowPowerMode);
              if (!lowPowerMode) {
                // Low power automatically enforces reduced motion per standards
                setReducedMotion(true);
              }
            }}
            id="btn-toggle-low-power"
            className={`w-full py-2 px-3 border font-mono text-[10px] uppercase flex items-center justify-between transition-all rounded-none ${
              lowPowerMode
                ? 'bg-amber-950/20 border-amber-800/80 text-amber-200'
                : 'border-zinc-900 bg-zinc-950 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <Battery className={`w-3.5 h-3.5 ${lowPowerMode ? 'animate-pulse' : ''}`} />
              <span>LOW_BATTERY_MODE</span>
            </div>
            <span className="font-bold">{lowPowerMode ? '[ ACTIVE ]' : '[ OFF ]'}</span>
          </button>
          <span className="text-[9px] text-zinc-500 font-mono block leading-relaxed">
            * Disables autoplaying loops, scales, and drops processor overhead.
          </span>
        </div>

        {/* 3. Reduced Motion */}
        <div className="space-y-2">
          <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block">
            03. Motion Preferences (WCAG)
          </label>
          <button
            onClick={() => setReducedMotion(!reducedMotion)}
            id="btn-toggle-reduced-motion"
            className={`w-full py-2 px-3 border font-mono text-[10px] uppercase flex items-center justify-between transition-all rounded-none ${
              reducedMotion
                ? 'bg-zinc-800 border-zinc-500 text-zinc-100'
                : 'border-zinc-900 bg-zinc-950 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <EyeOff className="w-3.5 h-3.5" />
              <span>REDUCED_MOTION</span>
            </div>
            <span className="font-bold">{reducedMotion ? '[ BLOCKED ]' : '[ NORMAL ]'}</span>
          </button>
          <span className="text-[9px] text-zinc-500 font-mono block leading-relaxed">
            * Disables symmetrical shimmers, path translations, and radial sweeps.
          </span>
        </div>
      </div>

      {/* Simulator Stats Readout */}
      <div className="mt-4 pt-3 border-t border-zinc-900 flex justify-between items-center font-mono text-[9px] text-zinc-500">
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${latency === 'offline' ? 'bg-red-500' : 'bg-emerald-500'}`} />
          <span>PORTAL_STATE: {latency === 'offline' ? 'DISCONNECTED' : 'SYNCHRONIZED'}</span>
        </div>
        <div>
          <span>QUERY_SIMULATED_DELAY: {simulatedTimeMs}ms</span>
        </div>
      </div>
    </div>
  );
}
