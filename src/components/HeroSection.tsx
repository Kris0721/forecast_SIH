import React from 'react';
import { CityWeatherData } from '../types';
import { ThreeGlobeAtmosphere } from './ThreeGlobeAtmosphere';
import { Sun, AlertTriangle, Radio, Sparkles, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  selectedCity: CityWeatherData;
  onOpenReport: () => void;
  onSelectCity: (cityId: string) => void;
  availableCities: CityWeatherData[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedCity,
  onOpenReport,
  onSelectCity,
  availableCities,
}) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[820px] w-full flex items-center px-6 md:px-14 pt-20 pb-16 overflow-hidden"
    >
      {/* Central 3D Atmospheric Visualization */}
      <div
        id="hero-3d-globe-wrapper"
        className="absolute inset-0 z-0 flex items-center justify-center opacity-75 md:opacity-85 pointer-events-none"
      >
        <ThreeGlobeAtmosphere />
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <div id="hero-left-content" className="lg:col-span-7 flex flex-col gap-6">
          <div
            id="badge-sih-intelligence"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-md w-fit shadow-xs"
          >
            <Radio className="w-4 h-4 text-[#006b5f] animate-pulse" />
            <span className="font-inter text-xs font-semibold tracking-widest text-[#191c1e] uppercase">
              SIH26079 — Weather Intelligence
            </span>
          </div>

          <h1
            id="hero-main-title"
            className="font-plus-jakarta text-5xl sm:text-6xl lg:text-[72px] font-light text-[#191c1e] leading-[1.08] tracking-[-0.035em] text-glow"
          >
            WHEN FORECASTS
            <br />
            <span className="font-normal text-[#191c1e]">FAIL, WE FIND OUT.</span>
          </h1>

          <p
            id="hero-subtitle-description"
            className="font-inter text-base sm:text-lg text-[#43474b] max-w-xl leading-relaxed font-normal"
          >
            Advanced atmospheric analysis engine comparing predictive meteorological
            models against ground-truth reality to detect precision anomalies.
          </p>

          {/* Quick city selector buttons */}
          <div id="hero-city-selector-pills" className="flex flex-wrap gap-2 pt-2 items-center">
            <span className="text-xs font-inter font-semibold uppercase tracking-wider text-[#50616b] mr-1">
              Active Monitoring:
            </span>
            {availableCities.map((city) => (
              <button
                key={city.id}
                id={`city-pill-${city.id}`}
                onClick={() => onSelectCity(city.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-inter transition-all duration-200 cursor-pointer ${
                  selectedCity.id === city.id
                    ? 'bg-[#191c1e] text-white shadow-sm'
                    : 'bg-white/50 text-[#43474b] hover:bg-white/80 border border-white/60'
                }`}
              >
                {city.name}
                {city.status === 'bust' && (
                  <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#ba1a1a]"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right / Floating Panels */}
        <div
          id="hero-floating-panels"
          className="lg:col-span-5 relative h-full flex flex-col gap-6 items-end justify-center pt-8 lg:pt-0"
        >
          {/* Weather Ground Truth Panel */}
          <div
            id="panel-live-ground-truth"
            className="glass-panel glass-border-rim rounded-2xl p-6 w-full max-w-sm transform lg:translate-x-4 hover:translate-x-0 transition-transform duration-500 hover:shadow-xl group"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-plus-jakarta text-2xl font-medium text-[#191c1e] group-hover:text-[#006b5f] transition-colors">
                  {selectedCity.name}
                </h3>
                <p className="font-inter text-sm text-[#43474b]">Live Ground Truth</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#e0f2fe]/60 flex items-center justify-center text-[#006b5f] border border-white/60">
                <Sun className="w-7 h-7 text-[#006b5f] animate-spin-slow" style={{ animationDuration: '20s' }} />
              </div>
            </div>

            <div className="text-[48px] font-light text-[#191c1e] leading-none mb-4 font-plus-jakarta flex items-baseline gap-2">
              {selectedCity.actualTemp}°C
              <span className="text-xs text-[#50616b] font-inter font-normal">
                {selectedCity.region}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <span className="px-3 py-1 bg-white/60 rounded-full font-inter font-semibold text-[#191c1e] text-xs border border-white/60">
                {selectedCity.condition}
              </span>
              <span className="px-3 py-1 bg-white/60 rounded-full font-inter font-semibold text-[#191c1e] text-xs border border-white/60">
                AQI {selectedCity.aqi}
              </span>
              <span className="px-3 py-1 bg-white/60 rounded-full font-inter text-[#43474b] text-xs border border-white/60 ml-auto">
                Humidity {selectedCity.humidity}%
              </span>
            </div>
          </div>

          {/* Deviation Alert Panel (Bust Panel) */}
          <div
            id="panel-forecast-bust-alert"
            onClick={onOpenReport}
            className="glass-panel-alert rounded-2xl p-6 w-full max-w-sm glass-border-rim transform lg:-translate-x-8 hover:translate-x-0 transition-all duration-500 hover:shadow-xl cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#ba1a1a]/15 flex items-center justify-center text-[#ba1a1a]">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <span className="font-inter text-xs font-bold text-[#ba1a1a] tracking-wider uppercase">
                  FORECAST BUST
                </span>
              </div>
              <span className="text-[11px] font-inter text-[#ba1a1a] font-medium flex items-center gap-0.5 group-hover:underline">
                Inspect <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-[#43474b] font-inter font-medium">Predicted</p>
                <p className="font-plus-jakarta text-2xl text-[#191c1e] line-through opacity-50 font-normal">
                  {selectedCity.predictedTemp}°C
                </p>
              </div>
              <div>
                <p className="text-xs text-[#43474b] font-inter font-medium">Actual</p>
                <p className="font-plus-jakarta text-2xl text-[#191c1e] font-semibold text-[#ba1a1a]">
                  {selectedCity.actualTemp}°C
                </p>
              </div>
            </div>

            <div className="w-full bg-white/50 rounded-full h-2 mb-2 overflow-hidden border border-white/40">
              <div
                className="bg-[#ba1a1a] h-full rounded-full transition-all duration-700"
                style={{ width: `${Math.min(100, Math.abs(selectedCity.deviation) * 8)}%` }}
              />
            </div>

            <div className="flex justify-between items-center">
              <p className="font-inter text-xs font-bold text-[#ba1a1a] tracking-wider">
                {selectedCity.deviation > 0 ? `+${selectedCity.deviation}` : selectedCity.deviation}°C DEVIATION DETECTED
              </p>
              <span className="inline-flex items-center gap-1 text-[10px] text-[#50616b] font-inter">
                <Sparkles className="w-3 h-3 text-[#006b5f]" /> AI Diagnostic
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
