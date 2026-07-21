# Master Reusable Component Standards Specification: Valtreon Media Network (VMN)
*Authored by: Director of Design, Principal UX Architect & Principal Frontend Engineer*  
*Classification: Permanent Architectural Component Standards & Core Design SOT*  
*Design Paradigm: Swiss Rationalism meets Immersive Cinematic Editorial (Pentagram & Collins Standard)*

---

## Declaration of Component Governance

This specification defines the permanent, uncompromised **Reusable Component Standards** for the Valtreon Media Network (VMN) platform. 

In a digital landscape filled with fragmented patterns, generic UI kits, and visual over-saturation, Valtreon stands as **The Architecture of Silence**. We treat interface components as physical, structural assets. Every component must behave with mathematical precision, uncompromised linear discipline, and tactile materiality. We reject commercial bubble corners, neon glowing outlines, bouncy motion curves, and standard transactional copy.

Every digital page, interface viewport, dashboard grid, and co-production portal developed for VMN **MUST** strictly reference the specifications, spatial dimensions, interactive laws, accessibility protocols, and design rules defined herein.

---

## Component Index & Spatial Specifications

---

### 1. Buttons (The Tactical Triggers)
*   **Purpose**: To serve as the primary interactive triggers for tactical navigation coordinates and enterprise-level actions.
*   **Hierarchy**: 
    *   *Primary Action*: Signature Champagne Bronze (`#9C8465`) border outline with transparent center.
    *   *Secondary Action*: Muted Zinc (`#A1A1AA` / `border-zinc-800`) border outline.
    *   *Tertiary Link*: Text only inside bracketed monospace formatting.
*   **Spacing**: 
    *   *Horizontal Padding*: Exactly `24px` (`px-6`).
    *   *Vertical Padding*: Exactly `12px` (`py-3`).
    *   *Inner Icon Gap*: Exactly `8px` (`gap-2`).
*   **Behaviour**: Acts with immediate physical resistance. On-click, scales down slightly to `scale-[0.99]` over `150ms`.
*   **Accessibility**: Must utilize native `<button>` or `<a role="button">` tags. Inactive buttons must declare `aria-disabled="true"` with pointer events entirely disabled (`pointer-events-none`).
*   **Hover**: Background fills smoothly to solid Champagne Bronze (`#9C8465`) or Alabaster Mist (`#EAEAEF`), while typography shifts to Deep Obsidian (`#080809`). Simultaneously, the button lifts slightly (`scale-[1.015]`) over `350ms` high-damping spring kinetics.
*   **Focus**: Suppresses native browser outlines. Tab focus shifts the border outline color smoothly to signature Champagne Bronze (`#9C8465`), accompanied by an adjacent, floating monospace indicator: `[ FOCUS ]` set in JetBrains Mono.
*   **Responsive Behaviour**: Maintains fixed desktop scale (`text-sm / 14px`) on tablet and desktop. Collapses into full-width block structures on mobile viewports (`< 768px`), wrapping the text cleanly on a single line.
*   **Design Rules**: Strictly sharp, zero-radius corners (`rounded-none`). Typography must be formatted in uppercase JetBrains Mono. Must carry a unique tracking ID: `id="btn-[action-name]"`.

---

### 2. Inputs (The Selective Entry Gates)
*   **Purpose**: Form text-intake fields that capture corporate emails, brand URLs, and brief partnership intent.
*   **Hierarchy**: Styled as standard, bottom-bordered entry zones that sit flat on our secondary backgrounds.
*   **Spacing**:
    *   *Vertical Padding*: Exactly `16px` (`py-4`).
    *   *Horizontal Margin*: Zero. Elements span the full width of their grid column bounds.
*   **Behaviour**: Focused fields smoothly slide their placeholder labels upward, reducing their font scale to `text-xs` while the bottom border highlights gracefully.
*   **Accessibility**: Every input field MUST link directly to a hidden label via matching `id` and `htmlFor` attributes to support screen reader mapping.
*   **Hover**: Shifting the cursor over the field transitions the bottom border softly from Gray (`#1D1D22`) to Iron Wire (`#27272A`).
*   **Focus**: Suppresses default browser outlines. Focused inputs transition their bottom border line smoothly to signature Champagne Bronze (`#9C8465`), accompanied by a highly subtle, desaturated ambient light glow behind the field (opacity ≤ `2%`).
*   **Responsive Behaviour**: Base font size locked strictly to `1.000rem` (`16px`) across all viewports. This prevents native iOS browser zoom overlays upon focus activation.
*   **Design Rules**: Single-pixel bottom borders only. Zero-radius corners (`rounded-none`). No background fills in inactive states. Must carry a unique tracking ID: `id="input-[field-name]"`.

---

### 3. Cards (The Modular Stages)
*   **Purpose**: To serve as the primary geometric containers housing our editorial copy, creator roster metrics, and widescreen visual media.
*   **Hierarchy**: 
    *   *Standard Card*: Single-pixel Gray (`#1D1D22`) borders sitting flat on the background canvas.
    *   *Elevated Card*: Brushed Steel (`#1A1A20`) background container.
*   **Spacing**: Standard internal card padding is exactly `32px` (`p-8`). Micro cards use `24px` (`p-6`).
*   **Behaviour**: Functions as a structural stage. The entire card bounds represent an interactive click zone when linked to custom media co-productions.
*   **Accessibility**: Cards containing links must wrap their primary headings inside target anchor points. Card content must use semantic elements (`<article>`).
*   **Hover**: Elevates the card container upward imperceptibly (`scale-[1.015]`) over a `350ms` structural reveal. Horizontal card borders highlight smoothly.
*   **Focus**: Focused cards highlight their entire border coordinate to Iron Wire (`#27272A`).
*   **Responsive Behaviour**: Cards scale fluidly with the 12-column Swiss grid, collapsing cleanly into stacked vertical blocks on mobile screens.
*   **Design Rules**: Strictly sharp, zero-radius corners (`rounded-none`). No nested cards (cards inside cards) or soft drop shadows are permitted. Must carry a unique tracking ID: `id="card-[item-name]"`.

---

### 4. Navigation (The Horizon Link Row)
*   **Purpose**: The global navigation row anchored at the absolute top of the page viewport.
*   **Hierarchy**: Positioned at the highest layout index (`z-50`), spanning the full visual width of the desktop screen.
*   **Spacing**: 
    *   *Height*: Exactly `80px` (`h-20`).
    *   *Inner Horizontal Padding*: Exactly `32px` (`px-8`) on desktop viewports.
*   **Behaviour**: Floats quietly on the layout horizon. Uses a slow background fade (`backdrop-blur-md bg-zinc-950/80`) on vertical page scroll.
*   **Accessibility**: Bounded inside a semantic `<header>` wrapper, containing `<nav>` landmarks. Menu list items must utilize standard semantic `<ul>` and `<li>` elements.
*   **Hover**: Navigation links transition softly from Muted Zinc (`#A1A1AA`) to Alabaster Mist (`#EAEAEF`). Simultaneously, a single-pixel Champagne Bronze dot (`#9C8465`) slides gracefully from the left to rest adjacent to the typography.
*   **Focus**: Active focused navigation tabs draw a subtle, single-pixel horizontal highlight line directly below the text.
*   **Responsive Behaviour**: On mobile viewports (`< 768px`), horizontal links collapse entirely into a minimalist, three-line menu icon that triggers a full-screen, high-end vertical sliding drawer menu.
*   **Design Rules**: Minimalist logo (VALTREON) on the left, active coordinates on the right. Styled strictly in uppercase JetBrains Mono typography. Must carry a unique tracking ID: `id="nav-global-header"`.

---

### 5. Footer (The Base Ledger Block)
*   **Purpose**: The terminal baseline container summarizing corporate credits, legal directories, and platform index coordinates.
*   **Hierarchy**: Anchored at the absolute bottom of the DOM tree, sitting flat on our secondary Dark Slate background.
*   **Spacing**: 
    *   *Vertical Padding*: Exactly `96px` (`py-24`) to preserve massive negative space margins.
    *   *Column Gaps*: Exactly `32px` (`gap-8`).
*   **Behaviour**: Completely static. Behaves like a financial ledger index.
*   **Accessibility**: Mapped inside a semantic `<footer>` landmark. Includes hidden structural headers to bypass footer menus.
*   **Hover**: Links transition softly from Steel Sage (`#52525B`) to Muted Zinc (`#A1A1AA`).
*   **Focus**: Focused footer links reveal thin underline highlights.
*   **Responsive Behaviour**: Desktop 4-column layouts collapse cleanly into structured, single-column vertical scrolls on mobile.
*   **Design Rules**: Styled strictly in Tertiary Steel Sage (`#52525B`) and JetBrains Mono. Includes VMN’s core copyright declarations and structural coordinates. Must carry a unique tracking ID: `id="footer-global"`.

---

### 6. Accordion (Structured Disclosures)
*   **Purpose**: To organize secondary detail lists or legal specifications under clean, vertical disclosure tabs.
*   **Hierarchy**: Stacked vertically, separated by single-pixel horizontal Gray (`#1D1D22`) divider lines.
*   **Spacing**: 
    *   *Vertical Padding per Row*: Exactly `24px` (`py-6`).
    *   *Inner Content Padding*: Exactly `24px` (`pb-6` / `pt-2`).
*   **Behaviour**: Smooth vertical slide-open transition. Active sections reveal content slowly over `350ms` using high-damping physical curves.
*   **Accessibility**: Header triggers must declare `aria-expanded="false" / "true"` and match with `aria-controls` targets.
*   **Hover**: Hovering over a row highlights the row title softly from Muted Zinc (`#A1A1AA`) to Alabaster Mist (`#EAEAEF`).
*   **Focus**: Tab focus draws a thin border highlight across the row boundary.
*   **Responsive Behaviour**: Fluid width adaptation across all screens.
*   **Design Rules**: Accordion triggers feature a custom, monoline chevron icon on the far right that rotates exactly `180 degrees` on activation. Must carry a unique tracking ID: `id="accordion-[section-name]"`.

---

### 7. FAQ (The Curatorial Inquiries)
*   **Purpose**: A highly structured section answering key executive questions regarding campaign co-production, vetting, and audience demographics.
*   **Hierarchy**: Positioned in the middle of our storytelling timeline, styled as a series of border-separated Accordions.
*   **Spacing**: Bounded inside vertical margins of `96px` (`py-24`) to isolate the inquiry grid from surrounding media.
*   **Behaviour**: Uses an asymmetric, two-column grid split. Left column contains section metadata; right column contains FAQ disclosure items.
*   **Accessibility**: Complies with disclosure pattern specifications, mapping header triggers to semantically valid button elements.
*   **Hover**: Row backgrounds shift softly to very low-opacity zinc (≤ `1.5%` fill).
*   **Focus**: Custom focus borders highlight smoothly.
*   **Responsive Behaviour**: Collapses cleanly to single-column blocks on mobile screens.
*   **Design Rules**: Written with quiet, professional authority. Question headers use Space Grotesk (`text-xl`); detail prose uses Inter (`text-base`). Must carry a unique tracking ID: `id="faq-section"`.

---

### 8. Tabs (Asymmetrical Selectors)
*   **Purpose**: Horizontal selectors that switch viewports between related categories, such as creator disciplines or campaign catalogs.
*   **Hierarchy**: Aligned horizontally above main grid displays.
*   **Spacing**: 
    *   *Inner Tab Padding*: Exactly `16px` (`px-4 py-2`).
    *   *Horizontal Gap between Tabs*: Exactly `16px` (`gap-4`).
*   **Behaviour**: Immediate, non-blocking viewport state changes. 
*   **Accessibility**: Bounded inside a semantic `<div role="tablist">` wrapper. Each tab must declare `role="tab"` and `aria-selected="true" / "false"`.
*   **Hover**: Hovering shifts text color softly to Alabaster Mist (`#EAEAEF`).
*   **Focus**: Tab focus draws a clean bottom border highlight.
*   **Responsive Behaviour**: Horizontal scroll containers with comfortable touch damping on mobile viewports.
*   **Design Rules**: Styled in uppercase JetBrains Mono typography. Active tabs draw a single-pixel horizontal indicator line below the text in Champagne Bronze (`#9C8465`). Must carry a unique tracking ID: `id="tabs-[menu-name]"`.

---

### 9. Filters (Grid Calibration Dials)
*   **Purpose**: Precision controls that let corporate partners sort campaign case studies or filter the signed creator roster.
*   **Hierarchy**: Grouped cleanly below section headers, styled as inline text selectors.
*   **Spacing**: Mapped to standard vertical paddings of `16px` (`py-4`).
*   **Behaviour**: Activates instant, client-side grid sorting over a soft `200ms` desaturation fade.
*   **Accessibility**: Triggers must maintain a minimum touch target area of `44px x 44px` on mobile screens.
*   **Hover**: Shifting the cursor over filter titles reveals our signature Champagne Bronze dot sliding gracefully into view.
*   **Focus**: Draws custom focus highlights.
*   **Responsive Behaviour**: Collapses into a horizontal swiping strip on mobile screens.
*   **Design Rules**: Styled in uppercase JetBrains Mono. Active filters are highlighted in Champagne Bronze (`#9C8465`). Must carry a unique tracking ID: `id="filters-[catalog-name]"`.

---

### 10. Dropdowns (The Glass Matte Selectors)
*   **Purpose**: Elevated option panels displaying auxiliary form lists or coordinate parameters.
*   **Hierarchy**: Rests above standard surfaces at layout coordinate `z-40`.
*   **Spacing**: 
    *   *Panel Padding*: Exactly `16px` (`p-4`).
    *   *Item Padding*: Exactly `8px` (`p-2`).
*   **Behaviour**: Opens a clean option layer with high-end glass blur (`backdrop-blur-md`) and a dark matte fill (`bg-zinc-950/90`).
*   **Accessibility**: Bounded inside a semantic select wrapper with explicit ARIA keyboard navigational support.
*   **Hover**: Option list items shift to low-opacity zinc (≤ `2%` fill).
*   **Focus**: Highlights active coordinates.
*   **Responsive Behaviour**: Fluid width scaling. Collapses into full-screen option sheets on mobile viewports.
*   **Design Rules**: Bounded by a single-pixel Iron Wire (`#27272A`) border with sharp, zero-radius corners (`rounded-none`). Must carry a unique tracking ID: `id="dropdown-[field-name]"`.

---

### 11. Search (The Archive Query Field)
*   **Purpose**: An input field allowing executive visitors to query the represented creator roster or campaign archives.
*   **Hierarchy**: Positioned at the top of filter columns or catalogs.
*   **Spacing**: Standard vertical input padding of `16px` (`py-4`).
*   **Behaviour**: Activates live database queries, displaying filtered results over a soft `200ms` desaturation fade.
*   **Accessibility**: Must declare explicit `role="search"` and aria-describedby markers.
*   **Hover**: Input boundaries transition softly from Gray to Iron Wire.
*   **Focus**: Highlights bottom borders to Champagne Bronze, displaying an adjacent monospace focus tag.
*   **Responsive Behaviour**: Locked to standard font sizing to prevent iOS zoom shifts.
*   **Design Rules**: Bypasses rounded text capsules. Features a custom, monoline search glyph (`1.25px` stroke) on the far right. Must carry a unique tracking ID: `id="search-archive-input"`.

---

### 12. Tables (The Financial Ledger Matrix)
*   **Purpose**: To present quantitative performance metrics, campaign budgets, and creator statistics with absolute system authority.
*   **Hierarchy**: Standard ledger-style layout bounded by single-pixel horizontal dividers.
*   **Spacing**: 
    *   *Cell Vertical Padding*: Exactly `16px` (`py-4`).
    *   *Cell Horizontal Padding*: Exactly `24px` (`px-6`).
*   **Behaviour**: Completely static. Columns organize data cleanly.
*   **Accessibility**: Requires semantic tags (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` with explicit `scope="col"` or `scope="row"`).
*   **Hover**: Row hover shifts the background softly to very low-opacity zinc (`bg-zinc-900/10`).
*   **Focus**: Focused table coordinates highlight their surrounding borders.
*   **Responsive Behaviour**: Tables collapse cleanly into structured, single-column vertical scrolls on small mobile viewports.
*   **Design Rules**: Row values are separated by single-pixel Gray borders (`#1D1D22`). Column headers are styled in uppercase JetBrains Mono (`text-xs tracking-widest uppercase`). Must carry a unique tracking ID: `id="ledger-table-[data-type]"`.

---

### 13. Charts (The Trend Coordinate Graphs)
*   **Purpose**: High-fidelity line graphs and demographic charts providing immediate quantitative proof of VMN's performance power.
*   **Hierarchy**: Positioned inside ledger dashboards or case studies.
*   **Spacing**: Bounded inside card containers with a minimum vertical spacing of `48px` (`py-12`).
*   **Behaviour**: Displays single-line metric trends over a slow,scroll-bound entry animation.
*   **Accessibility**: Chart data points must be accompanied by explicit text tables to support screen reader translation.
*   **Hover**: Hovering over coordinate nodes triggers high-end glass tooltips displays.
*   **Focus**: Highlights active focus nodes with thin Champagne Bronze indicators.
*   **Responsive Behaviour**: SVG containers resize dynamically using ResizeObserver rules.
*   **Design Rules**: Strictly single-color, razor-thin lines (`1.25px` stroke width) in Champagne Bronze (`#9C8465`). We strictly prohibit solid, colorful chart bars or generic pie charts. Must carry a unique tracking ID: `id="chart-[metric-name]"`.

---

### 14. Testimonials (Classical Praise Columns)
*   **Purpose**: Verified quotes from global CMOs, executive producers, and signed creators validating VMN’s industry power.
*   **Hierarchy**: Positioned in our storytelling timeline as an editorial lookbook row.
*   **Spacing**: Vertical section paddings of `96px` (`py-24`) to frame the quotes with vast negative space.
*   **Behaviour**: Static columns or slow, scroll-driven horizontal slide cards.
*   **Accessibility**: Bounded inside semantic `<blockquote role="figure">` tags. Citation sources must declare explicit semantic landmarks.
*   **Hover**: Micro hovers on author profiles reveal small, aligned metadata tags.
*   **Focus**: Draws custom coordinate indicators.
*   **Responsive Behaviour**: Collapses cleanly to stacked vertical blocks on mobile screens.
*   **Design Rules**: Quotes use elegant, regular-weight Space Grotesk (`text-2xl`); author details use small monospace JetBrains Mono (`text-xs`). Must carry a unique tracking ID: `id="testimonial-[author-name]"`.

---

### 15. Metrics (Numerical Monoliths)
*   **Purpose**: To display oversized quantitative facts, such as total network reach or audience engagement scale.
*   **Hierarchy**: Positioned inside ledger dashboards or page segments.
*   **Spacing**: 
    *   *Metric Block padding*: Exactly `24px` (`p-6`).
    *   *Vertical Gap*: Exactly `16px` (`gap-4`).
*   **Behaviour**: Displays bold monospace metrics above short descriptive prose.
*   **Accessibility**: Mapped inside semantic list items (`<li>`) to support linear reading orders.
*   **Hover**: Hovering over a metric cell draws a subtle border highlight.
*   **Focus**: Focused cells highlight smoothly.
*   **Responsive Behaviour**: Oversized numbers (`text-5xl`) scale to `text-3xl` on mobile.
*   **Design Rules**: Statistics numbers are styled strictly in Semi-Bold JetBrains Mono (`font-semibold`) and signature Champagne Bronze (`#9C8465`). Must carry a unique tracking ID: `id="metric-block-[stat-type]"`.

---

### 16. Creator Cards (Cinematic Roster Portals)
*   **Purpose**: Double-wide visual containers showcasing represented filmmakers, digital artists, and publication designers.
*   **Hierarchy**: Standard grid items within our primary creator bento catalogs.
*   **Spacing**: Standard internal card padding is exactly `24px` (`p-6`).
*   **Behaviour**: Hovering triggers cinematic visual shifts inside the card coordinates.
*   **Accessibility**: Bounded inside `<article>` landmarks. Primary buttons must include explicit descriptive labels.
*   **Hover**: Image content scales upward imperceptibly (`scale-[1.015]`), while a small Champagne Bronze arrow (`→`) slides gracefully into view from the left margin of the card footer.
*   **Focus**: Highlights card borders to Iron Wire (`#27272A`).
*   **Responsive Behaviour**: Adapts fluidly, collapsing to single-column blocks on mobile screens.
*   **Design Rules**: Widescreen 16:9 desaturated portrait on top; Space Grotesk title and JetBrains Mono category below. Must carry a unique tracking ID: `id="creator-card-[name]"`.

---

### 17. Brand Cards (The Alliance Ledger Blocks)
*   **Purpose**: Modular cards displaying partner corporations and campaign results.
*   **Hierarchy**: Standard items within our Case Studies grid.
*   **Spacing**: Standard internal card padding is exactly `32px` (`p-8`).
*   **Behaviour**: Functions as an interactive click zone linked to private campaign briefs.
*   **Accessibility**: Includes hidden structural headings to preserve DOM outline order.
*   **Hover**: Card borders highlight to Iron Wire; corporate partner logos shift from low-opacity zinc to Alabaster Mist.
*   **Focus**: Draws custom focus borders.
*   **Responsive Behaviour**: Vertical column stacks on small mobile screens.
*   **Design Rules**: Monochrome logos only. Zero-radius corners (`rounded-none`). Single-pixel borders in Gray (`#1D1D22`). Must carry a unique tracking ID: `id="brand-card-[brand-name]"`.

---

### 18. Case Studies (Widescreen Impact Previews)
*   **Purpose**: Premium visual sections detailing cinema-grade co-productions, distribution scale, and campaign outcomes.
*   **Hierarchy**: Immersive dark canvas zones placed near our final conversion block.
*   **Spacing**: Isolated with vertical paddings of `96px` (`py-24`) to frame the case studies cleanly.
*   **Behaviour**: Uses an asymmetric grid split, placing widescreen cinematic frames adjacent to technical metadata.
*   **Accessibility**: Video frames must provide explicit pause controls and closed caption tracks to support non-visual users.
*   **Hover**: Video frames enrich contrast; overlay grids reveal subtle layout lines.
*   **Focus**: Custom focus highlights highlight active coordinate borders.
*   **Responsive Behaviour**: Widescreen cinematic media cards scale dynamically, preserving standard aspect ratios (`16:9` or `21:9`).
*   **Design Rules**: Imagery is styled in desaturated, chiaroscuro documentary realism. Performance metrics are organized inside standard Ledger Tables. Must carry a unique tracking ID: `id="case-study-[client-name]"`.

---

### 19. Timeline (Operational Co-Production Milestones)
*   **Purpose**: A vertical roadmap explaining the co-production vetting, scheduling, and distribution timeline.
*   **Hierarchy**: Positioned in our service descriptions to clearly detail campaign milestones.
*   **Spacing**: 
    *   *Step Vertical Padding*: Exactly `32px` (`py-8`).
    *   *Left Metadata Column Padding*: Exactly `16px` (`pr-4`).
*   **Behaviour**: Slow, scroll-bound entry animations. Active steps highlight border points.
*   **Accessibility**: Mapped inside semantic list structures (`<ol>`).
*   **Hover**: Hovering over a step highlights the step coordinates to Muted Zinc.
*   **Focus**: Draws custom focus highlights.
*   **Responsive Behaviour**: Timeline layout structures collapse into single-column vertical lists on mobile.
*   **Design Rules**: Left side contains step numbering (`01 // CONCEPTUAL FRAMEWORK`) in JetBrains Mono; right side contains detail prose in Inter. Must carry a unique tracking ID: `id="timeline-coproduction"`.

---

### 20. CTA (Private Briefing Gateway)
*   **Purpose**: The final conversion segment inviting qualified executive visitors to request a private partnership briefing.
*   **Hierarchy**: The terminal segment of our homepage storytelling timeline.
*   **Spacing**: Generous vertical paddings of `128px` (`py-32`) to establish extreme spatial decompression.
*   **Behaviour**: Completely static, designed with ultimate aesthetic restraint.
*   **Accessibility**: Bounded inside a semantic `<section role="region">` landmark with explicit structural headers.
*   **Hover**: CTA buttons lift slightly, shifting their background fills smoothly.
*   **Focus**: Highlights button borders and input fields smoothly.
*   **Responsive Behaviour**: Compact centered layout on desktop; single-column scroll stack on mobile viewports.
*   **Design Rules**: Clean headline in Space Grotesk (`text-5xl`); short editorial description in Inter (`text-base`). Features a quiet vetting message: `[ Every partnership proposal is vetted by the creative board. ]`. Must carry a unique tracking ID: `id="cta-private-briefing"`.

---

### 21. Forms (Vetted Information Intake Blocks)
*   **Purpose**: The briefing contact block capturing corporate details.
*   **Hierarchy**: Positioned inside the final Private Briefing Gateway CTA segment.
*   **Spacing**: Bounded inside card containers with an inner padding of `32px` (`p-8`).
*   **Behaviour**: Minimalist form gates containing three essential inputs. Displays desaturated status alerts upon submission.
*   **Accessibility**: Form containers must declare explicit landmarks (`<form>`). Required inputs must include `aria-required="true"` parameters.
*   **Hover**: Inputs highlight smoothly on hover.
*   **Focus**: Highlights bottom borders, displaying adjacent monospace focus tags.
*   **Responsive Behaviour**: Fluid width adaptation, locking font scales to prevent zoom shifts.
*   **Design Rules**: Limited strictly to three essential inputs (*Corporate Email*, *Brand URL*, and *Brief Alliance Intent*). Captcha widgets are prohibited. Must carry a unique tracking ID: `id="form-private-briefing"`.

---

## Component Coexistence Grid

Our components must sit harmoniously inside our layout systems. The table below outlines how our shapes, borders, and spacings cooperate to establish mathematical order:

| Component Type | Corner Radius | Border Weight & Color | Spacing Padding | Base Typography Token |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Action** | `rounded-none` | `1px` — Champagne Bronze (`#9C8465`) | `gp-3` (`py-3 px-6`) | `Token 16` (JetBrains Mono)|
| **Bento Grid Cell** | `rounded-none` | `1px` — Gray (`#1D1D22`) | `gp-4` (`p-8`) | `Token 21` (Space Grotesk) |
| **Form Input Field** | `rounded-none` | `1px` Bottom — Iron Wire (`#27272A`) | `gp-2` (`py-4 px-2`) | `Token 17` (Inter) |
| **Category Tag** | `rounded-none` | `1px` — Steel Sage (`#52525B`) | `gp-0.5` (`py-1 px-2`) | `Token 13` (JetBrains Mono)|
| **Slide Drawer** | `rounded-none` | `1px` — Iron Wire (`#27272A`) | `gp-6` (`p-12`) | `Token 15` (Space Grotesk) |

---

## Component-Consistency Verification Audit

Prior to approving any page layout, interactive control, or component design for the VMN platform, the development team must verify compliance against this five-point component checklist. A single failed parameter is a blocker:

* [ ] Do all interactive components, cards, buttons, and form input fields designed with sharp, zero-radius corners (`rounded-none` or `rounded-sm`)?
* [ ] Do all buttons, forms, and navigation tabs utilize custom, high-contrast, visible focus states and suppress default browser outlines?
* [ ] Are all long-form narrative columns constrained to a maximum width of `max-w-2xl` (`672px`), ensuring a line length of 60 to 75 characters per line?
* [ ] Are all SVG icons and glyphs designed as outlined, monoline wireframes with absolute zero-radius joints and thin stroke weights (≤ `1.5px`)?
* [ ] Are all components completely silent—free of unrequested persistent chatbot boxes, floating social share bars, and floating ads?
* [ ] Does every single component designed for the VMN platform carry a unique, clean, and semantic DOM `id` attribute for precise tracking and layout control?
