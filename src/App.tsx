import React, { useState } from 'react';
import { AmbientShader } from './components/AmbientShader';
import { Navbar } from './components/Navbar';
import { SampleHeroCanvasView } from './components/SampleHeroCanvasView';
import { IndianLocationSelector } from './components/IndianLocationSelector';
import { LocationComparisonModal } from './components/LocationComparisonModal';
import { FutureFiveDayForecast } from './components/FutureFiveDayForecast';
import { PastFiveDayBustHistory } from './components/PastFiveDayBustHistory';
import { GapNarrativeSection } from './components/GapNarrativeSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TechnologySection } from './components/TechnologySection';
import { Footer } from './components/Footer';
import { InteractiveMapModal } from './components/InteractiveMapModal';
import { AccuracyCalibrationModal } from './components/AccuracyCalibrationModal';
import { DetectorModal } from './components/DetectorModal';
import { DetailedReportModal } from './components/DetailedReportModal';
import { CITIES_DATA, HISTORICAL_VARIANCE_DATA } from './data/weatherData';
import { ActiveTab, CityWeatherData, TempUnit } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [selectedCityId, setSelectedCityId] = useState<string>('mumbai');
  const [selectedCityIds, setSelectedCityIds] = useState<string[]>([
    'mumbai',
    'delhi',
    'leh',
    'pune',
    'bengaluru',
    'shimla',
    'cherrapunji',
    'kolkata'
  ]);
  const [tempUnit, setTempUnit] = useState<TempUnit>('F');
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  const [isAccuracyOpen, setIsAccuracyOpen] = useState<boolean>(false);
  const [isDetectorOpen, setIsDetectorOpen] = useState<boolean>(false);
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState<boolean>(false);

  const selectedCity: CityWeatherData =
    CITIES_DATA.find((c) => c.id === selectedCityId) || CITIES_DATA[0];

  const checkedCities: CityWeatherData[] = CITIES_DATA.filter((c) =>
    selectedCityIds.includes(c.id)
  );

  const cityVarianceData =
    HISTORICAL_VARIANCE_DATA[selectedCity.id] || HISTORICAL_VARIANCE_DATA.antarctica;

  const handleTabSelect = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === 'map') {
      setIsMapOpen(true);
    } else if (tab === 'detection') {
      setIsDetectorOpen(true);
    } else if (tab === 'accuracy') {
      setIsAccuracyOpen(true);
    } else {
      const sectionElement = document.getElementById(`${tab}-section`);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleCitySelection = (cityId: string) => {
    setSelectedCityIds((prev) =>
      prev.includes(cityId) ? prev.filter((id) => id !== cityId) : [...prev, cityId]
    );
  };

  const handleSelectAllVisible = (visibleIds: string[]) => {
    setSelectedCityIds((prev) => {
      const set = new Set([...prev, ...visibleIds]);
      return Array.from(set);
    });
  };

  const handleClearSelection = () => {
    setSelectedCityIds([]);
  };

  const toggleTempUnit = () => {
    setTempUnit((prev) => (prev === 'C' ? 'F' : 'C'));
  };

  return (
    <div
      id="forecast-bust-app-root"
      className="relative min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-cyan-200 selection:text-slate-900"
    >
      {/* 1. Ambient Glacial WebGL Shader */}
      <AmbientShader />

      {/* 2. Top-Left Floating Header Badge Notch matching sample.jpeg */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabSelect}
        onOpenMap={() => setIsMapOpen(true)}
        onOpenDetector={() => setIsDetectorOpen(true)}
        onOpenAccuracy={() => setIsAccuracyOpen(true)}
        selectedCity={selectedCity}
        onSelectCity={(cityId) => setSelectedCityId(cityId)}
        allCities={CITIES_DATA}
      />

      {/* 3. Main Glass Canvas Stage Container */}
      <main
        id="main-immersive-canvas"
        className="relative z-10 w-[96%] max-w-[1680px] mx-auto mt-4 sm:mt-6 mb-16 flex flex-col gap-10 transition-all duration-500"
      >
        {/* Exact Hero Stage Frame Matching sample.jpeg */}
        <SampleHeroCanvasView
          selectedCity={selectedCity}
          tempUnit={tempUnit}
          onToggleTempUnit={toggleTempUnit}
          onOpenMap={() => setIsMapOpen(true)}
          onOpenReport={() => setIsReportOpen(true)}
          onOpenAccuracy={() => setIsAccuracyOpen(true)}
        />

        {/* Indian Meteorological Location & Dataset Selector with Checkboxes */}
        <div className="rounded-[36px] shadow-2xl overflow-hidden border border-slate-700/80">
          <IndianLocationSelector
            cities={CITIES_DATA}
            activeCityId={selectedCityId}
            onSelectCity={(cityId) => {
              setSelectedCityId(cityId);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            selectedCityIds={selectedCityIds}
            onToggleCitySelection={toggleCitySelection}
            onSelectAllVisible={handleSelectAllVisible}
            onClearSelection={handleClearSelection}
            onOpenComparison={() => setIsComparisonOpen(true)}
            tempUnit={tempUnit}
          />
        </div>

        {/* Future 5-Day High-Accuracy Prediction & Day-Wise Diurnal Breakdown */}
        <div className="rounded-[36px] shadow-2xl overflow-hidden border border-slate-700/80">
          <FutureFiveDayForecast
            city={selectedCity}
            tempUnit={tempUnit}
            onOpenAccuracyModal={() => setIsAccuracyOpen(true)}
          />
        </div>

        {/* Past 5-Day Burst/Bust History Across All Locations & Real-Time Accuracy Booster */}
        <div className="rounded-[36px] shadow-2xl overflow-hidden border border-slate-700/80">
          <PastFiveDayBustHistory
            activeStationId={selectedCityId}
            onSelectStation={(cityId) => {
              setSelectedCityId(cityId);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            tempUnit={tempUnit}
            onOpenAccuracyModal={() => setIsAccuracyOpen(true)}
          />
        </div>

        {/* Section: The Gap Between Prediction and Reality */}
        <div id="overview-section" className="rounded-[40px] glass-panel glass-border-rim shadow-xl overflow-hidden backdrop-blur-xl bg-white/70">
          <GapNarrativeSection
            varianceData={cityVarianceData}
            onOpenReport={() => setIsReportOpen(true)}
          />
        </div>

        {/* Section: How It Works */}
        <div id="how-it-works-section" className="rounded-[40px] glass-panel glass-border-rim shadow-xl overflow-hidden backdrop-blur-xl bg-white/70">
          <HowItWorksSection />
        </div>

        {/* Section: Technology & Neural Calibration */}
        <div id="technology-section" className="rounded-[40px] glass-panel glass-border-rim shadow-xl overflow-hidden backdrop-blur-xl bg-white/70">
          <TechnologySection />
        </div>
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Interactive Global Leaflet Map Modal */}
      <InteractiveMapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        cities={CITIES_DATA}
        selectedCity={selectedCity}
        onSelectCity={(cityId) => {
          setSelectedCityId(cityId);
          setIsMapOpen(false);
        }}
      />

      {/* 6. Multi-Location Comparative Matrix Modal */}
      <LocationComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        selectedCities={checkedCities.length > 0 ? checkedCities : [selectedCity]}
        onSelectPrimaryCity={(cityId) => {
          setSelectedCityId(cityId);
          setIsComparisonOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        tempUnit={tempUnit}
      />

      {/* 7. Accuracy Calibration & Optimization Engine Modal */}
      <AccuracyCalibrationModal
        isOpen={isAccuracyOpen}
        onClose={() => setIsAccuracyOpen(false)}
        city={selectedCity}
      />

      {/* 8. Interactive Anomaly Detector Sandbox Modal */}
      <DetectorModal
        isOpen={isDetectorOpen}
        onClose={() => setIsDetectorOpen(false)}
        cities={CITIES_DATA}
        selectedCity={selectedCity}
        onSelectCity={(cityId) => setSelectedCityId(cityId)}
      />

      {/* 9. Detailed Meteorological Anomaly Dossier Modal */}
      <DetailedReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        city={selectedCity}
      />
    </div>
  );
}

