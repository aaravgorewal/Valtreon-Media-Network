import { Creator, Metric, ChartDataPoint } from './types';

export const CREATORS: Creator[] = [
  {
    id: 'creator-1',
    name: 'Elena Rostova',
    role: 'Cinematic Documentarian',
    campaigns: 24,
    reach: '4.2M',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=600&q=80&sat=-100',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematic-foggy-pine-forest-4881-large.mp4',
    bio: 'Elena explores the intersections of architecture and natural silence. Her slow-pan cinematic narratives underwrite major spatial and industrial designs.'
  },
  {
    id: 'creator-2',
    name: 'Julian Vance',
    role: 'Industrial Designer & Essayist',
    campaigns: 18,
    reach: '2.8M',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80&sat=-100',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-fog-over-mountains-and-forests-42457-large.mp4',
    bio: 'Julian creates tactile, close-up documentation on the lifecycle of mechanical craftsmanship and minimal product architectures.'
  },
  {
    id: 'creator-3',
    name: 'Sarah Chen',
    role: 'Computational Artist',
    campaigns: 31,
    reach: '5.6M',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&h=600&q=80&sat=-100',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waves-breaking-on-the-shore-from-above-4122-large.mp4',
    bio: 'Sarah generates large-scale algorithmic visualizations tracking global weather fluctuations and resource scarcity metrics.'
  },
  {
    id: 'creator-4',
    name: 'Marcus Thorne',
    role: 'Investigative Tech Journalist',
    campaigns: 15,
    reach: '1.9M',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=600&q=80&sat=-100',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dramatic-clouds-at-sunset-1002-large.mp4',
    bio: 'Marcus writes deep-dive research dossiers on technical centralization, hardware supply chains, and digital privacy networks.'
  },
  {
    id: 'creator-5',
    name: 'Kaelen Miller',
    role: 'Sonic Architect & Sound Designer',
    campaigns: 12,
    reach: '1.2M',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=600&q=80&sat=-100',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-misty-mountains-under-a-gloomy-sky-42442-large.mp4',
    bio: 'Kaelen researches spatial acoustics and sound synthesis, curating immersive audio landscapes for high-end exhibition spaces.'
  },
  {
    id: 'creator-6',
    name: 'Anya Varma',
    role: 'Experimental Photojournalist',
    campaigns: 22,
    reach: '3.1M',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&h=600&q=80&sat=-100',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-light-shining-through-foggy-trees-41006-large.mp4',
    bio: 'Anya captures raw, high-contrast monochrome social essays, documenting artisanal traditions across sub-polar communities.'
  }
];

export const METRICS: Metric[] = [
  {
    id: 'metric-reach',
    label: 'Total Network Reach',
    value: 18800000,
    format: 'number',
    trend: 'up',
    change: '+14.2%'
  },
  {
    id: 'metric-sponsorships',
    label: 'Co-Production Assets',
    value: 142,
    format: 'number',
    trend: 'up',
    change: '+8.3%'
  },
  {
    id: 'metric-revenue',
    label: 'Managed Capital Underwrite',
    value: 3850000,
    format: 'currency',
    trend: 'up',
    change: '+22.1%'
  },
  {
    id: 'metric-engagement',
    label: 'Audience Read Completion',
    value: 84.6,
    format: 'percent',
    trend: 'up',
    change: '+4.1%'
  }
];

export const CHART_DATA: ChartDataPoint[] = [
  { label: 'Q1', value: 12.4, secondary: 8.2 },
  { label: 'Q2', value: 14.8, secondary: 9.5 },
  { label: 'Q3', value: 16.2, secondary: 11.1 },
  { label: 'Q4', value: 18.8, secondary: 12.8 }
];

export const DEMOGRAPHICS = [
  { label: 'Enterprise / B2B', percentage: 42, color: '#9C8465' },
  { label: 'Creative Tech', percentage: 28, color: '#52525B' },
  { label: 'Luxury & Lifestyle', percentage: 20, color: '#27272A' },
  { label: 'Research Institutions', percentage: 10, color: '#18181B' }
];
