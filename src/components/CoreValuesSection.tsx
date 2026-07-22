import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap,
  Eye,
  Film,
  Gauge,
  Lock,
  Scale,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Building2,
  Cpu
} from 'lucide-react';

export interface CoreValuesSectionProps {
  reducedMotion?: boolean;
}

export interface CoreValue {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  metricValue: string;
  metricLabel: string;
  keyPillar: string;
  details: string[];
}

const CORE_VALUES: CoreValue[] = [
  {
    id: 'val-innovation',
    number: '01',
    title: 'Innovation',
    tagline: 'SOVEREIGN ARCHITECTURES & NEXT-GEN MEDIA PIPELINES',
    description:
      'Pioneering edge-distributed offline-first media delivery, 4.4K RAW cinema streaming pipelines, and real-time zero-latency telemetry verification.',
    icon: Cpu,
    metricValue: '4.4K RAW',
    metricLabel: 'Cinema Pipeline Standard',
    keyPillar: 'Custom Engine Architecture',
    details: [
      'Edge-cached offline reader engine with zero client tracking',
      'Real-time 4.4K RAW showreel streaming with zero-buffering CDN',
      'Direct hardware-accelerated WebGL telemetry canvas layers'
    ]
  },
  {
    id: 'val-transparency',
    number: '02',
    title: 'Transparency',
    tagline: 'KPMG AUDITED & OPEN TELEMETRY PROTOCOLS',
    description:
      'Uncompromising clarity in data handling. Every metric, subscriber index, and co-production ledger is verified by third-party Swiss auditors under ISO 27001.',
    icon: Eye,
    metricValue: '100% Audited',
    metricLabel: 'KPMG Verification Rating',
    keyPillar: 'Zero Hidden Telemetry',
    details: [
      'Annual third-party KPMG security and privacy audits',
      'Publicly inspectable zero-cookie data transit manifests',
      'Immutable co-production underwriting ledgers'
    ]
  },
  {
    id: 'val-creativity',
    number: '03',
    title: 'Creativity',
    tagline: '35MM ANAMORPHIC CINEMATIC CRAWL & ESSAY FORM',
    description:
      'Blending 65mm analog film emulsions with deep narrative craft. We elevate executive brand stories from transient advertisement to permanent cultural archives.',
    icon: Film,
    metricValue: '35mm & 65mm',
    metricLabel: 'Analog Silver Halide Vaults',
    keyPillar: 'Master Cinematography',
    details: [
      'Arri Alexa 65 & Panavision anamorphic glass archives',
      '10,000-word unedited deep research essay format',
      '9.1.4 Dolby Atmos spatial audio post-production suites'
    ]
  },
  {
    id: 'val-performance',
    number: '04',
    title: 'Performance',
    tagline: 'SUB-100MS LATENCY & 98.4% C-SUITE RETENTION',
    description:
      'Ultra-high efficiency across all distribution layers. Sub-second document hydration, zero layout shift (CLS = 0), and 98.4% executive reader engagement.',
    icon: Gauge,
    metricValue: '< 100ms',
    metricLabel: 'Hydration Latency SLA',
    keyPillar: 'High-Density Delivery',
    details: [
      'Zero Cumulative Layout Shift (CLS = 0.00)',
      '98.4% executive subscription renewal and trust index',
      'Sub-100ms global static edge asset delivery'
    ]
  },
  {
    id: 'val-trust',
    number: '05',
    title: 'Trust',
    tagline: 'SWISS JURISDICTIONAL SECRECY & ALLIANCES',
    description:
      'Incorporated in Geneva under CHE-109.842.110. Safeguarding client intelligence and strategic directives with military-grade Swiss data protection laws.',
    icon: Lock,
    metricValue: 'Swiss SA',
    metricLabel: 'Geneva Sovereign Jurisdiction',
    keyPillar: 'Sovereign Protection',
    details: [
      'Swiss Federal Act on Data Protection (FADP) compliance',
      'End-to-end encrypted private briefing channels',
      '28 active enterprise co-production alliances'
    ]
  },
  {
    id: 'val-integrity',
    number: '06',
    title: 'Integrity',
    tagline: 'ZERO-ADVERTISING MANDATE LOCKED IN BYLAWS',
    description:
      'We never accept programmatic banner ads, sponsored clickbait, or user tracking. Our revenue derives strictly from direct co-production underwriting.',
    icon: Scale,
    metricValue: '0.00%',
    metricLabel: 'Programmatic Ad Admittance',
    keyPillar: 'Unpolluted Editorial',
    details: [
      'Bylaw-locked zero-advertising commercial model',
      'Zero third-party trackers or retargeting pixels',
      'Peer-reviewed investigative research standards'
    ]
  }
];

export default function CoreValuesSection({
  reducedMotion = false
}: CoreValuesSectionProps) {
  const [activeValueId, setActiveValueId] = useState<string>('val-innovation');
  const [hoveredValueId, setHoveredValueId] = useState<string | null>(null);

  const activeValue = CORE_VALUES.find((v) => v.id === activeValueId) || CORE_VALUES[0];

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
      id="core-values-section"
      aria-labelledby="core-values-heading"
      className="py-24 bg-[#0B0B0D] border-b border-[#222226] text-zinc-100 relative overflow-hidden"
    >
      {/* Subtle Background Structural Grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        {/* 1. HEADER & INTRO */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#121215] border border-[#222226] px-3.5 py-1.5 rounded-full font-mono text-[11px] text-[#9C8465] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#9C8465]" />
            <span>[ INSTITUTIONAL CORE VALUES & FOUNDATIONAL PILLARS ]</span>
          </div>

          <h2
            id="core-values-heading"
            className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          >
            Guided by Six Principles of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#9C8465]">
              Sovereign Excellence.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed">
            Every architectural decision, editorial line, and camera setup at VMN Studios is governed by six immutable values that guarantee absolute fidelity to our C-suite partners.
          </p>
        </div>

        {/* 2. CORE VALUES GRID (6 PREMIUM CARDS) */}
        <motion.div
          variants={containerVariants}
          initial={reducedMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CORE_VALUES.map((value) => {
            const Icon = value.icon;
            const isSelected = activeValueId === value.id;
            const isHovered = hoveredValueId === value.id;

            return (
              <motion.div
                key={value.id}
                variants={cardVariants}
                className="h-full"
              >
                <button
                  type="button"
                  onClick={() => setActiveValueId(value.id)}
                  onMouseEnter={() => setHoveredValueId(value.id)}
                  onMouseLeave={() => setHoveredValueId(null)}
                  onFocus={() => {
                    setActiveValueId(value.id);
                    setHoveredValueId(value.id);
                  }}
                  aria-selected={isSelected}
                  aria-controls="value-details-panel"
                  className={`w-full h-full p-8 bg-[#0E0E11] border text-left transition-all duration-300 relative group flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] ${
                    isSelected
                      ? 'border-[#9C8465] bg-[#121217] shadow-xl shadow-[#9C8465]/10'
                      : isHovered
                      ? 'border-zinc-700 bg-[#101014]'
                      : 'border-[#222226]'
                  }`}
                >
                  {/* Top Corner Frame Accents */}
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

                  {/* Top Content Area */}
                  <div className="space-y-6">
                    {/* Number & Icon Row */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-bold text-[#9C8465]">
                        {value.number}
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

                    {/* Title & Tagline */}
                    <div className="space-y-2">
                      <h3 className="font-sans text-2xl font-semibold text-white group-hover:text-[#9C8465] transition-colors">
                        {value.title}
                      </h3>
                      <p className="font-mono text-[9px] text-[#9C8465] uppercase tracking-wider">
                        {value.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom Footer Area */}
                  <div className="mt-8 pt-4 border-t border-[#1F1F24] flex items-center justify-between font-mono text-[11px]">
                    <div>
                      <span className="text-zinc-500 block text-[9px] uppercase">
                        {value.metricLabel}
                      </span>
                      <span className="text-white font-bold">
                        {value.metricValue}
                      </span>
                    </div>

                    <div
                      className={`flex items-center gap-1 transition-transform ${
                        isSelected ? 'text-[#9C8465] translate-x-1' : 'text-zinc-500 group-hover:text-zinc-300'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-semibold">INSPECT</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 3. ACTIVE VALUE INSPECTOR PANEL (EXHAUSTIVE TECHNICAL SPECIFICATION) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeValue.id}
            id="value-details-panel"
            role="region"
            aria-label={`Detailed specification for ${activeValue.title}`}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0E0E11] border border-[#9C8465]/60 p-8 sm:p-10 relative shadow-2xl space-y-6"
          >
            {/* Top Bar Status */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#222226] font-mono text-[11px]">
              <div className="flex items-center gap-2 text-[#9C8465]">
                <ShieldCheck className="w-4 h-4" />
                <span className="uppercase font-semibold">
                  [ ACTIVE VALUE SPECIFICATION // {activeValue.title.toUpperCase()} ]
                </span>
              </div>
              <span className="text-zinc-400 bg-[#15151A] px-3 py-1 border border-[#222226]">
                PILLAR: {activeValue.keyPillar.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Deep Narrative */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="font-sans text-2xl text-white font-medium">
                  Institutional Execution: {activeValue.title}
                </h4>
                <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                  {activeValue.description} Our Swiss engineering and cinematographic protocols enforce this standard across every publication, dossier, and showreel without exception.
                </p>

                {/* Technical Deliverables Checklist */}
                <div className="space-y-2 pt-2">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    VERIFIED TECHNICAL DELIVERABLES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-zinc-300">
                    {activeValue.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-[#050506] border border-[#1F1F24] p-3">
                        <CheckCircle2 className="w-4 h-4 text-[#9C8465] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Metric Highlight Card */}
              <div className="lg:col-span-5 bg-[#050506] border border-[#1F1F24] p-6 space-y-4 text-center">
                <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest block">
                  AUDITED BENCHMARK METRIC
                </span>
                <span className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight block">
                  {activeValue.metricValue}
                </span>
                <p className="font-mono text-xs text-zinc-400 uppercase">
                  {activeValue.metricLabel}
                </p>

                <div className="pt-4 border-t border-[#1F1F24] flex items-center justify-center gap-2 font-mono text-[10px] text-emerald-400">
                  <Lock className="w-3.5 h-3.5" />
                  <span>KPMG CERTIFIED COMPLIANCE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
