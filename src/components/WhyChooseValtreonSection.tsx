import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Film,
  Building2,
  FileText,
  Globe,
  Zap,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowUpRight,
  Lock,
  Award,
  Layers,
  Scale,
  ChevronRight,
  Gauge,
  Sliders,
  Check
} from 'lucide-react';

export interface WhyChooseValtreonProps {
  reducedMotion?: boolean;
  onScheduleBriefing?: () => void;
}

export interface DifferentiatorCard {
  id: string;
  number: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  vmnStandard: {
    heading: string;
    description: string;
    badge: string;
    bullets: string[];
  };
  legacyMedia: {
    heading: string;
    description: string;
    bullets: string[];
  };
  keyMetric: string;
  keyMetricLabel: string;
}

const DIFFERENTIATORS: DifferentiatorCard[] = [
  {
    id: 'diff-privacy',
    number: '01',
    title: 'Zero Surveillance vs. Ad-Tech Tracking',
    category: 'DATA INTEGRITY',
    icon: ShieldCheck,
    vmnStandard: {
      heading: 'KPMG Audited Zero-Cookie Protocol',
      description:
        'Zero tracking pixels, zero programmatic ad scripts, zero retargeting cookies. Absolute C-suite anonymity guaranteed under Swiss Federal Act on Data Protection.',
      badge: '100% AUDITED ANONYMITY',
      bullets: [
        'KPMG third-party certified zero-telemetry transit',
        'No client IP logging or behavioral profiling',
        'Swiss jurisdictional secrecy under CHE-109.842.110'
      ]
    },
    legacyMedia: {
      heading: 'Ad-Tech Surveillance Networks',
      description:
        'Injects 40+ tracking pixels and retargeting scripts per page, selling executive reader data to programmatic ad brokers.',
      bullets: [
        'Aggressive cross-site tracking cookies',
        'Real-time reader profiling & programmatic auctions',
        'Unverified multi-tenant cloud data storage'
      ]
    },
    keyMetric: '0.00%',
    keyMetricLabel: 'Third-Party Cookies'
  },
  {
    id: 'diff-craft',
    number: '02',
    title: '35mm Optical Permanence vs. Digital Transience',
    category: 'CINEMATOGRAPHY',
    icon: Film,
    vmnStandard: {
      heading: 'Master Analog Silver Halide Vaults',
      description:
        'Captured on 35mm & 65mm analog film stock using Panavision glass. Preserved in climate-controlled Geneva vaults for 200+ years of institutional brand heritage.',
      badge: '200+ YR VAULT HERITAGE',
      bullets: [
        'Panavision anamorphic optical glass mastery',
        'Arri Alexa 65 & 35mm silver halide negatives',
        '9.1.4 Dolby Atmos spatial audio mastering'
      ]
    },
    legacyMedia: {
      heading: 'Compressed Feed Video',
      description:
        'Low-bitrate compressed 1080p digital video designed for fast mobile feed scrolling that vanishes from memory within 24 hours.',
      bullets: [
        'Heavy compression artifacts & algorithm filters',
        'Ephemeral 24-hour social media feed lifespan',
        'Lack of physical archival permanence'
      ]
    },
    keyMetric: '35mm & 65mm',
    keyMetricLabel: 'Physical Vault Reels'
  },
  {
    id: 'diff-business',
    number: '03',
    title: 'Direct Co-Production vs. Clickbait Banner Ads',
    category: 'COMMERCIAL MODEL',
    icon: Building2,
    vmnStandard: {
      heading: 'Enterprise Co-Production Alliances',
      description:
        'Direct multi-year underwriting alliances with sovereign wealth, horology, and technology leaders, completely bypassing intrusive ad networks.',
      badge: 'BYLAW-LOCKED PURITY',
      bullets: [
        '0% banner ads, pop-ups, or video pre-rolls',
        'Direct underwriting with aligned C-suite goals',
        '28 active sovereign enterprise alliances'
      ]
    },
    legacyMedia: {
      heading: 'Ad Impression Harvesting',
      description:
        'Interrupted by auto-playing video pre-rolls, banner clutter, sponsored native ads, and sensationalized clickbait titles.',
      bullets: [
        'Intrusive popup banners & autoplay audio',
        'Editorial compromised by ad-revenue targets',
        'Clickbait headline algorithms'
      ]
    },
    keyMetric: '28',
    keyMetricLabel: 'Active Enterprise Alliances'
  },
  {
    id: 'diff-rigor',
    number: '04',
    title: '10,000-Word Unedited Dossiers vs. 280-Char Soundbites',
    category: 'EDITORIAL DEPTH',
    icon: FileText,
    vmnStandard: {
      heading: 'Exhaustive Analytical Research',
      description:
        'Unedited investigative reports authored by Oxford Ph.D.s and former IMF analysts, delivering unvarnished macroeconomic & technical truth.',
      badge: 'PEER-REVIEWED RIGOR',
      bullets: [
        'Deep-dive 10,000-word unedited publications',
        'Oxford & IMF researcher editorial oversight',
        'Exhaustive geopolitical & supply chain research'
      ]
    },
    legacyMedia: {
      heading: 'Rage-Bait Soundbites',
      description:
        'Aggregated 300-word hot takes written for social algorithms, prioritizing viral outrage over nuance and accuracy.',
      bullets: [
        'Shallow surface-level summarization',
        'Social media algorithm click optimization',
        'Unverified AI-generated content churn'
      ]
    },
    keyMetric: '10,000',
    keyMetricLabel: 'Words per Primary Dossier'
  },
  {
    id: 'diff-jurisdiction',
    number: '05',
    title: 'Swiss Jurisdictional Secrecy vs. Unprotected Cloud',
    category: 'LEGAL & GOVERNANCE',
    icon: Globe,
    vmnStandard: {
      heading: 'Geneva Sovereign Protection',
      description:
        'Incorporated in Geneva, Switzerland under CHE-109.842.110. Governed by world-leading Swiss data secrecy laws and end-to-end encrypted briefing channels.',
      badge: 'CHE-109.842.110 SWISS LAW',
      bullets: [
        'Swiss Federal Act on Data Protection (FADP) compliance',
        'End-to-end encrypted PGP communication channels',
        'Zero offshore multi-tenant cloud exposure'
      ]
    },
    legacyMedia: {
      heading: 'Unrestricted Data Harvesting',
      description:
        'Hosted on foreign ad-tech cloud servers subject to third-party data broker mining, subpoena access, and commercial resale.',
      bullets: [
        'Foreign jurisdictional data exposure',
        'Unencrypted analytics storage',
        'Third-party data broker monetization'
      ]
    },
    keyMetric: 'Geneva',
    keyMetricLabel: 'Sovereign Headquarters'
  },
  {
    id: 'diff-performance',
    number: '06',
    title: 'Sub-100ms Offline Engine vs. Heavy Web Bloat',
    category: 'EDGE PERFORMANCE',
    icon: Zap,
    vmnStandard: {
      heading: 'Offline-First Edge Reader Architecture',
      description:
        'Ultra-lightweight WebAssembly engine rendering pages in under 100ms with zero cumulative layout shift (CLS = 0) and minimal CPU battery drain.',
      badge: 'SUB-100MS HYDRATION',
      bullets: [
        'Zero Cumulative Layout Shift (CLS = 0.00)',
        'Sub-100ms edge asset delivery SLA',
        'Offline reader engine for uninterrupted study'
      ]
    },
    legacyMedia: {
      heading: 'Bloated Ad Script Heavy Portals',
      description:
        'Sluggish 15MB web pages loading 80+ tracking scripts, causing jarring layout jumps, browser freezing, and battery drain.',
      bullets: [
        '10MB+ bloated script payloads',
        'High Cumulative Layout Shift (CLS > 0.25)',
        'Heavy CPU/GPU battery depletion'
      ]
    },
    keyMetric: '< 100ms',
    keyMetricLabel: 'Global Hydration SLA'
  }
];

export default function WhyChooseValtreonSection({
  reducedMotion = false,
  onScheduleBriefing
}: WhyChooseValtreonProps) {
  const [activeDiffId, setActiveDiffId] = useState<string>('diff-privacy');
  const [hoveredDiffId, setHoveredDiffId] = useState<string | null>(null);

  const activeDiff = DIFFERENTIATORS.find((d) => d.id === activeDiffId) || DIFFERENTIATORS[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="why-choose-valtreon-section"
      aria-labelledby="why-choose-heading"
      className="py-24 bg-[#080809] border-b border-[#222226] text-zinc-100 relative overflow-hidden"
    >
      {/* Background Architectural Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#9C8465]/10 via-transparent to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 space-y-20">
        {/* 1. SECTION HEADER */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#121215] border border-[#222226] px-3.5 py-1.5 rounded-full font-mono text-[11px] text-[#9C8465] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#9C8465]" />
            <span>[ THE VALTREON ADVANTAGE // KEY DIFFERENTIATORS ]</span>
          </div>

          <h2
            id="why-choose-heading"
            className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          >
            Why Global C-Suite Principals <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#9C8465]">
              Choose Valtreon Media Network.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed">
            In an era dominated by programmatic noise, ad surveillance, and ephemeral clickbait, VMN Studios delivers Swiss-grade sovereign co-production, 35mm optical permanence, and uncompromised privacy.
          </p>
        </div>

        {/* 2. KEY DIFFERENTIATORS GRID (6 CARDS) */}
        <motion.div
          variants={containerVariants}
          initial={reducedMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {DIFFERENTIATORS.map((diff) => {
            const Icon = diff.icon;
            const isSelected = activeDiffId === diff.id;
            const isHovered = hoveredDiffId === diff.id;

            return (
              <motion.div key={diff.id} variants={cardVariants} className="h-full">
                <button
                  type="button"
                  onClick={() => setActiveDiffId(diff.id)}
                  onMouseEnter={() => setHoveredDiffId(diff.id)}
                  onMouseLeave={() => setHoveredDiffId(null)}
                  onFocus={() => {
                    setActiveDiffId(diff.id);
                    setHoveredDiffId(diff.id);
                  }}
                  aria-selected={isSelected}
                  aria-controls="comparison-inspector-panel"
                  className={`w-full h-full p-8 bg-[#0E0E11] border text-left transition-all duration-300 relative group flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] ${
                    isSelected
                      ? 'border-[#9C8465] bg-[#121217] shadow-xl shadow-[#9C8465]/10'
                      : isHovered
                      ? 'border-zinc-700 bg-[#101014]'
                      : 'border-[#222226]'
                  }`}
                >
                  {/* Top Corner Markers */}
                  <div
                    className={`absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 transition-colors ${
                      isSelected ? 'border-[#9C8465]' : 'border-transparent group-hover:border-zinc-500'
                    }`}
                  />
                  <div
                    className={`absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 transition-colors ${
                      isSelected ? 'border-[#9C8465]' : 'border-transparent group-hover:border-zinc-500'
                    }`}
                  />

                  {/* Card Content */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-bold text-[#9C8465]">
                        {diff.number}
                      </span>
                      <div
                        className={`w-11 h-11 border flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-[#181820] border-[#9C8465] text-[#9C8465]'
                            : 'bg-[#141418] border-[#222226] text-zinc-400 group-hover:text-white group-hover:border-zinc-600'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-[9px] text-[#9C8465] uppercase tracking-widest block">
                        {diff.category}
                      </span>
                      <h3 className="font-sans text-xl font-semibold text-white group-hover:text-[#9C8465] transition-colors leading-snug">
                        {diff.title}
                      </h3>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {diff.vmnStandard.description}
                    </p>
                  </div>

                  {/* Footer Metric */}
                  <div className="mt-8 pt-4 border-t border-[#1F1F24] flex items-center justify-between font-mono text-[11px]">
                    <div>
                      <span className="text-zinc-500 block text-[9px] uppercase">
                        {diff.keyMetricLabel}
                      </span>
                      <span className="text-white font-bold">
                        {diff.keyMetric}
                      </span>
                    </div>

                    <div
                      className={`flex items-center gap-1 transition-transform ${
                        isSelected ? 'text-[#9C8465] translate-x-1' : 'text-zinc-500 group-hover:text-zinc-300'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-semibold">COMPARE</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 3. SIDE-BY-SIDE COMPARISON INSPECTOR PANEL */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDiff.id}
            id="comparison-inspector-panel"
            role="region"
            aria-label={`Side-by-side comparison for ${activeDiff.title}`}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0E0E11] border border-[#9C8465]/60 p-8 sm:p-10 relative shadow-2xl space-y-8"
          >
            {/* Header Inspector Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#222226] font-mono text-[11px]">
              <div className="flex items-center gap-2 text-[#9C8465]">
                <Sliders className="w-4 h-4" />
                <span className="uppercase font-semibold">
                  [ COMPARATIVE INSPECTOR // {activeDiff.title.toUpperCase()} ]
                </span>
              </div>
              <span className="text-emerald-400 bg-[#050506] px-3 py-1 border border-[#222226] uppercase">
                BADGE: {activeDiff.vmnStandard.badge}
              </span>
            </div>

            {/* Dual Comparison Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LEFT COLUMN: VMN SOVEREIGN STANDARD */}
              <div className="bg-[#050506] border border-[#9C8465] p-6 sm:p-8 space-y-6 relative">
                <div className="flex items-center justify-between pb-3 border-b border-[#1F1F24]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#9C8465]" />
                    <span className="font-mono text-xs text-[#9C8465] font-bold uppercase tracking-wider">
                      VMN SOVEREIGN STANDARD
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5">
                    KPMG CERTIFIED
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans text-xl font-semibold text-white">
                    {activeDiff.vmnStandard.heading}
                  </h4>
                  <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                    {activeDiff.vmnStandard.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#1F1F24]">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                    VERIFIED PROTOCOL FEATURES:
                  </span>
                  <ul className="space-y-2 font-mono text-xs text-zinc-200">
                    {activeDiff.vmnStandard.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#9C8465] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT COLUMN: TRADITIONAL PROGRAMMATIC MEDIA */}
              <div className="bg-[#050506] border border-[#222226] p-6 sm:p-8 space-y-6 opacity-75 hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between pb-3 border-b border-[#1F1F24]">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-rose-500" />
                    <span className="font-mono text-xs text-rose-400 font-bold uppercase tracking-wider">
                      LEGACY PROGRAMMATIC MEDIA
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-rose-400 bg-rose-950/40 border border-rose-800/40 px-2 py-0.5">
                    HIGH SURVEILLANCE
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans text-xl font-semibold text-zinc-300">
                    {activeDiff.legacyMedia.heading}
                  </h4>
                  <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                    {activeDiff.legacyMedia.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#1F1F24]">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                    LEGACY FlAWS & RISKS:
                  </span>
                  <ul className="space-y-2 font-mono text-xs text-zinc-400">
                    {activeDiff.legacyMedia.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Directive Trigger */}
            <div className="pt-4 border-t border-[#222226] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-zinc-400">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>SWISS JURISDICTIONAL PROTECTION CHE-109.842.110</span>
              </div>

              {onScheduleBriefing && (
                <button
                  type="button"
                  onClick={onScheduleBriefing}
                  className="px-6 py-3 bg-[#9C8465] hover:bg-[#B39977] text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>REQUEST SOVEREIGN CO-PRODUCTION BRIEFING</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 4. ENTERPRISE TRUST & COMPLIANCE BADGES BANNER */}
        <div className="bg-[#0E0E11] border border-[#222226] p-8 sm:p-10 space-y-6 text-center">
          <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest block">
            [ INSTITUTIONAL CERTIFICATION & AUDIT FRAMEWORK ]
          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs text-zinc-300">
            <div className="p-4 bg-[#050506] border border-[#1F1F24] space-y-1">
              <ShieldCheck className="w-5 h-5 text-[#9C8465] mx-auto" />
              <span className="font-bold text-white block">ISO 27001</span>
              <span className="text-[10px] text-zinc-500">Security Management</span>
            </div>

            <div className="p-4 bg-[#050506] border border-[#1F1F24] space-y-1">
              <Lock className="w-5 h-5 text-emerald-400 mx-auto" />
              <span className="font-bold text-white block">KPMG Audited</span>
              <span className="text-[10px] text-zinc-500">Zero-Cookie Telemetry</span>
            </div>

            <div className="p-4 bg-[#050506] border border-[#1F1F24] space-y-1">
              <Globe className="w-5 h-5 text-[#9C8465] mx-auto" />
              <span className="font-bold text-white block">Swiss FADP</span>
              <span className="text-[10px] text-zinc-500">Federal Data Act</span>
            </div>

            <div className="p-4 bg-[#050506] border border-[#1F1F24] space-y-1">
              <Award className="w-5 h-5 text-[#9C8465] mx-auto" />
              <span className="font-bold text-white block"> CHE-109.842.110</span>
              <span className="text-[10px] text-zinc-500">Geneva Commercial Register</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
