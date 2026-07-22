import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Lock,
  Building2,
  FileText,
  Globe,
  Award,
  CheckCircle2,
  Compass,
  Play
} from 'lucide-react';

export interface AboutHeroSectionProps {
  reducedMotion?: boolean;
  lowPowerMode?: boolean;
  onScheduleBriefing?: () => void;
}

export default function AboutHeroSection({
  reducedMotion = false,
  lowPowerMode = false,
  onScheduleBriefing
}: AboutHeroSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative min-h-[85vh] lg:min-h-screen bg-[#080809] border-b border-[#222226] text-zinc-100 flex items-center justify-center pt-12 pb-20 overflow-hidden"
    >
      {/* BACKGROUND VISUAL ARCHITECTURE */}
      {/* 1. Subtle Radial Gold Glow */}
      {!lowPowerMode && (
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#9C8465]/15 via-[#9C8465]/5 to-transparent blur-3xl pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* 2. Architectural Grid Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial={reducedMotion ? 'visible' : 'hidden'}
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* LEFT COLUMN: MANIFESTO & HEADLINE */}
          <div className="lg:col-span-7 space-y-8">
            {/* Institution Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <div className="flex items-center gap-2.5 bg-[#121215] border border-[#2A2A30] px-3.5 py-1.5 rounded-full font-mono text-[11px] text-[#9C8465] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#9C8465] animate-pulse" />
                <span>[ ABOUT VMN ATELIER // CHE-109.842.110 ]</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1
                id="about-hero-heading"
                className="font-sans font-medium text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]"
              >
                Engineering <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#9C8465]">
                  Sovereign Media
                </span>{' '}
                & Untouched Telemetry.
              </h1>
              <p className="font-mono text-xs sm:text-sm text-[#9C8465] tracking-widest uppercase">
                // ZERO-ADVERTISING CO-PRODUCTION ATELIER FOR ENTERPRISE LEADERS
              </p>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal"
            >
              Founded in Geneva, Valtreon Media Network (VMN Studios) replaces programmatic ad noise with 35mm anamorphic brand archives, 10,000-word unedited C-suite dossiers, and KPMG-audited zero-cookie telemetry for sovereign finance, hardware, and luxury houses.
            </motion.p>

            {/* CTAs & Interactive Directives */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onScheduleBriefing}
                className="px-8 py-4 bg-[#9C8465] hover:bg-[#B39977] text-white font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer shadow-lg shadow-[#9C8465]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080809]"
                aria-label="Schedule a private briefing with VMN Studio principals"
              >
                <span>SCHEDULE PRIVATE BRIEFING</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#principles-section"
                className="px-8 py-4 bg-[#111114] hover:bg-[#1A1A1E] border border-[#222226] hover:border-[#9C8465] text-zinc-300 hover:text-white font-mono text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2.5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
              >
                <Compass className="w-4 h-4 text-[#9C8465]" />
                <span>EXPLORE MANIFESTO</span>
              </a>
            </motion.div>

            {/* Institutional Credentials Grid */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#222226] grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-[11px]"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Building2 className="w-3.5 h-3.5 text-[#9C8465]" />
                  <span>JURISDICTION</span>
                </div>
                <p className="text-white font-semibold">SWISS SA</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ISO SECURITY</span>
                </div>
                <p className="text-white font-semibold">ISO 27001</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <FileText className="w-3.5 h-3.5 text-[#9C8465]" />
                  <span>AUDITED BY</span>
                </div>
                <p className="text-white font-semibold">KPMG TELEMETRY</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>LOCATIONS</span>
                </div>
                <p className="text-white font-semibold">4 GLOBAL CITIES</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: VISUAL ATELIER PREVIEW CARD */}
          <div className="lg:col-span-5">
            <motion.div
              variants={itemVariants}
              className="relative bg-[#0E0E11] border border-[#222226] p-4 sm:p-6 shadow-2xl group"
            >
              {/* Subtle Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#9C8465]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#9C8465]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#9C8465]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#9C8465]" />

              {/* Header Telemetry Status */}
              <div className="flex items-center justify-between pb-3 border-b border-[#222226] font-mono text-[10px] text-zinc-400 uppercase">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>LIVE_ATELIER_STREAM</span>
                </div>
                <span className="text-[#9C8465]">35MM // 4K REEL</span>
              </div>

              {/* Media Aspect Container */}
              <div className="relative aspect-[16/10] bg-[#050506] border border-[#1F1F24] overflow-hidden my-4 group">
                {/* Visual Image Asset */}
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
                  alt="VMN Studios 35mm Anamorphic Film Production - Geneva Atelier"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-transparent to-black/40 pointer-events-none" />

                {/* Interactive Play / Reel Trigger */}
                <button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="absolute inset-0 flex items-center justify-center group/btn cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                  aria-label="Play VMN Atelier 35mm Showreel Preview"
                >
                  <div className="w-14 h-14 rounded-full bg-[#080809]/80 backdrop-blur-md border border-[#9C8465] flex items-center justify-center text-[#9C8465] group-hover/btn:scale-110 group-hover/btn:bg-[#9C8465] group-hover/btn:text-white transition-all shadow-xl">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                </button>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] text-zinc-300 bg-[#080809]/80 backdrop-blur-sm border border-[#222226] px-3 py-1.5">
                  <span className="truncate">GENEVA_35MM_ARRI_ALEXA_65</span>
                  <span className="text-[#9C8465] font-semibold shrink-0">RAW 4.4K</span>
                </div>
              </div>

              {/* Live Telemetry Data Box */}
              <div className="bg-[#050506] border border-[#1A1A1E] p-3.5 space-y-2 font-mono text-[10px]">
                <div className="flex justify-between text-zinc-400">
                  <span>UNTRACKED COOKIE TELEMETRY:</span>
                  <span className="text-emerald-400 font-semibold">0% EXPOSED</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>AUDITED ANNUAL REACH:</span>
                  <span className="text-white font-semibold">14.8M DECISION MAKERS</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>SOVEREIGN RETENTION:</span>
                  <span className="text-[#9C8465] font-semibold">98.4% C-SUITE</span>
                </div>
              </div>

              {/* Bottom Guarantee Lock */}
              <div className="mt-4 pt-3 border-t border-[#1F1F24] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Lock className="w-3 h-3" />
                  <span>ZERO PROGRAMMATIC ADS</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Award className="w-3 h-3 text-[#9C8465]" />
                  <span>EST. 2021</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
