# Master Cursor Interaction & Pointer Staging Specification: Valtreon Media Network (VMN)
*Authored by: Director of Interaction Design, Chief of Kinetic Systems & Principal UX Architect*  
*Classification: Permanent Enterprise Design Standards & Cursor System Contract (SOT)*  
*Design Paradigm: Swiss Rationalism meets High-Precision Pointer Feedback (Apple, Cuberto & Active Theory Inspired)*

---

## Declaration of Pointer Sovereignty

This specification defines the permanent, uncompromised **Cursor Interaction & Pointer Tracking System** for the Valtreon Media Network (VMN) platform.

At Valtreon, we reject default browser cursor behaviors as cold, sterile, and unconsidered. However, we also completely reject the self-indulgent, gimmicky custom cursors common in modern AI templates—such as slow-trailing circular blobs, laggy fluid simulations, and sparkling particle trails that clutter the interface and degrade viewport performance. True luxury is not loud; it is **silent, functional, and deeply reassuring**.

Our pointer system is designed to act as a **Precision Telemetry Instrument**. It utilizes highly damped linear interpolation (lerp) tracking and elegant monoline geometry to bridge the gap between user intent and active UI coordinates. By converting simple mouse pointers into smart, contextual lenses, we elevate accessibility, clarify visual boundaries, and provide immediate mechanical validation.

Every custom pointer transition, coordinate tracker, magnet state, and dragging overlay developed for VMN **MUST** strictly conform to the engineering rules defined within this spec.

---

## 1. Core Cursor Behavior & Physics (The Telemetry Engine)

Our pointer system separates the raw mouse position from the rendered cursor tracker, utilizing a highly controlled **Momentum Tracking Function** that models physical mass and friction.

```
      [ MOUSE CONTROLLER ] ───────> [ LERP SMOOTHING ENGINE ] ───────> [ CUSTOM TELEMETRY TRACKER ]
      Raw System Coordinates            Linear Interpolation (Lerp)           Fine Monoline Reticle
         (Jagged & Rigid)                 α = 0.150 (Dynamic)                (Zero-Radius / 60fps)
```

### 1.1 Linear Interpolation (Lerp) Rules
The custom custom pointer coordinates ($x_{\text{cursor}}, y_{\text{cursor}}$) glide smoothly toward the raw pointer coordinates ($x_{\text{mouse}}, y_{\text{mouse}}$) according to the following motion formula:

$$x_{\text{cursor}} = x_{\text{cursor}} + (x_{\text{mouse}} - x_{\text{cursor}}) \times \alpha$$

$$y_{\text{cursor}} = y_{\text{cursor}} + (y_{\text{mouse}} - y_{\text{cursor}}) \times \alpha$$

Where $\alpha$ represents our custom **Pointer Inertia Constant**:
*   **Standard State**: **`0.150`** (Provides a responsive, fluid follow lag that avoids feeling sluggish).
*   **Active Target Snapping**: **`0.250`** (Increases snapping speed when capturing interactive perimeters).
*   **Heavy Dragging State**: **`0.080`** (Increases inertia and perceived material weight during manual slider drags).

### 1.2 Structural Visual Design
*   **The Default Reticle**: The VMN cursor consists of a razor-thin, single-pixel **`12px x 12px`** hollow crosshair set in desaturated Steel Sage (`#52525B` / `border-zinc-600`) with uncompromised zero-radius corners (`rounded-none`).
*   **The Telemetry Label**: Positioned exactly `16px` to the bottom-right of the crosshair, a micro-monospace label displays real-time screen coordinate offsets set in JetBrains Mono: `[ X: 1422 . Y: 0918 ]`. This label is colored at a desaturated opacity of `30%`, blending into our Deep Obsidian backdrop.

---

## 2. Pointer Transitions & Interactive Targets

When the cursor transitions between empty canvas spaces and interactive UI zones, it must change state cleanly using compositor-accelerated transformations over exactly **`200ms`** driven by our **Crunch Curve** (`cubic-bezier(0.16, 1, 0.3, 1)`).

```
+-----------------------------------------------------------------------------------------+
|                              CURSOR TELEMETRY STATE REGISTRY                            |
+---------------------+-------------------------------+-----------------------------------+
| Target Class        | Pointer State Shift           | Telemetry Readout & Styling       |
+---------------------+-------------------------------+-----------------------------------+
| 1. Empty Canvas     | Default Monoline Crosshair    | [ X: Coordinate . Y: Coordinate ] |
| 2. Standard CTA     | Bracket Anchor Snap           | [ ACTIVE_COORDINATE ] / Bronze    |
| 3. Portfolio Media  | Focal Aperture Expand         | [ VIEW_CAMPAIGN ] / desat text    |
| 4. Video Canvas     | Playhead Timeline Tracker     | [ PLAY_PREVIEW ] / time tracker   |
| 5. Swipe Carousel   | Drag Vector Compass           | [ SWIPE_GALLERY ] / drag arrows   |
+---------------------+-------------------------------+-----------------------------------+
```

---

### 2.1 Magnetic Button Snapping
*   **The Phenomenon**: When the pointer enters a **`24px`** activation buffer surrounding a tactical action button, the custom reticle snaps to capture the outer perimeters of the button.
*   **The Physics**: The button itself shifts slightly toward the cursor position by a maximum of **`4px`** (`translate-x` and `translate-y`), mimicking magnetic attraction.
*   **The Transition**: The default crosshair expands smoothly into fine outer brackets that match the button bounds over **`200ms`** (`vmn-motion-ease-crisp`), locking the user's attention onto the action coordinate.

---

### 2.2 Image & Media Hover (The Aperture Lens)
*   **The Phenomenon**: Entering a widescreen portfolio image container triggers the pointer to behave as a **focal lens**.
*   **The Transition**: The monospace coordinates fade-out, replaced by a central, desaturated uppercase tag: `[ VIEW_CAMPAIGN ]`. The crosshair scales up cleanly by `1.5x` while its borders blur slightly, matching the cinematic documentary theme of VMN.
*   **Color Shift**: The pointer stroke transitions smoothly to Champagne Bronze (`#9C8465`).

---

### 2.3 Creator Cards & Brand Cases
*   **The Phenomenon**: Hovering over our signed creator profiles or represented filmmaker bento grids.
*   **The Transition**: The custom reticle scales down into a solid, single-pixel central dot, while the text tag shifts to read the creator's initials or classification code (e.g., `[ ROSTER // SEC_04 ]`). This maintains a clean, architectural blueprint look while guiding navigation.

---

### 2.4 Video Preview Tracker
*   **The Phenomenon**: Moving the pointer over a documentary campaign preview or video cell.
*   **The Transition**: The reticle transforms into a miniature horizontal scrubber bar that tracks cursor X-axis movement relative to the video frame, displaying a live timecode in JetBrains Mono: `[ PREVIEW // 00:04 // 00:15 ]`.
*   **The Interaction**: This timeline indicator allows corporate partners to preview video sequences instantly before initiating a full-page co-production review.

---

### 2.5 Swiping & Dragging Indicators
*   **The Phenomenon**: Hovering over horizontal portfolio panels or carousel grids that support manual swipes.
*   **The Transition**: The vertical crosshair line scales down to `0`, while the horizontal crosshair line extends into a left-and-right directional arrow vector: `← ──── ── ── ──── →`.
*   **The Label**: The telemetry text shifts cleanly to display: `[ HOLD_AND_SWIPE ]`. Upon mouse-down, the arrows compress tightly, signaling cursor lock.

---

### 2.6 Reading & Scroll Indicators
*   **The Phenomenon**: Entering long-form editorial narrative blocks or legal text ledgers.
*   **The Transition**: The telemetry label and crosshair scale down to zero opacity, returning focus entirely to the text reading baseline. 
*   **Visual Return**: The cursor behaves as a subtle, single horizontal line resting exactly `4px` beneath the active line of text, functioning as a silent visual reading guide.

---

## 3. Pointer States & Mechanical States

To ensure the cursor responds with uncompromised mechanical accuracy, click and drag actions trigger immediate sub-pixel physical feedback:

*   **Mouse-Down State (Actuation)**: Upon initiating a click, the custom reticle scales down instantly to `scale-[0.80]` over exactly **`100ms`** (`vmn-motion-ease-crisp`). The monospace telemetry coordinate shifts its text color to signature Champagne Bronze (`#9C8465`), providing tactile visual confirmation.
*   **Mouse-Up State (Release)**: Relaxes back to standard bounds (`scale-100`) over **`150ms`**, stabilizing on the grid with zero vertical wobble.
*   **Pointer Leave (Fallback)**: When the mouse pointer exits the browser viewport bounds, the custom reticle fades out cleanly to `opacity-0` over **`300ms`** using our **Hover Curve**, avoiding visual residue.

---

## 4. Performance & Hardware Budgets

Custom pointer layers must execute with absolute frame-rate stability. We enforce a zero-tolerance policy for input lag or frame drops:

*   **The Compositor Contract**: The custom pointer layer **MUST** be styled with `will-change: transform` and `pointer-events-none`. All smooth translations must execute exclusively on GPU compositor-accelerated properties using:
    *   `transform: translate3d(x, y, 0)`
    *   `opacity`
    *   `scale()`
*   **No Paint Triggers**: We strictly forbid the animation of width, height, margin, padding, or absolute placement properties (`top`, `left`, `right`, `bottom`) within pointer tracking functions, precluding browser layout reflows.
*   **Zero Cursor Hidden on Fail**: If the system's frame rate drops below **`55fps`**, the custom telemetry tracker layer must instantly hide itself, and the default system cursor must be restored immediately to prevent input frustration.

---

## 5. Pointer Accessibility & Vestibular Safeguards

True luxury is universally considerate. Our custom pointer tracker is engineered to ensure absolute comfort and complete usability for all visitors:

```
[ THE POINTER ACCESSIBILITY GATEWAY ]
  │
  ├─> System: prefers-reduced-motion: normal ───────> Custom Telemetry Tracker Active (Lerp α = 0.150)
  │
  └─> System: prefers-reduced-motion: reduce ───────> Custom Tracker Layer completely DEACTIVATED.
                                                      Default System Cursor restored instantly.
```

*   **The Reduced Motion Override**: If a visitor's device registers a preference for reduced motion (`prefers-reduced-motion: reduce`), the custom telemetry tracker layer **MUST be instantly and completely deactivated**.
    *   **The Alternative**: The system cursor behaves with standard browser physics. No custom HTML elements trail the pointer, and magnetic snapping effects are disabled to prevent motion sickness.
*   **Screen Reader & Audio Continuity**: The custom cursor element must declare the attribute `aria-hidden="true"` and carry a `tabindex="-1"` tag to ensure it remains completely invisible to screen readers and keyboard users, preventing DOM navigation interruptions.
*   **No Cursor Reliance**: Interactive components must remain 100% functional, navigable, and visually distinct *without* the presence of the custom cursor. All hover indicators, custom tooltips, and click confirmations must have native, CSS-driven fallbacks.
*   **Click-Target Sizing Laws**: The custom snapping crosshair must never shrink the physical bounds of touch points. Active tap regions must maintain our uncompromised **`44px x 44px`** minimum mobile bounding area.

---

## Cursor-Consistency Verification Audit

Prior to approving any custom pointer transitions, magnetic snapping actions, or video scrubbers for the VMN platform, the development team must verify compliance against this five-point kinetic checklist:

* [ ] Is the custom custom telemetry cursor completely deactivated if the system registers `prefers-reduced-motion: reduce`?
* [ ] Does the custom tracker layer utilize exclusively GPU-promoted `transform: translate3d()` properties, maintaining a locked 60fps?
* [ ] Are all click target perimeters and touch points fully functional and accessible without relying on the custom cursor?
* [ ] Is the custom cursor completely silent—completely free of trailing neon gradients, particle bursts, and circular bubble halos?
* [ ] Does every interactive snapping CTA and magnetic card carry a unique, clean, and semantic DOM `id` parameter for precise control?
