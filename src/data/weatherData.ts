import { CityWeatherData, VarianceDataPoint } from '../types';
import { ADDITIONAL_INDIAN_CITIES, ADDITIONAL_HISTORICAL_VARIANCE } from './moreIndianLocations';
import { COMPREHENSIVE_INDIAN_CITIES, COMPREHENSIVE_HISTORICAL_VARIANCE } from './allIndianStatesAndLocations';

const BASE_CITIES_DATA: CityWeatherData[] = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    country: 'India',
    region: 'Maharashtra / Konkan Coastal Belt',
    state: 'Maharashtra',
    zone: 'West',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 39,
    actualTempF: 102,
    predictedTempC: 28,
    predictedTempF: 82,
    condition: 'Coastal Thermal Divergence',
    topographicFeature: {
      name: 'Sanjay Gandhi Ridge & Arabian Coast',
      elevation: '468 m',
      description: 'IMD Colaba Doppler Radar & Western Ghats coastal moisture barrier.'
    },
    heroTitle: 'Weather forecast precision for coastal Mumbai',
    heroSubtitle: 'IMD Doppler & Coastal Telemetry Forecast Line',
    factSnippet: 'Delayed sea-breeze fronts frequently create +11°C urban heat surges over Mumbai.',
    metricBars: {
      humidity: 62,
      iceIndex: 8,
      windSpeedKts: 14,
      accuracyScore: 99.6,
      uvIndex: 11,
      aqi: 142
    },
    coordinates: {
      lat: 19.076,
      lng: 72.8777
    },
    status: 'bust',
    deviationC: 11,
    deviationF: 20,
    bustReason: 'Delayed Sea-Breeze Front & Urban Heat Island Superposition',
    meteorologicalTrigger: 'Anticyclonic subsidence over the Konkan belt suppressed normal afternoon onshore moisture inflow by 4.2 hours, causing surface sensible heat flux to skyrocket beyond standard forecast parameterization.',
    confidenceScore: 99.6,
    accuracyCalibration: {
      rawNwpAccuracy: 68.5,
      aiCalibratedAccuracy: 99.6,
      errorReduction: '+31.1% Precision Gain',
      kalmanGain: 0.96,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 28.5,
      gfs: 27.8,
      icon: 29.1,
      ukmo: 28.0
    },
    hourly: [
      { time: 'Now', tempC: 39, tempF: 102, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 38, tempF: 100, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 36, tempF: 97, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 34, tempF: 93, condition: 'Sun', icon: 'sun' },
      { time: '7 pm', tempC: 32, tempF: 90, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 31, tempF: 88, condition: 'Cloud', icon: 'cloud' },
      { time: '6:48 pm', tempC: 33, tempF: 91, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'colaba_radar',
        title: 'IMD Colaba Doppler Radar',
        type: 'S-Band Dual-Pol Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Radar'
      },
      {
        id: 'arabian_sea_buoy',
        title: 'Arabian Sea Moored Buoy DS-03',
        type: 'INCOIS Marine Sonde',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        tag: 'Marine Sonde'
      },
      {
        id: 'insat_3ds',
        title: 'INSAT-3DS Satellite Geostationary Feed',
        type: 'ISRO Meteorological Imager',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'ISRO Feed'
      }
    ],
    leadScientist: {
      name: 'Dr. Rajesh Deshmukh',
      handle: '@rajesh_imd',
      role: 'Chief Coastal Meteorologist, IMD Western Division',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Coastal sea-breeze delays across Mumbai require high-resolution 2-minute neural nudging to prevent 10°C forecast busts.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'new-delhi',
    name: 'New Delhi',
    country: 'India',
    region: 'NCR / Indo-Gangetic Plains',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 43,
    actualTempF: 109,
    predictedTempC: 36,
    predictedTempF: 97,
    condition: 'Northern Plains Heatwave Surge',
    topographicFeature: {
      name: 'Aravalli Ridge & Yamuna Basin',
      elevation: '216 m',
      description: 'IMD Safdarjung Synoptic Array & Mausam Bhavan Central Supercomputer.'
    },
    heroTitle: 'Weather forecast intelligence across Delhi NCR',
    heroSubtitle: 'Mausam Bhavan High-Resolution Weather Forecast Line',
    factSnippet: 'Loo winds from Thar desert superimpose with urban heat islands to push temperatures above 43°C.',
    metricBars: {
      humidity: 28,
      iceIndex: 0,
      windSpeedKts: 22,
      accuracyScore: 99.8,
      uvIndex: 12,
      aqi: 284
    },
    coordinates: {
      lat: 28.6139,
      lng: 77.209
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 12,
    bustReason: 'Intense Loo Advection & Boundary Layer Thermal Entrainment',
    meteorologicalTrigger: 'Northwesterly desert air masses combined with zero cloud cover caused severe boundary-layer sensible heat accumulation.',
    confidenceScore: 99.8,
    accuracyCalibration: {
      rawNwpAccuracy: 71.4,
      aiCalibratedAccuracy: 99.8,
      errorReduction: '+28.4% Precision Gain',
      kalmanGain: 0.97,
      nudgingFrequency: '1-min Live Nudge'
    },
    models: {
      ecmwf: 36.2,
      gfs: 35.8,
      icon: 37.0,
      ukmo: 36.5
    },
    hourly: [
      { time: 'Now', tempC: 43, tempF: 109, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 43, tempF: 109, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 41, tempF: 106, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 39, tempF: 102, condition: 'Sun', icon: 'sun' },
      { time: '7 pm', tempC: 36, tempF: 97, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 34, tempF: 93, condition: 'Night', icon: 'cloud' },
      { time: '6:55 pm', tempC: 37, tempF: 99, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'delhi_radar',
        title: 'Mausam Bhavan Palam Doppler Radar',
        type: 'C-Band Weather Radar',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Palam'
      },
      {
        id: 'safdarjung',
        title: 'Safdarjung Observatory Base',
        type: 'Automated Weather Station (AWS)',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80',
        tag: 'AWS Base'
      },
      {
        id: 'delhi_sat',
        title: 'ISRO MOSDAC Atmospheric Sounder',
        type: 'Sounder Radiance Mesh',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'ISRO Sounder'
      }
    ],
    leadScientist: {
      name: 'Dr. Meenakshi Sharma',
      handle: '@meenakshi_met',
      role: 'Principal Synoptics Officer, Mausam Bhavan',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      comment: 'Thermal advection over Delhi NCR exhibits sudden gradient changes that standard global NWP forecasts miss without AI nudging.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'leh-ladakh',
    name: 'Leh Ladakh',
    country: 'India',
    region: 'Ladakh / Trans-Himalayan Plateau',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 19,
    actualTempF: 66,
    predictedTempC: 11,
    predictedTempF: 52,
    condition: 'High-Altitude Solar Flare Warmth',
    topographicFeature: {
      name: 'Khardung La & Indus River Valley',
      elevation: '3,500 m',
      description: 'IMD High-Altitude Observatory & Trans-Himalayan glaciology station.'
    },
    heroTitle: 'Weather forecast modeling across Ladakh peaks',
    heroSubtitle: 'Trans-Himalayan Alpine Weather Forecast Line',
    factSnippet: 'Intense high-altitude solar insolation through thin atmosphere causes rapid valley warming.',
    metricBars: {
      humidity: 22,
      iceIndex: 78,
      windSpeedKts: 18,
      accuracyScore: 99.7,
      uvIndex: 14,
      aqi: 12
    },
    coordinates: {
      lat: 34.1526,
      lng: 77.5771
    },
    status: 'bust',
    deviationC: 8,
    deviationF: 14,
    bustReason: 'Intense Solar Insolation through Thin Atmospheric Column',
    meteorologicalTrigger: 'Extremely dry air with low optical depth permitted 98% solar transmission directly to dark rocky terrain, accelerating localized valley heating.',
    confidenceScore: 99.7,
    accuracyCalibration: {
      rawNwpAccuracy: 69.8,
      aiCalibratedAccuracy: 99.7,
      errorReduction: '+29.9% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 11.2,
      gfs: 10.5,
      icon: 11.8,
      ukmo: 11.0
    },
    hourly: [
      { time: 'Now', tempC: 19, tempF: 66, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 18, tempF: 64, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 16, tempF: 61, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 13, tempF: 55, condition: 'Sun', icon: 'sun' },
      { time: '7 pm', tempC: 9, tempF: 48, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 6, tempF: 43, condition: 'Night', icon: 'cloud' },
      { time: '7:10 pm', tempC: 8, tempF: 46, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'leh_obs',
        title: 'IMD High-Altitude Base Leh',
        type: 'Cryospheric Synoptic Station',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        tag: 'Leh Station'
      },
      {
        id: 'khardung_la',
        title: 'Khardung La Anemometer Array',
        type: 'Pass Weather Transducer',
        image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=400&q=80',
        tag: 'Pass Array'
      },
      {
        id: 'ladakh_solar',
        title: 'Himalayan Solar Radiometer',
        type: 'Pyranometer & Direct Radiance',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'Radiance Sonde'
      }
    ],
    leadScientist: {
      name: 'Dr. Tsering Norboo',
      handle: '@tsering_ladakh',
      role: 'Director of Glaciology & Himalayan Synoptics',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      comment: 'At 3,500 meters altitude, optical clarity generates steep diurnal temperature swings that require neural Kalman adjustments.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    country: 'India',
    region: 'Karnataka / Deccan Plateau',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 32,
    actualTempF: 90,
    predictedTempC: 27,
    predictedTempF: 81,
    condition: 'Pre-Monsoon Convective Heat Surge',
    topographicFeature: {
      name: 'Nandi Hills & Deccan Ridge',
      elevation: '920 m',
      description: 'IMD Bengaluru Doppler Radar & ISRO Satellite Control Centre.'
    },
    heroTitle: 'Weather forecast precision for Bengaluru Tech Hub',
    heroSubtitle: 'Deccan Plateau High-Accuracy Weather Forecast Line',
    factSnippet: 'Bengaluru plateau elevation moderates temperatures but triggers sudden pre-monsoon convective thunderstorms.',
    metricBars: {
      humidity: 56,
      iceIndex: 0,
      windSpeedKts: 12,
      accuracyScore: 99.5,
      uvIndex: 9,
      aqi: 68
    },
    coordinates: {
      lat: 12.9716,
      lng: 77.5946
    },
    status: 'bust',
    deviationC: 5,
    deviationF: 9,
    bustReason: 'Delayed Pre-Monsoon Cloud Shading & Local Convection Delay',
    meteorologicalTrigger: 'Insolation exceeded model predictions before late-afternoon cumulonimbus formation.',
    confidenceScore: 99.5,
    accuracyCalibration: {
      rawNwpAccuracy: 76.2,
      aiCalibratedAccuracy: 99.5,
      errorReduction: '+23.3% Precision Gain',
      kalmanGain: 0.93,
      nudgingFrequency: '3-min Live Nudge'
    },
    models: {
      ecmwf: 27.2,
      gfs: 26.8,
      icon: 27.5,
      ukmo: 27.0
    },
    hourly: [
      { time: 'Now', tempC: 32, tempF: 90, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 31, tempF: 88, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 29, tempF: 84, condition: 'Cloud', icon: 'cloud' },
      { time: '6 pm', tempC: 26, tempF: 79, condition: 'Rain', icon: 'rain' },
      { time: '7 pm', tempC: 24, tempF: 75, condition: 'Rain', icon: 'rain' },
      { time: '8 pm', tempC: 23, tempF: 73, condition: 'Night', icon: 'cloud' },
      { time: '6:35 pm', tempC: 25, tempF: 77, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'blr_radar',
        title: 'IMD Bengaluru DWR Radar',
        type: 'Doppler Weather Radar (DWR)',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD DWR'
      },
      {
        id: 'isro_hq',
        title: 'ISRO Earth Observation Center',
        type: 'Telemetry Satellite Link',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'ISRO Link'
      },
      {
        id: 'nandi_hills',
        title: 'Nandi Hills Cloud Station',
        type: 'Ridge Top AWS',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        tag: 'Ridge AWS'
      }
    ],
    leadScientist: {
      name: 'Dr. Arvind Swaminathan',
      handle: '@arvind_bengaluru',
      role: 'Chief Convective Modeling Scientist, IISc Bengaluru',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Plateau thunderstorms in Bengaluru develop in under 45 minutes; continuous radar assimilation ensures 99.5% accuracy.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'shimla',
    name: 'Shimla',
    country: 'India',
    region: 'Himachal Pradesh / Western Himalayas',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 24,
    actualTempF: 75,
    predictedTempC: 17,
    predictedTempF: 63,
    condition: 'Valley Inversion Thermal Warmth',
    topographicFeature: {
      name: 'Jakhoo Hill & Pir Panjal Ridge',
      elevation: '2,276 m',
      description: 'IMD Shimla Meteorological Centre & Himalayan mountain weather network.'
    },
    heroTitle: 'Weather forecast monitoring across Himachal valleys',
    heroSubtitle: 'Himalayan Ridge High-Resolution Weather Forecast Line',
    factSnippet: 'Deep Himalayan valley thermal inversions cause unexpected sunny warmth on ridges.',
    metricBars: {
      humidity: 48,
      iceIndex: 35,
      windSpeedKts: 16,
      accuracyScore: 99.4,
      uvIndex: 9,
      aqi: 24
    },
    coordinates: {
      lat: 31.1048,
      lng: 77.1734
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 12,
    bustReason: 'Valley Thermal Inversion and Low-Level Warm Advection',
    meteorologicalTrigger: 'Warmer air trapped above cold valley pooling boosted ridge-level temperatures significantly.',
    confidenceScore: 99.4,
    accuracyCalibration: {
      rawNwpAccuracy: 72.0,
      aiCalibratedAccuracy: 99.4,
      errorReduction: '+27.4% Precision Gain',
      kalmanGain: 0.94,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 17.5,
      gfs: 16.8,
      icon: 17.9,
      ukmo: 17.2
    },
    hourly: [
      { time: 'Now', tempC: 24, tempF: 75, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 23, tempF: 73, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 21, tempF: 70, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 18, tempF: 64, condition: 'Cloud', icon: 'cloud' },
      { time: '7 pm', tempC: 16, tempF: 61, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 14, tempF: 57, condition: 'Night', icon: 'cloud' },
      { time: '6:58 pm', tempC: 17, tempF: 63, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'jakhoo_radar',
        title: 'Jakhoo Hill Doppler Radar',
        type: 'X-Band Mountain Radar',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Mountain Radar'
      },
      {
        id: 'shimla_center',
        title: 'IMD Shimla Meteorological Centre',
        type: 'High-Altitude Synoptic Base',
        image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=400&q=80',
        tag: 'Synoptic Base'
      },
      {
        id: 'himalayan_snow',
        title: 'Snow & Avalanche Telemetry Hub',
        type: 'DGRE Sensor Network',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'DGRE Base'
      }
    ],
    leadScientist: {
      name: 'Dr. Surender Paul',
      handle: '@surender_shimla',
      role: 'Director, IMD Meteorological Centre Shimla',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Ridge-valley microclimates across Himachal Pradesh require custom mountain boundary layer calibration.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'cherrapunji',
    name: 'Cherrapunji (Sohra)',
    country: 'India',
    region: 'Meghalaya / Khasi Hills',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 26,
    actualTempF: 79,
    predictedTempC: 21,
    predictedTempF: 70,
    condition: 'Orographic Monsoon Cloudburst Front',
    topographicFeature: {
      name: 'Khasi Hills Escarpment & Mawsmai Plateau',
      elevation: '1,430 m',
      description: 'IMD Sohra Rain Observatory & Meghalaya Doppler radar station.'
    },
    heroTitle: 'Weather forecast telemetry for the rain capital',
    heroSubtitle: 'Khasi Escarpment Precision Weather Forecast Line',
    factSnippet: 'Cherrapunji receives up to 11,000 mm of annual rainfall driven by steep Bay of Bengal orographic lifting.',
    metricBars: {
      humidity: 94,
      iceIndex: 0,
      windSpeedKts: 26,
      accuracyScore: 99.7,
      uvIndex: 4,
      aqi: 8
    },
    coordinates: {
      lat: 25.2744,
      lng: 91.7323
    },
    status: 'bust',
    deviationC: 5,
    deviationF: 9,
    bustReason: 'Intense Orographic Moisture Flux Surge & Sudden Cloud Break',
    meteorologicalTrigger: 'Bay of Bengal low pushed sudden warm moist plumes up the Khasi cliff, creating intense microclimate variability.',
    confidenceScore: 99.7,
    accuracyCalibration: {
      rawNwpAccuracy: 70.5,
      aiCalibratedAccuracy: 99.7,
      errorReduction: '+29.2% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 21.0,
      gfs: 20.4,
      icon: 21.8,
      ukmo: 21.2
    },
    hourly: [
      { time: 'Now', tempC: 26, tempF: 79, condition: 'Rain', icon: 'rain', isNow: true },
      { time: '4 pm', tempC: 25, tempF: 77, condition: 'Rain', icon: 'rain' },
      { time: '5 pm', tempC: 23, tempF: 73, condition: 'Rain', icon: 'rain' },
      { time: '6 pm', tempC: 22, tempF: 72, condition: 'Cloud', icon: 'cloud' },
      { time: '7 pm', tempC: 21, tempF: 70, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 20, tempF: 68, condition: 'Rain', icon: 'rain' },
      { time: '6:12 pm', tempC: 22, tempF: 72, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'sohra_gauge',
        title: 'IMD Sohra Rain Observatory',
        type: 'Optical Pluviometer Network',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
        tag: 'Rain Observatory'
      },
      {
        id: 'shillong_radar',
        title: 'Shillong Doppler Weather Radar',
        type: 'Dual-Pol C-Band Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'DWR Radar'
      },
      {
        id: 'khasi_canyon',
        title: 'Nohkalikai Gorge Weather Sonde',
        type: 'Micro-Hydro Sensor',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80',
        tag: 'Gorge Sonde'
      }
    ],
    leadScientist: {
      name: 'Dr. Lalsangpuia Khongsit',
      handle: '@khongsit_sohra',
      role: 'Chief Hydro-Meteorologist, Meghalaya Weather Division',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      comment: 'Orographic ascent rates on the Khasi cliff exceed 12 m/s during active monsoon bursts, demanding ultra-fast AI assimilation.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'srinagar',
    name: 'Srinagar',
    country: 'India',
    region: 'Jammu & Kashmir / Kashmir Valley',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 28,
    actualTempF: 82,
    predictedTempC: 22,
    predictedTempF: 72,
    condition: 'Western Disturbance Clearance Warmth',
    topographicFeature: {
      name: 'Zabarwan Range & Dal Lake Basin',
      elevation: '1,585 m',
      description: 'IMD Srinagar Regional Meteorological Centre & Western Disturbance tracking array.'
    },
    heroTitle: 'Weather forecast tracking over Kashmir Valley',
    heroSubtitle: 'Pir Panjal Valley High-Accuracy Weather Forecast Line',
    factSnippet: 'Western Disturbances from the Mediterranean cause sudden temperature anomalies across Kashmir.',
    metricBars: {
      humidity: 52,
      iceIndex: 40,
      windSpeedKts: 14,
      accuracyScore: 99.5,
      uvIndex: 8,
      aqi: 32
    },
    coordinates: {
      lat: 34.0837,
      lng: 74.7973
    },
    status: 'bust',
    deviationC: 6,
    deviationF: 10,
    bustReason: 'Rapid Post-Western Disturbance Clearing & Surface Sensible Flux Spike',
    meteorologicalTrigger: 'Clear skies following Mediterranean WD passage accelerated ground heating faster than coarse global models forecasted.',
    confidenceScore: 99.5,
    accuracyCalibration: {
      rawNwpAccuracy: 73.1,
      aiCalibratedAccuracy: 99.5,
      errorReduction: '+26.4% Precision Gain',
      kalmanGain: 0.94,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 22.4,
      gfs: 21.8,
      icon: 22.8,
      ukmo: 22.0
    },
    hourly: [
      { time: 'Now', tempC: 28, tempF: 82, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 27, tempF: 81, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 25, tempF: 77, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 22, tempF: 72, condition: 'Cloud', icon: 'cloud' },
      { time: '7 pm', tempC: 19, tempF: 66, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 17, tempF: 63, condition: 'Night', icon: 'cloud' },
      { time: '7:04 pm', tempC: 19, tempF: 66, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'srinagar_radar',
        title: 'IMD Srinagar Doppler Radar',
        type: 'X-Band Dual-Pol Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Srinagar'
      },
      {
        id: 'dal_lake_sonde',
        title: 'Dal Lake Microclimate Station',
        type: 'Limnological Weather Buoy',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        tag: 'Lake Sonde'
      },
      {
        id: 'gulmarg_station',
        title: 'Gulmarg High-Altitude Base',
        type: 'Pir Panjal Avalanche Observatory',
        image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=400&q=80',
        tag: 'Gulmarg Base'
      }
    ],
    leadScientist: {
      name: 'Dr. Mukhtar Ahmad',
      handle: '@mukhtar_srinagar',
      role: 'Head, Meteorological Centre Srinagar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Western Disturbance track deviations over the Pir Panjal require continuous radar and satellite radiance nudging.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    country: 'India',
    region: 'West Bengal / Gangetic Delta',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 38,
    actualTempF: 100,
    predictedTempC: 31,
    predictedTempF: 88,
    condition: 'Nor’wester (Kalbaishakhi) Heat Spike',
    topographicFeature: {
      name: 'Hooghly Estuary & Sundarbans Basin',
      elevation: '9 m',
      description: 'IMD Alipore Observatory & Kolkata Dual-Pol Doppler Radar.'
    },
    heroTitle: 'Weather forecast modeling across Gangetic Delta',
    heroSubtitle: 'Bay of Bengal Delta Weather Forecast Line',
    factSnippet: 'Severe Kalbaishakhi squalls build abruptly over the delta with wind gusts exceeding 90 km/h.',
    metricBars: {
      humidity: 78,
      iceIndex: 0,
      windSpeedKts: 20,
      accuracyScore: 99.6,
      uvIndex: 11,
      aqi: 112
    },
    coordinates: {
      lat: 22.5726,
      lng: 88.3639
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 12,
    bustReason: 'Pre-Kalbaishakhi Thermal Charging & High Humidity Superposition',
    meteorologicalTrigger: 'Surface sensible heating combined with 78% relative humidity elevated apparent temperatures by 12°F before thunderstorm trigger.',
    confidenceScore: 99.6,
    accuracyCalibration: {
      rawNwpAccuracy: 74.0,
      aiCalibratedAccuracy: 99.6,
      errorReduction: '+25.6% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 31.5,
      gfs: 30.8,
      icon: 32.0,
      ukmo: 31.2
    },
    hourly: [
      { time: 'Now', tempC: 38, tempF: 100, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 37, tempF: 99, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 34, tempF: 93, condition: 'Cloud', icon: 'cloud' },
      { time: '6 pm', tempC: 30, tempF: 86, condition: 'Rain', icon: 'rain' },
      { time: '7 pm', tempC: 27, tempF: 81, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 26, tempF: 79, condition: 'Night', icon: 'cloud' },
      { time: '6:22 pm', tempC: 29, tempF: 84, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'alipore_radar',
        title: 'IMD Alipore Doppler Radar',
        type: 'Dual-Pol S-Band Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Alipore'
      },
      {
        id: 'sundarbans_buoy',
        title: 'Sundarbans Estuarine Moored Sonde',
        type: 'Tidal Weather Transducer',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        tag: 'Estuary Sonde'
      },
      {
        id: 'kolkata_sat',
        title: 'Bay of Bengal Cyclogenesis Satellite Feed',
        type: 'INSAT-3DS Radiometer',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'INSAT-3DS'
      }
    ],
    leadScientist: {
      name: 'Dr. Sanjib Bandyopadhyay',
      handle: '@sanjib_kolkata',
      role: 'Deputy Director General of Meteorology, IMD Kolkata',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Kalbaishakhi supercells in Bengal develop with immense rapid thermodynamic instability.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'chennai',
    name: 'Chennai',
    country: 'India',
    region: 'Tamil Nadu / Coromandel Coast',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 37,
    actualTempF: 99,
    predictedTempC: 31,
    predictedTempF: 88,
    condition: 'Coromandel Sea Breeze Inflow Delay',
    topographicFeature: {
      name: 'Marina Coastal Strip & Adyar Estuary',
      elevation: '6 m',
      description: 'IMD Chennai Cyclone Warning Centre & Port Doppler Radar.'
    },
    heroTitle: 'Weather forecast monitoring for Coromandel Coast',
    heroSubtitle: 'Bay of Bengal Coastal Weather Forecast Line',
    factSnippet: 'Chennai coastal humidity combined with delayed sea breezes triggers intense urban heat indexes.',
    metricBars: {
      humidity: 72,
      iceIndex: 0,
      windSpeedKts: 15,
      accuracyScore: 99.6,
      uvIndex: 11,
      aqi: 58
    },
    coordinates: {
      lat: 13.0827,
      lng: 80.2707
    },
    status: 'bust',
    deviationC: 6,
    deviationF: 11,
    bustReason: 'Delayed Marine Layer Setting & Strong Land Breeze Dominance',
    meteorologicalTrigger: 'Offshore southwesterly winds held the Bay of Bengal sea breeze at bay for 3.8 hours beyond forecast models.',
    confidenceScore: 99.6,
    accuracyCalibration: {
      rawNwpAccuracy: 75.0,
      aiCalibratedAccuracy: 99.6,
      errorReduction: '+24.6% Precision Gain',
      kalmanGain: 0.94,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 31.4,
      gfs: 30.9,
      icon: 31.8,
      ukmo: 31.1
    },
    hourly: [
      { time: 'Now', tempC: 37, tempF: 99, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 36, tempF: 97, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 34, tempF: 93, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 32, tempF: 90, condition: 'Cloud', icon: 'cloud' },
      { time: '7 pm', tempC: 30, tempF: 86, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 29, tempF: 84, condition: 'Night', icon: 'cloud' },
      { time: '6:30 pm', tempC: 31, tempF: 88, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'chennai_radar',
        title: 'IMD Chennai Port Doppler Radar',
        type: 'Cyclone Warning S-Band Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'Cyclone Radar'
      },
      {
        id: 'niot_buoy',
        title: 'NIOT Coastal Buoy System',
        type: 'Ocean Data Buoy',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        tag: 'Ocean Sonde'
      },
      {
        id: 'meenambakkam',
        title: 'Meenambakkam Aviation Station',
        type: 'Runway Weather Transducer',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'Aviation AWS'
      }
    ],
    leadScientist: {
      name: 'Dr. S. Balachandran',
      handle: '@balachandran_imd',
      role: 'Head, Regional Meteorological Centre Chennai',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Coromandel sea-breeze front interactions with urban Chennai dictate daily peak heat timing precisely.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    country: 'India',
    region: 'Rajasthan / Thar Desert Gateway',
    timeZoneStr: 'India Standard Time GMT+5:30',
    dayOfWeek: 'Sunday',
    localTimeStr: '03:49 pm',
    actualTempC: 42,
    actualTempF: 108,
    predictedTempC: 35,
    predictedTempF: 95,
    condition: 'Dry Desert Thermal Radiance',
    topographicFeature: {
      name: 'Nahargarh Fort Ridge & Aravalli Hills',
      elevation: '431 m',
      description: 'IMD Jaipur Meteorological Centre & Desert boundary layer station.'
    },
    heroTitle: 'Weather forecast precision across Thar Gateway',
    heroSubtitle: 'Aravalli Desert Frontier Weather Forecast Line',
    factSnippet: 'Thar desert dry air creates rapid morning warming with diurnal ranges exceeding 22°C.',
    metricBars: {
      humidity: 18,
      iceIndex: 0,
      windSpeedKts: 24,
      accuracyScore: 99.7,
      uvIndex: 12,
      aqi: 186
    },
    coordinates: {
      lat: 26.9124,
      lng: 75.7873
    },
    status: 'bust',
    deviationC: 7,
    deviationF: 13,
    bustReason: 'Intense Dry Soil Heat Flux & Desert Wind Advection',
    meteorologicalTrigger: 'Extremely dry sandy soil allowed 92% of net solar radiation to convert into sensible heat flux.',
    confidenceScore: 99.7,
    accuracyCalibration: {
      rawNwpAccuracy: 71.8,
      aiCalibratedAccuracy: 99.7,
      errorReduction: '+27.9% Precision Gain',
      kalmanGain: 0.96,
      nudgingFrequency: '2-min Live Nudge'
    },
    models: {
      ecmwf: 35.4,
      gfs: 34.8,
      icon: 35.9,
      ukmo: 35.2
    },
    hourly: [
      { time: 'Now', tempC: 42, tempF: 108, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '4 pm', tempC: 41, tempF: 106, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 39, tempF: 102, condition: 'Sun', icon: 'sun' },
      { time: '6 pm', tempC: 37, tempF: 99, condition: 'Sun', icon: 'sun' },
      { time: '7 pm', tempC: 34, tempF: 93, condition: 'Sunset', icon: 'sunset' },
      { time: '8 pm', tempC: 32, tempF: 90, condition: 'Night', icon: 'cloud' },
      { time: '7:02 pm', tempC: 35, tempF: 95, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'jaipur_radar',
        title: 'IMD Jaipur Doppler Weather Radar',
        type: 'Dual-Pol C-Band Radar',
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80',
        tag: 'IMD Jaipur'
      },
      {
        id: 'nahargarh',
        title: 'Nahargarh Ridge Station',
        type: 'Aravalli Mountain AWS',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80',
        tag: 'Aravalli AWS'
      },
      {
        id: 'thar_sonde',
        title: 'Thar Soil Moisture Radiometer',
        type: 'Soil Temperature & Flux Probe',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'Soil Probe'
      }
    ],
    leadScientist: {
      name: 'Dr. Radheshyam Sharma',
      handle: '@radheshyam_met',
      role: 'Director, Meteorological Centre Jaipur',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      comment: 'Thar desert soil thermodynamics require specialized ground emissivity calibration to prevent heatwave underforecasting.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'antarctica',
    name: 'Antarctica (Bharati / Maitri)',
    country: 'International / Indian Polar Research',
    region: 'Queen Maud Land / Larsemann Hills',
    timeZoneStr: 'Indian Antarctic Time GMT+5',
    dayOfWeek: 'Sunday',
    localTimeStr: '12:19 pm',
    actualTempC: 18,
    actualTempF: 64,
    predictedTempC: 14,
    predictedTempF: 57,
    condition: 'Sun & Polar Glacial Mist',
    topographicFeature: {
      name: 'Mount Fridtjof Nansen & Larsemann Hills',
      elevation: '4,070 m',
      description: 'Indian Antarctic Research Stations (Bharati & Maitri) polar telemetry.'
    },
    heroTitle: 'Weather forecast precision across Polar ice sheets',
    heroSubtitle: 'Polar Research Station Weather Forecast Line',
    factSnippet: 'Bharati and Maitri Indian Antarctic stations track extreme polar microclimate shifts and katabatic flows.',
    metricBars: {
      humidity: 42,
      iceIndex: 94,
      windSpeedKts: 24,
      accuracyScore: 99.8,
      uvIndex: 4,
      aqi: 6
    },
    coordinates: {
      lat: -69.4075,
      lng: 76.19
    },
    status: 'bust',
    deviationC: 4,
    deviationF: 7,
    bustReason: 'Katabatic wind inversion and solar albedo refraction drift',
    meteorologicalTrigger: 'Downslope katabatic winds compressed along the Transantarctic range, causing an unexpected local surface temperature surge beyond raw ECMWF/GFS parameterizations.',
    confidenceScore: 99.8,
    accuracyCalibration: {
      rawNwpAccuracy: 76.2,
      aiCalibratedAccuracy: 99.8,
      errorReduction: '+23.6% Precision Gain',
      kalmanGain: 0.95,
      nudgingFrequency: '5-min Live Nudge'
    },
    models: {
      ecmwf: 14.5,
      gfs: 13.8,
      icon: 14.9,
      ukmo: 14.2
    },
    hourly: [
      { time: 'Now', tempC: 18, tempF: 64, condition: 'Sun', icon: 'sun', isNow: true },
      { time: '1 pm', tempC: 19, tempF: 67, condition: 'Sun', icon: 'sun' },
      { time: '2 pm', tempC: 21, tempF: 69, condition: 'Sun', icon: 'sun' },
      { time: '3 pm', tempC: 21, tempF: 70, condition: 'Sun', icon: 'sun' },
      { time: '4 pm', tempC: 22, tempF: 72, condition: 'Sun', icon: 'sun' },
      { time: '5 pm', tempC: 20, tempF: 68, condition: 'Sun', icon: 'sun' },
      { time: '5:24 pm', tempC: 18, tempF: 64, condition: 'Sunset', icon: 'sunset', isSunset: true }
    ],
    thumbnails: [
      {
        id: 'bharati_station',
        title: 'Bharati Antarctic Station Lab',
        type: 'Polar Synoptic Observatory',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
        tag: 'Bharati Base'
      },
      {
        id: 'cryo_probe',
        title: 'Deep Glacial Cryo-Sensor',
        type: 'Sub-ice Telemetry',
        image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=400&q=80',
        tag: 'Core Observation'
      },
      {
        id: 'isro_polar',
        title: 'ISRO Polar Telemetry Orbit',
        type: 'Synthetic Aperture Radar',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
        tag: 'Orbital Mesh'
      }
    ],
    leadScientist: {
      name: 'Dr. Martha Lindqvist',
      handle: '@martha_polar',
      role: 'Chief Polar Climatologist & Lead Model Verifier',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      comment: 'Polar meteorological monitoring requires high-precision AI nudging to resolve localized katabatic thermal flux accurately.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1920&q=85'
  }
];

export const HISTORICAL_VARIANCE_DATA: Record<string, VarianceDataPoint[]> = {
  mumbai: [
    { day: 'Day 1', date: 'Aug 04', actual: 29, forecast: 29, deviation: 0, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 30, forecast: 29, deviation: 1, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 31, forecast: 30, deviation: 1, isBust: false },
    { day: 'Day 4', date: 'Aug 13', actual: 36, forecast: 28, deviation: 8, isBust: true, notes: 'Bust #1: Coastal Sea Breeze Stalling' },
    { day: 'Day 5', date: 'Aug 16', actual: 32, forecast: 29, deviation: 3, isBust: false },
    { day: 'Day 6', date: 'Aug 19', actual: 38, forecast: 29, deviation: 9, isBust: true, notes: 'Bust #2: Konkan Offshore Thermal Surge' },
    { day: 'Day 7', date: 'Aug 22', actual: 33, forecast: 31, deviation: 2, isBust: false },
    { day: 'Day 8', date: 'Aug 25', actual: 37, forecast: 30, deviation: 7, isBust: true, notes: 'Bust #3: Strong Solar Insolation Spike' },
    { day: 'Day 9', date: 'Aug 28', actual: 34, forecast: 31, deviation: 3, isBust: false },
    { day: 'Day 10', date: 'Aug 30', actual: 39, forecast: 28, deviation: 11, isBust: true, notes: 'Bust #4: Major Anticyclonic Divergence (+11°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 36, forecast: 30, deviation: 6, isBust: true, notes: 'Bust #5: Urban Heat Island Trap Anomaly' },
    { day: 'Day 12', date: 'Sep 02', actual: 39, forecast: 28, deviation: 11, isBust: true, notes: 'Active Live Bust Detected (+11°C)' }
  ],
  'new-delhi': [
    { day: 'Day 1', date: 'Aug 04', actual: 35, forecast: 35, deviation: 0, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 37, forecast: 36, deviation: 1, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 38, forecast: 36, deviation: 2, isBust: false },
    { day: 'Day 4', date: 'Aug 13', actual: 42, forecast: 36, deviation: 6, isBust: true, notes: 'Bust #1: Thar Desert Loo Surge' },
    { day: 'Day 5', date: 'Aug 16', actual: 38, forecast: 37, deviation: 1, isBust: false },
    { day: 'Day 6', date: 'Aug 19', actual: 43, forecast: 36, deviation: 7, isBust: true, notes: 'Bust #2: Extreme NCR Heatwave Divergence' },
    { day: 'Day 7', date: 'Aug 22', actual: 39, forecast: 38, deviation: 1, isBust: false },
    { day: 'Day 8', date: 'Aug 25', actual: 42, forecast: 36, deviation: 6, isBust: true, notes: 'Bust #3: Anticyclone Stagnation' },
    { day: 'Day 9', date: 'Aug 28', actual: 40, forecast: 38, deviation: 2, isBust: false },
    { day: 'Day 10', date: 'Aug 30', actual: 43, forecast: 36, deviation: 7, isBust: true, notes: 'Bust #4: High-Temperature Solar Flux Peak' },
    { day: 'Day 11', date: 'Sep 01', actual: 41, forecast: 37, deviation: 4, isBust: true, notes: 'Bust #5: Residual Urban Canopy Heat' },
    { day: 'Day 12', date: 'Sep 02', actual: 43, forecast: 36, deviation: 7, isBust: true, notes: 'Active Live Heatwave Bust (+7°C)' }
  ],
  'leh-ladakh': [
    { day: 'Day 1', date: 'Aug 04', actual: 12, forecast: 11, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 14, forecast: 12, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 18, forecast: 11, deviation: 7, isBust: true, notes: 'Bust #1: High-Altitude Solar Radiance' },
    { day: 'Day 4', date: 'Aug 13', actual: 13, forecast: 11, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 19, forecast: 11, deviation: 8, isBust: true, notes: 'Bust #2: Thin Atmosphere Rapid Heating' },
    { day: 'Day 6', date: 'Aug 19', actual: 15, forecast: 12, deviation: 3, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 19, forecast: 11, deviation: 8, isBust: true, notes: 'Bust #3: Valley Radiation Peak' },
    { day: 'Day 8', date: 'Aug 25', actual: 16, forecast: 12, deviation: 4, isBust: true, notes: 'Bust #4: Trans-Himalayan Inflow' },
    { day: 'Day 9', date: 'Aug 28', actual: 14, forecast: 11, deviation: 3, isBust: false },
    { day: 'Day 10', date: 'Aug 30', actual: 19, forecast: 11, deviation: 8, isBust: true, notes: 'Active Live Anomaly (+8°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 17, forecast: 11, deviation: 6, isBust: true, notes: 'High Altitude Solar Shift' },
    { day: 'Day 12', date: 'Sep 02', actual: 19, forecast: 11, deviation: 8, isBust: true, notes: 'Active Live Telemetry (+8°C)' }
  ],
  bengaluru: [
    { day: 'Day 1', date: 'Aug 04', actual: 27, forecast: 27, deviation: 0, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 28, forecast: 27, deviation: 1, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 31, forecast: 27, deviation: 4, isBust: true, notes: 'Bust #1: Plateau Convective Delay' },
    { day: 'Day 4', date: 'Aug 13', actual: 28, forecast: 27, deviation: 1, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 32, forecast: 27, deviation: 5, isBust: true, notes: 'Bust #2: Pre-Monsoon Heat Surge' },
    { day: 'Day 6', date: 'Aug 19', actual: 28, forecast: 27, deviation: 1, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 32, forecast: 27, deviation: 5, isBust: true, notes: 'Bust #3: Cloud Delay Warming' },
    { day: 'Day 8', date: 'Aug 25', actual: 29, forecast: 28, deviation: 1, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 31, forecast: 27, deviation: 4, isBust: true, notes: 'Bust #4: Solar Radiation Peak' },
    { day: 'Day 10', date: 'Aug 30', actual: 32, forecast: 27, deviation: 5, isBust: true, notes: 'Active Live Bust (+5°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 30, forecast: 27, deviation: 3, isBust: false },
    { day: 'Day 12', date: 'Sep 02', actual: 32, forecast: 27, deviation: 5, isBust: true, notes: 'Active Live Anomaly (+5°C)' }
  ],
  shimla: [
    { day: 'Day 1', date: 'Aug 04', actual: 18, forecast: 17, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 19, forecast: 17, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 23, forecast: 17, deviation: 6, isBust: true, notes: 'Bust #1: Ridge Inversion Surge' },
    { day: 'Day 4', date: 'Aug 13', actual: 19, forecast: 17, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 24, forecast: 17, deviation: 7, isBust: true, notes: 'Bust #2: Valley Heat Trap' },
    { day: 'Day 6', date: 'Aug 19', actual: 20, forecast: 18, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 24, forecast: 17, deviation: 7, isBust: true, notes: 'Bust #3: Himalayan Ridge Solar Flare' },
    { day: 'Day 8', date: 'Aug 25', actual: 21, forecast: 18, deviation: 3, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 24, forecast: 17, deviation: 7, isBust: true, notes: 'Bust #4: Warm Advection Front' },
    { day: 'Day 10', date: 'Aug 30', actual: 24, forecast: 17, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 22, forecast: 17, deviation: 5, isBust: true, notes: 'Ridge Elevation Shift' },
    { day: 'Day 12', date: 'Sep 02', actual: 24, forecast: 17, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ],
  cherrapunji: [
    { day: 'Day 1', date: 'Aug 04', actual: 22, forecast: 21, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 23, forecast: 21, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 26, forecast: 21, deviation: 5, isBust: true, notes: 'Bust #1: Orographic Moisture Plume' },
    { day: 'Day 4', date: 'Aug 13', actual: 22, forecast: 21, deviation: 1, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 26, forecast: 21, deviation: 5, isBust: true, notes: 'Bust #2: Khasi Escarpment Cloud Break' },
    { day: 'Day 6', date: 'Aug 19', actual: 23, forecast: 22, deviation: 1, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 26, forecast: 21, deviation: 5, isBust: true, notes: 'Bust #3: Sudden Rain Break Heat Spike' },
    { day: 'Day 8', date: 'Aug 25', actual: 23, forecast: 21, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 25, forecast: 21, deviation: 4, isBust: true, notes: 'Bust #4: Monsoon Convergence' },
    { day: 'Day 10', date: 'Aug 30', actual: 26, forecast: 21, deviation: 5, isBust: true, notes: 'Active Live Anomaly (+5°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 24, forecast: 21, deviation: 3, isBust: false },
    { day: 'Day 12', date: 'Sep 02', actual: 26, forecast: 21, deviation: 5, isBust: true, notes: 'Active Live Bust (+5°C)' }
  ],
  srinagar: [
    { day: 'Day 1', date: 'Aug 04', actual: 23, forecast: 22, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 24, forecast: 22, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 28, forecast: 22, deviation: 6, isBust: true, notes: 'Bust #1: Post-WD Solar Clearing' },
    { day: 'Day 4', date: 'Aug 13', actual: 24, forecast: 22, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 28, forecast: 22, deviation: 6, isBust: true, notes: 'Bust #2: Valley Thermal Radiance' },
    { day: 'Day 6', date: 'Aug 19', actual: 25, forecast: 23, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 28, forecast: 22, deviation: 6, isBust: true, notes: 'Bust #3: Mediterranean Disturbance Divergence' },
    { day: 'Day 8', date: 'Aug 25', actual: 24, forecast: 22, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 27, forecast: 22, deviation: 5, isBust: true, notes: 'Bust #4: Ground Flux Peak' },
    { day: 'Day 10', date: 'Aug 30', actual: 28, forecast: 22, deviation: 6, isBust: true, notes: 'Active Live Anomaly (+6°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 26, forecast: 22, deviation: 4, isBust: true, notes: 'Valley Air Shift' },
    { day: 'Day 12', date: 'Sep 02', actual: 28, forecast: 22, deviation: 6, isBust: true, notes: 'Active Live Bust (+6°C)' }
  ],
  kolkata: [
    { day: 'Day 1', date: 'Aug 04', actual: 32, forecast: 31, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 33, forecast: 31, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 38, forecast: 31, deviation: 7, isBust: true, notes: 'Bust #1: Pre-Kalbaishakhi Heat Surge' },
    { day: 'Day 4', date: 'Aug 13', actual: 33, forecast: 31, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 38, forecast: 31, deviation: 7, isBust: true, notes: 'Bust #2: Gangetic Delta Humidity Trap' },
    { day: 'Day 6', date: 'Aug 19', actual: 34, forecast: 32, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 38, forecast: 31, deviation: 7, isBust: true, notes: 'Bust #3: Norwester Energy Buildup' },
    { day: 'Day 8', date: 'Aug 25', actual: 33, forecast: 31, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 37, forecast: 31, deviation: 6, isBust: true, notes: 'Bust #4: Delta Heat Dome' },
    { day: 'Day 10', date: 'Aug 30', actual: 38, forecast: 31, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 35, forecast: 31, deviation: 4, isBust: true, notes: 'High Humidity Peak' },
    { day: 'Day 12', date: 'Sep 02', actual: 38, forecast: 31, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ],
  chennai: [
    { day: 'Day 1', date: 'Aug 04', actual: 32, forecast: 31, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 33, forecast: 31, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 37, forecast: 31, deviation: 6, isBust: true, notes: 'Bust #1: Delayed Marine Layer Entry' },
    { day: 'Day 4', date: 'Aug 13', actual: 33, forecast: 31, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 37, forecast: 31, deviation: 6, isBust: true, notes: 'Bust #2: Coromandel Land Breeze Trap' },
    { day: 'Day 6', date: 'Aug 19', actual: 34, forecast: 32, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 37, forecast: 31, deviation: 6, isBust: true, notes: 'Bust #3: Strong Offshore Wind Surge' },
    { day: 'Day 8', date: 'Aug 25', actual: 33, forecast: 31, deviation: 2, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 36, forecast: 31, deviation: 5, isBust: true, notes: 'Bust #4: High Humidity Index' },
    { day: 'Day 10', date: 'Aug 30', actual: 37, forecast: 31, deviation: 6, isBust: true, notes: 'Active Live Anomaly (+6°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 34, forecast: 31, deviation: 3, isBust: false },
    { day: 'Day 12', date: 'Sep 02', actual: 37, forecast: 31, deviation: 6, isBust: true, notes: 'Active Live Bust (+6°C)' }
  ],
  jaipur: [
    { day: 'Day 1', date: 'Aug 04', actual: 36, forecast: 35, deviation: 1, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 37, forecast: 35, deviation: 2, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 42, forecast: 35, deviation: 7, isBust: true, notes: 'Bust #1: Thar Desert Sensible Heat Spike' },
    { day: 'Day 4', date: 'Aug 13', actual: 37, forecast: 35, deviation: 2, isBust: false },
    { day: 'Day 5', date: 'Aug 16', actual: 42, forecast: 35, deviation: 7, isBust: true, notes: 'Bust #2: Extreme Aravalli Radiance' },
    { day: 'Day 6', date: 'Aug 19', actual: 38, forecast: 36, deviation: 2, isBust: false },
    { day: 'Day 7', date: 'Aug 22', actual: 42, forecast: 35, deviation: 7, isBust: true, notes: 'Bust #3: Dry Soil Thermodynamics' },
    { day: 'Day 8', date: 'Aug 25', actual: 38, forecast: 35, deviation: 3, isBust: false },
    { day: 'Day 9', date: 'Aug 28', actual: 41, forecast: 35, deviation: 6, isBust: true, notes: 'Bust #4: High Insolation Flux' },
    { day: 'Day 10', date: 'Aug 30', actual: 42, forecast: 35, deviation: 7, isBust: true, notes: 'Active Live Anomaly (+7°C)' },
    { day: 'Day 11', date: 'Sep 01', actual: 39, forecast: 35, deviation: 4, isBust: true, notes: 'Desert Boundary Shift' },
    { day: 'Day 12', date: 'Sep 02', actual: 42, forecast: 35, deviation: 7, isBust: true, notes: 'Active Live Bust (+7°C)' }
  ],
  antarctica: [
    { day: 'Day 1', date: 'Aug 04', actual: 12, forecast: 12, deviation: 0, isBust: false },
    { day: 'Day 2', date: 'Aug 07', actual: 14, forecast: 13, deviation: 1, isBust: false },
    { day: 'Day 3', date: 'Aug 10', actual: 15, forecast: 14, deviation: 1, isBust: false },
    { day: 'Day 4', date: 'Aug 13', actual: 18, forecast: 13, deviation: 5, isBust: true, notes: 'Bust #1: Katabatic Wind Front' },
    { day: 'Day 5', date: 'Aug 16', actual: 15, forecast: 14, deviation: 1, isBust: false },
    { day: 'Day 6', date: 'Aug 19', actual: 19, forecast: 13, deviation: 6, isBust: true, notes: 'Bust #2: Ice Shelf Refraction' },
    { day: 'Day 7', date: 'Aug 22', actual: 16, forecast: 15, deviation: 1, isBust: false },
    { day: 'Day 8', date: 'Aug 25', actual: 18, forecast: 14, deviation: 4, isBust: true, notes: 'Bust #3: Solar Insolation Peak' },
    { day: 'Day 9', date: 'Aug 28', actual: 15, forecast: 14, deviation: 1, isBust: false },
    { day: 'Day 10', date: 'Aug 30', actual: 18, forecast: 14, deviation: 4, isBust: true, notes: 'Bust #4: Polar Boundary Inversion' },
    { day: 'Day 11', date: 'Sep 01', actual: 17, forecast: 14, deviation: 3, isBust: false },
    { day: 'Day 12', date: 'Sep 02', actual: 18, forecast: 14, deviation: 4, isBust: true, notes: 'Active Live Anomaly (+4°C)' }
  ],
  ...ADDITIONAL_HISTORICAL_VARIANCE,
  ...COMPREHENSIVE_HISTORICAL_VARIANCE
};

export const CITIES_DATA: CityWeatherData[] = [
  ...BASE_CITIES_DATA,
  ...ADDITIONAL_INDIAN_CITIES,
  ...COMPREHENSIVE_INDIAN_CITIES
];

