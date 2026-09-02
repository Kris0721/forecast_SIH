import React, { useState, useMemo } from 'react';
import { 
  Sun, 
  Cloud, 
  Sunset, 
  CloudRain, 
  CloudSnow, 
  Wind, 
  Flag, 
  Zap, 
  CalendarDays, 
  Clock,
  Sparkles,
  Droplets
} from 'lucide-react';
import { CityWeatherData, TempUnit } from '../types';
import { generateFiveDayForecast } from '../data/fiveDayForecasts';

interface HourlyStripProps {
  city: CityWeatherData;
  tempUnit: TempUnit;
  onToggleTempUnit: () => void;
  onOpenMap: () => void;
}

export const HourlyStrip: React.FC<HourlyStripProps> = ({
  city,
  tempUnit,
  onToggleTempUnit,
  onOpenMap,
}) => {
  const [viewMode, setViewMode] = useState<'hourly' | 'daily'>('hourly');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const fiveDayList = useMemo(() => {
    return generateFiveDayForecast(city);
  }, [city]);

  const getDisplayTemp = (tempC: number, tempF: number) => {
    return tempUnit === 'F' ? `${tempF}°` : `${tempC}°`;
  };

  const renderIcon = (iconType: string, isNow?: boolean) => {
    switch (iconType) {
      case 'sunset':
        return <Sunset className="w-5 h-5 text-amber-500" />;
      case 'rain':
        return <CloudRain className="w-5 h-5 text-cyan-500" />;
      case 'snow':
        return <CloudSnow className="w-5 h-5 text-sky-300" />;
      case 'wind':
        return <Wind className="w-5 h-5 text-teal-500" />;
      case 'thunder':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-slate-400" />;
      case 'sun':
      default:
        return (
          <Sun
            className={`w-5 h-5 ${
              isNow ? 'text-amber-500 animate-spin-slow' : 'text-slate-500 group-hover:text-amber-500'
            } transition-colors`}
          />
        );
    }
  };

  return (
    <div
      id="top-right-weather-widget"
      className="flex flex-col items-end gap-2.5 z-30 select-none max-w-full"
    >
      {/* 1. Day & Time header row with Hourly / 5-Day View Mode Toggle */}
      <div className="flex items-center justify-between w-full text-xs font-semibold text-[#627d98] tracking-wide px-1 gap-2">
        <div className="flex items-center gap-1.5">
          <span className="capitalize text-slate-800 font-bold">{city.dayOfWeek}</span>
          <span className="font-mono text-xs text-slate-500">
            {city.localTimeStr}
          </span>
        </div>

        {/* View Switcher: Hourly vs 5-Day */}
        <div className="flex items-center bg-white/70 backdrop-blur-md rounded-full p-0.5 border border-white/90 shadow-2xs">
          <button
            id="btn-switch-hourly-view"
            type="button"
            onClick={() => setViewMode('hourly')}
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
              viewMode === 'hourly'
                ? 'bg-[#0284c7] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Clock className="w-3 h-3" />
            Hourly
          </button>
          <button
            id="btn-switch-daily-view"
            type="button"
            onClick={() => setViewMode('daily')}
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
              viewMode === 'daily'
                ? 'bg-[#0284c7] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CalendarDays className="w-3 h-3" />
            5-Day
          </button>
        </div>
      </div>

      {/* 2. Forecast Strip (Hourly vs 5-Day Daily) */}
      <div
        id="forecast-strip-container"
        className="flex items-center gap-1.5 p-1.5 rounded-2xl backdrop-blur-md bg-white/70 border border-white/80 shadow-sm overflow-x-auto max-w-full scrollbar-none"
      >
        {viewMode === 'hourly' ? (
          /* Hourly Strip */
          city.hourly.map((item, idx) => {
            const isNow = item.isNow || idx === 0;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`flex flex-col items-center justify-center min-w-[56px] py-2 px-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                  isNow
                    ? 'bg-white shadow-[0_4px_12px_rgba(2,132,199,0.12)] border border-cyan-100 ring-1 ring-cyan-200'
                    : 'hover:bg-white/90 text-[#475569]'
                }`}
              >
                <span
                  className={`text-[10px] font-semibold tracking-tight uppercase mb-1 ${
                    isNow ? 'text-[#0284c7] font-bold' : 'text-[#64748b]'
                  }`}
                >
                  {item.time}
                </span>

                <div className="my-0.5">{renderIcon(item.icon, isNow)}</div>

                <span
                  className={`text-xs font-bold font-mono mt-1 ${
                    isNow ? 'text-[#0f172a]' : 'text-[#334155]'
                  }`}
                >
                  {item.isSunset ? 'Sunset' : getDisplayTemp(item.tempC, item.tempF)}
                </span>
              </div>
            );
          })
        ) : (
          /* 5-Day Daily Forecast Strip */
          fiveDayList.map((dayItem, idx) => {
            const isToday = idx === 0;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`flex flex-col items-center justify-center min-w-[62px] py-2 px-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                  isToday
                    ? 'bg-white shadow-[0_4px_12px_rgba(2,132,199,0.12)] border border-cyan-100 ring-1 ring-cyan-200'
                    : 'hover:bg-white/90 text-[#475569]'
                }`}
              >
                <span
                  className={`text-[10px] font-bold tracking-tight uppercase mb-0.5 ${
                    isToday ? 'text-[#0284c7]' : 'text-[#64748b]'
                  }`}
                >
                  {dayItem.dayName}
                </span>
                <span className="text-[8px] font-mono text-slate-400 mb-1">
                  {dayItem.dateStr}
                </span>

                <div className="my-0.5">{renderIcon(dayItem.icon, isToday)}</div>

                <div className="flex items-center gap-1 text-[11px] font-mono font-bold mt-1 text-[#0f172a]">
                  <span>{getDisplayTemp(dayItem.highTempC, dayItem.highTempF)}</span>
                  <span className="text-[9px] text-slate-400 font-normal">
                    {getDisplayTemp(dayItem.lowTempC, dayItem.lowTempF)}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 3. Time Zone & City Subtitle + Unit Switcher */}
      <div className="flex items-center justify-between w-full px-1 mt-0.5">
        <span className="text-xs font-medium text-[#64748b] tracking-tight">
          {city.timeZoneStr}
        </span>

        {/* °C / °F Toggle Pill */}
        <button
          id="temp-unit-toggle-pill"
          onClick={onToggleTempUnit}
          title="Toggle Celsius / Fahrenheit"
          className="flex items-center backdrop-blur-md bg-white/80 border border-white/90 rounded-full p-0.5 shadow-sm text-[11px] font-bold text-[#475569] hover:bg-white transition-all cursor-pointer"
        >
          <span
            className={`px-2 py-0.5 rounded-full transition-all ${
              tempUnit === 'C' ? 'bg-[#0284c7] text-white shadow-xs' : 'text-[#64748b]'
            }`}
          >
            °C
          </span>
          <span
            className={`px-2 py-0.5 rounded-full transition-all ${
              tempUnit === 'F' ? 'bg-[#0284c7] text-white shadow-xs' : 'text-[#64748b]'
            }`}
          >
            °F
          </span>
        </button>
      </div>

      {/* 4. Giant Temperature Display with Live Weather Status */}
      <div className="flex items-baseline gap-3 my-0.5">
        <div className="font-plus-jakarta text-6xl sm:text-7xl font-light tracking-tighter text-[#0f172a] flex items-center">
          {tempUnit === 'F' ? city.actualTempF : city.actualTempC}°
          <Sun className="w-10 h-10 sm:w-12 sm:h-12 ml-3 text-amber-500 animate-spin-slow opacity-90 inline-block" />
        </div>
      </div>

      {/* 5. Weather Forecast Contour Line Overlay */}
      <div
        id="weather-forecast-contour-card"
        onClick={onOpenMap}
        className="w-full max-w-[280px] backdrop-blur-md bg-white/40 hover:bg-white/70 border border-white/60 rounded-2xl p-3 shadow-sm transition-all duration-300 cursor-pointer group relative overflow-hidden"
      >
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#334155] mb-1 group-hover:text-[#0284c7] transition-colors">
          <Flag className="w-3.5 h-3.5 text-[#0284c7]" />
          <span>{city.topographicFeature.name}</span>
          <span className="text-[10px] text-cyan-700 bg-cyan-100/80 px-1.5 py-0.5 rounded-md font-mono ml-auto font-bold">
            {city.topographicFeature.elevation}
          </span>
        </div>

        <p className="text-[11px] text-[#64748b] leading-tight mb-1.5 line-clamp-1">
          {city.topographicFeature.description}
        </p>

        {/* Vector Contour Lines */}
        <div className="relative h-14 w-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
          <svg
            viewBox="0 0 200 80"
            className="w-full h-full stroke-cyan-600/70 fill-none transition-transform group-hover:scale-105 duration-300"
          >
            <path
              d="M 20,40 Q 40,15 70,25 T 130,20 T 180,45 Q 160,70 120,65 T 50,68 Z"
              strokeWidth="1.2"
              className="opacity-60"
            />
            <path
              d="M 35,42 Q 50,22 80,30 T 125,28 T 165,46 Q 145,62 110,58 T 60,60 Z"
              strokeWidth="1.5"
              className="opacity-80"
            />
            <path
              d="M 55,44 Q 70,30 95,35 T 130,34 T 145,46 Q 130,54 105,52 T 75,52 Z"
              strokeWidth="1.8"
              className="opacity-95 stroke-cyan-700"
            />
            <circle cx="105" cy="42" r="2.5" className="fill-cyan-600" />
            <text x="112" y="45" className="text-[7px] font-mono fill-cyan-900 font-bold">
              REAL-TIME RADAR
            </text>
          </svg>
          <div className="absolute bottom-1 right-2 text-[9px] font-semibold text-cyan-700 underline flex items-center gap-0.5">
            Instant Radar Map ↗
          </div>
        </div>
      </div>
    </div>
  );
};
