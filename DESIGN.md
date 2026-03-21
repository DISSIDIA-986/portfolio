# Design System — Yupo Niu Portfolio

## Product Context
- **What this is:** Senior developer portfolio showcasing 17 years of engineering experience, AI/ML projects, and full-stack system design
- **Who it's for:** Canadian and global tech recruiters, hiring managers, engineering leads
- **Space/industry:** Developer portfolios — peers include Brittany Chiang, Lee Robinson, Josh Comeau
- **Project type:** Single-page marketing site with 8 content sections

## Aesthetic Direction
- **Direction:** Industrial/Utilitarian — function-first, data-dense where it matters, monospace accents
- **Decoration level:** Intentional — terminal blocks are the signature element, subtle texture for depth
- **Mood:** An engineer's workspace, not a marketing template. Confident, seasoned, precise. The design should communicate "I solve hard problems" through craft, not flash.
- **Reference sites:** brittanychiang.com (dark + single accent), leerob.com (ultra-minimal serif)

## Typography

- **Display/Hero:** Instrument Serif — serif comeback signals authority and maturity. A 17-year veteran earns a typeface that says "seasoned." Differentiates from every sans-serif-only dev portfolio.
- **Body:** Geist (by Vercel) — modern, technically precise, designed for developer tools. Replaces Inter (ubiquitous) and Poppins (overused).
- **UI/Labels:** Geist (same as body, semi-bold for emphasis)
- **Data/Tables:** Geist (supports tabular-nums)
- **Code:** JetBrains Mono — unchanged, excellent for terminal blocks
- **Loading:** Google Fonts (`next/font/google`)
- **Scale:**

| Level | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| H1 | Instrument Serif | 48px / 3rem | 400 | Hero title only |
| H2 | Instrument Serif | 36px / 2.25rem | 400 | Section headers |
| H3 | Geist | 18px / 1.125rem | 600 | Subsection titles, card titles |
| H4 | Geist | 14px / 0.875rem | 600 | Compact card titles |
| Body | Geist | 16px / 1rem | 400 | Paragraphs, descriptions |
| Small | Geist | 14px / 0.875rem | 400 | Secondary text |
| Tiny | Geist | 12px / 0.75rem | 500 | Tags, badges |
| Mono | JetBrains Mono | 13px / 0.8125rem | 400 | Terminal, code, tech labels |

### Font blacklist (never use)
Papyrus, Comic Sans, Lobster, Impact, Jokerman, Courier New (for body)

### Overused fonts (avoid as primary)
Inter, Roboto, Arial, Helvetica, Open Sans, Lato, Montserrat, Poppins

## Color

- **Approach:** Restrained — one primary + one accent + warm neutrals. Color is meaningful, not decorative.

### Primary — Teal (technical depth, craft)
Replaces indigo to escape the #1 AI slop pattern (purple/violet gradients).

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | `#f0fdfa` | Light hover backgrounds |
| `primary-100` | `#ccfbf1` | Light active backgrounds |
| `primary-200` | `#99f6e4` | Light borders |
| `primary-300` | `#5eead4` | Decorative accents |
| `primary-400` | `#2dd4bf` | Dark mode text, links |
| `primary-500` | `#14b8a6` | Mid-weight interactive elements |
| `primary-600` | `#0d9488` | **Primary brand color** — buttons, links, section accents |
| `primary-700` | `#0f766e` | Button hover, emphasis |
| `primary-800` | `#115e59` | Deep accents |
| `primary-900` | `#134e4a` | SVG diagram background end |
| `primary-950` | `#042f2e` | SVG diagram background start |

### Accent — Amber (AI, innovation) — unchanged
| Token | Hex | Usage |
|-------|-----|-------|
| `accent-400` | `#fbbf24` | Dark mode challenge text |
| `accent-500` | `#f59e0b` | Mid-weight accent |
| `accent-600` | `#d97706` | Challenge question tags, AI badges |
| `accent-700` | `#b45309` | Accent button hover |

### Neutrals — Warm Stone (replaces cold gray)
| Context | Light | Dark |
|---------|-------|------|
| Body bg | `#ffffff` | `#1c1917` (stone-900) |
| Surface alt | `#f5f5f4` (stone-100) | `#292524` (stone-800) |
| Body text | `#1c1917` (stone-900) | `#fafaf9` (stone-50) |
| Muted text | `#57534e` (stone-600) | `#a8a29e` (stone-400) |
| Borders | `#e7e5e4` (stone-200) | `#44403c` (stone-700) |
| Faint text | `#a8a29e` (stone-400) | `#78716c` (stone-500) |

### Semantic
| State | Hex | Usage |
|-------|-----|-------|
| Success | `#059669` (emerald-600) | Form success, positive states |
| Warning | `#d97706` (amber-600) | Caution states (shares with accent) |
| Error | `#dc2626` (red-600) | Form errors, destructive actions |
| Info | `#0d9488` (teal-600) | Informational states (shares with primary) |

### Dark mode strategy
- Surfaces shift to warm stone (`#1c1917`, `#292524`) instead of cold gray
- Primary teal reduces saturation slightly: use `primary-400` for text, `primary-500` for interactive
- Amber accent unchanged — warm tones read well on dark warm surfaces
- Reduce white to `#fafaf9` (stone-50) to avoid harsh contrast

## Spacing
- **Base unit:** 4px
- **Density:** Comfortable
- **Scale:** 2xs(2px) xs(4px) sm(8px) md(16px) lg(24px) xl(32px) 2xl(48px) 3xl(64px)

| Context | Value |
|---------|-------|
| Section padding | `py-12 md:py-16` or `py-16 md:py-24` |
| Container max-width | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| Card padding | `p-6` (featured), `p-4` (compact) |
| Card gap | `gap-6` (featured grid), `gap-4` (compact grid) |
| Tag/badge padding | `px-2 py-0.5` (standard), `px-1.5 py-0.5` (compact) |

## Layout
- **Approach:** Grid-disciplined — strict columns, predictable alignment
- **Grid:** 1 col mobile, 2 col tablet (md), 2-3 col desktop (lg)
- **Max content width:** `max-w-7xl` (1280px)
- **Border radius:** sm: 6px (`rounded-md`), md: 8px (`rounded-lg`), lg: 12px (`rounded-xl`), full: 9999px (`rounded-full` for tags)

## Motion
- **Approach:** Intentional — subtle entrance animations, meaningful state transitions
- **Library:** Framer Motion
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(100ms) short(200ms) medium(300-500ms)
- **Pattern:** Staggered children with `containerVariants`/`itemVariants`
- **Scroll:** `whileInView` with `viewport: { once: true }`

## Component Patterns

### Terminal Block (signature component)
- Dark chrome: warm stone surface (`#292524`) with traffic light dots
- Content: JetBrains Mono, teal for commands, amber for emphasis, stone-500 for operators
- Used by: Hero, HowIThink sections

### Image Lightbox
- Tap to open full-screen overlay (`bg-black/80`)
- ZoomIn icon affordance (bottom-right, semi-transparent)
- Pinch-to-zoom (mobile), scroll-to-zoom (desktop) via YARL

### Cards
- Featured: `rounded-xl` with border, hover shadow
- Compact: `rounded-lg` with border, hover shadow

### Buttons
- Primary: teal-600 fill, white text
- Outline: teal-600 border, transparent bg, fill on hover
- Ghost: transparent, muted text, darken on hover

### Tags/Badges
- Tech: stone bg, muted text, rounded-full
- Category/AI: amber bg with low opacity, amber text

## SVG Architecture Diagrams

Consistent style across all project diagrams in `public/images/projects/`:

| Property | Value |
|----------|-------|
| ViewBox | `0 0 800 500` |
| Background | Linear gradient `primary-950` → `primary-900` (teal) |
| Font | `Inter, system-ui, sans-serif` |
| Card fill | Gradient `primary-600` → `primary-700` with `primary-400` stroke |
| Accent colors | Cyan (`#06b6d4`), Purple (`#8b5cf6`), Green (`#059669`), Amber (`#d97706`) |
| Arrows | `primary-400` with arrow marker |
| Corner radius | `rx="8"` on cards, `rx="12"` on background |

## Responsive Breakpoints
- `sm`: 640px
- `md`: 768px (primary breakpoint — mobile/desktop split)
- `lg`: 1024px
- `xl`: 1280px

## Design Risks (intentional departures)

| Risk | Rationale | Gain | Cost |
|------|-----------|------|------|
| Instrument Serif headings | Most dev portfolios use sans-serif only. Serif signals maturity and confidence. | Instant differentiation from AI-generated portfolios | Might feel unexpected to some visitors |
| Teal instead of indigo | 80% of AI-built portfolios use purple/indigo. Teal reads as "handcrafted." | Escapes the AI slop pattern | Loses the "safe" purple palette |
| Warm stone neutrals | Cold grays feel sterile. Warm stone feels intentional and inviting. | More personality, less template | Subtle — most visitors won't notice consciously |

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-21 | Pivot primary from indigo to teal | Escape AI slop purple pattern; teal signals technical craft |
| 2026-03-21 | Replace Poppins with Instrument Serif for headings | Serif comeback in 2025-26; authority signal for 17yr veteran |
| 2026-03-21 | Replace Inter with Geist for body text | Inter is ubiquitous; Geist is modern and developer-focused |
| 2026-03-21 | Shift neutrals from cold gray to warm stone | Warmth and intentionality vs sterile template feel |
| 2026-03-21 | Keep amber accent unchanged | Distinctive, semantically tied to AI elements |
| 2026-03-21 | Keep JetBrains Mono unchanged | Excellent for terminal blocks, no reason to change |
