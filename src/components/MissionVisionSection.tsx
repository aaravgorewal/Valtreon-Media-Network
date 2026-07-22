import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Target,
  Eye,
  Shield,
  Award,
  Sparkles,
  TrendingUp,
  Lock,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Zap,
  Globe2
} from 'lucide-react';

export interface MissionVisionSectionProps {
  reducedMotion?: boolean;
}

export interface CoreBelief {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverable: string;
}

const CORE_BELIEFS: CoreBelief[] = [
  {
    id: 'belief-privacy',
    number: '01',
    title: 'Zero-Surveillance Integrity',
    tagline: 'PRIVACY IS AN ABSOLUTE PREREQUISITE FOR TRUTH',
    description:
      'We reject the ad-tech tracking industrial complex. VMN portals deploy zero tracking cookies, pixels, or programmatic scripts, giving C-suite leaders complete intellectual anonymity.',
    icon: Lock,
    deliverable: 'KPMG Audited Zero-Cookie Protocol'
  },
  {
    id: 'belief-craft',
    number: '02',
    title: '35mm Optical Permanence',
    tagline: 'PHYSICAL EMULSION OVER DIGITAL TRANSIENCE',
    description:
      'Digital video is compressed and ephemeral. Our master brand archives are shot on 35mm and 65mm analog film stock, preserved in physical vault conditions for centuries of institutional heritage.',
    icon: Layers,
    deliverable: 'Arri Alexa 65 & 35mm Silver Halide Vaults'
  },
  {
    id: 'belief-co-production',
    number: '03',
    title: 'Direct Enterprise Co-Production',
    tagline: 'ALIGNED INCENTIVES WITH C-SUITE LEADERS',
    description:
      'Instead of channelling ad networks for pennies, we establish direct co-production alliances with luxury, hardware, and sovereign finance houses to underwrite authoritative research.',
    icon: Award,
    deliverable: '28 Sovereign Enterprise Alliances'
  },
  {
    id: 'belief-rigor',
    number: '04',
    title: '10,000-Word Unedited Dossiers',
    tagline: 'EXHAUSTIVE ANALYTICAL RIGOR OVER CLICKBAIT',
    description:
      'Complex geopolitical, horological, and financial transformations cannot be summarized in 280 characters. Our investigative dossiers deliver deep, unedited clarity.',
    icon: Compass,
    deliverable: 'Peer-Reviewed Executive Briefings'
  }
];

export interface ImpactStat {
  id: string;
  value: string;
  label: string;
  subtitle: string;
  trend: string;
  icon: React.ComponentType<{ className?: string }>;
}

const IMPACT_STATS: ImpactStat[] = [
  {
    id: 'impact-reach',
    value: '14.8M',
    label: 'Verified C-Suite Leaders',
    subtitle: 'Annual global executive reader audience',
    trend: '+18.4% YOY Growth',
    icon: Globe2
  },
  {
    id: 'impact-[#9C8465]',
    value: '100%',
    label: 'Zero-Cookie Privacy',
    subtitle: 'Third-party audited zero-ad telemetry',
    trend: 'KPMG Certified',
    icon: Shield
  },
  {
    id: 'impact-retention',
    value: '98.4%',
    label: 'Executive Retention Rate',
    subtitle: 'C-suite subscription & alliance renewal index',
    trend: 'Top Decile',
    icon: TrendingUp
  },
  {
    id: 'impact-value',
    value: '$250M+',
    label: 'Co-Production Value',
    subtitle: 'Underwritten sovereign media assets',
    trend: '28 Active Alliances',
    icon: Zap
  }
];

export default function MissionVisionSection({
  reducedMotion = false
}: MissionVisionSectionProps) {
  const [activeBeliefId, setActiveBeliefId] = useState<string>('belief-privacy');
  const [hoveredImpactId, setHoveredImpactId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="mission-vision-section"
      aria-labelledby="mission-vision-heading"
      className="py-24 bg-[#080809] border-b border-[#222226] text-zinc-100 relative overflow-hidden"
    >
      {/* Background Architectural Accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#9C8465]/10 via-transparent to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 space-y-20">
        {/* 1. SECTION HEADER */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#121215] border border-[#222226] px-3.5 py-1.5 rounded-full font-mono text-[11px] text-[#9C8465] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#9C8465]" />
            <span>[ INSTITUTIONAL PURPOSE & CORE CREED ]</span>
          </div>

          <h2
            id="mission-vision-heading"
            className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          >
            Architecting Permanent Value for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#9C8465]">
              Sovereign Enterprises.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed">
            We exist to dismantle the noise of programmatic media and replace it with 35mm optical permanence, unedited investigative dossiers, and zero-cookie audited telemetry.
          </p>
        </div>

        {/* 2. DUAL MISSION & VISION FEATURE CARDS */}
        <motion.div
          variants={containerVariants}
          initial={reducedMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* THE MISSION CARD */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0E0E11] border border-[#222226] p-8 sm:p-10 relative group hover:border-[#9C8465] transition-all duration-300 shadow-xl"
          >
            {/* Top Corner Frame Markers */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#9C8465]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#9C8465]" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-[#15151A] border border-[#222226] flex items-center justify-center text-[#9C8465] group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-[#9C8465] bg-[#15151A] px-3 py-1 border border-[#222226]">
                  [ OUR MISSION ]
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-sans text-2xl sm:text-3xl text-white font-medium">
                  Pure Editorial Independence & 35mm Permanence
                </h3>
                <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed">
                  To engineer authoritative 10,000-word research dossiers and 35mm brand films that remain completely unpolluted by advertising noise, tracking pixels, or programmatic clickbait.
                </p>
              </div>

              {/* Key Deliverable Checklist */}
              <div className="pt-4 border-t border-[#1F1F24] space-y-2.5 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9C8465]" />
                  <span>0% Programmatic Advertising or Tracking Cookies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9C8465]" />
                  <span>35mm & 65mm Analog Silver Halide Film Archives</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9C8465]" />
                  <span>Direct Co-Production Alliances with C-Suite Leaders</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* THE VISION CARD */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0E0E11] border border-[#222226] p-8 sm:p-10 relative group hover:border-[#9C8465] transition-all duration-300 shadow-xl"
          >
            {/* Top Corner Frame Markers */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#9C8465]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#9C8465]" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-[#15151A] border border-[#222226] flex items-center justify-center text-[#9C8465] group-hover:scale-110 transition-transform">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-[#9C8465] bg-[#15151A] px-3 py-1 border border-[#222226]">
                  [ OUR VISION ]
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-sans text-2xl sm:text-3xl text-white font-medium">
                  The Premier Sovereign Media Ecosystem
                </h3>
                <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed">
                  To establish a global network of private co-production ateliers across Geneva, Zurich, London, and Stockholm where luxury, technology, and sovereign wealth leaders shape culture.
                </p>
              </div>

              {/* Key Deliverable Checklist */}
              <div className="pt-4 border-t border-[#1F1F24] space-y-2.5 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9C8465]" />
                  <span>14.8M Verified Annual C-Suite Decision Makers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9C8465]" />
                  <span>28 Multi-Year Sovereign Co-Production Alliances</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9C8465]" />
                  <span>98.4% Executive Audience Retention & Trust Index</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 3. CORE BELIEFS GRID (INTERACTIVE CARDS WITH HOVER & FOCUS STATES) */}
        <div className="space-y-8 pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#222226]">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest">
                [ INSTITUTIONAL CREED & FOUNDATIONAL TENETS ]
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl text-white font-medium">
                The 4 Core Beliefs of VMN Studios
              </h3>
            </div>
            <p className="font-mono text-xs text-zinc-500">
              HOVER OR SELECT CARD TO INSPECT SPECIFICATIONS
            </p>
          </div>

          <div
            role="region"
            aria-label="Core Beliefs Specification Cards"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CORE_BELIEFS.map((belief) => {
              const Icon = belief.icon;
              const isSelected = activeBeliefId === belief.id;

              return (
                <button
                  key={belief.id}
                  type="button"
                  onClick={() => setActiveBeliefId(belief.id)}
                  onFocus={() => setActiveBeliefId(belief.id)}
                  className={`p-6 bg-[#0E0E11] border text-left transition-all duration-300 relative group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#9C8465] bg-[#121217] shadow-lg shadow-[#9C8465]/10'
                      : 'border-[#222226] hover:border-zinc-700 hover:bg-[#101014]'
                  }`}
                >
                  {/* Top Badge */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-bold text-[#9C8465]">
                        {belief.number}
                      </span>
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-[#9C8465]' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="font-sans text-lg text-white font-semibold group-hover:text-[#9C8465] transition-colors">
                        {belief.title}
                      </h4>
                      <p className="font-mono text-[9px] text-[#9C8465] uppercase tracking-wider">
                        {belief.tagline}
                      </p>
                    </div>

                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      {belief.description}
                    </p>
                  </div>

                  {/* Bottom Deliverable */}
                  <div className="mt-6 pt-4 border-t border-[#1F1F24] flex items-center justify-between font-mono text-[10px] text-zinc-500">
                    <span className="truncate">{belief.deliverable}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9C8465] shrink-0" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. AUDITED IMPACT DASHBOARD (METRICS & AUDITED CLAIMS) */}
        <div className="bg-[#0E0E11] border border-[#222226] p-8 sm:p-12 relative overflow-hidden space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#222226]">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest">
                [ MEASURABLE INSTITUTIONAL IMPACT ]
              </span>
              <h3 className="font-sans text-xl sm:text-2xl text-white font-medium">
                Audited Performance & C-Suite Reach
              </h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 bg-[#050506] border border-[#222226] px-3.5 py-1.5">
              <Lock className="w-3.5 h-3.5" />
              <span>KPMG TELEMETRY CERTIFIED</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat) => {
              const Icon = stat.icon;
              const isHovered = hoveredImpactId === stat.id;

              return (
                <div
                  key={stat.id}
                  onMouseEnter={() => setHoveredImpactId(stat.id)}
                  onMouseLeave={() => setHoveredImpactId(null)}
                  className={`p-6 bg-[#050506] border transition-all duration-300 space-y-3 ${
                    isHovered ? 'border-[#9C8465] bg-[#0A0A0E]' : 'border-[#1F1F24]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-5 h-5 text-[#9C8465]" />
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5">
                      {stat.trend}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight block">
                      {stat.value}
                    </span>
                    <h4 className="font-sans text-sm font-semibold text-zinc-200">
                      {stat.label}
                    </h4>
                  </div>

                  <p className="font-sans text-xs text-zinc-500">
                    {stat.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
