# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026-03-20

### Added
- Next.js 16 + React 19 + TypeScript foundation replacing Create React App
- Tailwind CSS v4 with CSS-first theme (custom color palettes: primary/indigo, secondary/magenta, accent/amber)
- 7 section components: Hero, About, Experience, HowIBuild, Projects, Skills, Contact
- Terminal-style hero animation with typewriter effect
- HowIBuild section showcasing voice-driven development pipeline and custom VIBE toolkit
- Responsive Navbar with scroll-aware transparency and mobile hamburger menu
- ScrollToTop floating button component
- SVG architecture diagrams for 10 projects
- Dark mode support via class-based custom variant
- Path aliases (`@/*` → `./src/*`)
- Vitest + @testing-library/react test framework with 15 initial tests
- Framer Motion scroll-triggered animations across all sections

### Changed
- Migrated from Create React App to Next.js 16 App Router
- Converted all components from JSX to TypeScript TSX
- Converted all data files from JS to TypeScript with type definitions
- Updated project data with 14 projects including featured flags and challenge categories
- Expanded experiences data with detailed responsibilities and tech stacks
- Replaced custom scroll animation hook with Framer Motion `whileInView`

### Removed
- Create React App configuration and dependencies
- Old JSX components (About, Certifications, Contact, Experience, Hero, Projects, Skills, Toastmasters)
- Old CSS files (App.css, index.css, animations.css, global.css, variables.css)
- Old page components (AboutPage, ContactPage, HomePage, ProjectsPage, ResumePage)
- GitHub Pages deployment script (rebuild-gh-pages.sh)
- tailwind.config.js (replaced by CSS-first @theme in globals.css)
