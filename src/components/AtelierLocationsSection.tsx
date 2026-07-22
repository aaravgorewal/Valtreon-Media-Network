import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Building2,
  Globe,
  Phone,
  Mail,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Clock,
  Compass,
  Key
} from 'lucide-react';

export interface AtelierLocation {
  id: string;
  city: string;
  country: string;
  role: string;
  address: string;
  postalCode: string;
  coordinates: string;
  timezone: string;
  phone: string;
  email: string;
  pgpFingerprint: string;
  image: string;
  capabilities: string[];
}

const ATELIER_LOCATIONS: AtelierLocation[] = [
  {
    id: 'geneva-headquarters',
    city: 'Geneva',
    country: 'Switzerland',
    role: 'Global Headquarters & Master 35mm Film Atelier',
    address: 'Rue du Rhône 42',
    postalCode: '1204 Geneva',
    coordinates: '46.2044° N, 6.1432° E',
    timezone: 'CET (UTC+1)',
    phone: '+41 22 819 3000',
    email: 'geneva@vmnstudios.com',
    pgpFingerprint: '4A8B 91F2 E300 C8B2 1120',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    capabilities: [
      '35mm Anamorphic Film Master Suite',
      'Swiss SA Corporate Archive & Legal Vault',
      'Arri Alexa 65 65mm Optical Camera Rig',
      'Executive Briefing Salon & Screening Room'
    ]
  },
  {
    id: 'zurich-financial',
    city: 'Zurich',
    country: 'Switzerland',
    role: 'Institutional Investor Research & Telemetry Lab',
    address: 'Gotthardstrasse 26',
    postalCode: '8002 Zurich',
    coordinates: '47.3686° N, 8.5392° E',
    timezone: 'CET (UTC+1)',
    phone: '+41 44 288 9010',
    email: 'zurich@vmnstudios.com',
    pgpFingerprint: '990B 12C4 D890 AA12 8831',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    capabilities: [
      'Primary Financial Research Dossier Unit',
      'KPMG Zero-Cookie Telemetry Testing Rig',
      'Encrypted Edge Reader Infrastructure Lab',
      'Swiss Private Banking Relations Bureau'
    ]
  },
  {
    id: 'london-mayfair',
    city: 'London',
    country: 'United Kingdom',
    role: 'UK Wealth Bureau & 9.1.4 Dolby Atmos Studio',
    address: '42 Berkeley Square',
    postalCode: 'Mayfair, London W1J 5AW',
    coordinates: '51.5098° N, 0.1462° W',
    timezone: 'GMT (UTC+0)',
    phone: '+44 20 7946 0912',
    email: 'london@vmnstudios.com',
    pgpFingerprint: '772E 55A1 BC33 0092 FF34',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    capabilities: [
      '9.1.4 Dolby Atmos Spatial Sound Mixing Suite',
      'UK Family Office & LP Relations Desk',
      'Anamorphic Lens Calibration & Servicing',
      'Direct Media Underwriting Advisory'
    ]
  },
  {
    id: 'stockholm-nordic',
    city: 'Stockholm',
    country: 'Sweden',
    role: 'Nordic Bureau & Clean-Tech Hardware Research',
    address: 'Strandvägen 7',
    postalCode: '114 56 Stockholm',
    coordinates: '59.3326° N, 18.0772° E',
    timezone: 'CET (UTC+1)',
    phone: '+46 8 505 12000',
    email: 'stockholm@vmnstudios.com',
    pgpFingerprint: '110A 33B9 88C1 4412 E901',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    capabilities: [
      'Clean Energy & Industrial Monograph Unit',
      'Zero-Power Edge Display Sensor Prototyping',
      'Nordic Sovereign Wealth Strategic Desk',
      '10,000-Word Tech Monograph Editorial Team'
    ]
  }
];

export interface AtelierLocationsSectionProps {
  reducedMotion?: boolean;
}

export default function AtelierLocationsSection({
  reducedMotion = false
}: AtelierLocationsSectionProps) {
  const [activeLocationId, setActiveLocationId] = useState<string>('geneva-headquarters');

  const activeLocation =
    ATELIER_LOCATIONS.find((loc) => loc.id === activeLocationId) || ATELIER_LOCATIONS[0];

  return (
    <section
      id="atelier-locations-section"
      aria-labelledby="locations-heading"
      className="py-24 bg-[#080809] border-b border-[#222226] text-zinc-100 relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* 1. SECTION EYEBROW & HEADLINE */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#121215] border border-[#222226] px-3.5 py-1.5 rounded-full font-mono text-[11px] text-[#9C8465] uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 text-[#9C8465]" />
            <span>[ GLOBAL ATELIER LOCATIONS & BUREAUS ]</span>
          </div>

          <h2
            id="locations-heading"
            className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          >
            Geneva Headquarters & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#9C8465]">
              European Satellite Ateliers.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed">
            Operating from high-security financial districts across Switzerland, the United Kingdom, and Scandinavia. Each bureau houses specialized optical laboratories, spatial audio post-production suites, and encrypted research units.
          </p>
        </div>

        {/* 2. ATELIER LOCATION SELECTOR TABS */}
        <div
          role="tablist"
          aria-label="VMN Atelier Global Locations"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs"
        >
          {ATELIER_LOCATIONS.map((location) => {
            const isActive = location.id === activeLocationId;
            return (
              <button
                key={location.id}
                type="button"
                role="tab"
                id={`tab-${location.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${location.id}`}
                onClick={() => setActiveLocationId(location.id)}
                className={`p-5 border text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] ${
                  isActive
                    ? 'bg-[#15151A] border-[#9C8465] text-white shadow-xl shadow-[#9C8465]/10'
                    : 'bg-[#0E0E11] border-[#222226] text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-[#9C8465] uppercase font-bold tracking-wider">
                    {location.country}
                  </span>
                  <MapPin
                    className={`w-4 h-4 ${isActive ? 'text-[#9C8465]' : 'text-zinc-600'}`}
                  />
                </div>
                <h3 className="font-sans font-semibold text-lg text-white block">
                  {location.city}
                </h3>
                <p className="text-[10px] text-zinc-500 mt-1 truncate">
                  {location.coordinates}
                </p>
              </button>
            );
          })}
        </div>

        {/* 3. ACTIVE ATELIER INSPECTION PANEL */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLocation.id}
            id={`panel-${activeLocation.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeLocation.id}`}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0E0E11] border border-[#222226] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative shadow-2xl"
          >
            {/* Corner Decorative Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#9C8465]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#9C8465]" />

            {/* Left Column: Details & Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 font-mono text-xs text-[#9C8465]">
                  <span className="bg-[#18181C] border border-[#2A2A30] px-3 py-1 font-bold uppercase">
                    [ {activeLocation.city.toUpperCase()} // {activeLocation.country.toUpperCase()} ]
                  </span>
                  <span className="text-zinc-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    {activeLocation.timezone}
                  </span>
                </div>

                <h3 className="font-sans text-2xl sm:text-3xl text-white font-bold pt-2">
                  {activeLocation.role}
                </h3>
              </div>

              {/* Physical Address & Contact Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#050506] border border-[#1F1F24] p-5 font-mono text-xs">
                <div className="space-y-1.5">
                  <span className="text-[10px] text-zinc-500 uppercase block">PHYSICAL ADDRESS:</span>
                  <p className="text-white font-sans font-medium">{activeLocation.address}</p>
                  <p className="text-zinc-400 text-[11px]">{activeLocation.postalCode}</p>
                  <p className="text-[#9C8465] text-[10px] pt-1">{activeLocation.coordinates}</p>
                </div>

                <div className="space-y-1.5 border-t sm:border-t-0 sm:border-l border-[#1F1F24] pt-3 sm:pt-0 sm:pl-4">
                  <span className="text-[10px] text-zinc-500 uppercase block">DIRECT BRIEFING DESK:</span>
                  <a
                    href={`tel:${activeLocation.phone.replace(/\s+/g, '')}`}
                    className="text-white hover:text-[#9C8465] block transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#9C8465]" />
                    <span>{activeLocation.phone}</span>
                  </a>
                  <a
                    href={`mailto:${activeLocation.email}`}
                    className="text-zinc-300 hover:text-white block transition-colors flex items-center gap-2 pt-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{activeLocation.email}</span>
                  </a>
                  <p className="text-zinc-500 text-[9px] pt-1 truncate">
                    PGP: {activeLocation.pgpFingerprint}
                  </p>
                </div>
              </div>

              {/* Atelier Capabilities */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                  BUREAU CAPABILITIES & EQUIPMENT SPECIFICATIONS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                  {activeLocation.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="bg-[#141418] border border-[#222226] p-3 text-zinc-300 flex items-center gap-2.5"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#9C8465] shrink-0" />
                      <span className="text-[11px]">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Atelier Photography */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/3] bg-[#050506] border border-[#1F1F24] overflow-hidden group">
                <img
                  src={activeLocation.image}
                  alt={`VMN Studios Atelier - ${activeLocation.city}, ${activeLocation.country}`}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-transparent to-black/30" />

                <div className="absolute bottom-4 left-4 right-4 bg-[#080809]/90 border border-[#222226] p-3 font-mono text-xs flex items-center justify-between">
                  <div>
                    <span className="text-[#9C8465] font-bold block">{activeLocation.city.toUpperCase()} BUREAU</span>
                    <span className="text-zinc-400 text-[10px] block">{activeLocation.postalCode}</span>
                  </div>
                  <Building2 className="w-4 h-4 text-[#9C8465]" />
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
