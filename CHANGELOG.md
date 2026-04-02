# Changelog

All notable changes to this project will be documented in this file.

## [2.6.0] - 2026-04-02

### Added
- Fruit Ninja AI as new featured project — MediaPipe hand gesture game with Three.js, real-time AI hand tracking, deployed on Alibaba Cloud ESA
- SVG architecture diagram for Fruit Ninja AI following DESIGN.md teal gradient spec
- GitHub repo created: DISSIDIA-986/fruit-ninja-ai
- Test assertions: fruit_ninja_game existence, removed project absence, full featured order validation

### Changed
- Featured projects reordered: JobPilot AI → Industry-AI-Flow → AI Ops Control Room → Trading Bots → Fruit Ninja AI → HavenzHub
- Non-featured projects reordered with AI-relevant projects first (vox, akm, Local Chat RAG, AgenticAI2026)
- Hero copy updated: replaced ThyroidSentry "97.4% accuracy" reference with AI Ops "0.94 quality evaluation" score
- Education section: removed ThyroidSentry project name from SAIT Data Analytics capstone description

### Removed
- ThyroidSentry (traditional ML, weak AI Production Engineer signal)
- Polymarket Arbitrage Strategy Analysis (speculative concept project)

## [2.5.0] - 2026-04-02

### Changed
- Portfolio repositioned as "AI Production Engineer" with unified narrative across resume and site
- Featured projects reordered AI-first: JobPilot AI → Industry-AI-Flow → AI Ops Control Room → ThyroidSentry → HavenzHub → Trading Bots
- HockeyAI-Tracker moved from featured to non-featured; Trading Bots promoted to featured with new "challenge" tag
- SAIT education split into two accurate entries: Data Analytics (Sep 2024 – Apr 2025, 4.0 GPA) and Integrated AI (Sep 2025 – Apr 2026, In Progress)
- Havenz Tech experience reworded to lead with "agentic AI workflow platform"
- SAIT courses reordered AI-first (AI Integration before Data Analytics)
- Resume unified to single AI Engineer version, targeting Calgary AI job market

### Added
- LLM-as-Judge / DeepEval skill (level 80) in AI & LLM Systems category
- Go added to Full Stack skill description
- New test: featured projects AI-first ordering validation
- Autonomous-AI-Trade and CELPIP-Compass projects added to resume AI Projects section

## [2.4.0] - 2026-03-23

### Added
- "Yupo (Jason) Niu" name anchor in Hero section — mono uppercase above the H1 headline, strengthening personal brand on first impression
- Observability & Data Pipelines skill row (Prometheus, OpenTelemetry, Skywalking, ETL) in Production Engineering category
- Edianyun experience now includes company-wide ELK observability stack, hot/cold log storage separation, and Prometheus/Skywalking APM deployment
- 3 new AI-native projects: AI Ops Control Room (LLM-as-Judge evaluation, 0.94/1.00 score), Vox (AI voice-to-text with Groq Whisper + Gemini correction), AKM (AI API key vault with AES-256-GCM)
- SVG architecture diagrams for all 3 new projects following DESIGN.md teal gradient spec
- 2 new data validation tests: total project count assertion (15) and new project name existence checks

### Changed
- Production Engineering skills expanded: ELK added to Distributed Systems, Alibaba Cloud to Cloud & DevOps, MongoDB + Elasticsearch to Database Systems
- Trading Platform project updated to "Trading Bots — LLM-Driven Automated Trading" with correct Flask stack and Qwen/DeepSeek LLM decision details
- Edianyun technologies list now includes MongoDB, Elasticsearch, and Prometheus
- Total project count: 14 → 15

### Replaced
- AOS-AAIP Immigration Draw Analysis → AI Ops Control Room (stronger AI/MLOps signal)
- CodeMind3 Smart Programming Flashcards → Vox AI Voice-to-Text Pipeline (AI-native tool)

### Fixed
- vox.svg: replaced invalid `&bull;` HTML entities with Unicode `•` (SVG/XML compliance)
- Trading Bots: corrected technology from FastAPI to Flask (verified from actual repo)

## [2.3.0] - 2026-03-22

### Changed
- Portfolio now positions as "Full Stack AI Engineer" — the "Problem Solver with AI Superpowers" narrative puts AI capabilities front and center while honoring 17 years of production engineering depth
- Hero section leads with "Full Stack AI Engineer in Calgary" and an AI-focused terminal block showcasing RAG, LLM Agent, Computer Vision, and Healthcare ML
- Skills section restructured into 5 AI-capability categories: AI & LLM Systems, Machine Learning & Data, Production Engineering, AI-Augmented Development, and Languages
- Experience descriptions now connect past engineering work to AI relevance (distributed systems → AI infrastructure at scale)
- Unified "Full Stack AI Engineer" title across Hero, HowIThink, Footer, and meta tags
- Corrected ThyroidSentry accuracy from 97% to 97.4% in site description

### Added
- 5 new data integrity tests validating the AI-first skills structure
- TODO: promote ai-code-reviewer (multi-LLM orchestration) to featured project

### For contributors
- `Skills` type changed from fixed-key interface to `Record<string, SkillCategory>` — adding or removing skill categories no longer requires changing the TypeScript interface

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
