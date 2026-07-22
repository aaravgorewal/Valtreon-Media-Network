import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Film,
  Volume2,
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  Layers,
  ExternalLink,
  X,
  Award,
  Zap,
  Check,
  ChevronRight,
  Briefcase
} from 'lucide-react';

export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  category: 'co-production' | 'sponsorship' | 'advisory' | 'sonic';
  acvFloor: string;
  turnaround: string;
  icon: React.ReactNode;
  summary: string;
  deliverables: string[];
  audienceImpact: string;
  idealFor: string[];
  caseStudyTitle: string;
  caseStudyResult: string;
}

export const SERVICES_DATA: ServicePackage[] = [
  {
    id: 'narrative-underwriting',
    title: 'Narrative Underwriting & Editorial Dossiers',
    subtitle: 'Deep-Dive Research & High-Retention Essays',
    category: 'sponsorship',
    acvFloor: '$75,000 ACV',
    turnaround: '4–6 Weeks',
    icon: <FileText className="w-6 h-6 text-[#9C8465]" />,
    summary:
      'Co-sponsor long-form investigative research, architectural photography essays, and technical whitepapers read by high-net-worth industry principals and C-suite leaders.',
    deliverables: [
      '10,000+ Word Deep-Dive Research Dossier',
      'Custom 35mm Analog Photography Series',
      'Zero-Ad Dedicated Web Microsite & Archival PDF',
      'Guaranteed 80%+ Reader Completion Telemetry Audit',
    ],
    audienceImpact: '1.2M+ C-Suite & Founder Impressions',
    idealFor: [
      'High-End Swiss Horology & Atelier Brands',
      'Enterprise Infrastructure & AI Research Firms',
      'Architectural & Spatial Design Studios',
    ],
    caseStudyTitle: 'Aethelgard Horology Heritage Essay',
    caseStudyResult: '88.4% Read Completion, $1.4M Direct Inbound Inquiries',
  },
  {
    id: 'cinematic-co-production',
    title: 'Cinematic B2B Film & Commercial Co-Production',
    subtitle: 'Widescreen 35mm Anamorphic Direction',
    category: 'co-production',
    acvFloor: '$150,000 ACV',
    turnaround: '8–12 Weeks',
    icon: <Film className="w-6 h-6 text-[#9C8465]" />,
    summary:
      'Full-scale cinematic film production led by Cannes & Tribeca awarded directors. We combine analog 35mm anamorphic optics with spatial sound design to create culture-defining brand cinema.',
    deliverables: [
      '4K Anamorphic Master Brand Film (3-5 min)',
      '3x Tailored Digital Cutdowns (16:9 & 9:16)',
      'Perpetual Global Broadcast & Digital Rights',
      'Dolby Atmos Spatial Audio Master & Original Score',
    ],
    audienceImpact: '4.8M+ Global Luxury & Industrial Reach',
    idealFor: [
      'Luxury Automotive & Yacht Manufacturers',
      'Spatial Computing & Hardware Pioneers',
      'Global Wealth & Investment Institutions',
    ],
    caseStudyTitle: 'Vektor Spatial Computing Launch Film',
    caseStudyResult: '4.2M Organic Impressions, Cannes Corporate Media Gold Winner',
  },
  {
    id: 'sonic-architecture',
    title: 'Spatial Acoustic & Sonic Architecture',
    subtitle: 'Bespoke Audio Identity & Binaural Installations',
    category: 'sonic',
    acvFloor: '$95,000 ACV',
    turnaround: '6–8 Weeks',
    icon: <Volume2 className="w-6 h-6 text-[#9C8465]" />,
    summary:
      'Custom sonic brand signatures, physical gallery acoustic landscapes, and immersive binaural audio documentaries designed for high-end flagship environments.',
    deliverables: [
      'Dolby Atmos Spatial Sound Identity Suite',
      'Flagship Physical Exhibition Audio Profile',
      'Custom Generative Audio Ambient Loop Engine',
      'Limited Edition Audiophile Vinyl Pressing Rights',
    ],
    audienceImpact: '850K+ Acoustic Streamers & Physical Flagship Visitors',
    idealFor: [
      'High-Precision Audio & Equipment Atelier',
      'Flagship Retail & Contemporary Art Galleries',
      'Luxury Hotel & Resort Properties',
    ],
    caseStudyTitle: 'Chrono Logic Acoustic Resonance Experience',
    caseStudyResult: '120K Spatial Streams, 100% Flagship Soundscape Retention',
  },
  {
    id: 'executive-advisory',
    title: 'Executive Media Advisory & Anti-Noise Strategy',
    subtitle: 'Sovereign Brand Positioning & Media Hygiene',
    category: 'advisory',
    acvFloor: '$120,000 ACV',
    turnaround: 'Quarterly Retainer',
    icon: <Compass className="w-6 h-6 text-[#9C8465]" />,
    summary:
      'Direct strategic consultation with the VMN Editorial Board to audit media positioning, eliminate programmatic ad dependency, and execute direct B2B co-production alliances.',
    deliverables: [
      'Quarterly Digital Media Hygiene & Privacy Audit',
      'Proprietary Audience Attention & Retention Intelligence',
      'Direct Matchmaking with Signed VMN Directors',
      'Exclusive Access to VMN Private C-Suite Roundtables',
    ],
    audienceImpact: 'Sovereign Media Ownership & Uncontaminated Reputation',
    idealFor: [
      'Family Offices & Private Equity Firms',
      'Founders Navigating Brand Tier Transitions',
      'Established Luxury Brands Rejecting Social Ad Noise',
    ],
    caseStudyTitle: 'Oberon Research Brand Transition',
    caseStudyResult: '100% Elimination of Programmatic Spend, +34% ACV Deal Sizes',
  },
];

interface ServicesSectionProps {
  onScheduleBriefing: () => void;
  reducedMotion?: boolean;
}

export default function ServicesSection({
  onScheduleBriefing,
  reducedMotion = false,
}: ServicesSectionProps) {
  // Category Filter State
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'co-production' | 'sponsorship' | 'advisory' | 'sonic'
  >('all');

  // Modal Detailed View State
  const [activeModalPackage, setActiveModalPackage] = useState<ServicePackage | null>(null);

  // Comparison Matrix Toggle
  const [showMatrix, setShowMatrix] = useState<boolean>(false);

  // Filtered Services List
  const filteredServices = SERVICES_DATA.filter(
    (s) => activeCategory === 'all' || s.category === activeCategory
  );

  return (
    <section
      id="services-horizon"
      aria-labelledby="services-display-heading"
      className="py-20 md:py-28 bg-[#0B0B0D] border-b border-[#222226] text-zinc-100 relative overflow-hidden"
    >
      {/* Background Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full bg-[radial-gradient(#9C8465_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* 1. SECTION HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-[#222226] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[#9C8465]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>[ CHAPTER_03 // BESPOKE_CAPABILITIES_ECOSYSTEM ]</span>
            </div>

            <h2
              id="services-display-heading"
              className="font-sans font-medium text-3xl md:text-4xl text-zinc-100 tracking-tight"
            >
              Tailored Co-Production & Brand Alignment
            </h2>

            <p className="font-sans text-xs md:text-sm text-zinc-400 max-w-2xl leading-relaxed">
              VMN bypasses generic ad network matching. We manage full creative lifecycle development inside our dedicated production houses, guaranteeing zero visual contamination and $75K+ contract floor standards.
            </p>
          </div>

          {/* ACTION BUTTONS & CATEGORY TAB TOGGLES */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <button
              onClick={() => setShowMatrix((prev) => !prev)}
              className="px-4 py-2.5 bg-[#111113] hover:bg-[#1A1A1E] border border-[#222226] hover:border-[#9C8465] text-zinc-300 hover:text-white flex items-center gap-2 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
              aria-expanded={showMatrix}
              aria-controls="services-comparison-matrix"
            >
              <Layers className="w-3.5 h-3.5 text-[#9C8465]" />
              <span className="text-[11px] uppercase">
                {showMatrix ? 'HIDE COMPARISON MATRIX' : 'VIEW SERVICE MATRIX'}
              </span>
            </button>

            <button
              onClick={onScheduleBriefing}
              className="px-5 py-2.5 bg-[#9C8465] hover:bg-[#B39977] text-white font-semibold flex items-center gap-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080809]"
            >
              <span className="text-[11px] uppercase">[ SCHEDULE BRIEFING ]</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2. CATEGORY TABS */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs border-b border-[#222226] pb-4">
          <span className="text-zinc-500 text-[10px] uppercase mr-2 flex items-center gap-1">
            FILTER CAPABILITIES:
          </span>
          {[
            { id: 'all', label: 'ALL SERVICES (4)' },
            { id: 'co-production', label: 'CO-PRODUCTION' },
            { id: 'sponsorship', label: 'EDITORIAL SPONSORSHIP' },
            { id: 'sonic', label: 'SONIC ARCHITECTURE' },
            { id: 'advisory', label: 'EXECUTIVE ADVISORY' },
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

        {/* 3. PREMIUM CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-cards-grid">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: reducedMotion ? 0 : idx * 0.1 }}
              className="group bg-[#111113] border border-[#222226] hover:border-[#9C8465] p-6 flex flex-col justify-between space-y-6 relative transition-all duration-300 hover:shadow-2xl hover:shadow-[#9C8465]/10"
            >
              {/* Subtle Gold Header Bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9C8465]/40 group-hover:via-[#9C8465] to-transparent transition-all" />

              <div className="space-y-4">
                {/* Package Category & ACV Tag */}
                <div className="flex justify-between items-center font-mono text-[10px]">
                  <span className="text-[#9C8465] font-semibold uppercase flex items-center gap-1.5">
                    {service.icon}
                    <span>[{service.category.toUpperCase()}]</span>
                  </span>

                  <span className="bg-[#080809] border border-[#222226] text-zinc-300 px-2 py-0.5 font-semibold">
                    {service.acvFloor}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="font-sans font-medium text-xl text-zinc-100 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400">{service.subtitle}</p>
                </div>

                {/* Summary */}
                <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                  {service.summary}
                </p>

                {/* Deliverables Checklist */}
                <div className="border-t border-[#222226] pt-4 space-y-2">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">
                    KEY DELIVERABLES & GUARANTEES:
                  </span>
                  <ul className="space-y-1.5 text-xs font-sans text-zinc-300">
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Impact & Trigger Button */}
              <div className="border-t border-[#222226] pt-4 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                  <Clock className="w-3 h-3 text-[#9C8465]" />
                  <span>TURNAROUND: {service.turnaround}</span>
                </div>

                <button
                  onClick={() => setActiveModalPackage(service)}
                  className="bg-[#1A1A1E] hover:bg-[#9C8465] text-zinc-200 hover:text-white border border-[#222226] hover:border-[#9C8465] px-3 py-1.5 text-[10px] uppercase font-semibold transition-all flex items-center gap-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                  aria-label={`Inspect ${service.title} Dossier`}
                >
                  <span>INSPECT DOSSIER</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. EXPANDABLE COMPARISON MATRIX */}
        <AnimatePresence>
          {showMatrix && (
            <motion.div
              id="services-comparison-matrix"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111113] border border-[#222226] p-6 space-y-6 font-mono text-xs overflow-x-auto"
            >
              <div className="flex justify-between items-center border-b border-[#222226] pb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#9C8465]" />
                  <span className="text-zinc-100 font-semibold uppercase text-sm">
                    SERVICE CAPABILITIES COMPARISON MATRIX
                  </span>
                </div>
                <span className="text-[10px] text-zinc-500 uppercase">
                  UNCONTAMINATED B2B CONTRACT TIERING
                </span>
              </div>

              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-[#222226] text-[10px] text-zinc-500 uppercase">
                    <th className="py-3 px-2">Service Package</th>
                    <th className="py-3 px-2">ACV Contract Floor</th>
                    <th className="py-3 px-2">Turnaround</th>
                    <th className="py-3 px-2">Audience Impact</th>
                    <th className="py-3 px-2 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222226] text-zinc-300">
                  {SERVICES_DATA.map((s) => (
                    <tr key={s.id} className="hover:bg-[#1A1A1E] transition-colors">
                      <td className="py-3 px-2 font-semibold text-zinc-100">{s.title}</td>
                      <td className="py-3 px-2 text-[#9C8465] font-bold">{s.acvFloor}</td>
                      <td className="py-3 px-2 text-zinc-400">{s.turnaround}</td>
                      <td className="py-3 px-2 text-zinc-300">{s.audienceImpact}</td>
                      <td className="py-3 px-2 text-right">
                        <button
                          onClick={() => {
                            setShowMatrix(false);
                            setActiveModalPackage(s);
                          }}
                          className="text-[#9C8465] hover:underline text-[10px] uppercase font-semibold"
                        >
                          [VIEW DOSSIER]
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 5. INTERACTIVE SERVICE DOSSIER MODAL */}
        <AnimatePresence>
          {activeModalPackage && (
            <div
              className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setActiveModalPackage(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-service-title"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#111113] border border-[#9C8465] w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 relative text-zinc-100 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalPackage(null)}
                  className="absolute top-4 right-4 p-2 bg-[#1A1A1E] text-zinc-400 hover:text-white border border-[#222226] hover:border-[#9C8465] transition-colors cursor-pointer"
                  aria-label="Close Dossier Modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Header */}
                <div className="space-y-2 border-b border-[#222226] pb-4 pr-8">
                  <span className="font-mono text-[10px] text-[#9C8465] uppercase font-semibold tracking-widest block">
                    // SERVICE SPECIFICATION DOSSIER
                  </span>
                  <h3 id="modal-service-title" className="font-sans text-2xl font-medium text-white">
                    {activeModalPackage.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400">{activeModalPackage.subtitle}</p>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                  <div className="bg-[#080809] border border-[#222226] p-3 space-y-1">
                    <span className="text-[9px] text-zinc-500 uppercase block">CONTRACT FLOOR</span>
                    <span className="text-sm font-bold text-[#9C8465]">{activeModalPackage.acvFloor}</span>
                  </div>
                  <div className="bg-[#080809] border border-[#222226] p-3 space-y-1">
                    <span className="text-[9px] text-zinc-500 uppercase block">EST. TURNAROUND</span>
                    <span className="text-sm font-bold text-zinc-100">{activeModalPackage.turnaround}</span>
                  </div>
                  <div className="bg-[#080809] border border-[#222226] p-3 space-y-1 col-span-2 sm:col-span-1">
                    <span className="text-[9px] text-zinc-500 uppercase block">AUDIENCE GUARANTEE</span>
                    <span className="text-xs font-semibold text-emerald-400 truncate block">
                      {activeModalPackage.audienceImpact}
                    </span>
                  </div>
                </div>

                {/* Full Overview */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block">
                    SCOPE & CREATIVE DIRECTION:
                  </span>
                  <p className="font-sans text-xs md:text-sm text-zinc-300 leading-relaxed">
                    {activeModalPackage.summary}
                  </p>
                </div>

                {/* Full Deliverables List */}
                <div className="space-y-2 border-t border-[#222226] pt-4">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block">
                    FULL DELIVERABLES & INTELLECTUAL PROPERTY RIGHTS:
                  </span>
                  <ul className="grid grid-cols-1 gap-2 text-xs font-sans text-zinc-200">
                    {activeModalPackage.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-[#080809] p-2.5 border border-[#222226]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study Highlight */}
                <div className="bg-[#1A1A1E] border border-[#222226] p-4 space-y-2 font-mono text-xs">
                  <span className="text-[#9C8465] text-[10px] uppercase font-semibold block flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> AUDITED CASE STUDY HIGHLIGHT:
                  </span>
                  <span className="font-sans font-semibold text-zinc-100 block">
                    {activeModalPackage.caseStudyTitle}
                  </span>
                  <span className="text-emerald-400 text-[11px] block">
                    Result: {activeModalPackage.caseStudyResult}
                  </span>
                </div>

                {/* Modal CTA Trigger */}
                <div className="border-t border-[#222226] pt-4 flex justify-end gap-3 font-mono text-xs">
                  <button
                    onClick={() => setActiveModalPackage(null)}
                    className="px-4 py-2.5 bg-[#1A1A1E] border border-[#222226] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    CLOSE
                  </button>
                  <button
                    onClick={() => {
                      setActiveModalPackage(null);
                      onScheduleBriefing();
                    }}
                    className="px-5 py-2.5 bg-[#9C8465] hover:bg-[#B39977] text-white font-semibold flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>SCHEDULE THIS SERVICE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* 6. GUARANTEE FOOTER BANNER */}
        <div className="bg-[#111113] border border-[#222226] p-5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#9C8465] shrink-0" />
            <span className="text-zinc-300 text-[11px]">
              ALL VMN CO-PRODUCTIONS OPERATE UNDER STRICT DIGITAL HYGIENE DIRECTIVES: ZERO AD NETWORKS, ZERO COOKIE TRACKING, 100% DIRECT CONTRACT SOVEREIGNTY.
            </span>
          </div>

          <button
            onClick={onScheduleBriefing}
            className="text-[#9C8465] hover:underline font-semibold shrink-0 uppercase text-[11px] flex items-center gap-1"
          >
            <span>DISCUSS CUSTOM DIRECTIVE</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
}
