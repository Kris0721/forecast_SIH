import React, { useState } from 'react';
import { VarianceDataPoint } from '../types';
import { Calendar, Target, TrendingUp, Info } from 'lucide-react';

interface GapNarrativeSectionProps {
  varianceData: VarianceDataPoint[];
  onOpenReport: () => void;
}

export const GapNarrativeSection: React.FC<GapNarrativeSectionProps> = ({
  varianceData,
  onOpenReport,
}) => {
  const [hoveredPoint, setHoveredPoint] = useState<VarianceDataPoint | null>(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'7d' | '14d' | '30d'>('30d');

  const bustCount = varianceData.filter((d) => d.isBust).length;

  return (
    <section
      id="narrative-gap-section"
      className="py-16 md:py-24 px-6 md:px-14 flex flex-col gap-12 relative"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2
          id="gap-section-title"
          className="font-plus-jakarta text-3xl sm:text-4xl md:text-[40px] font-normal text-[#191c1e] mb-5 tracking-[0.015em]"
        >
          THE GAP BETWEEN PREDICTION AND REALITY
        </h2>
        <p
          id="gap-section-description"
          className="font-inter text-base sm:text-lg text-[#43474b] leading-relaxed font-normal"
        >
          Meteorological models often drift. Our engine ingests historical forecasts
          and compares them directly against verified API observations to pinpoint
          exact moments of failure.
        </p>
      </div>

      {/* Dashboard Preview Bento Grid */}
      <div
        id="dashboard-bento-grid"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto"
      >
        {/* Metric 1: Historical Window */}
        <div
          id="bento-metric-historical-window"
          className="glass-panel rounded-[32px] p-8 glass-border-rim flex flex-col justify-between min-h-[250px] transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/50 rounded-2xl border border-white/60 text-[#50616b]">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="font-plus-jakarta text-2xl md:text-3xl font-medium text-[#191c1e]">
                {selectedTimeframe === '7d' ? '7 Days' : selectedTimeframe === '14d' ? '14 Days' : '30 Days'}
              </h4>
            </div>
            
            {/* Timeframe pill selector */}
            <div className="flex bg-white/40 p-1 rounded-full border border-white/50 text-xs font-inter">
              {(['7d', '14d', '30d'] as const).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setSelectedTimeframe(tf)}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    selectedTimeframe === tf
                      ? 'bg-[#191c1e] text-white font-medium'
                      : 'text-[#43474b] hover:text-[#191c1e]'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-inter text-sm text-[#43474b] mb-3">
              Historical Window Analyzed
            </p>
            <div className="w-full h-1.5 bg-white/40 rounded-full overflow-hidden border border-white/40">
              <div className="w-full h-full bg-[#50616b]/60 rounded-full"></div>
            </div>
            <p className="text-[11px] text-[#50616b] font-inter mt-2 flex items-center justify-between">
              <span>Resolution: 0.1° / 1hr intervals</span>
              <span className="text-[#006b5f] font-semibold">100% Ingestion Rate</span>
            </p>
          </div>
        </div>

        {/* Metric 2: Anomalies Detected */}
        <div
          id="bento-metric-anomalies-detected"
          className="glass-panel-teal rounded-[32px] p-8 glass-border-rim flex flex-col justify-between min-h-[250px] transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/60 rounded-2xl border border-white/60 text-[#006b5f]">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-plus-jakarta text-2xl md:text-3xl font-medium text-[#191c1e]">
                {bustCount} Busts
              </h4>
            </div>
            <span className="px-3 py-1 bg-[#ba1a1a]/15 text-[#ba1a1a] text-xs font-inter font-semibold rounded-full border border-[#ba1a1a]/20">
              Critical
            </span>
          </div>

          <div>
            <p className="font-inter text-sm text-[#43474b] mb-3">
              Anomalies Detected (Threshold &gt; 5°C)
            </p>
            {/* Custom Bar Chart matching the exact visual */}
            <div className="flex gap-2 h-12 items-end bg-white/20 p-2 rounded-xl border border-white/30">
              <div className="flex-1 bg-white/60 hover:bg-white h-[25%] rounded-sm transition-all cursor-pointer" title="Normal: +1°C"></div>
              <div className="flex-1 bg-[#ba1a1a]/70 hover:bg-[#ba1a1a] h-[78%] rounded-sm transition-all cursor-pointer" title="Bust #1: +8°C"></div>
              <div className="flex-1 bg-white/60 hover:bg-white h-[35%] rounded-sm transition-all cursor-pointer" title="Normal: +2°C"></div>
              <div className="flex-1 bg-[#ba1a1a]/75 hover:bg-[#ba1a1a] h-[92%] rounded-sm transition-all cursor-pointer" title="Bust #2: +9°C"></div>
              <div className="flex-1 bg-white/60 hover:bg-white h-[18%] rounded-sm transition-all cursor-pointer" title="Normal: +0°C"></div>
              <div className="flex-1 bg-[#ba1a1a] hover:bg-[#ba1a1a] h-[100%] rounded-sm transition-all cursor-pointer animate-pulse" title="Bust #3: +11°C Peak"></div>
              <div className="flex-1 bg-white/60 hover:bg-white h-[28%] rounded-sm transition-all cursor-pointer" title="Normal: +2°C"></div>
            </div>
            <div className="flex justify-between text-[11px] text-[#43474b] mt-2 font-inter">
              <span>Standard Drift</span>
              <span className="text-[#ba1a1a] font-semibold">Max Anomaly: +11°C</span>
            </div>
          </div>
        </div>

        {/* Metric 3: Machine Learning Model Trust */}
        <div
          id="bento-metric-model-trust"
          className="glass-panel rounded-[32px] p-8 glass-border-rim flex flex-col justify-between min-h-[250px] transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/50 rounded-2xl border border-white/60 text-[#006b5f]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-plus-jakarta text-2xl md:text-3xl font-medium text-[#191c1e]">
                98.4%
              </h4>
              <span className="text-xs font-inter text-[#50616b]">Verification Confidence</span>
            </div>
          </div>

          <div>
            <p className="font-inter text-sm text-[#43474b] mb-2">
              Multi-Ensemble Discrepancy Index
            </p>
            <div className="space-y-1.5 text-xs font-inter text-[#43474b]">
              <div className="flex justify-between">
                <span>ECMWF IFS 9km</span>
                <span className="font-semibold text-[#ba1a1a]">-10.5°C error</span>
              </div>
              <div className="flex justify-between">
                <span>NOAA GFS 0.25°</span>
                <span className="font-semibold text-[#ba1a1a]">-11.2°C error</span>
              </div>
              <div className="flex justify-between">
                <span>DWD ICON Global</span>
                <span className="font-semibold text-[#ba1a1a]">-9.9°C error</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Chart Container */}
        <div
          id="bento-interactive-chart-container"
          className="glass-panel rounded-[32px] p-6 md:p-8 glass-border-rim md:col-span-3 min-h-[380px] relative overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6 z-10 relative">
            <div>
              <h4 className="font-plus-jakarta text-xl md:text-2xl font-medium text-[#191c1e]">
                Forecast vs Actual Variance
              </h4>
              <p className="text-xs text-[#50616b] font-inter mt-0.5">
                Hover over variance nodes to inspect point-in-time meteorological divergences.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {hoveredPoint && (
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-full border border-white text-xs font-inter shadow-xs">
                  <span className="font-semibold text-[#191c1e]">{hoveredPoint.date}:</span>
                  <span>Actual <strong className="text-[#006b5f]">{hoveredPoint.actual}°C</strong></span>
                  <span className="text-[#c3c7cb]">|</span>
                  <span>Forecast <strong className="text-[#ba1a1a]">{hoveredPoint.forecast}°C</strong></span>
                  <span className="px-2 py-0.5 rounded-full bg-[#ba1a1a]/15 text-[#ba1a1a] font-bold">
                    +{hoveredPoint.deviation}°C
                  </span>
                </div>
              )}

              <button
                id="btn-view-detailed-report"
                onClick={onOpenReport}
                className="px-5 py-2.5 bg-white/70 hover:bg-white text-[#191c1e] rounded-full font-inter text-xs font-semibold tracking-wider uppercase border border-white/80 shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Detailed Report</span>
                <Info className="w-3.5 h-3.5 text-[#006b5f]" />
              </button>
            </div>
          </div>

          {/* Interactive Responsive SVG Wave Visualization */}
          <div className="relative w-full h-[200px] md:h-[220px] flex items-center justify-center my-2">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 220"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="actualGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3cddc7" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3cddc7" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="forecastGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ba1a1a" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#ba1a1a" stopOpacity="0.0" />
                </linearGradient>
                <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Horizontal Grid lines */}
              <line x1="0" y1="40" x2="1000" y2="40" stroke="#c3c7cb" strokeOpacity="0.25" strokeDasharray="4 4" />
              <line x1="0" y1="110" x2="1000" y2="110" stroke="#c3c7cb" strokeOpacity="0.3" strokeDasharray="4 4" />
              <line x1="0" y1="180" x2="1000" y2="180" stroke="#c3c7cb" strokeOpacity="0.25" strokeDasharray="4 4" />

              {/* Shaded Area between curves when there is a bust */}
              <path
                d="M 0,110 Q 150,55 300,120 T 600,75 T 1000,95 L 1000,110 Q 600,155 300,95 T 150,165 T 0,110 Z"
                fill="url(#forecastGradient)"
                opacity="0.8"
              />

              {/* Actual Line (Solid Soft Teal / Slate Curve matching the aesthetic) */}
              <path
                d="M 0,110 Q 150,55 300,120 T 600,75 T 1000,95"
                fill="none"
                stroke="#50616b"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="drop-shadow-sm transition-all duration-300"
              />

              {/* Forecast Line (Dashed Red Anomaly Curve) */}
              <path
                d="M 0,110 Q 150,165 300,95 T 600,155 T 1000,110"
                fill="none"
                stroke="#ba1a1a"
                strokeWidth="3"
                strokeDasharray="8 8"
                strokeLinecap="round"
                opacity="0.75"
                filter="url(#glow-line)"
              />

              {/* Interactive Data Points */}
              {varianceData.map((pt, idx) => {
                const totalPoints = varianceData.length;
                const x = (idx / (totalPoints - 1)) * 960 + 20;
                // Interpolated Y heights for Actual & Forecast
                const actualY = 110 - (pt.actual - 28) * 8;
                const forecastY = 110 - (pt.forecast - 28) * 8;

                const isHovered = hoveredPoint?.day === pt.day;

                return (
                  <g key={pt.day} className="cursor-pointer">
                    {/* Vertical connecting drift line */}
                    {pt.isBust && (
                      <line
                        x1={x}
                        y1={actualY}
                        x2={x}
                        y2={forecastY}
                        stroke="#ba1a1a"
                        strokeWidth={isHovered ? 2.5 : 1.5}
                        strokeDasharray="2 2"
                        opacity={isHovered ? 1 : 0.6}
                      />
                    )}

                    {/* Actual Node */}
                    <circle
                      cx={x}
                      cy={actualY}
                      r={isHovered ? 7 : 4.5}
                      fill="#50616b"
                      stroke="#ffffff"
                      strokeWidth="2"
                      onMouseEnter={() => setHoveredPoint(pt)}
                      className="transition-all duration-200 hover:scale-125"
                    />

                    {/* Forecast Node */}
                    <circle
                      cx={x}
                      cy={forecastY}
                      r={isHovered ? 6 : 4}
                      fill="#ba1a1a"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      onMouseEnter={() => setHoveredPoint(pt)}
                      className="transition-all duration-200"
                    />

                    {/* Peak Marker for +11°C Anomaly */}
                    {pt.deviation >= 10 && (
                      <g transform={`translate(${x}, ${actualY - 18})`}>
                        <rect
                          x="-28"
                          y="-14"
                          width="56"
                          height="18"
                          rx="9"
                          fill="#ba1a1a"
                        />
                        <text
                          x="0"
                          y="-1"
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="10"
                          fontFamily="Inter"
                          fontWeight="700"
                        >
                          +11°C
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Legend & Details Footer */}
          <div className="mt-4 z-10 relative flex flex-wrap justify-between items-center gap-4 text-xs font-inter text-[#43474b] pt-3 border-t border-white/40">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#50616b] shadow-xs"></div>
                <span className="font-medium text-[#191c1e]">Actual Telemetry</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border-2 border-[#ba1a1a] bg-[#ba1a1a]/20"></div>
                <span className="font-medium text-[#191c1e]">Predicted Forecast (GFS/ECMWF)</span>
              </div>
            </div>

            <div className="text-right text-[11px] text-[#50616b]">
              Dataset synced with WMO Ground Station #43003 & INSAT-3D radiometers.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
