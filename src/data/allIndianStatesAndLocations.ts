import { CityWeatherData, VarianceDataPoint } from '../types';

export const COMPREHENSIVE_INDIAN_CITIES: CityWeatherData[] = [
  {
    id: 'lucknow',
    name: 'Lucknow',
    country: 'India',
    region: 'Uttar Pradesh / Awadh Plain',
    state: 'Uttar Pradesh',
    zone: 'North',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 41,
    actualTempF: 106,
    predictedTempC: 34,
    predictedTempF: 93,
    condition: 'Gangetic Basin Thermal Trap',
    topographicFeature: {
      name: 'Gomti River Basin & Awadh Alluvium',
      elevation: '123 m',
      description: 'IMD Amausi Doppler Weather Radar & Regional Agromet Array.'
    },
    heroTitle: 'Weather forecast precision across Awadh plains',
    heroSubtitle: 'Gomti Valley Alluvial Weather Forecast Line',
    factSnippet: 'Dry Loo advection from western deserts accumulates in the low-lying Gomti depression.',
    metricBars: {
      humidity: 36,
      iceIndex: 0,
      windSpeedKts: 14,
      accuracyScore: 99.7,
      uvIndex: 11,
      aqi: 145
    },
    coordinates: {
      lat: 26.8467,
      lng: 80.9462
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 13,
    bustReason: 'Dry Loo Wind Advection & Boundary Layer Trapping',
    meteorologicalTrigger: 'Extreme sensible heat advected through Kanpur-Lucknow corridor without cloud condensation.',
    confidenceScore: 99.7,
    accuracyCalibration: {
      rawNwpAccuracy: 71.9,
      aiCalibratedAccuracy: 99.7,
      errorReduction: '+27.8% Precision Gain',
      kalmanGain: 0.96,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 34.2,
      gfs: 33.8,
      icon: 34.6,
      ukmo: 34.0
    },
    hourly: [
      { time: 'Now', tempC: 41, tempF: 106, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 40, tempF: 104, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 38, tempF: 100, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 35, tempF: 95, condition: 'Sun', icon: 'sun' },
      { time: '7 pm', tempC: 32, tempF: 90, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 30, tempF: 86, condition: 'Night', icon: 'cloud' },
      { time: '6:44 pm', tempC: 33, tempF: 91, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'amausi_radar',
        title: 'IMD Amausi Airport Doppler Radar',
        type: 'C-Band Weather Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Amausi'
      },
      {
        id: 'gomti_flux',
        title: 'Gomti Hydrology Tower',
        type: 'Basin Micromet Node',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80',
        tag: 'Basin Node'
      },
      {
        id: 'nbri_station',
        title: 'NBRI Plant Microclimate Array',
        type: 'Canopy Temp Sensor',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'Canopy Sensor'
      }
    ],
    leadScientist: {
      name: 'Dr. J. P. Gupta',
      handle: '@gupta_lucknow',
      role: 'Director, Meteorological Centre Lucknow',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Gangetic boundary inversion models calibrated via 2-minute radar feedback maintain 99.7% precision.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'patna',
    name: 'Patna',
    country: 'India',
    region: 'Bihar / Eastern Gangetic Plain',
    state: 'Bihar',
    zone: 'East',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 39,
    actualTempF: 102,
    predictedTempC: 33,
    predictedTempF: 91,
    condition: 'Ganga-Son Confluence Heat Dome',
    topographicFeature: {
      name: 'Ganga-Gandak-Son Confluence Basin',
      elevation: '53 m',
      description: 'IMD Patna Doppler Weather Radar & Bihar Disaster Management Grid.'
    },
    heroTitle: 'Weather forecast monitoring across Bihar plains',
    heroSubtitle: 'Ganga-Son Alluvial Weather Forecast Line',
    factSnippet: 'Four major river confluences around Patna create dense moisture with intense solar trapping.',
    metricBars: {
      humidity: 52,
      iceIndex: 0,
      windSpeedKts: 12,
      accuracyScore: 99.6,
      uvIndex: 10,
      aqi: 138
    },
    coordinates: {
      lat: 25.5941,
      lng: 85.1376
    },
    status: 'bust',
    deviationC: 6,
    deviationF: 11,
    bustReason: 'High Confluence Humidity & Delayed Thunderstorm Onset',
    meteorologicalTrigger: 'Moisture buildup from river beds delayed convective cooling, driving +6°C surface heat deviation.',
    confidenceScore: 99.6,
    accuracyCalibration: {
      rawNwpAccuracy: 72.8,
      aiCalibratedAccuracy: 99.6,
      errorReduction: '+26.8% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 33.1,
      gfs: 32.7,
      icon: 33.5,
      ukmo: 32.9
    },
    hourly: [
      { time: 'Now', tempC: 39, tempF: 102, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 38, tempF: 100, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 36, tempF: 97, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 33, tempF: 91, condition: 'Cloud', icon: 'cloud' },
      { time: '7 pm', tempC: 30, tempF: 86, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 28, tempF: 82, condition: 'Night', icon: 'cloud' },
      { time: '6:31 pm', tempC: 31, tempF: 88, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'patna_radar',
        title: 'IMD Patna Doppler Weather Radar',
        type: 'S-Band Weather Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Radar'
      },
      {
        id: 'ganga_patna',
        title: 'Ganga Confluence Hydromet Array',
        type: 'River Sonde Network',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        tag: 'River Sonde'
      },
      {
        id: 'iit_patna',
        title: 'IIT Patna Climate Modeling Lab',
        type: 'Neural NWP Cluster',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'IIT Patna'
      }
    ],
    leadScientist: {
      name: 'Dr. Ashish Kumar',
      handle: '@ashish_bihar',
      role: 'Director, Meteorological Centre Patna',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Eastern Gangetic convective dynamics require multi-Doppler radar assimilation for precise storm forecasting.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'bhubaneswar',
    name: 'Bhubaneswar',
    country: 'India',
    region: 'Odisha / Coastal Plain & Mahanadi Delta',
    state: 'Odisha',
    zone: 'East',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 38,
    actualTempF: 100,
    predictedTempC: 31,
    predictedTempF: 88,
    condition: 'Maritime Squall & Humidity Surge',
    topographicFeature: {
      name: 'Chandaka Forest Ridge & Daya River',
      elevation: '45 m',
      description: 'IMD Bhubaneswar Doppler Weather Radar & Odisha Early Warning Centre.'
    },
    heroTitle: 'Weather forecast telemetry on Bay of Bengal Coast',
    heroSubtitle: 'Mahanadi Delta High-Accuracy Weather Forecast Line',
    factSnippet: 'Odisha coast experiences severe cyclonic depressions and intense pre-monsoon convective heats.',
    metricBars: {
      humidity: 78,
      iceIndex: 0,
      windSpeedKts: 16,
      accuracyScore: 99.8,
      uvIndex: 11,
      aqi: 68
    },
    coordinates: {
      lat: 20.2961,
      lng: 85.8245
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 12,
    bustReason: 'Offshore Sea-Breeze Stagnation & Dense Moisture Loading',
    meteorologicalTrigger: 'Delayed onset of Bay of Bengal sea breeze trapped solar heating over the Mahanadi delta.',
    confidenceScore: 99.8,
    accuracyCalibration: {
      rawNwpAccuracy: 74.0,
      aiCalibratedAccuracy: 99.8,
      errorReduction: '+25.8% Precision Gain',
      kalmanGain: 0.96,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 31.4,
      gfs: 30.9,
      icon: 31.8,
      ukmo: 31.1
    },
    hourly: [
      { time: 'Now', tempC: 38, tempF: 100, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 37, tempF: 99, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 34, tempF: 93, condition: 'Cloud', icon: 'cloud' },
      { time: '6 pm', tempC: 30, tempF: 86, condition: 'Rain', icon: 'rain' },
      { time: '7 pm', tempC: 28, tempF: 82, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 27, tempF: 81, condition: 'Night', icon: 'cloud' },
      { time: '6:18 pm', tempC: 29, tempF: 84, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'bbsr_dwr',
        title: 'IMD Bhubaneswar Doppler Radar',
        type: 'Dual-Pol S-Band Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Radar'
      },
      {
        id: 'puri_coastal',
        title: 'Puri Coast Ocean Radar',
        type: 'HF Coastal Wave Radar',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        tag: 'Coastal Radar'
      },
      {
        id: 'chilika_sonde',
        title: 'Chilika Lake Atmospheric Base',
        type: 'Lagoon Thermodynamic Station',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'Lagoon Sonde'
      }
    ],
    leadScientist: {
      name: 'Dr. H. R. Biswas',
      handle: '@biswas_odisha',
      role: 'Director, Meteorological Centre Bhubaneswar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Coastal Odisha radar telemetry integrated into our AI pipeline guarantees 99.8% precision against tropical squalls.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'panaji-goa',
    name: 'Goa (Panaji)',
    country: 'India',
    region: 'Goa / Konkan Estuary & Western Ghats Foothills',
    state: 'Goa',
    zone: 'West',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 35,
    actualTempF: 95,
    predictedTempC: 29,
    predictedTempF: 84,
    condition: 'Coastal Estuary Heat Advection',
    topographicFeature: {
      name: 'Mandovi Estuary & Altinho Ridge',
      elevation: '28 m',
      description: 'IMD Panaji Doppler Weather Radar & NIO Oceanographic Physics Base.'
    },
    heroTitle: 'Weather forecast precision across Goa coastline',
    heroSubtitle: 'Konkan Maritime Weather Forecast Line',
    factSnippet: 'Warm Arabian Sea currents combined with Western Ghats foothills produce rich convective microclimates.',
    metricBars: {
      humidity: 80,
      iceIndex: 0,
      windSpeedKts: 15,
      accuracyScore: 99.7,
      uvIndex: 11,
      aqi: 32
    },
    coordinates: {
      lat: 15.4909,
      lng: 73.8278
    },
    status: 'bust',
    deviationC: 6,
    deviationF: 11,
    bustReason: 'Estuarine Heat Trap & High Surface Evapotranspiration',
    meteorologicalTrigger: 'Mandovi river water surface heating elevated local boundary temperatures before evening sea-breeze penetration.',
    confidenceScore: 99.7,
    accuracyCalibration: {
      rawNwpAccuracy: 75.1,
      aiCalibratedAccuracy: 99.7,
      errorReduction: '+24.6% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 29.3,
      gfs: 28.9,
      icon: 29.6,
      ukmo: 29.1
    },
    hourly: [
      { time: 'Now', tempC: 35, tempF: 95, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 34, tempF: 93, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 32, tempF: 90, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 30, tempF: 86, condition: 'Cloud', icon: 'cloud' },
      { time: '7 pm', tempC: 28, tempF: 82, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 27, tempF: 81, condition: 'Night', icon: 'cloud' },
      { time: '6:49 pm', tempC: 29, tempF: 84, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'panaji_radar',
        title: 'IMD Panaji Doppler Weather Radar',
        type: 'C-Band Weather Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Panaji'
      },
      {
        id: 'nio_goa',
        title: 'National Institute of Oceanography (NIO)',
        type: 'Arabian Sea Air-Sea Flux Lab',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        tag: 'NIO Lab'
      },
      {
        id: 'aguada_sonde',
        title: 'Fort Aguada Coastal Station',
        type: 'Littoral AWS Tower',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'Aguada AWS'
      }
    ],
    leadScientist: {
      name: 'Dr. M. R. Ramesh Kumar',
      handle: '@ramesh_goa',
      role: 'Chief Scientist, Marine Meteorology & NIO',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Konkan marine boundary interactions require sub-kilometer air-sea flux coupling.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    country: 'India',
    region: 'West Bengal / Eastern Himalayas',
    state: 'West Bengal',
    zone: 'Himalayan',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 21,
    actualTempF: 70,
    predictedTempC: 14,
    predictedTempF: 57,
    condition: 'Eastern Himalayan Ridge Solar Flare',
    topographicFeature: {
      name: 'Tiger Hill & Singalila Ridge',
      elevation: '2,042 m',
      description: 'IMD Darjeeling High-Altitude Station & Bose Institute Himalayan Centre.'
    },
    heroTitle: 'Weather forecast modeling across Kanchenjunga foothills',
    heroSubtitle: 'Singalila Alpine Weather Forecast Line',
    factSnippet: 'Steep orographic elevation from the Bengal plains to 2,000m creates swift cloud clearance and radiant heating.',
    metricBars: {
      humidity: 64,
      iceIndex: 16,
      windSpeedKts: 11,
      accuracyScore: 99.6,
      uvIndex: 11,
      aqi: 12
    },
    coordinates: {
      lat: 27.041,
      lng: 88.2663
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 13,
    bustReason: 'High Optical Atmosphere Transmittance & Tea Slope Solar Warming',
    meteorologicalTrigger: 'Sudden clearing of valley mist exposed south-facing tea garden slopes to high solar insolation.',
    confidenceScore: 99.6,
    accuracyCalibration: {
      rawNwpAccuracy: 69.8,
      aiCalibratedAccuracy: 99.6,
      errorReduction: '+29.8% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 14.5,
      gfs: 13.9,
      icon: 14.8,
      ukmo: 14.2
    },
    hourly: [
      { time: 'Now', tempC: 21, tempF: 70, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 20, tempF: 68, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 18, tempF: 64, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 15, tempF: 59, condition: 'Cloud', icon: 'cloud' },
      { time: '7 pm', tempC: 13, tempF: 55, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 11, tempF: 52, condition: 'Night', icon: 'cloud' },
      { time: '6:12 pm', tempC: 14, tempF: 57, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'tiger_hill',
        title: 'Tiger Hill Alpine Observatory',
        type: 'Himalayan Ridge Weather Sonde',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        tag: 'Alpine Sonde'
      },
      {
        id: 'bose_inst',
        title: 'Bose Institute High-Altitude Centre',
        type: 'Aerosol & Cosmic Ray Lab',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'Bose Lab'
      },
      {
        id: 'kurseong_radar',
        title: 'Kurseong Mountain X-Band Radar',
        type: 'Cloud Penetrating DWR',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'X-Band Radar'
      }
    ],
    leadScientist: {
      name: 'Dr. G. K. Das',
      handle: '@das_darjeeling',
      role: 'Head, Eastern Himalayan Meteorological Centre',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Eastern Himalayan terrain induces sudden valley cloud burns, requiring microscale neural calibration.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'gangtok',
    name: 'Gangtok',
    country: 'India',
    region: 'Sikkim / Teesta Valley & Eastern Himalayas',
    state: 'Sikkim',
    zone: 'Himalayan',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 22,
    actualTempF: 72,
    predictedTempC: 16,
    predictedTempF: 61,
    condition: 'Teesta Gorge Thermal Updraft',
    topographicFeature: {
      name: 'Enchey Ridge & Teesta River Canyon',
      elevation: '1,650 m',
      description: 'IMD Gangtok Meteorological Centre & Sikkim State Disaster Weather Array.'
    },
    heroTitle: 'Weather forecast precision across Sikkim Himalayas',
    heroSubtitle: 'Teesta Gorge Alpine Weather Forecast Line',
    factSnippet: 'The deep Teesta river canyon channels warm air updrafts straight into high-altitude mountain saddles.',
    metricBars: {
      humidity: 68,
      iceIndex: 14,
      windSpeedKts: 12,
      accuracyScore: 99.6,
      uvIndex: 10,
      aqi: 10
    },
    coordinates: {
      lat: 27.3389,
      lng: 88.6065
    },
    status: 'bust',
    deviationC: 6,
    deviationF: 11,
    bustReason: 'Canyon Thermal Chimney Effect & Cloud Dissipation',
    meteorologicalTrigger: 'Anabatic valley winds propelled warm lower-tropospheric air up the Teesta gorge.',
    confidenceScore: 99.6,
    accuracyCalibration: {
      rawNwpAccuracy: 70.2,
      aiCalibratedAccuracy: 99.6,
      errorReduction: '+29.4% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 16.2,
      gfs: 15.8,
      icon: 16.5,
      ukmo: 16.0
    },
    hourly: [
      { time: 'Now', tempC: 22, tempF: 72, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 21, tempF: 70, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 19, tempF: 66, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 16, tempF: 61, condition: 'Cloud', icon: 'cloud' },
      { time: '7 pm', tempC: 14, tempF: 57, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 12, tempF: 54, condition: 'Night', icon: 'cloud' },
      { time: '6:10 pm', tempC: 15, tempF: 59, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'gangtok_dwr',
        title: 'IMD Gangtok X-Band Doppler Radar',
        type: 'Mountain Precipitation DWR',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Gangtok'
      },
      {
        id: 'teesta_sonde',
        title: 'Teesta Gorge Updraft Station',
        type: 'Valley Anabatic Wind Sensor',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        tag: 'Gorge Sensor'
      },
      {
        id: 'nathula_pass',
        title: 'Nathu La Pass Cryospheric Node',
        type: 'High-Altitude Pass Weather Sonde',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'Pass Sonde'
      }
    ],
    leadScientist: {
      name: 'Dr. G. N. Raha',
      handle: '@raha_sikkim',
      role: 'Director, Meteorological Centre Gangtok',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Teesta gorge updrafts require high-frequency pressure gradient tracking across Sikkim peaks.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur',
    country: 'India',
    region: 'Rajasthan / Thar Desert Gateway',
    state: 'Rajasthan',
    zone: 'West',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 44,
    actualTempF: 111,
    predictedTempC: 37,
    predictedTempF: 99,
    condition: 'Hyper-Arid Insolation & Loo Storm',
    topographicFeature: {
      name: 'Mehrangarh Basaltic Ridge & Thar Sand Plains',
      elevation: '231 m',
      description: 'IMD Jodhpur Doppler Weather Radar & CAZRI Arid Zone Observatory.'
    },
    heroTitle: 'Weather forecast telemetry over Thar Desert',
    heroSubtitle: 'Thar Arid Core High-Accuracy Weather Forecast Line',
    factSnippet: 'Quartz sand reflectivity and extreme dryness cause surface temperatures to surge to 44°C+.',
    metricBars: {
      humidity: 16,
      iceIndex: 0,
      windSpeedKts: 22,
      accuracyScore: 99.8,
      uvIndex: 12,
      aqi: 180
    },
    coordinates: {
      lat: 26.2389,
      lng: 73.0243
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 12,
    bustReason: 'Hyper-Arid Soil Thermal Emission & Intense Loo Winds',
    meteorologicalTrigger: 'Extreme sensible heat flux from desert sands decoupled the lower boundary layer from NWP forecasts.',
    confidenceScore: 99.8,
    accuracyCalibration: {
      rawNwpAccuracy: 71.4,
      aiCalibratedAccuracy: 99.8,
      errorReduction: '+28.4% Precision Gain',
      kalmanGain: 0.96,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 37.3,
      gfs: 36.8,
      icon: 37.7,
      ukmo: 37.0
    },
    hourly: [
      { time: 'Now', tempC: 44, tempF: 111, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 43, tempF: 109, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 41, tempF: 106, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 38, tempF: 100, condition: 'Sun', icon: 'sun' },
      { time: '7 pm', tempC: 35, tempF: 95, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 33, tempF: 91, condition: 'Night', icon: 'cloud' },
      { time: '7:04 pm', tempC: 36, tempF: 97, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'jodhpur_dwr',
        title: 'IMD Jodhpur Doppler Radar',
        type: 'Dual-Pol C-Band DWR',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Radar'
      },
      {
        id: 'cazri_lab',
        title: 'CAZRI Arid Agro-Met Station',
        type: 'Desert Radiation Flux Station',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        tag: 'CAZRI Lab'
      },
      {
        id: 'pokhran_aws',
        title: 'Deep Thar Desert Telemetry AWS',
        type: 'Hyper-Arid Flux Tower',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'Thar Tower'
      }
    ],
    leadScientist: {
      name: 'Dr. Radheshyam Sharma',
      handle: '@sharma_jodhpur',
      role: 'Director, Meteorological Centre Jodhpur & CAZRI Advisor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Thar desert radiative flux models require deep albedo learning to eliminate extreme heat forecast busts.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=85'
  }
];

export const COMPREHENSIVE_HISTORICAL_VARIANCE: Record<string, VarianceDataPoint[]> = {
  lucknow: [
    { day: 'Day 1', date: 'Aug 04', actual: 35, forecast: 34, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 36, forecast: 34, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 41, forecast: 34, deviation: 7, isBust: true, notes: 'Bust #1: Awadh Plain Heat Trap' },
    { day: 'Day 4', date: 'Aug 13', actual: 36, forecast: 34, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 41, forecast: 34, deviation: 7, isBust: true, notes: 'Bust #2: Dry Loo Advection Surge' },
    { day: 'Day 6', date: 'Aug 19', actual: 37, forecast: 35, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 41, forecast: 34, deviation: 7, isBust: true, notes: 'Bust #3: Gomti Depression Heat Dome' },
    { day: 'Day 8', date: 'Aug 25', actual: 36, forecast: 34, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 40, forecast: 34, deviation: 6, isBust: true, notes: 'Bust #4: High Solar Insolation' },
    { day: 'Day 10', date: 'Aug 30', actual: 41, forecast: 34, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 38, forecast: 34, deviation: 4, isBust: true, notes: 'Plains Air Shift' },
    { day: 'Day 12', date: 'Sep 02', actual: 41, forecast: 34, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ],
  patna: [
    { day: 'Day 1', date: 'Aug 04', actual: 34, forecast: 33, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 35, forecast: 33, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 39, forecast: 33, deviation: 6, isBust: true, notes: 'Bust #1: Confluence Humidity Heat' },
    { day: 'Day 4', date: 'Aug 13', actual: 35, forecast: 33, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 39, forecast: 33, deviation: 6, isBust: true, notes: 'Bust #2: Delayed Thunderstorm Surge' },
    { day: 'Day 6', date: 'Aug 19', actual: 36, forecast: 34, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 39, forecast: 33, deviation: 6, isBust: true, notes: 'Bust #3: River Basin Heat Bubble' },
    { day: 'Day 8', date: 'Aug 25', actual: 35, forecast: 33, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 38, forecast: 33, deviation: 5, isBust: true, notes: 'Bust #4: High Humidity Peak' },
    { day: 'Day 10', date: 'Aug 30', actual: 39, forecast: 33, deviation: 6, isBust: true, notes: 'Active Live Anomaly (+6°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 36, forecast: 33, deviation: 3, isBust: false },
    { day: 'Day 12', date: 'Sep 02', actual: 39, forecast: 33, deviation: 6, isBust: true, notes: 'Active Live Bust (+6°C)' }
  ],
  bhubaneswar: [
    { day: 'Day 1', date: 'Aug 04', actual: 32, forecast: 31, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 33, forecast: 31, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 38, forecast: 31, deviation: 7, isBust: true, notes: 'Bust #1: Mahanadi Delta Stagnation' },
    { day: 'Day 4', date: 'Aug 13', actual: 33, forecast: 31, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 38, forecast: 31, deviation: 7, isBust: true, notes: 'Bust #2: Offshore Sea Breeze Delay' },
    { day: 'Day 6', date: 'Aug 19', actual: 34, forecast: 32, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 38, forecast: 31, deviation: 7, isBust: true, notes: 'Bust #3: Coastal Heat Accumulation' },
    { day: 'Day 8', date: 'Aug 25', actual: 33, forecast: 31, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 37, forecast: 31, deviation: 6, isBust: true, notes: 'Bust #4: Maritime Humidity Trap' },
    { day: 'Day 10', date: 'Aug 30', actual: 38, forecast: 31, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 35, forecast: 31, deviation: 4, isBust: true, notes: 'Delta Air Shift' },
    { day: 'Day 12', date: 'Sep 02', actual: 38, forecast: 31, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ],
  'panaji-goa': [
    { day: 'Day 1', date: 'Aug 04', actual: 30, forecast: 29, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 31, forecast: 29, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 35, forecast: 29, deviation: 6, isBust: true, notes: 'Bust #1: Mandovi Estuary Heat Trap' },
    { day: 'Day 4', date: 'Aug 13', actual: 31, forecast: 29, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 35, forecast: 29, deviation: 6, isBust: true, notes: 'Bust #2: Konkan Sea Breeze Delay' },
    { day: 'Day 6', date: 'Aug 19', actual: 32, forecast: 30, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 35, forecast: 29, deviation: 6, isBust: true, notes: 'Bust #3: Foothill Moisture Superposition' },
    { day: 'Day 8', date: 'Aug 25', actual: 31, forecast: 29, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 34, forecast: 29, deviation: 5, isBust: true, notes: 'Bust #4: Coastal Heat Surge' },
    { day: 'Day 10', date: 'Aug 30', actual: 35, forecast: 29, deviation: 6, isBust: true, notes: 'Active Live Anomaly (+6°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 32, forecast: 29, deviation: 3, isBust: false },
    { day: 'Day 12', date: 'Sep 02', actual: 35, forecast: 29, deviation: 6, isBust: true, notes: 'Active Live Bust (+6°C)' }
  ],
  darjeeling: [
    { day: 'Day 1', date: 'Aug 04', actual: 15, forecast: 14, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 16, forecast: 14, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 21, forecast: 14, deviation: 7, isBust: true, notes: 'Bust #1: Singalila Ridge Flare' },
    { day: 'Day 4', date: 'Aug 13', actual: 16, forecast: 14, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 21, forecast: 14, deviation: 7, isBust: true, notes: 'Bust #2: Tea Garden Solar Surge' },
    { day: 'Day 6', date: 'Aug 19', actual: 17, forecast: 15, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 21, forecast: 14, deviation: 7, isBust: true, notes: 'Bust #3: Cloud Clearance Radiation' },
    { day: 'Day 8', date: 'Aug 25', actual: 16, forecast: 14, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 20, forecast: 14, deviation: 6, isBust: true, notes: 'Bust #4: High Altitude Warmth' },
    { day: 'Day 10', date: 'Aug 30', actual: 21, forecast: 14, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 18, forecast: 14, deviation: 4, isBust: true, notes: 'Himalayan Ridge Shift' },
    { day: 'Day 12', date: 'Sep 02', actual: 21, forecast: 14, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ],
  gangtok: [
    { day: 'Day 1', date: 'Aug 04', actual: 17, forecast: 16, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 18, forecast: 16, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 22, forecast: 16, deviation: 6, isBust: true, notes: 'Bust #1: Teesta Canyon Updraft' },
    { day: 'Day 4', date: 'Aug 13', actual: 18, forecast: 16, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 22, forecast: 16, deviation: 6, isBust: true, notes: 'Bust #2: Anabatic Thermal Chimney' },
    { day: 'Day 6', date: 'Aug 19', actual: 19, forecast: 17, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 22, forecast: 16, deviation: 6, isBust: true, notes: 'Bust #3: Saddle Cloud Burn' },
    { day: 'Day 8', date: 'Aug 25', actual: 18, forecast: 16, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 21, forecast: 16, deviation: 5, isBust: true, notes: 'Bust #4: Gorge Heat Influx' },
    { day: 'Day 10', date: 'Aug 30', actual: 22, forecast: 16, deviation: 6, isBust: true, notes: 'Active Live Anomaly (+6°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 19, forecast: 16, deviation: 3, isBust: false },
    { day: 'Day 12', date: 'Sep 02', actual: 22, forecast: 16, deviation: 6, isBust: true, notes: 'Active Live Bust (+6°C)' }
  ],
  jodhpur: [
    { day: 'Day 1', date: 'Aug 04', actual: 38, forecast: 37, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 39, forecast: 37, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 44, forecast: 37, deviation: 7, isBust: true, notes: 'Bust #1: Hyper-Arid Desert Surge' },
    { day: 'Day 4', date: 'Aug 13', actual: 39, forecast: 37, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 44, forecast: 37, deviation: 7, isBust: true, notes: 'Bust #2: Sand Thermal Emission Spike' },
    { day: 'Day 6', date: 'Aug 19', actual: 40, forecast: 38, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 44, forecast: 37, deviation: 7, isBust: true, notes: 'Bust #3: Thar Core Loo Storm' },
    { day: 'Day 8', date: 'Aug 25', actual: 40, forecast: 37, deviation: 3, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 43, forecast: 37, deviation: 6, isBust: true, notes: 'Bust #4: Extreme Insolation Flux' },
    { day: 'Day 10', date: 'Aug 30', actual: 44, forecast: 37, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 41, forecast: 37, deviation: 4, isBust: true, notes: 'Thar Boundary Shift' },
    { day: 'Day 12', date: 'Sep 02', actual: 44, forecast: 37, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ]
};
