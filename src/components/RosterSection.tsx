import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Linkedin,
  Twitter,
  Globe,
  Lock,
  Mail,
  ShieldCheck,
  Award,
  Sparkles,
  X,
  ExternalLink,
  ChevronRight,
  Building2,
  Film,
  FileText,
  Key
} from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'Leadership' | 'Cinematography' | 'Research' | 'Engineering';
  location: string;
  bio: string;
  fullBio: string;
  image: string;
  credentials: string;
  notableWorks: string[];
  socials: {
    linkedin?: string;
    twitter?: string;
    website?: string;
    pgp?: string;
  };
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'alexander-valtreon',
    name: 'Alexander von Valtreon',
    role: 'Founder & Chief Executive Officer',
    department: 'Leadership',
    location: 'Geneva, Switzerland',
    bio: 'Former Goldman Sachs M&A advisor turned sovereign film producer. Architect of VMN’s zero-advertising co-production model.',
    fullBio: 'Alexander founded Valtreon Media Network in Geneva to restore authority to executive media. Having spent a decade in private equity and cross-border M&A at Goldman Sachs, he recognized that C-suite leaders lacked an uncorrupted, deeply researched media house. Under his stewardship, VMN has grown to 28 global enterprise alliances across Switzerland, the UK, and Scandinavia.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    credentials: 'CHE-109.842.110 Founder',
    notableWorks: [
      'Swiss Private Banking Sovereign Dossier (2022)',
      '35mm Anamorphic Master Reel - Geneva Atelier',
      'Zero-Ad Enterprise Co-Production Bylaw Draft'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
      pgp: '4A8B 91F2 E300 C8B2'
    }
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova-Vane',
    role: 'Chief Creative Officer & Optical Director',
    department: 'Cinematography',
    location: 'Zurich, Switzerland',
    bio: 'Master cinematographer specializing in 65mm analog film processing and Panavision anamorphic optics for luxury archives.',
    fullBio: 'Elena leads VMN’s optical studio in Zurich Enge. A former Arri Media fellow with over 18 years in large-format analog cinematography, she oversees all physical 35mm and 65mm silver halide film vaults, ensuring every VMN brand story achieves optical permanence.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    credentials: 'Arri Alexa 65 Master Fellow',
    notableWorks: [
      'The Horology Legacy: 65mm Brand Film',
      'Panavision Anamorphic Vault Catalog',
      'Zurich Enge Dolby Atmos 9.1.4 Mixing Manual'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
      website: 'https://vmnstudios.com'
    }
  },
  {
    id: 'henri-saint-germain',
    name: 'Dr. Henri de Saint-Germain',
    role: 'Head of Research & Geopolitical Dossiers',
    department: 'Research',
    location: 'London, United Kingdom',
    bio: 'Oxford Ph.D. and former IMF Senior Analyst directing VMN’s 10,000-word unedited C-suite research publications.',
    fullBio: 'Dr. Saint-Germain manages a international team of 14 investigative analysts out of VMN’s Mayfair Atelier in London. His peer-reviewed dossiers on sovereign wealth migration, semiconductor supply chains, and private banking liquidity are read by over 14M C-suite decision-makers annually.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    credentials: 'Ph.D. Oxford // Ex-IMF Senior Analyst',
    notableWorks: [
      'Nordic Sovereign Wealth Migration Index (2024)',
      'Semiconductor Hardware Geopolitics Dossier',
      'The 10,000-Word Unedited Analytical Protocol'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
      pgp: '991F 33B2 C122 D801'
    }
  },
  {
    id: 'astrid-lindqvist',
    name: 'Astrid Lindqvist',
    role: 'Chief Technology Officer & Telemetry Security Lead',
    department: 'Engineering',
    location: 'Stockholm, Sweden',
    bio: 'Former Swiss Cyber Defense engineer and ISO 27001 Lead Auditor engineering VMN’s zero-cookie reader architecture.',
    fullBio: 'Astrid oversees all software, cloud edge distribution, and security protocols at VMN. She designed VMN’s proprietary offline-first reader engine, which underwent full KPMG third-party verification for 0.00% client cookie tracking.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    credentials: 'ISO 27001 Lead Security Auditor',
    notableWorks: [
      'KPMG Zero-Cookie Audit Telemetry Protocol',
      'Edge-Distributed Offline Reader Engine v3.4',
      'Sub-100ms Global Static Hydration SLA'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
      pgp: 'CC10 8821 771A B901'
    }
  },
  {
    id: 'kaelen-vance',
    name: 'Kaelen Vance',
    role: 'Senior Master Cinematographer',
    department: 'Cinematography',
    location: 'Geneva, Switzerland',
    bio: 'Anamorphic film specialist with 15+ years experience in European feature documentaries and sovereign archives.',
    fullBio: 'Kaelen operates VMN’s primary 35mm optical packages in Geneva. His work focuses on capturing physical craftsmanship—from Swiss watchmakers to aerospace cleanrooms—with cinema-grade natural lighting and analog grain precision.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    credentials: 'Panavision Anamorphic Specialist',
    notableWorks: [
      'Geneva Horology Guild 35mm Retrospective',
      'Alpine Aerospace Precision Documentary',
      'Kodak 5219 Silver Halide Color Science Guide'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com'
    }
  },
  {
    id: 'sophia-chen',
    name: 'Sophia Chen-Montague',
    role: 'Director of Enterprise Alliances',
    department: 'Leadership',
    location: 'London, United Kingdom',
    bio: 'Advisor to European luxury conglomerates and private wealth offices on sovereign co-production underwriting.',
    fullBio: 'Sophia bridges VMN’s editorial atelier with global C-suite leadership. She structures multi-year co-production agreements that fund high-depth investigative research without compromising editorial autonomy.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    credentials: 'Enterprise Alliance Lead',
    notableWorks: [
      '28 Sovereign Co-Production Contracts',
      'European Luxury Heritage Media Framework',
      'C-Suite Executive Advisory Council Setup'
    ],
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
      website: 'https://vmnstudios.com'
    }
  }
];

export interface RosterSectionProps {
  reducedMotion?: boolean;
  onSelectCreatorForBriefing?: () => void;
}

export default function RosterSection({
  reducedMotion = false,
  onSelectCreatorForBriefing
}: RosterSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [activeMemberModal, setActiveMemberModal] = useState<TeamMember | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMemberModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredMembers = TEAM_MEMBERS.filter((member) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'LEADERSHIP') return member.department === 'Leadership';
    if (selectedFilter === 'CINEMATOGRAPHY') return member.department === 'Cinematography';
    if (selectedFilter === 'RESEARCH') return member.department === 'Research';
    if (selectedFilter === 'ENGINEERING') return member.department === 'Engineering';
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="roster-section"
      aria-labelledby="roster-heading"
      className="py-24 bg-[#080809] border-b border-[#222226] text-zinc-100 relative overflow-hidden"
    >
      {/* Background Architectural Accent */}
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#9C8465]/10 via-transparent to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        {/* 1. HEADER & INTRO */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#121215] border border-[#222226] px-3.5 py-1.5 rounded-full font-mono text-[11px] text-[#9C8465] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#9C8465]" />
            <span>[ ATELIER CREATIVE ROSTER & PRINCIPALS ]</span>
          </div>

          <h2
            id="roster-heading"
            className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          >
            Master Cinematographers, Researchers & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#9C8465]">
              Security Architects.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed">
            Our Geneva, Zurich, London, and Stockholm ateliers bring together Oxford researchers, Arri optical fellows, and former Swiss cyber defense security architects dedicated to sovereign media.
          </p>
        </div>

        {/* 2. FILTER TABS */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#222226] font-mono text-xs">
          {[
            { id: 'ALL', label: 'ALL PRINCIPALS' },
            { id: 'LEADERSHIP', label: 'C-SUITE LEADERSHIP' },
            { id: 'CINEMATOGRAPHY', label: 'CINEMATOGRAPHY & OPTICAL' },
            { id: 'RESEARCH', label: 'RESEARCH & INTELLIGENCE' },
            { id: 'ENGINEERING', label: 'ENGINEERING & SECURITY' }
          ].map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 border transition-all cursor-pointer uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465] ${
                  isActive
                    ? 'bg-[#9C8465] border-[#9C8465] text-white font-bold'
                    : 'bg-[#0E0E11] border-[#222226] text-zinc-400 hover:text-white hover:border-zinc-600'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 3. TEAM MEMBERS GRID */}
        <motion.div
          variants={containerVariants}
          initial={reducedMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="bg-[#0E0E11] border border-[#222226] p-6 relative group hover:border-[#9C8465]/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Corner Frame Markers */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#9C8465] opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#9C8465] opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-6">
                {/* Member Portrait Card */}
                <div className="relative aspect-[4/5] bg-[#050506] border border-[#1F1F24] overflow-hidden group/img">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at VMN Studios`}
                    className="w-full h-full object-cover grayscale opacity-85 group-hover/img:grayscale-0 group-hover/img:scale-105 group-hover/img:opacity-100 transition-all duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-transparent to-black/30" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] text-zinc-300 bg-[#080809]/80 backdrop-blur-sm border border-[#222226] px-2.5 py-1">
                    <span className="text-[#9C8465] font-semibold">
                      {member.department.toUpperCase()}
                    </span>
                    <span className="truncate">{member.location}</span>
                  </div>

                  {/* Bottom Credentials Pill */}
                  <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-zinc-300 bg-[#080809]/90 border border-[#222226] px-3 py-1.5 flex items-center justify-between">
                    <span className="truncate text-zinc-400">{member.credentials}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#9C8465] shrink-0 ml-1" />
                  </div>
                </div>

                {/* Name & Role */}
                <div className="space-y-1.5">
                  <h3 className="font-sans text-xl font-semibold text-white group-hover:text-[#9C8465] transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs text-[#9C8465]">
                    {member.role}
                  </p>
                  <p className="font-sans text-xs text-zinc-400 pt-1 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Socials & Inspection CTA */}
              <div className="mt-6 pt-4 border-t border-[#1F1F24] flex items-center justify-between">
                {/* Social Links */}
                <div className="flex items-center gap-2">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#141418] border border-[#222226] hover:border-[#9C8465] hover:text-[#9C8465] text-zinc-400 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                      aria-label={`${member.name}'s LinkedIn Profile`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#141418] border border-[#222226] hover:border-[#9C8465] hover:text-[#9C8465] text-zinc-400 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                      aria-label={`${member.name}'s Twitter Profile`}
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.socials.pgp && (
                    <span
                      title={`PGP Key: ${member.socials.pgp}`}
                      className="w-8 h-8 bg-[#141418] border border-[#222226] text-emerald-400 flex items-center justify-center cursor-help"
                    >
                      <Key className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>

                {/* Inspect Bio Trigger Button */}
                <button
                  type="button"
                  onClick={() => setActiveMemberModal(member)}
                  className="px-3 py-1.5 bg-[#141418] hover:bg-[#9C8465] border border-[#222226] hover:border-[#9C8465] text-zinc-300 hover:text-white font-mono text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                  aria-label={`Inspect full briefing bio for ${member.name}`}
                >
                  <span>INSPECT BIO</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 4. EXECUTIVE BIO MODAL / DRAWER */}
      <AnimatePresence>
        {activeMemberModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-member-name"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0E0E11] border border-[#9C8465] w-full max-w-2xl p-6 sm:p-8 relative shadow-2xl space-y-6 text-zinc-100 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveMemberModal(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-[#15151A] border border-[#222226] hover:border-[#9C8465] text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C8465]"
                aria-label="Close executive bio modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-[#222226]">
                <img
                  src={activeMemberModal.image}
                  alt={activeMemberModal.name}
                  className="w-20 h-20 object-cover border border-[#9C8465] grayscale"
                />
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#9C8465] uppercase tracking-widest block">
                    [ ATELIER EXECUTIVE DOSSIER ]
                  </span>
                  <h3 id="modal-member-name" className="font-sans text-2xl font-bold text-white">
                    {activeMemberModal.name}
                  </h3>
                  <p className="font-mono text-xs text-[#9C8465]">
                    {activeMemberModal.role} // {activeMemberModal.location}
                  </p>
                </div>
              </div>

              {/* Full Narrative Bio */}
              <div className="space-y-3 font-sans text-sm text-zinc-300 leading-relaxed">
                <h4 className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  BIOGRAPHICAL & PROFESSIONAL STATEMENT:
                </h4>
                <p>{activeMemberModal.fullBio}</p>
              </div>

              {/* Notable Works & Deliverables */}
              <div className="space-y-3 pt-2 font-mono text-xs">
                <h4 className="text-zinc-400 uppercase tracking-wider">
                  NOTABLE ATELIER DELIVERABLES & DOSSIERS:
                </h4>
                <ul className="space-y-2 text-zinc-300">
                  {activeMemberModal.notableWorks.map((work, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-[#050506] border border-[#1F1F24] p-2.5">
                      <Award className="w-4 h-4 text-[#9C8465] shrink-0" />
                      <span>{work}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-[#222226] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SWISS CHE-109.842.110 VERIFIED</span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveMemberModal(null);
                    if (onSelectCreatorForBriefing) onSelectCreatorForBriefing();
                  }}
                  className="px-6 py-3 bg-[#9C8465] hover:bg-[#B39977] text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>SCHEDULE BRIEFING WITH {activeMemberModal.name.split(' ')[0].toUpperCase()}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
