# TODOS

## Post-Implementation

- [x] **Create DESIGN.md** — Formalized design system covering color palettes (indigo/magenta/amber semantics), typography (Inter/Poppins/JetBrains Mono), spacing tokens, component patterns, SVG diagram style guide, dark mode, and animation conventions. **Completed:** 2026-03-21
- [x] **Remove dead Certifications code** — Deleted `src/data/certifications.ts` and `Certification` interface from `src/types/index.ts`. **Completed:** 2026-03-21
- [x] **Add ImageLightbox to non-featured project cards** — Added image thumbnails with lightbox zoom to all 8 non-featured project cards (h-28 compact image). **Completed:** 2026-03-21
- [x] **Fix GH Pages thumbnail basePath for local images** — Fixed by prefixing local image paths with `NEXT_PUBLIC_BASE_PATH` env var in ImageLightbox component. **Completed:** v2.1.0 (2026-03-20)

## AI Engineer Repositioning

- [ ] **Promote ai-code-reviewer to featured project** — Research the repo at `/Users/niuyp/Documents/github.com/ai-code-reviewer/`, create a project entry in `projects.ts` (title, description, technologies, challenge, imageUrl), and optionally create an architecture diagram SVG in `public/images/`. This project demonstrates multi-LLM orchestration (Claude + Gemini + Qwen + GLM) which is a strong AI Engineer signal. **Why:** Design doc "Problem Solver with AI Superpowers" (2026-03-22) recommends this as a potential featured project to strengthen AI positioning. **Depends on:** Core repositioning changes (Hero, Skills, Projects reorder) should ship first.
