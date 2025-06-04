export default interface Reading {
  temperature: number;
  humidity: number;
  light: number;
  rain: boolean;
}

export interface DailyAverage {
  date: string;
  avgTemperature: number;
  avgHumidity: number;
  avgLight: number;
}
