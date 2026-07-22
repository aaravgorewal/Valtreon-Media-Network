import React from 'react';
import { motion } from 'motion/react';
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
  Zap
} from 'lucide-react';

interface FinalCtaSectionProps {
  onScheduleBriefing: () => void;
  onOpenSimulator?: () => void;
  reducedMotion?: boolean;
  lowPowerMode?: boolean;
}

export default function FinalCtaSection({
  onScheduleBriefing,
  onOpenSimulator,
  reducedMotion = false,
  lowPowerMode = false,
}: FinalCtaSectionProps) {
  return (
    <section
      id="final-cta-section"
      aria-labelledby="final-cta-heading"
      className="py-24 md:py-36 bg-[#080809] border-t border-[#222226] text-zinc-100 relative overflow-hidden"
    >
      {/* 1. ANIMATED BACKGROUND AMBIENT GLOW & GRID */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Radial Pulse */}
        {!reducedMotion && !lowPowerMode && (
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(156,132,101,0.25)_0%,_rgba(11,11,13,0)_70%)] blur-3xl pointer-events-none"
          />
        )}

        {/* Subtle Tech Grid Texture */}
        <div className="w-full h-full bg-[radial-gradient(#9C8465_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10 space-y-12 text-center">
        
        {/* 2. TOP EYEROW & STATUS CHIP */}
        <div className="inline-flex items-center gap-2 bg-[#111113] border border-[#9C8465]/60 px-4 py-1.5 font-mono text-[10px] text-[#9C8465] uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>[ FINAL_DIRECTIVE // SOVEREIGN_UNDERWRITING ]</span>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
        </div>

        {/* 3. MAIN HEADLINE & SUBTITLE */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2
            id="final-cta-heading"
            className="font-sans font-medium text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1]"
          >
            Initiate Your Sovereign Co-Production Directive
          </h2>

          <p className="font-sans text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Eliminate programmatic ad decay. Partner directly with VMN Studios for custom research dossiers, 35mm film co-productions, and spatial audio installations delivered directly to high-net-worth principals.
          </p>
        </div>

        {/* 4. ACTION BUTTONS ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-xs pt-2">
          {/* Primary Action Button */}
          <button
            onClick={onScheduleBriefing}
            className="w-full sm:w-auto px-8 py-4 bg-[#9C8465] hover:bg-[#B39977] text-white font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[#9C8465]/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080809]"
          >
            <span>[ SCHEDULE PRIVATE BRIEFING ]</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary Simulator Trigger */}
          {onOpenSimulator && (
            <button
              onClick={onOpenSimulator}
              className="w-full sm:w-auto px-8 py-4 bg-[#111113] hover:bg-[#1A1A1E] border border-[#222226] hover:border-[#9C8465] text-zinc-300 hover:text-white font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
            >
              <Sliders className="w-4 h-4 text-[#9C8465]" />
              <span>[ LAUNCH TELEMETRY SIMULATOR ]</span>
            </button>
          )}
        </div>

        {/* 5. AUDITED TRUST SIGNALS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 text-left">
          <div className="bg-[#111113] border border-[#222226] p-5 space-y-2 group hover:border-[#9C8465] transition-colors">
            <div className="flex items-center gap-2 text-[#9C8465]">
              <Lock className="w-4 h-4" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
                CONFIDENTIAL NDA
              </span>
            </div>
            <p className="font-sans text-xs text-zinc-300">
              24-hour response protocol. Strict bilateral NDA protection for unreleased hardware & brand IP.
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
              Zero cookie tracking pixels or programmatic ad banner noise. Certified independent telemetry.
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
              Direct delivery to verified high-net-worth subscribers, family office principals, and LP partners.
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

        {/* 6. BOTTOM GUARANTEE BANNER */}
        <div className="pt-6 border-t border-[#222226] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-500 uppercase">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>AUDITED TELEMETRY SPECIFICATIONS: KPMG / ISO-27001 COMPLIANT</span>
          </div>

          <span>GENEVA • ZURICH • LONDON • STOCKHOLM</span>
        </div>

      </div>
    </section>
  );
}
