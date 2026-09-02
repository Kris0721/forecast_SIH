import React from 'react';
import { Server, Database, ShieldCheck, Zap, BarChart3, Wind } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const techCards = [
    {
      icon: Server,
      title: 'Global NWP Ingestion Grid',
      desc: 'Connects to high-throughput GRIB2 / NetCDF4 data pipelines from NOAA NOMADS, ECMWF Open Data, and Copernicus CDS, decoding planetary atmospheric state matrices.',
    },
    {
      icon: Wind,
      title: 'Boundary-Layer Microphysics',
      desc: 'Models land-sea breeze frontal penetration, friction velocity, Monin-Obukhov stability lengths, and urban canopy thermal traps with high fidelity.',
    },
    {
      icon: Database,
      title: 'High-Cadence Telemetry Vault',
      desc: 'Stores million-point spatial observations with indexed sub-kilometer geohashes, allowing instantaneous retrospective variance querying across 10-year baselines.',
    },
    {
      icon: Zap,
      title: 'Neural Drift Classification',
      desc: 'Fine-tuned atmospheric transformer architecture trained on 25+ years of verified forecast bust anomalies across 4,800 worldwide meteorological stations.',
    },
    {
      icon: BarChart3,
      title: 'Ensemble Uncertainty Scoring',
      desc: 'Calculates spread-skill relationships between perturbed ensemble members to quantify predictive confidence and trigger early warning flags for model breakdowns.',
    },
    {
      icon: ShieldCheck,
      title: 'WMO & ICAO Compliant Verification',
      desc: 'Implements Standard Verification Measures (MAE, RMSE, Brier Score, Continuous Ranked Probability Score) adhering strictly to World Meteorological Organization protocols.',
    },
  ];

  return (
    <section
      id="technology-section"
      className="py-16 md:py-24 px-6 md:px-14 flex flex-col gap-12 border-t border-white/40"
    >
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3cddc7]/20 border border-[#3cddc7]/40 text-[#006b5f] text-xs font-inter font-semibold uppercase tracking-widest mb-4">
          Atmospheric Engine Infrastructure
        </div>
        <h2 className="font-plus-jakarta text-3xl sm:text-4xl md:text-[40px] font-normal text-[#191c1e] mb-4">
          CORE TECHNOLOGY & DATA PIPELINE
        </h2>
        <p className="font-inter text-base sm:text-lg text-[#43474b] leading-relaxed">
          High-performance distributed architecture engineered for sub-second anomaly
          triangulation across heterogeneous weather data streams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        {techCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className="glass-panel rounded-[28px] p-7 glass-border-rim flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:border-[#3cddc7]/40"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#e0f2fe]/70 flex items-center justify-center text-[#006b5f] mb-5 border border-white/60">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-plus-jakarta text-xl font-semibold text-[#191c1e] mb-3">
                  {card.title}
                </h3>
                <p className="font-inter text-sm text-[#43474b] leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-inter text-[#50616b]">
                <span>Status: Active</span>
                <span className="text-[#006b5f] font-semibold">Latency &lt; 42ms</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
