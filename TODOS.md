# TODOS

## Post-Implementation

- [x] **Create DESIGN.md** — Formalized design system covering color palettes (indigo/magenta/amber semantics), typography (Inter/Poppins/JetBrains Mono), spacing tokens, component patterns, SVG diagram style guide, dark mode, and animation conventions. **Completed:** 2026-03-21
- [x] **Remove dead Certifications code** — Deleted `src/data/certifications.ts` and `Certification` interface from `src/types/index.ts`. **Completed:** 2026-03-21
- [x] **Add ImageLightbox to non-featured project cards** — Added image thumbnails with lightbox zoom to all 8 non-featured project cards (h-28 compact image). **Completed:** 2026-03-21
- [x] **Fix GH Pages thumbnail basePath for local images** — Fixed by prefixing local image paths with `NEXT_PUBLIC_BASE_PATH` env var in ImageLightbox component. **Completed:** v2.1.0 (2026-03-20)

## AI Engineer Repositioning

- [ ] ~~**Promote ai-code-reviewer to featured project**~~ — **DEFERRED** per design review (2026-03-22): user chose not to add this as featured. Keeping 6 featured projects for clean 3×2 grid layout.

## Design Review Findings (2026-03-22)

- [x] **Hero: Add name to hero content** — **Completed:** 2026-03-22. Added "Yupo (Jason) Niu" in mono uppercase above H1. — Add "Yupo (Jason) Niu" directly in the Hero section content block (above or beside the H1) to strengthen personal brand anchor. Currently the name only appears in the Navbar. **Why:** Codex design critique identified weak brand hierarchy — "people remember the slogan and forget the person." **Impact:** One-line change in Hero.tsx, high brand impact.

- [x] **Skills: Add observability & data engineering capabilities** — **Completed:** 2026-03-22. — Merge new skills into existing Production Engineering rows + add one new row. Specific changes to `skills.ts`:
  - `"Distributed Systems (Spring Cloud, MQ)"` → `"Distributed Systems (Spring Cloud, MQ, ELK)"`
  - `"Cloud & DevOps (Docker, K8s, GCP, CI/CD)"` → `"Cloud & DevOps (Docker, K8s, GCP, Alibaba Cloud, CI/CD)"`
  - `"Database Systems (PostgreSQL, Redis, vector DBs)"` → `"Database Systems (PostgreSQL, Redis, MongoDB, Elasticsearch, vector DBs)"`
  - **New row:** `"Observability & Data Pipelines (Prometheus, OpenTelemetry, Skywalking, ETL)"` at level 80
  **Why:** 4 high-value skills (ELK, ETL, Observability, MongoDB) completely missing from portfolio. Data engineering + observability = core AI Engineer requirements. **Constraint:** Keep Production Engineering to max 5 rows to maintain visual balance with other skill cards.

- [x] **Experience: Add Edianyun observability bullet** — **Completed:** 2026-03-22. — Add a new solution bullet to Edianyun experience entry in `experiences.ts`: "Built company-wide observability stack with ELK (Elasticsearch, Logstash, Kibana) for all web systems, implemented hot/cold log storage separation, and deployed Prometheus + Skywalking APM for performance diagnostics across CMS, ERP, CRM, and risk control platforms." **Why:** Demonstrates production-grade data engineering and DevOps leadership — key differentiators for AI Engineer roles. **Note:** Edianyun already has 5 bullets; this makes 6. Consider condensing existing bullets to keep balance.

- [x] **Projects: Replace 3 non-featured + add 1 new** — **Completed:** 2026-03-22. Replaced AOS-AAIP→ai-ops-control-room, CodeMind3→vox, updated Trading Platform→trading-bots, added akm. **Pending:** SVG architecture diagrams for 3 new projects (vox, ai-ops-control-room, akm). — Update `projects.ts`:
  - **Replace** `AOS-AAIP Immigration Draw Analysis` → `ai-ops-control-room` (LLM-as-Judge quality evaluation system, Python + DeepEval + React 19)
  - **Replace** `CodeMind3` → `vox` (AI voice-to-text tool, Go + Groq Whisper + Gemini correction pipeline)
  - **Update** `Trading Platform` → refresh with actual `trading-bots` repo data (add LLM-driven entry/exit decisions with Qwen/DeepSeek, multi-user SaaS, IBKR API)
  - **Add** `akm` (API Key Manager, Go + AES-256-GCM + macOS Keychain, AI platform key management)
  Total: 14 → 15 projects. Each new project needs: title, description, technologies array, imageUrl (SVG or OSS), category, and optionally repoUrl/demoUrl. **Why:** Strengthens AI-native signal in project portfolio. **Depends on:** Create SVG architecture diagrams for new projects (follow DESIGN.md SVG spec: 800×500, teal gradient, Inter font).

## AI Production Engineer Repositioning (2026-04-02)

- [x] **Reorder featured projects AI-first** — JobPilot AI → Industry-AI-Flow → AI Ops Control Room → ThyroidSentry → HavenzHub → Trading Bots. HockeyAI unfeatured, Trading Bots featured. **Completed:** v2.5.0 (2026-04-02)
- [x] **Unify resume to single AI Engineer version** — Rewrote ai-engineer.md with "AI Production Engineer" narrative. Added Autonomous-AI-Trade, CELPIP-Compass, AI Ops Control Room to resume projects. Removed AgenticAI2026 and HockeyAI-Tracker. **Completed:** v2.5.0 (2026-04-02)
- [x] **Correct SAIT education entries** — Split into two Post-Diploma Certificates: Data Analytics (Sep 2024 – Apr 2025) and Integrated AI (Sep 2025 – Apr 2026). **Completed:** v2.5.0 (2026-04-02)
- [x] **Add market-demanded skills** — LLM-as-Judge / DeepEval, Go to Full Stack. **Completed:** v2.5.0 (2026-04-02)
- [ ] **Phase 2: Add new portfolio projects with SVG diagrams** — Autonomous-AI-Trade and CELPIP-Compass added to resume but not yet to portfolio site (need SVG architecture diagrams + data entries in projects.ts). **Deferred** to Phase 2.

## Project Priority Reorganization (2026-04-02)

- [x] **Remove ThyroidSentry + Polymarket from portfolio** — ThyroidSentry (traditional ML) and Polymarket (speculative concept) removed to strengthen AI Production Engineer signal. **Completed:** v2.6.0 (2026-04-02)
- [x] **Add Fruit Ninja AI as featured project** — MediaPipe hand tracking game adds CV diversity to featured section. Created GitHub repo (DISSIDIA-986/fruit-ninja-ai), SVG architecture diagram, and portfolio data entry. **Completed:** v2.6.0 (2026-04-02)
- [x] **Reorder featured projects AI-first** — JobPilot AI → Industry-AI-Flow → AI Ops Control Room → Trading Bots → Fruit Ninja AI → HavenzHub. **Completed:** v2.6.0 (2026-04-02)
- [x] **Update Hero copy** — Replaced ThyroidSentry "97.4% accuracy" reference with AI Ops "0.94 quality evaluation" to match new project lineup. **Completed:** v2.6.0 (2026-04-02)
- [ ] **Featured projects credibility** — 3/6 featured projects (Trading Bots, HavenzHub, Fruit Ninja AI) have no repoUrl or only recently added repo. Consider adding demo URLs, screenshots, or public repos to strengthen credibility signals.

## Decision Systems Narrative (2026-04-03)

- [x] **Reframe Edianyun as "decision systems" engineer** — Rewrite resume and portfolio to position 8 years as pre-LLM decision systems work (financial algorithm engines, risk control, workflow automation). Adversarial review (4 CRITICAL) found and fixed. **Completed:** v2.7.0 (2026-04-03)
- [x] **Resume PDF automation pipeline** — `./resume/generate-pdfs.sh` + `/resume-to-html` skill. Markdown → LLM HTML → wkhtmltopdf PDF → OSS upload. No more manual PDF export. **Completed:** v2.7.0 (2026-04-03)
- [ ] **Generate HTML for fullstack-ai and senior-swe** — Only ai-engineer.html generated by `/resume-to-html`. Other two variants still need to be processed.
- [ ] **DOCX resume output** — ATS compatibility: DOCX 98% vs PDF 85%. Consider adding DOCX generation for maximum ATS pass rate.

## Deferred (out of current scope)

- [ ] **Page layout architecture** — Codex hard rejection: site reads as "stacked cards" instead of composed marketing page. Sections repeat same mood statement. This is a structural redesign (ocean), not a data update. Address in a future sprint.
- [ ] **Section order optimization** — Consider moving Projects before Experience to show AI evidence earlier. Requires user journey redesign.
- [ ] **Empty link states** — HavenzHub and Local Chat RAG have no demoUrl/repoUrl, leaving card footer empty. Design a consistent "no links" state.
