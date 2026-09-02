import React from 'react';
import { CityWeatherData } from '../types';
import { X, AlertTriangle, Wind, Thermometer, ShieldAlert, Compass, CheckCircle } from 'lucide-react';

interface DetailedReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  city: CityWeatherData;
}

export const DetailedReportModal: React.FC<DetailedReportModalProps> = ({
  isOpen,
  onClose,
  city,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="detailed-report-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-black/40 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="detailed-report-modal-content"
        className="glass-panel glass-border-rim rounded-[36px] w-full max-w-4xl p-6 sm:p-8 bg-white/90 shadow-2xl relative my-auto max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6 pb-4 border-b border-black/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#ba1a1a]/15 text-[#ba1a1a] text-xs font-inter font-bold tracking-wider uppercase">
                CRITICAL ANOMALY DOSSIER
              </span>
              <span className="text-xs font-inter text-[#50616b]">
                Ref ID: #FB-2024-{city.id.toUpperCase()}-09
              </span>
            </div>
            <h3 className="font-plus-jakarta text-2xl sm:text-3xl font-bold text-[#191c1e]">
              {city.name} Meteorological Bust Diagnostics
            </h3>
            <p className="font-inter text-xs sm:text-sm text-[#43474b]">
              Location: {city.region}, {city.country} | Coordinates: {city.coordinates.lat}°N, {city.coordinates.lng}°E
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#191c1e] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Primary Anomaly Banner */}
        <div className="p-5 rounded-3xl bg-[#ffdad6]/40 border border-[#ba1a1a]/30 mb-6 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#ba1a1a] text-white flex items-center justify-center shadow-md">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <div className="font-plus-jakarta text-lg font-bold text-[#ba1a1a]">
                +{city.deviation}°C Thermal Model Divergence
              </div>
              <p className="font-inter text-xs text-[#43474b]">
                Predicted: <span className="line-through">{city.predictedTemp}°C</span> → Ground Truth Observed: <strong className="text-[#191c1e] font-semibold">{city.actualTemp}°C</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-[11px] font-inter text-[#50616b] uppercase tracking-wider font-semibold">
                Detection Confidence
              </div>
              <div className="font-plus-jakarta text-xl font-bold text-[#006b5f]">
                {city.confidenceScore}%
              </div>
            </div>
          </div>
        </div>

        {/* Diagnostic Sections */}
        <div className="space-y-6">
          {/* 1. Meteorological Trigger */}
          <div className="bg-white/70 p-6 rounded-3xl border border-black/5">
            <h4 className="font-plus-jakarta text-base font-bold text-[#191c1e] mb-2 flex items-center gap-2">
              <Wind className="w-4 h-4 text-[#006b5f]" />
              Physical & Atmospheric Mechanism
            </h4>
            <p className="font-inter text-sm text-[#43474b] leading-relaxed mb-3">
              {city.meteorologicalTrigger || city.bustReason}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-inter text-[#50616b]">
              <div className="p-3 bg-[#f7f9fb] rounded-xl">
                <span className="block font-semibold text-[#191c1e]">Boundary Layer Inversion:</span>
                Height 650m (Suppressed)
              </div>
              <div className="p-3 bg-[#f7f9fb] rounded-xl">
                <span className="block font-semibold text-[#191c1e]">Sea-Breeze Delay:</span>
                +4.2 Hours Delay
              </div>
              <div className="p-3 bg-[#f7f9fb] rounded-xl">
                <span className="block font-semibold text-[#191c1e]">Sensible Heat Flux:</span>
                340 W/m² (Exceeding GFS baseline)
              </div>
            </div>
          </div>

          {/* 2. Chronological Breakdown */}
          <div className="bg-white/70 p-6 rounded-3xl border border-black/5">
            <h4 className="font-plus-jakarta text-base font-bold text-[#191c1e] mb-4 flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-[#ba1a1a]" />
              Chronological Drift Timeline (UTC+05:30)
            </h4>
            <div className="space-y-3 font-inter text-xs">
              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/80 border border-black/5">
                <span className="px-2 py-0.5 rounded bg-[#e0f2fe] text-[#006b5f] font-bold">06:00 AM</span>
                <div>
                  <strong className="text-[#191c1e]">Initialization Alignment:</strong> Model predicted 24°C, ground observed 24.2°C. Boundary layer stable.
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/80 border border-black/5">
                <span className="px-2 py-0.5 rounded bg-[#e0f2fe] text-[#006b5f] font-bold">11:30 AM</span>
                <div>
                  <strong className="text-[#191c1e]">Sea-Breeze Frontal Stall:</strong> Onshore marine winds expected at 12kt stalled at 3kt due to opposing Easterly gradient.
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#ffdad6]/30 border border-[#ba1a1a]/20">
                <span className="px-2 py-0.5 rounded bg-[#ba1a1a] text-white font-bold">14:00 PM</span>
                <div>
                  <strong className="text-[#ba1a1a]">Peak Thermal Runaway (+11°C):</strong> Ground station logged 39°C against the static 28°C forecast.
                </div>
              </div>
            </div>
          </div>

          {/* 3. Operational Vulnerability Impact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/70 p-5 rounded-3xl border border-black/5">
              <h5 className="font-plus-jakarta text-sm font-bold text-[#191c1e] mb-2 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#ba1a1a]" />
                Infrastructure & Grid Impact
              </h5>
              <ul className="text-xs font-inter text-[#43474b] space-y-1.5 list-disc list-inside">
                <li>Urban HVAC electrical load jumped +28% unexpectedly.</li>
                <li>Aviation takeoff density altitude adjustments required.</li>
                <li>Agricultural irrigation scheduling disruption.</li>
              </ul>
            </div>

            <div className="bg-white/70 p-5 rounded-3xl border border-black/5">
              <h5 className="font-plus-jakarta text-sm font-bold text-[#191c1e] mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#006b5f]" />
                Model Tuning Recommendations
              </h5>
              <ul className="text-xs font-inter text-[#43474b] space-y-1.5 list-disc list-inside">
                <li>Integrate high-resolution 1km coastal sea-surface temperature grids.</li>
                <li>Adjust urban roughness length parameters in ECMWF IFS.</li>
                <li>Deploy automated 15-minute nudging algorithms.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-4 border-t border-black/10 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-inter text-[#006b5f]">
            <CheckCircle className="w-4 h-4" />
            <span>Authenticated by FORECAST-BUST Validation Protocol</span>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#191c1e] hover:bg-black text-white text-xs font-inter font-semibold rounded-full shadow-sm transition-all cursor-pointer"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
