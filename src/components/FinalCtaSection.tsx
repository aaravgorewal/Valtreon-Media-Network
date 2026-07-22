import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Lock,
  Clock,
  Award,
  CheckCircle2,
  FileText,
  Sliders,
  Building2,
  Share2,
  Zap,
  Globe,
  ChevronRight,
  Check,
  HelpCircle,
  X
} from 'lucide-react';

export interface FinalCtaSectionProps {
  onScheduleBriefing: () => void;
  onOpenSimulator?: () => void;
  reducedMotion?: boolean;
  lowPowerMode?: boolean;
}

export interface DirectivePillar {
  id: string;
  title: string;
  category: string;
  turnaround: string;
  deliverables: string;
}

const DIRECTIVE_PILLARS: DirectivePillar[] = [
  {
    id: 'pillar-35mm',
    title: '35mm Anamorphic Cinema Series',
    category: 'CINEMATOGRAPHY',
    turnaround: '30-45 Days',
    deliverables: '35mm Film Masters, 9.1.4 Dolby Atmos Spatial Mix, 4K HDR Digital Archive'
  },
  {
    id: 'pillar-research',
    title: 'Primary Research Dossier & Monograph',
    category: 'EDITORIAL RIGOR',
    turnaround: '14-21 Days',
    deliverables: '10,000-Word Unedited Report, Oxford Ph.D. Peer Audit, Hardcover Print Edition'
  },
  {
    id: 'pillar-telemetry',
    title: 'Zero-Cookie Edge Reader Infrastructure',
    category: 'DIGITAL ARCHITECTURE',
    turnaround: '7-10 Days',
    deliverables: 'Sub-100ms Hydration Engine, KPMG Audited Telemetry, Zero-Pixel Privacy SLA'
  }
];

export default function FinalCtaSection({
  onScheduleBriefing,
  onOpenSimulator,
  reducedMotion = false,
  lowPowerMode = false,
}: FinalCtaSectionProps) {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('pillar-35mm');
  const [showSpecDrawer, setShowSpecDrawer] = useState<boolean>(false);

  const selectedPillar = DIRECTIVE_PILLARS.find((p) => p.id === selectedPillarId) || DIRECTIVE_PILLARS[0];

  return (
    <section
      id="final-cta-section"
      aria-labelledby="final-cta-heading"
      className="py-24 md:py-36 bg-[#080809] border-t border-[#222226] text-zinc-100 relative overflow-hidden"
    >
      {/* 1. ANIMATED BACKGROUND AMBIENT GLOW & GRID */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Animated Breathing Radial Glow */}
        {!reducedMotion && !lowPowerMode && (
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.28, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,_rgba(156,132,101,0.22)_0%,_rgba(8,8,9,0)_70%)] blur-3xl"
          />
        )}

        {/* Subtle Geometric Dot Grid Pattern */}
        <div className="w-full h-full bg-[radial-gradient(#9C8465_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10 space-y-14 text-center">
        
        {/* 2. TOP EYEBROW & STATUS CHIP */}
        <div className="inline-flex items-center gap-2.5 bg-[#111113] border border-[#9C8465]/60 px-4 py-1.5 font-mono text-[10px] text-[#9C8465] uppercase tracking-widest rounded-full shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#9C8465]" />
          <span>[ FINAL_DIRECTIVE // SOVEREIGN_CO-PRODUCTION ]</span>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
        </div>

        {/* 3. MAIN HEADLINE & SUBTITLE */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2
            id="final-cta-heading"
            className="font-sans font-medium text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1]"
          >
            Initiate Your Sovereign <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#9C8465]">
              Co-Production Directive.
            </span>
          </h2>

          <p className="font-sans text-sm md:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate programmatic ad decay and brand surveillance. Partner directly with VMN Studios in Geneva for 35mm film co-productions, 10,000-word unedited research dossiers, and zero-telemetry media distribution delivered directly to verified C-suite principals.
          </p>
        </div>

        {/* 4. INTERACTIVE CO-PRODUCTION SCOPE SELECTOR */}
        <div className="bg-[#0E0E11] border border-[#222226] p-6 sm:p-8 max-w-3xl mx-auto text-left space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#222226] pb-4 font-mono text-xs">
            <span className="text-[#9C8465] font-bold uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-4 h-4" />
              <span>[ STEP 1: SELECT CO-PRODUCTION SCOPE ]</span>
            </span>
            <span className="text-zinc-500 text-[10px] uppercase">SWISS FADP & KPMG AUDITED PROTOCOL</span>
          </div>

          {/* Scope Pillar Radio Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {DIRECTIVE_PILLARS.map((pillar) => {
              const isSelected = selectedPillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`p-4 border text-left font-mono transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] ${
                    isSelected
                      ? 'bg-[#181820] border-[#9C8465] text-white shadow-lg'
                      : 'bg-[#050506] border-[#222226] text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
                  }`}
                >
                  <span className="text-[9px] text-[#9C8465] uppercase block font-bold">
                    {pillar.category}
                  </span>
                  <span className="font-sans font-semibold text-xs sm:text-sm text-white block mt-1 leading-snug">
                    {pillar.title}
                  </span>
                  <span className="text-[10px] text-zinc-500 block mt-2">
                    SLA: {pillar.turnaround}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Deliverable Spec Summary Box */}
          <div className="bg-[#050506] border border-[#1F1F24] p-4 font-mono text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-[9px] text-zinc-500 uppercase block">DELIVERABLE SPECIFICATION:</span>
              <span className="text-zinc-200 font-medium block">{selectedPillar.deliverables}</span>
            </div>
            <button
              type="button"
              onClick={() => setShowSpecDrawer(true)}
              className="text-[#9C8465] hover:text-[#B39977] text-[10px] uppercase underline flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>VIEW FULL SPEC</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 5. ACTION BUTTONS ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-xs pt-2">
          {/* Primary Action Button */}
          <button
            type="button"
            onClick={onScheduleBriefing}
            className="w-full sm:w-auto px-8 py-4 bg-[#9C8465] hover:bg-[#B39977] text-white font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[#9C8465]/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080809]"
            aria-label="Schedule Private Briefing with VMN Geneva Partners"
          >
            <span>[ SCHEDULE PRIVATE BRIEFING ]</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary Simulator Trigger */}
          {onOpenSimulator && (
            <button
              type="button"
              onClick={onOpenSimulator}
              className="w-full sm:w-auto px-8 py-4 bg-[#111113] hover:bg-[#1A1A1E] border border-[#222226] hover:border-[#9C8465] text-zinc-300 hover:text-white font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
              aria-label="Launch Telemetry Simulator"
            >
              <Sliders className="w-4 h-4 text-[#9C8465]" />
              <span>[ LAUNCH TELEMETRY SIMULATOR ]</span>
            </button>
          )}
        </div>

        {/* 6. AUDITED TRUST SIGNALS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 text-left">
          <div className="bg-[#111113] border border-[#222226] p-5 space-y-2 group hover:border-[#9C8465] transition-colors">
            <div className="flex items-center gap-2 text-[#9C8465]">
              <Lock className="w-4 h-4" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
                CONFIDENTIAL NDA SLA
              </span>
            </div>
            <p className="font-sans text-xs text-zinc-300">
              24-hour response protocol under bilateral NDA protection for unreleased IP & hardware.
            </p>
          </div>

          <div className="bg-[#111113] border border-[#222226] p-5 space-y-2 group hover:border-[#9C8465] transition-colors">
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-100">
                100% ZERO-AD PRIVACY
              </span>
            </div>
            <p className="font-sans text-xs text-zinc-300">
              Zero cookie tracking pixels or programmatic ad banner noise. Certified KPMG telemetry audit.
            </p>
          </div>

          <div className="bg-[#111113] border border-[#222226] p-5 space-y-2 group hover:border-[#9C8465] transition-colors">
            <div className="flex items-center gap-2 text-[#9C8465]">
              <Building2 className="w-4 h-4" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
                12,000+ C-SUITE REACH
              </span>
            </div>
            <p className="font-sans text-xs text-zinc-300">
              Direct delivery to verified high-net-worth subscribers, family offices, and LP partners.
            </p>
          </div>

          <div className="bg-[#111113] border border-[#222226] p-5 space-y-2 group hover:border-[#9C8465] transition-colors">
            <div className="flex items-center gap-2 text-amber-400">
              <Award className="w-4 h-4" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-100">
                CANNES GOLD ATELIER
              </span>
            </div>
            <p className="font-sans text-xs text-zinc-300">
              35mm anamorphic film masters, 10,000-word deep research dossiers, and Dolby Atmos audio engineering.
            </p>
          </div>
        </div>

        {/* 7. BOTTOM GUARANTEE BANNER */}
        <div className="pt-6 border-t border-[#222226] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-500 uppercase">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>AUDITED TELEMETRY SPECIFICATIONS: KPMG / ISO-27001 COMPLIANT</span>
          </div>

          <span>GENEVA • ZURICH • LONDON • STOCKHOLM</span>
        </div>

      </div>

      {/* 8. MODAL SPECIFICATION DRAWER */}
      <AnimatePresence>
        {showSpecDrawer && (
          <div
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSpecDrawer(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="spec-drawer-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0E0E11] border border-[#9C8465] w-full max-w-xl p-6 sm:p-8 space-y-6 text-zinc-100 shadow-2xl relative"
            >
              <div className="flex items-center justify-between border-b border-[#222226] pb-4">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#9C8465] uppercase block font-bold">
                    [ TECHNICAL DIRECTIVE SPECIFICATION ]
                  </span>
                  <h3 id="spec-drawer-title" className="font-sans text-lg font-semibold text-white">
                    {selectedPillar.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSpecDrawer(false)}
                  className="p-2 bg-[#181820] text-zinc-300 hover:text-white border border-[#222226] hover:border-[#9C8465] transition-colors cursor-pointer"
                  aria-label="Close Specification Drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 font-mono text-xs text-zinc-300">
                <div className="p-4 bg-[#050506] border border-[#222226] space-y-2">
                  <span className="text-[10px] text-[#9C8465] uppercase block font-bold">INCLUDED DELIVERABLES:</span>
                  <p className="font-sans text-sm text-white">{selectedPillar.deliverables}</p>
                </div>

                <div className="p-4 bg-[#050506] border border-[#222226] space-y-2">
                  <span className="text-[10px] text-emerald-400 uppercase block font-bold">PRIVACY & AUDIT GUARANTEE:</span>
                  <ul className="space-y-1.5 text-zinc-400 text-[11px]">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#9C8465]" />
                      <span>Zero tracking pixels, zero cookies, zero programmatic auctions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#9C8465]" />
                      <span>Swiss Federal Act on Data Protection (FADP) compliance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#9C8465]" />
                      <span>KPMG independent third-party zero-telemetry certification</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setShowSpecDrawer(false)}
                  className="px-4 py-2.5 bg-[#181820] hover:bg-[#22222C] text-zinc-300 border border-[#222226] cursor-pointer"
                >
                  CLOSE SPEC
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowSpecDrawer(false);
                    onScheduleBriefing();
                  }}
                  className="px-5 py-2.5 bg-[#9C8465] hover:bg-[#B39977] text-white font-bold uppercase flex items-center gap-2 cursor-pointer"
                >
                  <span>SCHEDULE BRIEFING</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
