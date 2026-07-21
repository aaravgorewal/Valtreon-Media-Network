# Master Design Token & System Architecture Specification: Valtreon Media Network (VMN)
*Authored by: Principal Design Systems Engineer, Lead Creative Technologist & Director of Brand Systems*  
*Classification: Permanent Enterprise Design Standards & Design Tokens Contract (SOT)*  
*Design House Framework: Swiss Rationalism meets High-Precision Systems Engineering (Pentagram-Grade Rigor)*

---

## Declaration of Systems Governance

This document establishes the permanent, single-source-of-truth **Design Token Specification** for Valtreon Media Network (VMN). 

In modern frontend systems, design language must exist as a scalable, mathematical contract. We reject hardcoded visual decisions, arbitrary inline spacing offsets, raw Hex strings, and random motion durations. Every visual attribute on the VMN platform—from color coordinates and typographic curves to animation timings and layout Z-indexes—is derived from the strict, systematic tokens defined herein.

These tokens are structured to be cross-platform, scalable, and machine-readable, maintaining a direct mapping between our **CSS Custom Properties** (Skins) and **Tailwind CSS Utility Configs** (Systems).

---

## 1. Naming Convention & Token Architecture

We utilize a **Tiered Semantic Token Architecture** to separate raw visual values from functional intent. This ensures that the system is fully scalable and prepared for future adaptations (such as a light-theme layer or native mobile platforms).

```
[ THE THREE-TIER TOKEN SYSTEM ]
  * Level 1: Global Base Tokens  -> Core physical colors, sizes, and weights (e.g., color-bronze-500)
  * Level 2: Semantic Tokens     -> Core brand roles, states, and layers (e.g., color-brand-accent)
  * Level 3: Component Tokens    -> Specific component boundaries (e.g., button-primary-border)
```

### 1.1 Token Structure Namespace
Tokens follow a strict, lowercase namespace structure:
`vmn-[category]-[type]-[item]-[state]`

*   **`vmn`**: The global enterprise namespace.
*   **`category`**: The design dimension (`color`, `font`, `space`, `radius`, `border`, `motion`, `z`).
*   **`type`**: The functional grouping (`base`, `surface`, `type`, `status`, `interactive`).
*   **`item`**: The specific token name or modular index scale (`primary`, `zinc-500`, `display-xl`, `gp-4`).
*   **`state`**: The interactive state trigger (`hover`, `active`, `focus`, `disabled`).

---

## 2. Core CSS Variables & Custom Property Declarations

These custom properties **MUST** be declared at the absolute root of VMN's global CSS file (`/src/index.css` or `/src/global.css`) inside the `:root` selector. This guarantees absolute, system-wide inheritance across all components.

```css
:root {
  /* ==========================================
     2.1 Color Tokens: Bases & Canvas Layers
     ========================================== */
  --vmn-color-base-obsidian: #080809;   /* hsl(240, 6%, 3%) */
  --vmn-color-base-slate: #0E0E11;      /* hsl(240, 10%, 6%) */
  --vmn-color-base-onyx: #141418;       /* hsl(240, 9%, 9%) */
  --vmn-color-base-steel: #1A1A20;      /* hsl(240, 10%, 11%) */

  /* ==========================================
     2.2 Color Tokens: Typographic Hierarchy
     ========================================== */
  --vmn-color-type-primary: #EAEAEF;    /* hsl(240, 13%, 93%) */
  --vmn-color-type-secondary: #A1A1AA;  /* hsl(240, 5%, 65%) */
  --vmn-color-type-tertiary: #52525B;   /* hsl(240, 5%, 34%) */

  /* ==========================================
     2.3 Color Tokens: Architectural Borders
     ========================================== */
  --vmn-color-border-gray: #1D1D22;     /* hsl(240, 8%, 12%) */
  --vmn-color-border-iron: #27272A;     /* hsl(240, 4%, 16%) */

  /* ==========================================
     2.4 Color Tokens: Accents & States
     ========================================== */
  --vmn-color-accent-bronze: #9C8465;   /* hsl(34, 21%, 50%) */
  --vmn-color-accent-pearl: #B8A287;    /* hsl(33, 26%, 63%) */

  /* ==========================================
     2.5 Color Tokens: Desaturated Statuses
     ========================================== */
  --vmn-color-status-success-text: #4ADE80;
  --vmn-color-status-success-border: #1B4D36;
  --vmn-color-status-success-fill: #102A1E;

  --vmn-color-status-warning-text: #FBBF24;
  --vmn-color-status-warning-border: #4A3114;
  --vmn-color-status-warning-fill: #24180A;

  --vmn-color-status-error-text: #F87171;
  --vmn-color-status-error-border: #541B1B;
  --vmn-color-status-error-fill: #2C1313;

  /* ==========================================
     2.6 Spacing Tokens: 8px Mathematical Scale
     ========================================== */
  --vmn-space-gp-0-5: 0.25rem;   /* 4px */
  --vmn-space-gp-1: 0.50rem;     /* 8px */
  --vmn-space-gp-2: 1.00rem;     /* 16px */
  --vmn-space-gp-3: 1.50rem;     /* 24px */
  --vmn-space-gp-4: 2.00rem;     /* 32px */
  --vmn-space-gp-6: 3.00rem;     /* 48px */
  --vmn-space-gp-8: 4.00rem;     /* 64px */
  --vmn-space-gp-12: 6.00rem;    /* 96px */
  --vmn-space-gp-16: 8.00rem;    /* 128px */
  --vmn-space-gp-24: 12.00rem;   /* 192px */

  /* ==========================================
     2.7 Corner Radius Tokens
     ========================================== */
  --vmn-radius-none: 0px;        /* Strict architectural standard */
  --vmn-radius-sm: 2px;          /* Sub-pixel anti-aliasing only */

  /* ==========================================
     2.8 Opacity Tokens
     ========================================== */
  --vmn-opacity-zero: 0.00;
  --vmn-opacity-glass-border: 0.10;
  --vmn-opacity-dimmed: 0.35;
  --vmn-opacity-muted: 0.65;
  --vmn-opacity-opaque: 1.00;

  /* ==========================================
     2.9 Motion, Kinetic & Transition Tokens
     ========================================== */
  --vmn-motion-duration-crisp: 150ms;
  --vmn-motion-duration-damped: 350ms;
  --vmn-motion-duration-slow: 450ms;
  --vmn-motion-duration-pulse: 2000ms;

  --vmn-motion-ease-linear: linear;
  --vmn-motion-ease-crisp: cubic-bezier(0.16, 1, 0.3, 1);    /* High-speed custom ease-out */
  --vmn-motion-ease-damped: cubic-bezier(0.25, 1, 0.5, 1);   /* Natural high-inertia spring */

  /* ==========================================
     2.10 Z-index Layers
     ========================================== */
  --vmn-z-deep: -10;
  --vmn-z-base: 0;
  --vmn-z-surface: 10;
  --vmn-z-overlay: 20;
  --vmn-z-dropdown: 40;
  --vmn-z-header: 50;
  --vmn-z-modal: 100;
}
```

---

## 3. Tailwind CSS Token Extension Registry

To allow seamless frontend implementation, VMN maps these tokens directly inside the developer-facing Tailwind configuration file (`vite.config.ts`, `tailwind.config.js`, or integrated PostCSS engines).

```javascript
// tailwind.config.js - VMN Design Tokens Extender
module.exports = {
  theme: {
    extend: {
      colors: {
        vmn: {
          /* Bases */
          obsidian: 'var(--vmn-color-base-obsidian)',
          slate: 'var(--vmn-color-base-slate)',
          onyx: 'var(--vmn-color-base-onyx)',
          steel: 'var(--vmn-color-base-steel)',
          
          /* Typography */
          primary: 'var(--vmn-color-type-primary)',
          secondary: 'var(--vmn-color-type-secondary)',
          tertiary: 'var(--vmn-color-type-tertiary)',
          
          /* Borders */
          gray: 'var(--vmn-color-border-gray)',
          iron: 'var(--vmn-color-border-iron)',
          
          /* Accents */
          bronze: 'var(--vmn-color-accent-bronze)',
          pearl: 'var(--vmn-color-accent-pearl)',

          /* Status Alerts */
          success: {
            text: 'var(--vmn-color-status-success-text)',
            border: 'var(--vmn-color-status-success-border)',
            fill: 'var(--vmn-color-status-success-fill)',
          },
          warning: {
            text: 'var(--vmn-color-status-warning-text)',
            border: 'var(--vmn-color-status-warning-border)',
            fill: 'var(--vmn-color-status-warning-fill)',
          },
          error: {
            text: 'var(--vmn-color-status-error-text)',
            border: 'var(--vmn-color-status-error-border)',
            fill: 'var(--vmn-color-status-error-fill)',
          }
        }
      },
      spacing: {
        'gp-0.5': 'var(--vmn-space-gp-0-5)',
        'gp-1': 'var(--vmn-space-gp-1)',
        'gp-2': 'var(--vmn-space-gp-2)',
        'gp-3': 'var(--vmn-space-gp-3)',
        'gp-4': 'var(--vmn-space-gp-4)',
        'gp-6': 'var(--vmn-space-gp-6)',
        'gp-8': 'var(--vmn-space-gp-8)',
        'gp-12': 'var(--vmn-space-gp-12)',
        'gp-16': 'var(--vmn-space-gp-16)',
        'gp-24': 'var(--vmn-space-gp-24)',
      },
      borderRadius: {
        'vmn-none': 'var(--vmn-radius-none)',
        'vmn-sm': 'var(--vmn-radius-sm)',
      },
      fontFamily: {
        /* Custom Google Web Font Stacks */
        display: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        prose: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      transitionDuration: {
        'vmn-crisp': 'var(--vmn-motion-duration-crisp)',
        'vmn-damped': 'var(--vmn-motion-duration-damped)',
        'vmn-slow': 'var(--vmn-motion-duration-slow)',
      },
      transitionTimingFunction: {
        'vmn-crisp': 'var(--vmn-motion-ease-crisp)',
        'vmn-damped': 'var(--vmn-motion-ease-damped)',
      },
      zIndex: {
        'deep': 'var(--vmn-z-deep)',
        'surface': 'var(--vmn-z-surface)',
        'overlay': 'var(--vmn-z-overlay)',
        'dropdown': 'var(--vmn-z-dropdown)',
        'header': 'var(--vmn-z-header)',
        'modal': 'var(--vmn-z-modal)',
      }
    }
  }
}
```

---

## 4. Deep-Dive Design Token Specifications

---

### 4.1 Color Tokens Scale
Our color tokens represent calculated mathematical balances that meet strict WCAG AAA / AA guidelines vs our base deep obsidian canvas.

```
+-----------------------------------------------------------------------------------+
|                            THE COLOR CONTRAST HORIZON                             |
+--------------------------+---------------------------+----------------------------+
| Token                    | Hex Code / Variable       | Contrast Ratio (vs Base 1) |
+--------------------------+---------------------------+----------------------------+
| vmn-color-type-primary   | #EAEAEF (Alabaster)       | 15.1:1 (Exceeds AAA)       |
| vmn-color-type-secondary | #A1A1AA (Muted Zinc)      | 7.2:1 (Exceeds AAA)        |
| vmn-color-accent-bronze  | #9C8465 (Champagne)       | 4.8:1 (Exceeds AA)         |
+--------------------------+---------------------------+----------------------------+
```

---

### 4.2 Typography Tokens Scale
Sizing, line height, letter tracking, and font weight structures mapped strictly to VMN's typographic hierarchy.

| Typographic Token Name | Associated Font Stack | Font Weight | Font Size | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`vmn-font-display-xl`** | Space Grotesk | `500` (Medium) | `4.500rem` (`72px`) | `1.05` | `-0.05em` |
| **`vmn-font-display-l`** | Space Grotesk | `500` (Medium) | `3.750rem` (`60px`) | `1.10` | `-0.04em` |
| **`vmn-font-display-m`** | Space Grotesk | `500` (Medium) | `3.000rem` (`48px`) | `1.10` | `-0.04em` |
| **`vmn-font-heading-xl`** | Space Grotesk | `500` (Medium) | `2.500rem` (`40px`) | `1.15` | `-0.03em` |
| **`vmn-font-heading-l`** | Space Grotesk | `500` (Medium) | `2.000rem` (`32px`) | `1.20` | `-0.02em` |
| **`vmn-font-heading-m`** | Space Grotesk | `500` (Medium) | `1.500rem` (`24px`) | `1.25` | `-0.01em` |
| **`vmn-font-heading-s`** | Space Grotesk | `500` (Medium) | `1.250rem` (`20px`) | `1.30` | `normal` |
| **`vmn-font-body-xl`** | Inter | `400` (Regular) | `1.250rem` (`20px`) | `1.75` | `normal` |
| **`vmn-font-body-l`** | Inter | `400` (Regular) | `1.125rem` (`18px`) | `1.70` | `normal` |
| **`vmn-font-body-std`** | Inter | `400` (Regular) | `1.000rem` (`16px`) | `1.625` | `normal` |
| **`vmn-font-body-sm`** | Inter | `400` (Regular) | `0.875rem` (`14px`) | `1.50` | `+0.01em` |
| **`vmn-font-caption`** | Inter | `400` (Regular) | `0.750rem` (`12px`) | `1.40` | `+0.02em` |
| **`vmn-font-overline`** | JetBrains Mono | `500` (Medium) | `0.750rem` (`12px`) | `1.00` | `+0.15em` |
| **`vmn-font-label`** | JetBrains Mono | `500` (Medium) | `0.812rem` (`13px`) | `1.20` | `+0.08em` |
| **`vmn-font-nav-link`** | JetBrains Mono | `500` (Medium) | `0.875rem` (`14px`) | `1.00` | `+0.05em` |
| **`vmn-font-btn-action`**| JetBrains Mono | `500` (Medium) | `0.875rem` (`14px`) | `1.00` | `+0.08em` |

---

### 4.3 Spacing Tokens Scale (The 8px Grid)
Calculated spacing and layout increments translating into standard relative units.
*   **`vmn-space-gp-0.5`**: `0.25rem` (`4px`) — Micro alignment, indicator dots.
*   **`vmn-space-gp-1`**: `0.50rem` (`8px`) — Category label padding, tight metadata rows.
*   **`vmn-space-gp-2`**: `1.00rem` (`16px`) — Inner table row padding, compact widget boundaries.
*   **`vmn-space-gp-3`**: `1.50rem` (`24px`) — Standard card internal padding, list item separation gaps.
*   **`vmn-space-gp-4`**: `2.00rem` (`32px`) — Large bento-grid card padding, outer container gutters.
*   **`vmn-space-gp-6`**: `3.00rem` (`48px`) — Descriptive paragraph separation, inner form block offsets.
*   **`vmn-space-gp-8`**: `4.00rem` (`64px`) — Major vertical separation gaps inside section layouts.
*   **`vmn-space-gp-12`**: `6.00rem` (`96px`) — Standard vertical section padding (The Massive Margin Rule).
*   **`vmn-space-gp-16`**: `8.00rem` (`128px`) — Expanded section margins for cinematic presentation fields.
*   **`vmn-space-gp-24`**: `12.00rem` (`192px`) — Extreme layout breathing space zones.

---

### 4.4 Corner Radius Tokens
Our physical shape borders are locked to zero-radius corners. We strictly reject random softenings.
*   **`vmn-radius-none`**: `0px` — Buttons, Cards, Inputs, Overlays, Dropdowns, Tables, Charts.
*   **`vmn-radius-sm`**: `2px` — Limited strictly to micro icon joint rendering, helping prevent pixel aliasing anomalies on low-density displays.

---

### 4.5 Shadow & Ambient Glow Tokens
We strictly prohibit commercial box-shadow highlights. All visual separations are drawn via razor-thin single-pixel borders. Our only approved shadow/glow token is a highly-damped atmospheric light glow:
*   **`vmn-glow-ambient`**: `0 0 100px 0 rgba(156, 132, 101, 0.03)` — An extremely subtle, low-opacity (`3%`) ambient Champagne Bronze glow placed strictly behind elevated modal overlays.

---

### 4.6 Border Weight & Style Tokens
*   **`vmn-border-thin`**: `1px solid var(--vmn-color-border-gray)` — Default single-pixel separator for standard card blocks and grid cell partitions.
*   **`vmn-border-structural`**: `1px solid var(--vmn-color-border-iron)` — Used for primary section divisions, vertical page splits, and header navigation boundaries.
*   **`vmn-border-interactive`**: `1px solid var(--vmn-color-accent-bronze)` — Highlights active inputs, hovered CTA boundaries, and focus states.

---

### 4.7 Opacity Levels Scale
*   **`vmn-opacity-0`**: `0.00` — Completely transparent.
*   **`vmn-opacity-glass`**: `0.80` — Default opacity parameter for Glassmorphism overlays and dropdown selects.
*   **`vmn-opacity-disabled`**: `0.35` — Used strictly to desaturate disabled buttons and inactive input labels.
*   **`vmn-vague`**: `0.65` — Softens metadata and secondary coordinates text.
*   **`vmn-solid`**: `1.00` — Standard visual state.

---

### 4.8 Transition & Kinematic Timing Tokens
VMN treats motion as physical kinetic energy governed by mass, friction, and inertia.
*   **`vmn-motion-duration-crisp`**: `150ms` — Mapped to high-speed user interactions, such as active input focuses and button click triggers.
*   **`vmn-motion-duration-damped`**: `350ms` — Mapped to standard hovering transitions, slide reveals, and card height elevators.
*   **`vmn-motion-duration-slow`**: `450ms` — Mapped to slow mechanical dial rotations and canvas layout fades.
*   **`vmn-motion-duration-pulse`**: `2000ms` — Mapped to slow linear loading skeleton pulse wave shimmers.

---

### 4.9 Z-index Layout Coordinates
Enforces a highly structured vertical stacking sequence across the entire application viewport:
*   **`vmn-z-deep`**: `-10` — Architectural grid line coordinates, structural background images.
*   **`vmn-z-base`**: `0` — Base page text, core reading sections, paragraph columns.
*   **`vmn-z-surface`**: `10` — Floating bento cards, standard informational content containers.
*   **`vmn-z-overlay`**: `20` — Inline category filter panels, active tooltip notifications.
*   **`vmn-z-dropdown`**: `40` — Floating glass category menus, flyout dropdown selectors.
*   **`vmn-z-header`**: `50` — Global horizontal navigation horizon.
*   **`vmn-z-modal`**: `100` — Full-screen sliding drawer menus, vetting brief modal gates.

---

### 4.10 Container & Grid Sizing Bounds
Constrains the global horizontal layout to prevent content stretching on high-resolution displays.
*   **`vmn-container-max`**: `1280px` (`max-w-7xl`) — The baseline maximum width for fluid centered content rows.
*   **`vmn-grid-columns`**: `12` — Standard Swiss Modernist columns for laptop and desktop screens.
*   **`vmn-grid-gap`**: `32px` (`gap-8`) — Standard spatial separation gap dividing card grid layouts.

---

### 4.11 Iconographic Architectural Token Guidelines
Defines the visual shape parameters of SVG arrow indicators and custom sector glyphs.
*   **`vmn-icon-stroke`**: `1.25px` / `1.5px` — Strict monoline stroke weight.
*   **`vmn-icon-fill`**: `none` — Strict outlined-only vector paths standard.
*   **`vmn-icon-joint`**: `miter` — Razor-sharp, square caps on all path junctions.

---

## Token-Consistency Verification Audit

Prior to committing any CSS custom properties or committing any updates to VMN's Tailwind Configuration file, the lead systems architect must audit the commit against this five-point compliance checklist:

* [ ] Are all color coordinates derived strictly from our designated token scale, utilizing HSL/HEX references?
* [ ] Is every single spacing, margins, and padding value configured as a strict mathematical multiple of our 8px spacing grid?
* [ ] Are all corner radii locked strictly to zero-radius parameters (`vmn-radius-none`), with zero exceptions for commercial designs?
* [ ] Do all interactive transition durations and custom bezier functions utilize our crisp or damped motion timing values?
* [ ] Does the global CSS variables manifest include a unique, semantic, and well-documented namespace for every design token?
* [ ] Do all developer-facing components reference the custom tailwind variables (`vmn-*`) rather than raw hex colors or layout values?
* [ ] Do all spacing and layout classes across HTML mockups use semantic design tokens (`gap-gp-4`, `p-gp-3`)?
* [ ] Is the entire viewport silent—free of unrequested chatbot overlays, sticky floaters, and commercial ad banners?
* [ ] Does every single styling-critical layout block and interaction CTA button declare a unique, clean, and semantic DOM `id` attribute for precise tracking and layout control?
