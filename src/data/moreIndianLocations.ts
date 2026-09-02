import { CityWeatherData, VarianceDataPoint } from '../types';

export const ADDITIONAL_INDIAN_CITIES: CityWeatherData[] = [
  {
    id: 'pune',
    name: 'Pune',
    country: 'India',
    region: 'Maharashtra / Western Ghats Rain Shadow',
    state: 'Maharashtra',
    zone: 'West',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 35,
    actualTempF: 95,
    predictedTempC: 29,
    predictedTempF: 84,
    condition: 'Rain-Shadow Thermal Ridge',
    topographicFeature: {
      name: 'Sinhagad Ridge & Mutha Basin',
      elevation: '560 m',
      description: 'IMD Pashan High-Performance Supercomputing & Radar Lab.'
    },
    heroTitle: 'Weather forecast precision across Pune Deccan plateau',
    heroSubtitle: 'Western Ghats Leeward Weather Forecast Line',
    factSnippet: 'Downslope adiabatic warming on the leeward Ghats adds up to +6°C before evening breeze intrusion.',
    metricBars: {
      humidity: 46,
      iceIndex: 0,
      windSpeedKts: 12,
      accuracyScore: 99.7,
      uvIndex: 10,
      aqi: 72
    },
    coordinates: {
      lat: 18.5204,
      lng: 73.8567
    },
    status: 'bust',
    deviationC: 6,
    deviationF: 11,
    bustReason: 'Leeward Ghats Compressional Heating & Delayed Valley Inflow',
    meteorologicalTrigger: 'Descending winds down the Khandala gap increased surface sensible heat flux.',
    confidenceScore: 99.7,
    accuracyCalibration: {
      rawNwpAccuracy: 74.5,
      aiCalibratedAccuracy: 99.7,
      errorReduction: '+25.2% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 29.2,
      gfs: 28.8,
      icon: 29.5,
      ukmo: 29.0
    },
    hourly: [
      { time: 'Now', tempC: 35, tempF: 95, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 34, tempF: 93, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 32, tempF: 90, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 29, tempF: 84, condition: 'Cloud', icon: 'cloud' },
      { time: '7 pm', tempC: 27, tempF: 81, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 25, tempF: 77, condition: 'Night', icon: 'cloud' },
      { time: '6:46 pm', tempC: 28, tempF: 82, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'iitm_radar',
        title: 'IITM Pashan Ka-Band Radar',
        type: 'Cloud Aerosol Doppler Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IITM Radar'
      },
      {
        id: 'sinhagad_aws',
        title: 'Sinhagad Fort Observatory',
        type: 'Ridge Automated Weather Station',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        tag: 'Ridge AWS'
      },
      {
        id: 'pratyush_link',
        title: 'Pratyush Supercomputer Cluster',
        type: 'Cray XC40 HPC Telemetry',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'HPC Cluster'
      }
    ],
    leadScientist: {
      name: 'Dr. M. Rajeevan',
      handle: '@rajeevan_met',
      role: 'Distinguished Scientist, Indian Climate Institute',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Leeward adiabatic trajectories across the Sahyadri range require adaptive neural boundary layer tuning.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    country: 'India',
    region: 'Telangana / Central Deccan Plateau',
    state: 'Telangana',
    zone: 'South',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 40,
    actualTempF: 104,
    predictedTempC: 33,
    predictedTempF: 91,
    condition: 'Granite Dome Heat Trapping',
    topographicFeature: {
      name: 'Golconda Granitic Ridge & Musi Valley',
      elevation: '542 m',
      description: 'IMD Begumpet Doppler Radar & Telangana State Weather Network.'
    },
    heroTitle: 'Weather forecast telemetry over Hyderabad Deccan',
    heroSubtitle: 'Granite Plateau Precision Weather Forecast Line',
    factSnippet: 'Extensive rocky terrain and high solar irradiance drive sharp afternoon heat surges.',
    metricBars: {
      humidity: 38,
      iceIndex: 0,
      windSpeedKts: 16,
      accuracyScore: 99.6,
      uvIndex: 11,
      aqi: 98
    },
    coordinates: {
      lat: 17.385,
      lng: 78.4867
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 13,
    bustReason: 'Granitic Soil Thermal Mass Radiation & Low Humidity Surge',
    meteorologicalTrigger: 'Clear skies heated large rock formations, releasing intense longwave radiation into the boundary layer.',
    confidenceScore: 99.6,
    accuracyCalibration: {
      rawNwpAccuracy: 72.3,
      aiCalibratedAccuracy: 99.6,
      errorReduction: '+27.3% Precision Gain',
      kalmanGain: 0.96,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 33.2,
      gfs: 32.8,
      icon: 33.6,
      ukmo: 33.0
    },
    hourly: [
      { time: 'Now', tempC: 40, tempF: 104, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 39, tempF: 102, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 37, tempF: 99, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 34, tempF: 93, condition: 'Sun', icon: 'sun' },
      { time: '7 pm', tempC: 31, tempF: 88, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 29, tempF: 84, condition: 'Night', icon: 'cloud' },
      { time: '6:41 pm', tempC: 32, tempF: 90, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'begumpet_radar',
        title: 'IMD Begumpet Doppler Radar',
        type: 'C-Band Weather Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Begumpet'
      },
      {
        id: 'nrsc_isro',
        title: 'National Remote Sensing Centre (NRSC)',
        type: 'Satellite Earth Ground Station',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'NRSC Link'
      },
      {
        id: 'hussain_sagar',
        title: 'Urban Heat Island Sensor Array',
        type: 'Metropolitan AWS Node',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=400&q=80',
        tag: 'Urban AWS'
      }
    ],
    leadScientist: {
      name: 'Dr. K. Nagaratna',
      handle: '@nagaratna_hyd',
      role: 'Director, Meteorological Centre Hyderabad',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      comment: 'Plateau thermal charging during pre-monsoon requires continuous assimilation of boundary layer radiance.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    country: 'India',
    region: 'Gujarat / Sabarmati Basin',
    state: 'Gujarat',
    zone: 'West',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 43,
    actualTempF: 109,
    predictedTempC: 36,
    predictedTempF: 97,
    condition: 'Semi-Arid Heat Advection',
    topographicFeature: {
      name: 'Sabarmati Basin & North Gujarat Plain',
      elevation: '53 m',
      description: 'IMD Ahmedabad Regional Radar & SAC-ISRO Atmospheric Lab.'
    },
    heroTitle: 'Weather forecast precision for Gujarat metropolis',
    heroSubtitle: 'Sabarmati Valley High-Accuracy Weather Forecast Line',
    factSnippet: 'Dry continental winds from the Thar desert elevate daytime heat to extreme levels.',
    metricBars: {
      humidity: 24,
      iceIndex: 0,
      windSpeedKts: 18,
      accuracyScore: 99.8,
      uvIndex: 12,
      aqi: 165
    },
    coordinates: {
      lat: 23.0225,
      lng: 72.5714
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 12,
    bustReason: 'Intense Dry Air Advection & High Ground Reflectance',
    meteorologicalTrigger: 'Northwesterly desert flows pushed extreme sensible heat into the lower troposphere.',
    confidenceScore: 99.8,
    accuracyCalibration: {
      rawNwpAccuracy: 71.0,
      aiCalibratedAccuracy: 99.8,
      errorReduction: '+28.8% Precision Gain',
      kalmanGain: 0.96,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 36.4,
      gfs: 35.9,
      icon: 36.8,
      ukmo: 36.1
    },
    hourly: [
      { time: 'Now', tempC: 43, tempF: 109, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 42, tempF: 108, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 40, tempF: 104, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 37, tempF: 99, condition: 'Sun', icon: 'sun' },
      { time: '7 pm', tempC: 34, tempF: 93, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 32, tempF: 90, condition: 'Night', icon: 'cloud' },
      { time: '6:58 pm', tempC: 35, tempF: 95, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'sac_isro',
        title: 'Space Applications Centre (SAC-ISRO)',
        type: 'Atmospheric Physics Laboratory',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'SAC ISRO'
      },
      {
        id: 'ahmedabad_dwr',
        title: 'IMD Ahmedabad Doppler Radar',
        type: 'Dual-Pol C-Band DWR',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD DWR'
      },
      {
        id: 'sabarmati_aws',
        title: 'Sabarmati Riverfront Micrometeorology Base',
        type: 'Flux Tower AWS',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80',
        tag: 'Flux Tower'
      }
    ],
    leadScientist: {
      name: 'Dr. Manorama Mohanty',
      handle: '@manorama_guj',
      role: 'Director, Meteorological Centre Ahmedabad',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      comment: 'Heat action plan neural calibration reduces peak temperature errors across Gujarat to under 0.2°C.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'kochi',
    name: 'Kochi (Cochin)',
    country: 'India',
    region: 'Kerala / Malabar Coast',
    state: 'Kerala',
    zone: 'South',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 34,
    actualTempF: 93,
    predictedTempC: 28,
    predictedTempF: 82,
    condition: 'Tropical Coastal Humidity Surge',
    topographicFeature: {
      name: 'Vembanad Estuary & Arabian Sea Littoral',
      elevation: '3 m',
      description: 'IMD Cochin Doppler Radar & CUSAT Advanced Atmospheric Radar.'
    },
    heroTitle: 'Weather forecast tracking on Malabar Coastline',
    heroSubtitle: 'Arabian Sea Monsoon Gateway Forecast Line',
    factSnippet: 'Kochi is the gateway of the Indian Summer Monsoon with swift marine boundary layer transitions.',
    metricBars: {
      humidity: 86,
      iceIndex: 0,
      windSpeedKts: 15,
      accuracyScore: 99.6,
      uvIndex: 10,
      aqi: 42
    },
    coordinates: {
      lat: 9.9312,
      lng: 76.2673
    },
    status: 'bust',
    deviationC: 6,
    deviationF: 11,
    bustReason: 'High Latent Heat Flux & Estuarine Moisture Trapping',
    meteorologicalTrigger: 'Extreme backwater moisture elevated apparent heat index by +14°F above numerical forecasts.',
    confidenceScore: 99.6,
    accuracyCalibration: {
      rawNwpAccuracy: 75.4,
      aiCalibratedAccuracy: 99.6,
      errorReduction: '+24.2% Precision Gain',
      kalmanGain: 0.94,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 28.5,
      gfs: 27.9,
      icon: 28.8,
      ukmo: 28.1
    },
    hourly: [
      { time: 'Now', tempC: 34, tempF: 93, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 33, tempF: 91, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 31, tempF: 88, condition: 'Cloud', icon: 'cloud' },
      { time: '6 pm', tempC: 29, tempF: 84, condition: 'Rain', icon: 'rain' },
      { time: '7 pm', tempC: 27, tempF: 81, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 26, tempF: 79, condition: 'Night', icon: 'cloud' },
      { time: '6:38 pm', tempC: 28, tempF: 82, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'cusat_radar',
        title: 'CUSAT Stratosphere-Troposphere Radar',
        type: 'Wind Profiler 205 MHz Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'CUSAT ST Radar'
      },
      {
        id: 'cochin_port',
        title: 'Cochin Port Weather Buoy',
        type: 'Marine Tidal Sonde',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        tag: 'Marine Sonde'
      },
      {
        id: 'incois_malabar',
        title: 'INCOIS Malabar Ocean Station',
        type: 'Ocean Dynamics Array',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'INCOIS Sonde'
      }
    ],
    leadScientist: {
      name: 'Dr. K. Santosh',
      handle: '@santosh_kerala',
      role: 'Head, Meteorological Centre Thiruvananthapuram & Kochi Radar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Monsoon onset vortex dynamics over the Arabian Sea require rapid 2-minute radar integration.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'guwahati',
    name: 'Guwahati',
    country: 'India',
    region: 'Assam / Brahmaputra River Basin',
    state: 'Assam',
    zone: 'North-East',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 36,
    actualTempF: 97,
    predictedTempC: 29,
    predictedTempF: 84,
    condition: 'Riverine Humidity & Convective Surge',
    topographicFeature: {
      name: 'Nilachal Hill & Brahmaputra Floodplain',
      elevation: '55 m',
      description: 'IMD Guwahati Borjhar Doppler Radar & Assam Flood Synoptics.'
    },
    heroTitle: 'Weather forecast monitoring across Brahmaputra Valley',
    heroSubtitle: 'Assam Riverine Precision Weather Forecast Line',
    factSnippet: 'Moisture funnels along the narrow Brahmaputra canyon, generating steep microclimatic variances.',
    metricBars: {
      humidity: 82,
      iceIndex: 0,
      windSpeedKts: 11,
      accuracyScore: 99.6,
      uvIndex: 9,
      aqi: 64
    },
    coordinates: {
      lat: 26.1445,
      lng: 91.7362
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 13,
    bustReason: 'Valley Moisture Entrapment & Pre-Squall Solar Heating',
    meteorologicalTrigger: 'Stagnant valley air mass elevated humidity and ground heat simultaneously.',
    confidenceScore: 99.6,
    accuracyCalibration: {
      rawNwpAccuracy: 72.8,
      aiCalibratedAccuracy: 99.6,
      errorReduction: '+26.8% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 29.5,
      gfs: 28.9,
      icon: 30.1,
      ukmo: 29.2
    },
    hourly: [
      { time: 'Now', tempC: 36, tempF: 97, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 35, tempF: 95, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 32, tempF: 90, condition: 'Cloud', icon: 'cloud' },
      { time: '6 pm', tempC: 28, tempF: 82, condition: 'Rain', icon: 'rain' },
      { time: '7 pm', tempC: 26, tempF: 79, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 25, tempF: 77, condition: 'Night', icon: 'cloud' },
      { time: '5:54 pm', tempC: 29, tempF: 84, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'guwahati_radar',
        title: 'IMD Borjhar Doppler Weather Radar',
        type: 'Dual-Pol S-Band DWR',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Borjhar'
      },
      {
        id: 'brahmaputra_sonde',
        title: 'Brahmaputra River Hydro-Met Array',
        type: 'Riverine Flux Sonde',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80',
        tag: 'River Sonde'
      },
      {
        id: 'nesac_isro',
        title: 'North Eastern Space Applications Centre (NESAC)',
        type: 'ISRO Geo-Intelligence Base',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'NESAC Base'
      }
    ],
    leadScientist: {
      name: 'Dr. K. N. Mohan',
      handle: '@mohan_assam',
      role: 'Scientist-F, Regional Meteorological Centre Guwahati',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Brahmaputra valley orographic trapping makes AI-calibrated weather forecast lines essential.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam (Vizag)',
    country: 'India',
    region: 'Andhra Pradesh / Eastern Ghats Coast',
    state: 'Andhra Pradesh',
    zone: 'South',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 37,
    actualTempF: 99,
    predictedTempC: 30,
    predictedTempF: 86,
    condition: 'Coastal Hill Thermal Funneling',
    topographicFeature: {
      name: 'Kailasagiri Hill & Dolphin’s Nose Promontory',
      elevation: '304 m',
      description: 'IMD Visakhapatnam Cyclone Warning Centre & Naval Weather Station.'
    },
    heroTitle: 'Weather forecast precision on Andhra Coast',
    heroSubtitle: 'Bay of Bengal Escarpment Weather Forecast Line',
    factSnippet: 'Eastern Ghats hills abutting the sea create steep coastal wind shears and rapid temperature jumps.',
    metricBars: {
      humidity: 74,
      iceIndex: 0,
      windSpeedKts: 18,
      accuracyScore: 99.7,
      uvIndex: 11,
      aqi: 54
    },
    coordinates: {
      lat: 17.6868,
      lng: 83.2185
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 13,
    bustReason: 'Hill Barrier Deflection & Maritime Layer Stagnation',
    meteorologicalTrigger: 'Kailasagiri ridge deflected normal onshore winds, keeping the city in a high-temperature bubble.',
    confidenceScore: 99.7,
    accuracyCalibration: {
      rawNwpAccuracy: 73.0,
      aiCalibratedAccuracy: 99.7,
      errorReduction: '+26.7% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 30.2,
      gfs: 29.8,
      icon: 30.7,
      ukmo: 30.0
    },
    hourly: [
      { time: 'Now', tempC: 37, tempF: 99, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 36, tempF: 97, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 34, tempF: 93, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 31, tempF: 88, condition: 'Cloud', icon: 'cloud' },
      { time: '7 pm', tempC: 29, tempF: 84, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 28, tempF: 82, condition: 'Night', icon: 'cloud' },
      { time: '6:24 pm', tempC: 30, tempF: 86, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'vizag_cwr',
        title: 'IMD Visakhapatnam Cyclone Radar',
        type: 'S-Band Doppler Weather Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'Cyclone Radar'
      },
      {
        id: 'dolphins_nose',
        title: 'Dolphin’s Nose Coastal Station',
        type: 'Marine Promontory Sensor',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        tag: 'Marine Sensor'
      },
      {
        id: 'bay_buoy_vizag',
        title: 'Bay of Bengal Deep Water Buoy',
        type: 'Ocean Sonde BD-02',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'Ocean Sonde'
      }
    ],
    leadScientist: {
      name: 'Dr. Sunitha Devi',
      handle: '@sunitha_cyclone',
      role: 'Cyclone Warning Specialist & Chief Forecaster',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      comment: 'Eastern Ghats maritime interaction produces high-frequency boundary fluctuations along Vizag bay.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'ooty',
    name: 'Ooty (Udhagamandalam)',
    country: 'India',
    region: 'Tamil Nadu / Nilgiri Mountain Range',
    state: 'Tamil Nadu',
    zone: 'Himalayan',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 22,
    actualTempF: 72,
    predictedTempC: 15,
    predictedTempF: 59,
    condition: 'Nilgiri Micro-Ridge Warmth',
    topographicFeature: {
      name: 'Doddabetta Peak & Nilgiri Biosphere',
      elevation: '2,240 m',
      description: 'IMD Nilgiris High-Altitude Base & TIFR Radio Astronomy Observatory.'
    },
    heroTitle: 'Weather forecast modeling across Nilgiri high peaks',
    heroSubtitle: 'Blue Mountains Alpine Weather Forecast Line',
    factSnippet: 'At over 2,200m altitude, Nilgiri high-plateau solar heating creates steep thermal inversions.',
    metricBars: {
      humidity: 58,
      iceIndex: 12,
      windSpeedKts: 14,
      accuracyScore: 99.6,
      uvIndex: 11,
      aqi: 14
    },
    coordinates: {
      lat: 11.4102,
      lng: 76.695
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 13,
    bustReason: 'High Solar Transmittance through Mountain Atmosphere',
    meteorologicalTrigger: 'Clear skies over Doddabetta permitted high radiation flux on south-facing tea estate slopes.',
    confidenceScore: 99.6,
    accuracyCalibration: {
      rawNwpAccuracy: 70.8,
      aiCalibratedAccuracy: 99.6,
      errorReduction: '+28.8% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 15.2,
      gfs: 14.8,
      icon: 15.6,
      ukmo: 15.0
    },
    hourly: [
      { time: 'Now', tempC: 22, tempF: 72, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 21, tempF: 70, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 19, tempF: 66, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 16, tempF: 61, condition: 'Cloud', icon: 'cloud' },
      { time: '7 pm', tempC: 14, tempF: 57, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 12, tempF: 54, condition: 'Night', icon: 'cloud' },
      { time: '6:32 pm', tempC: 15, tempF: 59, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'doddabetta_obs',
        title: 'Doddabetta Peak Observatory',
        type: 'Nilgiri Crest Weather Sonde',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        tag: 'Crest Sonde'
      },
      {
        id: 'tifr_ooty',
        title: 'TIFR Radio Telescope Met Lab',
        type: 'Atmospheric Ionization Sensor',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'TIFR Lab'
      },
      {
        id: 'pykara_hydro',
        title: 'Pykara Catchment Hydro Station',
        type: 'High-Altitude Hydro AWS',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
        tag: 'Hydro AWS'
      }
    ],
    leadScientist: {
      name: 'Dr. G. Senthil Kumar',
      handle: '@senthil_nilgiris',
      role: 'Director, Nilgiri Mountain Climatology Centre',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Nilgiri microclimates transition from dense mist to strong solar warming in under 15 minutes.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'dehradun',
    name: 'Dehradun',
    country: 'India',
    region: 'Uttarakhand / Doon Valley & Shivalik Hills',
    state: 'Uttarakhand',
    zone: 'Himalayan',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 33,
    actualTempF: 91,
    predictedTempC: 26,
    predictedTempF: 79,
    condition: 'Doon Valley Basin Heat Retention',
    topographicFeature: {
      name: 'Mussoorie Ridge & Shivalik Trench',
      elevation: '640 m',
      description: 'IMD Dehradun Meteorological Centre & Wadia Institute of Himalayan Geology.'
    },
    heroTitle: 'Weather forecast intelligence across Doon Valley',
    heroSubtitle: 'Shivalik Trench High-Precision Weather Forecast Line',
    factSnippet: 'The enclosed Doon Valley traps warm air masses between the Shivalik hills and Mussoorie ridge.',
    metricBars: {
      humidity: 55,
      iceIndex: 18,
      windSpeedKts: 10,
      accuracyScore: 99.6,
      uvIndex: 9,
      aqi: 48
    },
    coordinates: {
      lat: 30.3165,
      lng: 78.0322
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 12,
    bustReason: 'Doon Basin Topographic Heating Trap',
    meteorologicalTrigger: 'Shivalik mountain range blocked horizontal ventilation, creating localized adiabatic accumulation.',
    confidenceScore: 99.6,
    accuracyCalibration: {
      rawNwpAccuracy: 72.5,
      aiCalibratedAccuracy: 99.6,
      errorReduction: '+27.1% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 26.5,
      gfs: 25.8,
      icon: 26.9,
      ukmo: 26.2
    },
    hourly: [
      { time: 'Now', tempC: 33, tempF: 91, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 32, tempF: 90, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 30, tempF: 86, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 27, tempF: 81, condition: 'Cloud', icon: 'cloud' },
      { time: '7 pm', tempC: 24, tempF: 75, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 22, tempF: 72, condition: 'Night', icon: 'cloud' },
      { time: '6:56 pm', tempC: 25, tempF: 77, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'dehradun_radar',
        title: 'IMD Surkanda Devi Doppler Radar',
        type: 'X-Band Mountain DWR',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Surkanda'
      },
      {
        id: 'wadia_inst',
        title: 'Wadia Himalayan Research Station',
        type: 'Geological Met Station',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        tag: 'Wadia Lab'
      },
      {
        id: 'iirs_isro',
        title: 'Indian Institute of Remote Sensing (IIRS)',
        type: 'ISRO Geospatial Node',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'IIRS ISRO'
      }
    ],
    leadScientist: {
      name: 'Dr. Bikram Singh',
      handle: '@bikram_dehradun',
      role: 'Director, Meteorological Centre Dehradun',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Doon valley orography causes steep nocturnal inversions and sudden pre-monsoon temperature departures.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'port-blair',
    name: 'Port Blair',
    country: 'India',
    region: 'Andaman & Nicobar / Bay of Bengal Islands',
    state: 'Andaman & Nicobar',
    zone: 'Islands',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 33,
    actualTempF: 91,
    predictedTempC: 28,
    predictedTempF: 82,
    condition: 'Insular Tropical Squall Convergence',
    topographicFeature: {
      name: 'Mount Harriet & South Andaman Coast',
      elevation: '365 m',
      description: 'IMD Port Blair Cyclone Warning Centre & Andaman Marine Sonde.'
    },
    heroTitle: 'Weather forecast precision across Andaman Sea islands',
    heroSubtitle: 'Insular Oceanic High-Accuracy Weather Forecast Line',
    factSnippet: 'Andaman & Nicobar islands encounter the earliest southwest monsoon surge in the Indian subcontinent.',
    metricBars: {
      humidity: 88,
      iceIndex: 0,
      windSpeedKts: 22,
      accuracyScore: 99.8,
      uvIndex: 10,
      aqi: 8
    },
    coordinates: {
      lat: 11.6234,
      lng: 92.7265
    },
    status: 'bust',
    deviationC: 5,
    deviationF: 9,
    bustReason: 'Inter-Tropical Convergence Zone (ITCZ) Cloud Shift',
    meteorologicalTrigger: 'Sudden ITCZ band movement exposed the island surface to high direct solar irradiance before tropical squall.',
    confidenceScore: 99.8,
    accuracyCalibration: {
      rawNwpAccuracy: 76.0,
      aiCalibratedAccuracy: 99.8,
      errorReduction: '+23.8% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 28.2,
      gfs: 27.7,
      icon: 28.5,
      ukmo: 28.0
    },
    hourly: [
      { time: 'Now', tempC: 33, tempF: 91, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 32, tempF: 90, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 30, tempF: 86, condition: 'Rain', icon: 'rain' },
      { time: '6 pm', tempC: 28, tempF: 82, condition: 'Rain', icon: 'rain' },
      { time: '7 pm', tempC: 27, tempF: 81, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 26, tempF: 79, condition: 'Night', icon: 'cloud' },
      { time: '5:32 pm', tempC: 29, tempF: 84, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'port_blair_dwr',
        title: 'IMD Port Blair Cyclone Radar',
        type: 'S-Band Doppler Weather Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'Cyclone Radar'
      },
      {
        id: 'andaman_buoy',
        title: 'Andaman Sea Deep Moored Sonde',
        type: 'INCOIS BD-11 Oceanic Buoy',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        tag: 'Ocean Sonde'
      },
      {
        id: 'mount_harriet',
        title: 'Mount Harriet Atmospheric Tower',
        type: 'Island Ridge AWS',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80',
        tag: 'Ridge AWS'
      }
    ],
    leadScientist: {
      name: 'Dr. S. K. Roy',
      handle: '@roy_andaman',
      role: 'Director, Meteorological Centre Port Blair',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Ocean-island interaction over Andaman waters requires continuous satellite sounder assimilation.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'bhopal',
    name: 'Bhopal',
    country: 'India',
    region: 'Madhya Pradesh / Central Malwa Plateau',
    state: 'Madhya Pradesh',
    zone: 'Central',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 41,
    actualTempF: 106,
    predictedTempC: 34,
    predictedTempF: 93,
    condition: 'Central Plateau Solar Insolation',
    topographicFeature: {
      name: 'Vindhyan Range & Upper Lake Basin',
      elevation: '527 m',
      description: 'IMD Bhopal Doppler Weather Radar & Central India Synoptic Network.'
    },
    heroTitle: 'Weather forecast precision across Central India',
    heroSubtitle: 'Vindhyan Plateau High-Accuracy Weather Forecast Line',
    factSnippet: 'Central Indian continental landmass creates high diurnal temperature swings with intense dry season warming.',
    metricBars: {
      humidity: 26,
      iceIndex: 0,
      windSpeedKts: 16,
      accuracyScore: 99.7,
      uvIndex: 11,
      aqi: 110
    },
    coordinates: {
      lat: 23.2599,
      lng: 77.4126
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 13,
    bustReason: 'Dry Soil Thermal Flux & Continental Anticyclone',
    meteorologicalTrigger: 'Subsidence over the Vindhyan plateau kept cloud cover at zero, maximizing solar energy absorption.',
    confidenceScore: 99.7,
    accuracyCalibration: {
      rawNwpAccuracy: 72.0,
      aiCalibratedAccuracy: 99.7,
      errorReduction: '+27.7% Precision Gain',
      kalmanGain: 0.96,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 34.5,
      gfs: 33.9,
      icon: 34.8,
      ukmo: 34.1
    },
    hourly: [
      { time: 'Now', tempC: 41, tempF: 106, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 40, tempF: 104, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 38, tempF: 100, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 35, tempF: 95, condition: 'Sun', icon: 'sun' },
      { time: '7 pm', tempC: 32, tempF: 90, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 30, tempF: 86, condition: 'Night', icon: 'cloud' },
      { time: '6:49 pm', tempC: 33, tempF: 91, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'bhopal_radar',
        title: 'IMD Bhopal Doppler Weather Radar',
        type: 'C-Band Weather Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Bhopal'
      },
      {
        id: 'upper_lake_sonde',
        title: 'Upper Lake Limnological Sonde',
        type: 'Water Body Thermometry',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        tag: 'Lake Sonde'
      },
      {
        id: 'iiser_bhopal',
        title: 'IISER Bhopal Earth Sciences Lab',
        type: 'Atmospheric Physics Mesh',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'IISER Lab'
      }
    ],
    leadScientist: {
      name: 'Dr. R. Balasubramanian',
      handle: '@bala_bhopal',
      role: 'Director, Meteorological Centre Bhopal',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Central Indian plateau thermodynamics require deep soil moisture feedback integration in real-time.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    country: 'India',
    region: 'Punjab & Haryana / Shivalik Foothills',
    state: 'Chandigarh',
    zone: 'North',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 39,
    actualTempF: 102,
    predictedTempC: 32,
    predictedTempF: 90,
    condition: 'Foothill Boundary Heat Accumulation',
    topographicFeature: {
      name: 'Shivalik Range & Sukhna Lake Basin',
      elevation: '321 m',
      description: 'IMD Chandigarh Regional Meteorological Centre & Agro-Met Synoptic Array.'
    },
    heroTitle: 'Weather forecast modeling across Shivalik plains',
    heroSubtitle: 'North-West Foothill Precision Weather Forecast Line',
    factSnippet: 'Chandigarh sits at the junction of the plains and Himalayas, creating dynamic thermal gradients.',
    metricBars: {
      humidity: 34,
      iceIndex: 0,
      windSpeedKts: 14,
      accuracyScore: 99.7,
      uvIndex: 11,
      aqi: 118
    },
    coordinates: {
      lat: 30.7333,
      lng: 76.7794
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 12,
    bustReason: 'Foothill Stagnation & Thar Heat Advection',
    meteorologicalTrigger: 'Northwesterly winds deposited sensible heat along the Shivalik barrier without vertical venting.',
    confidenceScore: 99.7,
    accuracyCalibration: {
      rawNwpAccuracy: 73.2,
      aiCalibratedAccuracy: 99.7,
      errorReduction: '+26.5% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 32.4,
      gfs: 31.8,
      icon: 32.9,
      ukmo: 32.1
    },
    hourly: [
      { time: 'Now', tempC: 39, tempF: 102, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 38, tempF: 100, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 36, tempF: 97, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 33, tempF: 91, condition: 'Sun', icon: 'sun' },
      { time: '7 pm', tempC: 30, tempF: 86, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 28, tempF: 82, condition: 'Night', icon: 'cloud' },
      { time: '6:57 pm', tempC: 31, tempF: 88, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'chd_radar',
        title: 'IMD Chandigarh Weather Radar',
        type: 'Dual-Pol C-Band DWR',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Radar'
      },
      {
        id: 'sukhna_aws',
        title: 'Sukhna Lake Ecological Station',
        type: 'Micro-basin Weather Sonde',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        tag: 'Lake Sonde'
      },
      {
        id: 'pau_ludhiana',
        title: 'Agro-Met Radiation Sounder Array',
        type: 'Crop Canopy Microclimate Node',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'Agro Sonde'
      }
    ],
    leadScientist: {
      name: 'Dr. Manmohan Singh',
      handle: '@manmohan_chd',
      role: 'Director, Meteorological Centre Chandigarh',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Foothill blocking alters westerly wind vectors; continuous calibration maintains 99.7% accuracy.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    country: 'India',
    region: 'Uttar Pradesh / Middle Ganga Plain',
    state: 'Uttar Pradesh',
    zone: 'North',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 42,
    actualTempF: 108,
    predictedTempC: 35,
    predictedTempF: 95,
    condition: 'Ganga Basin Sensible Heat Trap',
    topographicFeature: {
      name: 'Ganga Meander & Alluvial Plain',
      elevation: '81 m',
      description: 'IMD Varanasi Babatpur Doppler Radar & BHU Atmospheric Research Centre.'
    },
    heroTitle: 'Weather forecast precision over Middle Ganga Basin',
    heroSubtitle: 'Gangetic Alluvial High-Accuracy Weather Forecast Line',
    factSnippet: 'Varanasi river corridor creates strong local moisture evaporation coupled with intense summer insolation.',
    metricBars: {
      humidity: 42,
      iceIndex: 0,
      windSpeedKts: 15,
      accuracyScore: 99.6,
      uvIndex: 11,
      aqi: 154
    },
    coordinates: {
      lat: 25.3176,
      lng: 82.9739
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 13,
    bustReason: 'Riverine Thermal Superposition & High Soil Radiation',
    meteorologicalTrigger: 'Ganga valley alluvial soil acted as an intense thermal radiator under cloud-free skies.',
    confidenceScore: 99.6,
    accuracyCalibration: {
      rawNwpAccuracy: 71.6,
      aiCalibratedAccuracy: 99.6,
      errorReduction: '+28.0% Precision Gain',
      kalmanGain: 0.96,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 35.2,
      gfs: 34.7,
      icon: 35.8,
      ukmo: 35.0
    },
    hourly: [
      { time: 'Now', tempC: 42, tempF: 108, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 41, tempF: 106, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 39, tempF: 102, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 36, tempF: 97, condition: 'Sun', icon: 'sun' },
      { time: '7 pm', tempC: 33, tempF: 91, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 31, tempF: 88, condition: 'Night', icon: 'cloud' },
      { time: '6:39 pm', tempC: 34, tempF: 93, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'babatpur_radar',
        title: 'IMD Babatpur Doppler Radar',
        type: 'C-Band Weather Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Radar'
      },
      {
        id: 'bhu_met',
        title: 'BHU Geophysics & Atmospheric Centre',
        type: 'Aerosol Lidar & Radiometer',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'BHU Lidar'
      },
      {
        id: 'ganga_flux',
        title: 'Ganga River Microclimate Tower',
        type: 'River Evapotranspiration Array',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80',
        tag: 'River Flux'
      }
    ],
    leadScientist: {
      name: 'Dr. Anand Sharma',
      handle: '@anand_ganga',
      role: 'Principal Meteorologist, Ganga Basin Synoptics',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Gangetic alluvial moisture dynamics drive sudden afternoon heat index excursions.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=85'
  }
];

export const ADDITIONAL_HISTORICAL_VARIANCE: Record<string, VarianceDataPoint[]> = {
  pune: [
    { day: 'Day 1', date: 'Aug 04', actual: 30, forecast: 29, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 31, forecast: 29, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 35, forecast: 29, deviation: 6, isBust: true, notes: 'Bust #1: Ghats Downslope Heating' },
    { day: 'Day 4', date: 'Aug 13', actual: 31, forecast: 29, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 35, forecast: 29, deviation: 6, isBust: true, notes: 'Bust #2: Leeward Heat Surge' },
    { day: 'Day 6', date: 'Aug 19', actual: 32, forecast: 30, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 35, forecast: 29, deviation: 6, isBust: true, notes: 'Bust #3: Delayed Valley Flow' },
    { day: 'Day 8', date: 'Aug 25', actual: 31, forecast: 29, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 34, forecast: 29, deviation: 5, isBust: true, notes: 'Bust #4: Plateau Flux Peak' },
    { day: 'Day 10', date: 'Aug 30', actual: 35, forecast: 29, deviation: 6, isBust: true, notes: 'Active Live Anomaly (+6°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 33, forecast: 29, deviation: 4, isBust: true, notes: 'Deccan Boundary Shift' },
    { day: 'Day 12', date: 'Sep 02', actual: 35, forecast: 29, deviation: 6, isBust: true, notes: 'Active Live Bust (+6°C)' }
  ],
  hyderabad: [
    { day: 'Day 1', date: 'Aug 04', actual: 34, forecast: 33, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 35, forecast: 33, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 40, forecast: 33, deviation: 7, isBust: true, notes: 'Bust #1: Granite Thermal Radiation' },
    { day: 'Day 4', date: 'Aug 13', actual: 35, forecast: 33, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 40, forecast: 33, deviation: 7, isBust: true, notes: 'Bust #2: Extreme Solar Flux Spike' },
    { day: 'Day 6', date: 'Aug 19', actual: 36, forecast: 34, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 40, forecast: 33, deviation: 7, isBust: true, notes: 'Bust #3: Plateau Heatwave Divergence' },
    { day: 'Day 8', date: 'Aug 25', actual: 35, forecast: 33, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 39, forecast: 33, deviation: 6, isBust: true, notes: 'Bust #4: Low Humidity Charging' },
    { day: 'Day 10', date: 'Aug 30', actual: 40, forecast: 33, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 37, forecast: 33, deviation: 4, isBust: true, notes: 'Urban Heat Island' },
    { day: 'Day 12', date: 'Sep 02', actual: 40, forecast: 33, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ],
  ahmedabad: [
    { day: 'Day 1', date: 'Aug 04', actual: 37, forecast: 36, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 38, forecast: 36, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 43, forecast: 36, deviation: 7, isBust: true, notes: 'Bust #1: Thar Desert Advection' },
    { day: 'Day 4', date: 'Aug 13', actual: 38, forecast: 36, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 43, forecast: 36, deviation: 7, isBust: true, notes: 'Bust #2: Dry Air Heatwave Surge' },
    { day: 'Day 6', date: 'Aug 19', actual: 39, forecast: 37, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 43, forecast: 36, deviation: 7, isBust: true, notes: 'Bust #3: Sabarmati Basin Heat Trap' },
    { day: 'Day 8', date: 'Aug 25', actual: 39, forecast: 36, deviation: 3, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 42, forecast: 36, deviation: 6, isBust: true, notes: 'Bust #4: Ground Reflectance Spike' },
    { day: 'Day 10', date: 'Aug 30', actual: 43, forecast: 36, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 40, forecast: 36, deviation: 4, isBust: true, notes: 'Continental Flux Peak' },
    { day: 'Day 12', date: 'Sep 02', actual: 43, forecast: 36, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ],
  kochi: [
    { day: 'Day 1', date: 'Aug 04', actual: 29, forecast: 28, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 30, forecast: 28, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 34, forecast: 28, deviation: 6, isBust: true, notes: 'Bust #1: Backwater Humidity Surge' },
    { day: 'Day 4', date: 'Aug 13', actual: 30, forecast: 28, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 34, forecast: 28, deviation: 6, isBust: true, notes: 'Bust #2: Marine Boundary Layer Trap' },
    { day: 'Day 6', date: 'Aug 19', actual: 31, forecast: 29, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 34, forecast: 28, deviation: 6, isBust: true, notes: 'Bust #3: Latent Heat Flux Spike' },
    { day: 'Day 8', date: 'Aug 25', actual: 30, forecast: 28, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 33, forecast: 28, deviation: 5, isBust: true, notes: 'Bust #4: Monsoon Onset Warmth' },
    { day: 'Day 10', date: 'Aug 30', actual: 34, forecast: 28, deviation: 6, isBust: true, notes: 'Active Live Anomaly (+6°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 31, forecast: 28, deviation: 3, isBust: false },
    { day: 'Day 12', date: 'Sep 02', actual: 34, forecast: 28, deviation: 6, isBust: true, notes: 'Active Live Bust (+6°C)' }
  ],
  guwahati: [
    { day: 'Day 1', date: 'Aug 04', actual: 30, forecast: 29, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 31, forecast: 29, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 36, forecast: 29, deviation: 7, isBust: true, notes: 'Bust #1: Brahmaputra Canyon Funnel' },
    { day: 'Day 4', date: 'Aug 13', actual: 31, forecast: 29, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 36, forecast: 29, deviation: 7, isBust: true, notes: 'Bust #2: Stagnant Valley Air Trap' },
    { day: 'Day 6', date: 'Aug 19', actual: 32, forecast: 30, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 36, forecast: 29, deviation: 7, isBust: true, notes: 'Bust #3: Riverine Heat Superposition' },
    { day: 'Day 8', date: 'Aug 25', actual: 31, forecast: 29, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 35, forecast: 29, deviation: 6, isBust: true, notes: 'Bust #4: Pre-Squall Solar Spike' },
    { day: 'Day 10', date: 'Aug 30', actual: 36, forecast: 29, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 33, forecast: 29, deviation: 4, isBust: true, notes: 'Valley Moisture Shift' },
    { day: 'Day 12', date: 'Sep 02', actual: 36, forecast: 29, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ],
  visakhapatnam: [
    { day: 'Day 1', date: 'Aug 04', actual: 31, forecast: 30, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 32, forecast: 30, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 37, forecast: 30, deviation: 7, isBust: true, notes: 'Bust #1: Kailasagiri Ridge Deflection' },
    { day: 'Day 4', date: 'Aug 13', actual: 32, forecast: 30, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 37, forecast: 30, deviation: 7, isBust: true, notes: 'Bust #2: Maritime Layer Stagnation' },
    { day: 'Day 6', date: 'Aug 19', actual: 33, forecast: 31, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 37, forecast: 30, deviation: 7, isBust: true, notes: 'Bust #3: Bay of Bengal Heat Bubble' },
    { day: 'Day 8', date: 'Aug 25', actual: 32, forecast: 30, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 36, forecast: 30, deviation: 6, isBust: true, notes: 'Bust #4: Coastal Wind Shear' },
    { day: 'Day 10', date: 'Aug 30', actual: 37, forecast: 30, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 34, forecast: 30, deviation: 4, isBust: true, notes: 'Offshore Breeze Shift' },
    { day: 'Day 12', date: 'Sep 02', actual: 37, forecast: 30, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ],
  ooty: [
    { day: 'Day 1', date: 'Aug 04', actual: 16, forecast: 15, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 17, forecast: 15, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 22, forecast: 15, deviation: 7, isBust: true, notes: 'Bust #1: Doddabetta Solar Peak' },
    { day: 'Day 4', date: 'Aug 13', actual: 17, forecast: 15, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 22, forecast: 15, deviation: 7, isBust: true, notes: 'Bust #2: Thin Atmosphere Radiance' },
    { day: 'Day 6', date: 'Aug 19', actual: 18, forecast: 16, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 22, forecast: 15, deviation: 7, isBust: true, notes: 'Bust #3: Tea Slope Thermal Flux' },
    { day: 'Day 8', date: 'Aug 25', actual: 17, forecast: 15, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 21, forecast: 15, deviation: 6, isBust: true, notes: 'Bust #4: Nilgiri Cloud Gap' },
    { day: 'Day 10', date: 'Aug 30', actual: 22, forecast: 15, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 19, forecast: 15, deviation: 4, isBust: true, notes: 'High Ridge Clear Sky' },
    { day: 'Day 12', date: 'Sep 02', actual: 22, forecast: 15, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ],
  dehradun: [
    { day: 'Day 1', date: 'Aug 04', actual: 27, forecast: 26, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 28, forecast: 26, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 33, forecast: 26, deviation: 7, isBust: true, notes: 'Bust #1: Doon Basin Heat Trap' },
    { day: 'Day 4', date: 'Aug 13', actual: 28, forecast: 26, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 33, forecast: 26, deviation: 7, isBust: true, notes: 'Bust #2: Shivalik Ventilation Barrier' },
    { day: 'Day 6', date: 'Aug 19', actual: 29, forecast: 27, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 33, forecast: 26, deviation: 7, isBust: true, notes: 'Bust #3: Valley Inversion Superposition' },
    { day: 'Day 8', date: 'Aug 25', actual: 28, forecast: 26, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 32, forecast: 26, deviation: 6, isBust: true, notes: 'Bust #4: Pre-Monsoon Heating' },
    { day: 'Day 10', date: 'Aug 30', actual: 33, forecast: 26, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 30, forecast: 26, deviation: 4, isBust: true, notes: 'Valley Boundary Shift' },
    { day: 'Day 12', date: 'Sep 02', actual: 33, forecast: 26, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ],
  'port-blair': [
    { day: 'Day 1', date: 'Aug 04', actual: 29, forecast: 28, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 30, forecast: 28, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 33, forecast: 28, deviation: 5, isBust: true, notes: 'Bust #1: ITCZ Direct Insolation' },
    { day: 'Day 4', date: 'Aug 13', actual: 29, forecast: 28, deviation: 1, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 33, forecast: 28, deviation: 5, isBust: true, notes: 'Bust #2: Tropical Clear Sky Surge' },
    { day: 'Day 6', date: 'Aug 19', actual: 30, forecast: 29, deviation: 1, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 33, forecast: 28, deviation: 5, isBust: true, notes: 'Bust #3: Andaman Maritime Heat' },
    { day: 'Day 8', date: 'Aug 25', actual: 30, forecast: 28, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 32, forecast: 28, deviation: 4, isBust: true, notes: 'Bust #4: Island Boundary Flux' },
    { day: 'Day 10', date: 'Aug 30', actual: 33, forecast: 28, deviation: 5, isBust: true, notes: 'Active Live Anomaly (+5°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 31, forecast: 28, deviation: 3, isBust: false },
    { day: 'Day 12', date: 'Sep 02', actual: 33, forecast: 28, deviation: 5, isBust: true, notes: 'Active Live Bust (+5°C)' }
  ],
  bhopal: [
    { day: 'Day 1', date: 'Aug 04', actual: 35, forecast: 34, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 36, forecast: 34, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 41, forecast: 34, deviation: 7, isBust: true, notes: 'Bust #1: Vindhyan Plateau Solar Peak' },
    { day: 'Day 4', date: 'Aug 13', actual: 36, forecast: 34, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 41, forecast: 34, deviation: 7, isBust: true, notes: 'Bust #2: Dry Soil Heat Superposition' },
    { day: 'Day 6', date: 'Aug 19', actual: 37, forecast: 35, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 41, forecast: 34, deviation: 7, isBust: true, notes: 'Bust #3: Continental Subsidence' },
    { day: 'Day 8', date: 'Aug 25', actual: 36, forecast: 34, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 40, forecast: 34, deviation: 6, isBust: true, notes: 'Bust #4: Upper Lake Basin Flux' },
    { day: 'Day 10', date: 'Aug 30', actual: 41, forecast: 34, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 38, forecast: 34, deviation: 4, isBust: true, notes: 'Central Plateau Shift' },
    { day: 'Day 12', date: 'Sep 02', actual: 41, forecast: 34, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ],
  chandigarh: [
    { day: 'Day 1', date: 'Aug 04', actual: 33, forecast: 32, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 34, forecast: 32, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 39, forecast: 32, deviation: 7, isBust: true, notes: 'Bust #1: Shivalik Foothill Stagnation' },
    { day: 'Day 4', date: 'Aug 13', actual: 34, forecast: 32, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 39, forecast: 32, deviation: 7, isBust: true, notes: 'Bust #2: Thar Advection Accumulation' },
    { day: 'Day 6', date: 'Aug 19', actual: 35, forecast: 33, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 39, forecast: 32, deviation: 7, isBust: true, notes: 'Bust #3: Foothill Heat Dome' },
    { day: 'Day 8', date: 'Aug 25', actual: 34, forecast: 32, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 38, forecast: 32, deviation: 6, isBust: true, notes: 'Bust #4: Ground Flux Peak' },
    { day: 'Day 10', date: 'Aug 30', actual: 39, forecast: 32, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 36, forecast: 32, deviation: 4, isBust: true, notes: 'Plains-Mountain Gradient' },
    { day: 'Day 12', date: 'Sep 02', actual: 39, forecast: 32, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ],
  varanasi: [
    { day: 'Day 1', date: 'Aug 04', actual: 36, forecast: 35, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 37, forecast: 35, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 42, forecast: 35, deviation: 7, isBust: true, notes: 'Bust #1: Ganga Basin Thermal Trap' },
    { day: 'Day 4', date: 'Aug 13', actual: 37, forecast: 35, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 42, forecast: 35, deviation: 7, isBust: true, notes: 'Bust #2: Alluvial Sensible Heat Spike' },
    { day: 'Day 6', date: 'Aug 19', actual: 38, forecast: 36, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 42, forecast: 35, deviation: 7, isBust: true, notes: 'Bust #3: River Corridor Heat Dome' },
    { day: 'Day 8', date: 'Aug 25', actual: 37, forecast: 35, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 41, forecast: 35, deviation: 6, isBust: true, notes: 'Bust #4: High Solar Insolation' },
    { day: 'Day 10', date: 'Aug 30', actual: 42, forecast: 35, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 39, forecast: 35, deviation: 4, isBust: true, notes: 'Ganga Valley Shift' },
    { day: 'Day 12', date: 'Sep 02', actual: 42, forecast: 35, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ]
};
