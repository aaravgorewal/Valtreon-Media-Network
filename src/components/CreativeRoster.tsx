import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Creator, LatencyTier } from '../types';
import {
  Search,
  X,
  Play,
  Volume2,
  VolumeX,
  RefreshCw,
  Globe,
  SlidersHorizontal,
  Check,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Award,
  Layers,
  Star,
  Film,
  Zap,
  ChevronRight,
  ShieldCheck,
  Grid,
  List
} from 'lucide-react';

interface CreativeRosterProps {
  creators: Creator[];
  latency: LatencyTier;
  reducedMotion?: boolean;
  lowPowerMode?: boolean;
  onSelectCreatorForBriefing?: (creatorName: string) => void;
}

export default function CreativeRoster({
  creators,
  latency,
  reducedMotion = false,
  lowPowerMode = false,
  onSelectCreatorForBriefing
}: CreativeRosterProps) {
  // 1. SEARCH & FILTER STATES
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [selectedReachRange, setSelectedReachRange] = useState<string>('all');
  const [selectedCsat, setSelectedCsat] = useState<string>('all');

  // 2. DISPLAY & VIEW MODE STATES
  const [viewLayout, setViewLayout] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState<'pagination' | 'infinite'>('pagination');
  const [page, setPage] = useState<number>(1);
  const [items, setItems] = useState<Creator[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 3. MEDIA & MODAL STATES
  const [activeVideoCreatorId, setActiveVideoCreatorId] = useState<string | null>(null);
  const [videoBufferingId, setVideoBufferingId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [imageLoadedStates, setImageLoadedStates] = useState<Record<string, boolean>>({});
  const [modalCreator, setModalCreator] = useState<Creator | null>(null);

  // Infinite Scroll Trigger Ref
  const observerRef = useRef<HTMLDivElement | null>(null);
  const itemsPerPage = 6;

  // 4. MEMOIZED FILTERING LOGIC
  const filteredCreators = useMemo(() => {
    return creators.filter((creator) => {
      // Search Query match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        creator.name.toLowerCase().includes(query) ||
        creator.role.toLowerCase().includes(query) ||
        creator.bio.toLowerCase().includes(query) ||
        (creator.country && creator.country.toLowerCase().includes(query)) ||
        (creator.specialty && creator.specialty.toLowerCase().includes(query)) ||
        (creator.platform && creator.platform.toLowerCase().includes(query));

      // Country match
      const matchesCountry =
        selectedCountry === 'all' || creator.countryCode === selectedCountry || creator.country === selectedCountry;

      // Platform match
      const matchesPlatform = selectedPlatform === 'all' || creator.platform === selectedPlatform;

      // Reach / Followers range match
      let matchesReach = true;
      if (selectedReachRange === 'under3m') {
        matchesReach = (creator.followersCount || 0) < 3;
      } else if (selectedReachRange === '3mto5m') {
        matchesReach = (creator.followersCount || 0) >= 3 && (creator.followersCount || 0) <= 5;
      } else if (selectedReachRange === 'above5m') {
        matchesReach = (creator.followersCount || 0) > 5;
      }

      // CSAT match
      let matchesCsat = true;
      if (selectedCsat === 'above98') {
        const num = parseFloat(creator.csat || '0');
        matchesCsat = num >= 98;
      } else if (selectedCsat === 'above95') {
        const num = parseFloat(creator.csat || '0');
        matchesCsat = num >= 95;
      }

      return matchesSearch && matchesCountry && matchesPlatform && matchesReach && matchesCsat;
    });
  }, [creators, searchQuery, selectedCountry, selectedPlatform, selectedReachRange, selectedCsat]);

  // 5. SIMULATED LATENCY LOADER
  const triggerSimulatedLoad = (onLoadComplete: () => void) => {
    setIsLoading(true);
    let delay = 100;
    if (latency === 'fast') delay = 150;
    if (latency === 'delayed') delay = 1200;
    if (latency === 'offline') delay = 300;

    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadComplete();
    }, delay);

    return () => clearTimeout(timer);
  };

  // Synchronize items on filter / pagination change
  useEffect(() => {
    setPage(1);
    triggerSimulatedLoad(() => {
      setItems(filteredCreators.slice(0, itemsPerPage));
    });
  }, [searchQuery, selectedCountry, selectedPlatform, selectedReachRange, selectedCsat, activeTab, latency]);

  // Handle Page Change
  const handlePageChange = (newPage: number) => {
    triggerSimulatedLoad(() => {
      setPage(newPage);
      const start = (newPage - 1) * itemsPerPage;
      setItems(filteredCreators.slice(start, start + itemsPerPage));

      const el = document.getElementById('creative-roster-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  // Infinite Scroll Trigger
  useEffect(() => {
    if (activeTab !== 'infinite' || isLoading || items.length >= filteredCreators.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          triggerSimulatedLoad(() => {
            setPage((prev) => {
              const nextPage = prev + 1;
              const start = (nextPage - 1) * itemsPerPage;
              const slice = filteredCreators.slice(0, start + itemsPerPage);
              setItems(slice);
              return nextPage;
            });
          });
        }
      },
      { rootMargin: '0px 0px 300px 0px' }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [activeTab, isLoading, items.length, filteredCreators.length, latency]);

  // Video Buffer Trigger
  const handlePlayVideoCampaign = (creatorId: string) => {
    if (lowPowerMode) return;
    setVideoBufferingId(creatorId);

    setTimeout(() => {
      setVideoBufferingId(null);
      setActiveVideoCreatorId(creatorId);
    }, 1800);
  };

  const handleImageLoadComplete = (id: string) => {
    setImageLoadedStates((prev) => ({ ...prev, [id]: true }));
  };

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCountry('all');
    setSelectedPlatform('all');
    setSelectedReachRange('all');
    setSelectedCsat('all');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCountry !== 'all' ||
    selectedPlatform !== 'all' ||
    selectedReachRange !== 'all' ||
    selectedCsat !== 'all';

  const totalPages = Math.ceil(filteredCreators.length / itemsPerPage) || 1;

  return (
    <div id="creative-roster-section" className="space-y-8 scroll-mt-24">
      {/* 1. HEADER & TITLE STRIP */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-zinc-800 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[#9C8465]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ CREATOR_NETWORK_SHOWCASE // UNCONTAMINATED_ROSTER ]</span>
          </div>

          <h3 className="font-sans font-medium text-3xl md:text-4xl text-zinc-100 tracking-tight">
            Represented Directorial & Creator Roster
          </h3>

          <p className="font-sans text-xs md:text-sm text-zinc-400 max-w-xl leading-relaxed">
            Exclusively managed independent documentarians, computational artists, and sonic architects under direct VMN co-production contracts.
          </p>
        </div>

        {/* Tactical Search Preview Input */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1 sm:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="search-creator-input"
              type="text"
              placeholder="Scan directors, countries, skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#9C8465] pl-9 pr-8 py-2 text-xs font-mono text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors"
              aria-label="Filter creator network by name, role, or country"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200 p-1"
                aria-label="Clear search input"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* View Layout Toggle */}
          <div className="flex items-center gap-1 border border-zinc-800 p-1 bg-zinc-950">
            <button
              onClick={() => setViewLayout('grid')}
              className={`p-1.5 transition-colors ${
                viewLayout === 'grid' ? 'bg-zinc-800 text-[#9C8465]' : 'text-zinc-500 hover:text-zinc-300'
              }`}
              title="Grid View"
              aria-label="Switch to Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewLayout('list')}
              className={`p-1.5 transition-colors ${
                viewLayout === 'list' ? 'bg-zinc-800 text-[#9C8465]' : 'text-zinc-500 hover:text-zinc-300'
              }`}
              title="Compact Dossier List View"
              aria-label="Switch to Compact Dossier List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MULTI-FILTER CONTROLLER BAR */}
      <div className="bg-zinc-950/60 border border-zinc-800/80 p-4 space-y-4 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#9C8465] font-semibold text-[11px] uppercase">
            <SlidersHorizontal className="w-4 h-4" />
            <span>ROSTER QUERY ENGINE</span>
            <span className="bg-zinc-800 text-zinc-300 px-2 py-0.5 text-[10px] rounded-none">
              {filteredCreators.length} DIRECTORS FOUND
            </span>
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetAllFilters}
              className="text-zinc-400 hover:text-[#9C8465] text-[10px] uppercase underline flex items-center gap-1 transition-colors cursor-pointer"
            >
              <X className="w-3 h-3" />
              <span>RESET ALL FILTERS</span>
            </button>
          )}
        </div>

        {/* Filter Dropdowns Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Country Filter */}
          <div className="space-y-1">
            <label htmlFor="filter-country-select" className="text-[9px] text-zinc-500 uppercase block">
              COUNTRY / HQ
            </label>
            <select
              id="filter-country-select"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 text-zinc-300 p-2 text-xs font-mono focus:border-[#9C8465] focus:outline-none cursor-pointer"
            >
              <option value="all">ALL COUNTRIES</option>
              <option value="CH">[CH] SWITZERLAND</option>
              <option value="US">[US] UNITED STATES</option>
              <option value="UK">[UK] UNITED KINGDOM</option>
              <option value="JP">[JP] JAPAN</option>
              <option value="DE">[DE] GERMANY</option>
            </select>
          </div>

          {/* Platform / Format Filter */}
          <div className="space-y-1">
            <label htmlFor="filter-platform-select" className="text-[9px] text-zinc-500 uppercase block">
              MEDIUM / PLATFORM
            </label>
            <select
              id="filter-platform-select"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 text-zinc-300 p-2 text-xs font-mono focus:border-[#9C8465] focus:outline-none cursor-pointer"
            >
              <option value="all">ALL MEDIA FORMATS</option>
              <option value="35mm Film">35MM ANAMORPHIC</option>
              <option value="Editorial Essay">EDITORIAL ESSAY</option>
              <option value="Generative AI">GENERATIVE AI</option>
              <option value="Spatial Audio">SPATIAL AUDIO</option>
              <option value="Documentary">DOCUMENTARY FILM</option>
            </select>
          </div>

          {/* Followers / Reach Filter */}
          <div className="space-y-1">
            <label htmlFor="filter-reach-select" className="text-[9px] text-zinc-500 uppercase block">
              AUDIENCE REACH
            </label>
            <select
              id="filter-reach-select"
              value={selectedReachRange}
              onChange={(e) => setSelectedReachRange(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 text-zinc-300 p-2 text-xs font-mono focus:border-[#9C8465] focus:outline-none cursor-pointer"
            >
              <option value="all">ALL REACH TIERS</option>
              <option value="under3m">&lt; 3.0M IMPRESSIONS</option>
              <option value="3mto5m">3.0M – 5.0M IMPRESSIONS</option>
              <option value="above5m">&gt; 5.0M IMPRESSIONS</option>
            </select>
          </div>

          {/* Engagement / CSAT Filter */}
          <div className="space-y-1">
            <label htmlFor="filter-csat-select" className="text-[9px] text-zinc-500 uppercase block">
              AUDITED CSAT SCORE
            </label>
            <select
              id="filter-csat-select"
              value={selectedCsat}
              onChange={(e) => setSelectedCsat(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 text-zinc-300 p-2 text-xs font-mono focus:border-[#9C8465] focus:outline-none cursor-pointer"
            >
              <option value="all">ALL CSAT RATINGS</option>
              <option value="above98">&gt; 98.0% COMPLETION</option>
              <option value="above95">&gt; 95.0% COMPLETION</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. SKELETON WIREFRAMES (WHEN LOADING) */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="roster-loading-skeletons">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`skeleton-${i}`}
              className="border border-zinc-800 bg-zinc-950/40 p-5 aspect-[4/5] flex flex-col justify-between relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/20 to-transparent ${
                  reducedMotion ? '' : 'animate-pulse'
                }`}
              />
              <svg className="absolute inset-0 w-full h-full stroke-zinc-900/40" strokeWidth="1">
                <line x1="0" y1="0" x2="100%" y2="100%" />
                <line x1="100%" y1="0" x2="0" y2="100%" />
              </svg>
              <div className="space-y-2 relative z-10">
                <div className="h-4 w-28 bg-zinc-800/60" />
                <div className="h-3 w-40 bg-zinc-900/60" />
              </div>
              <div className="flex justify-between items-end border-t border-zinc-900 pt-4 font-mono text-[9px] text-zinc-600 relative z-10">
                <span>[ RESOLVING DIRECTOR DOSSIER... ]</span>
                <span>[ BLUEPRINT_{i} ]</span>
              </div>
            </div>
          ))}
        </div>
      ) : filteredCreators.length === 0 ? (
        /* 4. EMPTY RESULTS STATE */
        <div
          id="sector-prone-empty-state"
          className="border border-zinc-800 bg-zinc-950/40 py-16 px-8 text-center flex flex-col items-center justify-center space-y-4"
        >
          <div className="font-mono text-xs text-[#9C8465] uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-3 py-1">
            [ STATUS: NO_DIRECTORS_MATCH_CRITERIA ]
          </div>
          <p className="font-sans text-xs text-zinc-400 max-w-md leading-relaxed">
            No creators match the combined search query and filter parameters. Try expanding your search terms or resetting filters.
          </p>
          <button
            onClick={resetAllFilters}
            className="border border-[#9C8465] bg-[#9C8465] text-white hover:bg-[#B39977] transition-all py-2 px-6 font-mono text-xs uppercase cursor-pointer"
          >
            [ RESET ALL FILTERS ]
          </button>
        </div>
      ) : (
        /* 5. CREATORS GRID OR LIST DISPLAY */
        <AnimatePresence mode="wait">
          <motion.div
            key={viewLayout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={
              viewLayout === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
            }
          >
            {items.map((creator, idx) => {
              const isImageLoaded = imageLoadedStates[creator.id];
              const isVideoActive = activeVideoCreatorId === creator.id;
              const isVideoBuffering = videoBufferingId === creator.id;

              if (viewLayout === 'list') {
                return (
                  <motion.div
                    key={creator.id}
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="group border border-zinc-800 bg-zinc-950/60 hover:border-[#9C8465] p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 shrink-0 overflow-hidden relative">
                        <img
                          src={creator.avatar}
                          alt={creator.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 font-mono text-[10px]">
                          <span className="text-[#9C8465] font-semibold">[{creator.countryCode || 'GLOBAL'}] {creator.country}</span>
                          <span className="text-zinc-600">•</span>
                          <span className="text-zinc-400">{creator.platform}</span>
                        </div>
                        <h4 className="font-sans font-medium text-lg text-zinc-100 group-hover:text-white transition-colors">
                          {creator.name}
                        </h4>
                        <p className="font-mono text-xs text-zinc-400">{creator.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 font-mono text-xs w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-zinc-900 pt-3 md:pt-0">
                      <div className="text-right">
                        <span className="text-[9px] text-zinc-500 block uppercase">AUDIENCE REACH</span>
                        <span className="font-bold text-zinc-200">{creator.reach}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] text-zinc-500 block uppercase">AUDITED CSAT</span>
                        <span className="font-bold text-emerald-400">{creator.csat || '98.2%'}</span>
                      </div>

                      <button
                        onClick={() => setModalCreator(creator)}
                        className="bg-zinc-900 hover:bg-[#9C8465] border border-zinc-800 hover:border-[#9C8465] text-zinc-200 hover:text-white px-3 py-2 text-[10px] uppercase font-semibold transition-all cursor-pointer flex items-center gap-1"
                      >
                        <span>DOSSIER</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              }

              return (
                /* GRID CARD MODE */
                <motion.div
                  key={creator.id}
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group border border-zinc-800/90 bg-zinc-950/60 hover:border-[#9C8465] p-5 flex flex-col justify-between space-y-4 relative transition-all duration-300 hover:shadow-xl hover:shadow-[#9C8465]/5"
                >
                  {/* Top Gold Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9C8465]/40 group-hover:via-[#9C8465] to-transparent transition-all" />

                  <div className="space-y-4">
                    {/* Media Viewport */}
                    <div className="relative aspect-video overflow-hidden border border-zinc-800 bg-zinc-900">
                      {!isImageLoaded && (
                        <div className="absolute inset-0 bg-zinc-900 filter blur-md animate-pulse" />
                      )}

                      {!isVideoActive && (
                        <img
                          src={creator.avatar}
                          alt={creator.name}
                          onLoad={() => handleImageLoadComplete(creator.id)}
                          className={`w-full h-full object-cover transition-all duration-700 ${
                            reducedMotion
                              ? 'scale-100 grayscale'
                              : 'group-hover:scale-105 grayscale group-hover:grayscale-0 group-hover:brightness-105 brightness-80'
                          } ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        />
                      )}

                      {/* Buffering Video Overlay */}
                      {isVideoBuffering && (
                        <div className="absolute inset-0 bg-zinc-950/90 flex flex-col justify-center items-center font-mono text-[9px] text-[#9C8465] z-10 gap-2">
                          <RefreshCw className="w-5 h-5 animate-spin text-[#9C8465]" />
                          <span>[ BUFFERING_SHOWREEL // 1.8s ]</span>
                        </div>
                      )}

                      {/* Video Player */}
                      {isVideoActive && !lowPowerMode && (
                        <div className="absolute inset-0 bg-zinc-950 z-20">
                          <video
                            src={creator.videoUrl}
                            autoPlay
                            loop
                            muted={isMuted}
                            playsInline
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 flex items-center gap-1 bg-zinc-950/80 border border-zinc-800 p-1">
                            <button
                              onClick={() => setIsMuted(!isMuted)}
                              className="text-zinc-400 hover:text-white p-1"
                              title={isMuted ? 'Unmute' : 'Mute'}
                            >
                              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                            </button>
                            <button
                              onClick={() => setActiveVideoCreatorId(null)}
                              className="text-zinc-400 hover:text-white p-1"
                              title="Close Video"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Play Button Trigger */}
                      {!isVideoActive && !isVideoBuffering && !lowPowerMode && (
                        <button
                          onClick={() => handlePlayVideoCampaign(creator.id)}
                          className="absolute bottom-2 right-2 bg-zinc-950/90 hover:bg-[#9C8465] border border-zinc-800 hover:border-[#9C8465] p-2 text-zinc-300 hover:text-white transition-all cursor-pointer"
                          title="Play Director Showreel"
                          aria-label={`Play showreel for ${creator.name}`}
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                        </button>
                      )}

                      {/* Country Flag Badge Pill */}
                      <div className="absolute top-2 left-2 bg-zinc-950/90 border border-zinc-800 text-[9px] font-mono px-2 py-0.5 text-zinc-300 uppercase">
                        [{creator.countryCode || 'GL'}] {creator.country || 'Global'}
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center font-mono text-[9px] text-[#9C8465]">
                        <span className="uppercase">{creator.badge || 'VERIFIED DIRECTORIAL TIER'}</span>
                        <span className="text-emerald-400 font-bold bg-emerald-950/30 border border-emerald-900/40 px-1.5 py-0.5">
                          {creator.csat || '98.2% CSAT'}
                        </span>
                      </div>

                      <h4 className="font-sans font-medium text-lg text-zinc-100 group-hover:text-white transition-colors">
                        {creator.name}
                      </h4>
                      <p className="font-mono text-xs text-zinc-400">{creator.role}</p>
                    </div>

                    {/* Bio excerpt */}
                    <p className="font-sans text-xs text-zinc-300 leading-relaxed line-clamp-2">
                      {creator.bio}
                    </p>
                  </div>

                  {/* Footer Bar */}
                  <div className="border-t border-zinc-900 pt-3 flex items-center justify-between font-mono text-[10px]">
                    <div className="text-zinc-500">
                      REACH: <strong className="text-zinc-200">{creator.reach}</strong>
                    </div>

                    <button
                      onClick={() => setModalCreator(creator)}
                      className="bg-zinc-900 hover:bg-[#9C8465] border border-zinc-800 hover:border-[#9C8465] text-zinc-200 hover:text-white px-3 py-1.5 text-[10px] uppercase font-semibold transition-all cursor-pointer flex items-center gap-1"
                    >
                      <span>INSPECT DOSSIER</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}

      {/* 6. PAGINATION VS INFINITE TOGGLE CONTROLLER */}
      {activeTab === 'pagination' && filteredCreators.length > itemsPerPage && !isLoading && (
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-zinc-800 pt-6 font-mono text-xs gap-4">
          <button
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
            className="w-full sm:w-auto border border-zinc-800 bg-zinc-950 px-4 py-2 hover:border-[#9C8465] hover:text-[#9C8465] transition-colors disabled:opacity-40 disabled:pointer-events-none uppercase cursor-pointer"
          >
            [ PREVIOUS_PAGE ]
          </button>

          <span className="text-zinc-500">
            PAGE <span className="text-zinc-200">{page}</span> OF <span className="text-zinc-200">{totalPages}</span>
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
            className="w-full sm:w-auto border border-zinc-800 bg-zinc-950 px-4 py-2 hover:border-[#9C8465] hover:text-[#9C8465] transition-colors disabled:opacity-40 disabled:pointer-events-none uppercase cursor-pointer"
          >
            [ NEXT_PAGE ]
          </button>
        </div>
      )}

      {/* 7. DETAILED CREATOR DOSSIER MODAL */}
      <AnimatePresence>
        {modalCreator && (
          <div
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setModalCreator(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-creator-title"
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
                onClick={() => setModalCreator(null)}
                className="absolute top-4 right-4 p-2 bg-[#1A1A1E] text-zinc-400 hover:text-white border border-[#222226] hover:border-[#9C8465] transition-colors cursor-pointer"
                aria-label="Close Creator Dossier Modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex items-start gap-4 border-b border-[#222226] pb-6 pr-8">
                <div className="w-20 h-20 bg-zinc-900 border border-[#9C8465] overflow-hidden shrink-0">
                  <img
                    src={modalCreator.avatar}
                    alt={modalCreator.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#9C8465] uppercase font-semibold tracking-widest block">
                    // DIRECTORIAL CREATOR DOSSIER
                  </span>
                  <h3 id="modal-creator-title" className="font-sans text-2xl font-medium text-white">
                    {modalCreator.name}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400">{modalCreator.role}</p>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400 pt-1">
                    <Globe className="w-3 h-3 text-[#9C8465]" />
                    <span>HQ: [{modalCreator.countryCode || 'GL'}] {modalCreator.country || 'Global'}</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-bold">{modalCreator.csat || '98.4% CSAT'}</span>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                <div className="bg-[#080809] border border-[#222226] p-3 space-y-1">
                  <span className="text-[9px] text-zinc-500 uppercase block">VERIFIED REACH</span>
                  <span className="text-sm font-bold text-[#9C8465]">{modalCreator.reach}</span>
                </div>
                <div className="bg-[#080809] border border-[#222226] p-3 space-y-1">
                  <span className="text-[9px] text-zinc-500 uppercase block">CAMPAIGN COUNT</span>
                  <span className="text-sm font-bold text-zinc-100">{modalCreator.campaigns} CO-PRODUCTIONS</span>
                </div>
                <div className="bg-[#080809] border border-[#222226] p-3 space-y-1">
                  <span className="text-[9px] text-zinc-500 uppercase block">PRIMARY MEDIUM</span>
                  <span className="text-xs font-semibold text-zinc-200 truncate block">
                    {modalCreator.platform || '35mm Film'}
                  </span>
                </div>
              </div>

              {/* Bio & Specialty */}
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-zinc-500 uppercase block">
                  CREATIVE STATEMENT & ARCHITECTURAL APPROACH:
                </span>
                <p className="font-sans text-xs md:text-sm text-zinc-300 leading-relaxed">
                  {modalCreator.bio}
                </p>
              </div>

              {/* Key Guarantees */}
              <div className="bg-[#1A1A1E] border border-[#222226] p-4 space-y-2 font-mono text-xs">
                <span className="text-[#9C8465] text-[10px] uppercase font-semibold block flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> VMN EXCLUSIVE DIRECTORIAL GUARANTEE:
                </span>
                <p className="text-zinc-300 text-[11px] font-sans">
                  Direct contact exclusivity under VMN sovereign co-production. Zero third-party management agency markup, zero audience cookie tracking.
                </p>
              </div>

              {/* Footer CTA */}
              <div className="border-t border-[#222226] pt-4 flex justify-end gap-3 font-mono text-xs">
                <button
                  onClick={() => setModalCreator(null)}
                  className="px-4 py-2.5 bg-[#1A1A1E] border border-[#222226] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  CLOSE
                </button>
                <button
                  onClick={() => {
                    const creatorName = modalCreator.name;
                    setModalCreator(null);
                    if (onSelectCreatorForBriefing) {
                      onSelectCreatorForBriefing(creatorName);
                    }
                  }}
                  className="px-5 py-2.5 bg-[#9C8465] hover:bg-[#B39977] text-white font-semibold flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>REQUEST CO-PRODUCTION</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
