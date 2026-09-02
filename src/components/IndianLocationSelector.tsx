import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Search, 
  CheckSquare, 
  Square, 
  Activity, 
  Compass, 
  Radio, 
  SlidersHorizontal, 
  Mountain, 
  Waves, 
  Flame, 
  Sparkles, 
  Eye, 
  Check, 
  X,
  ArrowUpDown,
  Layers,
  ChevronRight,
  BarChart3
} from 'lucide-react';
import { CityWeatherData } from '../types';

interface IndianLocationSelectorProps {
  cities: CityWeatherData[];
  activeCityId: string;
  onSelectCity: (cityId: string) => void;
  selectedCityIds?: string[];
  onToggleCitySelection?: (cityId: string) => void;
  onSelectAllVisible?: (cityIds: string[]) => void;
  onClearSelection?: () => void;
  onOpenComparison?: () => void;
  tempUnit: 'C' | 'F';
}

type ZoneFilter = 'ALL' | 'NORTH' | 'SOUTH' | 'WEST' | 'EAST' | 'CENTRAL' | 'HIMALAYAN' | 'COASTAL' | 'BUSTS';

export const IndianLocationSelector: React.FC<IndianLocationSelectorProps> = ({
  cities,
  activeCityId,
  onSelectCity,
  selectedCityIds = [],
  onToggleCitySelection,
  onSelectAllVisible,
  onClearSelection,
  onOpenComparison,
  tempUnit
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeZone, setActiveZone] = useState<ZoneFilter>('ALL');
  const [sortBy, setSortBy] = useState<'accuracy' | 'deviation' | 'name' | 'elevation'>('deviation');
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');

  // Filtered and sorted cities
  const filteredCities = useMemo(() => {
    return cities.filter(city => {
      // Search matching
      const matchesSearch = 
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (city.state && city.state.toLowerCase().includes(searchQuery.toLowerCase())) ||
        city.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.topographicFeature.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (city.bustReason && city.bustReason.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      // Zone matching
      if (activeZone === 'ALL') return true;
      if (activeZone === 'BUSTS') return city.status === 'bust';
      if (activeZone === 'COASTAL') {
        const coastalKeywords = ['coast', 'littoral', 'estuary', 'delta', 'sea', 'islands', 'bay'];
        return coastalKeywords.some(kw => city.region.toLowerCase().includes(kw));
      }
      if (activeZone === 'HIMALAYAN') {
        const himalayanKeywords = ['himalaya', 'valley', 'ridge', 'hill', 'nilgiri', 'shivalik', 'pass', 'plateau', 'ladakh', 'shimla', 'srinagar', 'ooty', 'darjeeling', 'gangtok', 'dehradun'];
        return himalayanKeywords.some(kw => city.region.toLowerCase().includes(kw) || city.name.toLowerCase().includes(kw) || city.zone === 'Himalayan');
      }
      if (activeZone === 'NORTH') return city.zone === 'North' || ['delhi', 'lucknow', 'chandigarh', 'varanasi', 'srinagar', 'shimla'].includes(city.id);
      if (activeZone === 'SOUTH') return city.zone === 'South' || ['bengaluru', 'chennai', 'hyderabad', 'kochi', 'visakhapatnam', 'ooty'].includes(city.id);
      if (activeZone === 'WEST') return city.zone === 'West' || ['mumbai', 'pune', 'ahmedabad', 'jaipur', 'jodhpur', 'panaji-goa'].includes(city.id);
      if (activeZone === 'EAST') return city.zone === 'East' || ['kolkata', 'patna', 'bhubaneswar', 'darjeeling', 'gangtok'].includes(city.id);
      if (activeZone === 'CENTRAL') return city.zone === 'Central' || ['bhopal'].includes(city.id);

      return true;
    }).sort((a, b) => {
      if (sortBy === 'deviation') {
        return Math.abs(b.deviationC) - Math.abs(a.deviationC);
      }
      if (sortBy === 'accuracy') {
        return (b.accuracyCalibration?.aiCalibratedAccuracy || b.metricBars.accuracyScore) - 
               (a.accuracyCalibration?.aiCalibratedAccuracy || a.metricBars.accuracyScore);
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'elevation') {
        const getElevNum = (str: string) => parseInt(str.replace(/[^0-9]/g, '')) || 0;
        return getElevNum(b.topographicFeature.elevation) - getElevNum(a.topographicFeature.elevation);
      }
      return 0;
    });
  }, [cities, searchQuery, activeZone, sortBy]);

  const zoneTabs: { key: ZoneFilter; label: string; count: number; icon: React.ReactNode }[] = [
    { key: 'ALL', label: 'All India', count: cities.length, icon: <Layers className="w-3.5 h-3.5" /> },
    { key: 'BUSTS', label: 'Active Live Busts', count: cities.filter(c => c.status === 'bust').length, icon: <Flame className="w-3.5 h-3.5 text-rose-500" /> },
    { key: 'HIMALAYAN', label: 'Himalayas & High Alt', count: cities.filter(c => ['leh', 'shimla', 'srinagar', 'ooty', 'dehradun', 'darjeeling', 'gangtok'].includes(c.id)).length, icon: <Mountain className="w-3.5 h-3.5 text-emerald-500" /> },
    { key: 'COASTAL', label: 'Coastal & Islands', count: cities.filter(c => ['mumbai', 'chennai', 'kochi', 'visakhapatnam', 'panaji-goa', 'port-blair', 'bhubaneswar', 'kolkata'].includes(c.id)).length, icon: <Waves className="w-3.5 h-3.5 text-sky-500" /> },
    { key: 'NORTH', label: 'North', count: cities.filter(c => ['delhi', 'lucknow', 'chandigarh', 'varanasi', 'srinagar', 'shimla'].includes(c.id)).length, icon: <Compass className="w-3.5 h-3.5 text-indigo-500" /> },
    { key: 'WEST', label: 'West', count: cities.filter(c => ['mumbai', 'pune', 'ahmedabad', 'jaipur', 'jodhpur', 'panaji-goa'].includes(c.id)).length, icon: <Compass className="w-3.5 h-3.5 text-amber-500" /> },
    { key: 'SOUTH', label: 'South', count: cities.filter(c => ['bengaluru', 'chennai', 'hyderabad', 'kochi', 'visakhapatnam', 'ooty'].includes(c.id)).length, icon: <Compass className="w-3.5 h-3.5 text-teal-500" /> },
    { key: 'EAST', label: 'East & NE', count: cities.filter(c => ['kolkata', 'patna', 'bhubaneswar', 'guwahati', 'cherrapunji', 'darjeeling', 'gangtok'].includes(c.id)).length, icon: <Compass className="w-3.5 h-3.5 text-purple-500" /> },
    { key: 'CENTRAL', label: 'Central', count: cities.filter(c => ['bhopal'].includes(c.id)).length, icon: <Compass className="w-3.5 h-3.5 text-orange-500" /> },
  ];

  const handleSelectAll = () => {
    if (onSelectAllVisible) {
      onSelectAllVisible(filteredCities.map(c => c.id));
    }
  };

  return (
    <section id="indian-location-suite" className="w-full bg-slate-900/95 border-y border-slate-800 backdrop-blur-xl py-8 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-6">
        {/* Header with Title and Comparison Action */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-orange-500/20 via-emerald-500/20 to-sky-500/20 text-emerald-400 border border-emerald-500/30">
                <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                IMD & INSAT-3DS DUAL-POL RADAR NETWORK
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {cities.length} Verified Meteorological Stations
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              Indian Subcontinent Meteorological Stations & Datasets
            </h2>
            <p className="text-sm text-slate-300 max-w-3xl mt-1">
              Select any station to inspect real-time forecast line deviations, or check multiple boxes to compare accuracy calibrations, radar soundings, and microclimates side-by-side.
            </p>
          </div>

          {/* Quick Selection Controls & Compare Button */}
          <div className="flex items-center flex-wrap gap-2.5">
            {selectedCityIds.length > 0 && (
              <div className="flex items-center gap-2 bg-slate-800/90 border border-indigo-500/40 rounded-xl px-3 py-1.5 shadow-lg shadow-indigo-950/40">
                <span className="text-xs font-semibold text-indigo-300 flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-indigo-400" />
                  {selectedCityIds.length} Stations Checked
                </span>
                {onOpenComparison && (
                  <button
                    id="btn-compare-selected-locations"
                    onClick={onOpenComparison}
                    className="ml-1 px-3 py-1 bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white text-xs font-bold rounded-lg transition-all shadow-sm flex items-center gap-1 cursor-pointer"
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    Compare Checked
                  </button>
                )}
                {onClearSelection && (
                  <button
                    id="btn-clear-location-selection"
                    onClick={onClearSelection}
                    className="p-1 hover:bg-slate-700 text-slate-400 hover:text-white rounded transition cursor-pointer"
                    title="Clear selected checkboxes"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}

            <button
              id="btn-select-all-visible"
              onClick={handleSelectAll}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-200 rounded-xl transition cursor-pointer flex items-center gap-1.5"
            >
              <CheckSquare className="w-3.5 h-3.5 text-slate-400" />
              Check All ({filteredCities.length})
            </button>
          </div>
        </div>

        {/* Search, Filter Tabs & Sort Controls */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="input-search-indian-locations"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search station (e.g. Mumbai, Pune, Shimla, radar, terrain)..."
                className="w-full pl-9 pr-4 py-2 bg-slate-800/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort and View Toggle Controls */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/80 rounded-xl p-1 text-xs">
                <span className="text-slate-400 px-2 flex items-center gap-1">
                  <ArrowUpDown className="w-3 h-3" />
                  Sort:
                </span>
                <button
                  id="btn-sort-deviation"
                  onClick={() => setSortBy('deviation')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                    sortBy === 'deviation' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Bust Deviation
                </button>
                <button
                  id="btn-sort-accuracy"
                  onClick={() => setSortBy('accuracy')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                    sortBy === 'accuracy' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Accuracy %
                </button>
                <button
                  id="btn-sort-elevation"
                  onClick={() => setSortBy('elevation')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                    sortBy === 'elevation' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Elevation
                </button>
              </div>

              <div className="hidden sm:flex items-center bg-slate-800/80 border border-slate-700/80 rounded-xl p-1 text-xs">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                    viewMode === 'grid' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Cards
                </button>
                <button
                  onClick={() => setViewMode('compact')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                    viewMode === 'compact' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Compact
                </button>
              </div>
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-slate-700">
            {zoneTabs.map((tab) => {
              const isActive = activeZone === tab.key;
              return (
                <button
                  key={tab.key}
                  id={`tab-zone-${tab.key.toLowerCase()}`}
                  onClick={() => setActiveZone(tab.key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                    isActive
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-900/30'
                      : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60 text-slate-300 hover:text-white'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isActive ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-700 text-slate-400'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Location Grid with Interactive Checkboxes */}
        {filteredCities.length === 0 ? (
          <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-8 text-center space-y-2">
            <Compass className="w-8 h-8 text-slate-500 mx-auto" />
            <p className="text-slate-300 font-medium">No stations match &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-xs text-slate-500">Try clearing the search query or selecting &ldquo;All India&rdquo; tab.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveZone('ALL'); }}
              className="mt-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-xs font-medium text-white rounded-xl transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            {filteredCities.map((city) => {
              const isPrimaryActive = city.id === activeCityId;
              const isChecked = selectedCityIds.includes(city.id);
              const actualTemp = tempUnit === 'C' ? `${city.actualTempC}°C` : `${city.actualTempF}°F`;
              const forecastTemp = tempUnit === 'C' ? `${city.predictedTempC}°C` : `${city.predictedTempF}°F`;
              const devTemp = tempUnit === 'C' ? `+${city.deviationC}°C` : `+${city.deviationF}°F`;
              const accuracy = city.accuracyCalibration?.aiCalibratedAccuracy || city.metricBars.accuracyScore;

              return (
                <div
                  key={city.id}
                  id={`card-location-${city.id}`}
                  className={`group relative rounded-2xl transition-all duration-200 border overflow-hidden flex flex-col justify-between ${
                    isPrimaryActive
                      ? 'bg-gradient-to-b from-indigo-900/60 to-slate-900 border-indigo-500 shadow-xl shadow-indigo-950/60 ring-1 ring-indigo-500/50'
                      : isChecked
                      ? 'bg-slate-800/90 border-indigo-500/50 shadow-md'
                      : 'bg-slate-800/40 hover:bg-slate-800/80 border-slate-700/60 hover:border-slate-600'
                  }`}
                >
                  {/* Top Bar with Checkbox and Status Badge */}
                  <div className="p-3.5 pb-2">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      {/* Checkbox for Multi-Select Comparison */}
                      <div className="flex items-center gap-2">
                        <button
                          id={`checkbox-location-${city.id}`}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onToggleCitySelection) {
                              onToggleCitySelection(city.id);
                            }
                          }}
                          className={`w-5 h-5 rounded-md flex items-center justify-center transition border cursor-pointer ${
                            isChecked
                              ? 'bg-indigo-600 border-indigo-400 text-white shadow-sm'
                              : 'bg-slate-700/80 border-slate-600 text-transparent hover:border-slate-400'
                          }`}
                          title={isChecked ? 'Uncheck location' : 'Check to compare'}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onSelectCity(city.id)}
                          className="text-left font-bold text-white text-base group-hover:text-indigo-300 transition flex items-center gap-1 cursor-pointer"
                        >
                          {city.name}
                          {isPrimaryActive && (
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          )}
                        </button>
                      </div>

                      {/* Bust vs Normal Tag */}
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                        city.status === 'bust'
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      }`}>
                        {city.status === 'bust' ? (
                          <>
                            <Flame className="w-2.5 h-2.5 text-rose-400" />
                            {devTemp} Bust
                          </>
                        ) : (
                          <>
                            <Check className="w-2.5 h-2.5 text-emerald-400" />
                            Normal
                          </>
                        )}
                      </span>
                    </div>

                    {/* State / Region and Elevation */}
                    <div className="flex items-center justify-between text-xs text-slate-400 gap-1 font-mono">
                      <span className="truncate" title={city.region}>
                        {city.state || city.region.split('/')[0].trim()}
                      </span>
                      <span className="text-slate-300 font-semibold shrink-0 bg-slate-700/50 px-1.5 py-0.5 rounded">
                        {city.topographicFeature.elevation}
                      </span>
                    </div>

                    {/* Meteorological Feature Snippet */}
                    <p className="text-[11px] text-slate-300 mt-2 line-clamp-2 leading-relaxed bg-slate-900/40 p-2 rounded-xl border border-slate-800/80">
                      {city.bustReason || city.topographicFeature.description}
                    </p>
                  </div>

                  {/* Temperature and Calibration Metrics Footer */}
                  <div className="p-3.5 pt-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <div className="flex items-baseline gap-2">
                      <div className="text-lg font-black text-white font-mono">
                        {actualTemp}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        NWP: <span className="line-through text-slate-500">{forecastTemp}</span>
                      </div>
                    </div>

                      <div className="text-right">
                        <a
                          href="#past-bust-history-section"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectCity(city.id);
                          }}
                          className="text-[10px] font-semibold text-rose-400 hover:text-rose-300 flex items-center justify-end gap-1 underline"
                          title="View 5-Day Historical Busts for this Station"
                        >
                          <Flame className="w-2.5 h-2.5 text-rose-400" />
                          5-Day Busts ↗
                        </a>
                        <div className="text-[10px] font-semibold text-emerald-400 flex items-center justify-end gap-1 mt-0.5">
                          <Sparkles className="w-2.5 h-2.5" />
                          {accuracy}%
                        </div>
                      </div>
                  </div>

                  {/* Click Overlay to set as Active primary Station */}
                  <button
                    type="button"
                    onClick={() => onSelectCity(city.id)}
                    className="absolute inset-0 z-0 opacity-0 cursor-pointer"
                    aria-label={`Select ${city.name}`}
                  />
                  {/* Ensure the checkbox remains on top */}
                  <div className="relative z-10 pointer-events-none" />
                </div>
              );
            })}
          </div>
        ) : (
          /* Compact Table View */
          <div className="bg-slate-800/50 border border-slate-700/80 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-800 text-slate-400 font-mono uppercase tracking-wider border-b border-slate-700">
                  <tr>
                    <th className="p-3 w-10">
                      <span className="sr-only">Select</span>
                    </th>
                    <th className="p-3">Station / City</th>
                    <th className="p-3">State / Zone</th>
                    <th className="p-3">Elevation</th>
                    <th className="p-3">Live Obs</th>
                    <th className="p-3">NWP Model</th>
                    <th className="p-3">Bust Deviation</th>
                    <th className="p-3">AI Precision</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {filteredCities.map((city) => {
                    const isPrimaryActive = city.id === activeCityId;
                    const isChecked = selectedCityIds.includes(city.id);
                    const actualTemp = tempUnit === 'C' ? `${city.actualTempC}°C` : `${city.actualTempF}°F`;
                    const forecastTemp = tempUnit === 'C' ? `${city.predictedTempC}°C` : `${city.predictedTempF}°F`;
                    const devTemp = tempUnit === 'C' ? `+${city.deviationC}°C` : `+${city.deviationF}°F`;
                    const accuracy = city.accuracyCalibration?.aiCalibratedAccuracy || city.metricBars.accuracyScore;

                    return (
                      <tr
                        key={city.id}
                        id={`row-location-${city.id}`}
                        onClick={() => onSelectCity(city.id)}
                        className={`transition cursor-pointer ${
                          isPrimaryActive
                            ? 'bg-indigo-950/60 font-semibold text-white'
                            : isChecked
                            ? 'bg-slate-800/80'
                            : 'hover:bg-slate-800/40'
                        }`}
                      >
                        <td className="p-3" onClick={(e) => e.stopPropagation()}>
                          <button
                            type="button"
                            onClick={() => onToggleCitySelection && onToggleCitySelection(city.id)}
                            className={`w-4 h-4 rounded flex items-center justify-center transition border cursor-pointer ${
                              isChecked
                                ? 'bg-indigo-600 border-indigo-400 text-white'
                                : 'bg-slate-700 border-slate-600 text-transparent hover:border-slate-400'
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </button>
                        </td>
                        <td className="p-3 font-bold text-white flex items-center gap-1.5">
                          {city.name}
                          {isPrimaryActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          )}
                        </td>
                        <td className="p-3 font-mono text-slate-400">
                          {city.state || city.region.split('/')[0].trim()}
                        </td>
                        <td className="p-3 font-mono text-slate-300">
                          {city.topographicFeature.elevation}
                        </td>
                        <td className="p-3 font-mono font-bold text-white">
                          {actualTemp}
                        </td>
                        <td className="p-3 font-mono text-slate-400 line-through">
                          {forecastTemp}
                        </td>
                        <td className="p-3">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                            city.status === 'bust'
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          }`}>
                            {city.status === 'bust' ? `${devTemp} Bust` : 'Normal'}
                          </span>
                        </td>
                        <td className="p-3 font-mono text-emerald-400 font-bold">
                          {accuracy}%
                        </td>
                        <td className="p-3 text-right">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectCity(city.id);
                            }}
                            className="px-2.5 py-1 bg-slate-700 hover:bg-indigo-600 text-white rounded-lg text-[11px] font-medium transition cursor-pointer"
                          >
                            Inspect
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
