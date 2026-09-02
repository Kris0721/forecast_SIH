import React, { useState } from 'react';
import { GlacierHeroCanvas } from './GlacierHeroCanvas';
import { CirrusSkyCanvas } from './CirrusSkyCanvas';
import { HourlyStrip } from './HourlyStrip';
import { MetricsWidget } from './MetricsWidget';
import { HeroExpedition } from './HeroExpedition';
import { RightSidebarStack } from './RightSidebarStack';
import { CityWeatherData, TempUnit } from '../types';
import { CloudSun, Sparkles, Box } from 'lucide-react';

interface SampleHeroCanvasViewProps {
  selectedCity: CityWeatherData;
  tempUnit: TempUnit;
  onToggleTempUnit: () => void;
  onOpenMap: () => void;
  onOpenReport: () => void;
  onOpenAccuracy: () => void;
}

export const SampleHeroCanvasView: React.FC<SampleHeroCanvasViewProps> = ({
  selectedCity,
  tempUnit,
  onToggleTempUnit,
  onOpenMap,
  onOpenReport,
  onOpenAccuracy,
}) => {
  const [heroBackdropMode, setHeroBackdropMode] = useState<'sky' | 'glacier'>('sky');

  return (
    <div
      id="sample-glacier-hero-stage"
      className="relative w-full min-h-[820px] lg:min-h-[860px] rounded-[44px] overflow-hidden p-6 sm:p-10 lg:p-14 flex flex-col justify-between shadow-[0_20px_60px_rgba(15,76,104,0.18)] border border-white/70 bg-gradient-to-b from-sky-100/40 via-white/20 to-sky-50/40 backdrop-blur-md transition-all duration-700"
    >
      {/* 1. Dynamic Hero Backdrop: Cirrus Azure Sky or 3D Glacier */}
      {heroBackdropMode === 'sky' ? (
        <CirrusSkyCanvas className="transition-opacity duration-700" />
      ) : (
        <GlacierHeroCanvas />
      )}

      {/* 2. Soft atmospheric frosted vignette & light gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 via-transparent to-amber-200/10 pointer-events-none z-0" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-300/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-sky-300/20 blur-3xl pointer-events-none" />

      {/* 3. Top Row Layout */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-start gap-8 w-full">
        {/* Left side: Backdrop Mode Toggle Switcher */}
        <div className="flex items-center gap-2 pt-16 md:pt-0">
          <div className="backdrop-blur-md bg-white/80 border border-white/90 rounded-full p-1 shadow-sm flex items-center gap-1">
            <button
              id="btn-hero-sky-mode"
              type="button"
              onClick={() => setHeroBackdropMode('sky')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                heroBackdropMode === 'sky'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CloudSun className="w-3.5 h-3.5 text-amber-300" />
              Live Azure Cirrus Sky
            </button>
            <button
              id="btn-hero-glacier-mode"
              type="button"
              onClick={() => setHeroBackdropMode('glacier')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                heroBackdropMode === 'glacier'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Box className="w-3.5 h-3.5 text-cyan-400" />
              3D Ice Monolith
            </button>
          </div>
        </div>

        {/* Right Top Weather Widget & Hourly Forecast Strip */}
        <div className="w-full md:w-auto flex justify-end">
          <HourlyStrip
            city={selectedCity}
            tempUnit={tempUnit}
            onToggleTempUnit={onToggleTempUnit}
            onOpenMap={onOpenMap}
          />
        </div>
      </div>

      {/* 4. Middle & Bottom Row Layout matching sample */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full mt-auto pt-10">
        {/* Center-Left: Step Indicator, Fact & Metric Bars */}
        <div className="lg:col-span-4 flex flex-col justify-end">
          <MetricsWidget city={selectedCity} onOpenAccuracy={onOpenAccuracy} />
        </div>

        {/* Center / Hero Headline & Action Pill */}
        <div className="lg:col-span-5 flex flex-col justify-end">
          <HeroExpedition
            city={selectedCity}
            onOpenMap={onOpenMap}
            onOpenReport={onOpenReport}
          />
        </div>

        {/* Right Stack: Media Thumbnails & Floating Scientist Profile Card */}
        <div className="lg:col-span-3 flex justify-end">
          <RightSidebarStack
            city={selectedCity}
            onOpenReport={onOpenReport}
            onOpenMap={onOpenMap}
          />
        </div>
      </div>
    </div>
  );
};
