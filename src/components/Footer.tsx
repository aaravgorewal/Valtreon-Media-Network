import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowUp,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Mail,
  Send,
  Building2,
  Globe2,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Video,
  Radio,
  FileText
} from 'lucide-react';

interface FooterProps {
  onScheduleBriefing: () => void;
  reducedMotion?: boolean;
}

export default function Footer({ onScheduleBriefing, reducedMotion = false }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribedStatus, setSubscribedStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [subscribeError, setSubscribeError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setSubscribeError('Please enter a valid institutional email address.');
      return;
    }

    setSubscribeError('');
    setSubscribedStatus('submitting');

    setTimeout(() => {
      setSubscribedStatus('success');
      setNewsletterEmail('');
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      aria-label="VMN Studios Site Footer"
      className="bg-[#050506] border-t border-[#222226] text-zinc-300 font-sans relative overflow-hidden"
    >
      {/* Background Subtle Lighting Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#9C8465]/30 via-transparent to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-16 relative z-10">
        
        {/* 1. TOP NEWSLETTER SUBSCRIPTION CARD */}
        <div className="bg-[#0E0E10] border border-[#222226] p-8 md:p-10 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9C8465] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header */}
            <div className="lg:col-span-6 space-y-2">
              <div className="flex items-center gap-2 font-mono text-[10px] text-[#9C8465] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>[ RESEARCH_DOSSIER // C-SUITE DISPATCH ]</span>
              </div>
              <h3 className="font-sans font-medium text-2xl md:text-3xl text-white">
                Subscribe to Sovereign Research Dossiers
              </h3>
              <p className="font-sans text-xs text-zinc-400 max-w-lg leading-relaxed">
                Receive quarterly unedited monographs on media hygiene, 35mm film case studies, and luxury horology economics directly to your inbox. Zero tracking, 100% private.
              </p>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              {subscribedStatus === 'success' ? (
                <motion.div
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#111113] border border-emerald-500/50 p-4 flex items-center gap-3 text-xs font-mono text-emerald-400"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <div>
                    <span className="font-bold uppercase block">SUBSCRIBED TO RESEARCH DOSSIER</span>
                    <span className="text-zinc-400 text-[11px]">
                      Your institutional email has been verified. Welcome to VMN Research.
                    </span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <div className="flex flex-col sm:flex-row items-stretch gap-2">
                    <div className="relative flex-1">
                      <label htmlFor="footer-newsletter-email" className="sr-only">
                        Institutional Email Address
                      </label>
                      <input
                        id="footer-newsletter-email"
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="executive@atelier.com"
                        className="w-full px-4 py-3 bg-[#050506] border border-[#222226] focus:border-[#9C8465] text-zinc-100 text-xs font-mono placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#9C8465]"
                        aria-required="true"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={subscribedStatus === 'submitting'}
                      className="px-6 py-3 bg-[#9C8465] hover:bg-[#B39977] text-white font-mono text-xs uppercase font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                    >
                      {subscribedStatus === 'submitting' ? (
                        <span>VERIFYING...</span>
                      ) : (
                        <>
                          <span>SUBSCRIBE</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  {subscribeError && (
                    <p className="font-mono text-[10px] text-rose-400">{subscribeError}</p>
                  )}

                  <div className="flex items-center gap-2 font-mono text-[9px] text-zinc-500 uppercase">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span>SOVEREIGN PRIVACY GUARANTEE • ZERO COOKIES • UNSUBSCRIBE ANYTIME</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 2. RESPONSIVE MULTI-COLUMN NAVIGATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 font-mono text-xs border-b border-[#222226] pb-12">
          {/* Col 1: Brand & Atelier Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#9C8465]" />
                <span className="font-sans font-bold text-xl tracking-wider text-white">
                  VMN STUDIOS
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest block">
                [ SOVEREIGN_CO_PRODUCTION_ATELIER ]
              </span>
            </div>

            <p className="font-sans text-xs text-zinc-400 max-w-sm leading-relaxed">
              VMN Studios produces zero-ad research dossiers, 35mm anamorphic brand films, and spatial sound installations for global luxury, hardware, and sovereign finance houses.
            </p>

            <div className="space-y-1 text-[10px] text-zinc-500">
              <p>Certified ISO-27001 & KPMG Telemetry Audited</p>
              <p>Swiss Registered Atelier SA • CHE-109.842.110</p>
            </div>
          </div>

          {/* Col 2: Co-Productions */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] text-white uppercase font-semibold tracking-wider border-b border-[#222226] pb-2">
              CO-PRODUCTIONS
            </h4>
            <ul className="space-y-2 text-[11px] text-zinc-400">
              <li>
                <a href="#case-studies-section" className="hover:text-[#9C8465] transition-colors">
                  35mm Anamorphic Film
                </a>
              </li>
              <li>
                <a href="#case-studies-section" className="hover:text-[#9C8465] transition-colors">
                  10,000-Word Dossiers
                </a>
              </li>
              <li>
                <a href="#case-studies-section" className="hover:text-[#9C8465] transition-colors">
                  Dolby Atmos Soundscapes
                </a>
              </li>
              <li>
                <a href="#performance-telemetry-dashboard" className="hover:text-[#9C8465] transition-colors">
                  Zero-Ad Telemetry Audit
                </a>
              </li>
              <li>
                <button onClick={onScheduleBriefing} className="hover:text-[#9C8465] transition-colors cursor-pointer text-left">
                  Private Executive Briefings
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Roster & Ateliers */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] text-white uppercase font-semibold tracking-wider border-b border-[#222226] pb-2">
              ATELIER HOUSES
            </h4>
            <ul className="space-y-2 text-[11px] text-zinc-400">
              <li>
                <span className="hover:text-[#9C8465] transition-colors cursor-default">
                  Aethelgard Swiss Horology
                </span>
              </li>
              <li>
                <span className="hover:text-[#9C8465] transition-colors cursor-default">
                  Vektor Spatial Labs
                </span>
              </li>
              <li>
                <span className="hover:text-[#9C8465] transition-colors cursor-default">
                  Oberon Private Equity
                </span>
              </li>
              <li>
                <span className="hover:text-[#9C8465] transition-colors cursor-default">
                  Solis Electric GT
                </span>
              </li>
              <li>
                <span className="hover:text-[#9C8465] transition-colors cursor-default">
                  Chrono Logic Atelier
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Global Locations */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] text-white uppercase font-semibold tracking-wider border-b border-[#222226] pb-2">
              GLOBAL ATELIERS
            </h4>
            <ul className="space-y-2 text-[10px] text-zinc-400">
              <div>
                <strong className="text-zinc-200 block">GENEVA:</strong>
                <span className="text-zinc-500">Rue du Rhône 42, CH-1204</span>
              </div>
              <div>
                <strong className="text-zinc-200 block">ZURICH:</strong>
                <span className="text-zinc-500">Bahnhofstrasse 18, CH-8001</span>
              </div>
              <div>
                <strong className="text-zinc-200 block">LONDON:</strong>
                <span className="text-zinc-500">Berkeley Square 14, W1J 6CB</span>
              </div>
              <div>
                <strong className="text-zinc-200 block">STOCKHOLM:</strong>
                <span className="text-zinc-500">Strandvägen 7A, SE-114 56</span>
              </div>
            </ul>
          </div>
        </div>

        {/* 3. SOCIAL LINKS & COMPLIANCE BAR */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <span className="text-zinc-500 text-[10px] uppercase mr-2">SOVEREIGN NETWORK:</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#111113] border border-[#222226] hover:border-[#9C8465] text-zinc-400 hover:text-white transition-all"
              aria-label="VMN Studios LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#111113] border border-[#222226] hover:border-[#9C8465] text-zinc-400 hover:text-white transition-all"
              aria-label="VMN Studios Twitter Profile"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#111113] border border-[#222226] hover:border-[#9C8465] text-zinc-400 hover:text-white transition-all"
              aria-label="VMN Studios Vimeo 4K Showreels"
            >
              <Video className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#111113] border border-[#222226] hover:border-[#9C8465] text-zinc-400 hover:text-white transition-all"
              aria-label="VMN Studios GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2 bg-[#111113] hover:bg-[#1A1A1E] border border-[#222226] hover:border-[#9C8465] text-zinc-300 hover:text-white text-[10px] uppercase font-semibold transition-all flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
            aria-label="Scroll back to top of page"
          >
            <span>[ BACK TO TOP ]</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4. COPYRIGHT & LEGAL BAR */}
        <div className="border-t border-[#222226] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-500">
          <div>
            © 2026 VMN STUDIOS SA. ALL RIGHTS RESERVED. SOVEREIGN CO-PRODUCTION ALLIANCE.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="hover:text-zinc-300 cursor-pointer">PRIVACY POLICY</span>
            <span>•</span>
            <span className="hover:text-zinc-300 cursor-pointer">TERMS OF UNDERWRITING</span>
            <span>•</span>
            <span className="hover:text-zinc-300 cursor-pointer">COOKIE-FREE DECLARATION</span>
            <span>•</span>
            <span className="hover:text-zinc-300 cursor-pointer">TELEMETRY AUDIT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
