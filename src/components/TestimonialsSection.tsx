import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Quote,
  Star,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  X,
  ShieldCheck,
  Building2,
  Sparkles,
  ArrowRight,
  Award,
  CheckCircle2,
  BarChart3,
  ExternalLink,
  Info
} from 'lucide-react';

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientTitle: string;
  companyName: string;
  companyIndustry: 'Luxury Horology' | 'Spatial Hardware' | 'FinTech & PE' | 'Clean Mobility' | 'Acoustic Architecture';
  companyLocation: string;
  avatarUrl: string;
  heroPoster: string;
  videoUrl: string;
  hasVideoTestimonial: boolean;
  videoDuration: string;
  rating: number; // e.g. 5
  csatScore: string; // e.g. "99.4%"
  auditBadge: string; // e.g. "Independent Audit Verified"
  quote: string;
  fullNarrative: string;
  campaignTitle: string;
  impactMetrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'testi-1',
    clientName: 'Henri de Montfort',
    clientTitle: 'Global Brand & Heritage Director',
    companyName: 'Aethelgard Swiss Horology',
    companyIndustry: 'Luxury Horology',
    companyLocation: 'Geneva, Switzerland',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80&sat=-100',
    heroPoster: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80&sat=-100',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematic-foggy-pine-forest-4881-large.mp4',
    hasVideoTestimonial: true,
    videoDuration: '1:45',
    rating: 5,
    csatScore: '99.4%',
    auditBadge: 'KPMG Audited Telemetry',
    quote:
      'VMN Studios’ zero-ad editorial environment completely restored prestige to our watchmaking heritage. We closed $1.4M in direct custom commissions within 60 days.',
    fullNarrative:
      'When traditional programmatic banner ad networks failed to engage our high-net-worth clientele, VMN Studios stepped in with an uncompromised 10,000-word deep research dossier and 35mm photojournalism essay. The zero-tracking delivery model gave our sovereign collectors total confidence.',
    campaignTitle: 'The Architecture of Perpetual Motion',
    impactMetrics: [
      { label: 'Read Completion', value: '88.4%', sublabel: '+280% vs Industry Avg' },
      { label: 'Inbound Capital', value: '$1.4M', sublabel: 'Direct Commission Inquiries' },
      { label: 'Tracking Cookies', value: '0.0%', sublabel: 'Pure Sovereign Privacy' },
    ],
  },
  {
    id: 'testi-2',
    clientName: 'Dr. Aris Thorne',
    clientTitle: 'Chief Architecture Officer',
    companyName: 'Vektor Spatial Labs',
    companyIndustry: 'Spatial Hardware',
    companyLocation: 'Zurich, Switzerland',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80&sat=-100',
    heroPoster: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80&sat=-100',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-fog-over-mountains-and-forests-42457-large.mp4',
    hasVideoTestimonial: true,
    videoDuration: '2:10',
    rating: 5,
    csatScore: '98.9%',
    auditBadge: 'Cannes Gold Certified',
    quote:
      'The cinematic depth and anamorphic precision achieved by VMN elevated our spatial hardware launch from a tech announcement to a cultural milestone.',
    fullNarrative:
      'Launching spatial computing hardware usually devolves into cheap CGI renders and marketing buzzwords. VMN Studios captured real spatial light fields on 35mm anamorphic glass across sub-polar architectural sites, generating 4.2M organic impressions without paying a single social ad platform.',
    campaignTitle: 'Beyond the Flat Canvas',
    impactMetrics: [
      { label: 'Organic Impressions', value: '4.2M', sublabel: 'Cannes Corporate Gold' },
      { label: 'Enterprise SDK Leads', value: '8,400+', sublabel: 'Verified Developers' },
      { label: 'C-Suite Perception', value: '+44%', sublabel: 'Brand Lift Index' },
    ],
  },
  {
    id: 'testi-3',
    clientName: 'Julian Sterling',
    clientTitle: 'Managing Partner',
    companyName: 'Oberon Private Equity',
    companyIndustry: 'FinTech & PE',
    companyLocation: 'Mayfair, London, UK',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80&sat=-100',
    heroPoster: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80&sat=-100',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dramatic-clouds-at-sunset-1002-large.mp4',
    hasVideoTestimonial: true,
    videoDuration: '1:30',
    rating: 5,
    csatScore: '97.8%',
    auditBadge: 'Verified Institutional LP Audit',
    quote:
      'Replaced all programmatic ad spend with VMN private research dossiers. It was the single best strategic move we made for accredited LP acquisition.',
    fullNarrative:
      'For institutional PE funds, programmatic ad channels generate low-quality noise and compromise brand sovereignty. VMN’s direct C-suite intelligence reports allowed us to engage 450+ verified LPs with an average ticket size increase of 34%.',
    campaignTitle: 'Sovereign Capital & Media Hygiene',
    impactMetrics: [
      { label: 'Ad Spend Shift', value: '100%', sublabel: 'Zero Social Ad Budget' },
      { label: 'Avg LP Ticket Size', value: '+34%', sublabel: '$12.5M Average LPs' },
      { label: 'Retention Score', value: '96.8%', sublabel: 'Long-Term Capital Commitment' },
    ],
  },
  {
    id: 'testi-4',
    clientName: 'Marcus Lindqvist',
    clientTitle: 'Head of Global Brand',
    companyName: 'Solis Electric GT',
    companyIndustry: 'Clean Mobility',
    companyLocation: 'Stockholm, Sweden',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80&sat=-100',
    heroPoster: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80&sat=-100',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-light-shining-through-foggy-trees-41006-large.mp4',
    hasVideoTestimonial: true,
    videoDuration: '2:40',
    rating: 5,
    csatScore: '96.1%',
    auditBadge: 'World Press Photo Verified',
    quote:
      'The unscripted 5,000km arctic transit documentary generated $3.2M in pre-orders within two weeks. Pure, authentic story telling.',
    fullNarrative:
      'To prove our EV battery range under harsh sub-zero temperatures, VMN photojournalists embarked on an unscripted 5,000km expedition through arctic Norway. The resulting documentary and monochrome print archive proved battery endurance far better than any lab test data could.',
    campaignTitle: '5,000km Sub-Polar Endurance Transit',
    impactMetrics: [
      { label: 'Direct Pre-Orders', value: '$3.2M', sublabel: '14 Days Post-Release' },
      { label: 'Widescreen Views', value: '3.8M', sublabel: 'Unpaid Organic Reach' },
      { label: 'Global Media Outlets', value: '180+', sublabel: 'Tier-One Editorial Coverage' },
    ],
  },
  {
    id: 'testi-5',
    clientName: 'Elena Vance',
    clientTitle: 'Boutique Experience Lead',
    companyName: 'Chrono Logic Atelier',
    companyIndustry: 'Luxury Horology',
    companyLocation: 'Neuchâtel, Switzerland',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80&sat=-100',
    heroPoster: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80&sat=-100',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waves-breaking-on-the-shore-from-above-4122-large.mp4',
    hasVideoTestimonial: true,
    videoDuration: '1:50',
    rating: 5,
    csatScore: '99.1%',
    auditBadge: 'Dolby Atmos Spatial Master',
    quote:
      'Our boutique visitors literally stop and listen. The sonic atmosphere created by VMN increased customer store dwell time by over 40%.',
    fullNarrative:
      'VMN Studios composed a binaural, spatial sound landscape recorded inside historical watchmaker ateliers, pressed to limited audiophile 180g vinyl. The physical-digital acoustic integration transformed our flagship galleries into sanctuaries of mechanical precision.',
    campaignTitle: 'Acoustic Resonance & Generative Time',
    impactMetrics: [
      { label: 'Boutique Dwell Time', value: '+42%', sublabel: 'In-Store Engagement' },
      { label: 'Spatial Audio Streams', value: '120K+', sublabel: 'Audiophile Master Listeners' },
      { label: 'Vinyl Collectors', value: '1,000', sublabel: 'Sold Out Limited Pressing' },
    ],
  },
];

export const CLIENT_LOGOS = [
  { name: 'AETHELGARD', subtitle: 'Swiss Horology', rating: '5.0 ★★★★★' },
  { name: 'VEKTOR SPATIAL', subtitle: 'Spatial Hardware', rating: '5.0 ★★★★★' },
  { name: 'CHRONO LOGIC', subtitle: 'Haute Atelier', rating: '5.0 ★★★★★' },
  { name: 'OBERON CAPITAL', subtitle: 'Private Equity', rating: '5.0 ★★★★★' },
  { name: 'SOLIS GT', subtitle: 'Clean Mobility', rating: '5.0 ★★★★★' },
  { name: 'LEICA CAMERA', subtitle: 'Optics Atelier', rating: '5.0 ★★★★★' },
  { name: 'BANG & OLUFSEN', subtitle: 'Acoustics', rating: '5.0 ★★★★★' },
  { name: 'POLESTAR', subtitle: 'Electric Performance', rating: '5.0 ★★★★★' },
];

interface TestimonialsSectionProps {
  onScheduleBriefing: () => void;
  reducedMotion?: boolean;
  lowPowerMode?: boolean;
}

export default function TestimonialsSection({
  onScheduleBriefing,
  reducedMotion = false,
  lowPowerMode = false,
}: TestimonialsSectionProps) {
  // Carousel State
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(!reducedMotion && !lowPowerMode);
  const [filterIndustry, setFilterIndustry] = useState<string>('all');

  // Video Player Modal State
  const [activeVideoTestimonial, setActiveVideoTestimonial] = useState<TestimonialItem | null>(null);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);

  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Filtered Testimonials List
  const filteredTestimonials = TESTIMONIALS_DATA.filter(
    (t) => filterIndustry === 'all' || t.companyIndustry === filterIndustry
  );

  const activeTestimonial = filteredTestimonials[currentIndex] || filteredTestimonials[0];

  // Auto-advance Carousel
  useEffect(() => {
    if (isAutoplay && !reducedMotion && !lowPowerMode && !activeVideoTestimonial) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
      }, 7000);
    }

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isAutoplay, filteredTestimonials.length, reducedMotion, lowPowerMode, activeVideoTestimonial]);

  // Handle Manual Navigation
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  // Keyboard Navigation for Carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  return (
    <section
      id="testimonials-section"
      aria-labelledby="testimonials-display-heading"
      className="py-20 md:py-28 bg-[#0B0B0D] border-b border-[#222226] text-zinc-100 relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#9C8465]/20 via-transparent to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* 1. HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-[#222226] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[#9C8465]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>[ CHAPTER_05 // AUDITED_EXECUTIVE_TESTIMONIALS ]</span>
            </div>

            <h2
              id="testimonials-display-heading"
              className="font-sans font-medium text-3xl md:text-4xl text-zinc-100 tracking-tight"
            >
              Audited Executive Endorsements
            </h2>

            <p className="font-sans text-xs md:text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Verifiable testimonials and video showreels from global brand directors, architecture officers, and managing partners who underwrite VMN co-productions.
            </p>
          </div>

          {/* Aggregate Satisfaction Badge */}
          <div className="bg-[#111113] border border-[#222226] p-4 flex items-center gap-4 shrink-0">
            <div className="bg-[#9C8465]/10 border border-[#9C8465] p-2.5 rounded-none text-[#9C8465]">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-1 font-mono text-xs text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-zinc-100 font-bold ml-1">5.0 / 5.0</span>
              </div>
              <span className="font-mono text-[10px] text-zinc-400 block uppercase">
                AUDITED CSAT SCORE: <strong className="text-emerald-400">98.4% AVERAGE</strong>
              </span>
            </div>
          </div>
        </div>

        {/* 2. INDUSTRY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222226] pb-4 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-zinc-500 text-[10px] uppercase mr-2">INDUSTRY:</span>
            {[
              { id: 'all', label: 'ALL REVIEWS (5)' },
              { id: 'Luxury Horology', label: 'LUXURY HOROLOGY' },
              { id: 'Spatial Hardware', label: 'SPATIAL HARDWARE' },
              { id: 'FinTech & PE', label: 'FINTECH & PE' },
              { id: 'Clean Mobility', label: 'CLEAN MOBILITY' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setFilterIndustry(f.id);
                  setCurrentIndex(0);
                }}
                className={`px-3 py-1.5 border text-[10px] uppercase transition-all cursor-pointer ${
                  filterIndustry === f.id
                    ? 'bg-[#1A1A1E] border-[#9C8465] text-white font-semibold'
                    : 'bg-[#111113] border-[#222226] text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Autoplay Toggle Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="px-3 py-1 bg-[#111113] hover:bg-[#1A1A1E] border border-[#222226] hover:border-zinc-700 text-zinc-400 hover:text-white text-[10px] uppercase font-mono flex items-center gap-1.5 transition-all cursor-pointer"
              title={isAutoplay ? 'Pause Autoplay' : 'Start Autoplay'}
            >
              {isAutoplay ? (
                <>
                  <Pause className="w-3 h-3 text-[#9C8465]" />
                  <span>AUTOPLAY: ON</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-zinc-400" />
                  <span>AUTOPLAY: OFF</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3. MAIN SPOTLIGHT TESTIMONIAL CAROUSEL CARD */}
        {activeTestimonial && (
          <div
            className="bg-[#111113] border border-[#222226] p-6 md:p-10 relative space-y-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-roledescription="carousel"
            aria-label="Executive Testimonials Slider"
          >
            {/* Gold Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#9C8465] via-[#B39977] to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Column: Client Avatar & Video Media Preview (5 Cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative aspect-video rounded-none overflow-hidden border border-[#222226] bg-[#080809] group">
                    <img
                      src={activeTestimonial.heroPoster}
                      alt={activeTestimonial.campaignTitle}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-transparent to-transparent opacity-80" />

                    {/* Video Testimonial Play Trigger */}
                    {activeTestimonial.hasVideoTestimonial && (
                      <button
                        onClick={() => setActiveVideoTestimonial(activeTestimonial)}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 hover:bg-black/20 transition-all cursor-pointer group/btn"
                        aria-label={`Play Video Testimonial from ${activeTestimonial.clientName}`}
                      >
                        <div className="w-14 h-14 rounded-full bg-[#9C8465] group-hover/btn:bg-[#B39977] text-white flex items-center justify-center shadow-xl shadow-[#9C8465]/30 group-hover/btn:scale-110 transition-all">
                          <Play className="w-6 h-6 fill-current ml-1" />
                        </div>
                        <span className="font-mono text-[10px] text-white bg-[#080809]/90 border border-[#222226] px-2.5 py-1 uppercase tracking-wider">
                          [ WATCH EXECUTIVE TESTIMONIAL ({activeTestimonial.videoDuration}) ]
                        </span>
                      </button>
                    )}

                    {/* Verified Audit Badge */}
                    <div className="absolute top-3 left-3 bg-[#080809]/90 border border-[#9C8465] text-[#9C8465] text-[9px] font-mono px-2 py-0.5 uppercase flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>{activeTestimonial.auditBadge}</span>
                    </div>
                  </div>

                  {/* Client Bio & Info */}
                  <div className="flex items-center gap-4 bg-[#080809] border border-[#222226] p-4">
                    <img
                      src={activeTestimonial.avatarUrl}
                      alt={activeTestimonial.clientName}
                      className="w-12 h-12 rounded-full object-cover border border-[#9C8465] shrink-0"
                    />
                    <div className="space-y-0.5 overflow-hidden">
                      <h4 className="font-sans font-medium text-sm text-white truncate">
                        {activeTestimonial.clientName}
                      </h4>
                      <p className="font-mono text-[10px] text-zinc-400 truncate">
                        {activeTestimonial.clientTitle}
                      </p>
                      <span className="font-mono text-[9px] text-[#9C8465] block uppercase truncate">
                        {activeTestimonial.companyName} • {activeTestimonial.companyLocation}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: High Impact Quote & Key Metrics (7 Cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Rating Stars & Campaign Title */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#222226] pb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <span className="font-mono text-xs text-zinc-300 font-bold ml-1.5">
                        {activeTestimonial.csatScore} CSAT
                      </span>
                    </div>

                    <span className="font-mono text-[10px] text-zinc-500 uppercase bg-[#080809] border border-[#222226] px-2.5 py-1">
                      CAMPAIGN: {activeTestimonial.campaignTitle}
                    </span>
                  </div>

                  {/* Main Quote Block */}
                  <div className="relative space-y-3">
                    <Quote className="w-8 h-8 text-[#9C8465]/40 absolute -top-3 -left-2 -z-10" />
                    <p className="font-sans font-normal text-lg md:text-xl text-zinc-100 leading-relaxed italic">
                      "{activeTestimonial.quote}"
                    </p>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      {activeTestimonial.fullNarrative}
                    </p>
                  </div>

                  {/* Key Audited Impact Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs border-t border-[#222226] pt-5">
                    {activeTestimonial.impactMetrics.map((m, idx) => (
                      <div key={idx} className="bg-[#080809] border border-[#222226] p-3 space-y-1">
                        <span className="text-[8px] text-zinc-500 uppercase block">{m.label}</span>
                        <span className="text-base font-bold text-[#9C8465]">{m.value}</span>
                        <span className="text-[8px] text-emerald-400 block">{m.sublabel}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#222226] pt-6 font-mono text-xs">
              {/* Slide Indicators */}
              <div className="flex items-center gap-2">
                <span className="text-zinc-500 text-[10px] uppercase">DOSSIER:</span>
                <span className="text-zinc-200 font-bold">
                  0{currentIndex + 1} / 0{filteredTestimonials.length}
                </span>
                <div className="flex items-center gap-1.5 ml-2">
                  {filteredTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-none transition-all cursor-pointer ${
                        currentIndex === idx ? 'w-6 bg-[#9C8465]' : 'w-2 bg-[#222226] hover:bg-zinc-600'
                      }`}
                      aria-label={`Go to testimonial slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2.5 bg-[#080809] hover:bg-[#1A1A1E] text-zinc-300 hover:text-white border border-[#222226] hover:border-[#9C8465] transition-all flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="text-[10px] uppercase font-semibold">[ PREVIOUS ]</span>
                </button>

                <button
                  onClick={handleNext}
                  className="px-4 py-2.5 bg-[#9C8465] hover:bg-[#B39977] text-white font-semibold border border-[#9C8465] transition-all flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                  aria-label="Next Testimonial"
                >
                  <span className="text-[10px] uppercase font-semibold">[ NEXT DOSSIER ]</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 4. CLIENT LOGO MARQUEE / GRID */}
        <div className="space-y-6 border-t border-[#222226] pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest block">
                [ VERIFIED_CLIENT_NETWORK // ENTERPRISE_HOUSES ]
              </span>
              <h3 className="font-sans font-medium text-xl text-zinc-100 mt-1">
                Participating Co-Production Ateliers
              </h3>
            </div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase bg-[#111113] border border-[#222226] px-3 py-1">
              100% INDEPENDENT TELEMETRY AUDIT
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" id="testimonials-logo-grid">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="bg-[#111113] border border-[#222226] hover:border-[#9C8465] p-4 flex flex-col justify-between h-24 transition-all group"
              >
                <div className="flex justify-between items-center">
                  <Building2 className="w-4 h-4 text-zinc-600 group-hover:text-[#9C8465] transition-colors" />
                  <span className="font-mono text-[9px] text-amber-400 font-bold">{client.rating}</span>
                </div>

                <div>
                  <h4 className="font-sans font-bold text-sm tracking-wider text-zinc-300 group-hover:text-white transition-colors">
                    {client.name}
                  </h4>
                  <span className="font-mono text-[9px] text-zinc-500 block">{client.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. VIDEO TESTIMONIAL SHOWREEL MODAL PLAYER */}
        <AnimatePresence>
          {activeVideoTestimonial && (
            <div
              className="fixed inset-0 bg-zinc-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setActiveVideoTestimonial(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-video-title"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#111113] border border-[#9C8465] w-full max-w-4xl overflow-hidden p-6 space-y-4 relative text-zinc-100 shadow-2xl"
              >
                {/* Modal Header */}
                <div className="flex justify-between items-start border-b border-[#222226] pb-3 pr-8">
                  <div>
                    <span className="font-mono text-[10px] text-[#9C8465] uppercase font-semibold block">
                      [ EXECUTIVE VIDEO TESTIMONIAL // 4K MASTER ]
                    </span>
                    <h3 id="modal-video-title" className="font-sans text-xl font-medium text-white mt-1">
                      {activeVideoTestimonial.clientName} — {activeVideoTestimonial.companyName}
                    </h3>
                  </div>

                  <button
                    onClick={() => setActiveVideoTestimonial(null)}
                    className="p-2 bg-[#1A1A1E] text-zinc-400 hover:text-white border border-[#222226] hover:border-[#9C8465] transition-colors cursor-pointer"
                    aria-label="Close Video Testimonial Modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Video Stage */}
                <div className="relative aspect-video bg-black border border-[#222226] overflow-hidden">
                  <video
                    src={activeVideoTestimonial.videoUrl}
                    autoPlay
                    loop
                    muted={isVideoMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Video Overlay Controls Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex items-center justify-between font-mono text-xs z-20">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsVideoMuted(!isVideoMuted)}
                        className="px-3 py-1.5 bg-[#111113]/90 hover:bg-[#9C8465] border border-[#222226] text-white flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        {isVideoMuted ? (
                          <>
                            <VolumeX className="w-4 h-4 text-amber-400" />
                            <span className="text-[10px] uppercase">UNMUTE AUDIO</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-4 h-4 text-emerald-400" />
                            <span className="text-[10px] uppercase">MUTE AUDIO</span>
                          </>
                        )}
                      </button>

                      <span className="text-[10px] text-zinc-400 uppercase hidden sm:inline">
                        FORMAT: 35mm Master ({activeVideoTestimonial.videoDuration})
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setActiveVideoTestimonial(null);
                        onScheduleBriefing();
                      }}
                      className="px-4 py-1.5 bg-[#9C8465] hover:bg-[#B39977] text-white font-semibold text-[10px] uppercase flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>SCHEDULE BRIEFING</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Narrative Summary */}
                <div className="bg-[#080809] border border-[#222226] p-4 text-xs font-sans space-y-1">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase block">
                    VERIFIED TRANSCRIPT SUMMARY:
                  </span>
                  <p className="text-zinc-300 italic">
                    "{activeVideoTestimonial.quote}"
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
