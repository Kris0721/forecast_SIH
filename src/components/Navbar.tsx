import React from 'react';
import { SlidersHorizontal, Map, Compass, ShieldCheck, Sparkles, Flame, ChevronDown } from 'lucide-react';
import { ActiveTab, CityWeatherData } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenMap: () => void;
  onOpenDetector: () => void;
  onOpenAccuracy: () => void;
  selectedCity: CityWeatherData;
  onSelectCity: (cityId: string) => void;
  allCities: CityWeatherData[];
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenMap,
  onOpenDetector,
  onOpenAccuracy,
  selectedCity,
  onSelectCity,
  allCities,
}) => {
  return (
    <header
      id="main-app-header-notch"
      className="fixed top-6 left-6 sm:left-10 z-50 flex items-center gap-3 transition-all duration-300"
    >
      {/* 1. Signature Top-Left Floating Badge Notch from Sample */}
      <div
        id="navbar-floating-tab"
        className="backdrop-blur-xl bg-white/95 rounded-[26px] shadow-[0_12px_36px_rgba(15,76,104,0.12)] border border-white/80 px-4 py-2.5 flex items-center gap-4 sm:gap-6"
      >
        {/* Signature Cyan "C" Logo */}
        <button
          id="logo-brand-button"
          onClick={() => setActiveTab('overview')}
          className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-[#0284c7] via-[#06b6d4] to-[#38bdf8] text-white shadow-md shadow-cyan-500/25 transition-transform hover:scale-105 active:scale-95"
        >
          <span className="font-plus-jakarta text-2xl font-black tracking-tight select-none">
            C
          </span>
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white ring-1 ring-emerald-300 animate-pulse"></span>
        </button>

        {/* Navigation Links matching sample: About, Accessories, App, Education */}
        <nav className="hidden md:flex items-center gap-6 font-inter text-[13px] font-semibold tracking-normal text-[#52636f]">
          <button
            id="nav-link-about"
            onClick={() => setActiveTab('overview')}
            className={`transition-colors hover:text-[#0f172a] ${
              activeTab === 'overview' ? 'text-[#0284c7] font-bold' : ''
            }`}
          >
            About
          </button>

          <button
            id="nav-link-map"
            onClick={onOpenMap}
            className="flex items-center gap-1.5 transition-colors hover:text-[#0284c7] text-[#52636f]"
          >
            <Map className="w-3.5 h-3.5 text-[#0284c7]" />
            Live Map
          </button>

          <button
            id="nav-link-detector"
            onClick={onOpenDetector}
            className="flex items-center gap-1.5 transition-colors hover:text-[#0284c7] text-[#52636f]"
          >
            <Compass className="w-3.5 h-3.5 text-[#06b6d4]" />
            Detector App
          </button>

          <button
            id="nav-link-accuracy"
            onClick={onOpenAccuracy}
            className="flex items-center gap-1.5 transition-colors hover:text-[#0284c7] text-[#52636f]"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
            Accuracy Matrix
          </button>

          <a
            id="nav-link-five-day"
            href="#five-day-forecast-section"
            className="flex items-center gap-1.5 transition-colors hover:text-[#0284c7] text-[#52636f]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            5-Day Prediction
          </a>

          <a
            id="nav-link-past-busts"
            href="#past-bust-history-section"
            className="flex items-center gap-1.5 transition-colors hover:text-rose-600 text-[#52636f]"
          >
            <Flame className="w-3.5 h-3.5 text-rose-500" />
            Past 5-Day Busts
          </a>
        </nav>

        {/* Teal Rounded Action Button */}
        <button
          id="nav-quick-settings-trigger"
          onClick={onOpenDetector}
          title="Atmospheric Engine Sandbox"
          className="w-9 h-9 rounded-xl bg-[#06b6d4] hover:bg-[#0891b2] text-white flex items-center justify-center shadow-sm shadow-cyan-600/30 transition-all hover:scale-105 active:scale-95 ml-1"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* 2. City Selector Pill (Allows immediate switching between 7+ world cities) */}
      <div
        id="city-quick-selector-wrapper"
        className="relative backdrop-blur-xl bg-white/90 rounded-[22px] shadow-[0_8px_24px_rgba(15,76,104,0.08)] border border-white/70 px-3 py-1.5 flex items-center gap-2 group cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
        <select
          id="global-city-select-dropdown"
          value={selectedCity.id}
          onChange={(e) => onSelectCity(e.target.value)}
          className="bg-transparent font-inter text-xs sm:text-sm font-bold text-[#1e293b] focus:outline-none cursor-pointer pr-4 appearance-none"
        >
          {allCities.map((city) => (
            <option key={city.id} value={city.id} className="text-gray-900 bg-white">
              {city.name} ({city.actualTempC}°C / {city.actualTempF}°F) - {city.country}
            </option>
          ))}
        </select>
        <ChevronDown className="w-3.5 h-3.5 text-gray-500 pointer-events-none -ml-4" />
      </div>
    </header>
  );
};
