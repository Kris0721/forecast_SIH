import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Eye, MapPin } from 'lucide-react';
import { CityWeatherData } from '../types';

interface RightSidebarStackProps {
  city: CityWeatherData;
  onOpenReport: () => void;
  onOpenMap: () => void;
}

export const RightSidebarStack: React.FC<RightSidebarStackProps> = ({
  city,
  onOpenReport,
  onOpenMap,
}) => {
  const [selectedThumb, setSelectedThumb] = useState<string | null>(null);

  return (
    <aside
      id="right-sidebar-media-stack"
      className="flex flex-col items-end justify-between gap-5 z-20 h-full select-none"
    >
      {/* 1. Stacked Media Thumbnail Cards matching sample */}
      <div className="flex flex-col gap-3">
        {city.thumbnails.map((thumb, idx) => (
          <div
            key={thumb.id}
            onClick={() => {
              setSelectedThumb(thumb.id);
              onOpenMap();
            }}
            className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden backdrop-blur-md bg-white/40 border-2 border-white/80 shadow-[0_8px_20px_rgba(15,76,104,0.1)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_28px_rgba(2,132,199,0.25)] hover:border-cyan-300 cursor-pointer"
          >
            <img
              src={thumb.image}
              alt={thumb.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-1.5">
              <span className="text-[9px] font-bold text-white leading-tight line-clamp-1">
                {thumb.tag}
              </span>
            </div>

            {/* Subtle Index badge */}
            <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-white/90 text-slate-800 text-[9px] font-bold flex items-center justify-center shadow-xs">
              {idx + 1}
            </div>
          </div>
        ))}
      </div>

      {/* 2. Floating Scientist / Observer Profile Card matching sample */}
      <div
        id="scientist-profile-card"
        className="backdrop-blur-xl bg-white/85 border border-white/90 rounded-[28px] p-4 sm:p-5 shadow-[0_16px_40px_rgba(15,76,104,0.14)] flex flex-col gap-3 max-w-[240px] transition-all hover:bg-white/95 hover:shadow-[0_20px_48px_rgba(15,76,104,0.2)]"
      >
        {/* Top row with Avatar & Handle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <img
                src={city.leadScientist.avatar}
                alt={city.leadScientist.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-cyan-400 shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#1e293b] leading-tight">
                {city.leadScientist.handle}
              </span>
              <span className="text-[10px] text-cyan-700 font-semibold flex items-center gap-0.5">
                <CheckCircle2 className="w-2.5 h-2.5 text-cyan-600" />
                Verified NWP Lead
              </span>
            </div>
          </div>

          {/* Signature Cyan Circular Arrow Badge matching sample */}
          <button
            onClick={onOpenMap}
            title="Explore Interactive Map"
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-400 text-white flex items-center justify-center shadow-md shadow-cyan-500/30 hover:scale-110 active:scale-95 transition-all cursor-pointer"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Comment / Observation Text matching sample */}
        <p className="text-[11px] text-[#475569] leading-relaxed font-medium">
          {city.leadScientist.comment}
        </p>

        {/* Action Button: "More details" matching sample */}
        <button
          id="profile-more-details-btn"
          onClick={onOpenReport}
          className="w-full py-2 px-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all text-center cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Eye className="w-3.5 h-3.5 text-cyan-700" />
          More details
        </button>
      </div>
    </aside>
  );
};
