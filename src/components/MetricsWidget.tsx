import React, { useState } from 'react';
import { CityWeatherData } from '../types';

interface MetricsWidgetProps {
  city: CityWeatherData;
  onOpenAccuracy: () => void;
}

export const MetricsWidget: React.FC<MetricsWidgetProps> = ({ city, onOpenAccuracy }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    { num: '01', label: 'Telemetry Init' },
    { num: '02', label: 'Ground Assimilation' },
    { num: '03', label: 'Neural Calibration' },
    { num: '04', label: 'Bust Detection' },
  ];

  return (
    <div id="center-left-metrics-widget" className="flex flex-col gap-4 z-20 max-w-md select-none">
      {/* 1. Step Indicator Bar matching sample "01" */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm font-bold text-[#334155] tracking-wider">
          {steps[activeStep - 1].num}
        </span>
        <div className="flex items-center gap-2">
          {steps.map((step, idx) => {
            const stepNum = idx + 1;
            const isActive = stepNum === activeStep;
            const isPast = stepNum < activeStep;
            return (
              <React.Fragment key={idx}>
                <button
                  onClick={() => setActiveStep(stepNum)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-cyan-500 ring-4 ring-cyan-200 scale-125'
                      : isPast
                      ? 'bg-cyan-300'
                      : 'bg-white/80 border border-slate-300'
                  }`}
                  title={step.label}
                />
                {idx < steps.length - 1 && (
                  <div
                    className={`w-8 h-0.5 rounded transition-all duration-300 ${
                      isPast ? 'bg-cyan-400' : 'bg-slate-300/60'
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* 2. Fact snippet text matching sample */}
      <p className="font-inter text-xs sm:text-[13px] font-medium text-[#475569] leading-relaxed max-w-xs backdrop-blur-xs">
        {city.factSnippet}
      </p>

      {/* 3. Glowing cyan metric bars matching sample */}
      <div
        id="metric-bars-container"
        className="backdrop-blur-md bg-white/45 border border-white/70 rounded-2xl p-4 shadow-sm flex flex-col gap-2.5 max-w-[320px] transition-all hover:bg-white/60"
      >
        {/* Humidity Bar */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center text-[11px] font-semibold text-[#334155]">
            <span className="text-[#64748b]">Humidity</span>
            <span className="font-mono font-bold">{city.metricBars.humidity}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full transition-all duration-700 shadow-sm shadow-cyan-400/50"
              style={{ width: `${city.metricBars.humidity}%` }}
            />
          </div>
        </div>

        {/* Ice Index Bar */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center text-[11px] font-semibold text-[#334155]">
            <span className="text-[#64748b]">Ice Index</span>
            <span className="font-mono font-bold">{city.metricBars.iceIndex}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-300 via-cyan-400 to-teal-400 rounded-full transition-all duration-700 shadow-sm shadow-sky-300/50"
              style={{ width: `${city.metricBars.iceIndex}%` }}
            />
          </div>
        </div>

        {/* Wind Speed Bar */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center text-[11px] font-semibold text-[#334155]">
            <span className="text-[#64748b]">Wind</span>
            <span className="font-mono font-bold">{city.metricBars.windSpeedKts} kts</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-700 shadow-sm"
              style={{ width: `${Math.min(100, (city.metricBars.windSpeedKts / 45) * 100)}%` }}
            />
          </div>
        </div>

        {/* Accuracy Bar (AI Calibrated) */}
        <div
          onClick={onOpenAccuracy}
          className="flex flex-col gap-1 pt-1 border-t border-slate-200/60 cursor-pointer group"
        >
          <div className="flex justify-between items-center text-[11px] font-bold text-[#0284c7] group-hover:text-[#0369a1]">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Calibrated Accuracy
            </span>
            <span className="font-mono">{city.metricBars.accuracyScore}% ↗</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full transition-all duration-700 shadow-sm shadow-emerald-400/50"
              style={{ width: `${city.metricBars.accuracyScore}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
