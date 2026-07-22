import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  ChevronDown,
  ChevronUp,
  X,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  FileText,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers,
  Building2,
  Film
} from 'lucide-react';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Co-Production & Rights' | 'Zero-Ad Telemetry' | 'Director Network' | 'Underwriting & Pricing' | 'Security & Privacy';
  tags: string[];
  featured?: boolean;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Co-Production & Rights',
    question: 'How does VMN Studios co-production licensing differ from traditional agency models?',
    answer:
      'Unlike traditional ad agencies that rent creative assets with recurring usage fees, VMN Studios delivers perpetual, sovereign broadcast and digital exhibition rights for all master films, 35mm photographic archives, and spatial sound compositions. You retain 100% IP ownership without recurring platform tax or license renewals.',
    tags: ['licensing', 'ip ownership', 'co-production', 'rights'],
    featured: true,
  },
  {
    id: 'faq-2',
    category: 'Zero-Ad Telemetry',
    question: 'What is Zero-Ad Telemetry and how does it protect reader privacy?',
    answer:
      'Zero-Ad Telemetry is our proprietary, zero-cookie analytics framework audited by independent third parties (e.g. KPMG standards). We measure audience dwell time, read completion rates, and high-intent engagement without injecting third-party tracking pixels, programmatic ad networks, or invasive cross-site fingerprinting.',
    tags: ['privacy', 'zero-cookie', 'telemetry', 'audit', 'gdpr'],
    featured: true,
  },
  {
    id: 'faq-3',
    category: 'Director Network',
    question: 'How are directors and cinematographers matched to brand dossiers?',
    answer:
      'Our creative roster features world-renowned directors, 35mm photojournalists, and Dolby Atmos audio engineers—such as Claire Dupont and Kenzo Takahashi. Based on your brand industry, geographic location, and narrative requirements, we assign a dedicated director team with guaranteed exclusivity in your sector.',
    tags: ['directors', 'roster', 'creators', 'exclusivity'],
    featured: true,
  },
  {
    id: 'faq-4',
    category: 'Underwriting & Pricing',
    question: 'What is the structure for sovereign campaign underwriting?',
    answer:
      'Underwriting operates on a transparent, milestone-based co-production agreement. Budgets typically range from $150K to $1.2M depending on film scale (e.g., 35mm sub-polar expeditions vs 10,000-word research dossiers). 100% of capital is allocated directly to production, research, and guaranteed distribution.',
    tags: ['pricing', 'budget', 'underwriting', 'milestones'],
    featured: true,
  },
  {
    id: 'faq-5',
    category: 'Security & Privacy',
    question: 'Can private briefing dossiers be NDA-protected prior to commitment?',
    answer:
      'Yes. All initial client briefings and confidential IP discussions are conducted under formal bilateral Non-Disclosure Agreements (NDAs). Your brand collateral and unreleased hardware specifications remain protected inside encrypted sovereign servers.',
    tags: ['nda', 'security', 'confidentiality', 'privacy'],
    featured: false,
  },
  {
    id: 'faq-6',
    category: 'Co-Production & Rights',
    question: 'What formats are delivered upon campaign completion?',
    answer:
      'Deliverables include 4K Anamorphic video masters (16:9 & 9:16 vertical cutdowns), high-resolution uncompressed 35mm digital stills, Dolby Atmos spatial sound masters, dedicated zero-tracker web microsites, and audited telemetry PDF reports ready for executive board presentation.',
    tags: ['deliverables', 'video', 'formats', 'dolby atmos'],
    featured: false,
  },
  {
    id: 'faq-7',
    category: 'Zero-Ad Telemetry',
    question: 'How are read completion metrics verified against bots and artificial traffic?',
    answer:
      'We run cryptographic engagement verification on server-side request logs, tracking mouse velocity, touch scroll vectors, and viewport focus time. Any non-human or VPN proxy bot traffic is filtered automatically, ensuring 100% verified human reader metrics.',
    tags: ['bot detection', 'verification', 'cryptography', 'telemetry'],
    featured: false,
  },
  {
    id: 'faq-8',
    category: 'Underwriting & Pricing',
    question: 'What is the typical timeline from briefing to campaign launch?',
    answer:
      'Standard timelines range from 4 to 8 weeks. Phase 1 (Research & Scripting) takes 10-14 days; Phase 2 (35mm Principal Photography & Sound Design) takes 14-21 days; and Phase 3 (Zero-Tracker Microsite & Telemetry Activation) takes 7-10 days.',
    tags: ['timeline', 'turnaround', 'phases', 'production'],
    featured: false,
  },
];

export const FAQ_CATEGORIES = [
  'All',
  'Co-Production & Rights',
  'Zero-Ad Telemetry',
  'Director Network',
  'Underwriting & Pricing',
  'Security & Privacy',
] as const;

interface FaqSectionProps {
  onScheduleBriefing: () => void;
  reducedMotion?: boolean;
}

export default function FaqSection({ onScheduleBriefing, reducedMotion = false }: FaqSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['faq-1', 'faq-2']));

  const accordionRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Toggle Accordion Item
  const toggleItem = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Expand All / Collapse All
  const expandAll = () => {
    setExpandedIds(new Set(filteredFaqs.map((f) => f.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  // Filter Logic
  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Keyboard navigation up/down across accordion buttons
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % filteredFaqs.length;
      const nextId = filteredFaqs[nextIndex]?.id;
      if (nextId) accordionRefs.current.get(nextId)?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + filteredFaqs.length) % filteredFaqs.length;
      const prevId = filteredFaqs[prevIndex]?.id;
      if (prevId) accordionRefs.current.get(prevId)?.focus();
    }
  };

  return (
    <section
      id="faq-section"
      aria-labelledby="faq-section-title"
      className="py-20 md:py-28 bg-[#080809] border-b border-[#222226] text-zinc-100 relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full bg-[radial-gradient(#9C8465_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* 1. SECTION HEADER */}
        <div className="space-y-4 border-b border-[#222226] pb-8 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 font-mono text-[10px] uppercase text-[#9C8465]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ CHAPTER_06 // KNOWLEDGE_BASE & DIRECTIVES ]</span>
          </div>

          <h2
            id="faq-section-title"
            className="font-sans font-medium text-3xl md:text-4xl text-zinc-100 tracking-tight"
          >
            Frequently Asked Directives & Dossier Specs
          </h2>

          <p className="font-sans text-xs md:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Essential inquiries regarding VMN co-production protocols, IP licensing models, zero-ad telemetry auditing, and executive briefing procedures.
          </p>
        </div>

        {/* 2. SEARCH BAR & CATEGORY FILTERS */}
        <div className="space-y-6 bg-[#111113] border border-[#222226] p-6">
          {/* Accessible Search Input */}
          <div className="relative">
            <label htmlFor="faq-search-input" className="sr-only">
              Search FAQ directives and dossier specs
            </label>
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords (e.g. licensing, zero-cookie, telemetry, budget, NDA)..."
              className="w-full pl-10 pr-10 py-3 bg-[#080809] border border-[#222226] focus:border-[#9C8465] text-zinc-100 text-xs font-mono placeholder-zinc-500 transition-colors focus:outline-none focus:ring-1 focus:ring-[#9C8465]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-500 hover:text-white"
                title="Clear search query"
                aria-label="Clear search input"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Pills & Bulk Action Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#222226] pt-4 font-mono text-xs">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="FAQ Categories">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 border text-[10px] uppercase transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#1A1A1E] border-[#9C8465] text-white font-semibold'
                      : 'bg-[#080809] border-[#222226] text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Expand / Collapse Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={expandAll}
                className="px-2.5 py-1 bg-[#080809] hover:bg-[#1A1A1E] border border-[#222226] text-zinc-400 hover:text-white text-[10px] uppercase transition-all cursor-pointer"
              >
                EXPAND ALL
              </button>
              <button
                onClick={collapseAll}
                className="px-2.5 py-1 bg-[#080809] hover:bg-[#1A1A1E] border border-[#222226] text-zinc-400 hover:text-white text-[10px] uppercase transition-all cursor-pointer"
              >
                COLLAPSE ALL
              </button>
            </div>
          </div>
        </div>

        {/* 3. ACCORDION LIST */}
        <div className="space-y-4" role="region" aria-label="FAQ Directives Accordion">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, idx) => {
              const isExpanded = expandedIds.has(item.id);
              const headerId = `faq-header-${item.id}`;
              const contentId = `faq-content-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={`border transition-all duration-200 ${
                    isExpanded
                      ? 'bg-[#111113] border-[#9C8465]'
                      : 'bg-[#0E0E10] border-[#222226] hover:border-zinc-700'
                  }`}
                >
                  {/* Accordion Button Header */}
                  <button
                    id={headerId}
                    aria-expanded={isExpanded}
                    aria-controls={contentId}
                    ref={(el) => {
                      if (el) accordionRefs.current.set(item.id, el);
                    }}
                    onClick={() => toggleItem(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                  >
                    <div className="space-y-1.5 pr-2">
                      <div className="flex items-center gap-2 font-mono text-[9px] uppercase">
                        <span className="text-[#9C8465] font-semibold">[{item.category}]</span>
                        {item.featured && (
                          <span className="bg-[#9C8465]/20 text-[#9C8465] border border-[#9C8465]/50 px-1.5 py-0.2 font-bold">
                            CORE PROTOCOL
                          </span>
                        )}
                      </div>

                      <h3 className="font-sans font-medium text-base md:text-lg text-zinc-100">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`p-1.5 border transition-all shrink-0 mt-1 ${
                        isExpanded
                          ? 'bg-[#9C8465] border-[#9C8465] text-white'
                          : 'bg-[#1A1A1E] border-[#222226] text-zinc-400'
                      }`}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expandable Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={contentId}
                        role="region"
                        aria-labelledby={headerId}
                        initial={reducedMotion ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={reducedMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 border-t border-[#222226] mt-1 space-y-4 font-sans text-xs md:text-sm text-zinc-300 leading-relaxed">
                          <p>{item.answer}</p>

                          {/* Tag Chips */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#1A1A1E] font-mono text-[9px]">
                            <span className="text-zinc-500 uppercase">TAGS:</span>
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-[#1A1A1E] border border-[#222226] px-2 py-0.5 text-zinc-400 uppercase"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            /* Empty Search Results State */
            <div className="bg-[#111113] border border-[#222226] p-8 text-center space-y-4">
              <HelpCircle className="w-8 h-8 text-zinc-500 mx-auto" />
              <div className="space-y-1">
                <h3 className="font-sans font-medium text-base text-zinc-200">
                  No Directives Match Your Search
                </h3>
                <p className="font-mono text-xs text-zinc-500">
                  No questions match query "{searchQuery}" under category "{selectedCategory}".
                </p>
              </div>

              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 bg-[#9C8465] hover:bg-[#B39977] text-white font-mono text-xs uppercase cursor-pointer transition-colors"
              >
                RESET FILTERS
              </button>
            </div>
          )}
        </div>

        {/* 4. PRIVATE BRIEFING HELP CTA BANNER */}
        <div className="bg-[#111113] border border-[#9C8465]/50 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-mono text-[10px] text-[#9C8465] uppercase font-semibold block">
              [ STILL HAVE UNRESOLVED QUESTIONS? ]
            </span>
            <h3 className="font-sans font-medium text-lg text-white">
              Request a Confidential Sovereign Briefing
            </h3>
            <p className="font-sans text-xs text-zinc-400">
              Our Director of Partnerships will review your brand parameters and respond within 2 hours under NDA.
            </p>
          </div>

          <button
            onClick={onScheduleBriefing}
            className="px-5 py-3 bg-[#9C8465] hover:bg-[#B39977] text-white font-mono text-xs uppercase font-semibold flex items-center gap-2 transition-all cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
          >
            <span>[ SUBMIT PRIVATE BRIEFING ]</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
