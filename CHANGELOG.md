# Changelog

All notable changes to this project will be documented in this file.

## [2.2.0] - 2026-03-21

### Changed
- Migrated design system: indigo→teal primary, Poppins→Instrument Serif headings, Inter→Geist body
- Shifted neutral palette from cold gray to warm stone for intentional warmth
- Restricted serif font (Instrument Serif) to H1-H2 only; H3-H6 use Geist sans
- Updated 6 SVG architecture diagrams from indigo to teal gradient palette
- Applied WCAG AA contrast fixes: teal-700 for small text, amber-700 for challenge tags

### Added
- Teal-themed SVG favicon with basePath support for GH Pages
- DESIGN.md — comprehensive design system with aesthetic direction, typography scale, color rationale, and migration plan

### Removed
- Dead certifications data file and Certification type interface

## [2.1.0] - 2026-03-20

### Added
- Image lightbox with pinch-to-zoom on mobile and scroll-to-zoom on desktop (yet-another-react-lightbox)
- ImageLightbox shared UI component with ZoomIn affordance icon and accessibility support
- YiPaiJi architecture SVG diagram matching established diagram style
- ImageLightbox component tests (5 test cases: render, open, close, props, zoom icon)
- Data tests for featured project images and YiPaiJi SVG path validation

### Changed
- Featured project card images now open in full-screen lightbox on tap/click
- YiPaiJi project image replaced from CDN PNG to local SVG architecture diagram

## [2.0.0] - 2026-03-20

### Added
- Next.js 16 + React 19 + TypeScript foundation replacing Create React App
- Tailwind CSS v4 with CSS-first theme (custom color palettes: primary/indigo, secondary/magenta, accent/amber)
- 8 section components: Hero, HowIThink, HowIBuild, Experience, Projects, Exploring, Skills, Contact
- "How I Think" section with terminal-style methodology pipeline (embrace → decompose → research → build → validate)
- "What I'm Exploring" micro-section with inline learning interest tags
- Terminal-style hero animation with narrative content ("17 years of solving hard problems")
- HowIBuild section showcasing voice-driven development pipeline and custom VIBE toolkit
- Problem/Solution/Impact experience cards with Education badge for SAIT entry
- Challenge question tags on featured project cards
- Shared TerminalBlock UI component (DRY: used by Hero + HowIThink)
- Responsive Navbar with scroll-aware transparency and mobile hamburger menu
- ScrollToTop floating button component
- SVG architecture diagrams for 10 projects
- Dark mode via system preference detection (prefers-color-scheme)
- Poppins font for headings via next/font/google
- Path aliases (`@/*` → `./src/*`)
- Vitest + @testing-library/react test framework with 15 initial tests
- Framer Motion scroll-triggered animations across all sections

### Changed
- Migrated from Create React App to Next.js 16 App Router
- Converted all components from JSX to TypeScript TSX
- Converted all data files from JS to TypeScript with type definitions
- Updated project data with 14 projects including featured flags and challenge categories
- Restructured experiences data from responsibilities list to Problem/Solution/Impact format
- Replaced custom scroll animation hook with Framer Motion `whileInView`

### Removed
- Create React App configuration and dependencies
- Old JSX components (Certifications, Toastmasters, and CRA versions of About, Contact, Experience, Hero, Projects, Skills)
- About.tsx (replaced by HowIThink.tsx)
- Old CSS files (App.css, index.css, animations.css, global.css, variables.css)
- Old page components (AboutPage, ContactPage, HomePage, ProjectsPage, ResumePage)
- GitHub Pages deployment script (rebuild-gh-pages.sh)
- tailwind.config.js (replaced by CSS-first @theme in globals.css)
