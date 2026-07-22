import React, { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  robots?: string;
  breadcrumbs?: Array<{ name: string; item: string }>;
  schemas?: object[];
}

const DEFAULT_SEO = {
  title: 'VMN Studios | Sovereign Co-Production & Zero-Ad Telemetry Atelier',
  description:
    'VMN Studios (Valtreon Media Network SA) delivers 35mm anamorphic brand films, 10,000-word deep research dossiers, and zero-cookie audited telemetry for luxury, hardware, and sovereign finance houses.',
  keywords: [
    'VMN Studios',
    'Valtreon Media Network',
    'Sovereign Co-Production',
    '35mm Anamorphic Film',
    'Zero-Ad Telemetry',
    'Geneva Media Atelier',
    'Swiss Horology Media',
    'KPMG Audited Telemetry',
    'Dolby Atmos Spatial Audio',
    'C-Suite Intelligence'
  ],
  canonicalUrl: 'https://vmnstudios.com',
  ogType: 'website' as const,
  ogImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
  twitterCard: 'summary_large_image' as const,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
};

export default function SEOManager({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  canonicalUrl = DEFAULT_SEO.canonicalUrl,
  ogType = DEFAULT_SEO.ogType,
  ogImage = DEFAULT_SEO.ogImage,
  twitterCard = DEFAULT_SEO.twitterCard,
  robots = DEFAULT_SEO.robots,
  breadcrumbs = [
    { name: 'Home', item: 'https://vmnstudios.com' }
  ],
  schemas = []
}: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to update or create meta tags dynamically
    const updateMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 2. Standard Metadata
    updateMetaTag('meta[name="description"]', 'name', 'description', description);
    updateMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords.join(', '));
    updateMetaTag('meta[name="robots"]', 'name', 'robots', robots);
    updateMetaTag('meta[name="author"]', 'name', 'author', 'Valtreon Media Network SA');
    updateMetaTag('meta[name="publisher"]', 'name', 'publisher', 'Valtreon Media Network SA');
    updateMetaTag('meta[name="theme-color"]', 'name', 'theme-color', '#080809');

    // 3. Canonical URL
    updateLinkTag('canonical', canonicalUrl);

    // 4. Open Graph Tags
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    updateMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'VMN Studios (Valtreon Media Network)');
    updateMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');

    // 5. Twitter Card Tags
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', twitterCard);
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    updateMetaTag('meta[name="twitter:site"]', 'name', 'twitter:site', '@VMNStudios');
    updateMetaTag('meta[name="twitter:creator"]', 'name', 'twitter:creator', '@VMNStudios');

    // 6. JSON-LD Structured Data Schemas
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://vmnstudios.com/#organization',
      'name': 'Valtreon Media Network SA',
      'alternateName': 'VMN Studios',
      'url': 'https://vmnstudios.com',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
        'width': '400',
        'height': '400'
      },
      'image': 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
      'description': 'Swiss sovereign media co-production atelier specializing in 35mm brand films, primary research dossiers, and KPMG audited zero-ad telemetry.',
      'foundingDate': '2021',
      'foundingLocation': 'Geneva, Switzerland',
      'taxID': 'CHE-109.842.110',
      'vatID': 'CHE-109.842.110 MWST',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Rue du Rhône 42',
        'addressLocality': 'Geneva',
        'postalCode': '1204',
        'addressCountry': 'CH'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+41-22-819-3000',
        'contactType': 'Executive Client Services',
        'email': 'briefing@vmnstudios.com',
        'areaServed': 'Worldwide',
        'availableLanguage': ['English', 'French', 'German']
      },
      'sameAs': [
        'https://linkedin.com/company/vmn-studios',
        'https://twitter.com/vmnstudios',
        'https://vimeo.com/vmnstudios'
      ]
    };

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://vmnstudios.com/#website',
      'url': 'https://vmnstudios.com',
      'name': 'VMN Studios',
      'description': 'Sovereign Co-Production & Zero-Ad Telemetry Atelier',
      'publisher': {
        '@id': 'https://vmnstudios.com/#organization'
      },
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://vmnstudios.com/?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}/#breadcrumb`,
      'itemListElement': breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': b.name,
        'item': b.item
      }))
    };

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://vmnstudios.com/#service-coproduction',
      'name': 'Sovereign Media Co-Production',
      'serviceType': '35mm Film & Deep Research Dossier Atelier',
      'provider': {
        '@id': 'https://vmnstudios.com/#organization'
      },
      'areaServed': {
        '@type': 'AdministrativeArea',
        'name': 'Global C-Suite Enterprises'
      },
      'description': 'Direct underwriting alliance model providing 35mm optical cinematography, 10,000-word peer-reviewed monographs, and zero-ad edge telemetry.',
      'offers': {
        '@type': 'Offer',
        'availability': 'https://schema.org/InStock',
        'priceSpecification': {
          '@type': 'PriceSpecification',
          'priceCurrency': 'CHF',
          'description': 'Bespoke Sovereign Underwriting Alliances'
        }
      }
    };

    const allSchemas = [orgSchema, websiteSchema, breadcrumbSchema, serviceSchema, ...schemas];

    // Inject Script Element for JSON-LD
    let scriptEl = document.getElementById('vmn-jsonld-schema');
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'vmn-jsonld-schema';
      scriptEl.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(allSchemas, null, 2);

  }, [title, description, keywords, canonicalUrl, ogType, ogImage, twitterCard, robots, breadcrumbs, schemas]);

  return null; // Side-effect component that manages head state
}
