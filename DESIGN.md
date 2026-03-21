# Design System

Portfolio site design system. Source of truth for colors, typography, spacing, and component patterns.

## Color Palette

Three semantic palettes defined in `src/app/globals.css` via `@theme`:

### Primary — Indigo (depth, professionalism)
Used for: headings, links, buttons, nav highlights, section accents.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | `#eef2ff` | Light backgrounds |
| `primary-100` | `#e0e7ff` | Hover backgrounds |
| `primary-400` | `#818cf8` | Dark mode text, SVG diagram accents |
| `primary-500` | `#6366f1` | Mid-weight text |
| `primary-600` | `#4f46e5` | Buttons, links, SVG diagram cards |
| `primary-700` | `#4338ca` | Button hover, SVG diagram card gradient |
| `primary-900` | `#312e81` | SVG diagram background gradient end |
| `primary-950` | `#1e1b4b` | SVG diagram background gradient start |

### Secondary — Magenta (energy, creativity)
Used for: secondary buttons, visual accents. Rarely used — reserved for emphasis.

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary-500` | `#d946ef` | Accent elements |
| `secondary-600` | `#c026d3` | Secondary buttons |

### Accent — Amber (AI, innovation)
Used for: AI-related elements, challenge tags, category badges.

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-400` | `#fbbf24` | Dark mode challenge text |
| `accent-600` | `#d97706` | Challenge question tags |
| `accent-700` | `#b45309` | Accent buttons |

### Neutral — Gray (Tailwind defaults)
Used for: body text, borders, card backgrounds, dark mode surfaces.

| Context | Light | Dark |
|---------|-------|------|
| Body bg | `white` | `gray-950` |
| Body text | `gray-800` | `gray-100` |
| Card bg | `white` | `gray-800/50` |
| Borders | `gray-200` | `gray-700` |
| Muted text | `gray-600` | `gray-400` |

## Typography

Three font families loaded via `next/font/google`:

| Family | Variable | Usage | Weights |
|--------|----------|-------|---------|
| **Inter** | `--font-sans` | Body text, UI elements | 400 (default) |
| **Poppins** | `--font-heading` | All headings (h1-h6) | 400, 600, 700 |
| **JetBrains Mono** | `--font-mono` | Terminal blocks, code | 400 (default) |

### Heading hierarchy
- `h1` — Hero title only (text-4xl md:text-6xl, Poppins 700)
- `h2` — Section headers via `SectionHeader` component (text-3xl, Poppins 700)
- `h3` — Subsection titles (text-xl font-bold)
- `h4` — Card titles in compact layouts (font-semibold text-sm)

### Body text
- Base: `text-sm` to `text-base` (14-16px), Inter
- Muted/secondary: `text-gray-600 dark:text-gray-300`
- Tiny labels: `text-xs` or `text-[10px]` for tags and badges

## Spacing

Tailwind 4px grid. Consistent patterns:

| Context | Value |
|---------|-------|
| Section padding | `py-12 md:py-16` or `py-16 md:py-24` |
| Container max-width | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| Card padding | `p-6` (featured), `p-4` (compact) |
| Card gap | `gap-6` (featured grid), `gap-4` (compact grid) |
| Tag/badge padding | `px-2 py-0.5` (standard), `px-1.5 py-0.5` (compact) |
| Element spacing | `mb-2` to `mb-4` between elements in cards |

## Component Patterns

### Cards
- Featured: `rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 overflow-hidden hover:shadow-lg transition-all`
- Compact: `p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow`

### Buttons
Defined as `@utility` classes in globals.css:
- `btn` — base (px-6 py-3 rounded-md)
- `btn-primary` — indigo fill
- `btn-outline` — indigo border, transparent bg, fill on hover

### Tags/Badges
- Tech tags: `px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300`
- Category badges: `px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300`

### Terminal Block
Reusable `TerminalBlock` component (`src/components/ui/TerminalBlock.tsx`):
- Dark chrome: `bg-gray-900 dark:bg-gray-800 border border-gray-700`
- Traffic light dots: red/yellow/green circles
- Content: `font-mono text-xs sm:text-sm`
- Used by: Hero, HowIThink sections

### Image Lightbox
`ImageLightbox` component (`src/components/ui/ImageLightbox.tsx`):
- Tap/click to open full-screen overlay (`bg-black/80`)
- `ZoomIn` icon affordance (bottom-right, semi-transparent)
- Pinch-to-zoom (mobile), scroll-to-zoom (desktop) via YARL
- Close: X button, click overlay, ESC key, swipe-down (mobile)

### Section Header
`SectionHeader` component (`src/components/ui/SectionHeader.tsx`):
- Title: h2 with Poppins font
- Underline accent bar
- Optional subtitle in muted text

## Dark Mode

Activated automatically via `prefers-color-scheme` media query. Detection in `layout.tsx` with `<script>` that adds `.dark` class to `<html>`.

Custom variant: `@custom-variant dark (&:where(.dark, .dark *))`

Pattern: Every color class uses `dark:` variant — e.g., `bg-white dark:bg-gray-800/50`.

## Animation

Framer Motion for scroll-triggered entrance animations. Consistent pattern across all sections:

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};
```

Applied via `<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>`.

## SVG Architecture Diagrams

Consistent style across all 11 project diagrams in `public/images/projects/`:

| Property | Value |
|----------|-------|
| ViewBox | `0 0 800 500` |
| Background | Linear gradient `#1e1b4b` → `#312e81` (indigo) |
| Font | `Inter, system-ui, sans-serif` |
| Card fill | Gradient `#4f46e5` → `#4338ca` with `#818cf8` stroke |
| Accent colors | Cyan (`#06b6d4`), Purple (`#8b5cf6`), Green (`#059669`), Amber (`#d97706`) |
| Title | 22px, centered, `#e0e7ff` |
| Labels | 13-14px `#e0e7ff`, sublabels 10px `#a5b4fc` |
| Arrows | `#818cf8` with arrow marker |
| Feature bar | Bottom row, icons + descriptions at 11px |
| Corner radius | `rx="8"` on cards, `rx="12"` on background |

## Responsive Breakpoints

Tailwind defaults:
- `sm`: 640px
- `md`: 768px (primary breakpoint — mobile/desktop split)
- `lg`: 1024px
- `xl`: 1280px

Key responsive patterns:
- Featured projects: `grid-cols-1 md:grid-cols-2`
- More projects: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Container: max-w-7xl with responsive padding
