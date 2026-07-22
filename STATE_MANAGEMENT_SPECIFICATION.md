# Master State Management & Data Flow Architecture Specification: Valtreon Media Network (VMN)
*Authored by: Lead Frontend Architect, Principal Systems Engineer & Chief Technical Officer*  
*Document Reference: VMN-STATE-2026-v1.0 (Master State Management Specification SOT)*  
*Classification: Permanent Enterprise Architecture Specification & State Flow Blueprint*  
*Target Stack: Next.js 15+ (App Router), React 19 Server Components (RSC), Zustand 5, TanStack Query v5, React Hook Form, Zod, Nuqs (URL State)*

---

## EXECUTIVE ARCHITECTURAL MANDATE & STATE FLOW PHILOSOPHY

As Lead Frontend Architect for Valtreon Media Network (VMN), I have designed the complete enterprise **State Management & Data Flow Architecture Specification**.

In strict adherence to VMN's permanent **Digital Hygiene Directive** and our commitment to **Swiss Modernist Design**, our state architecture rejects monolithic client stores, prop drilling, unnecessary component re-renders, stale data duplication, and mixing server data into global client state.

Instead, VMN enforces a **Decoupled 4-Tier State Taxonomy**. State concerns are strictly separated based on ownership, lifespan, and mutation patterns. Server data is managed exclusively via **TanStack Query v5**, transient global client UI state via **Zustand 5**, form state via **React Hook Form + Zod**, and URL parameters via **URL Search Params (Nuqs)**.

---

# 1. THE 4-TIER STATE CATEGORY TAXONOMY MATRIX

```
+-----------------------------------------------------------------------------------------------------------------------+
| VALTREON MEDIA NETWORK 4-TIER STATE CATEGORY TAXONOMY                                                                 |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| State Category    | Primary Tool       | Scope & Architectural Boundaries              | Lifespan & Persistence       |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| 01 // SERVER STATE| TanStack Query v5  | Remote API data, telemetry metrics, roster    | Cached in memory, stale-while|
|                   | & Server Components| dossiers, campaign case studies               | revalidate targets           |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| 02 // GLOBAL UI   | Zustand 5          | Modals, drawers, navigation, audio mute,      | Single browser session /     |
|                   | Micro-Stores       | video overlay triggers, active theme          | localStorage hydration       |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| 03 // FORM STATE  | React Hook Form    | Input fields, validation errors, field touch  | Transient component lifetime |
|                   | + Zod Resolver     | status, submit state ($75k ACV intake)        | (Cleared on unmount/submit)  |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| 04 // URL STATE   | URL SearchParams   | Roster filters, active tabs, pagination,      | Bookmarkable URL & browser   |
|                   | (Nuqs / Next.js)   | search queries, comparison drawer IDs         | history stack                |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
```

---

# 2. STATE DOMAIN SPECIFICATIONS & ARCHITECTURAL PATTERNS

### 2.1 Server State (Remote Data & Caching)
- **Scope**: Directorial talent roster data, audited telemetry metrics ($14.2M pipeline, 88.4% retention), campaign case studies, C-suite video deposition URLs, and client billing ledgers.
- **Management Strategy**: Handled via **TanStack Query v5** (React Query) on the client, backed by **React 19 Server Components (RSC)** during initial page render.
- **Caching & Revalidation Policy**:
  - Telemetry Metrics: `staleTime: 60_000ms` (1 min), background refetch on window focus.
  - Creator Roster & Case Studies: `staleTime: 3600_000ms` (1 hr), pre-rendered via RSC and revalidated via ISR or manual query key invalidation (`queryClient.invalidateQueries({ queryKey: ['roster'] })`).
  - Client Portal Dashboard: `staleTime: 0ms` (Always fresh fetch on tab mount).

### 2.2 Global UI State (Transient Client Interactions)
- **Scope**: Video deposition modal open/closed state, active video timestamp, audio mute toggle (48kHz stereo stream), navigation mobile drawer visibility, sticky filter console collapse state, and active theme mode.
- **Management Strategy**: Managed via atomic **Zustand 5 Micro-Stores**.
- **Architecture**: Separate lightweight micro-stores (`useUIStore`, `useAudioStore`, `useModalStore`) instead of one giant store, guaranteeing that updating audio volume does not re-render modal components.

### 2.3 Local State (Component Micro-Interactions)
- **Scope**: Accordion panel expansion state, hover card cross-fade timers (200ms video hover), magnetic cursor offset coordinates, component-level tabs, and copy-to-clipboard feedback buttons.
- **Management Strategy**: Managed using standard **React `useState` / `useReducer`** or **React Refs (`useRef`)** for high-frequency kinetic updates (GSAP scroll triggers, mouse movement coordinates).

### 2.4 Authentication & Session State
- **Scope**: User authentication tokens (JWT), C-suite client role permissions (`CLIENT_EXECUTIVE`, `OPERATIONS_ADMIN`, `DIRECTOR`), MFA verification flags, and NDA access clearance.
- **Management Strategy**: Edge Middleware authentication cookie storage combined with Next.js App Router Server Actions and Next Auth / Auth Context.
- **Persistence**: Secure HTTP-only SameSite cookies (`__Secure-vmn-token`) with encrypted payload sessions.

### 2.5 Theme & Visual Atmosphere State
- **Scope**: Master color scheme (Deep Obsidian Matte `#080809` Canvas), reduced motion toggle (`prefers-reduced-motion`), and WebGL canvas shader particle density settings.
- **Management Strategy**: CSS Variables bound to the `<html>` root element, combined with a lightweight Zustand store persisted to `localStorage` (`vmn-theme-preferences`).

### 2.6 Form State & Input Validation
- **Scope**: Alliance intake form inputs ($75,000 ACV contract floor, corporate email, target launch date, media domain selection), executive briefing reservations, and newsletter submissions.
- **Management Strategy**: **React Hook Form** paired with **Zod Schema Validation Resolvers**.
- **Performance Guarantee**: Uncontrolled inputs eliminate keystroke re-renders. Form values are submitted directly to Next.js Server Actions or Edge API endpoints.

### 2.7 Filters & Search State
- **Scope**: Creator network discipline filter (Documentary, Journalism, 3D Spatial), platform selection, region, and engagement floor threshold (`5.0%+` – `12.0%+`).
- **Management Strategy**: **URL Search Parameters (`?discipline=film&engagement=8.0`)** managed via Nuqs / Next.js `useSearchParams`.
- **Rationale**: Enables enterprise buyers to copy and share exact filtered roster views via bookmarkable URLs without losing filter context.

### 2.8 Pagination & Infinite Load State
- **Scope**: Roster page index (`page=1`), case study grid batches, and audit log scroll positions.
- **Management Strategy**: URL Query Parameters (`?page=2&limit=12`) combined with TanStack Query `placeholderData: keepPreviousData` for 0ms layout flash transitions.

### 2.9 Dashboard & Telemetry State
- **Scope**: Active sparkline node hover index, comparison drawer selected creators (up to 3 directors), and quarterly pipeline ACV calculation slider values ($75k – $500k).
- **Management Strategy**: Hybrid Zustand store (`useTelemetryStore`) for node inspection tooltips combined with TanStack Query for background dataset sync.

### 2.10 Toast & Notification State
- **Scope**: Cryptographic SHA-256 audit receipt copied notifications, intake form submission success banners, and system latency alert alerts.
- **Management Strategy**: Queue-based Zustand notification store (`useToastStore`) supporting auto-dismissing toast notifications with ARIA live region announcements (`aria-live="polite"`).

### 2.11 Loading States
- **Scope**: Initial TTFB page load, video showreel buffering, intake form pending submission, and filter query revalidation.
- **Management Strategy**: React 19 `<Suspense>` boundaries with high-contrast skeleton layouts (`loading.tsx`), Next.js `useFormStatus` / `useTransition` hooks, and subtle line-progress indicators.

### 2.12 Error States
- **Scope**: Network fetch timeouts, validation schema errors, unhandled route crashes, and invalid audit hashes.
- **Management Strategy**: Granular React Error Boundaries (`error.tsx`), Zod inline field error maps (`role="alert"`), and institutional 404/500 terminal fallbacks.

---

# 3. TECHNOLOGY SELECTION DECISION MATRIX: WHEN TO USE WHAT

```
+-----------------------------------------------------------------------------------------------------------------------+
| STATE MANAGEMENT TECHNOLOGY SELECTION MATRIX                                                                          |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| Technology Tool   | Ideal Usage Scope  | Strict Anti-Patterns & When NOT To Use        | Primary Engineering Benefit  |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| React State       | Component-local    | DO NOT use for data shared across distant     | Zero bundle overhead, native |
| (`useState`)      | micro-interactions | component trees or persistent user settings  | component encapsulation      |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| Context API       | Dependency injection| DO NOT use for high-frequency updating state  | Eliminates prop drilling for |
|                   | (Theme, Auth, Query)| (causes full tree re-renders without memo)    | static provider configurations|
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| Zustand 5         | Global transient UI| DO NOT use as a cache for server API data     | Atomic selectors, 0.5kb bundle|
|                   | (Modals, Mute, Nav)| (use TanStack Query for remote API data)      | zero context provider wrappers|
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| TanStack Query v5 | Remote server API  | DO NOT use for local form input fields or     | Automatic caching, deduping, |
|                   | data, async queries| UI modal open/closed states                   | stale-while-revalidate engine|
+-------------------+--------------------+-----------------------------------------------+------------------------------+
```

### 3.1 Detailed Selection Guidelines

1. **Use React Local State (`useState` / `useReducer` / `useRef`) when:**
   - State is isolated to a single component or its immediate children (e.g., accordion panel toggle, hover state).
   - High-frequency animations (GSAP tickers, mouse cursor tracking) require direct ref mutation without React re-renders.

2. **Use React Context API when:**
   - Injecting static or low-frequency global dependencies down the component tree (e.g., Root Provider, Lenis Smooth Scroll instance, TanStack Query Client instance).

3. **Use Zustand 5 when:**
   - Client UI state needs to be accessed or mutated across non-hierarchical components (e.g., clicking a button in the Hero section opens a Video Deposition Modal rendered in the shared layout portal).
   - State requires atomic selectors (`const isMuted = useAudioStore((state) => state.isMuted)`) so un-related UI components do not re-render.

4. **Use TanStack Query v5 when:**
   - Fetching, caching, optimistic updating, or synchronizing data originating from an external database or API route (e.g., campaign telemetry, director roster, intake submissions).

---

# 4. STATE FLOW ARCHITECTURE DIAGRAM

```
+-----------------------------------------------------------------------------------------------------------------------+
| VALTREON MEDIA NETWORK STATE FLOW ARCHITECTURE                                                                         |
|                                                                                                                       |
| [ SERVER / API LAYER ]                                                                                                |
| Database / Edge API Proxy / Gemini AI / Cryptographic Audit Engine                                                    |
|                                    │                                                                                  |
|                                    ▼                                                                                  |
| [ SERVER STATE ENGINE: TanStack Query v5 + RSC ]                                                                      |
| Handles Data Fetching, Cache Invalidation, Optimistic Updates, and Stale-While-Revalidate Sync                         |
|                                    │                                                                                  |
|                                    ▼                                                                                  |
| [ UI & FORM STATE LAYERS ]                                                                                            |
| ├── URL State (Nuqs): Roster Filters, Search Query, Active Tab, Page Index                                            |
| ├── Global UI State (Zustand 5): Modals, Video Overlays, Audio Mute, Drawer Toggles                                    |
| └── Form State (RHF + Zod): $75k ACV Alliance Intake Form, Executive Briefing                                         |
|                                    │                                                                                  |
|                                    ▼                                                                                  |
| [ RENDER & KINETIC ANIMATION LAYER ]                                                                                  |
| React 19 UI Components ──> Atomic State Selectors ──> GSAP / R3F WebGL Canvas (60fps)                                 |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

# 5. STATE MANAGEMENT SPECIFICATION SUMMARY MATRIX

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                 STATE MANAGEMENT SPECIFICATION SUMMARY MATRIX                                          |
+-------------------+-----------------------------------+---------------------------------------------------------------+
| State Domain      | Chosen Engine & Management Tool   | Key Architectural Benefit & Performance Standard              |
+-------------------+-----------------------------------+---------------------------------------------------------------+
| Server State      | TanStack Query v5 + RSC           | Automatic caching, deduplication, 0.000 CLS pre-hydrated render|
| Global UI State   | Zustand 5 Micro-Stores            | Atomic selectors, 0.5kb footprint, zero unnecessary re-renders|
| Form State        | React Hook Form + Zod Resolvers   | Uncontrolled inputs, 0ms keystroke re-renders, strict typing  |
| URL Search Params | Nuqs / Next.js `useSearchParams`   | Shareable, bookmarkable filter URLs for enterprise buyers     |
| Local UI State    | React `useState` / `useRef`       | Native component encapsulation, high-frequency kinetic refs   |
| Auth State        | Next Auth + Edge HTTP-Only Cookies| Encrypted session cookies, Edge Middleware route protection   |
| Loading / Error   | React `<Suspense>` + `error.tsx`  | Skeleton fallbacks, isolated route crash recovery, Swiss 404  |
+-------------------+-----------------------------------+---------------------------------------------------------------+
```
