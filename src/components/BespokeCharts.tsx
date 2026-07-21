import React, { useState, useEffect, useRef } from 'react';
import { ChartDataPoint } from '../types';

interface BespokeChartsProps {
  data: ChartDataPoint[];
  demographics: { label: string; percentage: number; color: string }[];
  reducedMotion?: boolean;
  lowPowerMode?: boolean;
}

export default function BespokeCharts({
  data,
  demographics,
  reducedMotion = false,
  lowPowerMode = false
}: BespokeChartsProps) {
  const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null);
  const [activeNodeIndex, setActiveNodeIndex] = useState<number | null>(null);
  const [activeDonutIndex, setActiveDonutIndex] = useState<number | null>(null);

  // States to trigger animations
  const [animateProgress, setAnimateProgress] = useState<number>(0);

  useEffect(() => {
    if (reducedMotion || lowPowerMode) {
      setAnimateProgress(1);
      return;
    }

    const timer = setTimeout(() => {
      setAnimateProgress(1);
    }, 150);

    return () => clearTimeout(timer);
  }, [reducedMotion, lowPowerMode]);

  // Chart Dimensions for SVG calculations
  const width = 500;
  const height = 200;
  const padding = 30;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Max value to scale calculations
  const maxValue = Math.max(...data.map(d => d.value));

  // Compute Coordinates for Line & Area Chart
  const points = data.map((d, i) => {
    const x = padding + (i * chartWidth) / (data.length - 1);
    const y = height - padding - (d.value * chartHeight) / maxValue;
    return { x, y, label: d.label, value: d.value };
  });

  const secondaryPoints = data.map((d, i) => {
    const x = padding + (i * chartWidth) / (data.length - 1);
    const y = height - padding - (d.secondary * chartHeight) / maxValue;
    return { x, y, label: d.label, value: d.secondary };
  });

  // Create SVG path strings
  const createLinePath = (coords: { x: number; y: number }[]) => {
    return coords.reduce((acc, curr, i) => {
      return i === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`;
    }, '');
  };

  const createAreaPath = (coords: { x: number; y: number }[]) => {
    if (coords.length === 0) return '';
    const linePath = createLinePath(coords);
    return `${linePath} L ${coords[coords.length - 1].x} ${height - padding} L ${coords[0].x} ${height - padding} Z`;
  };

  // SVG Line lengths for stroke-dasharray animations
  const primaryLineLength = 500; // Estimated length for animation

  // Donut chart path variables
  let accumulatedPercentage = 0;

  return (
    <div id="bespoke-charts-container" className="space-y-12">
      {/* 1. Line & Area Chart (The Volumetric Shift & Vector Inscription) */}
      <div id="trend-chart-card" className="border border-zinc-800 bg-zinc-950/40 p-6 rounded-none relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">[ AUDIT // NETWORK_PERFORMANCE ]</span>
            <h4 className="font-sans font-medium text-lg text-zinc-200 mt-1">Brand Growth Timeline</h4>
          </div>
          <div className="flex items-center gap-6 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-[2px] bg-[#9C8465]" />
              <span className="text-zinc-400">Direct Sponsorships</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-[2px] bg-zinc-600 border-t border-dashed border-zinc-400" />
              <span className="text-zinc-500">Co-Production Capital</span>
            </div>
          </div>
        </div>

        {/* Chart Viewport */}
        <div className="relative h-[220px] w-full" id="trend-chart-viewport">
          <svg
            className="w-full h-full overflow-visible"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
          >
            {/* Grid Coordinates */}
            <g stroke="#1D1D22" strokeWidth="1" strokeDasharray="2 2">
              <line x1={padding} y1={padding} x2={width - padding} y2={padding} />
              <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} />
              <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} />
              
              {/* Vertical coordinate separators */}
              {points.map((p, i) => (
                <line key={`v-grid-${i}`} x1={p.x} y1={padding} x2={p.x} y2={height - padding} />
              ))}
            </g>

            {/* Area Shader (The Volumetric Shift) */}
            <path
              d={createAreaPath(points)}
              fill="url(#area-gradient)"
              opacity={animateProgress * 0.75}
              className="transition-opacity duration-1000 ease-out"
            />

            {/* Gradient definition for desaturated bronze/steel area */}
            <defs>
              <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9C8465" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#9C8465" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Secondary line (Dashed) */}
            <path
              d={createLinePath(secondaryPoints)}
              fill="none"
              stroke="#52525B"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              strokeDashoffset={reducedMotion || lowPowerMode ? 0 : (1 - animateProgress) * primaryLineLength}
              className="transition-all duration-[1200ms] ease-out"
              style={{ strokeDasharray: '4 4, 1000' }}
            />

            {/* Primary trend path (The Vector Inscription) */}
            <path
              d={createLinePath(points)}
              fill="none"
              stroke="#9C8465"
              strokeWidth="2"
              strokeDasharray={`${primaryLineLength} ${primaryLineLength}`}
              strokeDashoffset={reducedMotion || lowPowerMode ? 0 : (1 - animateProgress) * primaryLineLength}
              className="transition-all duration-[1500ms] ease-out"
            />

            {/* Interactive Nodes */}
            {points.map((p, i) => {
              const isHovered = activeNodeIndex === i;
              return (
                <g key={`node-${i}`} className="cursor-pointer">
                  {/* Invisible broad touch/hover target */}
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="12"
                    fill="transparent"
                    onMouseEnter={() => setActiveNodeIndex(i)}
                    onMouseLeave={() => setActiveNodeIndex(null)}
                  />
                  {/* Visual Node representation */}
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isHovered ? "5" : "3.5"}
                    fill={isHovered ? "#9C8465" : "#0A0A0C"}
                    stroke={isHovered ? "#FFF" : "#9C8465"}
                    strokeWidth={isHovered ? "2" : "1.5"}
                    className="transition-all duration-150"
                  />
                </g>
              );
            })}
          </svg>

          {/* Hover Tooltip display (The Focal Lens) */}
          {activeNodeIndex !== null && (
            <div
              className="absolute pointer-events-none bg-zinc-950/90 border border-zinc-800 p-3 backdrop-blur-md transition-all duration-150 ease-out z-10 scale-95"
              style={{
                left: `${(points[activeNodeIndex].x / width) * 100}%`,
                top: `${(points[activeNodeIndex].y / height) * 100 - 35}%`,
                transform: 'translate(-50%, -100%)',
              }}
              id="node-hover-tooltip"
            >
              <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider mb-1">
                [ FOCUS_NODE // {points[activeNodeIndex].label} ]
              </div>
              <div className="font-mono text-xs text-zinc-200">
                VALUE: <span className="text-zinc-100 font-bold">{points[activeNodeIndex].value}M</span>
              </div>
              <div className="font-mono text-[9px] text-zinc-500 mt-1">
                CO-PRODUCTION SECURE
              </div>
            </div>
          )}
        </div>

        {/* Textual legends */}
        <div className="flex justify-between items-center px-6 mt-2 font-mono text-[10px] text-zinc-500 border-t border-zinc-900 pt-3">
          <span>COORDINATE_START</span>
          <span>TIMESTAMP_ACTIVE // REALTIME</span>
          <span>COORDINATE_END</span>
        </div>
      </div>

      {/* 2. Grid split layout for Columns & Demographics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="secondary-charts-grid">
        {/* Bar Chart (The Column Rise) */}
        <div id="bar-chart-card" className="border border-zinc-800 bg-zinc-950/40 p-6 rounded-none relative">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">[ AUDIT // OUTCOME_DISTRIBUTION ]</span>
          <h4 className="font-sans font-medium text-lg text-zinc-200 mt-1 mb-6">Regional Creative Assets</h4>

          <div className="relative h-[180px] w-full" id="bar-chart-viewport">
            <svg
              className="w-full h-full overflow-visible"
              viewBox={`0 0 ${width} ${height}`}
              preserveAspectRatio="none"
            >
              {/* Grid Horizontal Ticks */}
              <g stroke="#1D1D22" strokeWidth="1" strokeDasharray="2 2">
                <line x1={padding} y1={padding} x2={width - padding} y2={padding} />
                <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} />
                <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} />
              </g>

              {/* Columns (The Column Rise) */}
              {data.map((d, i) => {
                const colWidth = 32;
                const x = padding + (i * chartWidth) / (data.length - 1) - colWidth / 2;
                const colHeight = (d.value * chartHeight) / maxValue;
                const y = height - padding - colHeight;

                const isHovered = activeBarIndex === i;

                return (
                  <g key={`bar-${i}`} className="cursor-pointer">
                    {/* Active Column */}
                    <rect
                      x={x}
                      y={reducedMotion || lowPowerMode ? y : height - padding - (colHeight * animateProgress)}
                      width={colWidth}
                      height={reducedMotion || lowPowerMode ? colHeight : colHeight * animateProgress}
                      fill={isHovered ? '#9C8465' : '#1D1D22'}
                      stroke={isHovered ? '#FFF' : '#3F3F46'}
                      strokeWidth="1"
                      className="transition-all duration-300 ease-out"
                      onMouseEnter={() => setActiveBarIndex(i)}
                      onMouseLeave={() => setActiveBarIndex(null)}
                    />
                    {/* Text Label on Column */}
                    <text
                      x={x + colWidth / 2}
                      y={height - 10}
                      fill="#52525B"
                      fontSize="10"
                      fontFamily="JetBrains Mono, monospace"
                      textAnchor="middle"
                    >
                      {d.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Hover Tooltip display */}
            {activeBarIndex !== null && (
              <div
                className="absolute pointer-events-none bg-zinc-950/90 border border-zinc-800 p-3 backdrop-blur-md transition-all duration-150 z-10 scale-95"
                style={{
                  left: `${(padding + (activeBarIndex * chartWidth) / (data.length - 1)) / width * 100}%`,
                  top: `${(height - padding - ((data[activeBarIndex].value * chartHeight) / maxValue)) / height * 100 - 15}%`,
                  transform: 'translate(-50%, -100%)',
                }}
                id="bar-hover-tooltip"
              >
                <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider mb-1">
                  [ BAR_NODE // {data[activeBarIndex].label} ]
                </div>
                <div className="font-mono text-xs text-zinc-200">
                  REACH: <span className="text-[#9C8465] font-bold">{data[activeBarIndex].value}M</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Donut Chart (The Sector Divide) */}
        <div id="donut-chart-card" className="border border-zinc-800 bg-zinc-950/40 p-6 rounded-none relative flex flex-col justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">[ AUDIT // ALLIANCE_COMPOSITION ]</span>
            <h4 className="font-sans font-medium text-lg text-zinc-200 mt-1 mb-6">Audience Demographics</h4>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Donut Render */}
            <div className="relative w-36 h-36 flex-shrink-0" id="donut-chart-viewport">
              <svg className="w-full h-full -rotate-90 overflow-visible" viewBox="0 0 100 100">
                {demographics.map((item, i) => {
                  const strokeWidth = 10;
                  const radius = 40;
                  const circumference = 2 * Math.PI * radius;
                  const strokeDashoffset = circumference - (item.percentage / 100) * circumference;
                  const rotation = accumulatedPercentage;
                  accumulatedPercentage += (item.percentage / 100) * circumference;

                  const isHovered = activeDonutIndex === i;

                  return (
                    <circle
                      key={`donut-slice-${i}`}
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="transparent"
                      stroke={isHovered ? '#9C8465' : item.color}
                      strokeWidth={isHovered ? strokeWidth + 2 : strokeWidth}
                      strokeDasharray={circumference}
                      strokeDashoffset={reducedMotion || lowPowerMode ? strokeDashoffset : circumference - (item.percentage / 100) * circumference * animateProgress}
                      className="transition-all duration-1000 ease-out cursor-pointer"
                      style={{
                        transform: `rotate(${(rotation / circumference) * 360}deg)`,
                        transformOrigin: '50% 50%',
                      }}
                      onMouseEnter={() => setActiveDonutIndex(i)}
                      onMouseLeave={() => setActiveDonutIndex(null)}
                    />
                  );
                })}
              </svg>
              {/* Central Text Panel */}
              <div className="absolute inset-0 flex flex-col justify-center items-center font-mono">
                <span className="text-[9px] text-zinc-500 uppercase tracking-tighter">TOTAL</span>
                <span className="text-sm text-zinc-200 font-medium">100%</span>
              </div>
            </div>

            {/* Explanatory Demographics Columns */}
            <div className="flex-1 space-y-3 font-mono text-xs w-full">
              {demographics.map((item, i) => (
                <div
                  key={`demo-legend-${i}`}
                  className={`flex justify-between items-center p-2 border-l-2 transition-all duration-150 ${
                    activeDonutIndex === i ? 'border-[#9C8465] bg-zinc-900/30' : 'border-zinc-800'
                  }`}
                  onMouseEnter={() => setActiveDonutIndex(i)}
                  onMouseLeave={() => setActiveDonutIndex(null)}
                >
                  <span className="text-zinc-400">{item.label}</span>
                  <span className="text-zinc-200 font-semibold">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Non-Visual Tabular Accessibility Fallback (Universal Readability) */}
      <table className="sr-only" id="tabular-data-ledger" aria-label="Valtreon Network Performance Statistics">
        <thead>
          <tr>
            <th scope="col">Quarter</th>
            <th scope="col">Brand Reach (Millions)</th>
            <th scope="col">Secondary Reach (Millions)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={`tabular-row-${i}`}>
              <td>{d.label}</td>
              <td>{d.value}M</td>
              <td>{d.secondary}M</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
