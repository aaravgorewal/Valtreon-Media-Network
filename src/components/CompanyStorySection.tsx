import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Target,
  Eye,
  Calendar,
  Award,
  ShieldCheck,
  Building2,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Film,
  Sparkles
} from 'lucide-react';

export interface Milestone {
  year: string;
  quarter: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  keyMetric: string;
  metricLabel: string;
  image: string;
  highlights: string[];
}

const TIMELINE_MILESTONES: Milestone[] = [
  {
    year: '2021',
    quarter: 'Q2 // INCEPTION',
    title: 'Geneva Atelier Foundation',
    subtitle: 'CHE-109.842.110 Incorporated at Rue du Rhône 42',
    location: 'Geneva, Switzerland',
    description:
      'Founded by master cinematographers and investigative analysts to counter the degradation of C-suite media. Established Switzerland’s first private 35mm anamorphic processing suite dedicated exclusively to sovereign brand archives.',
    keyMetric: '35mm RAW',
    metricLabel: 'Optical Standard Established',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Incorporated as Swiss SA under CHE-109.842.110',
      'Acquired initial Arri Alexa 65 65mm sensor package',
      'First luxury horology co-production contract signed'
    ]
  },
  {
    year: '2022',
    quarter: 'Q3 // PROTOCOL',
    title: 'The Sovereign Dossier Launch',
    subtitle: '10,000-Word Unedited C-Suite Research Format',
    location: 'Geneva & Zurich',
    description:
      'Introduced the unedited 10,000-word deep research dossier format for institutional investors. Replaced banner ad monetization with direct enterprise co-production underwriting.',
    keyMetric: '100% Zero-Ad',
    metricLabel: 'Monetization Architecture',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Published inaugural Swiss Private Banking Dossier',
      'Zero programmatic advertising mandate locked into bylaws',
      'Expanded client alliance base to 8 enterprise partners'
    ]
  },
  {
    year: '2023',
    quarter: 'Q1 // EXPANSION',
    title: 'London & Zurich Satellite Ateliers',
    subtitle: 'Cross-Border Co-Production Network',
    location: 'London (Mayfair) & Zurich (Enge)',
    description:
      'Scaled production capacity across Mayfair and Zurich Enge. Established dedicated audio post-production suites featuring 9.1.4 Dolby Atmos spatial mixing for broadcast cinema.',
    keyMetric: '$25M ACV',
    metricLabel: 'Co-Production Alliance Volume',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Opened Mayfair Atelier for UK wealth houses',
      'Deployed 9.1.4 Dolby Atmos spatial audio mixing room',
      'Surpassed 5M verified annual executive readers'
    ]
  },
  {
    year: '2024',
    quarter: 'Q4 // AUDIT',
    title: 'KPMG Zero-Cookie Certification',
    subtitle: 'Swiss Federal Data Protection Act & ISO 27001',
    location: 'Geneva Headquarters',
    description:
      'Completed full KPMG third-party audit verifying 0% third-party cookies, tracking pixels, or programmatic telemetry across all VMN digital portals. ISO 27001 certification achieved.',
    keyMetric: '0.00%',
    metricLabel: 'Audited Telemetry Exposure',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Audited by KPMG for zero-cookie compliance',
      'ISO 27001 Information Security certification',
      'Edge-cached offline-first reader architecture deployed'
    ]
  },
  {
    year: '2025',
    quarter: 'Q2 // NORDIC',
    title: 'Stockholm Atelier & 4.4K Cinema Upgrade',
    subtitle: 'Nordic Sovereign Wealth Coverage',
    location: 'Stockholm, Sweden',
    description:
      'Expanded into Scandinavia with the Stockholm Strandvägen office. Upgraded all camera archives to 4.4K RAW native sensors and sovereign cloud distribution nodes.',
    keyMetric: '14.8M',
    metricLabel: 'Verified C-Suite Decision Makers',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Opened Strandvägen Atelier in Stockholm',
      'Deployed sovereign European distributed CDN nodes',
      'Extended client alliance roster to 24 global leaders'
    ]
  },
  {
    year: '2026',
    quarter: 'Q1 // PRESENT',
    title: 'The Sovereign Media Alliance',
    subtitle: '28 Global Enterprise Co-Production Alliances',
    location: 'Global Atelier Operations',
    description:
      'Operating as the premier sovereign media co-production atelier globally, serving 28 enterprise alliances with 98.4% C-suite retention across luxury, tech, and private finance.',
    keyMetric: '98.4%',
    metricLabel: 'C-Suite Retention Index',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      '28 active multi-year sovereign co-production alliances',
      '100% offline-compatible reader engine v3.4 release',
      'Expanded 35mm film vault to over 1,200 physical reels'
    ]
  }
];

export interface CompanyStorySectionProps {
  reducedMotion?: boolean;
}

export default function CompanyStorySection({
  reducedMotion = false
}: CompanyStorySectionProps) {
  const [activeYearIndex, setActiveYearIndex] = useState<number>(0);
  const activeMilestone = TIMELINE_MILESTONES[activeYearIndex];

  return (
    <section
      id="company-story-section"
      aria-labelledby="story-heading"
      className="py-24 bg-[#0B0B0D] border-b border-[#222226] text-zinc-100 relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 space-y-20">
        {/* 1. HEADER & SECTION INTRODUCTION */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#121215] border border-[#222226] px-3.5 py-1.5 rounded-full font-mono text-[11px] text-[#9C8465] uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#9C8465]" />
            <span>[ COMPANY STORY & INSTITUTIONAL CHRONOLOGY ]</span>
          </div>

          <h2
            id="story-heading"
            className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          >
            The Architecture of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#9C8465]">
              Uncompromising Media.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed">
            Founded in Geneva in 2021, Valtreon Media Network emerged from a fundamental critique of modern publishing: that programmatic advertising destroys editorial independence and compromises reader privacy. We built an uncompromising alternative—a sovereign media atelier.
          </p>
        </div>

        {/* 2. MISSION & VISION DUAL PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0E0E11] border border-[#222226] p-8 space-y-6 relative group hover:border-[#9C8465]/50 transition-colors"
          >
            <div className="w-12 h-12 bg-[#151518] border border-[#222226] flex items-center justify-center text-[#9C8465]">
              <Target className="w-6 h-6" />
            </div>

            <div className="space-y-3">
              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest">
                [ INSTITUTIONAL MISSION ]
              </span>
              <h3 className="font-sans text-xl sm:text-2xl font-medium text-white">
                Sovereign Media Craftsmanship
              </h3>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                To engineer 35mm optical archives, unedited 10,000-word C-suite research dossiers, and zero-cookie audited telemetry that protect executive privacy while establishing permanent cultural value.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1F1F24] flex items-center justify-between font-mono text-[11px] text-zinc-500">
              <span>CORE PRINCIPLE:</span>
              <span className="text-white font-semibold">NO COOKIES // NO ADS</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#0E0E11] border border-[#222226] p-8 space-y-6 relative group hover:border-[#9C8465]/50 transition-colors"
          >
            <div className="w-12 h-12 bg-[#151518] border border-[#222226] flex items-center justify-center text-[#9C8465]">
              <Eye className="w-6 h-6" />
            </div>

            <div className="space-y-3">
              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest">
                [ INSTITUTIONAL VISION ]
              </span>
              <h3 className="font-sans text-xl sm:text-2xl font-medium text-white">
                The Zero-Noise C-Suite Horizon
              </h3>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                To build a global media ecosystem where enterprise decisions are informed by rigorous research and cinematic dignity, setting the definitive standard for sovereign co-production across Europe and beyond.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1F1F24] flex items-center justify-between font-mono text-[11px] text-zinc-500">
              <span>AUDITED HORIZON:</span>
              <span className="text-[#9C8465] font-semibold">14.8M DECISION MAKERS</span>
            </div>
          </motion.div>
        </div>

        {/* 3. INTERACTIVE CHRONOLOGY TIMELINE */}
        <div className="space-y-10 pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#222226]">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest">
                [ GROWTH JOURNEY & MILESTONES ]
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl text-white font-medium">
                The 2021–2026 Chronology
              </h3>
            </div>
            <p className="font-mono text-xs text-zinc-500">
              SELECT MILESTONE TO INSPECT AUDITED ARCHIVE
            </p>
          </div>

          {/* Timeline Navigation Tabs */}
          <div
            role="tablist"
            aria-label="VMN Growth Journey Milestones"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {TIMELINE_MILESTONES.map((m, idx) => {
              const isActive = idx === activeYearIndex;
              return (
                <button
                  key={m.year}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`milestone-panel-${m.year}`}
                  id={`milestone-tab-${m.year}`}
                  onClick={() => setActiveYearIndex(idx)}
                  className={`p-4 border font-mono text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] ${
                    isActive
                      ? 'bg-[#15151A] border-[#9C8465] text-white shadow-lg shadow-[#9C8465]/10'
                      : 'bg-[#0E0E11] border-[#222226] text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-lg font-bold ${
                        isActive ? 'text-[#9C8465]' : 'text-zinc-300'
                      }`}
                    >
                      {m.year}
                    </span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-[#9C8465]" />}
                  </div>
                  <p className="text-[10px] text-zinc-500 truncate uppercase">
                    {m.quarter}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Inspector Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestone.year}
              id={`milestone-panel-${activeMilestone.year}`}
              role="tabpanel"
              aria-labelledby={`milestone-tab-${activeMilestone.year}`}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0E0E11] border border-[#222226] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#9C8465]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#9C8465]" />

              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
                  <span className="bg-[#18181C] border border-[#2A2A30] text-[#9C8465] px-3 py-1 font-semibold">
                    {activeMilestone.year} // {activeMilestone.quarter}
                  </span>
                  <span className="text-zinc-400 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-zinc-500" />
                    {activeMilestone.location}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans text-2xl sm:text-3xl text-white font-semibold">
                    {activeMilestone.title}
                  </h4>
                  <p className="font-mono text-xs text-[#9C8465]">
                    // {activeMilestone.subtitle}
                  </p>
                </div>

                <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {activeMilestone.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    AUDITED DELIVERABLES:
                  </span>
                  <ul className="space-y-2 font-mono text-xs text-zinc-300">
                    {activeMilestone.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#9C8465] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Key Metric & Image Preview */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[16/10] bg-[#050506] border border-[#1F1F24] overflow-hidden">
                  <img
                    src={activeMilestone.image}
                    alt={`${activeMilestone.title} archive photo`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-transparent to-black/30" />
                  <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-zinc-300 bg-[#080809]/80 backdrop-blur-sm border border-[#222226] px-3 py-1.5 flex justify-between">
                    <span>ARCHIVE_REF_{activeMilestone.year}</span>
                    <span className="text-[#9C8465]">VERIFIED</span>
                  </div>
                </div>

                {/* Metric Display Box */}
                <div className="bg-[#050506] border border-[#1F1F24] p-5 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                      {activeMilestone.metricLabel}
                    </span>
                    <span className="font-mono text-2xl font-bold text-white">
                      {activeMilestone.keyMetric}
                    </span>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-[#9C8465]" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
