import React, { useEffect, useRef, useState, useMemo } from 'react';
import L from 'leaflet';
import { 
  X, 
  Layers, 
  Compass, 
  Wind, 
  Thermometer, 
  ShieldAlert, 
  Sparkles, 
  Search, 
  Check, 
  Radio, 
  Zap, 
  Navigation,
  Globe2,
  Mountain,
  Waves
} from 'lucide-react';
import { CityWeatherData, MapLayerType } from '../types';

interface InteractiveMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  cities: CityWeatherData[];
  selectedCity: CityWeatherData;
  onSelectCity: (cityId: string) => void;
}

export const InteractiveMapModal: React.FC<InteractiveMapModalProps> = ({
  isOpen,
  onClose,
  cities,
  selectedCity,
  onSelectCity,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);

  const [activeLayer, setActiveLayer] = useState<MapLayerType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [focusedCity, setFocusedCity] = useState<CityWeatherData>(selectedCity);
  const [isMapReady, setIsMapReady] = useState(false);

  // Initialize and update Leaflet Map with zero-lag optimization
  useEffect(() => {
    if (!isOpen || !mapContainerRef.current) return;

    let timer: NodeJS.Timeout;

    if (!mapInstanceRef.current) {
      // Create Leaflet Map instance with high performance options
      const map = L.map(mapContainerRef.current, {
        center: [selectedCity.coordinates.lat, selectedCity.coordinates.lng],
        zoom: selectedCity.id === 'antarctica' ? 3 : 5,
        zoomControl: false,
        attributionControl: false,
        preferCanvas: true, // Canvas acceleration for fast render
        fadeAnimation: true,
        markerZoomAnimation: true,
      });

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Fast CDN Voyager Carto tiles with keepBuffer for instant panning
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
        keepBuffer: 8,
        updateWhenIdle: false,
      }).addTo(map);

      const markersGroup = L.layerGroup().addTo(map);
      markersRef.current = markersGroup;
      mapInstanceRef.current = map;

      // Instant resize invalidation
      timer = setTimeout(() => {
        map.invalidateSize();
        setIsMapReady(true);
      }, 50);
    } else {
      mapInstanceRef.current.invalidateSize();
      mapInstanceRef.current.setView(
        [selectedCity.coordinates.lat, selectedCity.coordinates.lng],
        selectedCity.id === 'antarctica' ? 3 : 5,
        { animate: false }
      );
      setIsMapReady(true);
    }

    setFocusedCity(selectedCity);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOpen, selectedCity]);

  // Filtered cities list
  const filteredCities = useMemo(() => {
    return cities.filter((c) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        c.name.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q) ||
        (c.state && c.state.toLowerCase().includes(q)) ||
        c.region.toLowerCase().includes(q);

      if (!matchesSearch) return false;
      if (activeLayer === 'anomaly') return c.status === 'bust';
      if (activeLayer === 'wind') return c.metricBars.windSpeedKts >= 14 || c.zone === 'Himalayan';
      return true;
    });
  }, [cities, searchQuery, activeLayer]);

  // Fast marker rendering
  useEffect(() => {
    if (!mapInstanceRef.current || !markersRef.current) return;

    markersRef.current.clearLayers();

    filteredCities.forEach((city) => {
      const isSelected = city.id === focusedCity.id;
      const hasBust = city.status === 'bust';

      const markerHtml = `
        <div class="relative group cursor-pointer transition-transform duration-150">
          <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-md shadow-md border ${
            isSelected
              ? 'bg-slate-900 text-white border-cyan-400 ring-2 ring-cyan-300 scale-110 z-30'
              : hasBust
              ? 'bg-rose-600/95 text-white border-white/80 hover:scale-105'
              : 'bg-white/95 text-slate-900 border-slate-300 hover:scale-105'
          }">
            <span class="w-2 h-2 rounded-full ${hasBust ? 'bg-amber-300 animate-ping' : 'bg-emerald-400'}"></span>
            <span class="text-[11px] font-bold tracking-tight whitespace-nowrap">${city.name}</span>
            <span class="text-[10px] font-mono px-1 rounded ${hasBust ? 'bg-rose-700 text-white' : 'bg-slate-100 text-slate-800'}">
              ${city.actualTempC}°C
            </span>
          </div>
          ${
            hasBust
              ? `<div class="absolute -top-3.5 -right-1 bg-amber-400 text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded-full shadow-xs border border-white whitespace-nowrap">
                  +${city.deviationC}°C BUST
                </div>`
              : ''
          }
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-weather-pin',
        html: markerHtml,
        iconSize: [120, 36],
        iconAnchor: [60, 18],
      });

      const marker = L.marker([city.coordinates.lat, city.coordinates.lng], { icon: customIcon });

      marker.on('click', () => {
        setFocusedCity(city);
        mapInstanceRef.current?.panTo([city.coordinates.lat, city.coordinates.lng], {
          animate: true,
          duration: 0.4
        });
      });

      markersRef.current?.addLayer(marker);
    });
  }, [filteredCities, focusedCity]);

  // Quick Region Jump Handler
  const handleQuickJump = (lat: number, lng: number, zoom: number) => {
    mapInstanceRef.current?.setView([lat, lng], zoom, { animate: true });
  };

  if (!isOpen) return null;

  return (
    <div
      id="interactive-atmospheric-map-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 backdrop-blur-xl bg-slate-950/70 transition-all duration-200"
    >
      <div className="relative w-full max-w-6xl h-[90vh] max-h-[880px] bg-white rounded-[32px] sm:rounded-[36px] shadow-[0_24px_80px_rgba(0,0,0,0.35)] border border-white/80 overflow-hidden flex flex-col">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-slate-100 bg-white/95 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 text-cyan-600 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h2 className="font-plus-jakarta text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                Fast-Load Atmospheric & Radar Doppler Map
                <span className="hidden sm:inline-flex text-xs font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full items-center gap-1">
                  <Zap className="w-3 h-3 text-emerald-600" />
                  Instant Hardware Accelerated
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                {cities.length} Precision Monitoring Stations & Ground Truth Telemetry Network
              </p>
            </div>
          </div>

          {/* Search bar & Close */}
          <div className="flex items-center gap-2.5">
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                id="input-fast-map-search"
                type="text"
                placeholder="Search city, radar, state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 w-44 sm:w-56 text-slate-800"
              />
            </div>

            <button
              id="btn-close-map-modal"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Region Jump Pill Bar */}
        <div className="px-5 py-2 bg-slate-50 border-b border-slate-100 flex items-center gap-2 overflow-x-auto text-xs scrollbar-none z-10">
          <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] shrink-0">Quick View:</span>
          <button
            onClick={() => handleQuickJump(20.5937, 78.9629, 5)}
            className="px-2.5 py-1 bg-white hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 text-slate-700 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1"
          >
            <Globe2 className="w-3 h-3 text-cyan-600" />
            All India View
          </button>
          <button
            onClick={() => handleQuickJump(31.5, 77.5, 7)}
            className="px-2.5 py-1 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-700 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1"
          >
            <Mountain className="w-3 h-3 text-emerald-600" />
            Himalayan Ridge
          </button>
          <button
            onClick={() => handleQuickJump(15.5, 73.8, 6)}
            className="px-2.5 py-1 bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-slate-700 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1"
          >
            <Waves className="w-3 h-3 text-sky-600" />
            West Coast & Konkan
          </button>
          <button
            onClick={() => handleQuickJump(13.0, 80.2, 6)}
            className="px-2.5 py-1 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 text-slate-700 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1"
          >
            <Waves className="w-3 h-3 text-indigo-600" />
            Coromandel & South
          </button>
          <button
            onClick={() => handleQuickJump(-69.4, 76.1, 4)}
            className="px-2.5 py-1 bg-white hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 text-slate-700 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1"
          >
            Antarctica Station
          </button>
        </div>

        {/* Map Body & Side Drawer Layout */}
        <div className="relative flex-1 w-full h-full flex flex-col md:flex-row overflow-hidden">
          {/* Main Leaflet Map View */}
          <div className="relative flex-1 h-full w-full bg-slate-100">
            <div ref={mapContainerRef} className="w-full h-full z-0" />

            {/* Layer Filter Floating Bar */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 p-1 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-slate-200">
              <button
                onClick={() => setActiveLayer('all')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeLayer === 'all' ? 'bg-cyan-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Stations ({cities.length})
              </button>
              <button
                onClick={() => setActiveLayer('anomaly')}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeLayer === 'anomaly'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ShieldAlert className="w-3 h-3 text-amber-300" />
                Forecast Busts
              </button>
              <button
                onClick={() => setActiveLayer('wind')}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeLayer === 'wind'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Wind className="w-3 h-3" />
                Wind & Ridge
              </button>
            </div>
          </div>

          {/* Right Selected Station Telemetry Drawer */}
          <div className="w-full md:w-84 border-t md:border-t-0 md:border-l border-slate-100 bg-slate-50/95 backdrop-blur-md p-5 flex flex-col justify-between overflow-y-auto z-10">
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded-md">
                  Station Telemetry
                </span>
                <span className="text-xs font-mono text-slate-500">{focusedCity.timeZoneStr}</span>
              </div>

              <div>
                <h3 className="font-plus-jakarta text-2xl font-black text-slate-900">
                  {focusedCity.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {focusedCity.state ? `${focusedCity.state} · ` : ''}{focusedCity.region}, {focusedCity.country}
                </p>
              </div>

              {/* Temp Comparison */}
              <div className="grid grid-cols-2 gap-2 p-3 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Ground Truth</span>
                  <div className="font-plus-jakarta text-2xl font-bold text-slate-900 flex items-baseline gap-1 font-mono">
                    {focusedCity.actualTempC}°C
                    <span className="text-xs font-normal text-slate-500 font-sans">({focusedCity.actualTempF}°F)</span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Raw NWP Model</span>
                  <div className="font-plus-jakarta text-2xl font-bold text-slate-400 flex items-baseline gap-1 font-mono line-through">
                    {focusedCity.predictedTempC}°C
                    <span className="text-xs font-normal text-slate-400 font-sans">({focusedCity.predictedTempF}°F)</span>
                  </div>
                </div>
              </div>

              {/* Anomaly Badge */}
              <div
                className={`p-3 rounded-2xl border flex flex-col gap-1 ${
                  focusedCity.status === 'bust'
                    ? 'bg-rose-50/80 border-rose-200 text-rose-900'
                    : 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold flex items-center gap-1">
                    <ShieldAlert className="w-4 h-4 text-rose-500" />
                    Model Divergence: +{focusedCity.deviationC}°C
                  </span>
                  <span className="text-[10px] font-mono font-bold bg-white px-2 py-0.5 rounded-full border">
                    {focusedCity.accuracyCalibration?.nudgingFrequency || '2-min Nudge'}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-700 mt-1">
                  {focusedCity.bustReason || focusedCity.topographicFeature.description}
                </p>
              </div>

              {/* Accuracy Bar */}
              <div className="flex flex-col gap-1.5 p-3 bg-white rounded-2xl border border-slate-200">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-600">AI Calibration Accuracy</span>
                  <span className="text-cyan-700 font-mono font-bold">
                    {focusedCity.accuracyCalibration?.aiCalibratedAccuracy || focusedCity.metricBars.accuracyScore}%
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                    style={{ width: `${focusedCity.accuracyCalibration?.aiCalibratedAccuracy || focusedCity.metricBars.accuracyScore}%` }}
                  />
                </div>
                <span className="text-[10px] text-emerald-700 font-medium">
                  {focusedCity.accuracyCalibration?.errorReduction || '78% Error Reduction'} · Kalman Gain {focusedCity.accuracyCalibration?.kalmanGain || 0.98}
                </span>
              </div>
            </div>

            {/* Action button */}
            <div className="pt-4 mt-4 border-t border-slate-200">
              <button
                id="btn-load-city-from-map"
                onClick={() => {
                  onSelectCity(focusedCity.id);
                  onClose();
                }}
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Check className="w-4 h-4" />
                Inspect & Forecast {focusedCity.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
