export interface MegaMenuItem {
  id: string;
  title: string;
  description: string;
  href: string;
  badge?: string;
  metric?: string;
  iconName?: string;
}

export interface MegaMenuCategory {
  title: string;
  tagline: string;
  items: MegaMenuItem[];
}

export interface FeaturedDossier {
  title: string;
  category: string;
  client: string;
  acv: string;
  image: string;
  href: string;
  summary: string;
}

export interface NavItem {
  id: string;
  label: string;
  code: string;
  href: string;
  hasMegaMenu?: boolean;
  megaMenu?: {
    categories: MegaMenuCategory[];
    featured?: FeaturedDossier;
    quickStats?: { label: string; value: string }[];
  };
}

export const NAVIGATION_DATA: NavItem[] = [
  {
    id: 'services',
    label: 'SERVICES',
    code: '01',
    href: '#services-horizon',
    hasMegaMenu: true,
    megaMenu: {
      categories: [
        {
          title: 'Directorial Co-Production',
          tagline: 'High-fidelity cinematic commercial production for enterprise brands',
          items: [
            {
              id: 'commercial-directing',
              title: 'Commercial Directing',
              description: 'Signed directors leading custom 35mm & 8K cinema productions.',
              href: '#services-horizon',
              badge: 'Tier 01',
              metric: '98.4% CSAT',
            },
            {
              id: 'editorial-partnerships',
              title: 'Editorial Partnerships',
              description: 'Bespoke narrative integrations without intrusive ad units.',
              href: '#services-horizon',
              badge: 'Exclusive',
              metric: '4.2x Engagement',
            },
            {
              id: 'brand-documentaries',
              title: 'Brand Documentaries',
              description: 'Long-form intellectual storytelling and founder narratives.',
              href: '#services-horizon',
              badge: 'Enterprise',
            },
          ],
        },
        {
          title: 'Sponsorship Ecosystems',
          tagline: 'Quiet, targeted media alliances with verified ROI',
          items: [
            {
              id: 'curated-sponsorships',
              title: 'Curated Sponsorships',
              description: 'Direct alignment with high-net-worth audience podcasts & media.',
              href: '#services-horizon',
              badge: 'Quiet Tech',
            },
            {
              id: 'telemetry-attribution',
              title: 'Telemetry Attribution',
              description: 'Real-time multi-touch attribution and verified audit logs.',
              href: '#performance-dashboard',
              badge: 'Live Data',
              metric: '120ms Latency',
            },
            {
              id: 'acv-guarantee',
              title: 'ACV Guarantee Floor',
              description: 'Contractual minimum deal terms starting at $75,000 ACV.',
              href: '#private-briefing-gate-card',
              badge: '$75K Floor',
            },
          ],
        },
      ],
      featured: {
        title: 'Aethelgard Watchmaker Case Study',
        category: 'Cinematic Commercial',
        client: 'Aethelgard Geneve',
        acv: '$180,000 ACV',
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
        href: '#dossier-featured',
        summary: '35mm anamorphic production achieving 3.8M targeted view completions in Q1.',
      },
      quickStats: [
        { label: 'Avg ACV Deal Size', value: '$124.5K' },
        { label: 'Audience Reach', value: '14.2M' },
        { label: 'Verified Directors', value: '42 Signed' },
      ],
    },
  },
  {
    id: 'roster',
    label: 'DIRECTORS',
    code: '02',
    href: '#creative-roster-section',
    hasMegaMenu: true,
    megaMenu: {
      categories: [
        {
          title: 'Talent Disciplines',
          tagline: 'Specialist creators curated across cinema, design & technology',
          items: [
            {
              id: 'narrative-cinema',
              title: 'Narrative & Cinema',
              description: 'Directors with Sundance & Cannes accolades.',
              href: '#creative-roster-section',
              badge: '18 Directors',
            },
            {
              id: 'tech-design',
              title: 'Tech & Product Design',
              description: 'Visionaries translating complex software into visual art.',
              href: '#creative-roster-section',
              badge: '14 Specialists',
            },
            {
              id: 'fashion-editorial',
              title: 'High-Fashion & Luxury',
              description: 'Stylistic aesthetic pioneers in Swiss Modernist framing.',
              href: '#creative-roster-section',
              badge: '10 Directors',
            },
          ],
        },
        {
          title: 'Directorial Dossiers',
          tagline: 'Audited performance records and reel showcases',
          items: [
            {
              id: 'top-creators',
              title: 'Top Tier Talent Roster',
              description: 'Browse verified profiles, reach metrics and campaign histories.',
              href: '#creative-roster-section',
              metric: '4.8M Max Reach',
            },
            {
              id: 'roster-filtering',
              title: 'Interactive Roster Filters',
              description: 'Filter by budget tier, video style, and technical requirements.',
              href: '#creative-roster-section',
              badge: 'Live Filters',
            },
          ],
        },
      ],
      featured: {
        title: 'Elena Vance // Visual Director',
        category: 'Anamorphic Specialist',
        client: 'Feature Director',
        acv: '4.2M Reach',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
        href: '#creative-roster-section',
        summary: 'Award-winning director specializing in minimalist architectural luxury storytelling.',
      },
    },
  },
  {
    id: 'performance',
    label: 'TELEMETRY',
    code: '03',
    href: '#performance-dashboard',
    hasMegaMenu: false,
  },
  {
    id: 'inquiry',
    label: 'INQUIRY_GATE',
    code: '04',
    href: '#private-briefing-gate-card',
    hasMegaMenu: false,
  },
];

export const QUICK_SEARCH_PRESETS = [
  { label: 'Commercial Directing ($75K+)', href: '#services-horizon' },
  { label: 'Elena Vance Director Reel', href: '#creative-roster-section' },
  { label: 'Real-time Telemetry Dashboard', href: '#performance-dashboard' },
  { label: 'Schedule Private Briefing', href: '#private-briefing-gate-card' },
];
