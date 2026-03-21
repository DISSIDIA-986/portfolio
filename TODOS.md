# TODOS

## Post-Implementation

- [x] **Create DESIGN.md** — Formalized design system covering color palettes (indigo/magenta/amber semantics), typography (Inter/Poppins/JetBrains Mono), spacing tokens, component patterns, SVG diagram style guide, dark mode, and animation conventions. **Completed:** 2026-03-21
- [x] **Remove dead Certifications code** — Deleted `src/data/certifications.ts` and `Certification` interface from `src/types/index.ts`. **Completed:** 2026-03-21
- [ ] **Add ImageLightbox to non-featured project cards** — Non-featured cards in "More Projects" grid don't render images. If images are ever added, they should use the `ImageLightbox` component for consistency. Requires a UX decision about whether compact cards should show images (changes layout significantly). Depends on: decision to add images to non-featured cards. ~5 min with CC once decided.
- [x] **Fix GH Pages thumbnail basePath for local images** — Fixed by prefixing local image paths with `NEXT_PUBLIC_BASE_PATH` env var in ImageLightbox component. **Completed:** v2.1.0 (2026-03-20)
