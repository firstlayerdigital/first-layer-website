# First Layer Digital - Website Project Memory

## Project Overview
- **Company:** First Layer Digital LLC (Kenneth Evan Adams)
- **Location:** Pasadena, Maryland
- **Stack:** Astro + Tailwind CSS, deployed via Netlify
- **Dev server:** `npm run dev` on port 4321 (use `.claude/launch.json` preview)
- **Repo:** github.com/firstlayerdigital/first-layer-website

## Branch Strategy
- **main** — production branch, deployed to live site
- **dev** — active development branch with major design overhaul (WIP)
  - Hybrid redesign: cleaner layout, cyan accents, dot grid background
  - Significant refactoring across 17 files (~2800 lines removed, ~1000 added)
  - Unstaged WIP changes on: Hero.astro, Layout.astro, index.astro
- Old worktree branches exist (crazy-kare, ecstatic-boyd, unruffled-fermat, reverent-bardeen) — can be cleaned up

## Design System (Dark Theme)
- Site is dark-theme-first. All colors must be readable on dark backgrounds.
- Use CSS variables: `--bg-page`, `--bg-card`, `--bg-muted`, `--accent-cyan`, `--text-header`, `--text-body`, `--text-muted`, `--stroke`
- **Tags/badges:** Use `bg-[var(--bg-muted)] text-{color}-300 border-{color}-500/30` pattern (NOT light-mode `bg-{color}-100 text-{color}-700`)
- **Callout boxes:** Use dark tinted backgrounds like `bg-emerald-950/40 border-emerald-500/20 text-emerald-300` (NOT `bg-green-50 text-green-900`)
- **CI/CD badges:** `bg-[var(--bg-muted)] text-emerald-400 border-emerald-500/30`
- Accent color: cyan (`--accent-cyan`, typically `#22d3ee`)

## Work Page Projects (src/pages/work.astro)
Projects are defined inline as typed objects with categories:
- `custom-software` (cyan) — e.g., VantageDash
- `digital-transformation` (blue) — e.g., Agency Website
- `ecommerce-optimization` (green) — e.g., Shopify Platform
- `operational-infrastructure` (purple) — e.g., Proxmox Homelab
Each project has: title, description, category, techStack, mvpJourney, performance, and optional githubUrl/caseStudyUrl

## VantageDash (Latest Addition)
- Automated market intelligence system
- Tech: Streamlit, Python, Node.js, Web Scraping, Time-Series DB, Proxmox LXC
- Category: `operational-infrastructure`
- Added to work page on both main and dev branches

## Infrastructure
- Proxmox MCP tools available for LXC container management
- Outline wiki at outline.ahrlink.me (WebFetch allowed)
- Umami analytics integrated site-wide

## Key Files
- `src/pages/work.astro` — Main work/portfolio page with all project cards
- `src/layouts/Layout.astro` — Site-wide layout wrapper
- `src/components/Hero.astro` — Homepage hero section
- `src/pages/index.astro` — Homepage
- `src/styles/global.css` — Global styles and CSS variables
- `internal-docs/` — Legal docs (MSA, Operating Agreement)

## Email Signature
- File: `email-signature.html` (HTML table-based, inline styles for email client compatibility)
- **Name:** Kenny Adams
- **Title:** Developer & Digital Strategist
- **Email:** kenny@firstlayer.digital
- **Logo:** Links to https://www.firstlayer.digital
- No phone number, no separate website URL text — logo is the website link
- Cyan accent divider (`#22d3ee`) matches brand
- **TODO:** Export logo SVG to PNG (~120x60px), host at `www.firstlayer.digital/logo-email.png` and update `img src` in signature (SVG doesn't render in Outlook)

## Recent Session History
- Added VantageDash project card to work page (both branches)
- Fixed dark theme readability on work page: category tags, CI/CD badges, confidence callout boxes, Core Web Vitals text
- All fixes committed and pushed to main
- Dev branch has uncommitted design overhaul WIP (Hero, Layout, index)
- Created email signature: compact design, title changed from "Web Developer & Strategist" to "Developer & Digital Strategist", removed phone number, logo links to www.firstlayer.digital
