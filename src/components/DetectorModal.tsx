import React, { useState } from 'react';
import { CityWeatherData } from '../types';
import { X, Search, Radar, AlertTriangle, CheckCircle2, Sparkles, Sliders, RefreshCw, BarChart2 } from 'lucide-react';

interface DetectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  cities: CityWeatherData[];
  onSelectCity: (cityId: string) => void;
  selectedCity: CityWeatherData;
}

export const DetectorModal: React.FC<DetectorModalProps> = ({
  isOpen,
  onClose,
  cities,
  onSelectCity,
  selectedCity,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [customPredictedTemp, setCustomPredictedTemp] = useState<number>(selectedCity.predictedTemp);
  const [customActualTemp, setCustomActualTemp] = useState<number>(selectedCity.actualTemp);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredCities = cities.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentDeviation = Number((customActualTemp - customPredictedTemp).toFixed(1));
  const isBust = Math.abs(currentDeviation) >= 5;

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setAiAnalysis(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      if (Math.abs(currentDeviation) >= 10) {
        setAiAnalysis(
          `🔴 CRITICAL BUST DETECTED (${currentDeviation > 0 ? '+' : ''}${currentDeviation}°C): ` +
          `Primary driver is rapid anticyclonic boundary-layer subsidence combined with delayed coastal maritime advection. Numerical weather prediction models failed to resolve the local thermal inversion top at 850 hPa.`
        );
      } else if (Math.abs(currentDeviation) >= 5) {
        setAiAnalysis(
          `⚠️ MODERATE BUST DETECTED (${currentDeviation > 0 ? '+' : ''}${currentDeviation}°C): ` +
          `Local microclimatic friction and unexpected solar insolation caused surface heating beyond NWP boundary parameterization.`
        );
      } else {
        setAiAnalysis(
          `✅ NOMINAL CONVERGENCE (${currentDeviation > 0 ? '+' : ''}${currentDeviation}°C): ` +
          `Model forecasts align tightly within the acceptable 3°C global tolerance envelope.`
        );
      }
    }, 800);
  };

  return (
    <div
      id="detector-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-black/30 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="detector-modal-content"
        className="glass-panel glass-border-rim rounded-[36px] w-full max-w-4xl p-6 sm:p-8 bg-white/85 shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-start mb-6 pb-4 border-b border-black/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#e0f2fe] flex items-center justify-center text-[#006b5f]">
              <Radar className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div>
              <h3 className="font-plus-jakarta text-2xl font-semibold text-[#191c1e]">
                Atmospheric Anomaly Detector Lab
              </h3>
              <p className="font-inter text-xs text-[#50616b]">
                Real-time NWP model divergence validator & diagnostic sandbox
              </p>
            </div>
          </div>
          <button
            id="close-detector-modal"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#191c1e] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* City Selection Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          <div className="md:col-span-5 flex flex-col gap-3">
            <label className="font-inter text-xs font-semibold text-[#50616b] uppercase tracking-wider">
              Select Monitoring Station
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-[#50616b] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search city or country..."
                className="w-full bg-white/70 border border-black/10 rounded-full pl-10 pr-4 py-2 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-[#006b5f]/30"
              />
            </div>

            <div className="max-h-[160px] overflow-y-auto space-y-1.5 pr-1">
              {filteredCities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => {
                    onSelectCity(city.id);
                    setCustomPredictedTemp(city.predictedTemp);
                    setCustomActualTemp(city.actualTemp);
                    setAiAnalysis(null);
                  }}
                  className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-inter flex justify-between items-center transition-all cursor-pointer ${
                    selectedCity.id === city.id
                      ? 'bg-[#191c1e] text-white font-medium shadow-xs'
                      : 'bg-white/50 text-[#191c1e] hover:bg-white border border-black/5'
                  }`}
                >
                  <div>
                    <span className="font-semibold">{city.name}</span>
                    <span className="opacity-70 ml-1.5">({city.country})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{city.actualTemp}°C</span>
                    {city.status === 'bust' && (
                      <span className="px-1.5 py-0.5 rounded-full bg-[#ba1a1a] text-white text-[10px] font-bold">
                        BUST
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Model Comparison Matrix */}
          <div className="md:col-span-7 bg-white/60 rounded-3xl p-5 border border-black/5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-plus-jakarta text-sm font-semibold text-[#191c1e] flex items-center gap-1.5">
                  <BarChart2 className="w-4 h-4 text-[#006b5f]" />
                  Global NWP Model Spread for {selectedCity.name}
                </h4>
                <span className="text-[11px] font-inter text-[#006b5f] font-medium">
                  Verified WMO Station
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                <div className="bg-white/80 p-2.5 rounded-2xl border border-black/5 text-center">
                  <div className="text-[10px] font-inter text-[#50616b] font-medium">ECMWF IFS</div>
                  <div className="font-plus-jakarta text-lg font-bold text-[#191c1e]">
                    {selectedCity.models.ecmwf}°C
                  </div>
                </div>
                <div className="bg-white/80 p-2.5 rounded-2xl border border-black/5 text-center">
                  <div className="text-[10px] font-inter text-[#50616b] font-medium">NOAA GFS</div>
                  <div className="font-plus-jakarta text-lg font-bold text-[#191c1e]">
                    {selectedCity.models.gfs}°C
                  </div>
                </div>
                <div className="bg-white/80 p-2.5 rounded-2xl border border-black/5 text-center">
                  <div className="text-[10px] font-inter text-[#50616b] font-medium">DWD ICON</div>
                  <div className="font-plus-jakarta text-lg font-bold text-[#191c1e]">
                    {selectedCity.models.icon}°C
                  </div>
                </div>
                <div className="bg-white/80 p-2.5 rounded-2xl border border-black/5 text-center">
                  <div className="text-[10px] font-inter text-[#50616b] font-medium">UKMO GLOBAL</div>
                  <div className="font-plus-jakarta text-lg font-bold text-[#191c1e]">
                    {selectedCity.models.ukmo}°C
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Live Ground Truth summary */}
            <div className="bg-[#f7f9fb] p-3 rounded-2xl flex justify-between items-center text-xs font-inter border border-black/5">
              <div>
                <span className="text-[#50616b]">Surface Reality: </span>
                <strong className="text-base font-plus-jakarta text-[#191c1e] font-bold">
                  {selectedCity.actualTemp}°C
                </strong>
                <span className="text-[#50616b] ml-1">({selectedCity.condition})</span>
              </div>
              <div className="text-right">
                <span className="text-[#50616b]">Model Consensus Error: </span>
                <strong className="text-[#ba1a1a] font-bold">
                  +{selectedCity.deviation}°C
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* Live Drift Simulator & Adjusters */}
        <div className="bg-[#f2f4f6]/80 rounded-3xl p-6 border border-black/5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Sliders className="w-4 h-4 text-[#006b5f]" />
            <h4 className="font-plus-jakarta text-sm font-semibold text-[#191c1e]">
              Hypothetical Atmospheric Stress-Test
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            <div>
              <div className="flex justify-between text-xs font-inter mb-1.5">
                <span className="text-[#50616b]">Predicted Model Output:</span>
                <span className="font-bold text-[#191c1e]">{customPredictedTemp}°C</span>
              </div>
              <input
                type="range"
                min={15}
                max={48}
                step={0.5}
                value={customPredictedTemp}
                onChange={(e) => {
                  setCustomPredictedTemp(parseFloat(e.target.value));
                  setAiAnalysis(null);
                }}
                className="w-full accent-[#50616b] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-inter mb-1.5">
                <span className="text-[#50616b]">Actual Ground Observation:</span>
                <span className="font-bold text-[#191c1e]">{customActualTemp}°C</span>
              </div>
              <input
                type="range"
                min={15}
                max={48}
                step={0.5}
                value={customActualTemp}
                onChange={(e) => {
                  setCustomActualTemp(parseFloat(e.target.value));
                  setAiAnalysis(null);
                }}
                className="w-full accent-[#006b5f] cursor-pointer"
              />
            </div>
          </div>

          {/* Real-time Drift Outcome */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-black/5">
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  isBust ? 'bg-[#ba1a1a]/15 text-[#ba1a1a]' : 'bg-[#006b5f]/15 text-[#006b5f]'
                }`}
              >
                {isBust ? <AlertTriangle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
              </div>
              <div>
                <div className="font-inter text-xs font-bold uppercase tracking-wider text-[#191c1e]">
                  {isBust ? 'FORECAST BUST TRIGGERED' : 'ACCEPTABLE FORECAST MARGIN'}
                </div>
                <div className="text-xs font-inter text-[#50616b]">
                  Calculated Net Drift: <strong className={isBust ? 'text-[#ba1a1a]' : 'text-[#006b5f]'}>
                    {currentDeviation > 0 ? `+${currentDeviation}` : currentDeviation}°C
                  </strong>
                </div>
              </div>
            </div>

            <button
              onClick={handleRunAnalysis}
              disabled={isAnalyzing}
              className="px-5 py-2.5 bg-[#006b5f] hover:bg-[#005047] text-white text-xs font-inter font-semibold rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Running Neural Analysis...
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  Synthesize Root Cause
                </>
              )}
            </button>
          </div>

          {/* AI Diagnostic Output */}
          {aiAnalysis && (
            <div className="mt-4 p-4 rounded-2xl bg-white border border-black/5 text-xs sm:text-sm font-inter text-[#191c1e] leading-relaxed shadow-xs animate-in fade-in slide-in-from-top-2 duration-300">
              {aiAnalysis}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex justify-between items-center text-[11px] font-inter text-[#50616b]">
          <span>SIH26079 Deep Atmospheric Intelligence Engine</span>
          <span>Sampling Interval: 15min</span>
        </div>
      </div>
    </div>
  );
};
