# CLAUDE.md

## gstack

Use /browse from gstack for all web browsing. Never use mcp__claude-in-chrome__* tools.
Available skills: /office-hours, /plan-ceo-review, /plan-eng-review, /plan-design-review,
/design-consultation, /review, /ship, /browse, /qa, /qa-only, /design-review,
/setup-browser-cookies, /retro, /debug, /document-release.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Next.js)
npm run build        # Production build
npm run lint         # ESLint on src/
npm test             # Run vitest tests
npm run test:watch   # Run vitest in watch mode
npx tsc --noEmit     # Type check without emitting
```

No `.env` files are needed — all config is in `src/lib/constants.ts`.

## Testing

Vitest + @testing-library/react. Tests live in `src/__tests__/`. Config in `vitest.config.ts`.
- Data integrity tests: validate projects, experiences, skills, navigation data
- Component tests: Container, SectionHeader primitives
- Run `npm test` before committing

## Architecture

Single-page portfolio site built with **Next.js 16 + React 19 + TypeScript + Tailwind CSS v4**. Deployed to **Vercel** at `portfolio.dissidia.tech`.

### Routing & Layout

Single route (`src/app/page.tsx`) renders 8 sections in order: Hero, HowIThink, HowIBuild, Experience, Projects, Exploring, Skills, Contact. Navigation is anchor-based (`#how-i-think`, `#how-i-build`, `#experience`, etc.). The "Exploring" section is not in the nav — it appears naturally between Projects and Skills.

`src/app/layout.tsx` wraps all pages with Navbar, Footer, and ScrollToTop. Fonts: Inter (sans), Poppins (headings), and JetBrains Mono (mono) loaded via `next/font/google`. Dark mode activates automatically via `prefers-color-scheme` detection.

### Component Organization

- `src/components/sections/` — Page sections (HowIThink, HowIBuild, Experience, etc.), each self-contained. Most are `"use client"` for framer-motion animations.
- `src/components/ui/` — Shared primitives: `Container` (max-w-7xl wrapper), `SectionHeader` (title + underline), `TerminalBlock` (reusable terminal chrome).
- `src/components/layout/` — Navbar, Footer, ScrollToTop.

### Data Layer

All portfolio content lives in `src/data/` as typed arrays/objects. No API calls or CMS — content updates are code changes:
- `projects.ts` — Project entries with `featured` flag and optional `challenge` question tag
- `experiences.ts` — Work history using Problem/Solution/Impact format (with optional `type: "education"` for badge display)
- `skills.ts` — Skill categories and levels
- `navigation.ts` — Nav items (must match section `id` attributes)

Types are in `src/types/index.ts`. Constants (site name, URLs, social links) in `src/lib/constants.ts`.

### Styling

**Tailwind CSS v4** with CSS-first theme in `src/app/globals.css`:
- Custom color palettes: `primary-*` (indigo), `secondary-*` (magenta), `accent-*` (amber for AI elements)
- Custom `@utility` classes: `btn`, `btn-primary`, `btn-outline`, `card`, `skill-badge`, `section`
- Dark mode: class-based via `@custom-variant dark (&:where(.dark, .dark *))`
- PostCSS configured with `@tailwindcss/postcss`

### Animations

Framer Motion is used in section components for scroll-triggered animations. Pattern: define `containerVariants`/`itemVariants` objects, apply via `<motion.div>`.

### Images

Project images are served from two sources:
- Alibaba Cloud OSS: `dissidia.oss-cn-beijing.aliyuncs.com/portfolio/` (configured in `next.config.ts` remotePatterns)
- Local: `public/images/`

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json).

### Branches

- `nextjs-migration` — Active development branch (current Next.js codebase)
- `master` — Main branch for PRs
- `legacy-cra` — Old Create React App version
- `gh-pages` — Previously used for GitHub Pages deployment

## gstack

Use /browse from gstack for all web browsing. Never use mcp__claude-in-chrome__* tools.
