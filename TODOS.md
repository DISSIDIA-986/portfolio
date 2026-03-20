# TODOS

## Post-Implementation

- [ ] **Create DESIGN.md** — Formalize the design system (color semantics: indigo=depth/amber=AI, typography hierarchy, terminal pattern specs, spacing tokens, card patterns). Prevents design drift as the site evolves. ~15 min with CC.
- [ ] **Remove dead Certifications code** — `src/data/certifications.ts` and `Certification` type in `src/types/index.ts` are never imported by any component. Old Certifications section was removed during CRA→Next.js migration. ~2 min with CC.
