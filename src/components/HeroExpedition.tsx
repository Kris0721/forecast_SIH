import React from 'react';
import { ArrowDownRight, Compass, Sparkles } from 'lucide-react';
import { CityWeatherData } from '../types';

interface HeroExpeditionProps {
  city: CityWeatherData;
  onOpenMap: () => void;
  onOpenReport: () => void;
}

export const HeroExpedition: React.FC<HeroExpeditionProps> = ({
  city,
  onOpenMap,
  onOpenReport,
}) => {
  return (
    <div
      id="hero-expedition-headline-block"
      className="flex flex-col items-start gap-4 z-20 max-w-2xl mt-auto pt-8 select-none"
    >
      {/* Subtitle matching sample "The journey of the expedition" */}
      <span className="font-inter text-sm sm:text-base font-medium tracking-normal text-[#475569]/90 drop-shadow-xs">
        {city.heroSubtitle}
      </span>

      {/* Hero Headline matching sample "Antarctica an unique continent" */}
      <h1 className="font-plus-jakarta text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal leading-[1.08] tracking-tight text-white drop-shadow-[0_4px_16px_rgba(15,76,104,0.35)] max-w-xl">
        {city.heroTitle}
      </h1>

      {/* Interactive Bottom Action Pill matching sample */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          id="highlight-journey-action-pill"
          onClick={onOpenMap}
          className="group backdrop-blur-xl bg-white/20 hover:bg-white/35 border border-white/60 text-white rounded-full px-6 sm:px-8 py-3.5 flex items-center gap-3 shadow-[0_8px_32px_rgba(15,76,104,0.2)] transition-all duration-300 hover:scale-[1.02] active:scale-98 cursor-pointer"
        >
          <span className="font-inter text-xs sm:text-sm font-semibold tracking-wide text-white drop-shadow-xs">
            {city.id === 'antarctica'
              ? `Highlight on an amazing journey through Icy ${city.name}`
              : `Explore Weather Forecast & Radar Stream for ${city.name}`}
          </span>
          <span className="w-7 h-7 rounded-full bg-white/30 group-hover:bg-cyan-400 group-hover:text-slate-900 flex items-center justify-center transition-all duration-300">
            <ArrowDownRight className="w-4 h-4 text-white group-hover:text-slate-900 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </span>
        </button>

        <button
          id="view-bust-diagnostics-btn"
          onClick={onOpenReport}
          className="backdrop-blur-xl bg-white/80 hover:bg-white text-[#0f172a] rounded-full px-5 py-3 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-cyan-600" />
          <span>Bust Diagnostics ({city.deviationC > 0 ? `+${city.deviationC}°C` : `${city.deviationC}°C`})</span>
        </button>
      </div>
    </div>
  );
};
