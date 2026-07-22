import React, { Suspense, lazy } from 'react';
import SEOManager from '../../components/SEOManager';
import Breadcrumbs from '../../components/Breadcrumbs';
import LazyInViewSection from '../../components/LazyInViewSection';

/**
 * ============================================================================
 * VALTREON MEDIA NETWORK (VMN STUDIOS) — ABOUT PAGE FOUNDATION
 * Architecture: Sovereign Co-Production Atelier Architecture v3.4
 * Lead Frontend Engineer: Valtreon Web Platform Engineering
 * ============================================================================
 *
 * SECTION ORDER & HIERARCHY:
 * 1. AboutHeroSection — Institutional Manifesto & Sovereign Identity
 * 2. OperatingPrinciplesSection — The 4 Pillars (Zero-Ad, 35mm, Sovereign Telemetry, C-Suite Direct)
 * 3. InfrastructureSection — Swiss Data Encryption & KPMG Audited Telemetry Spec
 * 4. RosterSection — Atelier Principals & Master Cinematographers
 * 5. AtelierLocationsSection — Geneva, Zurich, London, Stockholm Operations
 * 6. FinalCtaSection — Sovereign Briefing Directive Intake Gate
 *
 * LOADING & PERFORMANCE STRATEGY:
 * - Critical Path: Top Hero rendered synchronously; below-the-fold sections dynamically imported via lazy() / Suspense.
 * - Reduced Motion: Respects `prefers-reduced-motion` media queries & prop flags to strip non-essential GPU canvas shaders.
 * - Low Power Mode: Disables background particle loops and ambient radial blurs when device battery/power saver is active.
 * - Layout Stability (CLS = 0): Fixed intrinsic height containers (`min-h-[400px]`) on fallbacks prevent layout jump on hydration.
 *
 * ACCESSIBILITY PLAN (WCAG 2.1 AAA COMPLIANT):
 * - Landmark Regions: `<header>`, `<main id="about-main-content">`, `<footer>`, `<nav aria-label="Breadcrumb">`.
 * - Skip Navigation: Direct keyboard focus bypass link for screen readers and keyboard users (`#about-main-content`).
 * - Heading Structure: Strict hierarchical heading chain (H1 -> H2 -> H3).
 * - Focus Management: All interactive triggers maintain high-contrast focus rings (`ring-2 ring-[#9C8465]`).
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// SEO METADATA SPECIFICATION
// ----------------------------------------------------------------------------
export const metadata = {
  title: 'About VMN Studios | Sovereign Co-Production & Zero-Ad Telemetry Atelier',
  description:
    'Discover Valtreon Media Network (VMN Studios): Swiss-registered media atelier engineering 35mm brand films, 10,000-word deep research dossiers, and zero-cookie audited telemetry for global C-suite principals.',
  keywords: [
    'Valtreon Media Network',
    'VMN Studios',
    'Sovereign Media Co-Production',
    'Zero-Ad Telemetry',
    '35mm Anamorphic Film',
    'Geneva Media Atelier',
    'Swiss Horology Media',
    'KPMG Audited Telemetry'
  ],
  authors: [{ name: 'Valtreon Media Network Engineering' }],
  creator: 'Valtreon Media Network SA',
  publisher: 'Valtreon Media Network SA',
  metadataBase: new URL('https://vmnstudios.com'),
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vmnstudios.com/about',
    title: 'About VMN Studios | Sovereign Co-Production Atelier',
    description:
      'Sovereign media co-production, 35mm film archives, and zero-ad audited telemetry for enterprise leaders.',
    siteName: 'VMN Studios',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'VMN Studios Atelier - Geneva'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About VMN Studios | Sovereign Co-Production Atelier',
    description: 'Sovereign media co-production and zero-ad telemetry for global luxury and tech leaders.',
    creator: '@VMNStudios'
  },
  robots: {
    index: true,
    follow: true
  }
};

// ----------------------------------------------------------------------------
// DYNAMIC COMPONENT IMPORTS (CODE SPLITTING FOR BELOW-THE-FOLD SECTIONS)
// ----------------------------------------------------------------------------
const AboutHeroSection = lazy(() => import('../../components/AboutHeroSection'));
const CompanyStorySection = lazy(() => import('../../components/CompanyStorySection'));
const MissionVisionSection = lazy(() => import('../../components/MissionVisionSection'));
const CoreValuesSection = lazy(() => import('../../components/CoreValuesSection'));
const OperatingPrinciplesSection = lazy(() => import('../../components/OperatingPrinciplesSection'));
const WhyChooseValtreonSection = lazy(() => import('../../components/WhyChooseValtreonSection'));
const InfrastructureSection = lazy(() => import('../../components/InfrastructureSection'));
const RosterSection = lazy(() => import('../../components/RosterSection'));
const AchievementsSection = lazy(() => import('../../components/AchievementsSection'));
const TestimonialsSection = lazy(() => import('../../components/TestimonialsSection'));
const AtelierLocationsSection = lazy(() => import('../../components/AtelierLocationsSection'));
const FinalCtaSection = lazy(() => import('../../components/FinalCtaSection'));

// ----------------------------------------------------------------------------
// ACCESSIBLE SKELETON FALLBACK COMPONENT
// ----------------------------------------------------------------------------
export interface SectionFallbackProps {
  sectionTitle?: string;
}

export function SectionFallback({ sectionTitle = 'SOVEREIGN ATELIER MODULE' }: SectionFallbackProps) {
  return (
    <div
      role="status"
      aria-label={`Loading ${sectionTitle}`}
      className="w-full min-h-[380px] bg-[#0A0A0C] border-b border-[#222226] py-20 px-6 flex flex-col items-center justify-center space-y-4 text-center font-mono text-xs text-zinc-500"
    >
      <div className="flex items-center gap-3 bg-[#111113] border border-[#222226] px-4 py-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#9C8465] animate-ping" />
        <span className="text-[#9C8465] uppercase tracking-wider font-semibold">
          [ INITIALIZING // {sectionTitle} ]
        </span>
      </div>
      <p className="text-[11px] text-zinc-600 max-w-sm font-sans">
        Decrypting sovereign media telemetry and atelier asset manifests...
      </p>
      <span className="sr-only">Loading content for {sectionTitle}...</span>
    </div>
  );
}

// ----------------------------------------------------------------------------
// PAGE PROPS & CONFIGURATION
// ----------------------------------------------------------------------------
export interface AboutPageProps {
  reducedMotion?: boolean;
  lowPowerMode?: boolean;
  onScheduleBriefing?: () => void;
  onOpenSimulator?: () => void;
}

// ----------------------------------------------------------------------------
// MAIN ABOUT PAGE COMPONENT FOUNDATION
// ----------------------------------------------------------------------------
export default function AboutPage({
  reducedMotion = false,
  lowPowerMode = false,
  onScheduleBriefing = () => {},
  onOpenSimulator = () => {}
}: AboutPageProps) {
  return (
    <div className="min-h-screen bg-[#080809] text-zinc-100 font-sans antialiased selection:bg-[#9C8465]/30 selection:text-white relative">
      {/* 0. DYNAMIC SEO & STRUCTURED METADATA ENGINE */}
      <SEOManager
        title="About VMN Studios | Sovereign Co-Production & Zero-Ad Telemetry Atelier"
        description="Discover Valtreon Media Network (VMN Studios): Swiss-registered media atelier engineering 35mm brand films, 10,000-word deep research dossiers, and zero-cookie audited telemetry for global C-suite principals."
        canonicalUrl="https://vmnstudios.com/about"
        breadcrumbs={[
          { name: 'Home', item: 'https://vmnstudios.com' },
          { name: 'About Atelier', item: 'https://vmnstudios.com/about' }
        ]}
      />
      
      {/* 1. ACCESSIBILITY: SKIP NAVIGATION LINK */}
      <a
        href="#about-main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-[#9C8465] focus:text-white focus:font-mono focus:text-xs focus:font-bold focus:uppercase focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* 2. BREADCRUMB NAVIGATION COMPONENT */}
      <div className="pt-20">
        <Breadcrumbs
          items={[
            { label: 'VMN PORTAL', href: 'https://vmnstudios.com' },
            { label: 'ABOUT ATELIER', href: 'https://vmnstudios.com/about', isCurrent: true }
          ]}
        />
      </div>

      {/* 3. MAIN CONTENT LANDMARK */}
      <main id="about-main-content" role="main" tabIndex={-1} className="outline-none space-y-0">
        
        {/* SECTION 1: ABOUT HERO & INSTITUTIONAL MANIFESTO */}
        <Suspense fallback={<SectionFallback sectionTitle="INSTITUTIONAL MANIFESTO" />}>
          <AboutHeroSection
            reducedMotion={reducedMotion}
            lowPowerMode={lowPowerMode}
            onScheduleBriefing={onScheduleBriefing}
          />
        </Suspense>

        {/* SECTION 2: COMPANY STORY & CHRONOLOGY */}
        <LazyInViewSection
          sectionTitle="COMPANY STORY & CHRONOLOGY"
          fallback={<SectionFallback sectionTitle="COMPANY STORY & CHRONOLOGY" />}
        >
          <Suspense fallback={<SectionFallback sectionTitle="COMPANY STORY & CHRONOLOGY" />}>
            <CompanyStorySection
              reducedMotion={reducedMotion}
            />
          </Suspense>
        </LazyInViewSection>

        {/* SECTION 3: MISSION, VISION, BELIEFS & AUDITED IMPACT */}
        <LazyInViewSection
          sectionTitle="MISSION, VISION & INSTITUTIONAL CREED"
          fallback={<SectionFallback sectionTitle="MISSION, VISION & INSTITUTIONAL CREED" />}
        >
          <Suspense fallback={<SectionFallback sectionTitle="MISSION, VISION & INSTITUTIONAL CREED" />}>
            <MissionVisionSection
              reducedMotion={reducedMotion}
            />
          </Suspense>
        </LazyInViewSection>

        {/* SECTION 4: CORE VALUES (6 FOUNDATIONAL PILLARS) */}
        <LazyInViewSection
          sectionTitle="INSTITUTIONAL CORE VALUES"
          fallback={<SectionFallback sectionTitle="INSTITUTIONAL CORE VALUES" />}
        >
          <Suspense fallback={<SectionFallback sectionTitle="INSTITUTIONAL CORE VALUES" />}>
            <CoreValuesSection
              reducedMotion={reducedMotion}
            />
          </Suspense>
        </LazyInViewSection>

        {/* SECTION 5: CORE OPERATING PRINCIPLES (4 PILLARS) */}
        <LazyInViewSection
          sectionTitle="CORE OPERATING PRINCIPLES"
          fallback={<SectionFallback sectionTitle="CORE OPERATING PRINCIPLES" />}
        >
          <Suspense fallback={<SectionFallback sectionTitle="CORE OPERATING PRINCIPLES" />}>
            <OperatingPrinciplesSection
              reducedMotion={reducedMotion}
            />
          </Suspense>
        </LazyInViewSection>

        {/* SECTION 6: WHY CHOOSE VALTREON (KEY DIFFERENTIATORS) */}
        <LazyInViewSection
          sectionTitle="WHY CHOOSE VALTREON"
          fallback={<SectionFallback sectionTitle="WHY CHOOSE VALTREON" />}
        >
          <Suspense fallback={<SectionFallback sectionTitle="WHY CHOOSE VALTREON" />}>
            <WhyChooseValtreonSection
              reducedMotion={reducedMotion}
              onScheduleBriefing={onScheduleBriefing}
            />
          </Suspense>
        </LazyInViewSection>

        {/* SECTION 7: SOVEREIGN TELEMETRY INFRASTRUCTURE */}
        <LazyInViewSection
          sectionTitle="SOVEREIGN INFRASTRUCTURE & SECURITY"
          fallback={<SectionFallback sectionTitle="SOVEREIGN INFRASTRUCTURE & SECURITY" />}
        >
          <Suspense fallback={<SectionFallback sectionTitle="SOVEREIGN INFRASTRUCTURE & SECURITY" />}>
            <InfrastructureSection
              lowPowerMode={lowPowerMode}
            />
          </Suspense>
        </LazyInViewSection>

        {/* SECTION 8: CREATIVE ROSTER & PRINCIPALS */}
        <LazyInViewSection
          sectionTitle="ATELIER CREATIVE ROSTER"
          fallback={<SectionFallback sectionTitle="ATELIER CREATIVE ROSTER" />}
        >
          <Suspense fallback={<SectionFallback sectionTitle="ATELIER CREATIVE ROSTER" />}>
            <RosterSection
              reducedMotion={reducedMotion}
              onSelectCreatorForBriefing={onScheduleBriefing}
            />
          </Suspense>
        </LazyInViewSection>

        {/* SECTION 9: AUDITED ACHIEVEMENTS & GLOBAL RECOGNITION */}
        <LazyInViewSection
          sectionTitle="AUDITED ACHIEVEMENTS & ACCOLADES"
          fallback={<SectionFallback sectionTitle="AUDITED ACHIEVEMENTS & ACCOLADES" />}
        >
          <Suspense fallback={<SectionFallback sectionTitle="AUDITED ACHIEVEMENTS & ACCOLADES" />}>
            <AchievementsSection
              reducedMotion={reducedMotion}
            />
          </Suspense>
        </LazyInViewSection>

        {/* SECTION 10: AUDITED EXECUTIVE ENDORSEMENTS & TESTIMONIALS */}
        <LazyInViewSection
          sectionTitle="EXECUTIVE ENDORSEMENTS & TESTIMONIALS"
          fallback={<SectionFallback sectionTitle="EXECUTIVE ENDORSEMENTS & TESTIMONIALS" />}
        >
          <Suspense fallback={<SectionFallback sectionTitle="EXECUTIVE ENDORSEMENTS & TESTIMONIALS" />}>
            <TestimonialsSection
              onScheduleBriefing={onScheduleBriefing}
              reducedMotion={reducedMotion}
              lowPowerMode={lowPowerMode}
            />
          </Suspense>
        </LazyInViewSection>

        {/* SECTION 11: GLOBAL ATELIER LOCATIONS */}
        <LazyInViewSection
          sectionTitle="GLOBAL ATELIER LOCATIONS"
          fallback={<SectionFallback sectionTitle="GLOBAL ATELIER LOCATIONS" />}
        >
          <Suspense fallback={<SectionFallback sectionTitle="GLOBAL ATELIER LOCATIONS" />}>
            <AtelierLocationsSection />
          </Suspense>
        </LazyInViewSection>

        {/* SECTION 12: FINAL SOVEREIGN DIRECTIVE CTA */}
        <LazyInViewSection
          sectionTitle="SOVEREIGN BRIEFING DIRECTIVE"
          fallback={<SectionFallback sectionTitle="SOVEREIGN BRIEFING DIRECTIVE" />}
        >
          <Suspense fallback={<SectionFallback sectionTitle="SOVEREIGN BRIEFING DIRECTIVE" />}>
            <FinalCtaSection
              onScheduleBriefing={onScheduleBriefing}
              onOpenSimulator={onOpenSimulator}
              reducedMotion={reducedMotion}
              lowPowerMode={lowPowerMode}
            />
          </Suspense>
        </LazyInViewSection>

      </main>

      {/* 4. SCHEMA.ORG JSON-LD STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Valtreon Media Network',
            url: 'https://vmnstudios.com/about',
            description:
              'Valtreon Media Network (VMN Studios) is a Swiss-registered media atelier producing 35mm brand films, research dossiers, and zero-ad telemetry.',
            publisher: {
              '@type': 'Organization',
              name: 'Valtreon Media Network SA',
              url: 'https://vmnstudios.com',
              logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80'
            }
          })
        }}
      />
    </div>
  );
}
