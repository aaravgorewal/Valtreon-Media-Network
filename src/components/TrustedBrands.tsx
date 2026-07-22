import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Pause,
  Play,
  Grid,
  Sparkles,
  ExternalLink,
  Award,
  Layers,
  CheckCircle2
} from 'lucide-react';

export interface TrustedBrand {
  id: string;
  name: string;
  category: string;
  acvTier: string;
  partnershipYear: string;
  website: string;
  logoSvg: React.ReactNode;
}

export const TRUSTED_BRANDS: TrustedBrand[] = [
  {
    id: 'aethelgard',
    name: 'Aethelgard Geneve',
    category: 'Swiss Horology',
    acvTier: '$180K ACV',
    partnershipYear: '2024',
    website: 'https://example.com/aethelgard',
    logoSvg: (
      <svg className="w-auto h-7 text-zinc-300 group-hover:text-[#9C8465] transition-colors" viewBox="0 0 160 40" fill="currentColor" aria-hidden="true">
        <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20 10 L20 20 L27 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="44" y="25" fontFamily="sans-serif" fontWeight="700" fontSize="14" letterSpacing="2">AETHELGARD</text>
      </svg>
    ),
  },
  {
    id: 'vektor',
    name: 'Vektor Systems',
    category: 'Spatial Computing',
    acvTier: '$220K ACV',
    partnershipYear: '2025',
    website: 'https://example.com/vektor',
    logoSvg: (
      <svg className="w-auto h-7 text-zinc-300 group-hover:text-[#9C8465] transition-colors" viewBox="0 0 160 40" fill="currentColor" aria-hidden="true">
        <polygon points="12,30 22,10 32,30 22,24" fill="currentColor" />
        <text x="40" y="25" fontFamily="sans-serif" fontWeight="700" fontSize="14" letterSpacing="2">VEKTOR</text>
      </svg>
    ),
  },
  {
    id: 'chrono-logic',
    name: 'Chrono Logic',
    category: 'High-Precision Audio',
    acvTier: '$125K ACV',
    partnershipYear: '2023',
    website: 'https://example.com/chronologic',
    logoSvg: (
      <svg className="w-auto h-7 text-zinc-300 group-hover:text-[#9C8465] transition-colors" viewBox="0 0 160 40" fill="currentColor" aria-hidden="true">
        <rect x="10" y="12" width="6" height="16" rx="1" />
        <rect x="19" y="8" width="6" height="24" rx="1" />
        <rect x="28" y="15" width="6" height="10" rx="1" />
        <text x="42" y="25" fontFamily="sans-serif" fontWeight="700" fontSize="13" letterSpacing="1.5">CHRONO_LOGIC</text>
      </svg>
    ),
  },
  {
    id: 'lumina',
    name: 'Lumina Spatial',
    category: 'Architecture & Lighting',
    acvTier: '$150K ACV',
    partnershipYear: '2024',
    website: 'https://example.com/lumina',
    logoSvg: (
      <svg className="w-auto h-7 text-zinc-300 group-hover:text-[#9C8465] transition-colors" viewBox="0 0 160 40" fill="currentColor" aria-hidden="true">
        <path d="M10 20 L25 10 L25 30 Z" />
        <circle cx="30" cy="20" r="3" />
        <text x="40" y="25" fontFamily="sans-serif" fontWeight="700" fontSize="14" letterSpacing="2">LUMINA</text>
      </svg>
    ),
  },
  {
    id: 'nexus-dynamics',
    name: 'Nexus Dynamics',
    category: 'Enterprise AI Infrastructure',
    acvTier: '$310K ACV',
    partnershipYear: '2025',
    website: 'https://example.com/nexus',
    logoSvg: (
      <svg className="w-auto h-7 text-zinc-300 group-hover:text-[#9C8465] transition-colors" viewBox="0 0 170 40" fill="currentColor" aria-hidden="true">
        <path d="M10 10 H22 V22 H10 Z M18 18 H30 V30 H18 Z" fillOpacity="0.8" />
        <text x="38" y="25" fontFamily="sans-serif" fontWeight="700" fontSize="13" letterSpacing="1.5">NEXUS_DYN</text>
      </svg>
    ),
  },
  {
    id: 'apex-horology',
    name: 'Apex Atelier',
    category: 'Bespoke Luxury Goods',
    acvTier: '$95K ACV',
    partnershipYear: '2024',
    website: 'https://example.com/apex',
    logoSvg: (
      <svg className="w-auto h-7 text-zinc-300 group-hover:text-[#9C8465] transition-colors" viewBox="0 0 160 40" fill="currentColor" aria-hidden="true">
        <path d="M20 8 L32 30 H8 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <text x="40" y="25" fontFamily="sans-serif" fontWeight="700" fontSize="14" letterSpacing="2">APEX</text>
      </svg>
    ),
  },
  {
    id: 'solstice',
    name: 'Solstice Media',
    category: 'Investigative Publishing',
    acvTier: '$140K ACV',
    partnershipYear: '2023',
    website: 'https://example.com/solstice',
    logoSvg: (
      <svg className="w-auto h-7 text-zinc-300 group-hover:text-[#9C8465] transition-colors" viewBox="0 0 160 40" fill="currentColor" aria-hidden="true">
        <circle cx="20" cy="20" r="10" fill="currentColor" />
        <line x1="20" y1="5" x2="20" y2="35" stroke="currentColor" strokeWidth="2" />
        <text x="38" y="25" fontFamily="sans-serif" fontWeight="700" fontSize="13" letterSpacing="1.5">SOLSTICE</text>
      </svg>
    ),
  },
  {
    id: 'oberon',
    name: 'Oberon Research',
    category: 'Biotech & Materials',
    acvTier: '$200K ACV',
    partnershipYear: '2025',
    website: 'https://example.com/oberon',
    logoSvg: (
      <svg className="w-auto h-7 text-zinc-300 group-hover:text-[#9C8465] transition-colors" viewBox="0 0 160 40" fill="currentColor" aria-hidden="true">
        <circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="20" cy="20" r="4" fill="currentColor" />
        <text x="38" y="25" fontFamily="sans-serif" fontWeight="700" fontSize="14" letterSpacing="2">OBERON</text>
      </svg>
    ),
  },
];

interface TrustedBrandsProps {
  reducedMotion?: boolean;
}

export default function TrustedBrands({ reducedMotion = false }: TrustedBrandsProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(!reducedMotion);
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee');
  const [hoveredBrand, setHoveredBrand] = useState<TrustedBrand | null>(null);

  // Marquee track container ref
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="trusted-brands-horizon"
      aria-labelledby="trusted-brands-heading"
      className="py-16 md:py-24 bg-[#080809] border-b border-[#222226] text-zinc-100 overflow-hidden relative"
    >
      {/* Background Accent Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full bg-[radial-gradient(#9C8465_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 space-y-8 relative z-10">
        
        {/* SECTION HEADER & CONTROL BAR */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#222226] pb-6">
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest block font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              [ CHAPTER_01.5 // SPONSORSHIP_CO_PRODUCTION_ALLIANCES ]
            </span>
            <h2 id="trusted-brands-heading" className="font-sans text-2xl md:text-3xl font-medium text-zinc-100">
              Trusted by Discerning Global Enterprises
            </h2>
            <p className="font-sans text-xs text-zinc-400 max-w-xl">
              Zero intrusive ad networks. Valtreon connects signed directorial co-productions with audited $75K+ ACV brand partners across luxury horology, spatial computing, and research.
            </p>
          </div>

          {/* CONTROLS: PAUSE/PLAY & VIEW TOGGLE */}
          <div className="flex items-center gap-3 font-mono text-xs">
            {/* Play/Pause Toggle for Marquee */}
            {viewMode === 'marquee' && !reducedMotion && (
              <button
                onClick={() => setIsPlaying((prev) => !prev)}
                className="px-3 py-1.5 bg-[#111113] hover:bg-[#1A1A1E] border border-[#222226] text-zinc-300 hover:text-white flex items-center gap-2 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                aria-label={isPlaying ? 'Pause marquee animation' : 'Start marquee animation'}
                title={isPlaying ? 'Pause Marquee (WCAG 2.2)' : 'Play Marquee'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#9C8465]" />
                    <span className="text-[10px]">PAUSE MARQUEE</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[10px]">PLAY MARQUEE</span>
                  </>
                )}
              </button>
            )}

            {/* Layout Mode Switcher */}
            <div className="flex border border-[#222226] bg-[#111113] p-0.5">
              <button
                onClick={() => setViewMode('marquee')}
                className={`px-3 py-1 text-[10px] uppercase transition-colors cursor-pointer ${
                  viewMode === 'marquee' ? 'bg-[#9C8465] text-white font-semibold' : 'text-zinc-500 hover:text-zinc-300'
                }`}
                aria-label="Switch to Marquee view"
              >
                MARQUEE STREAM
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 text-[10px] uppercase transition-colors cursor-pointer flex items-center gap-1 ${
                  viewMode === 'grid' ? 'bg-[#9C8465] text-white font-semibold' : 'text-zinc-500 hover:text-zinc-300'
                }`}
                aria-label="Switch to Grid view"
              >
                <Grid className="w-3 h-3" />
                GRID
              </button>
            </div>
          </div>
        </div>

        {/* ACTIVE BRAND HOVER DOSSIER PREVIEW BAR */}
        <div className="min-h-[38px] bg-[#111113] border border-[#222226] px-4 py-2 flex items-center justify-between font-mono text-xs transition-colors">
          {hoveredBrand ? (
            <div className="flex flex-wrap items-center gap-4 text-zinc-200">
              <span className="text-[#9C8465] font-semibold uppercase flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                {hoveredBrand.name}
              </span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-400">{hoveredBrand.category}</span>
              <span className="text-zinc-600">//</span>
              <span className="text-emerald-400 font-semibold">{hoveredBrand.acvTier}</span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-500">PARTNER SINCE {hoveredBrand.partnershipYear}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C8465]" />
              <span>HOVER OR FOCUS ANY BRAND LOGO TO INSPECT CO-PRODUCTION ACV AUDIT TERMS</span>
            </div>
          )}

          <div className="hidden sm:flex items-center gap-2 text-[10px] text-zinc-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#9C8465]" />
            <span>8 VERIFIED ALLIANCES</span>
          </div>
        </div>

        {/* 1. MARQUEE STREAM VIEW MODE */}
        {viewMode === 'marquee' && !reducedMotion ? (
          <div
            className="relative w-full overflow-hidden border-y border-[#222226] py-6 bg-[#0B0B0D]"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {/* Left & Right Gradient Mask Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#080809] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#080809] to-transparent z-20 pointer-events-none" />

            <div
              ref={marqueeRef}
              className={`flex items-center gap-12 w-max ${
                isPlaying ? 'animate-marquee' : ''
              }`}
              style={{
                animationPlayState: isPlaying ? 'running' : 'paused',
              }}
            >
              {/* ORIGINAL SET (Accessible to keyboard & screen readers) */}
              {TRUSTED_BRANDS.map((brand) => (
                <a
                  key={brand.id}
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredBrand(brand)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  onFocus={() => setHoveredBrand(brand)}
                  onBlur={() => setHoveredBrand(null)}
                  className="group relative flex items-center justify-center p-4 min-w-[180px] bg-[#111113] hover:bg-[#1A1A1E] border border-[#222226] hover:border-[#9C8465] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                  aria-label={`${brand.name} - ${brand.category}, ${brand.acvTier}`}
                >
                  {brand.logoSvg}
                  <span className="sr-only">{brand.name}</span>
                </a>
              ))}

              {/* DUPLICATE SET FOR SEAMLESS INFINITE LOOP (aria-hidden=true for screen readers) */}
              {TRUSTED_BRANDS.map((brand) => (
                <div
                  key={`dup1-${brand.id}`}
                  aria-hidden="true"
                  onMouseEnter={() => setHoveredBrand(brand)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  className="group relative flex items-center justify-center p-4 min-w-[180px] bg-[#111113] hover:bg-[#1A1A1E] border border-[#222226] hover:border-[#9C8465] transition-all cursor-pointer"
                >
                  {brand.logoSvg}
                </div>
              ))}

              {/* SECOND DUPLICATE SET FOR ULTRA-WIDE DISPLAYS */}
              {TRUSTED_BRANDS.map((brand) => (
                <div
                  key={`dup2-${brand.id}`}
                  aria-hidden="true"
                  onMouseEnter={() => setHoveredBrand(brand)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  className="group relative flex items-center justify-center p-4 min-w-[180px] bg-[#111113] hover:bg-[#1A1A1E] border border-[#222226] hover:border-[#9C8465] transition-all cursor-pointer"
                >
                  {brand.logoSvg}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* 2. RESPONSIVE GRID VIEW MODE (OR REDUCED MOTION FALLBACK) */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {TRUSTED_BRANDS.map((brand) => (
              <a
                key={brand.id}
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredBrand(brand)}
                onMouseLeave={() => setHoveredBrand(null)}
                onFocus={() => setHoveredBrand(brand)}
                onBlur={() => setHoveredBrand(null)}
                className="group p-5 bg-[#111113] hover:bg-[#1A1A1E] border border-[#222226] hover:border-[#9C8465] transition-all flex flex-col justify-between space-y-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase">{brand.partnershipYear}</span>
                  <span className="font-mono text-[9px] text-[#9C8465] bg-[#1A1A1E] px-1.5 py-0.5 border border-[#222226]">
                    {brand.acvTier}
                  </span>
                </div>

                <div className="py-2 flex items-center justify-center">
                  {brand.logoSvg}
                </div>

                <div className="border-t border-[#222226] pt-2 flex justify-between items-center font-mono text-[10px] text-zinc-400">
                  <span className="truncate">{brand.category}</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-[#9C8465] transition-colors shrink-0" />
                </div>
              </a>
            ))}
          </div>
        )}

        {/* FOOTER METRIC BANNER */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-zinc-500 border-t border-[#222226] pt-4">
          <div className="flex items-center gap-6">
            <span>TOTAL CAPITAL UNDERWRITE: <strong className="text-zinc-200">$3.85M USD</strong></span>
            <span className="hidden md:inline">//</span>
            <span className="hidden md:inline">RETENTION FLOOR: <strong className="text-zinc-200">84.6% READ COMPLETION</strong></span>
          </div>
          <span className="text-[10px] text-zinc-600">ALL BRAND LOGOS VERIFIED VIA VMN AUDIT DIRECTIVE</span>
        </div>
      </div>

      {/* Inline Keyframe CSS for smooth Infinite Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
