# Master Animation Timing & Kinetic Curve Specification: Valtreon Media Network (VMN)
*Authored by: Principal Creative Technologist, Lead Motion Architect & Chief of Kinetic Systems*  
*Classification: Permanent Enterprise Design Standards & Kinetic Timing Blueprint (SOT)*  
*Design Paradigm: Swiss Rationalism meets High-Precision Physical Mechanics (Apple & Linear Calibrated)*

---

## Declaration of Kinetic Rigor

This specification establishes the permanent, single-source-of-truth **Animation Timing & Curve System** for the Valtreon Media Network (VMN) platform.

At Valtreon, we treat time as a physical dimension. In our high-end Swiss modernist digital environments, motion must never be random, elastic, or hyperactive. We completely reject standard commercial web transitions, bouncy easing presets, and chaotic visual flashes. Every movement on our platform is governed by precise mathematical functions (cubic-bezier curves) that model real-world physics: mass, friction, inertia, and damping.

These kinetic constants are calibrated to preserve **visual stability, extreme reading focus, and tactile responsiveness**. By implementing these mathematical timings, our interface behaves like a solid, meticulously engineered luxury object—felt rather than noticed, and universally accessible.

---

## The Master Kinetic Curves (The Physics Engines)

Our entire interface is driven by three custom cubic-bezier easing formulas, mapped to distinct physical behaviors:

```
                  [ THE THREE MASTER KINETIC HORIZONS ]
                  
     1. THE CRUNCH CURVE (Immediate, Tactical, High-Speed)
        cubic-bezier(0.16, 1, 0.3, 1) [Crisp / High Initial Velocity]
        0% ───[Acc: Instant]───> 20% ────────────────[Dec: Linear]────────────────> 100%

     2. THE VAULT CURVE (Heavy, Luxurious, Damped Glide)
        cubic-bezier(0.25, 1, 0.5, 1) [Damped / Maximum Deceleration]
        0% ──────[Acc: Controlled]──────> 40% ────────────[Dec: Heavy Fluid]────────────> 100%

     3. THE CHRONOS CURVE (Slow-Scroll, Atmospheric, Epic)
        cubic-bezier(0.35, 1, 0.65, 1) [Ultra-Damped / Cinematic Drag]
        0% ────────[Acc: Inertial]────────> 50% ────────────────[Dec: Viscous]────────────────> 100%
```

---

## Complete Timing & Easing Registry

---

### 1. Micro Animations (The Mechanical Ticks)
*   **Purpose**: Immediate, sub-pixel state verifications that provide tactile click confirmations for controls like checkboxes, radio select dots, and micro indicators.
*   **Duration**: `100ms` (Sub-perceptual threshold).
*   **Delay**: `0ms` (Instantaneous execution).
*   **Easing**: `vmn-motion-ease-crisp` (`cubic-bezier(0.16, 1, 0.3, 1)`).
*   **Acceleration**: Near-infinite. The curve reaches top velocity in the first `15ms`.
*   **Deceleration**: Linear-smooth. Dissipates kinetic energy sharply over the remaining `85ms` to land dead on target.
*   **Animation Curve**: `M 0,0 C 0.16,1 0.3,1 1,1`
*   **Best Use Case**: Form select validations, micro-checkbox crosshair draw-ins, active dot scale-ups.
*   **Accessibility Rules**: Must be completely disabled if `prefers-reduced-motion: reduce` is active. Status updates must be announced immediately via `aria-live="polite"` or `role="status"` tags to preserve assistive visibility.

---

### 2. Hover Animations (The Ambient Focus)
*   **Purpose**: Subtle, atmospheric light activations that reveal cursor presence without demanding aggressive attention.
*   **Duration**: `300ms` (Composed drift).
*   **Delay**: `0ms` (No interaction lag).
*   **Easing**: `vmn-motion-ease-damped` (`cubic-bezier(0.25, 1, 0.5, 1)`).
*   **Acceleration**: Controlled. Reaches top velocity at `120ms` of the timeline.
*   **Deceleration**: Thick fluid resistance.Decelerates smoothly into its hover boundary state over the final `180ms`.
*   **Animation Curve**: `M 0,0 C 0.25,1 0.5,1 1,1`
*   **Best Use Case**: Text link desaturation fades, category label tag border highlights, inline metadata reveals.
*   **Accessibility Rules**: Under reduced motion settings, these must collapse into instant color transitions (≤ `150ms`) with zero translation (movement). Hover effects must never be sticky, returning to default states instantly upon pointer leave.

---

### 3. Section Reveals (The Narrative Decrypt)
*   **Purpose**: Guided scroll reveals that pace the user’s reading journey, making sections appear as if they are being engraved onto our Deep Obsidian stage.
*   **Duration**: `600ms` (The Swiss Page Flow).
*   **Delay**: `50ms` to `150ms` (Staggered relative to scroll index).
*   **Easing**: `vmn-motion-ease-damped` (`cubic-bezier(0.25, 1, 0.5, 1)`).
*   **Acceleration**: Inertial. Resists vertical lift during the first `180ms`.
*   **Deceleration**: High-damping slide. Glides gracefully into horizontal line alignment over the final `420ms`.
*   **Animation Curve**: `M 0,0 C 0.25,1 0.5,1 1,1`
*   **Best Use Case**: Vertical scroll entries of bento grid cards, long-form paragraph columns, and campaign catalog lists.
*   **Accessibility Rules**: All vertical translation (translation-y offset) is strictly disabled under `prefers-reduced-motion`, replaced by a pure opacity fade-in of `250ms` with zero delay.

---

### 4. Page Transitions (The Deep Stage Dissolve)
*   **Purpose**: Cinematic, high-contrast viewport swaps that wipe the entire viewport cleanly, preserving layout continuity when moving between global coordinates.
*   **Duration**: `800ms` (The Epic Decompression).
*   **Delay**: `0ms` (To prevent interaction blocks during viewport load).
*   **Easing**: `vmn-motion-ease-slow` (`cubic-bezier(0.35, 1, 0.65, 1)`).
*   **Acceleration**: Heavy-mass. Drifts out of the preceding viewport with massive initial inertia over `320ms`.
*   **Deceleration**: Sandblasted crystal dissolve. Fades into the new, pristine Swiss grid split over the final `480ms`.
*   **Animation Curve**: `M 0,0 C 0.35,1 0.65,1 1,1`
*   **Best Use Case**: Primary navigation routes, category portfolio swaps.
*   **Accessibility Rules**: Page translations are replaced by a clean, instant cross-fade opacity transition (≤ `150ms`) for vestibular safety. Keyboard focus must instantly skip to `#main-content` at the start of the transition.

---

### 5. Hero Animations (The Cinematic Dawn)
*   **Purpose**: The dramatic, high-fidelity entry sequence that establishes brand authority the millisecond the homepage viewport resolves.
*   **Duration**: `1200ms` (The Architectural Draft).
*   **Delay**: `100ms` (Allowing the browser's first paint cycle to fully stabilize).
*   **Easing**: `vmn-motion-ease-slow` (`cubic-bezier(0.35, 1, 0.65, 1)`).
*   **Acceleration**: Heavy mechanical release. The master Display XL title begins its slow upward glide over the first `400ms`.
*   **Deceleration**: Viscous drag. The typography glides to a precise, unshakeable rest on our layout columns over the remaining `800ms`.
*   **Animation Curve**: `M 0,0 C 0.35,1 0.65,1 1,1`
*   **Best Use Case**: Homepage Display titles, primary widescreen cinema video frames, top-level layout grid drawing.
*   **Accessibility Rules**: All motion is completely disabled under reduced motion. The hero title must render immediately at `opacity: 1` to prevent cognitive fatigue or reading delays.

---

### 6. Loader Animations (The Chronograph Sync)
*   **Purpose**: Slow, high-contrast linear pulse waves that indicate content synchronization while maintaining total visual silence.
*   **Duration**: `2000ms` per cycle (Continuous pulse).
*   **Delay**: `0ms` (Deploys instantly upon database query).
*   **Easing**: Standard Sine Easing (`cubic-bezier(0.4, 0, 0.6, 1)`).
*   **Acceleration**: Completely symmetrical. Accelerates and decelerates with equal, smooth velocity waves.
*   **Deceleration**: Symmetrical. Matches acceleration precisely to mimic breathing intervals.
*   **Animation Curve**: `M 0,0 C 0.4,0 0.6,1 1,1`
*   **Best Use Case**: Technical skeleton shimmer rows, campaign Brief vetting loaders.
*   **Accessibility Rules**: Pulse cycle must not flash, strobe, or flicker at a frequency exceeding **1Hz** (one shift every 1 second). Skeleton elements must carry `aria-busy="true"` and `aria-live="polite"` tags to instruct screen readers of dynamic content loading.

---

### 7. Counter Animations (The Metric Decrypt)
*   **Purpose**: Rapid, high-contrast alphanumeric decimal updates that display total network reach or demographic statistics with technical precision.
*   **Duration**: `1500ms` (The Audit Calculation).
*   **Delay**: `150ms` (After parent card enters the viewport).
*   **Easing**: `vmn-motion-ease-crisp` (`cubic-bezier(0.16, 1, 0.3, 1)`).
*   **Acceleration**: High velocity. The numbers rotate rapidly through calculations during the first `300ms`.
*   **Deceleration**: Extreme physical braking. Spends `1200ms` slowing to a precise halt at the target coordinate.
*   **Animation Curve**: `M 0,0 C 0.16,1 0.3,1 1,1`
*   **Best Use Case**: Bento card statistics blocks, financial performance ledger cells.
*   **Accessibility Rules**: Counters must never flash or rapidly cycle colors. Under reduced motion settings, the counter animation is bypassed entirely, displaying the terminal statistic instantly. Screen readers must receive the final number immediately upon viewport entry, bypassing the count sequence.

---

### 8. Text Animations (The Engraving Mask)
*   **Purpose**: Typing or masking reveals that draw-out words letter-by-letter, mimicking classical publication layouts.
*   **Duration**: `800ms` (The Letterpress Reveal).
*   **Delay**: Staggered at `20ms` intervals per text line.
*   **Easing**: `vmn-motion-ease-damped` (`cubic-bezier(0.25, 1, 0.5, 1)`).
*   **Acceleration**: Instant. Letters pop upward through horizontal overflow masks over the first `160ms`.
*   **Deceleration**: Damped glide. Decelerates and seats onto the reading baseline over `640ms`.
*   **Animation Curve**: `M 0,0 C 0.25,1 0.5,1 1,1`
*   **Best Use Case**: Section headers, editorial blockquotes, featured roster bios.
*   **Accessibility Rules**: Masked text must never break into raw letters in the DOM tree, ensuring screen readers parse words as complete structural blocks. Under reduced motion, text displays instantly at standard baseline coords.

---

### 9. Image Reveals (The Aperture Clip)
*   **Purpose**: Custom clipping path expansions that reveal widescreen media as if a camera shutter is drawing back, emphasizing our documentary aesthetic.
*   **Duration**: `1000ms` (The Cinematic Gate).
*   **Delay**: `100ms` (After section grid lines resolve).
*   **Easing**: `vmn-motion-ease-slow` (`cubic-bezier(0.35, 1, 0.65, 1)`).
*   **Acceleration**: Heavy-friction drag. Resists expansion over the first `300ms`, building potential kinetic energy.
*   **Deceleration**: Cinematic pan. Expands its crop coordinates cleanly over the final `700ms` with sub-pixel rendering.
*   **Animation Curve**: `M 0,0 C 0.35,1 0.65,1 1,1`
*   **Best Use Case**: Widescreen `21:9` cinema cards, creator bento profile images.
*   **Accessibility Rules**: Clipping masks are completely disabled under reduced motion, rendering images flatly on load. Media files must declare explicit, descriptive alt text to support auditory navigation.

---

### 10. Card Hovers (The Inertial Lift)
*   **Purpose**: Clean visual translations that elevate interactive cards slightly while highlighting borders to denote cursor capture.
*   **Duration**: `350ms` (The Damped Lift).
*   **Delay**: `0ms` (Immediate reaction).
*   **Easing**: `vmn-motion-ease-damped` (`cubic-bezier(0.25, 1, 0.5, 1)`).
*   **Acceleration**: Sub-pixel responsive. Reaches top upward velocity at `100ms`.
*   **Deceleration**: Spring-cushioned landing. Slowly floats to a static elevation scale of `1.015` over the final `250ms`.
*   **Animation Curve**: `M 0,0 C 0.25,1 0.5,1 1,1`
*   **Best Use Case**: Represented filmmaker profiles, brand case studies cards.
*   **Accessibility Rules**: Card translation and scaling are disabled under reduced motion. Focus transitions (using keyboard Tab) must highlight the border cleanly to Champagne Bronze instantly with zero offset movement.

---

### 11. Button Hovers (The Tactile Slide)
*   **Purpose**: A highly satisfying interaction that reveals an arrow sliding from left to right while the button face shifts color smoothly.
*   **Duration**: `350ms` (The Kinetic Arrow).
*   **Delay**: `0ms` (Tactile feedback).
*   **Easing**: `vmn-motion-ease-damped` (`cubic-bezier(0.25, 1, 0.5, 1)`).
*   **Acceleration**: Crisp response. The button background shifts to solid Champagne Bronze instantly.
*   **Deceleration**: Damping glide. The arrow (`→`) slides exactly `4px` from left to right over the remaining duration, coming to a dead, precise rest.
*   **Animation Curve**: `M 0,0 C 0.25,1 0.5,1 1,1`
*   **Best Use Case**: Action buttons, booking CTAs.
*   **Accessibility Rules**: Sliding arrow motions are completely disabled under reduced motion, replaced by instant high-contrast text color inversion.

---

### 12. Navigation reveals (The Horizon Unfold)
*   **Purpose**: The slow, graceful unfold of our header menu, sliding content downward smoothly from our global top margin.
*   **Duration**: `450ms` (The Swiss Fold).
*   **Delay**: `0ms` (For instant route exploration).
*   **Easing**: `vmn-motion-ease-damped` (`cubic-bezier(0.25, 1, 0.5, 1)`).
*   **Acceleration**: Mechanical descent. Descends swiftly from top layout horizon in the first `150ms`.
*   **Deceleration**: Linear seat. Slides into position over `300ms` with zero vertical bounce or wobble.
*   **Animation Curve**: `M 0,0 C 0.25,1 0.5,1 1,1`
*   **Best Use Case**: Full-screen mobile slide drawers, global header dropdown matrices.
*   **Accessibility Rules**: Sliding movements collapse into instant opacity dissolves under reduced motion. Nav trigger buttons must declare `aria-expanded="true" / "false"` states clearly.

---

### 13. Modals (The Vetting Gate)
*   **Purpose**: Full-screen slide-drawers that capture partner brief intakes with ultimate aesthetic restraint.
*   **Duration**: `550ms` (The Heavy Vault).
*   **Delay**: `0ms` (Immediate interface priority).
*   **Easing**: `vmn-motion-ease-slow` (`cubic-bezier(0.35, 1, 0.65, 1)`).
*   **Acceleration**: Massive mass slide. The modal slide drawer moves from the right margin over the first `220ms`.
*   **Deceleration**: Pneumatic deceleration. Slides to a solid, locked halt on our layout grid over `330ms`.
*   **Animation Curve**: `M 0,0 C 0.35,1 0.65,1 1,1`
*   **Best Use Case**: Enterprise booking gates, private proposal intake portals.
*   **Accessibility Rules**: Bounces focus completely inside the modal drawer (focus trap). Pressing `Escape` must instantly close the modal drawer. Under reduced motion settings, translations are completely deactivated, replaced by a pure overlay fade (≤ `150ms`).

---

### 14. Drawers (The Coordinate Reveal)
*   **Purpose**: Sliding utility panels displaying legal terms or campaign performance tables from page margins.
*   **Duration**: `400ms` (The Slide Coordinate).
*   **Delay**: `0ms` (Tactile responsive).
*   **Easing**: `vmn-motion-ease-damped` (`cubic-bezier(0.25, 1, 0.5, 1)`).
*   **Acceleration**: Controlled descent. Slides cleanly into view over `160ms`.
*   **Deceleration**: Friction seat. Decelerates softly to rest on target over `240ms`.
*   **Animation Curve**: `M 0,0 C 0.25,1 0.5,1 1,1`
*   **Best Use Case**: Secondary demographic tables, performance history logs.
*   **Accessibility Rules**: Keyboard tab sequential focus must lock inside the drawer container. Backwards scrolling is disabled when the drawer is active.

---

### 15. Tooltips (The Sandblasted Float)
*   **Purpose**: High-contrast, micro informational labels that float gracefully above hovered data coordinates.
*   **Duration**: `200ms` (The Crisp Hover).
*   **Delay**: `150ms` (Intended reading delay to prevent visual clutter).
*   **Easing**: `vmn-motion-ease-crisp` (`cubic-bezier(0.16, 1, 0.3, 1)`).
*   **Acceleration**: Sub-pixel leap. Pops upward exactly `6px` from its anchor over `50ms`.
*   **Deceleration**: Magnetic lock. Stops dead over `150ms`.
*   **Animation Curve**: `M 0,0 C 0.16,1 0.3,1 1,1`
*   **Best Use Case**: Financial charts trend values, metadata abbreviation decodes.
*   **Accessibility Rules**: Must be fully triggerable via keyboard focus (`Tab`). Bypassed under reduced motion, popping instantly into place at standard coordinates.

---

### 16. Scroll Timelines (The Parallax Blueprint)
*   **Purpose**: Scroll-driven grid expansions and abstract blueprint reveals that track the visitor's page vertical scroll.
*   **Duration**: Fluid (Directly bound to scroll position).
*   **Delay**: `0ms` (To prevent lag or scroll tearing).
*   **Easing**: Linear Easing (`linear`).
*   **Acceleration**: Perfectly proportional. Translates coordinates at a fixed ratio relative to the browser wheel.
*   **Deceleration**: Symmetrical. Stops immediately when wheel input ceases, tracking physical deceleration.
*   **Animation Curve**: `M 0,0 L 1,1`
*   **Best Use Case**: Page vertical dividers drawing out, background abstract structural schematics.
*   **Accessibility Rules**: Scroll-bound animations must be completely bypassed or flattened to static coordinates if the system registers a preference for reduced motion. Scroll bindings must not lock or block natural viewport scrolling.

---

## Animation Timing System Summary Matrix

The table below serves as a direct reference guide for systems engineers implementing our kinetic blueprints:

| Animation Type | Target Duration | Easing Function | Acc. Phase (approx.) | Dec. Phase (approx.) | Target Property | Reduced Motion Behavior |
| :--- | :---: | :--- | :---: | :---: | :---: | :--- |
| **Micro Ticks** | `100ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | `15ms` | `85ms` | `opacity`, `scale` | Instant state change |
| **Hover Ambient** | `300ms` | `cubic-bezier(0.25, 1, 0.5, 1)` | `120ms` | `180ms` | `color`, `border-color`| Instant transition (≤150ms)|
| **Section Reveal**| `600ms` | `cubic-bezier(0.25, 1, 0.5, 1)` | `180ms` | `420ms` | `transform`, `opacity` | Pure fade-in (250ms) |
| **Page Transition**| `800ms` | `cubic-bezier(0.35, 1, 0.65, 1)` | `320ms` | `480ms` | `opacity`, `clip-path` | Instant cross-fade (≤150ms)|
| **Hero Dawn** | `1200ms`| `cubic-bezier(0.35, 1, 0.65, 1)` | `400ms` | `800ms` | `transform`, `opacity` | Instant render (0ms) |
| **Loader Pulse** | `2000ms`| `cubic-bezier(0.4, 0, 0.6, 1)` | `1000ms`| `1000ms`| `opacity` | Slower, low-contrast wave |
| **Metric Decrypt**| `1500ms`| `cubic-bezier(0.16, 1, 0.3, 1)` | `300ms` | `1200ms`| `text-content` | Instant static display |
| **Text Engrave** | `800ms` | `cubic-bezier(0.25, 1, 0.5, 1)` | `160ms` | `640ms` | `transform`, `clip-path`| Instant static display |
| **Image Aperture**| `1000ms`| `cubic-bezier(0.35, 1, 0.65, 1)` | `300ms` | `700ms` | `clip-path`, `scale` | Instant static render |
| **Card Lift** | `350ms` | `cubic-bezier(0.25, 1, 0.5, 1)` | `100ms` | `250ms` | `transform`, `border` | Instant static highlight |
| **Button Slide** | `350ms` | `cubic-bezier(0.25, 1, 0.5, 1)` | `100ms` | `250ms` | `transform`, `background`| Instant static invert |
| **Nav Unfold** | `450ms` | `cubic-bezier(0.25, 1, 0.5, 1)` | `150ms` | `300ms` | `transform`, `opacity` | Instant fade-in |
| **Modal Vault** | `550ms` | `cubic-bezier(0.35, 1, 0.65, 1)` | `220ms` | `330ms` | `transform`, `opacity` | Instant fade overlay |
| **Drawer Slide** | `400ms` | `cubic-bezier(0.25, 1, 0.5, 1)` | `160ms` | `240ms` | `transform`, `opacity` | Instant fade overlay |
| **Tooltip Float** | `200ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | `50ms` | `150ms` | `transform`, `opacity` | Instant hover reveal |
| **Scroll Timeline**| Fluid | `linear` | Symmetrical | Symmetrical | `transform`, `clip-path`| Motion completely flattened |

---

## Animation-Consistency Verification Audit

Prior to approving any page transition, hover interaction, or scroll-bound component layout for the VMN platform, the engineering team must verify compliance against this five-point kinetic checklist:

* [ ] Are all transition animations, hover curves, and page view shifts completely free of bounce, vibration, or elastic recoil?
* [ ] Do all moving assets utilize exclusively our designated master kinetic formulas (Crunch, Vault, Chronos, or linear scroll)?
* [ ] Are all spatial translations, layout zooms, and parallax movements completely wrapped in `prefers-reduced-motion: reduce` safe fallbacks?
* [ ] Is every single animation performed exclusively on GPU compositor-accelerated properties (`transform`, `opacity`, `clip-path`), with zero paint-triggering properties used?
* [ ] Is the entire interface silent—completely free of unrequested background flashing, automatic text marquees, or infinite loading screens?
* [ ] Does every interactive transition trigger, card bounds, and animated button carry a unique, semantic, and clean DOM `id` parameter for tracking?
