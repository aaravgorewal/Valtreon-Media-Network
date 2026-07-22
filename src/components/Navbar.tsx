import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  Menu,
  X,
  Search,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Activity,
  Calendar,
  Lock,
  ExternalLink,
  Layers,
  FileText,
  UserCheck
} from 'lucide-react';
import {
  NAVIGATION_DATA,
  QUICK_SEARCH_PRESETS,
  NavItem,
  MegaMenuCategory,
  FeaturedDossier
} from '../data/navigationData';
import { LatencyTier } from '../types';

interface NavbarProps {
  onScheduleBriefing: () => void;
  latency?: LatencyTier;
  reducedMotion?: boolean;
}

export default function Navbar({
  onScheduleBriefing,
  latency = 'fast',
  reducedMotion = false
}: NavbarProps) {
  // Navigation state controllers
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>('services');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Hover delay timer ref to prevent accidental mega menu flicker
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Scroll detection handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation listeners (Escape & Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key handler
      if (e.key === 'Escape') {
        setActiveMegaMenu(null);
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }

      // Cmd+K or Ctrl+K shortcut for quick search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus search input when search modal opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isSearchOpen]);

  // Handle Mega Menu Hover Enter with delay reset
  const handleMouseEnter = useCallback((navId: string, hasMegaMenu?: boolean) => {
    if (!hasMegaMenu) {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setActiveMegaMenu(null);
      return;
    }

    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMegaMenu(navId);
  }, []);

  // Handle Mega Menu Hover Leave with smooth debounce timeout
  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  }, []);

  // Filtered search results
  const searchResults = QUICK_SEARCH_PRESETS.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* 1. MASTER STICKY HEADER CONTAINER */}
      <header
        id="global-portal-header"
        role="banner"
        aria-label="Master Portal Navigation Header"
        onMouseLeave={handleMouseLeave}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080809]/90 backdrop-blur-xl border-b border-[#222226] shadow-2xl py-3'
            : 'bg-[#080809]/60 backdrop-blur-md border-b border-transparent py-4'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* BRAND IDENTIFIER & LIVE NETWORK BEACON */}
          <div className="flex items-center gap-6">
            <a
              href="/"
              id="vmn-logo-home-link"
              className="group font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2.5 text-zinc-100 hover:text-[#9C8465] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080809] p-1"
              aria-label="Valtreon Media Network Homepage"
            >
              <div className="w-6 h-6 bg-[#111113] border border-[#222226] group-hover:border-[#9C8465] flex items-center justify-center transition-colors">
                <Shield className="w-3.5 h-3.5 text-[#9C8465] group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="leading-none text-zinc-100 group-hover:text-[#9C8465] transition-colors">
                  VALTREON <span className="text-[#9C8465]">//</span> M_N
                </span>
                <span className="font-mono text-[8px] text-zinc-500 tracking-normal leading-tight mt-0.5">
                  SWISS MODERNIST MEDIA
                </span>
              </div>
            </a>

            {/* LIVE NETWORK STATUS PILL (Desktop Only) */}
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 bg-[#111113] border border-[#222226] font-mono text-[9px] text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="uppercase text-zinc-300 font-medium">NETWORK: ONLINE</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-500">{latency === 'fast' ? '120ms' : '500ms'} LATENCY</span>
            </div>
          </div>

          {/* DESKTOP NAVIGATION ITEMS */}
          <nav
            role="navigation"
            aria-label="Primary Portal Navigation"
            className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-zinc-400"
          >
            {NAVIGATION_DATA.map((item) => {
              const isActive = activeMegaMenu === item.id;
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.id, item.hasMegaMenu)}
                >
                  <a
                    href={item.href}
                    id={`nav-link-${item.id}`}
                    role="button"
                    aria-expanded={isActive}
                    aria-haspopup={item.hasMegaMenu ? 'true' : 'false'}
                    aria-controls={item.hasMegaMenu ? `mega-menu-${item.id}` : undefined}
                    onClick={(e) => {
                      if (item.hasMegaMenu && window.innerWidth >= 768) {
                        // Toggle mega menu on click for desktop as well
                        e.preventDefault();
                        setActiveMegaMenu((prev) => (prev === item.id ? null : item.id));
                      }
                    }}
                    className={`px-3 py-2 flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080809] ${
                      isActive ? 'text-white bg-[#111113] border-b-2 border-[#9C8465]' : 'hover:text-zinc-100 hover:bg-[#111113]/50'
                    }`}
                  >
                    <span className="text-[10px] text-[#9C8465] font-semibold">{item.code}.</span>
                    <span>{item.label}</span>
                    {item.hasMegaMenu && (
                      <ChevronDown
                        className={`w-3 h-3 text-zinc-500 transition-transform duration-200 ${
                          isActive ? 'rotate-180 text-[#9C8465]' : ''
                        }`}
                      />
                    )}
                  </a>
                </div>
              );
            })}
          </nav>

          {/* DESKTOP ACTIONS: SEARCH TRIGGER & ANIMATED CTA */}
          <div className="flex items-center gap-3">
            {/* SEARCH / COMMAND PALETTE TRIGGER */}
            <button
              onClick={() => setIsSearchOpen(true)}
              id="header-search-trigger"
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-[#111113] hover:bg-[#1A1A1E] border border-[#222226] hover:border-[#9C8465]/50 text-zinc-400 hover:text-zinc-200 font-mono text-[10px] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
              aria-label="Open command search palette (Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-[#9C8465]" />
              <span>SEARCH</span>
              <kbd className="px-1.5 py-0.5 bg-[#1A1A1E] text-zinc-500 border border-[#222226] text-[9px] rounded-none">
                ⌘K
              </kbd>
            </button>

            {/* ANIMATED HIGH-STAKES CTA BUTTON */}
            <button
              onClick={onScheduleBriefing}
              id="cta-schedule-briefing"
              className="group relative overflow-hidden bg-[#9C8465] hover:bg-[#B39977] text-white font-mono text-xs uppercase px-5 py-2.5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080809]"
            >
              {/* Shimmer Shine Overlay */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              <div className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
                <span>[ SCHEDULE BRIEFING ]</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-hamburger-trigger"
              className="md:hidden p-2 min-h-[48px] min-w-[48px] flex items-center justify-center text-zinc-300 hover:text-white bg-[#111113] border border-[#222226] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
              aria-label="Toggle mobile portal navigation drawer"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-overlay"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#9C8465]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* 2. DESKTOP MEGA MENU DROPDOWN PANEL */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              id={`mega-menu-${activeMegaMenu}`}
              role="region"
              aria-label={`${activeMegaMenu} extended menu panel`}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => {
                if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
              className="hidden md:block absolute top-full left-0 w-full bg-[#080809] border-b border-[#222226] shadow-2xl z-40 overflow-hidden"
            >
              {/* Subtle Champagne Gold Top Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#9C8465] to-transparent opacity-50" />

              <div className="max-w-7xl mx-auto px-6 py-8">
                {NAVIGATION_DATA.find((item) => item.id === activeMegaMenu)?.megaMenu && (
                  <div className="grid grid-cols-12 gap-8 items-start">
                    
                    {/* CATEGORY COLUMNS */}
                    <div className="col-span-8 grid grid-cols-2 gap-8">
                      {NAVIGATION_DATA.find((item) => item.id === activeMegaMenu)?.megaMenu?.categories.map(
                        (cat, idx) => (
                          <div key={idx} className="space-y-4">
                            <div className="border-b border-[#222226] pb-2">
                              <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest block font-semibold">
                                // {cat.title}
                              </span>
                              <p className="font-sans text-xs text-zinc-400 mt-0.5">{cat.tagline}</p>
                            </div>

                            <div className="space-y-3">
                              {cat.items.map((subItem) => (
                                <a
                                  key={subItem.id}
                                  href={subItem.href}
                                  onClick={() => setActiveMegaMenu(null)}
                                  className="group block p-3 bg-[#111113] hover:bg-[#1A1A1E] border border-[#222226] hover:border-[#9C8465]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="font-mono text-xs text-zinc-200 group-hover:text-[#9C8465] font-semibold transition-colors flex items-center gap-2">
                                      {subItem.title}
                                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#9C8465]" />
                                    </span>
                                    {subItem.badge && (
                                      <span className="font-mono text-[9px] uppercase px-2 py-0.5 bg-[#1A1A1E] text-[#9C8465] border border-[#222226]">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="font-sans text-xs text-zinc-400 mt-1 line-clamp-2">
                                    {subItem.description}
                                  </p>
                                  {subItem.metric && (
                                    <div className="mt-2 font-mono text-[10px] text-zinc-500 flex items-center gap-1">
                                      <Activity className="w-3 h-3 text-emerald-500" />
                                      <span>AUDIT: {subItem.metric}</span>
                                    </div>
                                  )}
                                </a>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    {/* FEATURED DOSSIER SHOWCASE CARD */}
                    {NAVIGATION_DATA.find((item) => item.id === activeMegaMenu)?.megaMenu?.featured && (
                      <div className="col-span-4 bg-[#111113] border border-[#222226] p-5 space-y-4">
                        <div className="flex justify-between items-center border-b border-[#222226] pb-2 font-mono text-[10px]">
                          <span className="text-[#9C8465] uppercase font-semibold flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" /> FEATURED CASE STUDY
                          </span>
                          <span className="text-zinc-500">
                            {NAVIGATION_DATA.find((item) => item.id === activeMegaMenu)?.megaMenu?.featured?.acv}
                          </span>
                        </div>

                        {/* Image Preview Container */}
                        <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border border-[#222226] group">
                          <img
                            src={NAVIGATION_DATA.find((item) => item.id === activeMegaMenu)?.megaMenu?.featured?.image}
                            alt={NAVIGATION_DATA.find((item) => item.id === activeMegaMenu)?.megaMenu?.featured?.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-transparent to-transparent opacity-80" />
                          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end font-mono text-[9px] text-zinc-300">
                            <span className="bg-[#080809]/80 px-2 py-0.5 border border-[#222226]">
                              {NAVIGATION_DATA.find((item) => item.id === activeMegaMenu)?.megaMenu?.featured?.client}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <h4 className="font-sans text-sm font-semibold text-zinc-100">
                            {NAVIGATION_DATA.find((item) => item.id === activeMegaMenu)?.megaMenu?.featured?.title}
                          </h4>
                          <p className="font-sans text-xs text-zinc-400">
                            {NAVIGATION_DATA.find((item) => item.id === activeMegaMenu)?.megaMenu?.featured?.summary}
                          </p>
                        </div>

                        <a
                          href={NAVIGATION_DATA.find((item) => item.id === activeMegaMenu)?.megaMenu?.featured?.href}
                          onClick={() => setActiveMegaMenu(null)}
                          className="w-full bg-[#1A1A1E] hover:bg-[#9C8465] text-zinc-300 hover:text-white py-2 px-3 font-mono text-[10px] uppercase flex justify-between items-center transition-colors border border-[#222226]"
                        >
                          <span>[ INSPECT DOSSIER ]</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {/* QUICK STATS BAR FOOTER */}
                {NAVIGATION_DATA.find((item) => item.id === activeMegaMenu)?.megaMenu?.quickStats && (
                  <div className="mt-6 pt-4 border-t border-[#222226] flex justify-between items-center font-mono text-xs text-zinc-500">
                    <div className="flex gap-8">
                      {NAVIGATION_DATA.find((item) => item.id === activeMegaMenu)?.megaMenu?.quickStats?.map(
                        (stat, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-zinc-600">{stat.label}:</span>
                            <span className="text-[#9C8465] font-semibold">{stat.value}</span>
                          </div>
                        )
                      )}
                    </div>
                    <span className="text-[10px] text-zinc-600">PRESS ESC TO CLOSE</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. MOBILE FULL-SCREEN NAVIGATION OVERLAY DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#080809] md:hidden flex flex-col justify-between p-6 pt-20 overflow-y-auto"
          >
            {/* Top Close Bar */}
            <div className="flex justify-between items-center border-b border-[#222226] pb-4 font-mono text-xs text-zinc-400">
              <span className="text-[#9C8465] uppercase font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                [ MOBILE PORTAL MENU ]
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-zinc-400 hover:text-white min-h-[48px] min-w-[48px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                aria-label="Close navigation overlay"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Accordion Links */}
            <div className="my-6 space-y-4">
              {NAVIGATION_DATA.map((item) => {
                const isExpanded = expandedMobileCategory === item.id;
                return (
                  <div key={item.id} className="border border-[#222226] bg-[#111113]">
                    <button
                      onClick={() => {
                        if (item.hasMegaMenu) {
                          setExpandedMobileCategory(isExpanded ? null : item.id);
                        } else {
                          setIsMobileMenuOpen(false);
                          window.location.hash = item.href;
                        }
                      }}
                      className="w-full p-4 flex justify-between items-center min-h-[48px] font-mono text-sm text-zinc-200 uppercase font-semibold text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-[#9C8465]">{item.code}.</span>
                        {item.label}
                      </span>
                      {item.hasMegaMenu ? (
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-500 transition-transform ${
                            isExpanded ? 'rotate-180 text-[#9C8465]' : ''
                          }`}
                        />
                      ) : (
                        <ArrowRight className="w-4 h-4 text-zinc-600" />
                      )}
                    </button>

                    {/* Accordion Sub-items */}
                    {item.hasMegaMenu && isExpanded && item.megaMenu && (
                      <div className="p-4 pt-0 space-y-3 border-t border-[#222226] bg-[#080809]">
                        {item.megaMenu.categories.map((cat, cIdx) => (
                          <div key={cIdx} className="space-y-2 mt-2">
                            <span className="font-mono text-[10px] text-[#9C8465] uppercase block font-medium">
                              // {cat.title}
                            </span>
                            {cat.items.map((sub) => (
                              <a
                                key={sub.id}
                                href={sub.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block p-3 bg-[#111113] border border-[#222226] min-h-[48px] font-mono text-xs text-zinc-300 hover:text-white active:bg-[#9C8465]/20 flex justify-between items-center"
                              >
                                <span>{sub.title}</span>
                                {sub.badge && (
                                  <span className="text-[9px] text-[#9C8465] px-2 py-0.5 bg-[#1A1A1E] border border-[#222226]">
                                    {sub.badge}
                                  </span>
                                )}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Actions Footer */}
            <div className="space-y-3 border-t border-[#222226] pt-4 font-mono">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onScheduleBriefing();
                }}
                id="mobile-menu-cta-booking"
                className="w-full bg-[#9C8465] hover:bg-[#B39977] py-3.5 text-white text-xs uppercase font-semibold text-center min-h-[48px] transition-colors cursor-pointer"
              >
                [ SCHEDULE PRIVATE BRIEFING ]
              </button>

              <div className="flex justify-between items-center text-[10px] text-zinc-500 py-2">
                <span>STATUS: OPERATIONAL</span>
                <span>VMN-QA-2026-v1.0</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. QUICK SEARCH / COMMAND PALETTE MODAL (Cmd + K) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            id="search-command-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Portal Search Command Palette"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#080809]/90 backdrop-blur-md flex items-start justify-center p-4 pt-20"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#111113] border border-[#222226] shadow-2xl p-6 space-y-4 font-mono"
            >
              <div className="flex justify-between items-center border-b border-[#222226] pb-3">
                <span className="text-xs text-[#9C8465] uppercase tracking-widest flex items-center gap-2 font-semibold">
                  <Search className="w-3.5 h-3.5" />
                  [ QUICK COMMAND PALETTE ]
                </span>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-zinc-500 hover:text-white text-xs focus-visible:outline-none"
                >
                  [ ESC ]
                </button>
              </div>

              {/* Input Search Field */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search directors, services, dossiers or telemetry..."
                  className="w-full bg-[#080809] border border-[#222226] text-zinc-100 placeholder-zinc-600 pl-10 pr-4 py-3 text-xs focus:outline-none focus:border-[#9C8465]"
                />
              </div>

              {/* Search Presets or Filtered List */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                  {searchQuery ? 'SEARCH RESULTS' : 'QUICK NAVIGATION PRESETS'}
                </span>

                <div className="space-y-1.5 max-h-60 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map((preset, idx) => (
                      <a
                        key={idx}
                        href={preset.href}
                        onClick={() => setIsSearchOpen(false)}
                        className="group flex justify-between items-center p-2.5 bg-[#080809] hover:bg-[#1A1A1E] border border-[#222226] hover:border-[#9C8465]/40 text-xs text-zinc-300 hover:text-white transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-[#9C8465]" />
                          {preset.label}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#9C8465]" />
                      </a>
                    ))
                  ) : (
                    <div className="text-center py-6 text-xs text-zinc-500">
                      No matching records found for "{searchQuery}".
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2 border-t border-[#222226] flex justify-between text-[10px] text-zinc-600">
                <span>NAVIGATE WITH ARROW KEYS</span>
                <span>VALTREON SEARCH ENGINE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
