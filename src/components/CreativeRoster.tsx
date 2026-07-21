import React, { useState, useEffect, useRef } from 'react';
import { Creator, LatencyTier } from '../types';
import { Play, VolumeX, Eye, X, RefreshCw } from 'lucide-react';

interface CreativeRosterProps {
  creators: Creator[];
  latency: LatencyTier;
  reducedMotion?: boolean;
  lowPowerMode?: boolean;
}

export default function CreativeRoster({
  creators,
  latency,
  reducedMotion = false,
  lowPowerMode = false
}: CreativeRosterProps) {
  const [filterQuery, setFilterQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'infinite' | 'pagination'>('pagination');
  const [page, setPage] = useState<number>(1);
  const [items, setItems] = useState<Creator[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeVideoCreatorId, setActiveVideoCreatorId] = useState<string | null>(null);
  const [videoBufferingId, setVideoBufferingId] = useState<string | null>(null);
  const [imageLoadedStates, setImageLoadedStates] = useState<Record<string, boolean>>({});

  // Infinite Scroll Trigger Ref
  const observerRef = useRef<HTMLDivElement | null>(null);
  const itemsPerPage = 3;

  // Filter creators based on query
  const filteredCreators = creators.filter(
    c =>
      c.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      c.role.toLowerCase().includes(filterQuery.toLowerCase())
  );

  // Trigger loading state simulator based on network tier and settings changes
  const triggerSimulatedLoad = (onLoadComplete: () => void) => {
    setIsLoading(true);
    let delay = 0;
    if (latency === 'fast') delay = 150;
    if (latency === 'delayed') delay = 1500;
    if (latency === 'offline') delay = 500; // instant read from cache

    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadComplete();
    }, delay);

    return () => clearTimeout(timer);
  };

  // Synchronize items on pagination / infinite tab changes
  useEffect(() => {
    setPage(1);
    if (activeTab === 'pagination') {
      triggerSimulatedLoad(() => {
        setItems(filteredCreators.slice(0, itemsPerPage));
      });
    } else {
      triggerSimulatedLoad(() => {
        setItems(filteredCreators.slice(0, itemsPerPage));
      });
    }
  }, [filterQuery, activeTab, latency]);

  // Handle pagination next/prev page transitions
  const handlePageChange = (newPage: number) => {
    triggerSimulatedLoad(() => {
      setPage(newPage);
      const start = (newPage - 1) * itemsPerPage;
      setItems(filteredCreators.slice(start, start + itemsPerPage));

      // Page Swap Focus correction: Snap viewport to container top margin
      const el = document.getElementById('creative-roster-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  // Handle Infinite Scroll triggers using IntersectionObserver
  useEffect(() => {
    if (activeTab !== 'infinite' || isLoading || items.length >= filteredCreators.length) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          triggerSimulatedLoad(() => {
            setPage(prev => {
              const nextPage = prev + 1;
              const start = (nextPage - 1) * itemsPerPage;
              const slice = filteredCreators.slice(0, start + itemsPerPage);
              setItems(slice);
              return nextPage;
            });
          });
        }
      },
      { rootMargin: '0px 0px 400px 0px' } // 400px Proximity Horizon Trigger
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [activeTab, isLoading, items.length, filteredCreators.length, latency]);

  // Handle Video Buffer trigger (Cinematic Playhead Buffer)
  const handlePlayVideoCampaign = (creatorId: string) => {
    if (lowPowerMode) return; // Video is blocked on low power mode to save battery

    setVideoBufferingId(creatorId);

    // Simulate 2.0s playback playhead buffering before resolving play
    setTimeout(() => {
      setVideoBufferingId(null);
      setActiveVideoCreatorId(creatorId);
    }, 2000);
  };

  const handleImageLoadComplete = (id: string) => {
    setImageLoadedStates(prev => ({ ...prev, [id]: true }));
  };

  const totalPages = Math.ceil(filteredCreators.length / itemsPerPage);

  return (
    <div id="creative-roster-section" className="space-y-8 scroll-mt-24">
      {/* Search Input and Navigation Controller */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-800 pb-6">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">[ COOPERATIVE_DATABASE // ROSTER_ACTIVE ]</span>
          <h3 className="font-sans font-medium text-3xl text-zinc-100 mt-1">Represented Creator Networks</h3>
        </div>

        {/* Tactical Search Field */}
        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          <input
            id="search-creator-input"
            type="text"
            placeholder="[ SCAN // CATEGORY_OR_NAME... ]"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-mono text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-[#9C8465] w-full md:w-64 rounded-none"
            aria-label="Filter creator cooperative by name or role"
          />

          {/* Navigation Toggle Option: Infinite vs Page Swap */}
          <div className="grid grid-cols-2 gap-1 border border-zinc-800 p-1 bg-zinc-950/40">
            <button
              onClick={() => setActiveTab('pagination')}
              id="btn-tab-pagination"
              className={`px-3 py-1.5 font-mono text-[10px] uppercase transition-colors rounded-none ${
                activeTab === 'pagination'
                  ? 'bg-zinc-800 text-zinc-100 border-b border-[#9C8465]'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              [ PAGINATION ]
            </button>
            <button
              onClick={() => setActiveTab('infinite')}
              id="btn-tab-infinite"
              className={`px-3 py-1.5 font-mono text-[10px] uppercase transition-colors rounded-none ${
                activeTab === 'infinite'
                  ? 'bg-zinc-800 text-zinc-100 border-b border-[#9C8465]'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              [ INFINITE_SCROLL ]
            </button>
          </div>
        </div>
      </div>

      {/* Connection Indicator Alert Banner for Offline States */}
      {latency === 'offline' && (
        <div id="offline-cooperative-banner" className="bg-zinc-950 border border-red-900/50 p-4 font-mono text-xs text-red-400 flex items-center justify-between">
          <span>[ STATUS: ENVIRONMENT_OFFLINE // READING_LOCAL_SERVICE_CACHE ]</span>
          <span className="text-[10px] opacity-60">LOC_CACHE_LOCK_01772</span>
        </div>
      )}

      {/* 1. SKELETON SCREENS (The Symmetrical Sine Wave Architectural Blueprints) */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="roster-skeletons-wrapper">
          {Array.from({ length: itemsPerPage }).map((_, i) => (
            <div
              key={`roster-skeleton-${i}`}
              id={`blueprint-wireframe-${i}`}
              className="border border-zinc-800 bg-zinc-950/40 p-5 aspect-[4/5] flex flex-col justify-between relative overflow-hidden"
            >
              {/* Symmetrical Sine-Wave pulsing overlay (unless prefers-reduced-motion) */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/10 to-transparent ${
                  reducedMotion ? 'hidden' : 'animate-pulse'
                }`}
                style={{
                  animationDuration: '2000ms',
                }}
              />

              {/* Diagonal Drafting lines across skeleton */}
              <svg className="absolute inset-0 w-full h-full stroke-zinc-900/40" strokeWidth="1">
                <line x1="0" y1="0" x2="100%" y2="100%" />
                <line x1="100%" y1="0" x2="0" y2="100%" />
              </svg>

              <div>
                <div className="h-4 w-28 bg-zinc-800/50 mb-2" />
                <div className="h-3 w-40 bg-zinc-900/50" />
              </div>

              {/* Monospace Bracket Wireframe Placeholder */}
              <div className="flex justify-between items-end border-t border-zinc-900/60 pt-4 font-mono text-[9px] text-zinc-600">
                <span>[ REACH: RECH // 0.0M ]</span>
                <span>[ SKELE_GRID_{i} ]</span>
              </div>
            </div>
          ))}
        </div>
      ) : filteredCreators.length === 0 ? (
        /* 2. EMPTY STATES (Vacant Grid Coordinate Sectors) */
        <div
          id="sector-prone-empty-state"
          className="border border-zinc-800 bg-zinc-950/20 py-20 px-8 text-center flex flex-col items-center justify-center relative"
        >
          {/* Layout coordinates design wire */}
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest bg-zinc-950 border border-zinc-800 px-3 py-1 mb-4">
            [ STATUS: SECTOR_PRONE // VACANT_GRID ]
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-sm leading-relaxed mb-6">
            No campaigns or creators match the selected coordinate filters. Reset parameters to reconstruct layout.
          </p>
          <button
            onClick={() => setFilterQuery('')}
            id="btn-reset-coordinates"
            className="border border-[#9C8465] hover:bg-[#9C8465] hover:text-zinc-950 transition-colors py-2 px-6 font-mono text-xs text-[#9C8465] uppercase rounded-none"
          >
            [ RESET_COORDINATE_FILTERS ]
          </button>
        </div>
      ) : (
        /* 3. DYNAMIC CREATOR PORTFOLIOS CARDS (The Aperture Exposure Reveal) */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="creators-active-grid">
          {items.map((creator, index) => {
            const isImageLoaded = imageLoadedStates[creator.id];
            const isVideoActive = activeVideoCreatorId === creator.id;
            const isVideoBuffering = videoBufferingId === creator.id;

            return (
              <div
                key={creator.id}
                id={`creator-card-${creator.id}`}
                className="group border border-zinc-800 bg-zinc-950/40 p-5 rounded-none relative flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image viewport (Aperture Exposure Fade & Zoom Shift) */}
                  <div className="relative aspect-video overflow-hidden border border-zinc-900 bg-zinc-950 mb-4" id={`media-viewport-${creator.id}`}>
                    
                    {/* Low-Res Blurred Placeholder initially */}
                    {!isImageLoaded && (
                      <div className="absolute inset-0 bg-zinc-900 filter blur-md animate-pulse" />
                    )}

                    {/* Main documentary image */}
                    {!isVideoActive && (
                      <img
                        src={creator.avatar}
                        alt={`${creator.name} portrait`}
                        referrerPolicy="no-referrer"
                        onLoad={() => handleImageLoadComplete(creator.id)}
                        className={`w-full h-full object-cover transition-all duration-[1000ms] ${
                          reducedMotion ? 'scale-100 saturate-50' : 'group-hover:scale-105 saturate-0 group-hover:saturate-100 group-hover:brightness-100 brightness-75'
                        } ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                          clipPath: isImageLoaded && !reducedMotion ? 'inset(0% 0% 0% 0%)' : 'inset(0% 50% 0% 50%)',
                          transitionTimingFunction: 'cubic-bezier(0.35, 1, 0.65, 1)' // Chronos Curve
                        }}
                      />
                    )}

                    {/* Playhead Buffer Overlay Loading Indicator */}
                    {isVideoBuffering && (
                      <div className="absolute inset-0 bg-zinc-950/80 flex flex-col justify-center items-center font-mono text-[9px] text-[#9C8465] z-10 gap-2">
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>[ BUFFERING_CINEMATIC_REEL // 2.0s ]</span>
                      </div>
                    )}

                    {/* Active Cinematic Video Player (Plays silent looping background content) */}
                    {isVideoActive && !lowPowerMode && (
                      <div className="absolute inset-0 bg-zinc-950">
                        <video
                          src={creator.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          id={`cinematic-video-player-${creator.id}`}
                        />
                        {/* Close video trigger */}
                        <button
                          onClick={() => setActiveVideoCreatorId(null)}
                          id={`btn-close-video-${creator.id}`}
                          className="absolute top-2 right-2 bg-zinc-950/80 border border-zinc-800 p-1 text-zinc-400 hover:text-zinc-100"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    {/* Trigger play icon overlay */}
                    {!isVideoActive && !isVideoBuffering && !lowPowerMode && (
                      <button
                        onClick={() => handlePlayVideoCampaign(creator.id)}
                        id={`btn-play-campaign-${creator.id}`}
                        className="absolute bottom-3 right-3 bg-zinc-950/90 border border-zinc-800 p-2 text-zinc-300 hover:text-white hover:border-[#9C8465] transition-colors"
                        title="Buffer and play widescreen cinematic showreel"
                      >
                        <Play className="w-3 h-3 fill-current" />
                      </button>
                    )}
                  </div>

                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">
                    [ ID: {creator.id} // {creator.role} ]
                  </span>
                  <h4 className="font-sans font-medium text-lg text-zinc-100 mt-1">{creator.name}</h4>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed mt-2">{creator.bio}</p>
                </div>

                {/* Micro Stats Row */}
                <div className="border-t border-zinc-900 mt-4 pt-3 flex justify-between items-center font-mono text-[10px] text-zinc-500">
                  <span>REACH: <strong className="text-zinc-300">{creator.reach}</strong></span>
                  <span>CAMPAIGNS: <strong className="text-zinc-300">{creator.campaigns}</strong></span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination View (Instant Page Swap Transition Standard) */}
      {activeTab === 'pagination' && filteredCreators.length > itemsPerPage && !isLoading && (
        <div className="flex justify-between items-center border-t border-zinc-800 pt-6 font-mono text-xs" id="pagination-controls">
          <button
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
            id="btn-pagination-prev"
            className="border border-zinc-800 bg-zinc-950/40 px-4 py-2 hover:border-[#9C8465] hover:text-[#9C8465] transition-colors disabled:opacity-40 disabled:pointer-events-none rounded-none uppercase"
          >
            [ PREVIOUS_PAGE ]
          </button>

          <span className="text-zinc-500">
            PAGE <span className="text-zinc-200">{page}</span> OF <span className="text-zinc-200">{totalPages}</span>
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
            id="btn-pagination-next"
            className="border border-zinc-800 bg-zinc-950/40 px-4 py-2 hover:border-[#9C8465] hover:text-[#9C8465] transition-colors disabled:opacity-40 disabled:pointer-events-none rounded-none uppercase"
          >
            [ NEXT_PAGE ]
          </button>
        </div>
      )}

      {/* Infinite Scroll Horizon element */}
      {activeTab === 'infinite' && items.length < filteredCreators.length && (
        <div ref={observerRef} className="py-8 flex justify-center items-center border-t border-zinc-900" id="infinite-scroll-trigger">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest animate-pulse">
            [ SYNCHRONIZING_DATABASE // RESOLVING_PORTFOLIO... ]
          </span>
        </div>
      )}
    </div>
  );
}
