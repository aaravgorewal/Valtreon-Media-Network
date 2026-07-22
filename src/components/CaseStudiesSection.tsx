import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Play,
  Volume2,
  VolumeX,
  X,
  Award,
  TrendingUp,
  ShieldCheck,
  Eye,
  Clock,
  ExternalLink,
  ChevronRight,
  BarChart3,
  Building2,
  Quote,
  Layers,
  FileText
} from 'lucide-react';
import BespokeCharts from './BespokeCharts';
import DecryptCounter from './DecryptCounter';
import { CHART_DATA, DEMOGRAPHICS } from '../data';

export interface CaseStudy {
  id: string;
  clientName: string;
  clientIndustry: 'Luxury Horology' | 'Spatial Hardware' | 'FinTech & PE' | 'Clean Mobility';
  campaignTitle: string;
  subtitle: string;
  directorName: string;
  format: string;
  videoUrl: string;
  heroImage: string;
  summary: string;
  challenge: string;
  solution: string;
  keyMetrics: {
    label: string;
    value: string;
    sublabel: string;
    highlight?: boolean;
  }[];
  testimonial: {
    quote: string;
    author: string;
    title: string;
  };
  deliverables: string[];
}

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'aethelgard-horology',
    clientName: 'Aethelgard Swiss Horology',
    clientIndustry: 'Luxury Horology',
    campaignTitle: 'The Architecture of Perpetual Motion',
    subtitle: '10,000-Word Deep Research Dossier & 35mm Photographic Essay',
    directorName: 'Claire Dupont & Elena Rostova',
    format: '35mm Film & Research Dossier',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematic-foggy-pine-forest-4881-large.mp4',
    heroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80&sat=-100',
    summary:
      'Co-sponsored deep-dive investigation into metallurgical craftsmanship and 200-year watchmaker lineages. Bypassed digital banner networks to deliver directly to 12,000 C-suite subscribers.',
    challenge:
      'Aethelgard was struggling with programmatic ad banner decay, low audience retention, and brand dilution on traditional ad networks.',
    solution:
      'VMN Studios produced an exclusive 10,000-word archival research essay paired with analog 35mm photography, hosted on a zero-tracking dedicated microsite.',
    keyMetrics: [
      { label: 'Read Completion', value: '88.4%', sublabel: '+280% vs Industry Avg', highlight: true },
      { label: 'Inbound Pipeline', value: '$1.4M', sublabel: 'Direct C-Suite Inquiries' },
      { label: 'Audience Reach', value: '1.2M', sublabel: 'High-Net-Worth Principals' },
      { label: 'Ad Contamination', value: '0.0%', sublabel: 'Zero Cookie Trackers' },
    ],
    testimonial: {
      quote:
        'VMN’s zero-ad editorial environment restored prestige to our watchmaking heritage. We closed $1.4M in direct custom commissions within 60 days.',
      author: 'Henri de Montfort',
      title: 'Global Brand Director, Aethelgard',
    },
    deliverables: [
      '10,000-Word Archival Research Dossier',
      '35mm Monochromatic Photography Series (48 Frames)',
      'Custom Zero-Ad Web Microsite & Archival Hardcover Book',
      'Guaranteed Telemetry Audit Report',
    ],
  },
  {
    id: 'vektor-spatial',
    clientName: 'Vektor Spatial Labs',
    clientIndustry: 'Spatial Hardware',
    campaignTitle: 'Beyond the Flat Canvas: Spatial Architecture',
    subtitle: '4K Anamorphic Widescreen Brand Film & Spatial Sound Design',
    directorName: 'Kenzo Takahashi & Elena Rostova',
    format: '35mm Anamorphic Film',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-fog-over-mountains-and-forests-42457-large.mp4',
    heroImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80&sat=-100',
    summary:
      'Cannes Corporate Gold Winner. A cinematic anthem introducing Vektor’s spatial interface architecture through raw, high-contrast anamorphic visuals.',
    challenge:
      'Introducing groundbreaking mixed-reality spatial computing without falling into generic tech gadget tropes or superficial CGI hype.',
    solution:
      'Filmed on 35mm anamorphic lenses across sub-polar architectural landmarks, emphasizing real human interaction with spatial light fields.',
    keyMetrics: [
      { label: 'Organic Impressions', value: '4.2M', sublabel: 'Cannes Corporate Gold', highlight: true },
      { label: 'Audio Retention', value: '92.6%', sublabel: 'Dolby Atmos Master' },
      { label: 'Developer Leads', value: '8,400+', sublabel: 'Enterprise SDK Requests' },
      { label: 'Brand Lift', value: '+44%', sublabel: 'Verified C-Suite Perception' },
    ],
    testimonial: {
      quote:
        'The cinematic depth achieved by VMN elevated our spatial hardware launch from a tech announcement to a cultural milestone.',
      author: 'Dr. Aris Thorne',
      title: 'Chief Architecture Officer, Vektor',
    },
    deliverables: [
      '4K Anamorphic Master Brand Film (4 min 30s)',
      '3x Tailored Digital Cutdowns (16:9 & 9:16)',
      'Dolby Atmos Spatial Soundscape Identity Suite',
      'Perpetual Global Broadcast & Exhibition License',
    ],
  },
  {
    id: 'chrono-logic-audio',
    clientName: 'Chrono Logic Atelier',
    clientIndustry: 'Luxury Horology',
    campaignTitle: 'Acoustic Resonance & Generative Time',
    subtitle: 'Bespoke Dolby Atmos Spatial Soundscape & Vinyl Pressing',
    directorName: 'Kaelen Miller',
    format: 'Spatial Sound & Vinyl',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waves-breaking-on-the-shore-from-above-4122-large.mp4',
    heroImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80&sat=-100',
    summary:
      'Custom acoustic identity engine designed for flagship boutique galleries and digital spatial streaming, inspired by mechanicalescapements.',
    challenge:
      'Creating a memorable, high-sensory environment in flagship retail spaces that matches the precision of haute horology.',
    solution:
      'A binaural, spatial sound landscape recorded inside historical watchmaker ateliers, pressed to limited audiophile 180g vinyl.',
    keyMetrics: [
      { label: 'Spatial Streams', value: '120K+', sublabel: 'Audiophile Platforms', highlight: true },
      { label: 'Boutique Dwell Time', value: '+42%', sublabel: 'In-Store Engagement' },
      { label: 'Vinyl Collectors', value: '1,000', sublabel: 'Sold Out Limited Press' },
      { label: 'Audited CSAT', value: '99.1%', sublabel: 'Flagship Visitor Score' },
    ],
    testimonial: {
      quote:
        'Our boutique visitors literally stop and listen. The sonic atmosphere created by VMN increased customer store dwell time by over 40%.',
      author: 'Elena Vance',
      title: 'Boutique Experience Lead, Chrono Logic',
    },
    deliverables: [
      'Dolby Atmos Spatial Sound Landscape Suite',
      'Flagship Physical Exhibition Audio Driver Profile',
      '1,000 Units Limited Edition 180g Audiophile Vinyl',
      'Generative Audio Web Engine',
    ],
  },
  {
    id: 'oberon-pe-advisory',
    clientName: 'Oberon Private Equity',
    clientIndustry: 'FinTech & PE',
    campaignTitle: 'Sovereign Capital & The Death of Programmatic Ads',
    subtitle: 'Executive Media Hygiene Audit & Institutional LP Dossier',
    directorName: 'Marcus Thorne',
    format: 'Executive Advisory & Whitepaper',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dramatic-clouds-at-sunset-1002-large.mp4',
    heroImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80&sat=-100',
    summary:
      'Strategic transition from programmatic ad spend to direct B2B research underwrite, positioning Oberon as a sovereign capital steward.',
    challenge:
      'Oberon needed to recruit tier-one institutional LPs without using noisy social ad channels or low-tier press syndications.',
    solution:
      'Replaced all social ad spend with private C-suite roundtables and direct research dossier distribution to verified accredited LPs.',
    keyMetrics: [
      { label: 'Ad Spend Shift', value: '100%', sublabel: 'Zero Programmatic Ads', highlight: true },
      { label: 'Avg Deal Size', value: '+34%', sublabel: '$12.5M Average LPs' },
      { label: 'Institutional LPs', value: '450+', sublabel: 'Onboarded LPs' },
      { label: 'Retention Rate', value: '96.8%', sublabel: 'Long-term Capital Commitment' },
    ],
    testimonial: {
      quote:
        'Cutting out social ad channels in favor of VMN direct research dossiers was the single best strategic move we made for LP acquisition.',
      author: 'Julian Sterling',
      title: 'Managing Partner, Oberon Capital',
    },
    deliverables: [
      'Quarterly Institutional Media Hygiene Audit',
      'Private C-Suite Investment Roundtable Series',
      'Exclusive Access to VMN Director Network',
      'Proprietary LP Intelligence Reports',
    ],
  },
  {
    id: 'solis-mobility-expedition',
    clientName: 'Solis Electric GT',
    clientIndustry: 'Clean Mobility',
    campaignTitle: '5,000km Sub-Polar Endurance Transit',
    subtitle: 'Monochrome Photojournalistic Expedition & Documentary Film',
    directorName: 'Anya Varma & Julian Vance',
    format: 'Documentary Film & Photo Essay',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-light-shining-through-foggy-trees-41006-large.mp4',
    heroImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80&sat=-100',
    summary:
      'Raw, high-contrast monochrome photojournalism documenting Solis EV GT enduring extreme sub-zero arctic conditions.',
    challenge:
      'Overcoming market skepticism regarding luxury electric vehicle battery performance in extreme winter environments.',
    solution:
      'A 5,000km unscripted arctic expedition documented by World Press Photo winner Anya Varma on high-contrast black-and-white film.',
    keyMetrics: [
      { label: 'Pre-Orders', value: '$3.2M', sublabel: 'In 14 Days Post-Release', highlight: true },
      { label: 'Widescreen Views', value: '3.8M', sublabel: 'Organic Reach' },
      { label: 'Engagement CSAT', value: '96.1%', sublabel: 'Audited Reader Feedback' },
      { label: 'Media Mentions', value: '180+', sublabel: 'Global Luxury Outlets' },
    ],
    testimonial: {
      quote:
        'The unscripted arctic transit documentary generated $3.2M in pre-orders within two weeks. Pure authentic story telling.',
      author: 'Marcus Lindqvist',
      title: 'Head of Brand, Solis Mobility',
    },
    deliverables: [
      '25-Minute Expedition Documentary Master',
      'Monochrome Photographic Archive (120 Prints)',
      'Global Rights for Print & Digital Exhibition',
      'Audited Conversion & Lead Attribution Dossier',
    ],
  },
];

export const BRAND_PARTNERS = [
  { name: 'AETHELGARD', subtitle: 'Swiss Horology', location: 'Geneva, CH' },
  { name: 'VEKTOR SPATIAL', subtitle: 'Spatial Hardware', location: 'Zurich, CH' },
  { name: 'CHRONO LOGIC', subtitle: 'Haute Atelier', location: 'Neuchâtel, CH' },
  { name: 'OBERON CAPITAL', subtitle: 'Private Equity', location: 'London, UK' },
  { name: 'SOLIS GT', subtitle: 'Clean Mobility', location: 'Stockholm, SE' },
  { name: 'LEICA CAMERA', subtitle: 'Optics Atelier', location: 'Wetzlar, DE' },
  { name: 'POLESTAR', subtitle: 'Electric Performance', location: 'Gothenburg, SE' },
  { name: 'BANG & OLUFSEN', subtitle: 'Acoustic Architecture', location: 'Struer, DK' },
];

interface CaseStudiesSectionProps {
  onScheduleBriefing: () => void;
  latency?: string;
  reducedMotion?: boolean;
  lowPowerMode?: boolean;
}

export default function CaseStudiesSection({
  onScheduleBriefing,
  latency = 'fast',
  reducedMotion = false,
  lowPowerMode = false,
}: CaseStudiesSectionProps) {
  // Category Filter State
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'Luxury Horology' | 'Spatial Hardware' | 'FinTech & PE' | 'Clean Mobility'
  >('all');

  // Time Range for Dashboard Telemetry
  const [timeRange, setTimeRange] = useState<'30D' | '90D' | '1Y' | 'ALL'>('90D');

  // Active Selected Case Study for Modal Deep Dive
  const [modalCaseStudy, setModalCaseStudy] = useState<CaseStudy | null>(null);

  // Active Video Preview Player
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // Filtered Case Studies
  const filteredCaseStudies = CASE_STUDIES_DATA.filter(
    (cs) => activeCategory === 'all' || cs.clientIndustry === activeCategory
  );

  return (
    <section
      id="case-studies-section"
      aria-labelledby="case-studies-display-heading"
      className="py-20 md:py-28 bg-[#080809] border-b border-[#222226] text-zinc-100 relative overflow-hidden"
    >
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="w-full h-full bg-[radial-gradient(#9C8465_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* 1. SECTION HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-[#222226] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[#9C8465]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>[ CHAPTER_04 // AUDITED_CAMPAIGN_DOSSIERS ]</span>
            </div>

            <h2
              id="case-studies-display-heading"
              className="font-sans font-medium text-3xl md:text-4xl text-zinc-100 tracking-tight"
            >
              Empirical Proof: Verified Co-Production Impact
            </h2>

            <p className="font-sans text-xs md:text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Explore audited campaign dossiers, real-time audience retention telemetry, and sovereign B2B conversion metrics. Every campaign operates with zero ad network tracking.
            </p>
          </div>

          {/* Action Trigger */}
          <button
            onClick={onScheduleBriefing}
            className="px-5 py-2.5 bg-[#9C8465] hover:bg-[#B39977] text-white font-semibold font-mono text-xs uppercase flex items-center gap-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] shrink-0"
          >
            <span>[ SCHEDULE CAMPAIGN AUDIT ]</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2. INDUSTRY CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs border-b border-[#222226] pb-4">
          <span className="text-zinc-500 text-[10px] uppercase mr-2 flex items-center gap-1">
            FILTER BY INDUSTRY:
          </span>
          {[
            { id: 'all', label: 'ALL CAMPAIGNS (5)' },
            { id: 'Luxury Horology', label: 'LUXURY HOROLOGY' },
            { id: 'Spatial Hardware', label: 'SPATIAL HARDWARE' },
            { id: 'FinTech & PE', label: 'FINTECH & PRIVATE EQUITY' },
            { id: 'Clean Mobility', label: 'CLEAN MOBILITY' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3 py-1.5 border text-[10px] uppercase transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1A1A1E] border-[#9C8465] text-white font-semibold'
                  : 'bg-[#111113] border-[#222226] text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3. CAMPAIGN PREVIEW CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="case-studies-cards-grid">
          {filteredCaseStudies.map((cs, idx) => {
            const isPlaying = activeVideoId === cs.id;

            return (
              <motion.div
                key={cs.id}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: reducedMotion ? 0 : idx * 0.1 }}
                className="group bg-[#111113] border border-[#222226] hover:border-[#9C8465] p-6 flex flex-col justify-between space-y-6 relative transition-all duration-300 hover:shadow-2xl hover:shadow-[#9C8465]/10"
              >
                {/* Gold Top Border Glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9C8465]/40 group-hover:via-[#9C8465] to-transparent transition-all" />

                <div className="space-y-4">
                  {/* Media Viewport */}
                  <div className="relative aspect-video overflow-hidden border border-[#222226] bg-[#080809]">
                    {!isPlaying ? (
                      <>
                        <img
                          src={cs.heroImage}
                          alt={cs.campaignTitle}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 brightness-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-transparent to-transparent opacity-80" />

                        {/* Play Video Showreel Trigger */}
                        {!lowPowerMode && (
                          <button
                            onClick={() => setActiveVideoId(cs.id)}
                            className="absolute bottom-3 right-3 bg-[#111113]/90 hover:bg-[#9C8465] border border-[#222226] hover:border-[#9C8465] p-2.5 text-zinc-300 hover:text-white transition-all cursor-pointer flex items-center gap-2 font-mono text-[10px]"
                            aria-label={`Play video for ${cs.campaignTitle}`}
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>[ PLAY SHOWREEL ]</span>
                          </button>
                        )}
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-black z-20">
                        <video
                          src={cs.videoUrl}
                          autoPlay
                          loop
                          muted={isMuted}
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 flex items-center gap-1 bg-[#080809]/90 border border-[#222226] p-1 z-30">
                          <button
                            onClick={() => setIsMuted(!isMuted)}
                            className="text-zinc-400 hover:text-white p-1"
                            title={isMuted ? 'Unmute' : 'Mute'}
                          >
                            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                          </button>
                          <button
                            onClick={() => setActiveVideoId(null)}
                            className="text-zinc-400 hover:text-white p-1"
                            title="Close Video"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Client Industry Badge */}
                    <div className="absolute top-3 left-3 bg-[#080809]/90 border border-[#222226] text-[#9C8465] text-[9px] font-mono px-2 py-0.5 uppercase font-semibold">
                      [{cs.clientIndustry}]
                    </div>
                  </div>

                  {/* Header Title & Client */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase block">
                      CLIENT: {cs.clientName.toUpperCase()}
                    </span>
                    <h3 className="font-sans font-medium text-xl text-zinc-100 group-hover:text-white transition-colors">
                      {cs.campaignTitle}
                    </h3>
                    <p className="font-mono text-xs text-zinc-400">{cs.subtitle}</p>
                  </div>

                  {/* Campaign Summary */}
                  <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                    {cs.summary}
                  </p>

                  {/* Key Audited Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs border-t border-[#222226] pt-4">
                    {cs.keyMetrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="bg-[#080809] border border-[#222226] p-3 space-y-0.5">
                        <span className="text-[9px] text-zinc-500 uppercase block">{m.label}</span>
                        <span className={`text-base font-bold ${m.highlight ? 'text-[#9C8465]' : 'text-zinc-100'}`}>
                          {m.value}
                        </span>
                        <span className="text-[9px] text-emerald-400 block">{m.sublabel}</span>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Snippet */}
                  <div className="bg-[#1A1A1E] border-l-2 border-[#9C8465] p-3 space-y-1 text-xs">
                    <p className="font-sans italic text-zinc-300 text-[11px]">
                      "{cs.testimonial.quote}"
                    </p>
                    <span className="font-mono text-[9px] text-zinc-500 block">
                      — {cs.testimonial.author}, {cs.testimonial.title}
                    </span>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="border-t border-[#222226] pt-4 flex items-center justify-between font-mono text-xs">
                  <span className="text-[10px] text-zinc-500">
                    DIRECTORS: <strong className="text-zinc-300">{cs.directorName}</strong>
                  </span>

                  <button
                    onClick={() => setModalCaseStudy(cs)}
                    className="bg-[#1A1A1E] hover:bg-[#9C8465] text-zinc-200 hover:text-white border border-[#222226] hover:border-[#9C8465] px-3.5 py-2 text-[10px] uppercase font-semibold transition-all flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                    aria-label={`Inspect ${cs.campaignTitle} Case Study Dossier`}
                  >
                    <span>INSPECT DOSSIER</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4. PERFORMANCE TELEMETRY DASHBOARD SECTION */}
        <div className="bg-[#111113] border border-[#222226] p-6 md:p-8 space-y-8" id="performance-telemetry-dashboard">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-[#222226] pb-6">
            <div>
              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest block">
                [ AUDITED_PERFORMANCE_ENGINE // TELEMETRY_STATION ]
              </span>
              <h3 className="font-sans font-medium text-2xl text-white mt-1">
                Real-Time Co-Production Telemetry
              </h3>
              <p className="font-sans text-xs text-zinc-400 mt-1 max-w-xl">
                Aggregated 120Hz performance data across all active VMN campaigns. Independent audited telemetry with zero cookie trackers.
              </p>
            </div>

            {/* Time Range Selector */}
            <div className="flex items-center gap-1 font-mono text-xs border border-[#222226] bg-[#080809] p-1">
              <span className="text-zinc-500 text-[10px] uppercase px-2">RANGE:</span>
              {(['30D', '90D', '1Y', 'ALL'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setTimeRange(r)}
                  className={`px-3 py-1 text-[10px] uppercase font-semibold transition-all cursor-pointer ${
                    timeRange === r
                      ? 'bg-[#9C8465] text-white'
                      : 'text-zinc-400 hover:text-white hover:bg-[#1A1A1E]'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* High-Precision Statistics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#080809] border border-[#222226] p-4 space-y-2">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block">
                VERIFIED NETWORK IMPRESSIONS
              </span>
              <div className="text-2xl font-mono text-zinc-100 font-bold">
                <DecryptCounter value={18800000} format="number" disabled={reducedMotion || lowPowerMode} />
              </div>
              <span className="font-mono text-[9px] text-emerald-400 block">+14.2% YoY Growth</span>
            </div>

            <div className="bg-[#080809] border border-[#222226] p-4 space-y-2">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block">
                AVERAGE READ COMPLETION
              </span>
              <div className="text-2xl font-mono text-[#9C8465] font-bold">
                <DecryptCounter value={84.6} format="percent" disabled={reducedMotion || lowPowerMode} />
              </div>
              <span className="font-mono text-[9px] text-emerald-400 block">+280% vs Industry Avg (22%)</span>
            </div>

            <div className="bg-[#080809] border border-[#222226] p-4 space-y-2">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block">
                MANAGED INBOUND PIPELINE
              </span>
              <div className="text-2xl font-mono text-zinc-100 font-bold">
                <DecryptCounter value={3850000} format="currency" disabled={reducedMotion || lowPowerMode} />
              </div>
              <span className="font-mono text-[9px] text-emerald-400 block">+22.1% High-Intent Leads</span>
            </div>

            <div className="bg-[#080809] border border-[#222226] p-4 space-y-2">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block">
                ZERO-AD DIGITAL HYGIENE
              </span>
              <div className="text-2xl font-mono text-emerald-400 font-bold">
                100%
              </div>
              <span className="font-mono text-[9px] text-zinc-400 block">Sovereign Direct Delivery</span>
            </div>
          </div>

          {/* Interactive Bespoke Chart Embed */}
          <BespokeCharts
            data={CHART_DATA}
            demographics={DEMOGRAPHICS}
            reducedMotion={reducedMotion}
            lowPowerMode={lowPowerMode}
          />
        </div>

        {/* 5. AUDITED BRAND PARTNERS LOGO GRID */}
        <div className="space-y-6 border-t border-[#222226] pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest block">
                [ AUDITED_ALLIANCE // BRAND_PORTFOLIO ]
              </span>
              <h3 className="font-sans font-medium text-xl text-zinc-100 mt-1">
                Participating Brand & Atelier Houses
              </h3>
            </div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase bg-[#111113] border border-[#222226] px-3 py-1">
              8 VERIFIED GLOBAL ATELIERS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" id="brand-logos-grid">
            {BRAND_PARTNERS.map((brand, idx) => (
              <div
                key={idx}
                className="bg-[#111113] border border-[#222226] hover:border-[#9C8465] p-5 flex flex-col justify-between h-28 transition-all group"
              >
                <div className="flex justify-between items-start">
                  <Building2 className="w-4 h-4 text-zinc-600 group-hover:text-[#9C8465] transition-colors" />
                  <span className="font-mono text-[8px] text-zinc-500 uppercase">{brand.location}</span>
                </div>

                <div>
                  <h4 className="font-sans font-bold text-sm tracking-wider text-zinc-300 group-hover:text-white transition-colors">
                    {brand.name}
                  </h4>
                  <span className="font-mono text-[9px] text-zinc-500 block">{brand.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. EXPANDABLE CASE STUDY DOSSIER MODAL */}
        <AnimatePresence>
          {modalCaseStudy && (
            <div
              className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setModalCaseStudy(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-casestudy-title"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#111113] border border-[#9C8465] w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 relative text-zinc-100 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setModalCaseStudy(null)}
                  className="absolute top-4 right-4 p-2 bg-[#1A1A1E] text-zinc-400 hover:text-white border border-[#222226] hover:border-[#9C8465] transition-colors cursor-pointer"
                  aria-label="Close Case Study Dossier Modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Header */}
                <div className="space-y-2 border-b border-[#222226] pb-4 pr-8">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-[#9C8465] uppercase font-semibold">
                    <span>// AUDITED CAMPAIGN CASE STUDY</span>
                    <span>•</span>
                    <span>[{modalCaseStudy.clientIndustry}]</span>
                  </div>
                  <h3 id="modal-casestudy-title" className="font-sans text-2xl font-medium text-white">
                    {modalCaseStudy.campaignTitle}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400">
                    Client: {modalCaseStudy.clientName} | Directors: {modalCaseStudy.directorName}
                  </p>
                </div>

                {/* All Key Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                  {modalCaseStudy.keyMetrics.map((m, idx) => (
                    <div key={idx} className="bg-[#080809] border border-[#222226] p-3 space-y-1">
                      <span className="text-[8px] text-zinc-500 uppercase block">{m.label}</span>
                      <span className="text-base font-bold text-[#9C8465]">{m.value}</span>
                      <span className="text-[8px] text-emerald-400 block">{m.sublabel}</span>
                    </div>
                  ))}
                </div>

                {/* Challenge vs Solution Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
                  <div className="bg-[#080809] border border-[#222226] p-4 space-y-2">
                    <span className="font-mono text-[10px] text-rose-400 uppercase font-semibold block">
                      [ THE CHALLENGE ]
                    </span>
                    <p className="text-zinc-300 leading-relaxed">{modalCaseStudy.challenge}</p>
                  </div>

                  <div className="bg-[#080809] border border-[#222226] p-4 space-y-2">
                    <span className="font-mono text-[10px] text-emerald-400 uppercase font-semibold block">
                      [ VMN SOVEREIGN SOLUTION ]
                    </span>
                    <p className="text-zinc-300 leading-relaxed">{modalCaseStudy.solution}</p>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="space-y-2 border-t border-[#222226] pt-4">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block">
                    EXECUTED CAMPAIGN DELIVERABLES:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-zinc-200">
                    {modalCaseStudy.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 bg-[#080809] p-2.5 border border-[#222226]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Testimonial */}
                <div className="bg-[#1A1A1E] border-l-2 border-[#9C8465] p-4 space-y-2">
                  <Quote className="w-5 h-5 text-[#9C8465]" />
                  <p className="font-sans italic text-zinc-200 text-xs leading-relaxed">
                    "{modalCaseStudy.testimonial.quote}"
                  </p>
                  <span className="font-mono text-[10px] text-[#9C8465] block font-semibold">
                    — {modalCaseStudy.testimonial.author}, {modalCaseStudy.testimonial.title}
                  </span>
                </div>

                {/* Footer Buttons */}
                <div className="border-t border-[#222226] pt-4 flex justify-end gap-3 font-mono text-xs">
                  <button
                    onClick={() => setModalCaseStudy(null)}
                    className="px-4 py-2.5 bg-[#1A1A1E] border border-[#222226] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    CLOSE DOSSIER
                  </button>
                  <button
                    onClick={() => {
                      setModalCaseStudy(null);
                      onScheduleBriefing();
                    }}
                    className="px-5 py-2.5 bg-[#9C8465] hover:bg-[#B39977] text-white font-semibold flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>REQUEST SIMILAR CAMPAIGN</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* 7. HIGH IMPACT CALL TO ACTION BANNER */}
        <div className="bg-gradient-to-r from-[#111113] via-[#1A1A1E] to-[#111113] border border-[#9C8465]/60 p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest block">
              [ SOVEREIGN_CAMPAIGN_DIRECTIVE ]
            </span>
            <h3 className="font-sans font-medium text-2xl md:text-3xl text-white">
              Ready to Underwrite Your Next Sovereign Campaign?
            </h3>
            <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed">
              Eliminate programmatic ad decay. Partner directly with VMN Studios for custom research dossiers, 35mm film co-productions, and spatial audio installations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs relative z-10">
            <button
              onClick={onScheduleBriefing}
              className="px-6 py-3 bg-[#9C8465] hover:bg-[#B39977] text-white font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#9C8465]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
            >
              <span>[ REQUEST CUSTOM CAMPAIGN AUDIT ]</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
