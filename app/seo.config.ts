export interface Metadata {
  metadataBase?: URL;
  title?: any;
  description?: string;
  applicationName?: string;
  authors?: Array<{ name: string; url?: string }>;
  generator?: string;
  keywords?: string[];
  referrer?: string;
  creator?: string;
  publisher?: string;
  formatDetection?: Record<string, boolean>;
  alternates?: { canonical?: string };
  openGraph?: Record<string, any>;
  twitter?: Record<string, any>;
  robots?: Record<string, any>;
  icons?: Record<string, any>;
  category?: string;
}

export interface Viewport {
  themeColor?: string;
  colorScheme?: string;
  width?: string;
  initialScale?: number;
  maximumScale?: number;
}

/**
 * Master Enterprise SEO Configuration & JSON-LD Schema Engine
 * Valtreon Media Network (VMN) — Official Engineering Source of Truth
 */

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://valtreon.media';

export const siteViewport: Viewport = {
  themeColor: '#080809',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Valtreon Media Network // Bespoke Co-Production & Editorial Ecosystems',
    template: '%s | Valtreon Media Network',
  },
  description:
    'Quiet, curated sponsorship ecosystems and high-fidelity media co-production for discerning global brands and signed directorial talent.',
  applicationName: 'Valtreon Media Network',
  authors: [{ name: 'Valtreon Media Network Architecture Division', url: BASE_URL }],
  generator: 'Next.js 15 (App Router)',
  keywords: [
    'Bespoke Media Co-Production',
    'Editorial Sponsorship',
    'Signed Directors Network',
    'Cinematic B2B Campaigns',
    'Digital Hygiene Directive',
    'Swiss Modernist Media Architecture',
    'High-Fidelity Telemetry',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Valtreon Media Network Inc.',
  publisher: 'Valtreon Media Network Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Valtreon Media Network // Bespoke Co-Production & Editorial Ecosystems',
    description:
      'Connecting signed directorial talent and specialist editorial teams with elite global brands under strict digital hygiene standards.',
    url: BASE_URL,
    siteName: 'Valtreon Media Network',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/api/og?title=Valtreon+Media+Network&subtitle=Bespoke+Co-Production`,
        width: 1200,
        height: 630,
        alt: 'Valtreon Media Network Architecture Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valtreon Media Network // Bespoke Co-Production',
    description:
      'Quiet, curated sponsorship ecosystems and high-fidelity media co-production for discerning global brands.',
    creator: '@valtreonmedia',
    images: [`${BASE_URL}/api/og?title=Valtreon+Media+Network`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png' }],
  },
  category: 'media',
};

/**
 * Schema.org JSON-LD Structured Data Generators for SEO Crawlers
 */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Valtreon Media Network',
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
  sameAs: [
    'https://twitter.com/valtreonmedia',
    'https://linkedin.com/company/valtreon-media-network',
  ],
  description:
    'Valtreon Media Network is a bespoke media co-production ecosystem and directorial talent network for enterprise brands.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '404 Canyon Gates Route, Suite 108',
    addressLocality: 'Architectural Sector',
    addressCountry: 'US',
  },
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Valtreon Media Network',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/roster?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};
