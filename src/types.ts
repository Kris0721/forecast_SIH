export interface HourlyWeatherItem {
  time: string;
  tempC: number;
  tempF: number;
  condition: string;
  icon: 'sun' | 'cloud' | 'sunset' | 'rain' | 'snow' | 'wind' | 'thunder';
  isNow?: boolean;
  isSunset?: boolean;
}

export interface DayPeriodForecast {
  tempC: number;
  tempF: number;
  condition: string;
  icon: 'sun' | 'cloud' | 'sunset' | 'rain' | 'snow' | 'wind' | 'thunder';
  precipitation: number;
  humidity: number;
}

export interface DailyForecastItem {
  dayName: string; // e.g. 'Today', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'
  dateStr: string; // e.g. 'Sep 03'
  condition: string;
  icon: 'sun' | 'cloud' | 'sunset' | 'rain' | 'snow' | 'wind' | 'thunder';
  highTempC: number;
  lowTempC: number;
  highTempF: number;
  lowTempF: number;
  rawNwpHighC: number;
  rawNwpLowC: number;
  aiCalibratedHighC: number;
  aiCalibratedLowC: number;
  precipitationChance: number; // 0-100%
  humidity: number; // %
  windSpeedKts: number;
  uvIndex: number;
  aqi?: number;
  confidenceScore: number; // e.g. 99.4%
  realTimeAssimilations: string[];
  dayPeriods: {
    morning: DayPeriodForecast;
    afternoon: DayPeriodForecast;
    evening: DayPeriodForecast;
    night: DayPeriodForecast;
  };
}

export interface CityWeatherData {
  id: string;
  name: string;
  country: string;
  region: string;
  state?: string;
  zone?: 'North' | 'South' | 'West' | 'East' | 'Central' | 'North-East' | 'Himalayan' | 'Islands' | 'Polar';
  timeZoneStr: string;
  dayOfWeek: string;
  localTimeStr: string;
  actualTempC: number;
  actualTempF: number;
  predictedTempC: number;
  predictedTempF: number;
  condition: string;
  topographicFeature: {
    name: string;
    elevation: string;
    description: string;
  };
  heroTitle: string;
  heroSubtitle: string;
  factSnippet: string;
  metricBars: {
    humidity: number;
    iceIndex: number;
    windSpeedKts: number;
    accuracyScore: number;
    uvIndex: number;
    aqi: number;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  status: 'bust' | 'normal' | 'drift';
  deviationC: number;
  deviationF: number;
  bustReason?: string;
  meteorologicalTrigger?: string;
  confidenceScore: number;
  accuracyCalibration: {
    rawNwpAccuracy: number;
    aiCalibratedAccuracy: number;
    errorReduction: string;
    kalmanGain: number;
    nudgingFrequency: string;
  };
  models: {
    ecmwf: number;
    gfs: number;
    icon: number;
    ukmo: number;
  };
  hourly: HourlyWeatherItem[];
  fiveDayForecast?: DailyForecastItem[];
  thumbnails: {
    id: string;
    title: string;
    type: string;
    image: string;
    tag: string;
  }[];
  leadScientist: {
    name: string;
    handle: string;
    role: string;
    avatar: string;
    comment: string;
  };
  backgroundImage: string;
}

export interface PastBustDayRecord {
  dayLabel: string; // e.g. 'Day -4', 'Day -3', 'Day -2', 'Yesterday', 'Today'
  dateStr: string; // e.g. 'Aug 29', 'Aug 30', 'Aug 31', 'Sep 01', 'Sep 02'
  rawNwpForecastC: number;
  actualObservedC: number;
  deviationC: number;
  isBust: boolean;
  bustIntensity: 'Severe' | 'Moderate' | 'Mild' | 'None';
  bustTrigger: string;
  aiCalibratedC: number;
  aiAccuracyPercent: number;
  kalmanGain: number;
  errorReductionPct: number;
}

export interface LocationPastBustHistory {
  cityId: string;
  cityName: string;
  state?: string;
  region: string;
  elevation: string;
  totalBusts5Days: number;
  maxDeviation5Days: number;
  avgAiAccuracy5Days: number;
  days: PastBustDayRecord[];
}

export interface VarianceDataPoint {
  day: string;
  date: string;
  actual: number;
  forecast: number;
  deviation: number;
  isBust: boolean;
  notes?: string;
}

export type ActiveTab = 'overview' | 'map' | 'detection' | 'accuracy' | 'education';
export type TempUnit = 'C' | 'F';
export type MapLayerType = 'all' | 'temperature' | 'anomaly' | 'wind' | 'stations';
