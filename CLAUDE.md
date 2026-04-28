# CLAUDE.md

## 语言偏好
请用中文回复。用户母语是中文，阅读中文更快。代码、命令、技术术语可以保持英文。

## 我最近1年活跃的GitHub项目
- /Users/niuyp/Documents/github.com/git-project-summary/projects.json

## 我上家公司:易点云(Edianyun.com)的工作项目
- /Users/niuyp/Documents/github.com/git-project-summary/edianyun-projects-technical.json
- /Users/niuyp/Documents/github.com/git-project-summary/edianyun-projects-product.json

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Next.js)
npm run build        # Production build
npm run lint         # ESLint on src/
npm test             # Run vitest tests
npm run test:watch   # Run vitest in watch mode
npx tsc --noEmit     # Type check without emitting
```

No `.env` files are needed — all config is in `src/lib/constants.ts`.

## Testing

Vitest + @testing-library/react. Tests live in `src/__tests__/`. Config in `vitest.config.ts`.
- Data integrity tests: validate projects, experiences, skills, navigation data
- Component tests: Container, SectionHeader primitives
- Run `npm test` before committing

## Architecture

Single-page portfolio site built with **Next.js 16 + React 19 + TypeScript + Tailwind CSS v4**. Deployed to **Vercel** at `portfolio.dissidia.tech`.

### Routing & Layout

Home page (`src/app/page.tsx`) renders 8 sections in order: Hero, HowIThink, HowIBuild, Experience, Projects, Exploring, Skills, Contact. A separate `/architecture` page (`src/app/architecture/page.tsx`) shows technical architecture diagrams for select projects. Navigation uses `/#section` anchors (not `#section`) so links work from sub-pages. The "Exploring" section is not in the nav — it appears naturally between Projects and Skills.

`src/app/layout.tsx` wraps all pages with Navbar, Footer, and ScrollToTop. Fonts: Geist (body), Instrument Serif (headings H1-H2), and JetBrains Mono (mono). Dark mode activates automatically via `prefers-color-scheme` detection.

### Component Organization

- `src/components/sections/` — Page sections (HowIThink, HowIBuild, Experience, etc.), each self-contained. Most are `"use client"` for framer-motion animations.
- `src/components/ui/` — Shared primitives: `Container` (max-w-7xl wrapper), `SectionHeader` (title + underline), `TerminalBlock` (reusable terminal chrome), `ImageLightbox` (single-image tap-to-zoom via yet-another-react-lightbox), `DiagramLightbox` (multi-slide lightbox with Zoom + Thumbnails + Captions for architecture diagrams).
- `src/components/layout/` — Navbar, Footer, ScrollToTop.

### Data Layer

All portfolio content lives in `src/data/` as typed arrays/objects. No API calls or CMS — content updates are code changes:
- `projects.ts` — Project entries with `featured` flag and optional `challenge` question tag
- `experiences.ts` — Work history using Problem/Solution/Impact format (with optional `type: "education"` for badge display)
- `skills.ts` — Skill categories and levels
- `diagrams.ts` — Architecture diagram metadata (OSS URLs, insights) with `getDiagramsByProjectId` helper
- `navigation.ts` — Nav items (anchors use `/#section` format; includes `/architecture` page link)

Types are in `src/types/index.ts`. Constants (site name, URLs, social links) in `src/lib/constants.ts`.

### Styling

**Tailwind CSS v4** with CSS-first theme in `src/app/globals.css`:
- Custom color palettes: `primary-*` (teal), `secondary-*` (magenta), `accent-*` (amber for AI elements)
- Custom `@utility` classes: `btn`, `btn-primary`, `btn-outline`, `card`, `skill-badge`, `section`
- Dark mode: class-based via `@custom-variant dark (&:where(.dark, .dark *))`
- PostCSS configured with `@tailwindcss/postcss`

### Animations

Framer Motion is used in section components for scroll-triggered animations. Pattern: define `containerVariants`/`itemVariants` objects, apply via `<motion.div>`.

### Images

Project images are served from two sources:
- Alibaba Cloud OSS: `dissidia.oss-cn-beijing.aliyuncs.com/portfolio/` (configured in `next.config.ts` remotePatterns)
  - `/portfolio/projects/` — project thumbnail SVGs
  - `/portfolio/diagrams/{slug}/` — system + product architecture diagrams (SVG + PNG)
- Local: `public/images/` (17 SVG architecture diagrams for project cards)

Featured project images use `ImageLightbox` component for tap-to-zoom. Architecture diagrams use `DiagramLightbox` (Zoom + Thumbnails + Captions plugins, with `initialIndex` prop so clicking a thumbnail opens the corresponding slide directly). The bottom thumbnail rail uses `slide.thumbnail = pngUrl` so the rail loads the lightweight PNG instead of the full SVG master. Both PNG and SVG URLs carry `?v=1` cache busters. The lightbox toolbar button is "Open image in new tab" (ExternalLink icon) since OSS lacks CORS, so true blob downloads aren't possible. Upload diagrams via `scripts/upload-diagrams.sh`.

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json).

### Branches

- `master` — Production branch (auto-deploys to Vercel)
- `nextjs-migration` — Legacy development branch (migration complete)
- `legacy-cra` — Old Create React App version
- `gh-pages` — Previously used for GitHub Pages deployment

## Design System
Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.

## gstack

Use the `/browse` skill from gstack for all web browsing. **Never use `mcp__claude-in-chrome__*` tools directly.**

Available skills: `/office-hours`, `/plan-ceo-review`, `/plan-eng-review`, `/plan-design-review`, `/design-consultation`, `/review`, `/ship`, `/land-and-deploy`, `/canary`, `/benchmark`, `/browse`, `/qa`, `/qa-only`, `/design-review`, `/setup-browser-cookies`, `/setup-deploy`, `/retro`, `/investigate`, `/document-release`, `/codex`, `/cso`, `/autoplan`, `/careful`, `/freeze`, `/guard`, `/unfreeze`, `/gstack-upgrade`.

## Resume PDF 自动化

当 `resume/*.md` 或 `src/data/experiences.ts` 内容变更时，**必须**运行：
```bash
./resume/generate-pdfs.sh
```
链条：Markdown → LLM Skill → HTML → PDF（wkhtmltopdf）→ OSS（myoss.put.sh）

两步走：
1. **`/resume-to-html`**（在 Claude Code 中运行）— LLM 将 markdown 转为专业排版 HTML，内置 6 维度对抗性审查
2. **`./resume/generate-pdfs.sh`** — 从 HTML 生成 PDF + 上传 OSS

HTML 和 PDF 是生成产物，已在 .gitignore 中排除。源文件是 `resume/*.md` + `resume/resume-template.css`。

`generate-pdfs.sh` 用 `--skip-upload` 跳过上传。依赖：`brew install wkhtmltopdf`。

## 项目规则
- 更新数据时，检查所有引用同一数据点的文件（JSON数据文件 + 页面组件 + 模板）
- 硬编码数据必须迁移到 JSON 数据文件
- 构建后运行 npm run build 验证
- 每次修改后 curl 所有路由确认 200 响应

## Skill routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill
tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.
The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:
- Product ideas, "is this worth building", brainstorming → invoke office-hours
- Bugs, errors, "why is this broken", 500 errors → invoke investigate
- Ship, deploy, push, create PR → invoke ship
- QA, test the site, find bugs → invoke qa
- Code review, check my diff → invoke review
- Update docs after shipping → invoke document-release
- Weekly retro → invoke retro
- Design system, brand → invoke design-consultation
- Visual audit, design polish → invoke design-review
- Architecture review → invoke plan-eng-review
