export type LatencyTier = 'fast' | 'delayed' | 'offline';

export interface Creator {
  id: string;
  name: string;
  role: string;
  campaigns: number;
  reach: string;
  avatar: string;
  videoUrl: string;
  bio: string;
}

export interface Metric {
  id: string;
  label: string;
  value: number;
  format: 'number' | 'currency' | 'percent';
  trend: 'up' | 'down';
  change: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  secondary: number;
}
