# Portfolio Structure Reference

## Directory Layout

```
portfolio/
├── public/
│   └── images/projects/          # SVG architecture diagrams
├── src/
│   ├── data/
│   │   ├── projects.js           # ⭐ Main project data
│   │   ├── experiences.js        # Work & education history
│   │   ├── skills.js             # Technical skills by category
│   │   └── certifications.js     # Professional certifications
│   ├── components/
│   │   └── sections/
│   │       ├── Projects.jsx      # Project grid + filter categories
│   │       ├── Experience.jsx    # Timeline display
│   │       ├── Skills.jsx        # Skill bars
│   │       ├── Certifications.jsx
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Toastmasters.jsx
│   │       └── Contact.jsx
│   ├── hooks/
│   │   ├── useScrollAnimation.jsx
│   │   └── useWindowSize.js
│   └── App.js                    # Section ordering
├── package.json                  # React 18 + Tailwind
└── tailwind.config.js
```

## Project Data Schema

```javascript
// src/data/projects.js
const IMG_BASE = process.env.PUBLIC_URL || '';

{
  id: Number,                    // Sequential, auto-increment
  title: String,                 // "ProjectName - Short Tagline"
  description: String,           // 2-3 sentences, include key metrics
  technologies: String[],        // 6-8 items, most important first
  imageUrl: String,              // OSS URL or `${IMG_BASE}/images/projects/<name>.svg`
  demoUrl: String | null,        // Live demo URL
  repoUrl: String | null,        // GitHub URL (only if public + owned by user)
  videoUrl: String,              // Demo video URL (usually empty)
  featured: Boolean,             // Max 6 featured
  category: String               // Must match filterCategories in Projects.jsx
}
```

## Category System

Defined in two places (must stay in sync):

1. `src/data/projects.js` — each project's `category` field
2. `src/components/sections/Projects.jsx` — `filterCategories` array + emoji fallback map

```javascript
// Projects.jsx
const filterCategories = [
  'All',
  'AI & Machine Learning',
  'Computer Vision',
  'Full Stack',
  'FinTech',
  'Native App',
  'Data Science'
];

// Emoji fallback map (shown when image fails to load)
{
  'AI & Machine Learning': '🤖',
  'Computer Vision': '👁️',
  'Full Stack': '⚙️',
  'FinTech': '📈',
  'Native App': '📱',
  'Data Science': '📊',
}
```

## Image Hosting

- Legacy projects: Aliyun OSS (`https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/`)
- New projects: Local SVGs (`public/images/projects/<kebab-name>.svg`)
- Reference via: `${IMG_BASE}/images/projects/<name>.svg` where `IMG_BASE = process.env.PUBLIC_URL`

## Skills Data Schema

```javascript
// src/data/skills.js
{
  categoryKey: {
    title: String,
    skills: [
      { name: String, level: Number }  // level: 0-100
    ]
  }
}
```

Current categories: backend, ai, frontend, cloud, languages

## Experiences Data Schema

```javascript
// src/data/experiences.js
{
  id: Number,
  company: String,
  position: String,
  location: String,
  period: String,               // "Mon YYYY - Mon YYYY" or "Mon YYYY - Present"
  description: String,
  responsibilities: [
    { title: String, details: String }
  ],
  technologies: String[],
  url: String | null
}
```

## Owner Info

- GitHub: DISSIDIA-986
- LinkedIn: yupo-niu
- Education: SAIT (Data Analytics + Integrated AI)
- Current employer: Havenz Tech (Part-time)
- Projects directory: /Users/niuyp/Documents/github.com/

## Company Projects (Privacy Rules)

- **Havenz Tech projects**: Already listed (Industry-AI-Flow, HavenzHub). Don't add new Havenz sub-projects without user confirmation.
- **Edianyun projects**: YiPaiJi already listed. Historical, no changes needed.
- **Bitmain projects**: AntPool was removed (covered in experience section). Don't re-add.

## Known Forks / Third-Party Repos

These are forks or cloned repos, NOT original work (skip unless significant modifications):
- freqtrade, ragflow, drawnix, TradingAgents, jipp
- ATV-Bilibili-demo IS a fork but with extensive customizations (already in portfolio)
