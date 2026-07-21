# Master Interaction Rules & UI State Specification: Valtreon Media Network (VMN)
*Authored by: Director of Interaction Design, Chief UX Architect & Principal UI Systems Engineer*  
*Classification: Permanent Enterprise Design Standards & Interaction Contract (SOT)*  
*Design Paradigm: Swiss Rationalism meets Technical Precision (WCAG 2.2 AA/AAA Compliant)*

---

## Declaration of Interaction Sovereignty

This specification establishes the permanent, uncompromised **Interaction Rules and UI State Behaviors** for every digital component on the Valtreon Media Network (VMN) platform.

At Valtreon, we reject superficial decoration and inconsistent behavioral patterns. We treat user interaction as a **dialogue of mathematical precision**. Every hover state, focus ring, tactile click, loading shimmer, and validation error must behave with perfect predictability across all viewports. By establishing rigorous rules for every interactive element and state, we ensure that the VMN platform functions like an engineered physical instrument—reliable, highly responsive, and universally accessible.

Every current and future component developed for the VMN design system **MUST** comply strictly with the parameters, timings, and visual rules defined herein.

---

## Core Interaction States (The Universal Behaviors)

Across all interactive UI components, the six primary state transitions must enforce consistent behavioral rules:

```
[ DEFAULT STATE ] ────────> Hover / Pointer ────────> [ HOVER STATE ]
                         (300ms Damped Fade)
                         
[ DEFAULT STATE ] ────────> Keyboard Tab ───────────> [ FOCUS STATE ]
                         (Instant Inscription)
                         
[ HOVER / FOCUS ] ────────> Click / Actuation ──────> [ ACTIVE STATE ]
                         (100ms - 150ms Crisp)
```

1.  **Hover State**: Driven by our **Hover Curve** (`cubic-bezier(0.25, 1, 0.5, 1)`). Hover states must use smooth color transformations, subtle border highlights, and precise kinetic shifts over exactly **`300ms`**. Bouncy, elastic scaling is strictly prohibited.
2.  **Focus State**: Keyboard focus must be highly visible without relying on browser defaults. Focus ring highlights utilize solid Champagne Bronze (`#9C8465`) borders, accompanied by an adjacent uppercase label set in JetBrains Mono: `[ COORDINATE_ACTIVE ]` or `[ FOCUS ]` to anchor the navigation coordinates.
3.  **Active State**: The physical click confirmation. Elements must scale down slightly to `scale-[0.99]` or translate downward by a sub-pixel offset over a fast, crisp timeline (**`100ms to 150ms`**) to provide tactile feedback and mechanical resistance.
4.  **Disabled State**: Components in a disabled state must be visually desaturated (opacity set strictly to `40%`), with their pointer events completely disabled (`pointer-events-none`). They must be skipped entirely during keyboard `Tab` sequential focus.
5.  **Loading State**: Indicated by a slow, high-damping monochrome shimmer or pulse wave executing at a frequency of exactly **`2000ms` per cycle**. Shimmer elements must carry `aria-busy="true"` tags to notify screen readers.
6.  **Error State**: Triggered by failed validation gates. Represented by solid Champagne Bronze (`#9C8465`) error perimeters, accompanied by a monospace status error code set in JetBrains Mono: `[ ERROR: ENTRY_INVALID ]`. Pure bright red is strictly banned.
7.  **Success State**: Triggered by successful validation gates or completed form submissions. Denoted by clean, subtle green accents (`#10B981` or equivalent desaturated green) accompanied by a monospace confirmation tag: `[ STATUS: COMPLETED ]`.

---

## Component Interaction Registry

---

### 1. Buttons (The Tactical Triggers)
*   **Default State**: Sharp, uncompromised corners (`rounded-none`). Outlined or filled with high-contrast desaturated colors. Text set in uppercase JetBrains Mono, enclosed inside bracketed visual frames: `[ CTA ACTION ]`.
*   **Hover State**: The background transitions smoothly to solid Champagne Bronze (`#9C8465`), while the text color inverts instantly to Deep Obsidian (`#080809`). The right bracket/arrow symbol (`→`) slides exactly `4px` from left to right over `350ms` using `vmn-motion-ease-damped`.
*   **Focus State**: Border highlights cleanly to Champagne Bronze. An adjacent, unmoving coordinate label is revealed: `[ FOCUS ]`.
*   **Active State**: Scales down to `scale-[0.98]` over `100ms` using `vmn-motion-ease-crisp`, providing mechanical feedback.
*   **Disabled State**: Opacity reduced to `40%`. Background desaturated to dark charcoal.
*   **Loading State**: Text is replaced by a slow, desaturated pulsing message: `[ SYNCHRONIZING... ]`.

---

### 2. Cards (The Structural Stages)
*   **Default State**: Sharp corners (`rounded-none`), outlined with a single-pixel Gray border (`#1D1D22` / `border-zinc-800`). Flat, shadowless depth.
*   **Hover State**: The card perimeters transition to light zinc (`border-zinc-600`), and the entire card container glides upward by exactly `4px` (`-translate-y-1`) over `350ms` using `vmn-motion-ease-damped`.
*   **Focus State**: Focus is anchored on the card's primary action button or link, highlighting the card perimeter to Champagne Bronze and revealing an adjacent label: `[ ACTIVE_SURFACE ]`.
*   **Active State**: Sub-pixel vertical compression (`translate-y-0.5`) over `150ms`.
*   **Disabled / Loading State**: Unused on basic layout cards.

---

### 3. Creator Cards (The Portfolio Stages)
*   **Default State**: Sharp corners (`rounded-none`). Image media is desaturated and constrained to cinematic aspect ratios (`21:9` or `16:9`).
*   **Hover State**: The image exposure sweeps from desaturated to natural contrast (`filter: saturate(1) brightness(1.0)`), and the card perimeters expand cleanly. The creator’s name slides up from beneath an invisible horizontal clipping plane over `600ms`.
*   **Focus State**: Anchors focus cleanly to the creator profile link, drawing a solid border highlight.
*   **Active State**: Fast `150ms` scale down to `scale-[0.99]`.
*   **Disabled / Loading State**: Displays a highly damped loading shimmer pulsing at `2000ms` per cycle.

---

### 4. Metrics & Statistics (The Alphanumeric Ledgers)
*   **Default State**: Stats set in Space Grotesk (numbers) and JetBrains Mono (labels), colored in Alabaster Mist (`#EAEAEF`).
*   **Hover State**: The metric label shifts desaturation levels, and the adjacent coordinate tag highlights to Champagne Bronze.
*   **Focus State**: Non-interactive by default. If interactive, highlights border perimeters cleanly.
*   **Active State**: Upon scroll entry, the alphanumeric digits rotate rapidly through values (Character Decrypt) before locking onto their precise final metrics over `1500ms`.
*   **Disabled / Loading State**: Bypasses the rotate calculation, displaying the terminal statistic instantly.

---

### 5. Charts & Quantitative Graphs (The Visual Ledgers)
*   **Default State**: SVG coordinate lines and data series set in high-contrast desaturated colors. Data nodes are marked with distinct geometric points (circles, squares, dashes) rather than color alone.
*   **Hover State**: Hovering over a data node triggers an instant tooltip reveal after a `150ms` reading delay, displaying raw values in JetBrains Mono: `[ VALUE // 84.2M ]`.
*   **Focus State**: Nodes must be keyboard navigable (`Tab`). Activating a node via keyboard focus highlights its perimeter and displays the corresponding tooltip instantly.
*   **Active State**: Clicking a node locks the tooltip in place until another node is selected or clicked.
*   **Disabled / Loading State**: Graphs are accompanied by an adjacent, programmatically bound tabular data ledger styled with `sr-only` for screen readers.

---

### 6. Forms & Section Layouts (The Intake Gates)
*   **Default State**: Fields aligned vertically down our asymmetric columns, separated by strict multiples of our 8px spacing grid.
*   **Hover / Active States**: Governed by individual input behaviors.
*   **Focus State**: Sequential Tab flow must proceed left-to-right, top-to-bottom.
*   **Success / Error States**: Handled programmatically via live status banners at the top of the form section, announced via `aria-live="polite"`.

---

### 7. Inputs & Text Fields (The Entry Coordinates)
*   **Default State**: Flat, bottom-bordered entry rows displaying single-pixel Gray highlights (`#1D1D22`). Monospace labels positioned exactly above the field.
*   **Hover State**: Bottom border highlights to desaturated zinc (`border-zinc-600`).
*   **Focus State**: The bottom line transitions cleanly to Champagne Bronze (`#9C8465`), and the monospace label slides upward exactly `6px` while shifting color. An adjacent label reveals: `[ ACTIVE ENTRY COORDINATE ]`.
*   **Active State**: Input text size locked strictly to `16px` (`1.000rem`) to prevent native iOS browser zoom on focus.
*   **Disabled State**: Input field is greyed out (opacity `40%`) with `pointer-events-none`.
*   **Error State**: Bottom border highlights to solid Champagne Bronze (`#9C8465`), and an uppercase error code is revealed beneath: `[ ERROR: INVALID_EMAIL_FORMAT ]`.

---

### 8. Search Inputs (The Database Gateways)
*   **Default State**: Single-line bottom-bordered input row containing a monoline search magnifying glass icon (`stroke-width="1.25"`).
*   **Hover State**: Highlights border to light zinc.
*   **Focus State**: Bottom border transitions to Champagne Bronze. A small, uppercase helper tag is revealed on the right: `[ ESC_TO_CLEAR ]`.
*   **Active State**: Displays search results dynamically in a dropdown panel below, matching our bento grid layouts.
*   **Disabled / Loading State**: While querying, the magnifying glass icon is replaced by a slow, pulsing monospace tag: `[ SEARCHING... ]`.

---

### 9. Dropdowns & Select Menus (The Panel Overlays)
*   **Default State**: High-contrast, closed selective boxes with a small downward monoline chevron.
*   **Hover State**: Chevron shifts color to Alabaster Mist.
*   **Focus State**: Highlights border cleanly to Champagne Bronze.
*   **Active State**: The select menu opens smoothly downward over `350ms` using `vmn-motion-ease-damped`, displaying options inside a glassmorphic panel overlay (`backdrop-blur-md bg-zinc-950/80`). chevrons rotate `180deg`.
*   **Disabled State**: Options are desaturated and unselectable.

---

### 10. Navigation (The Global Horizon)
*   **Default State**: Floats at the absolute top of the viewport. Text links set in uppercase JetBrains Mono, desaturated to Tertiary Steel Sage (`#52525B`).
*   **Hover State**: Links transition instantly to Alabaster Mist (`#EAEAEF`) with zero delay, providing immediate, clean feedback without layout shifting.
*   **Focus State**: Displays a clean, highlighted bottom border line instantly.
*   **Active State**: Scroll descent blurs the navigation background smoothly using `backdrop-blur-md bg-zinc-950/80`.
*   **Disabled / Loading State**: Navigation links remain fully interactive.

---

### 11. Footers (The Terminal Ledgers)
*   **Default State**: Anchors the terminal base of our pages, displaying legal terms, copyright records, and network coordinates set in fine monospace text.
*   **Hover State**: Footnote links fade-in to light zinc on hover.
*   **Focus / Active States**: Follow standard text link behaviors.
*   **Disabled / Loading State**: Completely static.

---

### 12. Timeline & Milestones (The Chronology Rails)
*   **Default State**: A single-pixel vertical vertical line (`#1D1D22`) connecting chronological nodes.
*   **Hover State**: Hovering over a timeline node reveals adjacent metadata (e.g., campaign dates, signed briefs) using a subtle `300ms` fade.
*   **Focus State**: Nodes must receive sequential focus, highlighting cleanly.
*   **Active State**: Activating a node expands its description card below over `450ms` using `vmn-motion-ease-damped`.
*   **Disabled / Loading State**: Unused.

---

### 13. Accordions (The Structural Folds)
*   **Default State**: High-contrast, closed sections with a horizontal Gray divider line and a small monoline chevron.
*   **Hover State**: The heading text color highlights to Alabaster Mist.
*   **Focus State**: Highlights border perimeters to Champagne Bronze.
*   **Active State**: Clicking expands the panel vertically to reveal content over `450ms` using `vmn-motion-ease-damped` (`cubic-bezier(0.25, 1, 0.5, 1)`). The chevron rotates `180deg` smoothly.
*   **Disabled / Loading State**: Bypassed under reduced motion, rendering content instantly with zero rotation.

---

### 14. Tabs (The Viewport Toggles)
*   **Default State**: Horizontal row of tab titles set in JetBrains Mono. Unselected tabs colored in Steel Sage.
*   **Hover State**: Tab text transitions smoothly to zinc.
*   **Focus State**: Displays a clean border highlight instantly.
*   **Active State**: Clicking a tab switches active panels immediately using a fast `150ms` opacity-only cross-fade, completely avoiding horizontal sliding layout shifts.
*   **Disabled State**: Disabled tabs are desaturated and unselectable.

---

### 15. Filters (The Categorization Bars)
*   **Default State**: Category filters styled as small uppercase pills or tags. Unselected tags are desaturated with fine perimeters.
*   **Hover State**: Filter tag background shifts smoothly to solid charcoal, highlighting text.
*   **Focus State**: Displays border highlights cleanly.
*   **Active State**: Activating a filter tags the grid instantly, triggering selected cards to reorganize using compositor-level opacity and scale fades over `350ms`.
*   **Disabled State**: Greyed out with zero pointer events.

---

### 16. Pagination (The Page Controls)
*   **Default State**: Sequential page numbers and arrows set in JetBrains Mono.
*   **Hover State**: Page coordinates shift smoothly to light zinc on hover.
*   **Focus State**: Displays standard highlighted borders cleanly.
*   **Active State**: Swaps pages cleanly, returning viewport focus automatically to the top of the bento grid section.
*   **Disabled State**: Arrows are desaturated when reaching terminal pages.

---

## Interaction-Consistency Verification Audit

Prior to approving any component layout or visual interaction for VMN, the development team must verify compliance against this five-point visual audit checklist. A single failed parameter acts as a release blocker:

* [ ] Do all interactive controls feature explicit, high-contrast, custom visual focus states?
* [ ] Are all transition animations, hover curves, and active scale-downs completely free of bounce or elastic recoil?
* [ ] Are all spatial translations, layout zooms, and hover parallax movements completely wrapped in `prefers-reduced-motion: reduce` safe overrides?
* [ ] Is the entire interface silent—completely free of unrequested popup dialogs, auto-scrolling, or background flashing?
* [ ] Does every single interactive element designed for the VMN platform carry a unique, clean, and semantic DOM `id` attribute for tracking?
