import React from 'react';
import { Layers, Cpu, Activity, AlertOctagon, CheckCircle2 } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Multi-Model Forecast Ingestion',
      icon: Layers,
      description:
        'Continuous ingestion of high-resolution global numerical weather prediction (NWP) outputs including ECMWF IFS (9km), NOAA GFS (0.25°), DWD ICON, and UKMO Global at 6-hour cycles.',
      tag: 'Data Pipeline',
    },
    {
      step: '02',
      title: 'Ground-Truth Telemetry Stream',
      icon: Activity,
      description:
        'Real-time ingestion from WMO certified surface synoptic weather stations, airport METAR/SPECI broadcasts, marine buoys, and geostationary radiometer soundings.',
      tag: 'Observation',
    },
    {
      step: '03',
      title: 'Differential Drift & Boundary Analysis',
      icon: Cpu,
      description:
        'Our spatial matching algorithm harmonizes geographical elevations, urban heat island (UHI) microclimates, and applies lapse-rate normalization to compute exact divergence.',
      tag: 'Engine',
    },
    {
      step: '04',
      title: 'AI Anomaly Root-Cause Synthesis',
      icon: AlertOctagon,
      description:
        'When delta exceeds localized statistical deviation thresholds (>5°C or >20kt), the diagnostic model isolates boundary-layer inversion failures and convective stalls.',
      tag: 'Intelligence',
    },
  ];

  return (
    <section
      id="how-it-works-section"
      className="py-16 md:py-24 px-6 md:px-14 flex flex-col gap-12 border-t border-white/40"
    >
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006b5f]/10 border border-[#006b5f]/20 text-[#006b5f] text-xs font-inter font-semibold uppercase tracking-widest mb-4">
          Atmospheric Telemetry Protocol
        </div>
        <h2 className="font-plus-jakarta text-3xl sm:text-4xl md:text-[40px] font-normal text-[#191c1e] mb-4">
          HOW FORECAST-BUST WORKS
        </h2>
        <p className="font-inter text-base sm:text-lg text-[#43474b] leading-relaxed">
          Bridging the critical computational gap between mathematical forecast simulations
          and physical atmospheric reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="glass-panel rounded-[28px] p-6 glass-border-rim flex flex-col justify-between hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#e0f2fe]/70 flex items-center justify-center text-[#006b5f] border border-white/60 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-plus-jakarta text-2xl font-bold text-[#50616b]/40">
                    {item.step}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/60 text-[#006b5f] text-[11px] font-inter font-semibold mb-3 border border-white/60">
                  {item.tag}
                </div>

                <h3 className="font-plus-jakarta text-lg font-semibold text-[#191c1e] mb-2.5">
                  {item.title}
                </h3>

                <p className="font-inter text-xs sm:text-sm text-[#43474b] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/50 flex items-center gap-1.5 text-xs font-inter text-[#006b5f]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Sub-hourly automated sync</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
