import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  TrendingUp,
  Download,
  Filter,
  CheckCircle2,
  Sparkles,
  Layers,
  BarChart3,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  RefreshCw,
  Copy,
  Check,
  Info,
  ShieldCheck,
  FileSpreadsheet,
  Zap,
  Clock
} from 'lucide-react';
import DecryptCounter from './DecryptCounter';
import BespokeCharts from './BespokeCharts';
import { Metric, ChartDataPoint, LatencyTier } from '../types';

export interface ExtendedMetric extends Metric {
  category: 'financial' | 'retention' | 'reach' | 'speed';
  subtitle: string;
  auditHash: string;
}

export const EXTENDED_METRICS: ExtendedMetric[] = [
  {
    id: 'acv-avg',
    label: 'AVERAGE ACV DEAL SIZE',
    value: 124500,
    format: 'currency',
    trend: 'up',
    change: '+18.4% YoY',
    category: 'financial',
    subtitle: '$75K Contract Floor Guarantee',
    auditHash: '0x8F4A...12E9',
  },
  {
    id: 'audience-retention',
    label: 'AUDIENCE RETENTION FLOOR',
    value: 84.6,
    format: 'percent',
    trend: 'up',
    change: '+6.2% vs Industry',
    category: 'retention',
    subtitle: 'Verified 3-min+ Article Reads',
    auditHash: '0x3C92...99B1',
  },
  {
    id: 'csat-audit',
    label: 'CLIENT CSAT SCORE',
    value: 98.4,
    format: 'percent',
    trend: 'up',
    change: '42 Enterprise Brands',
    category: 'retention',
    subtitle: 'Zero Ad Unit Contamination',
    auditHash: '0x1A09...44F2',
  },
  {
    id: 'impression-volume',
    label: 'MONTHLY IMPRESSION VOLUME',
    value: 14200000,
    format: 'number',
    trend: 'up',
    change: '14.2M Direct Views',
    category: 'reach',
    subtitle: 'Signed Direct Editorial Audience',
    auditHash: '0x77E1...00A3',
  },
  {
    id: 'audit-latency',
    label: 'AUDIT QUERY LATENCY',
    value: 120,
    format: 'number',
    trend: 'up',
    change: '120ms Sub-Hz',
    category: 'speed',
    subtitle: 'Zero-Cookie Telemetry Log',
    auditHash: '0x09B2...8831',
  },
  {
    id: 'co-production-capital',
    label: 'TOTAL CAPITAL UNDERWRITE',
    value: 3850000,
    format: 'currency',
    trend: 'up',
    change: '$3.85M Committed',
    category: 'financial',
    subtitle: 'Direct Film & Research Funds',
    auditHash: '0xE11F...72C0',
  },
];

export const TIME_SERIES_DATA_2025: ChartDataPoint[] = [
  { label: 'Q1 2025', value: 3.2, secondary: 2.1 },
  { label: 'Q2 2025', value: 5.8, secondary: 3.9 },
  { label: 'Q3 2025', value: 8.4, secondary: 5.4 },
  { label: 'Q4 2025', value: 11.2, secondary: 7.8 },
  { label: 'Q1 2026', value: 14.2, secondary: 9.6 },
];

export const TIME_SERIES_DATA_2024: ChartDataPoint[] = [
  { label: 'Q1 2024', value: 1.8, secondary: 1.1 },
  { label: 'Q2 2024', value: 2.9, secondary: 2.0 },
  { label: 'Q3 2024', value: 4.1, secondary: 3.1 },
  { label: 'Q4 2024', value: 6.5, secondary: 4.8 },
  { label: 'Q1 2025', value: 8.8, secondary: 6.2 },
];

export const DEMOGRAPHICS_DATA = [
  { label: 'C-Suite & Founders', percentage: 42, color: '#9C8465' },
  { label: 'Creative Directors', percentage: 28, color: '#D4AF37' },
  { label: 'Investment Principals', percentage: 18, color: '#71717A' },
  { label: 'Specialist Journalists', percentage: 12, color: '#3F3F46' },
];

interface StatisticsSectionProps {
  latency?: LatencyTier;
  reducedMotion?: boolean;
  lowPowerMode?: boolean;
}

export default function StatisticsSection({
  latency = 'fast',
  reducedMotion = false,
  lowPowerMode = false,
}: StatisticsSectionProps) {
  // Intersection Observer State
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Filters & Selected State
  const [activeCategory, setActiveCategory] = useState<'all' | 'financial' | 'retention' | 'reach' | 'speed'>('all');
  const [selectedMetric, setSelectedMetric] = useState<ExtendedMetric | null>(EXTENDED_METRICS[0]);
  const [timeSeriesYear, setTimeSeriesYear] = useState<'2025' | '2024'>('2025');
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportSuccess, setExportSuccess] = useState<boolean>(false);

  // UTC Live Time Code
  const [utcTime, setUtcTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      setUtcTime(new Date().toISOString().substring(11, 19) + ' UTC');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer Trigger
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Filter metrics based on category
  const filteredMetrics = EXTENDED_METRICS.filter(
    (m) => activeCategory === 'all' || m.category === activeCategory
  );

  const activeChartData = timeSeriesYear === '2025' ? TIME_SERIES_DATA_2025 : TIME_SERIES_DATA_2024;

  const handleCopyHash = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const handleExportData = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportSuccess(true);
      
      // Create downloadable JSON payload
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(EXTENDED_METRICS, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `VALTREON_AUDIT_TELEMETRY_${Date.now()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();

      setTimeout(() => setExportSuccess(false), 3000);
    }, 800);
  };

  return (
    <section
      ref={sectionRef}
      id="performance-dashboard"
      aria-labelledby="statistics-heading"
      className="bg-[#080809] border-b border-[#222226] py-20 md:py-28 text-zinc-300 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full bg-[radial-gradient(#9C8465_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* 1. SECTION HEADER & TELEMETRY BADGE */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-[#222226] pb-8">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase">
              <span className="px-2.5 py-1 bg-[#111113] border border-[#222226] text-[#9C8465] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                [ CHAPTER_02 // PERFORMANCE_METRIC_ENGINE ]
              </span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-400">LATENCY: {latency === 'fast' ? '120ms' : '500ms'}</span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-500">{utcTime}</span>
            </div>

            <h2 id="statistics-heading" className="font-sans font-medium text-3xl md:text-4xl text-zinc-100 tracking-tight">
              Direct Co-Production Audit & Telemetry
            </h2>
            <p className="font-sans text-xs md:text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Real-time campaign performance analytics. Tabular alphanumeric counters decrypted at 120Hz under our strict mechanical accuracy standards with zero cookie tracking.
            </p>
          </div>

          {/* ACTION BUTTONS: EXPORT AUDIT & REFRESH */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <button
              onClick={handleExportData}
              disabled={isExporting}
              className="px-4 py-2.5 bg-[#9C8465] hover:bg-[#B39977] text-white font-semibold flex items-center gap-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080809]"
              aria-label="Export Telemetry Audit JSON Report"
            >
              {isExporting ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              ) : exportSuccess ? (
                <Check className="w-3.5 h-3.5 text-emerald-300" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span className="text-[11px] uppercase">
                {isExporting ? 'COMPILING JSON...' : exportSuccess ? 'AUDIT DOWNLOADED' : 'EXPORT TELEMETRY REPORT'}
              </span>
            </button>

            {/* Time Series Year Selector */}
            <div className="flex border border-[#222226] bg-[#111113] p-0.5">
              <button
                onClick={() => setTimeSeriesYear('2025')}
                className={`px-3 py-1.5 text-[10px] uppercase transition-colors cursor-pointer ${
                  timeSeriesYear === '2025' ? 'bg-[#9C8465] text-white font-semibold' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                2025 FORECAST
              </button>
              <button
                onClick={() => setTimeSeriesYear('2024')}
                className={`px-3 py-1.5 text-[10px] uppercase transition-colors cursor-pointer ${
                  timeSeriesYear === '2024' ? 'bg-[#9C8465] text-white font-semibold' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                2024 AUDIT
              </button>
            </div>
          </div>
        </div>

        {/* 2. CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs border-b border-[#222226] pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-zinc-500 text-[10px] uppercase mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#9C8465]" /> FILTER BY CATEGORY:
            </span>
            {(['all', 'financial', 'retention', 'reach', 'speed'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 border text-[10px] uppercase transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1A1A1E] border-[#9C8465] text-white font-semibold'
                    : 'bg-[#111113] border-[#222226] text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-[10px] text-zinc-500 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#9C8465]" />
            <span>AUDIT TYPE: INDEPENDENT THIRD-PARTY CO-PROD</span>
          </div>
        </div>

        {/* 3. BENTO GRID OF METRICS WITH DECRYPT COUNTERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4" id="dashboard-metric-grids">
          {filteredMetrics.map((m) => {
            const isSelected = selectedMetric?.id === m.id;
            return (
              <motion.div
                key={m.id}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedMetric(m)}
                className={`group border p-4 flex flex-col justify-between h-40 cursor-pointer transition-all relative ${
                  isSelected
                    ? 'bg-[#1A1A1E] border-[#9C8465] shadow-lg shadow-[#9C8465]/10'
                    : 'bg-[#111113] border-[#222226] hover:border-[#9C8465]/50'
                }`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedMetric(m);
                  }
                }}
                aria-label={`${m.label}: ${m.value}. ${m.subtitle}`}
              >
                {/* Top Label & Trend */}
                <div className="flex justify-between items-start gap-2">
                  <span className="font-mono text-[9px] text-zinc-500 group-hover:text-zinc-300 uppercase tracking-wider block transition-colors">
                    {m.label}
                  </span>
                  <span className="font-mono text-[9px] text-emerald-400 bg-emerald-950/30 px-1.5 py-0.5 border border-emerald-900/50 shrink-0">
                    {m.change}
                  </span>
                </div>

                {/* Animated Decrypt Counter Value */}
                <div className="text-2xl lg:text-3xl font-mono text-zinc-100 font-bold my-2" id={`metric-value-wrap-${m.id}`}>
                  {isVisible ? (
                    <DecryptCounter
                      value={m.value}
                      format={m.format}
                      disabled={reducedMotion || lowPowerMode}
                    />
                  ) : (
                    <span>---</span>
                  )}
                </div>

                {/* Subtitle & Audit Hash Tag */}
                <div className="border-t border-[#222226] pt-2 flex justify-between items-center font-mono text-[9px] text-zinc-500">
                  <span className="truncate text-zinc-400">{m.subtitle}</span>
                  <span className="text-[#9C8465] opacity-0 group-hover:opacity-100 transition-opacity">
                    [INSPECT]
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4. ACTIVE METRIC DETAILED AUDIT INSPECTOR CARD */}
        {selectedMetric && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="bg-[#111113] border border-[#222226] p-6 relative font-mono text-xs space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#222226] pb-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#9C8465]" />
                <span className="text-zinc-200 font-semibold uppercase">{selectedMetric.label} DOSSIER</span>
                <span className="text-zinc-600">//</span>
                <span className="text-emerald-400 bg-emerald-950/40 px-2 py-0.5 border border-emerald-900/50 text-[10px]">
                  VERIFIED AUDIT STATUS: GREEN
                </span>
              </div>

              <div className="flex items-center gap-3 text-zinc-400 text-[11px]">
                <span>HASH: <strong className="text-zinc-200">{selectedMetric.auditHash}</strong></span>
                <button
                  onClick={() => handleCopyHash(selectedMetric.auditHash)}
                  className="p-1.5 bg-[#1A1A1E] border border-[#222226] hover:border-[#9C8465] text-zinc-300 transition-colors cursor-pointer"
                  title="Copy Audit Hash"
                >
                  {copiedHash ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px] text-zinc-400">
              <div className="space-y-1">
                <span className="text-zinc-500 uppercase text-[9px] block">PRIMARY AUDIT CRITERIA</span>
                <p className="text-zinc-200">{selectedMetric.subtitle}</p>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-500 uppercase text-[9px] block">GROWTH DELTA (12-MONTH)</span>
                <p className="text-emerald-400 font-semibold">{selectedMetric.change}</p>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-500 uppercase text-[9px] block">DATA GUARANTEE</span>
                <p className="text-zinc-200">100% On-Chain & Direct Publisher Contract Logs</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* 5. BESPOKE INTERACTIVE CHARTS STAGE */}
        <div className="pt-6">
          <BespokeCharts
            data={activeChartData}
            demographics={DEMOGRAPHICS_DATA}
            reducedMotion={reducedMotion}
            lowPowerMode={lowPowerMode}
          />
        </div>

        {/* 6. ACCESSIBLE DATA TABLE FOR SCREEN READERS */}
        <table className="sr-only" id="tabular-data-ledger" aria-label="Valtreon Performance Metrics Table">
          <caption>Detailed Performance Telemetry Metrics</caption>
          <thead>
            <tr>
              <th scope="col">Metric Label</th>
              <th scope="col">Value</th>
              <th scope="col">Trend Delta</th>
              <th scope="col">Category</th>
              <th scope="col">Audit Hash</th>
            </tr>
          </thead>
          <tbody>
            {EXTENDED_METRICS.map((m) => (
              <tr key={m.id}>
                <td>{m.label}</td>
                <td>{m.value}</td>
                <td>{m.change}</td>
                <td>{m.category}</td>
                <td>{m.auditHash}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
