# TODOS

## Post-Implementation

- [ ] **Create DESIGN.md** — Formalize the design system (color semantics: indigo=depth/amber=AI, typography hierarchy, terminal pattern specs, spacing tokens, card patterns). Prevents design drift as the site evolves. ~15 min with CC.
- [ ] **Remove dead Certifications code** — `src/data/certifications.ts` and `Certification` type in `src/types/index.ts` are never imported by any component. Old Certifications section was removed during CRA→Next.js migration. ~2 min with CC.
- [ ] **Add ImageLightbox to non-featured project cards** — Non-featured cards in "More Projects" grid don't render images. If images are ever added, they should use the `ImageLightbox` component for consistency. Requires a UX decision about whether compact cards should show images (changes layout significantly). Depends on: decision to add images to non-featured cards. ~5 min with CC once decided.
