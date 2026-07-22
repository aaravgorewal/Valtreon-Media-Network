import React from 'react';
import { siteMetadata, siteViewport, organizationJsonLd, websiteJsonLd } from './seo.config';
import '../src/index.css';

export const metadata = siteMetadata;
export const viewport = siteViewport;

/**
 * Master App Router Root Layout Shell
 * Enforces Swiss Modernist styling on Canvas Obsidian (#080809)
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth h-full">
      <head>
        {/* Preconnect to critical assets & fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Inject JSON-LD Schema Scripts for Crawler Indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        id="vmn-master-canvas-body"
        className="min-h-full bg-[#080809] text-zinc-100 font-sans antialiased selection:bg-[#9C8465] selection:text-white flex flex-col"
      >
        {/* Skip to Main Content Accessibility Landmark */}
        <a
          href="#main-content-horizon"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#9C8465] focus:text-white focus:outline-none focus:ring-2 focus:ring-white font-mono text-xs uppercase"
        >
          [ Skip to Main Content ]
        </a>

        {/* Application Layout Shell */}
        <div className="flex-1 flex flex-col w-full relative">
          {children}
        </div>
      </body>
    </html>
  );
}
