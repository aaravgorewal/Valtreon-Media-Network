import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  FileText,
  Sliders,
  Check,
  Globe
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
  transcript: string[];
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
    transcript: [
      '[00:05] "In haute horology, trust is built over centuries, not millisecond ad auctions."',
      '[00:28] "VMN captured our Geneva watchmakers on 35mm optical film stock with Dolby Atmos soundscapes."',
      '[01:10] "Our sovereign collectors spent an average of 18 minutes reading the dossier in complete privacy."'
    ],
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
    transcript: [
      '[00:12] "We refused to launch our optical spatial array through compressed mobile social feeds."',
      '[00:45] "VMN produced an unfiltered 35mm film film print that premiered in Geneva and Zurich."',
      '[01:35] "The organic uptake among tier-one architectural firms exceeded our 3-year plan."'
    ],
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
    transcript: [
      '[00:08] "Institutional LPs do not click banner ads on social media networks."',
      '[00:50] "VMN delivered encrypted private dossiers directly to vetted family office principals."',
      '[01:15] "We closed Fund IV three months ahead of schedule."'
    ],
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
    transcript: [
      '[00:15] "We gave VMN total editorial freedom to document our arctic drive without script approval."',
      '[01:10] "The raw authenticity resonated across Europe and North America instantly."',
      '[02:20] "Over 3.2 million viewers watched the uncompressed 4K master on VMN portal."'
    ],
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
    companyIndustry: 'Acoustic Architecture',
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
    transcript: [
      '[00:10] "Sound is the forgotten dimension of luxury retail architecture."',
      '[00:55] "VMN field-recorded mechanical escapements at 192kHz 24-bit audio resolution."',
      '[01:30] "The limited vinyl pressings became instant collector items among our VIP guests."'
    ],
    impactMetrics: [
      { label: 'Boutique Dwell Time', value: '+42%', sublabel: 'In-Store Engagement' },
      { label: 'Spatial Audio Streams', value: '120K+', sublabel: 'Audiophile Master Listeners' },
      { label: 'Vinyl Collectors', value: '1,000', sublabel: 'Sold Out Limited Pressing' },
    ],
  },
];

export const CLIENT_LOGOS = [
  { id: 'logo-1', name: 'AETHELGARD', category: 'Swiss Horology', location: 'Geneva', rating: '5.0 ★★★★★', allianceType: 'Sovereign Co-Production' },
  { id: 'logo-2', name: 'VEKTOR SPATIAL', category: 'Spatial Hardware', location: 'Zurich', rating: '5.0 ★★★★★', allianceType: 'Research Underwriting' },
  { id: 'logo-3', name: 'CHRONO LOGIC', category: 'Haute Atelier', location: 'Neuchâtel', rating: '5.0 ★★★★★', allianceType: '35mm Film Archive' },
  { id: 'logo-4', name: 'OBERON CAPITAL', category: 'Private Equity', location: 'London', rating: '5.0 ★★★★★', allianceType: 'C-Suite Intelligence' },
  { id: 'logo-5', name: 'SOLIS GT', category: 'Clean Mobility', categorySub: 'Electric GT', location: 'Stockholm', rating: '5.0 ★★★★★', allianceType: 'Documentary Expedition' },
  { id: 'logo-6', name: 'LEICA CAMERA', category: 'Optics Atelier', location: 'Wetzlar', rating: '5.0 ★★★★★', allianceType: 'Optical Glass Mastery' },
  { id: 'logo-7', name: 'BANG & OLUFSEN', category: 'Acoustic Labs', location: 'Struer', rating: '5.0 ★★★★★', allianceType: 'Spatial Binaural Audio' },
  { id: 'logo-8', name: 'POLESTAR', category: 'Electric Performance', location: 'Gothenburg', rating: '5.0 ★★★★★', allianceType: 'Zero-Telemetry Showcase' },
];

export interface TestimonialsSectionProps {
  onScheduleBriefing?: () => void;
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
  const [selectedBrand, setSelectedBrand] = useState<typeof CLIENT_LOGOS[0] | null>(null);

  // Video Player Modal State
  const [activeVideoTestimonial, setActiveVideoTestimonial] = useState<TestimonialItem | null>(null);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);

  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressAnimRef = useRef<number>(0);
  const [progressPercent, setProgressPercent] = useState<number>(0);

  // Filtered Testimonials List
  const filteredTestimonials = TESTIMONIALS_DATA.filter(
    (t) => filterIndustry === 'all' || t.companyIndustry === filterIndustry
  );

  const activeTestimonial = filteredTestimonials[currentIndex] || filteredTestimonials[0];

  // Auto-advance Carousel with Progress Tracking
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoplay && !reducedMotion && !lowPowerMode && !activeVideoTestimonial) {
      const duration = 7000;
      const startTime = Date.now();

      interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const pct = Math.min(100, (elapsed / duration) * 100);
        setProgressPercent(pct);

        if (elapsed >= duration) {
          setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
          setProgressPercent(0);
        }
      }, 100);
    } else {
      setProgressPercent(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoplay, currentIndex, filteredTestimonials.length, reducedMotion, lowPowerMode, activeVideoTestimonial]);

  // Handle Escape Key for Video Modal
  useEffect(() => {
    const handleKeyDownModal = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeVideoTestimonial) {
        setActiveVideoTestimonial(null);
      }
    };
    window.addEventListener('keydown', handleKeyDownModal);
    return () => window.removeEventListener('keydown', handleKeyDownModal);
  }, [activeVideoTestimonial]);

  // Handle Manual Navigation
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    setProgressPercent(0);
  }, [filteredTestimonials.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
    setProgressPercent(0);
  }, [filteredTestimonials.length]);

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
      className="py-24 bg-[#080809] border-b border-[#222226] text-zinc-100 relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#9C8465]/20 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* 1. HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-[#222226] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[#9C8465]">
              <Sparkles className="w-3.5 h-3.5 text-[#9C8465]" />
              <span>[ CHAPTER_05 // AUDITED_EXECUTIVE_TESTIMONIALS ]</span>
            </div>

            <h2
              id="testimonials-display-heading"
              className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
            >
              Audited Executive Endorsements & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#9C8465]">
                Sovereign Enterprise Showreels.
              </span>
            </h2>

            <p className="font-sans text-xs sm:text-sm md:text-base text-zinc-300 max-w-2xl leading-relaxed">
              Verifiable testimonials and video showreels from global brand directors, architecture officers, and managing partners who underwrite VMN co-productions under Swiss zero-telemetry rules.
            </p>
          </div>

          {/* Aggregate Satisfaction Badge */}
          <div className="bg-[#0E0E11] border border-[#222226] p-5 flex items-center gap-5 shrink-0 shadow-lg">
            <div className="bg-[#9C8465]/10 border border-[#9C8465] p-3 text-[#9C8465]">
              <Award className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 font-mono text-xs text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                ))}
                <span className="text-white font-bold ml-1">5.0 / 5.0</span>
              </div>
              <span className="font-mono text-[11px] text-zinc-300 block uppercase">
                AUDITED CSAT SCORE: <strong className="text-emerald-400">98.4% AVERAGE</strong>
              </span>
              <span className="font-mono text-[9px] text-zinc-500 block">
                KPMG Telemetry Certified • 100% Privacy Preserved
              </span>
            </div>
          </div>
        </div>

        {/* 2. INDUSTRY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222226] pb-4 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-zinc-500 text-[10px] uppercase mr-2">[ FILTER INDUSTRY ]:</span>
            {[
              { id: 'all', label: 'ALL REVIEWS (5)' },
              { id: 'Luxury Horology', label: 'LUXURY HOROLOGY' },
              { id: 'Spatial Hardware', label: 'SPATIAL HARDWARE' },
              { id: 'FinTech & PE', label: 'FINTECH & PE' },
              { id: 'Clean Mobility', label: 'CLEAN MOBILITY' },
              { id: 'Acoustic Architecture', label: 'ACOUSTIC ARCHITECTURE' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setFilterIndustry(f.id);
                  setCurrentIndex(0);
                  setProgressPercent(0);
                }}
                className={`px-3.5 py-2 border text-[10px] uppercase transition-all cursor-pointer font-semibold ${
                  filterIndustry === f.id
                    ? 'bg-[#181820] border-[#9C8465] text-white shadow-md'
                    : 'bg-[#0E0E11] border-[#222226] text-zinc-400 hover:text-white hover:border-zinc-600'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Autoplay Toggle Controls & Progress */}
          <div className="flex items-center gap-3">
            {isAutoplay && progressPercent > 0 && (
              <div className="w-24 h-1.5 bg-[#1F1F24] overflow-hidden hidden sm:block">
                <div
                  className="h-full bg-[#9C8465] transition-all duration-100 ease-linear"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="px-3.5 py-1.5 bg-[#0E0E11] hover:bg-[#181820] border border-[#222226] hover:border-zinc-600 text-zinc-300 hover:text-white text-[10px] uppercase font-mono flex items-center gap-2 transition-all cursor-pointer"
              title={isAutoplay ? 'Pause Autoplay' : 'Start Autoplay'}
            >
              {isAutoplay ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#9C8465]" />
                  <span>AUTOPLAY: ON</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-zinc-400" />
                  <span>AUTOPLAY: OFF</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3. MAIN SPOTLIGHT TESTIMONIAL CAROUSEL CARD */}
        {activeTestimonial && (
          <div
            className="bg-[#0E0E11] border border-[#222226] p-6 sm:p-10 relative space-y-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] shadow-2xl"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            role="region"
            aria-roledescription="carousel"
            aria-label="Executive Testimonials Slider"
          >
            {/* Top Corner Frame Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#9C8465]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#9C8465]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#9C8465]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#9C8465]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Column: Client Avatar & Video Media Preview (5 Cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative aspect-video rounded-none overflow-hidden border border-[#222226] bg-[#050506] group shadow-inner">
                    <img
                      src={activeTestimonial.heroPoster}
                      alt={activeTestimonial.campaignTitle}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-transparent to-transparent opacity-80" />

                    {/* Video Testimonial Play Trigger */}
                    {activeTestimonial.hasVideoTestimonial && (
                      <button
                        type="button"
                        onClick={() => {
                          setActiveVideoTestimonial(activeTestimonial);
                          setShowTranscript(false);
                        }}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 hover:bg-black/30 transition-all cursor-pointer group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                        aria-label={`Play Executive Video Testimonial from ${activeTestimonial.clientName}`}
                      >
                        <div className="w-16 h-16 rounded-full bg-[#9C8465] group-hover/btn:bg-[#B39977] text-white flex items-center justify-center shadow-xl shadow-[#9C8465]/40 group-hover/btn:scale-110 transition-all">
                          <Play className="w-7 h-7 fill-current ml-1" />
                        </div>
                        <span className="font-mono text-[10px] text-white bg-[#080809]/95 border border-[#9C8465] px-3 py-1 uppercase tracking-wider font-semibold shadow-lg">
                          [ WATCH EXECUTIVE TESTIMONIAL ({activeTestimonial.videoDuration}) ]
                        </span>
                      </button>
                    )}

                    {/* Verified Audit Badge */}
                    <div className="absolute top-3 left-3 bg-[#080809]/90 border border-[#9C8465] text-[#9C8465] text-[9px] font-mono px-2.5 py-1 uppercase flex items-center gap-1.5 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{activeTestimonial.auditBadge}</span>
                    </div>
                  </div>

                  {/* Client Bio & Info */}
                  <div className="flex items-center gap-4 bg-[#050506] border border-[#222226] p-4">
                    <img
                      src={activeTestimonial.avatarUrl}
                      alt={activeTestimonial.clientName}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border border-[#9C8465] shrink-0"
                    />
                    <div className="space-y-0.5 overflow-hidden">
                      <h3 className="font-sans font-semibold text-base text-white truncate">
                        {activeTestimonial.clientName}
                      </h3>
                      <p className="font-mono text-[11px] text-zinc-300 truncate">
                        {activeTestimonial.clientTitle}
                      </p>
                      <span className="font-mono text-[10px] text-[#9C8465] block uppercase truncate font-semibold">
                        {activeTestimonial.companyName} • {activeTestimonial.companyLocation}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: High Impact Quote & Key Metrics (7 Cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Rating Stars & Campaign Title */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#222226] pb-3">
                    <div className="flex items-center gap-1.5 text-amber-400">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                      ))}
                      <span className="font-mono text-xs text-white font-bold ml-1">
                        {activeTestimonial.csatScore} CSAT RATING
                      </span>
                    </div>

                    <span className="font-mono text-[10px] text-zinc-300 uppercase bg-[#050506] border border-[#222226] px-3 py-1 font-semibold">
                      CAMPAIGN: {activeTestimonial.campaignTitle}
                    </span>
                  </div>

                  {/* Main Quote Block */}
                  <div className="relative space-y-3">
                    <Quote className="w-10 h-10 text-[#9C8465]/20 absolute -top-4 -left-3 -z-10" />
                    <p className="font-sans font-normal text-lg sm:text-xl text-zinc-100 leading-relaxed italic">
                      "{activeTestimonial.quote}"
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {activeTestimonial.fullNarrative}
                    </p>
                  </div>

                  {/* Key Audited Impact Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs border-t border-[#222226] pt-5">
                    {activeTestimonial.impactMetrics.map((m, idx) => (
                      <div key={idx} className="bg-[#050506] border border-[#222226] p-3.5 space-y-1">
                        <span className="text-[9px] text-zinc-400 uppercase block font-medium">{m.label}</span>
                        <span className="text-lg font-bold text-[#9C8465]">{m.value}</span>
                        <span className="text-[9px] text-emerald-400 block font-semibold">{m.sublabel}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#222226] pt-6 font-mono text-xs">
              {/* Slide Indicators */}
              <div className="flex items-center gap-3">
                <span className="text-zinc-500 text-[10px] uppercase">[ DOSSIER ]:</span>
                <span className="text-zinc-200 font-bold">
                  0{currentIndex + 1} / 0{filteredTestimonials.length}
                </span>
                <div className="flex items-center gap-1.5 ml-2">
                  {filteredTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setCurrentIndex(idx);
                        setProgressPercent(0);
                      }}
                      className={`h-2 rounded-none transition-all cursor-pointer ${
                        currentIndex === idx ? 'w-8 bg-[#9C8465]' : 'w-2.5 bg-[#222226] hover:bg-zinc-600'
                      }`}
                      aria-label={`Go to testimonial dossier ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-4 py-2.5 bg-[#050506] hover:bg-[#181820] text-zinc-300 hover:text-white border border-[#222226] hover:border-[#9C8465] transition-all flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="text-[10px] uppercase font-bold">[ PREVIOUS ]</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-5 py-2.5 bg-[#9C8465] hover:bg-[#B39977] text-white font-bold border border-[#9C8465] transition-all flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                  aria-label="Next Testimonial"
                >
                  <span className="text-[10px] uppercase font-bold">[ NEXT DOSSIER ]</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 4. CLIENT LOGO ALLIANCES SHOWCASE */}
        <div className="space-y-6 border-t border-[#222226] pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest block">
                [ VERIFIED_CLIENT_NETWORK // ENTERPRISE_HOUSES ]
              </span>
              <h3 className="font-sans font-medium text-2xl text-white mt-1">
                Participating Co-Production Enterprise Alliances
              </h3>
            </div>
            <span className="font-mono text-[10px] text-zinc-300 uppercase bg-[#0E0E11] border border-[#222226] px-3.5 py-1.5 font-semibold">
              100% INDEPENDENT TELEMETRY AUDIT • SWISS FADP COMPLIANT
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" id="testimonials-logo-grid">
            {CLIENT_LOGOS.map((client) => {
              const isSelected = selectedBrand?.id === client.id;

              return (
                <div
                  key={client.id}
                  onClick={() => setSelectedBrand(isSelected ? null : client)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedBrand(isSelected ? null : client);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isSelected}
                  aria-label={`View details for ${client.name}`}
                  className={`bg-[#0E0E11] border p-5 flex flex-col justify-between min-h-[110px] transition-all group cursor-pointer relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] ${
                    isSelected
                      ? 'border-[#9C8465] bg-[#14141A] shadow-xl'
                      : 'border-[#222226] hover:border-zinc-600 hover:bg-[#111115]'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <Building2 className={`w-4 h-4 transition-colors ${isSelected ? 'text-[#9C8465]' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                    <span className="font-mono text-[9px] text-amber-400 font-bold">{client.rating}</span>
                  </div>

                  <div className="space-y-0.5">
                    <h4 className="font-sans font-bold text-sm tracking-wider text-zinc-200 group-hover:text-white transition-colors">
                      {client.name}
                    </h4>
                    <span className="font-mono text-[9px] text-zinc-400 block uppercase">
                      {client.category} • {client.location}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-[#222226] font-mono text-[10px] text-[#9C8465] space-y-1">
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{client.allianceType}</span>
                      </div>
                      <span className="text-[9px] text-zinc-400 block">KPMG Audit Verified • Zero Telemetry</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. VIDEO TESTIMONIAL SHOWREEL MODAL PLAYER */}
        <AnimatePresence>
          {activeVideoTestimonial && (
            <div
              className="fixed inset-0 bg-zinc-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
              onClick={() => setActiveVideoTestimonial(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-video-title"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0E0E11] border border-[#9C8465] w-full max-w-4xl overflow-hidden p-6 sm:p-8 space-y-5 relative text-zinc-100 shadow-2xl"
              >
                {/* Modal Header */}
                <div className="flex justify-between items-start border-b border-[#222226] pb-4">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-[#9C8465] uppercase font-bold">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>[ EXECUTIVE VIDEO TESTIMONIAL // 35MM CINEMA MASTER ]</span>
                    </div>
                    <h3 id="modal-video-title" className="font-sans text-xl sm:text-2xl font-semibold text-white mt-1">
                      {activeVideoTestimonial.clientName} — {activeVideoTestimonial.companyName}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveVideoTestimonial(null)}
                    className="p-2.5 bg-[#181820] text-zinc-300 hover:text-white border border-[#222226] hover:border-[#9C8465] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                    aria-label="Close Video Testimonial Modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Video Stage */}
                <div className="relative aspect-video bg-black border border-[#222226] overflow-hidden group">
                  <video
                    src={activeVideoTestimonial.videoUrl}
                    autoPlay
                    loop
                    muted={isVideoMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Video Overlay Controls Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-4 flex flex-wrap items-center justify-between gap-3 font-mono text-xs z-20">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setIsVideoMuted(!isVideoMuted)}
                        className="px-3.5 py-2 bg-[#0E0E11]/90 hover:bg-[#9C8465] border border-[#222226] text-white flex items-center gap-2 transition-all cursor-pointer font-semibold"
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

                      <button
                        type="button"
                        onClick={() => setShowTranscript(!showTranscript)}
                        className={`px-3.5 py-2 border text-[10px] uppercase font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                          showTranscript ? 'bg-[#9C8465] text-white border-[#9C8465]' : 'bg-[#0E0E11]/90 text-zinc-300 border-[#222226] hover:border-zinc-500'
                        }`}
                      >
                        <FileText className="w-4 h-4" />
                        <span>TRANSCRIPT ({showTranscript ? 'HIDE' : 'SHOW'})</span>
                      </button>

                      <span className="text-[10px] text-zinc-400 uppercase hidden md:inline">
                        FORMAT: 35mm Master ({activeVideoTestimonial.videoDuration})
                      </span>
                    </div>

                    {onScheduleBriefing && (
                      <button
                        type="button"
                        onClick={() => {
                          setActiveVideoTestimonial(null);
                          onScheduleBriefing();
                        }}
                        className="px-5 py-2 bg-[#9C8465] hover:bg-[#B39977] text-white font-bold text-[10px] uppercase flex items-center gap-2 cursor-pointer"
                      >
                        <span>SCHEDULE BRIEFING</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Transcript / Narrative Drawer */}
                {showTranscript ? (
                  <div className="bg-[#050506] border border-[#9C8465] p-4 text-xs font-mono space-y-2 max-h-40 overflow-y-auto">
                    <span className="text-[10px] text-[#9C8465] uppercase block font-bold">
                      VERIFIED VERBATIM TRANSCRIPT (VERIFIED BY KPMG):
                    </span>
                    <ul className="space-y-1.5 text-zinc-300">
                      {activeVideoTestimonial.transcript.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="bg-[#050506] border border-[#222226] p-4 text-xs font-sans space-y-1">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase block font-semibold">
                      VERIFIED EXECUTIVE NARRATIVE SUMMARY:
                    </span>
                    <p className="text-zinc-200 italic">
                      "{activeVideoTestimonial.quote}"
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
