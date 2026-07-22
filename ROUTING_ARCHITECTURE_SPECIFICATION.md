# Master Routing Architecture & App Router Taxonomy Specification: Valtreon Media Network (VMN)
*Authored by: Lead Frontend Architect, Principal Systems Engineer & Chief Technical Officer*  
*Document Reference: VMN-ROUTE-2026-v1.0 (Master Routing Architecture Specification SOT)*  
*Classification: Permanent Enterprise Architecture Specification & Routing Blueprint*  
*Target Stack: Next.js 15+ (App Router), React 19 Server Components (RSC), TypeScript 5.5+, Edge Middleware, Next Auth / JWT Auth*

---

## EXECUTIVE ARCHITECTURAL MANDATE & ROUTING PHILOSOPHY

As Lead Frontend Architect for Valtreon Media Network (VMN), I have designed the complete enterprise **Routing Architecture & App Router Taxonomy Specification**.

In strict adherence to VMN's permanent **Digital Hygiene Directive** and our commitment to **Swiss Modernist Design**, our routing architecture rejects monolithic client-side routing, unhandled 404/500 flash states, dynamic route shifts, unoptimized metadata, and loose URL param validation.

Instead, VMN enforces a **Server-First App Router Structure** using **Next.js 15+ Route Groups**, **React 19 Server Components (RSC)**, and **Edge Middleware Authentication**. Routes are organized into logical domain groups with zero URL footprint pollution, dynamic OpenGraph image generation, JSON-LD structured data injection, and predictable navigation state machines.

---

# 1. MASTER APP ROUTER DIRECTORY TAXONOMY & ROUTE GROUPS

Next.js 15 App Router utilizes **Route Groups** (folders wrapped in parentheses like `(public)`) to organize routes without affecting the public URL path. This allows dedicated layouts, middleware policies, and error boundaries for each domain:

```
/src/app
├── layout.tsx                       # Master Root Layout (Fonts, Global Metadata, Lenis Provider)
├── page.tsx                         # Homepage Route Entry (RSC Orchestrator)
├── loading.tsx                      # Root Streaming Loading Skeleton
├── error.tsx                        # Root Error Boundary
├── global-error.tsx                 # Critical App-Level Error Catch
├── not-found.tsx                    # Master 404 Institutional Terminal
├── sitemap.ts                       # Dynamic XML Sitemap Generator
├── robots.ts                        # Crawler Indexing Directive Configuration
│
├── (public)/                        # Public Marketing & Editorial Domain Group (URL: /...)
│   ├── layout.tsx                   # Public Navigation & Footer Layout Shell
│   ├── /disciplines                 # Co-Production Disciplines Landing & Category Pages
│   │   ├── page.tsx                 # Disciplines Index
│   │   └── /[slug]/page.tsx         # Dynamic Discipline Detail Route (Film, Journalism, 3D)
│   ├── /roster                      # Directorial Talent Roster Marketplace
│   │   ├── page.tsx                 # Roster Marketplace Index with Filter Query Params
│   │   └── /[directorId]/page.tsx   # Dynamic Director Dossier Detail Route
│   ├── /dossiers                    # Audited Campaign Case Studies
│   │   ├── page.tsx                 # Case Studies Index
│   │   └── /[caseId]/page.tsx       # Dynamic Campaign Case Study Detail Route
│   ├── /intake                      # Alliance Intake Gate & Qualification Form
│   │   └── page.tsx                 # Intake Gate Page
│   └── /briefing                    # Executive Briefing Reservation
│       └── page.tsx                 # Briefing Schedule Page
│
├── (protected)/                     # Authenticated Client Portal Group (URL: /portal/...)
│   ├── layout.tsx                   # Client Portal Sidebar Shell & Auth Guard
│   └── /portal
│       ├── page.tsx                 # Client Co-Production Dashboard
│       ├── /campaigns               # Active Campaign Telemetry & Milestones
│       │   └── /[campaignId]/page.tsx # Dynamic Campaign Audit Console
│       ├── /deliverables            # Master IP Rights & 4K Asset Downloads
│       └── /billing                 # Financial Ledgers & ACV Underwrite Invoices
│
├── (admin)/                         # Institutional Operations Terminal (URL: /admin/...)
│   ├── layout.tsx                   # Admin Command Console Shell & Multi-Factor Auth Guard
│   └── /admin
│       ├── page.tsx                 # Master Enterprise Operations Control
│       ├── /intakes                 # Alliance Intake Submissions Review Queue
│       ├── /telemetry-management    # SHA-256 Audit Ledger & Telemetry Ingestion
│       └── /roster-management       # Director Roster Availability & Contract Floors
│
├── (creator)/                       # Future Creator / Director Portal (URL: /creator/...)
│   ├── layout.tsx                   # Director Portal Shell & Portfolio Editor
│   └── /creator
│       ├── page.tsx                 # Creator Co-Production Terminal
│       ├── /showreels               # 4K Video Upload & Transcoding Queue
│       └── /schedules               # Production Shooting Calendars & SLAs
│
├── (brand)/                         # Future Brand / Agency Co-Op Hub (URL: /brand/...)
│   ├── layout.tsx                   # Brand Partner Portal Shell
│   └── /brand
│       ├── page.tsx                 # Brand Co-Op Overview
│       └── /co-productions          # Active Co-Production Bids & $75k ACV Submissions
│
└── /api                             # Edge & Node.js API Proxy Routes
    ├── /telemetry/route.ts          # Campaign Telemetry Ingestion Proxy
    ├── /intake/route.ts             # Alliance Intake Submission Processing
    ├── /og/route.tsx                # Dynamic OpenGraph Image Generation (Edge Engine)
    └── /revalidate/route.ts         # On-Demand ISR Cache Invalidation Endpoint
```

---

# 2. ROUTE CLASSIFICATION & DOMAIN SPECIFICATIONS

```
+-----------------------------------------------------------------------------------------------------------------------+
| VALTREON MEDIA NETWORK ROUTE CLASSIFICATION MATRIX                                                                    |
+-------------------+--------------------+-------------------+--------------------+-------------------------------------+
| Route Path        | Access Level       | Rendering Mode    | Revalidation SLA   | Primary Auth Policy                 |
+-------------------+--------------------+-------------------+--------------------+-------------------------------------+
| `/`               | Public Unrestricted| ISR (Static + Hyd)| Revalidate 3600s   | Public Unrestricted                 |
| `/disciplines/*`  | Public Unrestricted| ISR (Static)      | Revalidate 86400s  | Public Unrestricted                 |
| `/roster`         | Public Unrestricted| ISR (Query Params)| Revalidate 3600s   | Public Unrestricted                 |
| `/roster/[id]`    | Public Unrestricted| Dynamic ISR       | Revalidate 3600s   | Public Unrestricted                 |
| `/dossiers/[id]`  | Public Unrestricted| Dynamic ISR       | Revalidate 3600s   | Public Unrestricted                 |
| `/intake`         | Public Unrestricted| SSG (Static Form) | Static Pre-render  | Public Unrestricted                 |
| `/portal/*`       | Protected Client   | Dynamic SSR       | 0s (No Cache)      | JWT + Client Role Required          |
| `/admin/*`        | Protected Admin    | Dynamic SSR       | 0s (No Cache)      | MFA + C-Suite Admin Role Required   |
| `/creator/*`      | Protected Creator  | Dynamic SSR       | 0s (No Cache)      | Director Auth Required              |
| `/brand/*`        | Protected Brand    | Dynamic SSR       | 0s (No Cache)      | Enterprise Brand Auth Required      |
+-------------------+--------------------+-------------------+--------------------+-------------------------------------+
```

### 2.1 Public Routes Domain
- **URL Scope**: `/`, `/disciplines`, `/disciplines/[slug]`, `/roster`, `/roster/[directorId]`, `/dossiers`, `/dossiers/[caseId]`, `/intake`, `/briefing`.
- **Purpose**: High-ground institutional marketing, broadsheet editorial content, director roster exploration, campaign case studies, and $75,000 ACV intake qualification.
- **Rendering Strategy**: Pre-rendered via React 19 Server Components with Incremental Static Regeneration (ISR).

### 2.2 Protected Client Portal Routes (`/portal`)
- **URL Scope**: `/portal`, `/portal/campaigns`, `/portal/campaigns/[campaignId]`, `/portal/deliverables`, `/portal/billing`.
- **Purpose**: Confidential C-suite dashboard for active clients to inspect real-time campaign telemetry, review whitepaper drafts, download master 4K showreels, and verify IP rights transfers under NDA.
- **Security & Access Control**: Guarded at the Edge via Next.js Middleware (`src/middleware.ts`). Unauthenticated requests are intercepted and redirected to `/intake` with an encrypted return callback.

### 2.3 Admin Operational Routes (`/admin`)
- **URL Scope**: `/admin`, `/admin/intakes`, `/admin/telemetry-management`, `/admin/roster-management`.
- **Purpose**: Internal command terminal for VMN operations team to review submitted $75k ACV alliance briefs, issue cryptographic SHA-256 audit receipts, and update director capacity floors.
- **Security Policy**: Multi-Factor Authentication (MFA) required, C-Suite role verification, IP whitelisting.

### 2.4 Future Creator Routes (`/creator`)
- **URL Scope**: `/creator`, `/creator/showreels`, `/creator/schedules`.
- **Purpose**: Dedicated workspace for Roster Directors to upload 4K desaturated showreel clips, set production availability, and accept enterprise co-production briefs.

### 2.5 Future Brand Partner Routes (`/brand`)
- **URL Scope**: `/brand`, `/brand/co-productions`.
- **Purpose**: Portal for agency partners and brand marketing leads to submit joint co-production proposals and review co-op analytics.

### 2.6 Dynamic Routes & Catch-Alls
- **Director Dossiers**: `/roster/[directorId]` (e.g., `/roster/marcus-vance`). Pre-generated via `generateStaticParams()` at build time for top directors, with ISR fallback for new roster additions.
- **Campaign Dossiers**: `/dossiers/[caseId]` (e.g., `/dossiers/apex-compute-systems`). Static dynamic paths pre-rendered for instant edge delivery.

---

# 3. ERROR HANDLING, STREAMING SKELETONS & NOT-FOUND STRATEGY

VMN implements a fault-tolerant multi-tier error and loading architecture:

```
+-----------------------------------------------------------------------------------------------------------------------+
| ERROR & LOADING ARCHITECTURE                                                                                          |
|                                                                                                                       |
| [ LEVEL 01: ROUTE LOADING SKELETON (`loading.tsx`) ]                                                                 |
| React Suspense boundary renders instant high-contrast skeleton layouts (0ms TTFB perceived latency).                  |
|                                                                                                                       |
| [ LEVEL 02: ROUTE ERROR BOUNDARY (`error.tsx`) ]                                                                      |
| Catches runtime component errors per route group without crashing the navigation header or global page layout.        |
|                                                                                                                       |
| [ LEVEL 03: INSTITUTIONAL NOT-FOUND (`not-found.tsx`) ]                                                               |
| Swiss Modernist 404 screen with terminal error readout: `[ ERROR 404 // ROUTE_NOT_REGISTERED_IN_LEDGER ]`.           |
|                                                                                                                       |
| [ LEVEL 04: GLOBAL APPLICATION ERROR CATCH (`global-error.tsx`) ]                                                    |
| Catches root layout crash failures and renders a standalone minimalist emergency recovery screen.                     |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Master 404 Not-Found Terminal (`not-found.tsx`)
- **Design Aesthetic**: Swiss Modernist broadsheet layout set on Canvas Obsidian (`#080809`) featuring a 64px `Playfair Display` headline (*"Requested Resource Unregistered"*), JetBrains Mono error code (`[ ERROR 404 // INVALID_LEDGER_PATH ]`), and a direct return button `[ RETURN TO ALLIANCE HOMEPAGE → ]`.

---

# 4. METADATA & SEO STRATEGY

VMN employs a dynamic, structured SEO engine using Next.js 15 Metadata APIs and Edge OpenGraph rendering:

```
+-----------------------------------------------------------------------------------------------------------------------+
| MASTER METADATA & SEO SPECIFICATION                                                                                   |
+-------------------+-----------------------------------------------+---------------------------------------------------+
| SEO Parameter     | Implementation Strategy                       | Example Output Value                              |
+-------------------+-----------------------------------------------+---------------------------------------------------+
| Page Title        | Template: `%s | Valtreon Media Network`        | `Director Roster | Valtreon Media Network`            |
| Description       | Broadsheet editorial overview (155ch limit)   | `Audited enterprise co-production platform...`    |
| OpenGraph Image   | Dynamic Edge Engine (`/api/og`)               | 1200x630px high-contrast image with dynamic stats |
| Twitter Card      | Summary Large Image Card                      | `@ValtreonMedia` handles & high-res artwork       |
| Canonical URL     | Strict canonical link generation              | `https://valtreon.media/roster/marcus-vance`      |
| Structured Data   | JSON-LD Schema.org (`Organization`, `Service`)| Injected `<script type="application/ld+json">`    |
| Robots Directive  | `robots.ts` configuration                     | `index: true, follow: true` (Public)              |
+-------------------+-----------------------------------------------+---------------------------------------------------+
```

### 4.1 JSON-LD Structured Data Schema Example
Injected on public marketing pages to ensure search engine algorithms index VMN as an authoritative enterprise organization:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Valtreon Media Network",
  "url": "https://valtreon.media",
  "logo": "https://valtreon.media/icons/monogram.svg",
  "description": "Audited Enterprise Co-Production Platform under NDA.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "75000",
    "priceValidUntil": "2026-12-31"
  }
}
```

---

# 5. BREADCRUMB SYSTEM & WAYFINDING ARCHITECTURE

To reinforce visual hierarchy and provide instant navigational context, VMN uses a monospace breadcrumb taxonomy across all non-homepage routes:

```
+-----------------------------------------------------------------------------------------------------------------------+
| BREADCRUMB TAXONOMY EXAMPLES                                                                                          |
|                                                                                                                       |
| Director Detail:  [ HOME ] / [ ROSTER ] / [ DIRECTORS ] / [ MARCUS VANCE // FILM ]                                    |
| Campaign Detail:  [ HOME ] / [ DOSSIERS ] / [ CASE_STUDIES ] / [ APEX COMPUTE SYSTEMS ]                               |
| Client Portal:    [ PORTAL ] / [ CAMPAIGNS ] / [ TELEMETRY_CONSOLE #VX-8812 ]                                         |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

# 6. NAVIGATION FLOW & ROUTING STATE MACHINE

```
+-----------------------------------------------------------------------------------------------------------------------+
| NAVIGATION FLOW & ROUTING STATE MACHINE                                                                               |
|                                                                                                                       |
| [ USER ENTRY: / ] ───────────> Inspects Homepage (Hero / Telemetry / Services / Roster / Dossiers)                    |
|                                  │                                                                                    |
|                                  ├───> Clicks Director Card ────> Navigates to `/roster/[directorId]` (ISR Fast Load)   |
|                                  ├───> Clicks Case Study ────────> Navigates to `/dossiers/[caseId]` (ISR Fast Load)   |
|                                  └───> Clicks Alliance Intake ───> Navigates to `/intake` ($75k ACV Qualification Form)|
|                                                                      │                                                |
|                                                                      ▼                                                |
|                                                             [ SUBMITS INTAKE FORM ]                                   |
|                                                                      │                                                |
|                                                                      ▼                                                |
|                                                             [ SERVER ACTION EXECUTES ]                                |
|                                                                      │                                                |
|                                                                      ▼                                                |
|                                                             Redirects to `/portal` or Confirmation View             |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

# 7. ROUTING SPECIFICATION SUMMARY MATRIX

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  ROUTING SPECIFICATION SUMMARY MATRIX                                                 |
+-------------------+-----------------------------------+---------------------------------------------------------------+
| Routing Layer     | Architectural Purpose & Scope     | Key Engineering & Security Standard                           |
+-------------------+-----------------------------------+---------------------------------------------------------------+
| App Router Groups | `(public)`, `(protected)`, `(admin)`| Clean URL taxonomy with isolated layout shells and auth guards|
| Public Marketing  | `/`, `/roster`, `/dossiers`       | ISR static pre-rendering with 3600s revalidation targets      |
| Client Portal     | `/portal/*`                       | Edge middleware auth guard, dynamic SSR, zero client cache    |
| Admin Terminal    | `/admin/*`                        | MFA verification, C-Suite role checks, direct audit control   |
| Dynamic Routes    | `/[directorId]`, `/[caseId]`      | `generateStaticParams()` pre-rendering with dynamic fallback  |
| Error Engine      | `not-found.tsx`, `error.tsx`      | Swiss Modernist 404 terminal, isolated component error catch  |
| SEO Strategy      | OpenGraph Edge & JSON-LD          | Dynamic OG image rendering, dynamic metadata, structured data |
| Breadcrumbs       | Monospace wayfinding breadcrumbs  | JetBrains Mono tracked-out path navigation (`[ HOME ] / ...`) |
+-------------------+-----------------------------------+---------------------------------------------------------------+
```
