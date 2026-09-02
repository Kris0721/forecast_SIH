import React from 'react';
import { 
  X, 
  BarChart3, 
  Sparkles, 
  Radio, 
  Flame, 
  Check, 
  TrendingUp, 
  Layers, 
  Cpu, 
  Mountain, 
  Waves,
  ArrowRight
} from 'lucide-react';
import { CityWeatherData } from '../types';

interface LocationComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCities: CityWeatherData[];
  onSelectPrimaryCity: (cityId: string) => void;
  tempUnit: 'C' | 'F';
}

export const LocationComparisonModal: React.FC<LocationComparisonModalProps> = ({
  isOpen,
  onClose,
  selectedCities,
  onSelectPrimaryCity,
  tempUnit
}) => {
  if (!isOpen || selectedCities.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-6xl bg-slate-900 border border-indigo-500/40 rounded-3xl shadow-2xl overflow-hidden my-8 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Multi-Station Comparative Telemetry
                </span>
                <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-indigo-500/30">
                  {selectedCities.length} Stations Active
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Indian Meteorological Station Anomaly Matrix
              </h2>
            </div>
          </div>

          <button
            id="btn-close-comparison-modal"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Quick Summary Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4">
              <span className="text-xs font-mono text-slate-400">Max Live Deviation</span>
              <div className="text-2xl font-black text-rose-400 mt-1 font-mono">
                {Math.max(...selectedCities.map(c => Math.abs(c.deviationC)))}°C
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Peak observed model forecast failure</p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4">
              <span className="text-xs font-mono text-slate-400">Average AI Accuracy</span>
              <div className="text-2xl font-black text-emerald-400 mt-1 font-mono">
                {(selectedCities.reduce((acc, c) => acc + (c.accuracyCalibration?.aiCalibratedAccuracy || c.metricBars.accuracyScore), 0) / selectedCities.length).toFixed(1)}%
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Post-Kalman filtered precision</p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4">
              <span className="text-xs font-mono text-slate-400">Elevation Range</span>
              <div className="text-2xl font-black text-sky-400 mt-1 font-mono">
                {selectedCities.map(c => c.topographicFeature.elevation).join(' · ')}
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Microclimate altitude variance</p>
            </div>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedCities.map((city) => {
              const actualTemp = tempUnit === 'C' ? `${city.actualTempC}°C` : `${city.actualTempF}°F`;
              const forecastTemp = tempUnit === 'C' ? `${city.predictedTempC}°C` : `${city.predictedTempF}°F`;
              const devTemp = tempUnit === 'C' ? `+${city.deviationC}°C` : `+${city.deviationF}°F`;
              const accuracy = city.accuracyCalibration?.aiCalibratedAccuracy || city.metricBars.accuracyScore;

              return (
                <div
                  key={city.id}
                  className="bg-slate-800/40 border border-slate-700/80 rounded-2xl p-4 flex flex-col justify-between hover:border-indigo-500/60 transition space-y-4"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-lg text-white">{city.name}</h3>
                        <p className="text-xs text-slate-400 font-mono">
                          {city.state || city.region.split('/')[0].trim()} · {city.topographicFeature.elevation}
                        </p>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                        city.status === 'bust' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-emerald-500/20 text-emerald-300'
                      }`}>
                        {devTemp} Bust
                      </span>
                    </div>

                    {/* Meteorological Cause */}
                    <div className="mt-3 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                      <div className="font-semibold text-indigo-300 flex items-center gap-1 text-[11px]">
                        <Radio className="w-3 h-3 text-indigo-400" />
                        Radar & Topography
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        {city.topographicFeature.description}
                      </p>
                    </div>

                    {/* NWP vs Calibrated Stats */}
                    <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="bg-slate-900/40 p-2 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">Live Actual</span>
                        <span className="text-base font-black text-white">{actualTemp}</span>
                      </div>
                      <div className="bg-slate-900/40 p-2 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">Raw NWP</span>
                        <span className="text-base font-medium text-slate-400 line-through">{forecastTemp}</span>
                      </div>
                      <div className="bg-slate-900/40 p-2 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">Kalman Gain</span>
                        <span className="text-sm font-bold text-sky-400">{city.accuracyCalibration?.kalmanGain || 0.95}</span>
                      </div>
                      <div className="bg-slate-900/40 p-2 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">AI Accuracy</span>
                        <span className="text-sm font-bold text-emerald-400">{accuracy}%</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onSelectPrimaryCity(city.id);
                      onClose();
                    }}
                    className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-indigo-950/40"
                  >
                    Set as Primary Inspection Station
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Telemetry synchronized with IMD MOSDAC & INSAT-3DS High-Resolution Sounders</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition font-medium cursor-pointer"
          >
            Close Matrix
          </button>
        </div>
      </div>
    </div>
  );
};
