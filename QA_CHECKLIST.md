# Master Quality Assurance & Design System Audit Rubric: Valtreon Media Network (VMN)
*Authored by: Director of Quality Assurance, Principal Design Systems Architect & Lead Brand Inspector*  
*Classification: Permanent Enterprise QA Standards & System Audit Protocol (SOT)*  
*Design Paradigm: Swiss Modernist Rationalism meets Premium Engineering Audits (ISO 9241 & WCAG 2.2 Compliant)*

---

## Declaration of Quality Governance

This specification establishes the permanent, mathematical **Quality Assurance (QA) Checklist and Scoring Rubric** for all current and future digital assets, layouts, interaction points, and code structures within the Valtreon Media Network (VMN) platform.

At Valtreon, we treat software engineering and design as **Disciplines of Absolute Precision**. We reject the subjective "looks good to me" standard. To maintain our uncompromised brand authority, every interactive component, page section, and viewport must undergo a rigorous, quantitative audit. 

Each reviewed component is evaluated across **twelve core vectors**, generating a mathematical **Design Fidelity Score (DFS)** from 0.0 to 100.0. Any component scoring below **90.0** fails audit and is strictly barred from production release.

---

## The Audit Score Card: DFS Calculation

Audit candidates are scored using a weighted multi-vector equation:

$$\text{DFS} = \sum_{i=1}^{12} (S_i \times W_i)$$

Where $S_i$ is the vector score (0 to 10) and $W_i$ is the system weight.

```
+---------------------------------------------------------------------------------+
|                         THE 12-VECTOR DESIGN SYSTEM WEIGHTS                     |
+------------------------------+------------+--------------------------+----------+
| Vector                       | Weight (W) | Vector                   |Weight (W)|
+------------------------------+------------+--------------------------+----------+
| 1. Typography Standards      | 1.25       | 7. Kinetic & Motion      | 0.75     |
| 2. Spatial Grid & Spacing    | 1.25       | 8. WCAG 2.2 Accessibility| 1.25     |
| 3. Contrast & Hierarchy      | 1.25       | 9. Token Consistency     | 1.00     |
| 4. Tactical Buttons          | 0.75       | 10. Performance Loading  | 0.75     |
| 5. Bento Card Form-Factor    | 0.75       | 11. Brand Alignment      | 0.50     |
| 6. Form Intake Fields        | 0.75       | 12. Premium Materiality  | 0.75     |
+------------------------------+------------+--------------------------+----------+
```

---

## 1. Typography Audit Checklist (Weight: 1.25)
Typography at VMN is the primary structural material. Audit this vector to ensure strict compliance with `/TYPOGRAPHY_SYSTEM.md`:

*   [ ] **The Tri-Font Stack Rule**: 
    *   Are display titles set strictly in *Space Grotesk*?
    *   Are editorial narrative copy set strictly in *Inter*?
    *   Are metadata, coordinates, labels, and statistics set strictly in *JetBrains Mono*?
    *   Are all fallback stacks configured correctly with no generic defaults?
*   [ ] **The 65-Character prose Constraint**: Is the reading width of all long-form body paragraphs constrained strictly to `max-w-2xl` (`672px`), ensuring a comfortable visual line length of 60 to 75 characters per line?
*   [ ] **Monospace Precedence Anchor**: Is every Display XL, Display L, and Display M heading block introduced by a small uppercase monospace tag (`text-xs tracking-widest uppercase`) set in JetBrains Mono resting exactly `1.00rem` (`mb-4`) directly above it?
*   [ ] **Widow & Orphan Management**: Are all displaying headers protected from single-word line wraps through the implementation of non-breaking spaces (`&nbsp;`) between the final two words?
*   [ ] **Typographic Skins**: Is the typography colored strictly in Alabaster Mist (`#EAEAEF`) for headings, Muted Zinc (`#A1A1AA`) for body prose, and Tertiary Steel Sage (`#52525B`) or Champagne Bronze (`#9C8465`) for metadata? (Pure white `#FFFFFF` is strictly banned).

---

## 2. Spatial Grid & Spacing Audit Checklist (Weight: 1.25)
All layout boundaries are governed by our strict `/LAYOUT_SYSTEM.md` blueprint:

*   [ ] **The 8px Grid Standard**: Is every single padding, margin, element gap, and border offset configured as a strict mathematical multiple of our 8px base spacing token (`gp-1` to `gp-24`)?
*   [ ] **The Massive Margin Rule**: Are major vertical section bounds separated by expansive negative space paddings of exactly `py-24` (`96px`) or `py-32` (`128px`) to allow visual decompression?
*   [ ] **The Margin Sanctuary**: Does the main centered bounding container wrap content strictly inside `max-w-7xl mx-auto px-4 md:px-8`, ensuring a minimum horizontal margin buffer of `32px` on widescreen displays?
*   [ ] **Grid Alignment Perfection**: Do adjacent text columns, card boundaries, and image coordinates align with pixel-perfect horizontal and vertical baseline alignment?
*   [ ] **No Overlap Padding**: Are inner card container paddings configured strictly to `p-6` (`24px`) or `p-8` (`32px`), matching the surrounding layout margins?

---

## 3. Contrast & Hierarchy Audit Checklist (Weight: 1.25)
We establish structural hierarchy through mathematical contrast balances rather than heavy graphics:

*   [ ] **Heading Contrast Ratios**: Do primary Alabaster headings maintain a contrast ratio of **15.1:1** vs Deep Obsidian, exceeding WCAG AAA (7:1)?
*   [ ] **Body Copy Contrast Ratios**: Do secondary Muted Zinc paragraph blocks maintain a contrast ratio of **7.2:1** vs Deep Obsidian, exceeding WCAG AAA (7:1)?
*   [ ] **Accent Contrast Ratios**: Do active Champagne Bronze coordinates and CTAs maintain a contrast ratio exceeding **4.5:1** vs the background surface?
*   [ ] **The Z-Axis Stacking Sequence**: Do components adhere strictly to VMN's programmatic Z-index hierarchy, keeping backgrounds at `-10`, base copy at `0`, elevated surfaces at `10`, dropdowns at `40`, global header navigation at `50`, and modal vetting gates at `100`?
*   [ ] **Flattened Depth Standard**: Are there zero instances of nested cards (cards inside cards) or heavy, dark drop shadows?

---

## 4. Tactical Buttons Audit Checklist (Weight: 0.75)
Buttons must act as physical, decisive triggers:

*   [ ] **Zero-Radius Corner Policy**: Do all buttons enforce sharp, uncompromised corners (`rounded-none` / `0px`)? (Pills and rounded commercial buttons are strictly banned).
*   [ ] **Bracketed Tactical Format**: Is the button text styled in uppercase JetBrains Mono, enclosed inside bracketed visual frames: `[ CTA BUTTON ACTION ]`?
*   [ ] **Interactive Sizing Limits**: Do buttons preserve standard relative paddings (`py-3 px-6`) and fixed width bounds, avoiding fluid wide-stretching on widescreen rows?
*   [ ] **Active Kinetic Feedback**: On-click, does the button scale down slightly to `scale-[0.99]` over a fast `150ms` crisp transition to provide tactile mechanical resistance?
*   [ ] **Consistent Focus Indication**: Does tab-focus highlight the border cleanly to Champagne Bronze, accompanied by a floating monospace label: `[ FOCUS ]`?

---

## 5. Bento Card Form-Factor Audit Checklist (Weight: 0.75)
Cards must serve as structured visual stages:

*   [ ] **Zero-Radius Alignment**: Do all card elements enforce sharp, uncompromised corners (`rounded-none` / `0px`)?
*   [ ] **Border Trim Standards**: Are card perimeters outlined using a single-pixel Gray border (`#1D1D22` / `border-zinc-800`), avoiding thick commercial frames?
*   [ ] **No Drop Shadows**: Are cards entirely free of drop shadows, floating flatly inside the negative space grid?
*   [ ] **Cinematic Aspect Ratios**: Are card visual images and media files constrained strictly to widescreen cinematic proportions—**`21:9`** or **`16:9`**?
*   [ ] **Hover Kinetic Lift**: On-hover, does the card container transition its borders smoothly while elevating upward imperceptibly (`scale-[1.015]`) over a damped `350ms` sequence?

---

## 6. Form Intake Fields Audit Checklist (Weight: 0.75)
Inputs are the clinical gates to the co-production network:

*   [ ] **Zero-Radius Outlines**: Do input fields maintain sharp, uncompromised edges (`rounded-none` / `0px`)?
*   [ ] **Bottom Border Highlight Standard**: Are inputs designed strictly as clean, border-bordered entry rows, displaying single-pixel bottom highlights using Gray (`#1D1D22`)?
*   [ ] **No Placeholder Dependency**: Does every input pair directly with a programmatic `<label>` element using explicit `id` and `htmlFor` attributes, avoiding reliance on placeholders?
*   [ ] **Prevention of Viewport Shifting**: Is the base input text size locked strictly to `1.000rem` (`16px`) to prevent native iOS mobile browsers from zooming or scaling the layout on focus?
*   [ ] **Clear Focus Feedback**: On-focus, does the bottom border line transition smoothly to signature Champagne Bronze, accompanied by an adjacent uppercase label: `[ ACTIVE COORDINATE ]`?

---

## 7. Kinetic & Motion Audit Checklist (Weight: 0.75)
Motion must behave with natural physics, mass, and inertia:

*   [ ] **Kinetic Timings Scale**: Are motion durations locked strictly to our three custom tokens: `150ms` (Crisp), `350ms` (Damped), and `450ms` (Slow)? (Bouncy, elastic, or hyper-fast transitions are strictly banned).
*   [ ] **The Slide Arrow (`→`) Reveal**: Hovering over interactive CTAs and creator cards triggers a Champagne Bronze arrow sliding exactly `4px` from left to right over `350ms` before coming to a dead, precise rest.
*   [ ] **No Text Marquees**: Are text elements entirely static, avoiding rapid flashing, carousel rolling, or character marquees?
*   [ ] **Smooth Scroll Fading**: Are fading masks desaturated and high-damping, transitioning softly from solid Deep Obsidian to transparent canvas layers?
*   [ ] **Slow Skeleton Pulse Wave**: Do loading shimmer placeholders pulse cleanly at a slow, highly-damped timing of **2000ms** per cycle?

---

## 8. WCAG 2.2 Accessibility Audit Checklist (Weight: 1.25)
Our digital portal is designed to be universally accessible, respectful, and considerate:

*   [ ] **Skip-to-Content Navigation**: Does a minimal skip-to-content link styled in JetBrains Mono (`href="#main-content"`) reside at the absolute top of the DOM, revealing itself upon the first keyboard `Tab` input?
*   [ ] **Sequential Tab Order**: Can keyboard users navigate the entire interface using only `Tab` keys in a logical, visual order?
*   [ ] **Modal Focus Trap**: When navigation menus or booking drawers are active, is keyboard focus securely trapped inside the container, looping back to the top and deactivating via the `Escape` key?
*   [ ] **Reduced Motion Safeguards**: When `prefers-reduced-motion: reduce` is detected, are all translations and scales disabled, replaced by clean opacity fades (≤ `150ms`)?
*   [ ] **Explicit ARIA Roles**: Do custom interactive elements declare valid semantic ARIA attributes (e.g., `role="tablist"`, `aria-expanded`, `aria-describedby`)?
*   [ ] **Aria-Labels for Glyphs**: Do pure icon buttons contain explicit `aria-label` tags, and do decorative icons declare `aria-hidden="true"`?
*   [ ] **Non-Visual Ledger Tables**: Are coordinate graphs and line charts accompanied by an adjacent, programmatically bound tabular ledger styled with our `sr-only` class?
*   [ ] **No Color-Only Indicators**: Are system validation states accompanied by clear alphanumeric status codes or text errors in addition to visual color borders?
*   [ ] **Touch Target Safety**: Do all interactive tap points maintain a minimum bounding tap area of **44px x 44px** on mobile viewports?

---

## 9. Token Consistency Audit Checklist (Weight: 1.00)
We reject hardcoded values and custom styles:

*   [ ] **CSS Variable Mapping**: Are all visual styles and layout bounds derived directly from our central CSS variables declared inside `:root`?
*   [ ] **Zero Raw Hex Codes**: Is the CSS/JS code entirely free of raw hex strings and default Tailwind palettes, utilizing only standard VMN token classes (`bg-vmn-obsidian`, `border-vmn-gray`, `text-vmn-primary`)?
*   [ ] **Modular Sizing Scale**: Do typographic sizes conform strictly to the modular Minor Third Scale, mapping to our standard text utilities (`text-xs` to `text-7xl`)?
*   [ ] **Zero Radius Enforcement**: Are all container classes styled with `rounded-none`, avoiding custom rounded borders?
*   [ ] **Icon Stroke Weights**: Do all custom SVG glyphs declare uniform stroke weights (strictly `1.25px` or `1.5px`) and outline-only paths (`fill="none"`), avoiding filled vectors?

---

## 10. Performance & Loading Audit Checklist (Weight: 0.75)
Elite visual design must deliver instantaneous loading:

*   [ ] **Web Font Loading Strategy**: Are our core Google Fonts (Space Grotesk, Inter, JetBrains Mono) preloaded with standard `font-display: swap` instructions inside the HTML header, preventing visual font flickering (FOUT)?
*   [ ] **Sub-150ms First Contentful Paint (FCP)**: Does the primary viewport load its core text assets and structural grid lines within 150ms of network connection?
*   [ ] **Lazy Initialized SDKs**: Are external APIs and analytics SDKs lazy-loaded only when requested, keeping the dev server from stalling or locking?
*   [ ] **Image Optimization**: Are visual portraits and video frames properly sized, compressed into modern formats (`WebP` or `AVIF`), and styled with standard `loading="lazy"` properties?
*   [ ] **Minimal JS Execution Payload**: Is the Javascript execution payload minimized, avoiding heavy libraries that cause main-thread rendering lag?

---

## 11. Brand Alignment Audit Checklist (Weight: 0.50)
Every component must represent the core creative principles of Valtreon Media Network:

*   [ ] **Quiet Luxury Tone**: Is the content written with clinical, professional authority, avoiding generic, hype-filled sales jargon ("supercharge", "empower", "unlock")?
*   [ ] **Zero-Radius Consistency**: Does every container line, button boundary, and image card enforce sharp, geometric edges, resisting soft startup templates?
*   [ ] **The Symmetrical Axis**: Is the asymmetric layout balanced horizontally across a central axis line, preventing structural drift?
*   [ ] **No Commercial Gimmicks**: Is the portal entirely free of noisy pop-up newsletters, floating support widgets, animated confetti loops, or unrequested chat boxes?
*   [ ] **Bespoke Alliance Philosophy**: Does the copywriting emphasize the elite co-production co-productions signed by VMN, honoring the creative board's strict vetting process?

---

## 12. Premium Materiality Audit Checklist (Weight: 0.75)
Our digital surfaces must feel like physical luxury objects:

*   [ ] **The Deep Obsidian Stage**: Is the canvas foundation anchored strictly in Deep Obsidian (`#080809`) rather than pure raw black (`#000000`), absorbing screen glare?
*   [ ] **Sub-Pixel Anti-Aliasing**: Do text elements declare proper anti-aliasing styles (`-webkit-font-smoothing: antialiased`) to remain perfectly crisp on OLED screens?
*   [ ] **Glassmorphic Panels**: Do elevated menus and select dropdowns implement high-end glass blur (`backdrop-blur-md`) and dark matte fills (`bg-zinc-950/80`), resembling sandblasted crystal panels?
*   [ ] **No Multi-Colored Gradients**: Are visual components completely free of neon, multi-colored gradients, using only high-damping fades to transition layout layers?
*   [ ] **Monoline SVG Iconography**: Are graphic arrows and sector indicators styled strictly in uniform, monoline vector strokes (≤ `1.5px`), avoiding filled icons?

---

## Scoring Scorecard

Use the score sheet below to calculate the final **DFS** for any audited page layout or frontend component:

| Vector Audited | Score (0.0 to 10.0) | System Weight | Weighted Score |
| :--- | :---: | :---: | :---: |
| **1. Typography Standards** | | `1.25` | |
| **2. Spatial Grid & Spacing** | | `1.25` | |
| **3. Contrast & Hierarchy** | | `1.25` | |
| **4. Tactical Buttons** | | `0.75` | |
| **5. Bento Card Form-Factor** | | `0.75` | |
| **6. Form Intake Fields** | | `0.75` | |
| **7. Kinetic & Motion** | | `0.75` | |
| **8. WCAG 2.2 Accessibility** | | `1.25` | |
| **9. Token Consistency** | | `1.00` | |
| **10. Performance & Loading** | | `0.75` | |
| **11. Brand Alignment** | | `0.50` | |
| **12. Premium Materiality** | | `0.75` | |
| **FINAL DESIGN FIDELITY SCORE** | | **`DFS`** | **`0.0 - 100.0`** |

---

## Final QA-Compliance Verification Audit

Prior to committing any component updates, the development team must verify compliance against this five-point visual audit checklist. A single failed parameter acts as a release blocker:

* [ ] Has the component or viewport successfully scored a **DFS ≥ 90.0** on the weighted scoring scorecard?
* [ ] Are all base canvas layers designed strictly in Deep Obsidian (`#080809`) or Dark Slate (`#0E0E11`) with zero-radius corners (`rounded-none`)?
* [ ] Are all typography sizes, layout spaces, margins, and transition curves derived directly from our central custom token properties?
* [ ] Is the entire interface silent—completely free of unrequested persistent chatbot overlays, floating social bars, and commercial ad blocks?
* [ ] Does every single component designed for the VMN platform carry a unique, clean, and semantic DOM `id` attribute for precise tracking?
