# Valtreon Media Network (VMN) — Motion QA Checklist
*Document Reference: VMN-MQA-2026-v1.0*  
*Role: Mandatory Quality Assurance Gateway for All Core, Shared, and Partner Visual Assets*

---

## The Motion QA Mandate

This checklist acts as a **uncompromising quality gate**. No new component, landing horizon, micro-interaction, or data visualization on the Valtreon Media Network (VMN) may be merged or deployed to production unless it achieves a **100% Passing Score** on this compliance list.

Any visual transition that flickers, causes layout shifts, spikes battery temperatures, or compromises accessibility for vestibular-sensitive users represents a severe design defect. Use this document to audit, refine, and certify all interactive motion layers.

---

## 1. Animation Timing & Temporal Consistency

*   [ ] **Chronos Curve Standard**: Does the transition use the standard VMN easing curves (`cubic-bezier(0.35, 1, 0.65, 1)` or `cubic-bezier(0.16, 1, 0.3, 1)`)? Linear transitions and bouncy springs are strictly banned on elite, premium editorial cards.
*   [ ] **The 300ms Rule**: Is the animation duration within the acceptable human cognitive processing range?
    *   *Micro-interactions/Hover indicators*: **`≤ 150ms`**
    *   *Grid Card reveals/Category changes*: **`200ms - 300ms`**
    *   *Complex Screen transitions/Page swaps*: **`350ms - 500ms`** max
*   [ ] **Decoupled Durations**: Are timings proportional? Smaller visual elements must animate faster than large structural layouts. A button highlight must never take as long to transition as an entire dashboard grid column slide-in.

---

## 2. Technical Performance & Frame Stability

*   [ ] **Compositor-Only Transformations**: Are animations limited strictly to GPU-accelerated CSS properties? 
    *   *Allowed*: `transform` (translation, scale, rotation) and `opacity`.
    *   *Banned*: animating `height`, `width`, `margin`, `padding`, `top`, `left`, or `border-width` (which trigger expensive layout recalculations and main-thread repaint stalls).
*   [ ] **The Zero-CLS Directive**: Does the animation maintain a Cumulative Layout Shift of **`0.000`**? Moving an element must never push other sibling content layers, causing visual flickering.
*   [ ] **Layer Promotion**: Do active or sliding components explicitly declare `will-change: transform, opacity` upon mounting to prime the GPU?

---

## 3. Cognitive Accessibility (WCAG 2.2 AAA Compliance)

*   [ ] **System Preference Synchronization**: Does the animation instantly detect and adapt to system-level motion preferences using `@media (prefers-reduced-motion: reduce)`?
*   [ ] **Programmatic Override Compliance**: Does the component respect the VMN Simulator's local states (`reducedMotion === true` or `lowPowerMode === true`), instantly deactivating scales, sweeps, and high-frequency character decrypts?
*   [ ] **Alternative Transitions**: When motion is deactivated, does the component fall back to an instant color swap or clean opacity cross-fade (150ms max)?
*   [ ] **No Seizure Triggers**: Are all flashes, high-velocity flickers, and rapid pattern repetitions (exceeding 3 cycles per second) completely banned?
*   [ ] **No Forceful Scroll Hijacking**: Does the layout allow standard native user scroll wheel velocity, avoiding forced mechanical snapping or artificial scroll-hijack timelines?

---

## 4. Hardware Efficiency & Battery Conservation

*   [ ] **The Low Power Override**: When Low Battery Mode is detected (programmatically or via system API), does the interface immediately halt all autoplaying background video loops and canvas rendering streams?
*   [ ] **Static Loading States**: Are pulsing skeleton shimmers and spinning loading indicators replaced by quiet, static wireframes when energy conservation states are active?
*   [ ] **Zero Idle CPU Overhead**: Do animations fully terminate and release resources when they complete? Ensure there are no active `requestAnimationFrame` hooks, setInterval loops, or GSAP tick listeners running silently in the background of idle tabs.

---

## 5. Desktop vs. Mobile & Touch Screen Dynamics

*   [ ] **Touch-Target Stability**: On mobile viewports, are interactive cards prevented from moving or translating while they are actively being tapped? An active tap must never shift the button coordinate out from under the user's thumb.
*   [ ] **Native Touch Snapping**: Are horizontal carousels and portfolios utilizing native CSS touch-snap layout metrics instead of heavy, lag-prone JavaScript swipe libraries?
*   [ ] **The 44px Minimum Rule**: Are mobile hover hotspots and close buttons scaled to offer a minimum touch-target area of **`44px x 44px`**?
*   [ ] **Device Degradation**: Are heavy visual effects (such as video buffering simulators and layered SVG line drawings) disabled on low-power devices?

---

## 6. Motion Hierarchy & Attention Architecture

*   [ ] **Single-Focus Entry**: Does the motion sequence guide the eye to a single clear Call-to-Action? If three components animate simultaneously at different speeds on a single screen, the interface fails this criteria.
*   [ ] **Consistent Directionality**: Do all sliding elements move along a unified coordinate plane (e.g., all panels sliding out to the right, rather than competing elements sliding in random diagonal directions)?
*   [ ] **Spatial Integrity**: When a drawer or modal mounts, does it physically feel like it occupies a logical spatial layer above the master bento grid (e.g. using a subtle backdrop blur or background drop-shadow)?

---

## 7. Interaction Feedback Standards

*   [ ] **Instant Tactile Click Response**: When a user clicks a button, is there immediate visual acknowledgement (within **`50ms`**)? Even if the background action is delayed (network request), the button must transition to its active state immediately to prevent repetitive double-clicking.
*   [ ] **The Silent Hover Policy**: Do hover states remain visually understated? Avoid aggressive scaling, heavy colored dropshadows, or spinning icons. A subtle desaturation shift or background color swap is always preferred.
*   [ ] **Non-Interfering Form Error States**: Do input field error notifications (e.g., format validation failures) mount with an instant red monospace text fade, rather than shaking or bouncing the entire form container?

---

## QA Certification Registry

```
+-----------------------------------------------------------------------------------------+
|                                    MOTION QA LOG                                        |
+---------------------+-------------------------------+-----------------------------------+
| Component Inspected | Audit Findings                | Compliance Status                 |
+---------------------+-------------------------------+-----------------------------------+
| 1. InitialLoader    | Decrypts text progressively;  | [ PASS ] Decryption halts on      |
|                     | uses CSS-only progress bar.   | prefers-reduced-motion; instant   |
|                     |                               | exit fade is 150ms.               |
| 2. CreativeRoster   | Features video buffering reel | [ PASS ] Video disabled on low-   |
|                     | and desaturated hover zoom.   | power; zoom clip-path matches OS  |
|                     |                               | motion limits.                    |
| 3. PrivateBriefing  | Custom loading compile delay; | [ PASS ] Static validation texts; |
|                     | instant error state feedback. | error banners do not vibrate or   |
|                     |                               | shake the screen space.           |
+---------------------+-------------------------------+-----------------------------------+
```
