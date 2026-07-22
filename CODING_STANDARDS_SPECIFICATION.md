# Master Coding Standards & Engineering Style Guide: Valtreon Media Network (VMN)
*Authored by: Principal Systems Architect, Lead Frontend Architect & Chief Technology Officer*  
*Document Reference: VMN-STYLE-2026-v1.0 (Master Engineering Style Guide Specification SOT)*  
*Classification: Permanent Enterprise Architecture Specification & Engineering Code Contract*  
*Target Stack: Next.js 15+ (App Router), React 19, TypeScript 5.5+, Tailwind CSS v4, ESLint, Prettier, Vitest, Playwright*

---

## EXECUTIVE ARCHITECTURAL MANDATE & CODE QUALITY PHILOSOPHY

As Principal Systems Architect for Valtreon Media Network (VMN), I have authored the master **Coding Standards & Engineering Style Guide Specification**.

In strict adherence to VMN's permanent **Digital Hygiene Directive** and our commitment to **Swiss Modernist Design**, our engineering philosophy treats code quality, readability, type safety, and component architecture as immutable enterprise contracts.

We explicitly reject "AI Slop" in codebase structure — monolithic single-file components, sloppy or loose `any` types, inconsistent variable casing, messy import ordering, missing error boundaries, unhandled edge cases, and uncommented complex algorithms.

Instead, VMN enforces a **Zero-Technical-Debt Engineering Contract**. Every file, component, hook, type definition, and utility function must adhere to deterministic naming conventions, strict modular separation of concerns, explicit TypeScript contracts, predictable error handling, and automated linting/formatting rules across the entire platform.

---

# 1. NAMING CONVENTIONS & TAXONOMY MATRIX

VMN enforces strict, deterministic naming rules across every codebase asset to ensure instant scannability and eliminate naming ambiguity:

```
+-----------------------------------------------------------------------------------------------------------------------+
| VALTREON MEDIA NETWORK NAMING CONVENTION MATRIX                                                                       |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| Engineering Asset | Casing Style       | Naming Convention & Pattern Examples          | Mandatory Prefix / Suffix    |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| Folder Names      | kebab-case         | `telemetry-management`, `creator-cards`       | Lowercase, hyphen-separated  |
| File Names        | kebab-case / Pascal| `creator-card.tsx` (Comps), `use-auth.ts` (Hk)| Match primary export type    |
| React Components  | PascalCase         | `TelemetryBentoGrid`, `AllianceIntakeForm`    | Descriptive noun phrase      |
| Custom React Hooks| camelCase          | `useTelemetryMetrics`, `useScrollPosition`    | MUST start with `use` prefix |
| TypeScript Types  | PascalCase         | `CreatorDossier`, `IntakeSubmission`          | Pure noun, no `I` prefix     |
| TypeScript Enums  | PascalCase         | `CoProductionDiscipline`, `AllianceRole`       | Singular PascalCase          |
| Enum Values       | UPPER_SNAKE_CASE   | `DOCUMENTARY_FILM`, `EXECUTIVE_CLIENT`        | Uppercase, underscore-split  |
| Utility Functions | camelCase          | `formatCurrencyAcv`, `calculatePipelineLift`  | Verb-first action phrase     |
| Constants / Config| UPPER_SNAKE_CASE   | `MAX_ACV_FLOOR_UNDERWRITE`, `DEFAULT_TIMEOUT` | Uppercase constants          |
| CSS Class Names   | kebab-case         | `telemetry-sparkline-node`, `card-surface`    | Utility / BEM-inspired       |
| Environment Vars  | UPPER_SNAKE_CASE   | `NEXT_PUBLIC_APP_URL`, `DATABASE_URL`         | UPPER_SNAKE_CASE             |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
```

---

# 2. FILE & FOLDER STRUCTURE STANDARDS

```
+-----------------------------------------------------------------------------------------------------------------------+
| FILE & FOLDER ORGANIZATIONAL RULES                                                                                    |
|                                                                                                                       |
| 1. ONE PRIMARY COMPONENT PER FILE:                                                                                     |
|    Each React component file MUST export exactly one primary component as its default export or named export.         |
|    Auxiliary micro-components used exclusively within that file may exist as unexported internal helpers.             |
|                                                                                                                       |
| 2. CO-LOCATION OF RELATED ASSETS:                                                                                     |
|    Component-specific sub-components, types, and hooks MUST be co-located inside the component's directory or module.  |
|                                                                                                                       |
| 3. STRICT KEBAB-CASE DIRECTORIES:                                                                                     |
|    All directories inside `/src` MUST use lowercase kebab-case (e.g. `src/components/feature-modules/hero`).          |
|    NEVER mix camelCase or PascalCase in folder names.                                                                 |
+-----------------------------------------------------------------------------------------------------------------------+
```

### Directory Taxonomy Example
- `/src/components/ui/button.tsx` — Atomic UI primitive.
- `/src/components/features/hero/hero-feature.tsx` — Domain feature module.
- `/src/hooks/use-telemetry.ts` — Custom React hook.
- `/src/types/telemetry.ts` — Shared TypeScript interface and type definitions.
- `/src/lib/utils/formatters.ts` — Pure helper utility functions.

---

# 3. REACT COMPONENT ARCHITECTURE & PATTERNS

```
+-----------------------------------------------------------------------------------------------------------------------+
| REACT COMPONENT CODE CONTRACT                                                                                        |
+-------------------+-----------------------------------------------+---------------------------------------------------+
| Component Aspect  | Mandatory Standard & Rule                     | Prohibited Anti-Pattern                           |
+-------------------+-----------------------------------------------+---------------------------------------------------+
| Component Type    | Functional Components with Hooks ONLY         | NO Class Components                               |
| Export Style      | Explicit Named Exports (`export function...`) | NO Anonymous Default Exports                      |
| Type Annotation   | Explicit Props Interface typing               | NO `React.FC` or implicit `any` props             |
| Logic Separation  | Complex state/effects extracted to hooks      | NO 300+ line monolithic components                |
| Key Prop Binding  | Unique stable string IDs (`key={item.id}`)    | NO array index key binding (`key={index}`)        |
| Inline Functions  | Handlers memoized or extracted to top-level   | NO inline heavy arrow functions inside JSX loops  |
+-------------------+-----------------------------------------------+---------------------------------------------------+
```

### Component Structure Sequence
Every React component file must follow a predictable, standardized internal section order:
1. **Imports**: External libraries -> Internal components -> Hooks -> Utilities -> Types -> Styles.
2. **Interface Definition**: `interface ComponentNameProps { ... }`.
3. **Component Declaration**: `export function ComponentName({ propA, propB }: ComponentNameProps)`.
4. **Hooks & State Execution**: Custom hooks -> Standard React hooks (`useState`, `useRef`).
5. **Event Handlers & Helper Logic**: Event callbacks (`handleFormSubmit`, `handleFilterSelect`).
6. **JSX Render Return**: Clean, semantic JSX return layout.

---

# 4. TYPESCRIPT STRICTNESS & TYPE SAFETY CONTRACT

VMN enforces full TypeScript strict mode (`"strict": true` in `tsconfig.json`). Loose typing is strictly forbidden:

```
+-----------------------------------------------------------------------------------------------------------------------+
| TYPESCRIPT TYPE SAFETY CONTRACT                                                                                       |
+-------------------+-----------------------------------------------+---------------------------------------------------+
| Rule Category     | Mandatory Engineering Requirement             | Strict Anti-Pattern / Prohibition                 |
+-------------------+-----------------------------------------------+---------------------------------------------------+
| `any` Type        | STRICTLY PROHIBITED. Use `unknown` if needed  | NO `any` casting under any circumstance           |
| Interface vs Type | Use `interface` for object shapes & props,    | NO mixing `type` for simple object contracts      |
|                   | `type` for unions & primitives                |                                                   |
| Type Assertion    | Use type guards or Zod validation parsing     | NO unsafe `as TargetType` casting overrides       |
| Enums             | Standard PascalCase `enum` with UPPER values  | NO `const enum` declarations                      |
| Nullability       | Explicit optional keys (`key?: string`)       | NO unhandled `undefined` access without guards    |
| Return Types      | Explicit function return type annotations     | NO implicit return type inferences for APIs       |
+-------------------+-----------------------------------------------+---------------------------------------------------+
```

---

# 5. PROPS PHILOSOPHY & DESTRUCTURING STANDARDS

```
+-----------------------------------------------------------------------------------------------------------------------+
| PROPS ARCHITECTURE RULES                                                                                              |
|                                                                                                                       |
| 1. MANDATORY DESTRUCTURING AT SIGNATURE:                                                                              |
|    Props MUST be destructured directly in the component function parameter signature.                                 |
|    Example: `export function Badge({ label, variant = 'primary' }: BadgeProps)`                                        |
|                                                                                                                       |
| 2. IMMUTABILITY & PURE PASSING:                                                                                       |
|    Components MUST treat props as immutable values. Never mutate props directly.                                      |
|                                                                                                                       |
| 3. EXPLICIT DEFAULT VALUES:                                                                                           |
|    Optional props MUST specify default values via parameter destructuring defaults.                                   |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

# 6. IMPORT & EXPORT ARCHITECTURE

VMN enforces an organized import hierarchy separated into clean, readable groups:

```
+-----------------------------------------------------------------------------------------------------------------------+
| IMPORT ORDER & GROUPING SPECIFICATION                                                                                 |
|                                                                                                                       |
| GROUP 01: Core Framework Imports (React, Next.js)                                                                     |
| GROUP 02: Third-Party Libraries (Framer Motion, GSAP, Zustand, TanStack Query, Lucide Icons)                         |
| GROUP 03: Internal Layout & Component Modules (`@/components/...`)                                                    |
| GROUP 04: Internal Custom Hooks (`@/hooks/...`)                                                                       |
| GROUP 05: Utilities, Formatters & Helpers (`@/lib/...`)                                                               |
| GROUP 06: TypeScript Interfaces & Types (`@/types/...`)                                                               |
+-----------------------------------------------------------------------------------------------------------------------+
```

### Path Aliases Directive
- Use absolute path aliases (`@/...`) for all internal codebase imports.
- Relative imports (`../../components/button`) are strictly prohibited beyond the immediate sibling directory.

---

# 7. COMMENTS & JSDOC DOCUMENTATION STANDARDS

```
+-----------------------------------------------------------------------------------------------------------------------+
| COMMENTS & DOCUMENTATION RULES                                                                                        |
+-------------------+-----------------------------------------------+---------------------------------------------------+
| Documentation Type| Target Scope                                  | Mandatory Format & Content Standard               |
+-------------------+-----------------------------------------------+---------------------------------------------------+
| JSDoc Block       | All exported hooks, utilities, and complex    | Multi-line JSDoc detailing `@param`, `@returns`,  |
|                   | domain feature components                     | and business purpose overview                     |
| Inline Comments   | Complex business calculations ($75k ACV math, | Explain *WHY* the code exists, not *WHAT* it does |
|                   | GLSL shader algorithms)                       |                                                   |
| TODO Comments     | Temporary pending work or future optimizations| Format: `// TODO(author): Description [Issue #]`  |
+-------------------+-----------------------------------------------+---------------------------------------------------+
```

---

# 8. FORMATTING & CODE STYLE STANDARDS

Code formatting is enforced automatically at the pre-commit stage via Prettier and ESLint:

```
+-----------------------------------------------------------------------------------------------------------------------+
| PRETTIER & FORMATTING SPECIFICATION                                                                                   |
+-------------------+-----------------------------------------------+---------------------------------------------------+
| Formatting Option | Enforced Standard Value                       | Rationale & Benefit                               |
+-------------------+-----------------------------------------------+---------------------------------------------------+
| Print Width       | 100 characters                                | Optimal readability across splitscreen editors    |
| Tab Width         | 2 spaces                                      | Clean indent hierarchy without horizontal waste   |
| Semi              | `true` (Mandatory Semicolons)                 | Prevents automatic semicolon insertion bugs       |
| Single Quote      | `true` (Single Quotes for JS/TS)              | Standard JS clean styling                         |
| JSX Single Quote  | `false` (Double Quotes for JSX)               | Standard HTML/JSX attribute convention            |
| Trailing Comma    | `es5` (Trailing commas on multi-line objects) | Clean git diffs when adding new object properties |
| Arrow Parens      | `always` (e.g. `(x) => x`)                    | Consistent arrow function parameter syntax        |
+-------------------+-----------------------------------------------+---------------------------------------------------+
```

---

# 9. ERROR HANDLING & FAULT TOLERANCE PATTERNS

```
+-----------------------------------------------------------------------------------------------------------------------+
| ERROR HANDLING SPECIFICATION                                                                                          |
|                                                                                                                       |
| 1. NEVER SILENTLY SWALLOW ERRORS:                                                                                     |
|    Catch blocks MUST log errors to monitoring telemetry or present user-facing feedback.                              |
|    Empty `catch (e) {}` blocks are strictly forbidden.                                                                |
|                                                                                                                       |
| 2. TYPED CUSTOM ERROR CLASSES:                                                                                        |
|    Domain errors MUST extend a base `AppError` class with error codes and HTTP status mapping.                        |
|                                                                                                                       |
| 3. USER-FRIENDLY ERROR MESSAGING:                                                                                     |
|    Technical database error dumps MUST NEVER be displayed directly to the end user.                                    |
|    Display clear, actionable broadsheet error messages (`[ BASELINE $75K ACV REQUIREMENT NOT MET ]`).                 |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

# 10. TESTING STRATEGY & QUALITY ASSURANCE CONTRACT

VMN enforces a 3-layer automated testing pyramid to prevent regressions:

```
+-----------------------------------------------------------------------------------------------------------------------+
| VALTREON MEDIA NETWORK TESTING PYRAMID                                                                                |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| Test Layer        | Framework Tool     | Primary Testing Scope                         | Target Coverage SLA          |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| Unit Tests        | Vitest             | Pure utility functions, ACV calculators,      | ≥ 90% Code Coverage          |
|                   |                    | Zod schema validation rules, data formatters  |                              |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| Component Tests   | React Testing Lib  | UI primitives, form interactions, modal dialogs| Key interactive user flows   |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
| End-to-End (E2E)  | Playwright         | Complete intake gate submission, portal login,| Critical C-suite conversion  |
|                   |                    | director roster filtering & comparison        | paths across viewports       |
+-------------------+--------------------+-----------------------------------------------+------------------------------+
```

---

# 11. ENGINEERING BEST PRACTICES & STYLE GUIDE SUMMARY MATRIX

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    ENGINEERING STYLE GUIDE SUMMARY MATRIX                                             |
+-------------------+-----------------------------------+---------------------------------------------------------------+
| Style Guide Domain| Enforced Technical Standard       | Primary Engineering Benefit & Outcome                         |
+-------------------+-----------------------------------+---------------------------------------------------------------+
| Naming Conventions| PascalCase Comps, kebab-case files| Instant scannability, zero casing ambiguity across OS platforms|
| React Architecture| Server Components first, hooks    | 0 KB client JS overhead for static layouts, modular logic     |
| TypeScript Safety | `"strict": true`, 0 `any` types   | Total type safety, compile-time error detection               |
| Props Contract    | Destructured signature, interfaces| Immutable, explicitly typed component inputs with defaults    |
| Imports / Exports | Absolute `@/...` path aliases     | Clean import trees, zero fragile relative path traversal      |
| Formatting        | 100ch width, semicolons enabled   | Deterministic automated code formatting via Prettier & ESLint |
| Error Handling    | Typed custom errors, `error.tsx`  | Isolated component crash recovery without breaking page shell |
| Testing Strategy  | Vitest + React Testing + Playwright| 90%+ unit test coverage, zero regression PR deployments       |
+-------------------+-----------------------------------+---------------------------------------------------------------+
```
