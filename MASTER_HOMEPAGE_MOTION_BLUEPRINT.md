# Master Homepage Motion Blueprint & Kinetic Choreography Specification: Valtreon Media Network (VMN)
*Authored by: Chief Motion Architect, Lead Interaction Designer & Principal Performance Engineer*  
*Document Reference: VMN-MBP-2026-v1.0 (Master Motion Blueprint SOT)*  
*Classification: Permanent Enterprise Kinetic System & Motion Choreography Source of Truth (SOT)*  
*Design Paradigm: Swiss Modernist Precision Kinetics meets Hardware-Accelerated Performance (WCAG 2.2 AAA & prefers-reduced-motion Compliant)*

---

## Executive Mandate & Kinetic Philosophy

This document defines the unified, master **Motion Blueprint & Kinetic Choreography Specification** for the entire Valtreon Media Network (VMN) homepage experience.

In strict adherence to VMN's permanent **Digital Hygiene Directive** and our commitment to **Swiss Modernist Design**, we explicitly reject "gratuitous UI animation"—the chaotic, distracting motion clichés that plague cheap web templates (such as bouncy elastic entrances, infinite spinning badges, aggressive popups, parallax scroll jitter, and CPU-melting particle explosions).

Instead, motion at VMN is treated as **Functional Kinetic Feedback**. Animation exists solely to:
1. Direct executive visual focus along a disciplined cognitive hierarchy.
2. Provide immediate physical feedback for tactile interactions.
3. Smoothly communicate spatial state changes across multi-layered data consoles.
4. Guarantee 60fps / 120fps hardware-accelerated rendering while honoring accessibility standards (`prefers-reduced-motion`).

---

# GLOBAL MOTION SYSTEM CONSTANTS & TIMING CURVES

### Global Easing Curves
- **Vault Primary Spring**: `cubic-bezier(0.16, 1, 0.3, 1)` (Ultra-smooth, fast-start deceleration curve for all entrance and expand transitions).
- **Tactile Hover Spring**: `cubic-bezier(0.25, 1, 0.5, 1)` (Immediate 100ms response for button and card hover micro-states).
- **Cross-Fade Smooth**: `cubic-bezier(0.4, 0, 0.2, 1)` (Balanced linear fade for image, showreel, and tab content swaps).

### Global Physics Constants
- **Magnetic Button Pull**: Max `6px` spatial offset, stiffness `60`, damping `20`.
- **3D Parallax Tilt**: Max `8°` angular shift, stiffness `40`, damping `25`.
- **Global Stagger Interval**: `50ms` per item in grids or lists.

---

# 1. HERO SECTION MOTION BLUEPRINT

```
+-----------------------------------------------------------------------------------------------------------------------+
| HERO KINETIC CHOREOGRAPHY TIMELINE (0ms - 1600ms)                                                                      |
| 0ms    ───> Canvas Mount (Deep Obsidian Matte #080809 + 2% Noise Grain)                                              |
| 200ms  ───> Level 6 Eyebrow Decrypts: `[ SYSTEM_INIT // VERIFIED_HORIZON ]` (120ms decrypt over 8 frames)             |
| 400ms  ───> H1 Headline Decrypt Reveal: Progressive letterform matrix decrypt over 800ms                               |
| 700ms  ───> Subheadline Copy Fades In: +12px Y-axis slide up over 400ms (`cubic-bezier(0.16, 1, 0.3, 1)`)            |
| 900ms  ───> Dual CTA Buttons Mount: +8px Y-axis slide up; Magnetic Gravity Engine Active                              |
| 1100ms ───> WebGL 3D Prismatic Node Fades In & Initiates Dual-Axis Orbit (0.002 rad/frame)                            |
| 1300ms ───> Floating Telemetry Dashboard Card Slides In: +20px X-axis offset over 500ms                                |
| 1600ms ───> Trust Signals & Scroll Indicator Fade In (Complete Active Hero Viewport)                                  |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 1.1 Entrance Animation
- **Sequence**: Decrypt stagger $\rightarrow$ Headline matrix reveal $\rightarrow$ Narrative fade $\rightarrow$ CTA mount $\rightarrow$ 3D Node orbit init $\rightarrow$ Telemetry card slide.
- **Duration**: `1600ms` total staggered timeline.
- **Mechanics**: H1 letters decrypt over 800ms using matrix symbols resolving into `Playfair Display` serif text. Subheadline slides up 12px with Vault curve.

### 1.2 Exit Animation
- **Behavior**: As user scrolls down past the Hero viewport, the WebGL 3D Node gradually scales down (scale 1.0 $\rightarrow$ 0.92) and fades to 0% opacity over a `300px` scroll threshold. Headline typography shifts upward by `-24px` with linear scroll parallax.

### 1.3 Scroll Behaviour
- **Scroll-Linked Parallax**: Background Cartesian grid moves at 10% scroll speed; 3D Prismatic Node moves at 35% scroll speed; foreground typography moves at 100% natural scroll speed, creating true spatial depth.

### 1.4 Hover Behaviour
- **Magnetic CTA Pull**: Primary CTA button pulls magnetically `6px` toward cursor when within 30px boundary.
- **3D Cursor Parallax**: WebGL Prismatic Crystal tilts smoothly (max 8°) toward cursor X/Y coordinates.

### 1.5 Timing
- **Entrance Stagger**: `200ms` eyebrow $\rightarrow$ `400ms` H1 $\rightarrow$ `700ms` subheadline $\rightarrow$ `900ms` CTAs $\rightarrow$ `1100ms` 3D node.
- **Hover Response**: `100ms` instant tactile feedback.

### 1.6 Accessibility
- **Reduced Motion**: If `prefers-reduced-motion: reduce` is active, all decrypts, 3D orbits, parallax shifts, and magnetic pulls are completely disabled. Entire Hero renders statically with a single `150ms` opacity fade.

### 1.7 Performance
- **GPU Acceleration**: 3D WebGL rendered on dedicated canvas; CSS transforms utilize `transform: translate3d()` and `will-change: transform`. Zero Cumulative Layout Shift (CLS: 0.000).

---

# 2. STATISTICS / PERFORMANCE TELEMETRY MOTION BLUEPRINT

```
+-----------------------------------------------------------------------------------------------------------------------+
| STATISTICS SECTION KINETIC TRIGGER (SCROLL INTERSECTION AT 30% VIEWPORT)                                               |
| [Viewport Intersection] ───> Bento Module Frames Mount (+16px Y-axis slide up, 300ms Vault Curve)                     |
|                              └──> Tabular Count-Up Initiates: 0 -> Target Values over 1400ms                           |
|                              └──> SVG Sparklines Trace: `stroke-dashoffset` 100% -> 0% over 800ms                       |
|                              └──> Progress Arcs Draw: SVG Circle stroke fills to 84.6% over 1000ms                      |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Entrance Animation
- **Trigger**: `IntersectionObserver` fires when section reaches 30% viewport visibility.
- **Bento Module Entrance**: 4 Bento cards enter with a `50ms` stagger delay, sliding up 16px while fading in over 300ms.
- **Data Counter Roll**: Numerics count up from 0 to target values (`18.8M`, `84.6%`, `+$142%`) over `1400ms` using Easing Vault curve and tabular font features.
- **SVG Vector Chart Trace**: Sparklines and progress arcs draw their vector paths over `800ms` using CSS `stroke-dashoffset` path manipulation.

### 2.2 Exit Animation
- **Behavior**: As section leaves viewport bounds, charts pause active animation states and freeze in completed keyframe configurations to conserve GPU/CPU cycles.

### 2.3 Scroll Behaviour
- **Static Lock**: Modules lock cleanly into position without sticky scroll locking, allowing smooth natural page scrolling.

### 2.4 Hover Behaviour
- **Card Highlight**: Hovering a module highlights its 1px border to Champagne Bronze (`#9C8465`) over `150ms`.
- **Sparkline Crosshair**: Moving cursor across the vector sparkline activates a vertical 1px crosshair guide and opens a monospace tooltip following the cursor X-position.

### 2.5 Timing
- **Module Stagger**: `0ms` (Mod 1) $\rightarrow$ `50ms` (Mod 2) $\rightarrow$ `100ms` (Mod 3) $\rightarrow$ `150ms` (Mod 4).
- **Count-Up Duration**: `1400ms`.
- **Chart Trace Duration**: `800ms`.

### 2.6 Accessibility
- **Reduced Motion**: Count-up numbers render final target values instantly. Chart vector paths appear fully drawn without path tracing animations.

### 2.7 Performance
- **Tabular Font Stabilization**: `tabular-nums` prevents letter-spacing jumps during counting. Chart paths hardware-accelerated via SVG layer composition.

---

# 3. SERVICES / CO-PRODUCTION CAPABILITIES MOTION BLUEPRINT

```
+-----------------------------------------------------------------------------------------------------------------------+
| SERVICES ACCORDION & SPLIT-PANEL INTERACTION CHOREOGRAPHY                                                             |
| [Accordion Header Click] ───> 1. Active Accordion Expands: Height 0 -> Auto over 250ms Vault Curve                    |
|                               2. Inactive Accordions Collapse: Height Auto -> 0 over 200ms                            |
|                               3. Right Telemetry Panel Swaps: 200ms Desaturated Opacity Cross-Fade                     |
|                               4. 3D Spatial Mesh / Showreel Loop Updates for Selected Discipline                      |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Entrance Animation
- **Accordion Stack Reveal**: The 5 capability accordion rows reveal sequentially from top to bottom (50ms stagger per row) with a 12px Y-axis slide up.
- **Telemetry Console Mount**: Right-hand telemetry console fades in with a 20px X-axis slide from right (`duration: 400ms`).

### 3.2 Exit Animation
- **Smooth Collapse**: Unselected discipline panels collapse smoothly (height `200ms`), fading content opacity to 0%.

### 3.3 Scroll Behaviour
- **Sticky Split Panel**: On desktop viewports, the right telemetry console maintains a sticky position (`top-28`) while the user scrolls through or toggles the left capability accordions.

### 3.4 Hover Behaviour
- **Accordion Row Hover**: Highlights left border with Champagne Bronze (`border-amber-600`), elevates row background (`bg-zinc-900/60`), and slides right arrow icon 4px right over `150ms`.
- **Right Telemetry Hover**: Hovering 3D spatial preview or video showreel expands video controls and highlights audit receipt tags.

### 3.5 Timing
- **Accordion Expand**: `250ms` (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Telemetry Panel Swap**: `200ms` cross-fade (`cubic-bezier(0.4, 0, 0.2, 1)`).

### 3.6 Accessibility
- **Accordion ARIA Sync**: `aria-expanded="true/false"` updated instantly. Reduced motion replaces height expansion with instant state swap.

### 3.7 Performance
- **CSS Grid Height Transition**: Uses `grid-template-rows: 0fr -> 1fr` for smooth, zero-layout-shift accordion expansion.

---

# 4. CREATOR NETWORK SHOWCASE MOTION BLUEPRINT

```
+-----------------------------------------------------------------------------------------------------------------------+
| CREATOR SHOWCASE MATRIX KINETICS                                                                                      |
| [Filter Selection]     ───> Unmatched Cards Scale Down (0.96) & Fade Out over 150ms                                    |
|                             Matched Cards Reorder Smoothly using Reactive Layout Transition                             |
| [Card Hover Trigger]   ───> 1. 1px Champagne Bronze Frame Highlights (150ms)                                           |
|                             2. Static Image Cross-Fades to 4K Looping Muted Video Showreel (200ms)                    |
|                             3. Secondary Telemetry Overlay Slides Up (+12px Y-axis, 150ms)                            |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Entrance Animation
- **Grid Cell Stagger**: 24 talent cards in the matrix reveal in a 4-column staggered wave (`30ms` delay per card) fading opacity 0 $\rightarrow$ 100%.

### 4.2 Exit Animation
- **Filter Dismissal**: When a filter eliminates a creator card, the card scales down to 0.96 and fades out over `150ms`. Remaining cards slide smoothly into new grid positions.

### 4.3 Scroll Behaviour
- **Sticky Filter Console**: Left filter sidebar remains pinned at `top-28` while the right talent matrix scrolls naturally.

### 4.4 Hover Behaviour
- **Showreel Video Activation**: Hovering a creator card triggers a 200ms cross-fade from static thumbnail to 4K looping muted video showreel.
- **Telemetry Overlay Slide**: Secondary creator metrics (retention rate, top clients) slide up 12px from card bottom.

### 4.5 Timing
- **Showreel Cross-Fade**: `200ms`.
- **Filter Layout Reorder**: `300ms` layout spring animation.

### 4.6 Accessibility
- **Keyboard Navigation**: `Tab` key moves focus sequentially across creator cards with a high-contrast 2px Champagne focus outline (`outline: 2px solid #9C8465`).

### 4.7 Performance
- **Lazy Video Loading**: Showreel videos only load video buffers when cursor hovers card bounds (`mouseenter`), preserving bandwidth.

---

# 5. CASE STUDIES / CAMPAIGN DOSSIERS MOTION BLUEPRINT

```
+-----------------------------------------------------------------------------------------------------------------------+
| CASE STUDY HERO DOSSIER KINETICS                                                                                      |
| [Viewport Intersection] ───> Hero Dossier Frame Mounts (+16px Y-axis, 400ms Vault Curve)                               |
|                              └──> Pipeline Lift Vector Line Draws: 800ms `stroke-dashoffset`                           |
|                              └──> Telemetry Numerics Roll: +$14.2M over 1200ms                                        |
|                              └──> 4K Cinematic Still Activates Video Preview on Hover                                  |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 5.1 Entrance Animation
- **Dossier Frame Reveal**: Featured Hero Case Study enters with a `400ms` opacity fade and 16px slide up.
- **Pipeline Vector Trace**: SVG pipeline lift trajectory draws itself over `800ms`.
- **Results Count-Up**: `$14.2M` pipeline lift digit counts up over `1200ms`.

### 5.2 Exit Animation
- **Dossier Transition**: Scrolling past dossier smoothly dims background video stillness to conserve GPU resources.

### 5.3 Scroll Behaviour
- **Parallax Artifact Alignment**: Cinematic screenshots move at 90% scroll speed, providing subtle relative movement against text content.

### 5.4 Hover Behaviour
- **Cinematic Showreel Loop**: Hovering featured film still triggers 60fps video playback of campaign footage with desaturated 35mm film grain overlay.
- **Chart Data Crosshair**: Hovering pipeline vector chart displays exact date and view metrics inside monospace tooltips.

### 5.5 Timing
- **Dossier Mount**: `400ms`.
- **Chart Draw**: `800ms`.
- **Numeric Count-Up**: `1200ms`.

### 5.6 Accessibility
- **Reduced Motion**: Static charts, instant numeric display, and static film stills without auto-playing video snippets.

### 5.7 Performance
- **Video Decoding**: Video preview uses H.265/AV1 hardware decoding, muted, with `playsInline` attribute.

---

# 6. TESTIMONIALS / EXECUTIVE ENDORSEMENTS MOTION BLUEPRINT

```
+-----------------------------------------------------------------------------------------------------------------------+
| EXECUTIVE TESTIMONIAL KINETICS (ZERO AUTO-SLIDE POLICY)                                                               |
| [Tab Selection / Click] ───> Active Statement Cross-Fades over 200ms                                                   |
|                              Non-Active Cards Dim to 50% Opacity                                                       |
|                              Synchronized Video Transcript Scroll-Locks to Audio Timeline                              |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.1 Entrance Animation
- **Bento Wall Mount**: Featured 4K Executive Video Statement (Cols 1–8) and Secondary Cards (Cols 9–12) enter simultaneously over `400ms` with Vault curve.

### 6.2 Exit Animation
- **Zero Auto-Slide**: Testimonials NEVER slide away automatically. Exit occurs only when user intentionally clicks another statement tab or scrolls past section.

### 6.3 Scroll Behaviour
- **Natural Page Scroll**: Static wall architecture eliminates scroll-jacking and horizontal carousel lock.

### 6.4 Hover Behaviour
- **Card Focus State**: Hovering any secondary endorsement card highlights its border to Champagne Bronze (`#9C8465`) and dims non-focused cards to 50% opacity over `150ms`.
- **Video Player Trigger**: Hovering play button displays total video duration `[ ▶ PLAY STATEMENT (1m 45s) ]`.

### 6.5 Timing
- **Statement Swap**: `200ms` opacity cross-fade.
- **Transcript Sync**: Real-time 60Hz text highlight matching video timestamp.

### 6.6 Accessibility
- **Manual Control**: 100% manual navigation via keyboard `Tab` or screen reader controls. Full synchronized transcript provided visually.

### 6.7 Performance
- **Transcript Virtualization**: Long transcript text blocks virtualized to prevent DOM node inflation during playback.

---

# 7. FINAL CTA / ALLIANCE INTAKE VAULT MOTION BLUEPRINT

```
+-----------------------------------------------------------------------------------------------------------------------+
| FINAL CTA ALLIANCE INTAKE VAULT KINETICS                                                                              |
| [Viewport Intersection] ───> 1px Champagne Specular Border Glow Traces Around Vault Frame (600ms)                     |
|                              Central Champagne Radial Light Node Fades In (rgba 9%, 500ms)                             |
| [Cursor Approach <40px] ───> Primary CTA Button Pulls Magnetically 6px Toward Cursor Position (Spring Physics)        |
| [Primary CTA Click]     ───> Briefing Intake Vault Modal Slides Up (+100% Y-axis, 350ms Vault Curve)                    |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 7.1 Entrance Animation
- **Vault Frame Trace**: 1px Champagne Bronze specular line traces around the container border over `600ms`.
- **Radial Aura Fade**: Central Champagne light glow fades in behind capacity card (`duration: 500ms`).
- **Typography Mount**: Headline and subheadline enter with a 12px Y-axis slide up over `400ms`.

### 7.2 Exit Animation
- **Modal Intake Transition**: Clicking primary CTA triggers smooth 350ms Vault-curve slide up of the Briefing Intake Modal, dimming background canvas with a 60% dark backdrop blur overlay.

### 7.3 Scroll Behaviour
- **Final Anchor Lock**: Section serves as the absolute bottom anchor of the homepage experience above the footer ledger.

### 7.4 Hover Behaviour
- **Magnetic CTA Pull**: Primary button pulls magnetically `6px` toward cursor when within 40px boundary (stiffness 60, damping 20).
- **Capacity Card Specular Highlight**: Hovering capacity card brightens top specular border from Zinc to Champagne Gold over `150ms`.

### 7.5 Timing
- **Border Trace**: `600ms`.
- **Magnetic Physics**: `60Hz` real-time spring response.
- **Modal Slide**: `350ms`.

### 7.6 Accessibility
- **Focus Trap**: Briefing Intake Modal locks keyboard focus when opened, returning focus to CTA button upon dismissal (`Escape` key close trigger).

### 7.7 Performance
- **Hardware Layering**: Modal rendered on dedicated `z-index: 100` GPU layer (`will-change: transform, opacity`).

---

# MASTER HOMEPAGE MOTION SEQUENCE SUMMARY MATRIX

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    MASTER HOMEPAGE KINETIC SUMMARY MATRIX                                             |
+----+-------------------+-------------------------------+-------------------------------+------------------------------+
| Seq| Homepage Section  | Primary Entrance Motion       | Interactive Hover Behaviour   | Key Accessibility Safeguard  |
+----+-------------------+-------------------------------+-------------------------------+------------------------------+
| 01 | Hero Section      | Letterform Decrypt & 3D Orbit | Magnetic CTA + 3D Tilt Parallax| Static fallback for reduced motion|
| 02 | Statistics        | 1400ms Tabular Count-Up & Spark| Sparkline Crosshair & Tooltip  | Tabular font prevents CLS    |
| 03 | Services          | Staggered Accordion & Split   | Row Border Highlight & 4px Arrow| CSS Grid height zero-shift   |
| 04 | Creator Network   | 4-Column Wave Stagger (30ms)  | 4K Showreel Video Cross-Fade  | Lazy-loaded video buffers    |
| 05 | Case Studies      | Dossier Slide & Vector Draw   | Film Still Showreel Loop      | Hardware H.265 decoding      |
| 06 | Testimonials      | Bento Wall Mount (0 Auto-Slide)| Active Card Highlight & Transcript| 100% manual control & transcript|
| 07 | Final CTA Vault   | 1px Border Trace & Radial Aura | 6px Magnetic CTA Gravity       | Focus-trapped intake modal   |
+----+-------------------+-------------------------------+-------------------------------+------------------------------+
```
