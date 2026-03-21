# TODOS

## Post-Implementation

- [x] **Create DESIGN.md** — Formalized design system covering color palettes (indigo/magenta/amber semantics), typography (Inter/Poppins/JetBrains Mono), spacing tokens, component patterns, SVG diagram style guide, dark mode, and animation conventions. **Completed:** 2026-03-21
- [x] **Remove dead Certifications code** — Deleted `src/data/certifications.ts` and `Certification` interface from `src/types/index.ts`. **Completed:** 2026-03-21
- [x] **Add ImageLightbox to non-featured project cards** — Added image thumbnails with lightbox zoom to all 8 non-featured project cards (h-28 compact image). **Completed:** 2026-03-21
- [x] **Fix GH Pages thumbnail basePath for local images** — Fixed by prefixing local image paths with `NEXT_PUBLIC_BASE_PATH` env var in ImageLightbox component. **Completed:** v2.1.0 (2026-03-20)
