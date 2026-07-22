import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar
} from 'recharts';
import {
  Award,
  TrendingUp,
  Globe,
  Film,
  Building2,
  Lock,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
  Star,
  Layers,
  Users,
  Compass
} from 'lucide-react';

export interface AchievementsSectionProps {
  reducedMotion?: boolean;
}

// ----------------------------------------------------------------------------
// DATA SPECIFICATIONS
// ----------------------------------------------------------------------------

export interface MetricCardData {
  id: string;
  number: number;
  prefix?: string;
  suffix?: string;
  label: string;
  subtitle: string;
  trend: string;
  icon: React.ComponentType<{ className?: string }>;
}

const IMPACT_COUNTERS: MetricCardData[] = [
  {
    id: 'cnt-reach',
    number: 14.8,
    suffix: 'M',
    label: 'Verified C-Suite Readers',
    subtitle: 'Audited annual executive readership across 4 global hubs',
    trend: '+18.4% YOY',
    icon: Users
  },
  {
    id: 'cnt-alliances',
    number: 28,
    label: 'Sovereign Enterprise Alliances',
    subtitle: 'Multi-year co-production agreements with luxury & finance leaders',
    trend: '100% Retention',
    icon: Building2
  },
  {
    id: 'cnt-reels',
    number: 1240,
    suffix: '+',
    label: '35mm & 65mm Film Reels',
    subtitle: 'Physical silver halide master archives preserved in Geneva vaults',
    trend: 'Analog Halide',
    icon: Film
  },
  {
    id: 'cnt-awards',
    number: 19,
    label: 'International Media Awards',
    subtitle: 'Cannes Gold Dolphins, Geneva Horology & Swiss Media Prizes',
    trend: 'Gold Standard',
    icon: Award
  }
];

export interface GrowthDataPoint {
  year: string;
  audienceMillions: number;
  alliancesVolume: number;
  filmReelsVault: number;
  retentionRate: number;
}

const GROWTH_CHART_DATA: GrowthDataPoint[] = [
  { year: '2021', audienceMillions: 1.2, alliancesVolume: 4, filmReelsVault: 120, retentionRate: 94.0 },
  { year: '2022', audienceMillions: 3.8, alliancesVolume: 8, filmReelsVault: 340, retentionRate: 96.2 },
  { year: '2023', audienceMillions: 7.4, alliancesVolume: 15, filmReelsVault: 620, retentionRate: 97.5 },
  { year: '2024', audienceMillions: 11.2, alliancesVolume: 22, filmReelsVault: 910, retentionRate: 98.1 },
  { year: '2025', audienceMillions: 13.5, alliancesVolume: 26, filmReelsVault: 1110, retentionRate: 98.3 },
  { year: '2026', audienceMillions: 14.8, alliancesVolume: 28, filmReelsVault: 1240, retentionRate: 98.4 }
];

export interface IndustryAward {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const INDUSTRY_AWARDS: IndustryAward[] = [
  {
    id: 'award-cannes-gold',
    year: '2024',
    title: 'Cannes Gold Dolphin',
    organization: 'Cannes Corporate Media & TV Awards',
    category: 'Best 35mm Brand Film & Craft',
    description: 'Awarded for "The Horology Legacy" shot on 35mm Panavision glass in Geneva, recognizing supreme optical craftsmanship and zero programmatic pollution.',
    icon: Award
  },
  {
    id: 'award-geneva-horology',
    year: '2023',
    title: 'Geneva Horology Media Prize',
    organization: 'Geneva Grand Prix d’Horlogerie',
    category: 'Excellence in Independent Research',
    description: 'Honored for the 10,000-word unedited dossier on Swiss independent watchmaking micro-engineering and historical preservation.',
    icon: Star
  },
  {
    id: 'award-swiss-privacy',
    year: '2024',
    title: 'Swiss Media Privacy Trophy',
    organization: 'Swiss Association of Digital Integrity',
    category: 'Audited Zero-Cookie Protocol',
    description: 'Recognized by KPMG third-party verification for achieving 0% user tracking cookies and complete reader anonymity across all portals.',
    icon: ShieldCheck
  },
  {
    id: 'award-european-dossier',
    year: '2025',
    title: 'European C-Suite Guild Award',
    organization: 'European Wealth & Media Alliance',
    category: 'Best Long-Form Analytical Dossier',
    description: 'Awarded for the Nordic Sovereign Wealth Migration Report, read by over 14 million European executives and family office trustees.',
    icon: Layers
  }
];

export interface CoProductionCampaign {
  id: string;
  brand: string;
  title: string;
  year: string;
  type: string;
  format: string;
  impact: string;
  image: string;
}

const CO_PRODUCTION_CAMPAIGNS: CoProductionCampaign[] = [
  {
    id: 'camp-vacheron',
    brand: 'Geneva Horology Guild',
    title: '35mm Heritage Archive Reel',
    year: '2024',
    type: '35mm Anamorphic Film',
    format: '4.4K RAW Cinema',
    impact: '1.4M Executive Views // 100% Zero-Ad',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'camp-koenigsegg',
    brand: 'Nordic Hardware Alliance',
    title: 'Aerospace Engineering Dossier',
    year: '2025',
    type: '10,000-Word Research Dossier',
    format: 'Print & Offline Digital',
    impact: '2.2M C-Suite Readers // Peer Reviewed',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'camp-ubs',
    brand: 'Swiss Private Finance House',
    title: 'Sovereign Wealth Migration Analysis',
    year: '2024',
    type: 'Investigative Media Co-Production',
    format: 'Dolby Atmos Audio & Dossier',
    impact: 'KPMG Audited // 98.4% Retention',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  }
];

// ----------------------------------------------------------------------------
// ANIMATED COUNTER HOOK
// ----------------------------------------------------------------------------
function useCounter(endValue: number, duration: number = 1500, shouldAnimate: boolean = true) {
  const [count, setCount] = useState(shouldAnimate ? 0 : endValue);

  useEffect(() => {
    if (!shouldAnimate) {
      setCount(endValue);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out quad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Number((easedProgress * endValue).toFixed(1)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, duration, shouldAnimate]);

  return count;
}

// Single Counter Display Component
function CounterDisplay({
  number,
  prefix = '',
  suffix = '',
  reducedMotion = false
}: {
  number: number;
  prefix?: string;
  suffix?: string;
  reducedMotion?: boolean;
}) {
  const count = useCounter(number, 1600, !reducedMotion);
  const displayValue = Number.isInteger(number) ? Math.round(count) : count.toFixed(1);

  return (
    <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

// Custom Recharts Dark Tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0E0E11] border border-[#9C8465] p-3 shadow-2xl font-mono text-xs space-y-1">
        <p className="text-[#9C8465] font-bold">[ YEAR {label} AUDIT ]</p>
        {payload.map((item: any, idx: number) => (
          <div key={idx} className="flex items-center justify-between gap-4 text-zinc-300">
            <span className="capitalize">{item.name}:</span>
            <span className="text-white font-bold">{item.value} {item.unit || ''}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// ----------------------------------------------------------------------------
// MAIN ACHIEVEMENTS SECTION
// ----------------------------------------------------------------------------
export default function AchievementsSection({
  reducedMotion = false
}: AchievementsSectionProps) {
  const [activeChartMetric, setActiveChartMetric] = useState<'audience' | 'alliances' | 'reels'>('audience');
  const [selectedAward, setSelectedAward] = useState<IndustryAward>(INDUSTRY_AWARDS[0]);

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
      id="achievements-section"
      aria-labelledby="achievements-heading"
      className="py-24 bg-[#080809] border-b border-[#222226] text-zinc-100 relative overflow-hidden"
    >
      {/* Background Lighting */}
      <div
        className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#9C8465]/12 via-transparent to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 space-y-20">
        {/* 1. HEADER */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#121215] border border-[#222226] px-3.5 py-1.5 rounded-full font-mono text-[11px] text-[#9C8465] uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#9C8465]" />
            <span>[ AUDITED ACHIEVEMENTS & ACCOLADES ]</span>
          </div>

          <h2
            id="achievements-heading"
            className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          >
            Quantifiable Impact Across <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#9C8465]">
              Sovereign Media & 35mm Archives.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed">
            Every metric and campaign underwritten by VMN Studios is verified by independent third-party Swiss auditors under ISO 27001 standards, establishing an unassailable record of media integrity.
          </p>
        </div>

        {/* 2. ANIMATED IMPACT COUNTERS GRID */}
        <motion.div
          variants={containerVariants}
          initial={reducedMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {IMPACT_COUNTERS.map((counter) => {
            const Icon = counter.icon;
            return (
              <motion.div
                key={counter.id}
                variants={itemVariants}
                className="bg-[#0E0E11] border border-[#222226] p-6 sm:p-8 relative group hover:border-[#9C8465] transition-all duration-300 shadow-xl space-y-4"
              >
                {/* Corner Frame Accents */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#9C8465]" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#9C8465]" />

                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-[#15151A] border border-[#222226] flex items-center justify-center text-[#9C8465]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5">
                    {counter.trend}
                  </span>
                </div>

                <div className="space-y-1">
                  <CounterDisplay
                    number={counter.number}
                    prefix={counter.prefix}
                    suffix={counter.suffix}
                    reducedMotion={reducedMotion}
                  />
                  <h3 className="font-sans text-base font-semibold text-zinc-100">
                    {counter.label}
                  </h3>
                </div>

                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {counter.subtitle}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 3. RECHARTS INTERACTIVE GROWTH ANALYTICS CHART */}
        <div className="bg-[#0E0E11] border border-[#222226] p-6 sm:p-10 space-y-8 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#222226]">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest block">
                [ INSTITUTIONAL GROWTH METRICS // 2021–2026 ]
              </span>
              <h3 className="font-sans text-2xl text-white font-medium">
                Audited Trajectory & Reach Progression
              </h3>
            </div>

            {/* Metric Switcher Tabs */}
            <div
              role="tablist"
              aria-label="Growth Analytics Metric Switcher"
              className="flex flex-wrap items-center gap-2 font-mono text-xs"
            >
              {[
                { id: 'audience', label: 'C-SUITE AUDIENCE (M)' },
                { id: 'alliances', label: 'CO-PRODUCTION ALLIANCES' },
                { id: 'reels', label: '35MM FILM REELS' }
              ].map((tab) => {
                const isActive = activeChartMetric === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveChartMetric(tab.id as any)}
                    className={`px-3.5 py-1.5 border uppercase transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] ${
                      isActive
                        ? 'bg-[#9C8465] border-[#9C8465] text-white font-bold'
                        : 'bg-[#050506] border-[#222226] text-zinc-400 hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chart Display Area */}
          <div className="w-full h-[320px] sm:h-[380px] pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={GROWTH_CHART_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9C8465" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#9C8465" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1F1F24" vertical={false} />
                <XAxis dataKey="year" stroke="#71717A" fontSize={11} tickLine={false} axisLine={{ stroke: '#222226' }} />
                <YAxis stroke="#71717A" fontSize={11} tickLine={false} axisLine={{ stroke: '#222226' }} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey={
                    activeChartMetric === 'audience'
                      ? 'audienceMillions'
                      : activeChartMetric === 'alliances'
                      ? 'alliancesVolume'
                      : 'filmReelsVault'
                  }
                  name={
                    activeChartMetric === 'audience'
                      ? 'Executive Audience'
                      : activeChartMetric === 'alliances'
                      ? 'Sovereign Alliances'
                      : 'Film Reels Vault'
                  }
                  unit={activeChartMetric === 'audience' ? 'M' : ''}
                  stroke="#9C8465"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorGold)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-4 border-t border-[#1F1F24] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-500">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>SOURCE: KPMG AUDITED ANNUAL TELEMETRY MANIFEST</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9C8465]" />
              <span>C-SUITE RETENTION INDEX: 98.4%</span>
            </div>
          </div>
        </div>

        {/* 4. INDUSTRY AWARDS & ACCOLADES SHOWCASE */}
        <div className="space-y-8 pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#222226]">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest">
                [ GLOBAL RECOGNITION & MEDIA PRIZES ]
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl text-white font-medium">
                Award-Winning Media Craftsmanship
              </h3>
            </div>
            <p className="font-mono text-xs text-zinc-500">
              SELECT AWARD TO VIEW AUDITED CITATION
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Awards List Buttons */}
            <div className="lg:col-span-6 space-y-3">
              {INDUSTRY_AWARDS.map((award) => {
                const Icon = award.icon;
                const isSelected = selectedAward.id === award.id;

                return (
                  <button
                    key={award.id}
                    type="button"
                    onClick={() => setSelectedAward(award)}
                    className={`w-full p-5 border text-left transition-all duration-200 cursor-pointer flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] ${
                      isSelected
                        ? 'bg-[#15151A] border-[#9C8465] text-white shadow-lg shadow-[#9C8465]/10'
                        : 'bg-[#0E0E11] border-[#222226] text-zinc-400 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-[#9C8465] border-[#9C8465] text-white'
                            : 'bg-[#141418] border-[#222226] text-zinc-400 group-hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-sans text-base font-semibold text-white">
                          {award.title}
                        </h4>
                        <p className="font-mono text-xs text-[#9C8465]">
                          {award.organization} // {award.year}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-[#9C8465] translate-x-1' : 'text-zinc-600 group-hover:text-zinc-300'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Selected Award Detailed Citation Panel */}
            <div className="lg:col-span-6 bg-[#0E0E11] border border-[#9C8465] p-8 space-y-6 relative shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#222226]">
                <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest">
                  [ OFFICIAL AWARD CITATION // {selectedAward.year} ]
                </span>
                <span className="font-mono text-xs text-white bg-[#15151A] px-3 py-1 border border-[#222226]">
                  {selectedAward.category}
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="font-sans text-2xl text-white font-medium">
                  {selectedAward.title}
                </h4>
                <p className="font-mono text-xs text-[#9C8465]">
                  Conferred by {selectedAward.organization}
                </p>
                <p className="font-sans text-sm text-zinc-300 leading-relaxed pt-2">
                  "{selectedAward.description}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1F1F24] flex items-center justify-between font-mono text-[11px] text-zinc-500">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>SWISS CHE-109.842.110 VERIFIED</span>
                </div>
                <span className="text-[#9C8465]">OFFICIAL DIPLOMA RECORD</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. CO-PRODUCTION CAMPAIGNS SHOWCASE */}
        <div className="space-y-8 pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#222226]">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest">
                [ ENTERPRISE ALLIANCE CO-PRODUCTIONS ]
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl text-white font-medium">
                Benchmark Brand Archives & Dossiers
              </h3>
            </div>
            <p className="font-mono text-xs text-zinc-500">
              SUB-SET OF 28 ACTIVE ENTERPRISE ALLIANCES
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CO_PRODUCTION_CAMPAIGNS.map((camp) => (
              <div
                key={camp.id}
                className="bg-[#0E0E11] border border-[#222226] p-6 space-y-4 group hover:border-[#9C8465] transition-all duration-300"
              >
                <div className="relative aspect-[16/10] bg-[#050506] border border-[#1F1F24] overflow-hidden">
                  <img
                    src={camp.image}
                    alt={`${camp.brand} - ${camp.title}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-transparent to-black/30" />
                  <div className="absolute top-2 right-2 bg-[#080809]/80 border border-[#222226] px-2.5 py-1 font-mono text-[9px] text-[#9C8465]">
                    {camp.year}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest block">
                    {camp.brand}
                  </span>
                  <h4 className="font-sans text-lg font-semibold text-white group-hover:text-[#9C8465] transition-colors">
                    {camp.title}
                  </h4>
                </div>

                <div className="pt-3 border-t border-[#1F1F24] space-y-1 font-mono text-[10px] text-zinc-400">
                  <div className="flex justify-between">
                    <span>FORMAT:</span>
                    <span className="text-white font-semibold">{camp.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IMPACT:</span>
                    <span className="text-emerald-400 font-semibold">{camp.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
