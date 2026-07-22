import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Activity,
  UserCheck,
  TrendingUp,
  RotateCcw,
  Layers,
  CheckCircle2,
  ExternalLink,
  Eye,
  Award
} from 'lucide-react';
import DecryptCounter from './DecryptCounter';
import { LatencyTier } from '../types';

interface HeroSectionProps {
  onScheduleBriefing: () => void;
  onReRunBoot?: () => void;
  latency?: LatencyTier;
  reducedMotion?: boolean;
  lowPowerMode?: boolean;
}

export default function HeroSection({
  onScheduleBriefing,
  onReRunBoot,
  latency = 'fast',
  reducedMotion = false,
  lowPowerMode = false,
}: HeroSectionProps) {
  // Hero Analytics Tab State: 'telemetry' | 'creators' | 'hygiene'
  const [activeTab, setActiveTab] = useState<'telemetry' | 'creators' | 'hygiene'>('telemetry');
  
  // Real-time timecode ticker for telemetry feel
  const [currentTimeCode, setCurrentTimeCode] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTimeCode(now.toISOString().substring(11, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Mock Sparkline data for hero analytics preview
  const sparklineBars = [35, 42, 58, 48, 65, 82, 74, 90, 85, 98, 110, 124];

  // Top Creators preview data
  const HERO_CREATORS = [
    {
      name: 'Elena Vance',
      role: 'Cinematic Commercials',
      specialty: '35mm Anamorphic',
      reach: '4.2M',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      badge: 'Tier 01',
    },
    {
      name: 'Marcus Thorne',
      role: 'Tech & Product Narrative',
      specialty: 'Minimalist Industrial',
      reach: '3.8M',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      badge: 'Verified',
    },
    {
      name: 'Maya Lin',
      role: 'Brand Documentaries',
      specialty: 'Spatial Sound & Film',
      reach: '5.1M',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
      badge: 'Cannes Awarded',
    },
  ];

  return (
    <section
      id="hero-curated-horizon"
      aria-labelledby="hero-display-heading"
      className="relative py-16 md:py-28 w-full max-w-7xl mx-auto px-6 overflow-hidden"
    >
      {/* 1. AMBIENT BACKGROUND GLOW & SWISS GRID LINES */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Champagne Gold Radial Light Orb */}
        {!lowPowerMode && (
          <div className="absolute -top-24 left-1/3 w-[500px] h-[500px] bg-[#9C8465]/15 rounded-full blur-[120px] opacity-60 animate-pulse" />
        )}

        {/* Decorative Grid Accent Lines */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#222226]" />
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-[#222226]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#9C8465]/30 to-transparent" />
      </div>

      {/* 2. MAIN HERO CONTENT GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch"
      >
        {/* LEFT COLUMN: TYPOGRAPHIC DISPLAY & CTA ENGINE (8 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8" id="hero-typographic-statements">
          <div className="space-y-6">
            
            {/* MONOSPACE TELEMETRY EYEBROW */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase">
              <span className="px-2.5 py-1 bg-[#111113] border border-[#222226] text-[#9C8465] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                [ CH_01 // INTELLECTUAL_LUXURY ]
              </span>
              <span className="text-zinc-500 hidden sm:inline">//</span>
              <span className="text-zinc-400 font-mono hidden sm:inline">
                SWISS_HQ: 47.3769° N, 8.5417° E
              </span>
              <span className="text-zinc-600 hidden sm:inline">|</span>
              <span className="text-zinc-500 font-mono">{currentTimeCode}</span>
            </motion.div>

            {/* MAIN ANIMATED DISPLAY HEADLINE */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1
                id="hero-display-heading"
                className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zinc-100 tracking-tight leading-[1.1]"
              >
                Bespoke media co-production and{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C8465] via-amber-200 to-[#9C8465] italic font-serif">
                  quiet, curated
                </span>{' '}
                sponsorship ecosystems.
              </h1>
            </motion.div>

            {/* MISSION SUBTITLE COPY */}
            <motion.div variants={itemVariants}>
              <p className="font-sans text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed">
                We reject algorithmic noise and intrusive advertising. Valtreon partners signed cinematic directors, specialist editors, and investigative journalists with elite global brands to engineer high-retention commercial storytelling.
              </p>
            </motion.div>
          </div>

          {/* HIGH-STAKES ACTION CTA GROUP */}
          <motion.div variants={itemVariants} className="space-y-6 pt-2">
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary High-Stakes CTA */}
              <button
                onClick={onScheduleBriefing}
                id="cta-hero-primary"
                className="group relative overflow-hidden bg-[#9C8465] hover:bg-[#B39977] text-white font-mono text-xs uppercase px-7 py-4 transition-all duration-300 min-h-[48px] flex items-center gap-3 cursor-pointer shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080809]"
              >
                {/* Shimmer Effect overlay */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="relative z-10 font-semibold tracking-wider">[ SCHEDULE PRIVATE BRIEFING ]</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Roster Anchor Button */}
              <a
                href="#creative-roster-section"
                id="cta-hero-secondary"
                className="bg-[#111113] hover:bg-[#1A1A1E] border border-[#222226] hover:border-[#9C8465]/50 text-zinc-300 hover:text-white px-6 py-4 font-mono text-xs uppercase transition-colors min-h-[48px] flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
              >
                <Eye className="w-3.5 h-3.5 text-[#9C8465]" />
                <span>EXPLORE DIRECTORS</span>
              </a>

              {/* Optional Re-run Boot Button */}
              {onReRunBoot && (
                <button
                  onClick={onReRunBoot}
                  id="btn-re-run-boot"
                  className="p-3 text-zinc-500 hover:text-zinc-200 bg-[#111113] border border-[#222226] hover:border-zinc-700 font-mono text-xs transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                  aria-label="Re-run terminal boot sequence"
                  title="Re-run System Boot Sequence"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* TRUST ACKNOWLEDGEMENT FOOTPRINT */}
            <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-[11px] text-zinc-500 border-t border-[#222226]/60">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#9C8465]" />
                <span>CONTRACT FLOOR: <strong className="text-zinc-300">$75,000 ACV</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>ZERO COOKIE TRACKING</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-amber-500" />
                <span>AUDIT LATENCY: <strong className="text-zinc-300">{latency === 'fast' ? '120ms' : '500ms'}</strong></span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE HERO ANALYTICS & CREATOR PREVIEW CARD (5 Cols) */}
        <motion.div
          variants={itemVariants}
          id="hero-analytics-preview-card"
          className="lg:col-span-5 bg-[#111113] border border-[#222226] p-6 space-y-6 relative flex flex-col justify-between shadow-2xl"
        >
          {/* Subtle Top Gold Border Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9C8465] to-transparent" />

          {/* CARD HEADER & TAB SWITCHER */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-[#222226] pb-3">
              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                [ REAL-TIME PORTAL LEDGER ]
              </span>
              <span className="font-mono text-[9px] text-emerald-400 bg-emerald-950/30 px-2 py-0.5 border border-emerald-900/50">
                LIVE TELEMETRY
              </span>
            </div>

            {/* INTERACTIVE HERO PREVIEW TABS */}
            <div className="grid grid-cols-3 gap-1 p-1 bg-[#080809] border border-[#222226] font-mono text-[10px] uppercase">
              <button
                onClick={() => setActiveTab('telemetry')}
                className={`py-2 px-1 text-center transition-colors cursor-pointer ${
                  activeTab === 'telemetry'
                    ? 'bg-[#1A1A1E] text-white font-semibold border-b-2 border-[#9C8465]'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                TELEMETRY
              </button>
              <button
                onClick={() => setActiveTab('creators')}
                className={`py-2 px-1 text-center transition-colors cursor-pointer ${
                  activeTab === 'creators'
                    ? 'bg-[#1A1A1E] text-white font-semibold border-b-2 border-[#9C8465]'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                CREATORS
              </button>
              <button
                onClick={() => setActiveTab('hygiene')}
                className={`py-2 px-1 text-center transition-colors cursor-pointer ${
                  activeTab === 'hygiene'
                    ? 'bg-[#1A1A1E] text-white font-semibold border-b-2 border-[#9C8465]'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                HYGIENE
              </button>
            </div>
          </div>

          {/* DYNAMIC TAB CONTENT BODY */}
          <div className="min-h-[220px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: TELEMETRY & SPARKLINE BAR PREVIEW */}
              {activeTab === 'telemetry' && (
                <motion.div
                  key="tab-telemetry"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-2 gap-4 font-mono">
                    <div className="bg-[#080809] border border-[#222226] p-3 space-y-1">
                      <span className="text-[9px] text-zinc-500 block uppercase">AVG DEAL SIZE (ACV)</span>
                      <div className="text-xl text-zinc-100 font-bold">
                        <DecryptCounter value={124500} format="currency" disabled={reducedMotion || lowPowerMode} />
                      </div>
                      <span className="text-[9px] text-emerald-400 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> +18.4% YoY Growth
                      </span>
                    </div>

                    <div className="bg-[#080809] border border-[#222226] p-3 space-y-1">
                      <span className="text-[9px] text-zinc-500 block uppercase">CLIENT CSAT AUDIT</span>
                      <div className="text-xl text-zinc-100 font-bold">
                        <DecryptCounter value={98.4} format="percent" disabled={reducedMotion || lowPowerMode} />
                      </div>
                      <span className="text-[9px] text-zinc-400">42 Enterprise Brands</span>
                    </div>
                  </div>

                  {/* SPARKLINE VISUALIZER */}
                  <div className="bg-[#080809] border border-[#222226] p-3 space-y-2">
                    <div className="flex justify-between items-center font-mono text-[9px] text-zinc-500">
                      <span>AUDIENCE IMPRESSION VOLUME (30-DAY)</span>
                      <span className="text-[#9C8465]">14.2M TOTAL</span>
                    </div>

                    <div className="h-16 flex items-end gap-1.5 pt-2">
                      {sparklineBars.map((val, idx) => (
                        <div
                          key={idx}
                          style={{ height: `${(val / 124) * 100}%` }}
                          className={`flex-1 transition-all duration-500 ${
                            idx === sparklineBars.length - 1
                              ? 'bg-[#9C8465]'
                              : 'bg-zinc-800 hover:bg-zinc-600'
                          }`}
                          title={`Period ${idx + 1}: ${val * 100}k impressions`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: CREATOR NETWORK VISUALIZATION */}
              {activeTab === 'creators' && (
                <motion.div
                  key="tab-creators"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">
                    // DIRECTORIAL TALENT SPOTLIGHT
                  </span>

                  <div className="space-y-2">
                    {HERO_CREATORS.map((creator, cIdx) => (
                      <div
                        key={cIdx}
                        className="bg-[#080809] border border-[#222226] hover:border-[#9C8465]/50 p-2.5 flex items-center justify-between transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={creator.image}
                            alt={creator.name}
                            className="w-9 h-9 object-cover border border-[#222226] group-hover:border-[#9C8465] transition-colors"
                          />
                          <div>
                            <span className="font-mono text-xs text-zinc-200 group-hover:text-[#9C8465] font-semibold block transition-colors">
                              {creator.name}
                            </span>
                            <span className="font-sans text-[11px] text-zinc-500 block">
                              {creator.specialty}
                            </span>
                          </div>
                        </div>

                        <div className="text-right font-mono">
                          <span className="text-xs text-zinc-100 font-semibold block">
                            {creator.reach}
                          </span>
                          <span className="text-[9px] text-[#9C8465] px-1.5 py-0.5 bg-[#111113] border border-[#222226] inline-block">
                            {creator.badge}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 3: DIGITAL HYGIENE GUARANTEE LEDGER */}
              {activeTab === 'hygiene' && (
                <motion.div
                  key="tab-hygiene"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="bg-[#080809] border border-[#222226] p-4 space-y-3 font-mono text-xs">
                    <span className="text-[#9C8465] uppercase font-semibold text-[10px] block border-b border-[#222226] pb-2">
                      // PERMANENT DIGITAL HYGIENE DIRECTIVE
                    </span>

                    <ul className="space-y-2 text-zinc-300 text-[11px]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Zero Popups:</strong> Uninterrupted luxury user experience without intrusive dialogs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Zero Programmatic Ad Networks:</strong> Direct B2B co-production only.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Zero Third-Party Cookies:</strong> Complete privacy compliance & data sovereignty.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CARD FOOTER LEDGER CODE */}
          <div className="border-t border-[#222226] pt-3 flex justify-between items-center font-mono text-[9px] text-zinc-500">
            <span>VMN-LEDGER // SECURE_AUDIT</span>
            <a
              href="#performance-dashboard"
              className="text-[#9C8465] hover:underline flex items-center gap-1"
            >
              FULL TELEMETRY <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
