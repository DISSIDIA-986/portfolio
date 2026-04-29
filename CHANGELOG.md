# Changelog

All notable changes to this project will be documented in this file.

## [2.8.4] - 2026-04-29

### Changed
- SAIT Integrated AI Post-Diploma Certificate marked as graduated (Apr 2026, 3.92 program GPA). Education entry on portfolio now shows completed status with combined 3.96 overall GPA across both programs (15/16 courses A+ across 54 credits).
- All three resume tracks (`ai-engineer.md`, `fullstack-ai.md`, `senior-swe.md`) updated to reflect graduation; PDFs regenerated and uploaded to OSS.

### Added
- `resume/sait-learning.json` — canonical academic record (both programs, 16 courses with codes/dates, per-term GPA breakdown). Source of truth for portfolio + resume content updates.

## [2.8.3] - 2026-04-27

### Fixed
- Architecture lightbox thumbnail rail now uses the lightweight PNG (`d.pngUrl`) instead of the full SVG, saving ~150-360KB per project on the rail (`DiagramLightbox.tsx:35-40`)
- `priority` flag on architecture gallery thumbnails moved from `idx < 2` (which marked 4 thumbnails priority across 2 projects) to `idx === 0` (correctly marks only the first project's 2 thumbnails)
- `sizes` attribute on architecture gallery thumbnails now reflects the `xl:grid-cols-3` breakpoint: `(max-width: 768px) 45vw, (max-width: 1280px) 22vw, 15vw` — desktop no longer over-fetches thumbnail rasters
- SVG URLs now carry `?v=1` cache buster matching PNG URLs, preventing stale lightbox content after diagram re-exports

### Changed
- Lightbox toolbar download button replaced with honest "Open image in new tab" (ExternalLink icon) — the previous "Download SVG" label misled users since OSS lacks CORS, making cross-origin blob downloads impossible. The button now correctly describes what happens: image opens inline, user saves manually with right-click

## [2.8.2] - 2026-04-27

### Changed
- Industry-AI-Flow architecture diagrams replaced with cleaner drawio exports — system architecture is now 2200×1200 (was 4050×1172, mostly empty space) and product architecture is restored as a genuinely distinct view (3-path capability flow vs. C4 container layout), addressing the redundancy concern raised in adversarial review
- IAF now uses the standard `diagramPair()` helper like every other project (no more PNG-as-SVG hack)

## [2.8.1] - 2026-04-27

### Added
- Industry-AI-Flow project added to architecture gallery (project #1) with C4 container system architecture diagram (Apr 27 PlantUML/drawio export)

### Fixed
- `DiagramLightbox` now opens the clicked thumbnail's slide instead of always slide 0 (`initialIndex` prop wired through `ArchitectureGallery` per-thumbnail click)
- `DiagramLightbox` no longer hardcodes 3200×2000 slide dimensions — yet-another-react-lightbox auto-detects from natural image size, so non-16:10 diagrams (e.g. IAF's 4050×1172 C4 diagram) zoom correctly
- `DiagramLightbox` download filename now matches actual asset extension (svg vs png) instead of always claiming `.svg`
- PlantUML SVG uploads now strip the leading `<?plantuml ?>` processing instruction so OSS detects MIME as `image/svg+xml` instead of `text/html` (prevented browser image render)

### Changed
- Architecture gallery grid expanded to `xl:grid-cols-3` for denser layout on wide screens
- JobPilot AI moved to first position in the architecture gallery; Industry-AI-Flow second
- Gallery thumbnail click handler passes the clicked diagram's index to the lightbox

## [2.8.0] - 2026-04-16

### Added
- Technical Architecture gallery at `/architecture` — browse system and product architecture diagrams for 6 projects, each with a one-line insight annotation explaining what the architecture demonstrates
- `DiagramLightbox` component with Zoom, Thumbnails, Captions, and SVG download button (yet-another-react-lightbox plugins)
- "Architecture" button on project cards for projects with diagrams, opening a lazy-loaded lightbox directly from the Projects section
- Architecture link in Navbar for direct access to the gallery page
- `scripts/upload-diagrams.sh` — batch upload tool for pushing diagram images to Alibaba Cloud OSS
- Data integrity tests for diagram metadata (projectId mapping, OSS URL convention, cache-busting rules)
- DiagramLightbox component tests with full YARL plugin mocking

### Changed
- All internal anchor links updated from `#section` to `/#section` format so navigation works correctly from sub-pages like `/architecture`
- Navbar logo changed from `#hero` to `/` for proper home navigation from any page
- Navigation test updated to accept both `/path` and `/#anchor` href formats

### For contributors
- Architecture diagrams stored on OSS at `portfolio/diagrams/{slug}/{type}-architecture.{svg|png}`
- PNG URLs use `?v=1` query param for Vercel Image Optimization cache busting (SVGs bypass the optimizer)
- To add diagrams for a new project: add entry to `src/data/diagrams.ts`, upload files via `scripts/upload-diagrams.sh`

## [2.7.0] - 2026-04-03

### Added
- Resume PDF auto-generation pipeline: `./resume/generate-pdfs.sh` converts HTML to PDF and uploads to Alibaba Cloud OSS via `myoss.put.sh`
- `/resume-to-html` Claude Code skill: LLM-powered markdown-to-HTML conversion with 6-dimension adversarial review (content accuracy, HTML structure, wkhtmltopdf compatibility, page count, visual hierarchy, typography)
- `resume/resume-template.css`: professional resume CSS template with ATS compatibility (single-column, safe fonts, page-break control, A4 preview width)
- ATS compatibility rules in skill: standard section headings, single-column layout, no images/icons, content immutability constraint
- Smart page count support: 1-2 pages based on content length (industry data: 51% recruiters prefer 2-page resumes for senior engineers)

### Changed
- Edianyun experience reframed as "pre-LLM decision systems engineering" across all 3 resume variants and portfolio
- Resume Professional Summary: "AI Application Engineer with 17 years... including 8 years building enterprise decision engines, risk models, and workflow automation"
- Edianyun bullets reorganized by theme: financial algorithm engine (NPV/ACPI/ROC), real-time risk control (DTS + Kafka), decision automation platform, custom Dubbo RPC framework
- Portfolio HowIThink "Who I am" paragraph synced with decision systems narrative
- Site meta description updated: "8 years building enterprise decision engines, now building the same class of systems with LLMs, RAG, and agents"
- Resume link color aligned to portfolio teal (#0d9488)
- Summary paragraph font increased to 10.5pt for visual hierarchy

### Fixed
- "reflexive quality gates" → "automated quality gates" (language error in ai-engineer.md)
- "4.0 GPA in Data Analytics + Integrated AI" → "4.0 GPA across 3 completed terms... (Final Term in progress)" (accuracy: AI program still in progress)
- "cut API response time 40%" → "significantly reduced API response times" (unverified metric)
- "4 major platforms" → "8 product platforms" (matches source data)
- Removed dead `resume/resume.css` (replaced by `resume-template.css`)
- Resume PDFs removed from git tracking (.gitignored as generated artifacts)

### For contributors
- Resume pipeline: edit `resume/*.md` → run `/resume-to-html` → preview HTML → run `./resume/generate-pdfs.sh`
- OSS credentials from `~/.env_secrets` (ALIYUN_OSS_KEY_ID / ALIYUN_OSS_KEY_SECRET)
- `pandoc` dependency removed, replaced by LLM-based conversion

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
