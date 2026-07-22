import React, { useState, useEffect } from 'react';
import { CREATORS, METRICS, CHART_DATA, DEMOGRAPHICS } from './data';
import { LatencyTier } from './types';
import InitialLoader from './components/InitialLoader';
import DecryptCounter from './components/DecryptCounter';
import BespokeCharts from './components/BespokeCharts';
import SimulatorOverlay from './components/SimulatorOverlay';
import CreativeRoster from './components/CreativeRoster';
import PrivateBriefingForm from './components/PrivateBriefingForm';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustedBrands from './components/TrustedBrands';
import StatisticsSection from './components/StatisticsSection';
import ServicesSection from './components/ServicesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import {
  Menu,
  X,
  Layers,
  Sparkles,
  Info,
  Calendar,
  Lock,
  ArrowRight,
  Shield,
  Activity,
  User,
  Power
} from 'lucide-react';

export default function App() {
  // Page state controllers
  const [bootSequenceActive, setBootSequenceActive] = useState<boolean>(true);
  const [latency, setLatency] = useState<LatencyTier>('fast');
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [lowPowerMode, setLowPowerMode] = useState<boolean>(false);
  
  // Custom interactive overlays states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [briefingFormSuccess, setBriefingFormSuccess] = useState<boolean>(false);
  
  // Swipe position tracking mock state for mobile gesture demo
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);
  const [currentSwipeDemoIndex, setCurrentSwipeDemoIndex] = useState<number>(0);

  // Compute simulated query latency time for dashboard readout
  const simulatedTimeMs = latency === 'fast' ? 120 : latency === 'delayed' ? 1500 : 500;

  // Touch gesture handler mock for swipe demo cards
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;

    if (isSwipeLeft && currentSwipeDemoIndex < CREATORS.length - 1) {
      setCurrentSwipeDemoIndex(prev => prev + 1);
    } else if (isSwipeRight && currentSwipeDemoIndex > 0) {
      setCurrentSwipeDemoIndex(prev => prev - 1);
    }

    setTouchStartX(0);
    setTouchEndX(0);
  };

  // Auto trigger low-power state if battery level is low (simulated or real)
  useEffect(() => {
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        if (battery.level <= 0.20 && !battery.charging) {
          setLowPowerMode(true);
          setReducedMotion(true);
        }
      });
    }
  }, []);

  // Escape key close drawers listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsBottomSheetOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      id="vmn-master-canvas"
      className={`min-h-screen font-sans selection:bg-[#9C8465] selection:text-white transition-colors duration-700 ${
        lowPowerMode ? 'bg-[#FAF9F6]' : 'bg-[#F9F9FB]'
      } text-zinc-900`}
    >
      {/* 1. INITIAL PAGE BOOT LOADER (First Paint Synchronization) */}
      {bootSequenceActive && (
        <InitialLoader onComplete={() => setBootSequenceActive(false)} />
      )}

      {/* 2. MASTER PORTAL NAVIGATION (Swiss Grid Sticky Horizon) */}
      <Navbar
        onScheduleBriefing={() => setIsBottomSheetOpen(true)}
        latency={latency}
        reducedMotion={reducedMotion}
      />

      {/* 4. HERO SECTION (The Silent Cinematic Statement & Interactive Telemetry Ledger) */}
      <HeroSection
        onScheduleBriefing={() => setIsBottomSheetOpen(true)}
        onReRunBoot={() => setBootSequenceActive(true)}
        latency={latency}
        reducedMotion={reducedMotion}
        lowPowerMode={lowPowerMode}
      />

      {/* 4.5. TRUSTED BRANDS SECTION (Infinite Logo Marquee & Co-Production Alliances) */}
      <TrustedBrands reducedMotion={reducedMotion} />

      {/* 5. PERFORMANCE & INTERACTIVE SIMULATOR SYSTEM BAR (The Controller Terminal) */}
      <section className="sticky top-16 z-30 w-full border-t border-b border-zinc-800 bg-[#0A0A0C] py-4" id="sim-control-wrapper">
        <div className="w-full max-w-7xl mx-auto px-6">
          <SimulatorOverlay
            latency={latency}
            setLatency={setLatency}
            reducedMotion={reducedMotion}
            setReducedMotion={setReducedMotion}
            lowPowerMode={lowPowerMode}
            setLowPowerMode={setLowPowerMode}
            onResetAll={() => {
              setLatency('fast');
              setReducedMotion(false);
              setLowPowerMode(false);
            }}
            simulatedTimeMs={simulatedTimeMs}
          />
        </div>
      </section>

      {/* 6. IMMERSIVE PERFORMANCE DASHBOARD STAGE & STATISTICS ENGINE */}
      <StatisticsSection
        latency={latency}
        reducedMotion={reducedMotion}
        lowPowerMode={lowPowerMode}
      />

      {/* 7. TAILORED SERVICES & CO-PRODUCTION CAPABILITIES */}
      <ServicesSection
        onScheduleBriefing={() => setIsBottomSheetOpen(true)}
        reducedMotion={reducedMotion}
      />

      {/* 8. CREATIVE ROSTER & PORTFOLIO GRID (Cinematic Dark Canvas) */}
      <section className="py-24 bg-[#0B0B0D] border-b border-[#222226] text-zinc-100">
        <div className="w-full max-w-7xl mx-auto px-6">
          <CreativeRoster
            creators={CREATORS}
            latency={latency}
            reducedMotion={reducedMotion}
            lowPowerMode={lowPowerMode}
            onSelectCreatorForBriefing={() => setIsBottomSheetOpen(true)}
          />
        </div>
      </section>

      {/* 9. AUDITED CASE STUDIES & PERFORMANCE SHOWCASE */}
      <CaseStudiesSection
        onScheduleBriefing={() => setIsBottomSheetOpen(true)}
        latency={latency}
        reducedMotion={reducedMotion}
        lowPowerMode={lowPowerMode}
      />

      {/* 10. AUDITED EXECUTIVE TESTIMONIALS & SHOWREEL */}
      <TestimonialsSection
        onScheduleBriefing={() => setIsBottomSheetOpen(true)}
        reducedMotion={reducedMotion}
        lowPowerMode={lowPowerMode}
      />

      {/* 11. FREQUENTLY ASKED DIRECTIVES & FAQ */}
      <FaqSection
        onScheduleBriefing={() => setIsBottomSheetOpen(true)}
        reducedMotion={reducedMotion}
      />

      {/* 12. FINAL SOVEREIGN CTA DIRECTIVE */}
      <FinalCtaSection
        onScheduleBriefing={() => setIsBottomSheetOpen(true)}
        onOpenSimulator={() => {
          const el = document.getElementById('sim-control-wrapper');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        reducedMotion={reducedMotion}
        lowPowerMode={lowPowerMode}
      />

      {/* 9. MOBILE SWIPE & SNAP INTERACTION PLAYGROUND (Tactile Gesture Demo Module) */}
      <section className="py-16 bg-[#F3F4F6] border-b border-zinc-200 md:hidden" id="mobile-swipe-playground">
        <div className="px-6 space-y-6">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">[ MOBILE_EXPERIENCE // SWIPE_SNAP_TEST ]</span>
            <h4 className="font-sans font-semibold text-lg text-zinc-800 mt-1">Tactile Carousel Playplace</h4>
            <p className="font-sans text-xs text-zinc-500 leading-relaxed mt-1">
              Test native mobile horizontal touch swiping inside this responsive sandbox. Drag your finger across cards.
            </p>
          </div>

          <div
            className="relative h-64 overflow-hidden bg-white border border-zinc-200 p-6 flex flex-col justify-between"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            id="swipe-gesture-sandbox"
          >
            <div>
              <span className="font-mono text-[9px] text-[#9C8465]">[ SWIPE_INDEX: {currentSwipeDemoIndex + 1} OF {CREATORS.length} ]</span>
              <h5 className="font-sans font-medium text-xl text-zinc-900 mt-2">{CREATORS[currentSwipeDemoIndex].name}</h5>
              <p className="font-sans text-xs text-zinc-500 leading-relaxed mt-2">
                {CREATORS[currentSwipeDemoIndex].bio}
              </p>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 border-t border-zinc-100 pt-3">
              <span>← SWIPE LEFT</span>
              <span className="animate-pulse text-[#9C8465] font-bold">TACTILE ACTIVE</span>
              <span>SWIPE RIGHT →</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PRIVATE BRIEFING GATES INTAKE FORM (The Call To Action Section) */}
      <section className="py-24 w-full max-w-4xl mx-auto px-6" id="briefing-gate-section">
        <PrivateBriefingForm onSuccessSubmit={() => setBriefingFormSuccess(true)} />
      </section>

      {/* 11. DETACHED TOUCH BOTTOM SHEET DRAWER (The Mechanical Scheduler Drawer) */}
      {isBottomSheetOpen && (
        <div
          id="tactile-bottom-sheet-backdrop"
          className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm z-50 flex items-end justify-center transition-opacity duration-300"
          onClick={() => setIsBottomSheetOpen(false)}
        >
          {/* Sheet Body rising from viewport bottom */}
          <div
            id="tactile-bottom-sheet-body"
            className="w-full max-w-lg bg-zinc-900 border-t border-zinc-800 p-6 md:p-8 space-y-6 transition-transform duration-300 ease-out translate-y-0"
            onClick={(e) => e.stopPropagation()} // Block click parent triggers
            style={{
              maxHeight: '85vh',
              transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' // Vault Curve
            }}
          >
            {/* Drag Handle simulating physical drag-down to close */}
            <div
              className="w-12 h-1 bg-zinc-800 mx-auto rounded-full cursor-pointer hover:bg-zinc-700 mb-4"
              onClick={() => setIsBottomSheetOpen(false)}
              id="sheet-drag-dismiss-handle"
              title="Click or drag down to dismiss briefing drawer"
            />

            <div className="flex justify-between items-start border-b border-zinc-800 pb-4">
              <div>
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">[ SCHEDULER_GATE // SYSTEM_SECURE ]</span>
                <h4 className="font-sans font-medium text-lg text-white mt-1">Book Consultation Coordinate</h4>
              </div>
              <button
                onClick={() => setIsBottomSheetOpen(false)}
                id="btn-close-bottom-sheet"
                className="text-zinc-500 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Connect directly with Director of Tactical Operations for a structured 20-minute vetting briefing. Selected portfolios are calibrated securely.
              </p>

              {/* Minimalist calendar simulated selector */}
              <div className="grid grid-cols-2 gap-2" role="group" aria-label="Available Briefing Slots">
                <button
                  onClick={() => setIsBottomSheetOpen(false)}
                  id="slot-1"
                  className="border border-zinc-800 hover:border-[#9C8465] p-3 text-left font-mono text-xs rounded-none transition-all group hover:bg-zinc-950"
                >
                  <Calendar className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#9C8465] mb-2" />
                  <span className="block text-zinc-300">JULY_22 // 10:00AM EST</span>
                  <span className="text-[9px] text-zinc-500">AVAILABLE slot</span>
                </button>

                <button
                  onClick={() => setIsBottomSheetOpen(false)}
                  id="slot-2"
                  className="border border-zinc-800 hover:border-[#9C8465] p-3 text-left font-mono text-xs rounded-none transition-all group hover:bg-zinc-950"
                >
                  <Calendar className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#9C8465] mb-2" />
                  <span className="block text-zinc-300">JULY_24 // 02:00PM EST</span>
                  <span className="text-[9px] text-zinc-500">AVAILABLE slot</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsBottomSheetOpen(false)}
              id="btn-confirm-scheduler"
              className="w-full bg-[#9C8465] py-3 text-zinc-100 font-mono text-xs uppercase hover:bg-opacity-90 transition-all rounded-none"
            >
              [ CHOOSE slot // LOCK COORDINATE ]
            </button>
          </div>
        </div>
      )}

      {/* 13. GLOBAL PRODUCTION FOOTER */}
      <Footer
        onScheduleBriefing={() => setIsBottomSheetOpen(true)}
        reducedMotion={reducedMotion}
      />
    </div>
  );
}
