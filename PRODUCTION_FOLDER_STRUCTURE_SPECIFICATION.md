# Master Production Folder Structure & Directory Taxonomy Specification: Valtreon Media Network (VMN)
*Authored by: Lead Frontend Architect, Principal Systems Engineer & Chief Technical Officer*  
*Document Reference: VMN-FSPEC-2026-v1.0 (Master Directory Taxonomy Specification SOT)*  
*Classification: Permanent Enterprise Architecture Specification & Repository Structural Blueprint*  
*Target Stack: Next.js 15+ (App Router), React 19, TypeScript 5.5+, Tailwind CSS v4, Framer Motion, GSAP, Lenis, React Three Fiber, Zustand, React Hook Form, Zod, TanStack Query*

---

## EXECUTIVE ARCHITECTURAL MANDATE & TAXONOMY PHILOSOPHY

As Lead Frontend Architect for Valtreon Media Network (VMN), I have engineered the official **Master Production Folder Structure & Directory Taxonomy Specification**.

In strict adherence to VMN's permanent **Digital Hygiene Directive** and our commitment to **Swiss Modernist Design**, this repository organization explicitly rejects "flat-file chaos" — unorganized source trees, mixed client/server code in random directories, scattered helper functions, duplicate type definitions, and inconsistent file naming conventions.

Instead, VMN enforces a **Feature-Sliced Enterprise Taxonomy** built for Next.js 15+ App Router and React 19 Server Components (RSC). It establishes clear domain boundaries, strict file naming conventions, modular component isolation, zero circular dependencies, and a predictable mental model for multi-team enterprise development.

---

# 1. MASTER PRODUCTION DIRECTORY TAXONOMY TREE

```
valtreon-media-network/
├── .env.example                     # Environment Variable Declarations & API Keys
├── .gitignore                       # Git Exclusion Policy
├── metadata.json                    # Platform Application Metadata
├── package.json                     # Dependency Manifest & Scripts
├── tsconfig.json                    # Strict TypeScript Configuration & Path Aliases
├── vite.config.ts / next.config.mjs # Build & Bundler Configuration
│
├── /public                          # Static Uncompiled Assets Served directly at Domain Root
│   ├── /fonts                       # Web Fonts (Playfair Display, Space Grotesk, JetBrains Mono)
│   ├── /icons                       # Favicons, Web App Manifest Icons, PWA Badges
│   ├── /images                      # Static High-Res Fallback Images & Fallback Showreel Frames
│   └── /textures                    # WebGL Shader Textures, Environment Maps, Noise Maps
│
└── /src                             # Application Source Code Root
    ├── /app                         # Next.js 15 App Router Routes, Pages & Layouts
    ├── /components                  # Reusable UI Primitive Controls & Shared Shells
    ├── /features                    # Domain-Specific Feature Modules (Business Logic + UI)
    ├── /hooks                       # Custom React Hooks & Kinetic Listeners
    ├── /lib                         # Third-Party SDK Wrappers & Core Client Instances
    ├── /services                    # API Data Fetching, Server Actions & Edge Proxies
    ├── /types                       # Global TypeScript Type Contracts & Interfaces
    ├── /constants                   # Immutable Design Tokens & Business Rule Constants
    ├── /styles                      # Global CSS Directives, Typography Vars & Shaders
    ├── /providers                   # React Context & Global State Provider Wrappers
    ├── /animations                  # GSAP Timelines, Lenis Momentum & Motion Physics
    ├── /assets                      # Importable Compiled Static Assets (SVGs, Lottie, Audio)
    ├── /utils                       # Pure Helper Functions & Pure Formatter Utilities
    └── /config                      # Environment, Feature Flags & Site Metadata Configuration
```

---

# 2. GRANULAR FOLDER PURPOSE & ARCHITECTURAL SCOPE

### 2.1 `/public` — Static Uncompiled Assets
- **Purpose**: Houses static files served directly by the web server at the root domain path (`/`). Files in `/public` bypass the JavaScript build bundler.
- **Scope**:
  - `/public/fonts`: Self-hosted WOFF2 web fonts (*Playfair Display*, *Space Grotesk*, *JetBrains Mono*).
  - `/public/icons`: Favicon ICOs, Apple touch icons, Android PWA manifest icons.
  - `/public/images`: High-res static fallback images, broadsheet OG social media previews (`og-image.png`).
  - `/public/textures`: WebGL HDR environment maps (`studio_lighting.hdr`), fine-grain SVG noise overlays (`noise.svg`).

### 2.2 `/src/app` — App Router Routes & Page Entry Points
- **Purpose**: Defines the application's URL routing structure, page layouts, edge API routes, and Server Action endpoints utilizing Next.js 15 App Router and React 19 Server Components.
- **Scope**:
  - `layout.tsx`: Root application shell wrapping providers, fonts, and global Lenis scroll.
  - `page.tsx`: Homepage route orchestrating server-rendered sections.
  - `loading.tsx`: Streaming fallback loading skeletons for instant TTFB response.
  - `error.tsx` / `not-found.tsx`: Error boundaries and 404 pages.
  - `/app/api`: Edge API proxies for Gemini API, telemetry data ingestion, and intake processing.

### 2.3 `/src/components` — Reusable UI Primitives & Shared Shells
- **Purpose**: Contains domain-agnostic, atomic design system components and shared UI shells. Components in this folder have zero feature-specific business logic.
- **Scope**:
  - `/components/ui`: Primitive atomic controls (`Button`, `Badge`, `Input`, `Tooltip`, `Card`, `Skeleton`).
  - `/components/layout`: Shared structural containers (`Container`, `Section`, `Grid`, `Modal`, `Drawer`).
  - `/components/icons`: Custom SVG architectural glyphs and brand monograms.

### 2.4 `/src/features` — Domain-Specific Feature Modules
- **Purpose**: Implements complete domain feature slices. Each feature module encapsulates its own components, hooks, types, and logic, preventing cross-domain pollution.
- **Scope**:
  - `/features/hero`: Narrative headline stack, 3D WebGL Quartz Crystal Canvas, dual CTA triggers.
  - `/features/telemetry`: Performance metrics bento grid, tabular digits, SVG trajectory sparklines.
  - `/features/services`: Services accordion, transparent SLAs, 4K video showreel loops.
  - `/features/creator-network`: Roster marketplace, sticky monospace filter console, directorial dossier cards.
  - `/features/case-dossiers`: Audited campaign case studies, ABM pipeline proof, whitepaper spreads.
  - `/features/testimonials`: C-suite video deposition player, broadside quote cards, manual carousel.
  - `/features/final-cta`: Alliance intake gate, magnetic cursor physics, compliance badges.
  - `/features/footer`: Master institutional footer, direct C-suite contact desks, intelligence console.

### 2.5 `/src/hooks` — Custom React Hooks & Listeners
- **Purpose**: Encapsulates reusable client-side state logic, event listeners, media query detectors, and scroll sync hooks.
- **Scope**:
  - `use-lenis.ts`: Smooth scroll normalizer hook connecting Lenis to GSAP.
  - `use-gsap-timeline.ts`: GSAP context lifecycle hook handling automatic cleanup on unmount.
  - `use-media-query.ts`: Responsive viewport breakpoint listener (`sm`, `md`, `lg`, `xl`, `2xl`).
  - `use-reduced-motion.ts`: System accessibility preference listener for `prefers-reduced-motion`.
  - `use-magnetic.ts`: Magnetic cursor attraction hook for action CTA buttons.

### 2.6 `/src/lib` — Third-Party SDK Wrappers & Core Clients
- **Purpose**: Configures and exports initialized client instances for external libraries, APIs, and SDKs.
- **Scope**:
  - `lib/utils.ts`: Tailwind classname merger utility combining `clsx` and `tailwind-merge` (`cn()`).
  - `lib/gemini.ts`: Server-side Google GenAI client instance initialized lazily.
  - `lib/query-client.ts`: Singleton instance for TanStack Query client.
  - `lib/three-shaders.ts`: Custom GLSL shader definitions for WebGL refractive glass and chromatic dispersion.

### 2.7 `/src/services` — Data Fetching, Server Actions & Edge Proxies
- **Purpose**: Handles all external data communication, database queries, server actions, and API request orchestration.
- **Scope**:
  - `services/telemetry-service.ts`: API service fetching audited campaign pipeline metrics.
  - `services/creator-service.ts`: API service querying directorial talent roster with filter params.
  - `services/intake-actions.ts`: Next.js Server Action handling enterprise alliance intake submissions under NDA.

### 2.8 `/src/types` — Global TypeScript Contracts & Interfaces
- **Purpose**: Centralized storage for domain data models, API payloads, component prop contracts, and database schema types.
- **Scope**:
  - `types/creator.ts`: Interfaces for Director Dossier, Telemetry Metrics, and Roster Filters.
  - `types/dossier.ts`: Interfaces for Campaign Case Studies, Pipeline Lift, and Client Logos.
  - `types/intake.ts`: Interfaces for Alliance Intake Form Payloads and Validation Responses.
  - `types/navigation.ts`: Types for Header Nav Links, Direct Desks, and Footer Categories.

### 2.9 `/src/constants` — Immutable Design Tokens & Business Rules
- **Purpose**: Stores immutable constants, design tokens, financial floor thresholds, and static navigation configuration.
- **Scope**:
  - `constants/site-config.ts`: Brand name, metadata, financial ACV floor ($75,000), support emails.
  - `constants/design-tokens.ts`: Color hex codes, typographic scales, spacing values, z-index matrix.
  - `constants/navigation.ts`: Main header navigation routes and footer discipline links.

### 2.10 `/src/styles` — Styling Directives, Typography Vars & Shaders
- **Purpose**: Contains global styling configuration, custom CSS variables, font family definitions, and keyframe animations.
- **Scope**:
  - `styles/globals.css`: Tailwind CSS v4 directives, font-face declarations, custom utilities.
  - `styles/typography.css`: CSS variables defining Playfair Display, Space Grotesk, and JetBrains Mono ratios.
  - `styles/shaders.css`: GLSL shader styling fallbacks and canvas overlay styles.

### 2.11 `/src/providers` — React Context & Global State Providers
- **Purpose**: Houses global React Context providers that wrap the application tree in `app/layout.tsx`.
- **Scope**:
  - `providers/root-provider.tsx`: Master provider composer wrapping QueryProvider, LenisProvider, and UIProvider.
  - `providers/lenis-provider.tsx`: Smooth scrolling context provider powering global Lenis instance.
  - `providers/query-provider.tsx`: TanStack Query Client provider with dehydration support.

### 2.12 `/src/animations` — Motion Physics, GSAP Timelines & Easing
- **Purpose**: Centralized registry for kinetic animation configurations, spring physics presets, GSAP timeline builders, and Vault Easing functions.
- **Scope**:
  - `animations/vault-easings.ts`: Custom cubic-bezier easing definitions (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - `animations/hero-timelines.ts`: GSAP scroll-triggered entrance timeline configurations.
  - `animations/spring-presets.ts`: Framer Motion spring stiffness and damping presets.

### 2.13 `/src/assets` — Compiled Importable Static Assets
- **Purpose**: Static assets that are imported into JavaScript/TypeScript files and processed by the bundler (Vite/Webpack).
- **Scope**:
  - `/assets/svgs`: Scalable vector graphics, client logo outlines, custom architectural icons.
  - `/assets/audio`: Audio feedback samples (48kHz stereo deposition snippets, tactile click sounds).

### 2.14 `/src/utils` — Pure Helper Functions & Formatter Utilities
- **Purpose**: Houses pure, side-effect-free helper functions that perform mathematical, formatting, or parsing operations.
- **Scope**:
  - `utils/currency-formatter.ts`: Formats currency values (`$14.2M`, `$75,000 ACV`).
  - `utils/number-formatter.ts`: Formats percentage rates and tabular numbers (`88.4%`, `2.4M`).
  - `utils/date-formatter.ts`: Formats timestamps and quarterly audit dates (`Q2 2026`).

### 2.15 `/src/config` — Environment, Feature Flags & Site Metadata
- **Purpose**: Centralized application configuration, environment variable parsing, and feature flag definitions.
- **Scope**:
  - `config/env.ts`: Environment variable schema validation using Zod (`process.env` validator).
  - `config/feature-flags.ts`: Feature toggle flags (e.g., `enable3DQuartz`, `enableVideoModal`).

---

# 3. NAMING CONVENTIONS & CODING STANDARDS

To maintain absolute consistency across the codebase, VMN enforces strict naming conventions:

```
+-----------------------------------------------------------------------------------------------------------------------+
| VALTREON MEDIA NETWORK NAMING CONVENTION MATRIX                                                                       |
+-------------------+--------------------+-----------------------------------+------------------------------------------+
| File / Code Item  | Casing Style       | Example File Path / Code Name     | Rationale & Engineering Standard         |
+-------------------+--------------------+-----------------------------------+------------------------------------------+
| Directories       | `kebab-case`       | `/features/creator-network`       | Prevents cross-OS filesystem conflicts   |
| React Components  | `PascalCase` file  | `CreatorCard.tsx` / `Button.tsx`  | Standard React component declaration     |
| Component Folders | `kebab-case`       | `/components/ui/button`           | Clean modular directory organization     |
| Custom Hooks      | `kebab-case`       | `use-lenis.ts` / `use-magnetic.ts`| Prefix with `use-` for React hook clarity|
| Utilities / Services| `kebab-case`     | `currency-formatter.ts`           | Descriptive pure utility names           |
| TypeScript Types  | `kebab-case` file  | `types/creator.ts`                | Interface declarations inside: `Director`|
| Type Interfaces   | `PascalCase` name  | `interface CreatorDossier { ... }`| Standard TypeScript interface casing     |
| Constants / Enums | `UPPER_SNAKE_CASE` | `ACV_UNDERWRITE_FLOOR = 75000`    | Clearly identifies immutable constants   |
| Zod Schemas       | `PascalCase` + Suffix| `IntakeFormSchema = z.object(...)`| Unambiguous schema validator naming      |
| CSS Directives    | `kebab-case`       | `--color-canvas-obsidian`         | Standard CSS custom property casing      |
+-------------------+--------------------+-----------------------------------+------------------------------------------+
```

---

# 4. PATH ALIASING STRATEGY (`tsconfig.json`)

VMN configures TypeScript path aliases to eliminate fragile relative imports (`../../../../components/ui/button`):

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/app/*": ["./src/app/*"],
      "@/components/*": ["./src/components/*"],
      "@/features/*": ["./src/features/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/services/*": ["./src/services/*"],
      "@/types/*": ["./src/types/*"],
      "@/constants/*": ["./src/constants/*"],
      "@/styles/*": ["./src/styles/*"],
      "@/providers/*": ["./src/providers/*"],
      "@/animations/*": ["./src/animations/*"],
      "@/assets/*": ["./src/assets/*"],
      "@/utils/*": ["./src/utils/*"],
      "@/config/*": ["./src/config/*"]
    }
  }
}
```

---

# 5. FILE PLACEMENT DECISION FLOWCHART

When creating a new file in the codebase, follow this architectural decision logic:

```
+-----------------------------------------------------------------------------------------------------------------------+
| FILE PLACEMENT DECISION FLOWCHART                                                                                     |
|                                                                                                                       |
| Is it a route page, layout, or API handler? ─────────────────────────────> Place in `/src/app/`                      |
|                                                                                                                       |
| Is it a primitive, domain-agnostic UI control (Button, Badge)? ──────────> Place in `/src/components/ui/`             |
|                                                                                                                       |
| Is it specific to a single domain feature (e.g., Creator Roster Filter)? > Place in `/src/features/[feature-name]/`  |
|                                                                                                                       |
| Is it a custom stateful hook or event listener? ─────────────────────────> Place in `/src/hooks/`                    |
|                                                                                                                       |
| Is it an external SDK wrapper or third-party client? ────────────────────> Place in `/src/lib/`                      |
|                                                                                                                       |
| Is it an API fetch function, Server Action, or database query? ──────────> Place in `/src/services/`                 |
|                                                                                                                       |
| Is it a TypeScript interface, type alias, or contract? ──────────────────> Place in `/src/types/`                    |
|                                                                                                                       |
| Is it an immutable design token or business rule constant? ──────────────> Place in `/src/constants/`                |
|                                                                                                                       |
| Is it a global React context provider? ──────────────────────────────────> Place in `/src/providers/`                |
|                                                                                                                       |
| Is it a pure, side-effect-free helper function (formatting/math)? ────────> Place in `/src/utils/`                    |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

# 6. DIRECTORY TAXONOMY SPECIFICATION SUMMARY MATRIX

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                Directory Taxonomy Specification Summary Matrix                                        |
+-------------------+-----------------------------------+---------------------------------------------------------------+
| Directory Path    | Core Architectural Purpose        | Standard Contents & Scope                                     |
+-------------------+-----------------------------------+---------------------------------------------------------------+
| `/public`         | Static uncompiled asset server    | Fonts, favicons, OG preview images, WebGL HDR textures        |
| `/src/app`        | Next.js 15 App Router routes      | Pages (`page.tsx`), layouts, API endpoints, Server Actions    |
| `/src/components` | Reusable UI design system controls| Atomic primitives (`Button`, `Badge`, `Input`, `Modal`)       |
| `/src/features`   | Feature-sliced domain modules     | Hero, Telemetry, Services, Creator Network, Case Studies, CTA |
| `/src/hooks`      | Custom React hooks & listeners    | `useLenis`, `useGsapTimeline`, `useMediaQuery`, `useMagnetic` |
| `/src/lib`        | Third-Party SDK wrappers          | Classnames combiner `cn()`, GenAI client, Three.js shaders    |
| `/src/services`   | Data fetching & Server Actions    | Telemetry API, Creator query service, Alliance intake action  |
| `/src/types`      | TypeScript interfaces & contracts | Creator dossiers, Telemetry metrics, Intake payload contracts |
| `/src/constants`  | Immutable constants & tokens      | Financial ACV floor ($75k), color tokens, navigation configs  |
| `/src/styles`     | CSS directives & typography vars  | Tailwind directives, Playfair/Space/JetBrains font ratios     |
| `/src/providers`  | Global React Context wrappers     | Root provider, Lenis smooth scroll provider, Query provider   |
| `/src/animations` | Motion physics & GSAP timelines   | Vault Easings, GSAP scroll triggers, Framer Motion springs    |
| `/src/assets`     | Importable compiled assets        | SVGs, client logo outlines, architectural monograms           |
| `/src/utils`      | Pure formatting helper functions  | Currency formatters, tabular numeric parsers, date tools      |
| `/src/config`     | Site metadata & env validation    | Environment variable schema validator, feature toggles        |
+-------------------+-----------------------------------+---------------------------------------------------------------+
```
