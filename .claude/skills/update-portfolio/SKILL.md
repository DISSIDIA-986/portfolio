---
name: update-portfolio
description: |
  Scan the user's project directory, evaluate projects, and update the portfolio website
  with new or modified project entries, skills, experiences, and architecture diagrams.
  Use when:
  - Adding new projects to portfolio
  - Syncing portfolio with latest development progress
  - Reviewing which projects should be showcased
  - Updating skills, experiences, or education info
  - Generating architecture diagrams for new projects
  Triggers: "update portfolio", "sync portfolio", "add project to portfolio",
  "refresh portfolio", "portfolio update", "更新作品集", "同步作品集"
allowed-tools: [Agent, Bash, Read, Write, Edit, Grep, Glob]
---

# Portfolio Update Skill

Automated portfolio synchronization with the user's project directory.

## Context

- **Portfolio repo**: `/Users/niuyp/Documents/github.com/portfolio/`
- **Projects root**: `/Users/niuyp/Documents/github.com/`
- **Owner GitHub**: `DISSIDIA-986`
- **Deployment**: GitHub Pages via `gh-pages`
- **Framework**: React 18 + Tailwind CSS + Framer Motion

## Data Files (source of truth)

| File | Purpose | Key fields |
|------|---------|------------|
| `src/data/projects.js` | Project entries | id, title, description, technologies, imageUrl, demoUrl, repoUrl, featured, category |
| `src/data/experiences.js` | Work & education | company, position, period, responsibilities, technologies |
| `src/data/skills.js` | Skill categories | categoryKey → { title, skills: [{ name, level }] } |
| `src/data/certifications.js` | Certificates | title, issuer, date, category, featured |
| `src/components/sections/Projects.jsx` | Filter categories | `filterCategories` array and emoji map |

## Project Categories

Current categories (update `filterCategories` in Projects.jsx if adding new ones):
- AI & Machine Learning
- Computer Vision
- Full Stack
- FinTech
- Native App
- Data Science

## Execution Workflow

### Phase 1: Discovery (use Agent tool for parallel scanning)

1. Read current `src/data/projects.js` to get existing project list
2. List all directories under the projects root
3. For each directory NOT already in portfolio, scan for documentation:
   - **Priority 1**: `README.md` — project overview and features
   - **Priority 2**: `CLAUDE.md` — AI-generated project context (often has architecture details)
   - **Priority 3**: `AGENT.md`, `GEMINI.md`, `QWEN.md` — additional AI docs
   - **Priority 4**: `package.json`, `requirements.txt`, `Cargo.toml`, `build.gradle` — tech stack
   - **Priority 5**: `docker-compose.yml`, `Dockerfile` — deployment info
4. Check git remotes: `git -C <dir> remote -v` to find GitHub repo URLs
5. Check if repo belongs to user (`DISSIDIA-986`) or is a fork/team project

### Phase 2: Evaluation

Score each candidate project (0-10) on these criteria:

| Criterion | Weight | Scoring Guide |
|-----------|--------|---------------|
| **Technical complexity** | 30% | Simple script=2, CRUD app=4, multi-service=6, enterprise=8, research-grade=10 |
| **Uniqueness/novelty** | 20% | Common tutorial=2, standard app=5, novel approach=8, cutting-edge=10 |
| **Completeness** | 20% | Skeleton=2, MVP=5, production-ready=8, deployed=10 |
| **Portfolio diversity** | 15% | Duplicates existing category=3, new subcategory=6, new category=9 |
| **Relevance to career** | 15% | Tangential=3, related=6, directly relevant to AI/SE role=9 |

**Thresholds**:
- Score ≥ 6.0 → Add to portfolio
- Score 4.0-5.9 → Flag for user decision
- Score < 4.0 → Skip

**Auto-skip rules** (don't even score):
- Forks with no significant modifications
- Tutorial follow-alongs / boilerplate starters
- Config-only repos (dotfiles, scripts, etc.)
- Empty or abandoned projects (no commits in 6+ months, no README)
- School assignments that are simple exercises

**Privacy/IP considerations**:
- Company projects (Havenz Tech): keep existing entries, don't add new sub-projects unless user confirms
- Team projects: note the collaboration, attribute correctly
- Private repos: set `repoUrl: null`

### Phase 3: Data Update

For each project to add:

```javascript
{
  id: <next_sequential_id>,
  title: "<ProjectName> - <Short Tagline>",
  description: "<2-3 sentences: what it does, key features, notable metrics>",
  technologies: ["<6-8 key techs>"],
  imageUrl: `${IMG_BASE}/images/projects/<kebab-name>.svg`,
  demoUrl: "<url_or_null>",
  repoUrl: "<github_url_or_null>",  // only if user's own public repo
  videoUrl: "",
  featured: <true if top-tier project>,
  category: "<one of the defined categories>"
}
```

**Featured rules**: Max 6 featured projects. Pick the most impressive across different categories.

**Ordering**: Featured projects first, then by category grouping, then by complexity descending.

### Phase 4: SVG Architecture Diagram Generation

For each new project, create an SVG at `public/images/projects/<kebab-name>.svg`:

**Design spec**:
- Viewbox: `0 0 800 500`
- Font: `Inter, system-ui, sans-serif`
- Dark gradient background (matches portfolio theme)
- Title + subtitle at top
- Architecture boxes with color-coded layers:
  - Blue (#1e3a5f / #3b82f6) — core services
  - Purple (#4c1d95 / #a855f7) — algorithms / ML
  - Orange (#7c2d12 / #f97316) — processing / engines
  - Green (#064e3b / #10b981) — data / output
  - Cyan (#0e7490 / #22d3ee) — external services
- Arrows between components (use SVG markers)
- Tech badges bar at bottom
- Text colors: titles (#e0e7ff), descriptions (#cbd5e1), muted (#94a3b8)

### Phase 5: Supplementary Updates

**Skills** (`src/data/skills.js`):
- Check if new projects introduce skills not in current list
- Add new skills with estimated proficiency level
- Don't remove existing skills

**Experiences** (`src/data/experiences.js`):
- Update current role responsibilities if new significant projects added
- Update education period/courses if new academic projects
- Don't modify historical experiences (Edianyun, Bitmain)

**Categories** (`Projects.jsx`):
- If a new project doesn't fit existing categories, propose a new one
- Update both `filterCategories` array and emoji fallback map

### Phase 6: Verification

1. Run `npx react-scripts build` to verify no build errors
2. Count total projects, featured count, category distribution
3. Present summary table to user

## Output Format

After execution, present:

```
## Portfolio Update Summary

### New Projects Added (N)
| Project | Category | Featured | Score |
|---------|----------|----------|-------|
| ...     | ...      | ...      | ...   |

### Skipped Projects (M)
| Project | Reason |
|---------|--------|
| ...     | ...    |

### Flagged for Review (K)
| Project | Score | Notes |
|---------|-------|-------|
| ...     | ...   | ...   |

### Other Updates
- Skills: [added/unchanged]
- Experiences: [updated/unchanged]
- Categories: [added/unchanged]
- SVGs created: [list]

### Current Portfolio Stats
- Total projects: X (Y featured)
- Categories: [list with counts]
```

## Mode Flags

- `--full-scan`: Rescan ALL projects including already-listed ones (for description/tech updates)
- `--dry-run`: Evaluate and report without making changes
- `--add <project-name>`: Add a specific project by directory name
- `--remove <project-id>`: Remove a project by ID
- `--refresh-svgs`: Regenerate all SVG diagrams
- `--update-skills`: Only update skills section
- `--update-experiences`: Only update experiences section
