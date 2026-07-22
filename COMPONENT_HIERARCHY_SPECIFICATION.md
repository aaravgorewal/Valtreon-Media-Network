# Master Component Hierarchy & Architecture Specification: Valtreon Media Network (VMN)
*Authored by: Lead Frontend Architect, Principal Systems Engineer & Chief UI Strategist*  
*Document Reference: VMN-COMP-2026-v1.0 (Master Component Hierarchy Specification SOT)*  
*Classification: Permanent Enterprise Architecture Specification & Component System Blueprint*  
*Target Stack: Next.js 15+ (App Router), React 19, TypeScript 5.5+, Tailwind CSS v4, Framer Motion, GSAP, Lenis, React Three Fiber, Zustand, React Hook Form, Zod*

---

## EXECUTIVE ARCHITECTURAL MANDATE & COMPONENT PHILOSOPHY

As Lead Frontend Architect for Valtreon Media Network (VMN), I have designed the master **Component Hierarchy & Architecture Specification**.

In strict adherence to VMN's permanent **Digital Hygiene Directive** and our commitment to **Swiss Modernist Design**, our component architecture rejects monolithic single-file components, prop drilling, unconstrained re-renders, loose typing, and mixed server/client concerns.

Instead, VMN enforces a **11-Category Modular Component System** built for Next.js 15+ App Router and React 19 Server Components (RSC). Every component is assigned a single responsibility, strict TypeScript prop contracts, robust accessibility bindings (WCAG 2.2 AAA), and deterministic performance constraints (0.000 CLS, zero-re-render form states, and 60fps WebGL/GSAP animation loops).

---

# 1. COMPONENT CATEGORY TAXONOMY MATRIX

```
+-----------------------------------------------------------------------------------------------------------------------+
| VALTREON MEDIA NETWORK 11-CATEGORY COMPONENT TAXONOMY                                                                 |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| Category Code     | Component Category | Architectural Role & Structural Scope         | Primary Rendering Strategy   |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| 01 // LAYOUT      | Layout Components  | Root shells, grid bounds, fixed headers, navs | Server-rendered structural   |
| 02 // UI          | UI Components      | Primitive atomic controls, buttons, badges    | Client leaf / Server primitive|
| 03 // FEATURE     | Feature Components | Domain section modules (Hero, Services, CTA)  | Hybrid RSC orchestrator      |
| 04 // SHARED      | Shared Components  | Cross-domain media viewports & modals         | Client leaf interactive      |
| 05 // BUSINESS    | Business Components| Alliance intake, ACV sliders, NDA qualifiers  | Client form & Server action  |
| 06 // PAGE        | Page Component     | Next.js App Router route entry orchestrators  | React 19 Server Component    |
| 07 // ANIMATION   | Animation Comps    | GSAP timelines, Lenis smooth scroll, springs  | Client kinetic wrapper       |
| 08 // DASHBOARD   | Dashboard Comps    | Telemetry grids, sparklines, audit badges     | Server data / Client tooltip |
| 09 // CREATOR     | Creator Comps      | Roster cards, sticky filters, comparison draw | Client interactive filter    |
| 10 // BRAND       | Brand Components   | Architectural monograms, status beacons       | SVG vector / Pure component  |
| 11 // ANALYTICS   | Analytics Comps    | Node inspectors, performance beacons          | Client observer & telemetry  |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
```

---

# 2. DETAILED SPECIFICATION BY COMPONENT CATEGORY

---

## CATEGORY 01: LAYOUT COMPONENTS
*Components: `RootLayout`, `HeaderNavigation`, `MobileCommandBar`, `MasterContainer`, `SectionShell`, `AsymmetricGrid`*

- **Purpose**: Provides the immutable structural framing, grid containers, and navigation shells across all viewports.
- **Responsibility**: Manages global layout geometry, 1440px max container bounds (`max-w-7xl`), grid margins, fixed header positioning, and responsive command bar pinning.
- **Props Philosophy**: Accepts `children` (ReactNode), `className` (optional Tailwind override), `as` (semantic HTML tag override e.g. `main`, `header`, `section`), and `containerWidth` (`1440px`, `1024px`, `768px`). Strictly typed via `LayoutProps`.
- **Reusability**: Highly reusable layout primitives wrapping every page route and section module across the platform.
- **Composition Rules**: `RootLayout` wraps `HeaderNavigation` and `MobileCommandBar`. `SectionShell` wraps `MasterContainer` which contains `AsymmetricGrid`.
- **Accessibility**: Enforces semantic HTML tags (`<header>`, `<main>`, `<nav>`, `<section>`), ARIA navigation roles (`aria-label="Master Operational Navigation Header"`), and skip-to-content links (`<a href="#main-content">`).
- **Performance**: Rendered as Server Components (RSC) to output pure HTML layouts with zero runtime JavaScript overhead. Layout shifts are locked to **0.000 CLS**.

---

## CATEGORY 02: UI COMPONENTS (DESIGN SYSTEM PRIMITIVES)
*Components: `Button`, `Badge`, `Card`, `Tooltip`, `Modal`, `Drawer`, `Accordion`*

- **Purpose**: Atomic, domain-agnostic UI controls that define VMN's Swiss Modernist visual identity.
- **Responsibility**: Renders buttons, badges, surface cards, tooltips, slide-over drawers, and accordion triggers with high-contrast typography and precise padding math.
- **Props Philosophy**: Strictly typed via discriminated unions (e.g. `variant: 'primary' | 'secondary' | 'outline' | 'ghost'`, `size: 'sm' | 'md' | 'lg'`). Accepts `disabled`, `onClick`, and `children`.
- **Reusability**: 100% domain-agnostic; used throughout every feature module, form, and page.
- **Composition Rules**: UI components must never import feature-specific components. Higher-level features compose UI primitives (`Card` contains `Badge` and `Button`).
- **Accessibility**: Full WCAG 2.2 AAA compliance. 2px Champagne Gold keyboard focus outlines (`outline: 2px solid #9C8465`), minimum `48px x 48px` touch target bounding boxes on mobile, and ARIA state attributes (`aria-expanded`, `aria-controls`, `aria-hidden`).
- **Performance**: Primitive UI components are unstyled CSS-in-JS-free React elements compiled to Tailwind utility classes, incurring 0ms runtime styling calculation cost.

---

## CATEGORY 03: FEATURE COMPONENTS
*Components: `HeroFeature`, `ServicesFeature`, `CaseDossierFeature`, `TestimonialsFeature`, `FinalCtaFeature`*

- **Purpose**: Orchestrates complete domain sections on the homepage, pairing editorial narratives with interactive visual assets.
- **Responsibility**: Fetches domain content, manages section layout flows, and integrates 3D WebGL canvases, video viewports, and intake forms.
- **Props Philosophy**: Accepts domain data contracts (e.g. `serviceItems: ServiceDomain[]`, `heroData: HeroContent`). Props are immutable and passed from Server Component page routes.
- **Reusability**: Dedicated domain section components designed specifically for the master homepage and landing routes.
- **Composition Rules**: `HeroFeature` composes `3DQuartzCanvas`, `MonospaceBadge`, and `ActionButton`. `ServicesFeature` composes `Accordion` and `MediaViewport`.
- **Accessibility**: Includes section ARIA labels, semantic `<h2>` section headings, and keyboard navigable accordion panels.
- **Performance**: Pre-rendered via React 19 Server Components. Heavy visual assets (3D Canvas, Video Viewports) are loaded lazily via `next/dynamic` or React `Suspense` boundaries.

---

## CATEGORY 04: SHARED COMPONENTS
*Components: `MediaViewport`, `VideoPlayerModal`, `CarouselControls`, `AudioPlayerBar`*

- **Purpose**: Reusable interactive media handlers and controls shared across multiple feature modules.
- **Responsibility**: Handles 4K desaturated showreel video playback, 48kHz stereo audio streams, full-screen video deposition modals, and manual carousel controls.
- **Props Philosophy**: Accepts `mediaUrl`, `posterUrl`, `aspectRatio` (`16:9` | `4:3`), `autoPlay` (boolean), `onPlayStateChange` callback, and `transcript` string.
- **Reusability**: Shared across Services, Creator Network, Case Dossiers, and Testimonials sections.
- **Composition Rules**: `MediaViewport` can be embedded inside a `Card` or rendered full-screen inside `VideoPlayerModal`.
- **Accessibility**: Includes visible media captions, `aria-label` media playback controls, keyboard spacebar pause/play listeners, and collapsible transcript drawers for audio/video.
- **Performance**: Video viewports enforce `preload="metadata"` and adaptive resolution streams (720p on mobile, 4K on desktop) to optimize mobile bandwidth.

---

## CATEGORY 05: BUSINESS COMPONENTS
*Components: `AllianceIntakeForm`, `AcvCalculatorSlider`, `ExecutiveBriefingModal`, `CapacityReadoutBadge`*

- **Purpose**: Implements core business logic, contract pre-qualification, and lead intake workflows.
- **Responsibility**: Validates $75,000 ACV baseline underwrites, calculates projected reach/pipeline lift, captures enterprise client details under NDA, and tracks remaining quarterly co-production slots.
- **Props Philosophy**: Accepts `acvFloor` (number), `onSubmitSuccess` callback, and `capacityRemaining` (number). Form props typed via Zod schemas (`z.infer<typeof IntakeSchema>`).
- **Reusability**: Embedded inside the Final CTA Section, Executive Briefing Modals, and dedicated Intake Pages.
- **Composition Rules**: `AllianceIntakeForm` composes `AcvCalculatorSlider`, `CapacityReadoutBadge`, and React Hook Form `Input` primitives.
- **Accessibility**: Screen reader form field labels (`<label htmlFor="...">`), inline error message alerts (`role="alert"`), and keyboard accessible range sliders (`aria-valuenow`, `aria-valuemin`).
- **Performance**: Form states use uncontrolled React Hook Form registers to prevent parent card re-renders on keystrokes. Submissions invoke Next.js Server Actions.

---

## CATEGORY 06: PAGE COMPONENT
*Components: `HomepageRoute`, `RosterPageRoute`, `DossierDetailPageRoute`*

- **Purpose**: Top-level App Router route entry points (`app/page.tsx`) that orchestrate server-side data fetching and layout composition.
- **Responsibility**: Ingests URL parameters, fetches cached database records, sets metadata (`title`, `description`, `openGraph`), and renders the section sequence.
- **Props Philosophy**: Accepts Next.js App Router route props (`params: Promise<{ id: string }>`, `searchParams: Promise<{ filter: string }>`).
- **Reusability**: Single-instance route entry points mapped directly to URL endpoints.
- **Composition Rules**: `HomepageRoute` composes `SectionShell` components in strict sequential order (Navigation -> Hero -> Telemetry -> Services -> Roster -> Dossiers -> Testimonials -> CTA -> Footer).
- **Accessibility**: Sets dynamic document title, language attributes (`lang="en"`), and master landmark regions (`<main id="main-content">`).
- **Performance**: Implemented as pure React 19 Server Components (RSC) with Incremental Static Regeneration (ISR) revalidation targets.

---

## CATEGORY 07: ANIMATION COMPONENTS
*Components: `GsapTimelineWrapper`, `FramerMotionSpring`, `MagneticTrigger`, `SmoothScrollLenis`*

- **Purpose**: Encapsulates kinetic physics, GSAP ScrollTrigger timelines, Lenis smooth scrolling, and magnetic cursor attraction.
- **Responsibility**: Binds DOM element refs to animation tickers, manages kinetic entrance transforms, normalizes scroll velocity, and handles magnetic button physics.
- **Props Philosophy**: Accepts `children`, `delay` (number), `stagger` (number), `magneticStrength` (number), and `enabled` (boolean).
- **Reusability**: Wraps any UI or Feature component requiring hardware-accelerated motion.
- **Composition Rules**: `SmoothScrollLenis` wraps the root layout. `MagneticTrigger` wraps `Button` primitives. `GsapTimelineWrapper` wraps section container elements.
- **Accessibility**: Listens to `prefers-reduced-motion: reduce`. When active, all GSAP timelines and magnetic attraction effects are disabled instantly.
- **Performance**: Animations run on GPU-accelerated CSS properties (`transform: translate3d`, `opacity`). GSAP triggers use batching to minimize layout reflows.

---

## CATEGORY 08: DASHBOARD COMPONENTS
*Components: `TelemetryBentoGrid`, `SparklineChart`, `ArcGaugeMeter`, `AuditReceiptTag`*

- **Purpose**: Visualizes audited performance telemetry, C-suite retention rates, pipeline lift, and SHA-256 cryptographic audit receipts.
- **Responsibility**: Renders responsive SVG sparkline trajectories, concentric SVG progress arcs, tabular numeric metrics, and hover inspection tooltips.
- **Props Philosophy**: Accepts `metrics: TelemetryMetric[]`, `sparklineData: number[]`, `arcPercentage: number`, and `auditHash: string`.
- **Reusability**: Used in the Telemetry Section, Case Dossiers Section, and Client Executive Reports.
- **Composition Rules**: `TelemetryBentoGrid` composes `SparklineChart`, `ArcGaugeMeter`, `AuditReceiptTag`, and `Card` primitives.
- **Accessibility**: Includes tabular numeric formatting (`font-variant-numeric: tabular-nums`), accessible vector SVG title tags (`<title>Pipeline Trajectory Chart</title>`), and screen reader data summaries.
- **Performance**: SVG sparklines and arc gauges are calculated mathematically with zero heavy external charting dependencies (D3/Recharts omitted for bundle optimization).

---

## CATEGORY 09: CREATOR COMPONENTS
*Components: `CreatorCard`, `StickyFilterConsole`, `ShowreelPreviewOverlay`, `RosterComparisonDrawer`*

- **Purpose**: Displays VMN's direct directorial talent roster, filtering controls, and side-by-side creator comparison matrices.
- **Responsibility**: Manages discipline/platform filtering, 200ms showreel hover cross-fades, director profile inspection, and multi-creator comparison pinning.
- **Props Philosophy**: Accepts `creator: CreatorDossier`, `activeFilters: FilterState`, `onFilterChange` callback, and `isPinned` (boolean).
- **Reusability**: Core component group for the Creator Network Section and standalone `/roster` routes.
- **Composition Rules**: `StickyFilterConsole` controls `CreatorCard` grid items. Hovering `CreatorCard` triggers `ShowreelPreviewOverlay`.
- **Accessibility**: Filter controls use semantic `<fieldset>` and `<legend>` tags, custom checkbox focus rings, and ARIA live region update announcements (`aria-live="polite"`).
- **Performance**: 35mm showreel video previews pre-load only poster frames; video loops instantiate dynamically on hover to conserve network sockets.

---

## CATEGORY 10: BRAND COMPONENTS
*Components: `MonogramIcon`, `BrandLockup`, `StatusBeacon`, `CryptographicLedgerFooter`*

- **Purpose**: Renders VMN's architectural brand identity, operational status indicators, and institutional legal ledgers.
- **Responsibility**: Renders crisp inline vector monograms, pulsating Champagne Bronze status beacons (`[ ● ALLIANCE NETWORK ONLINE ]`), and SHA-256 audit footers.
- **Props Philosophy**: Accepts `color` (string), `size` (`sm` | `md` | `lg`), `isOnline` (boolean), and `auditReceiptHash` (string).
- **Reusability**: Rendered inside Navigation, Hero, Footer, and Client Dossiers.
- **Composition Rules**: `BrandLockup` composes `MonogramIcon` and typography spans. `HeaderNavigation` composes `BrandLockup` and `StatusBeacon`.
- **Accessibility**: Brand logos include `aria-label="Valtreon Media Network Homepage"`. Status beacons include `aria-label="Alliance Network Status: Operational"`.
- **Performance**: Vector monograms are rendered as inline SVGs to avoid extra network HTTP requests and allow zero-latency CSS color fills.

---

## CATEGORY 11: ANALYTICS COMPONENTS
*Components: `TelemetryNodeInspector`, `AmdAuditBadge`, `ConversionTrackerProvider`, `PerformanceObserverBeacon`*

- **Purpose**: Monitors client interaction velocity, sparkline data node inspection, real-time edge latency, and conversion funnel analytics.
- **Responsibility**: Displays dynamic hover tooltips over sparkline data nodes, tracks intake funnel progression, and reports Core Web Vitals to server loggers.
- **Props Philosophy**: Accepts `nodeData: DataPoint`, `metricId: string`, `onEventTrack` callback, and `latencyMs` (number).
- **Reusability**: Embedded inside Telemetry Sparklines, Case Dossiers, and global layout wrappers.
- **Composition Rules**: `SparklineChart` composes `TelemetryNodeInspector`. `RootLayout` composes `ConversionTrackerProvider` and `PerformanceObserverBeacon`.
- **Accessibility**: Tooltips are accessible via keyboard focus (`Tab` across data nodes) and utilize `role="tooltip"` with `aria-describedby` links.
- **Performance**: Analytics listeners use non-blocking `requestIdleCallback` or `navigator.sendBeacon` to ensure zero impact on main-thread animation frames.

---

# 3. MASTER COMPONENT HIERARCHY TREE & ARCHITECTURAL SPECS

```
RootLayout (Server Component Shell)
├── SmoothScrollLenis (Client Kinetic Wrapper)
│   ├── RootProvider (Query, Zustand, UI Contexts)
│   │   ├── HeaderNavigation (Layout Component)
│   │   │   ├── BrandLockup (Brand Component)
│   │   │   │   └── MonogramIcon (Brand Component)
│   │   │   ├── StatusBeacon (Brand Component)
│   │   │   └── ActionButton (UI Component)
│   │   │
│   │   ├── HomepageRoute (Page Component / RSC Orchestrator)
│   │   │   ├── SectionShell [Hero] (Layout Component)
│   │   │   │   └── HeroFeature (Feature Component)
│   │   │   │       ├── MonospaceBadge (UI Component)
│   │   │   │       ├── 3DQuartzCanvas (Client WebGL Component)
│   │   │   │       └── MagneticTrigger (Animation Component)
│   │   │   │           └── ActionButton (UI Component)
│   │   │   │
│   │   │   ├── SectionShell [Telemetry] (Layout Component)
│   │   │   │   └── TelemetryBentoGrid (Dashboard Component)
│   │   │   │       ├── SparklineChart (Dashboard Component)
│   │   │   │       │   └── TelemetryNodeInspector (Analytics Component)
│   │   │   │       ├── ArcGaugeMeter (Dashboard Component)
│   │   │   │       └── AuditReceiptTag (Dashboard Component)
│   │   │   │
│   │   │   ├── SectionShell [Services] (Layout Component)
│   │   │   │   └── ServicesFeature (Feature Component)
│   │   │   │       ├── Accordion (UI Component)
│   │   │   │       └── MediaViewport (Shared Component)
│   │   │   │
│   │   │   ├── SectionShell [Creator Network] (Layout Component)
│   │   │   │   └── StickyFilterConsole (Creator Component)
│   │   │   │   └── CreatorCard (Creator Component)
│   │   │   │       └── ShowreelPreviewOverlay (Creator Component)
│   │   │   │
│   │   │   ├── SectionShell [Case Dossiers] (Layout Component)
│   │   │   │   └── CaseDossierFeature (Feature Component)
│   │   │   │       └── MediaViewport (Shared Component)
│   │   │   │
│   │   │   ├── SectionShell [Testimonials] (Layout Component)
│   │   │   │   └── TestimonialsFeature (Feature Component)
│   │   │   │       ├── VideoPlayerModal (Shared Component)
│   │   │   │       └── CarouselControls (Shared Component)
│   │   │   │
│   │   │   └── SectionShell [Final CTA] (Layout Component)
│   │   │       └── FinalCtaFeature (Feature Component)
│   │   │           └── AllianceIntakeForm (Business Component)
│   │   │               └── AcvCalculatorSlider (Business Component)
│   │   │
│   │   ├── MasterFooter (Layout Component)
│   │   │   ├── BrandLockup (Brand Component)
│   │   │   ├── NewsletterForm (Business Component)
│   │   │   └── CryptographicLedgerFooter (Brand Component)
│   │   │
│   │   └── MobileCommandBar (Layout Component)
│   │       └── ActionButton (UI Component)
```

---

# 4. COMPONENT ARCHITECTURE SUMMARY MATRIX

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    COMPONENT ARCHITECTURE SUMMARY MATRIX                                               |
+-------------------+-----------------------------------+---------------------------------------------------------------+
| Component Category| Primary Responsibility & Scope    | Key Engineering & Accessibility Standard                      |
+-------------------+-----------------------------------+---------------------------------------------------------------+
| 01. Layout        | Structural shells & grid margins  | RSC rendered, 0.000 CLS, semantic `<main>`/`<nav>` landmarks   |
| 02. UI Primitives | Domain-agnostic atomic controls   | 2px focus outlines, 48px touch SLA, pure Tailwind styles      |
| 03. Feature       | Master homepage section modules   | Pre-rendered RSC, lazy loaded WebGL/video visual assets       |
| 04. Shared        | Cross-domain media handlers       | 4K desaturated showreels, spacebar controls, audio transcripts|
| 05. Business      | Alliance intake & $75k ACV logic  | Uncontrolled RHF state, Zod schemas, Next.js Server Actions   |
| 06. Page          | App Router route orchestrators    | React 19 RSC, dynamic metadata, ISR revalidation targets      |
| 07. Animation     | Kinetic physics & smooth scroll   | GPU accelerated transforms, `prefers-reduced-motion` fallbacks|
| 08. Dashboard     | Audited performance telemetry     | Tabular numerics, D3-free SVG sparklines, SHA-256 audit tags |
| 09. Creator       | Roster cards & sticky filters     | 200ms video hover cross-fade, ARIA live region announcements  |
| 10. Brand         | Architectural brand identity      | Inline vector SVGs, 0ms latency, pulsating status beacons     |
| 11. Analytics     | Node inspection & CWV telemetry   | Non-blocking `requestIdleCallback`, WCAG accessible tooltips  |
+-------------------+-----------------------------------+---------------------------------------------------------------+
```
