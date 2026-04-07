# Copilot Instructions for TIME Coin Website

## Project Overview

Official marketing and documentation website for TIME Coin — a cryptocurrency with 10-minute blocks, instant transaction finality via TimeVote (BFT) consensus, and a four-tier masternode system. Pure static site: vanilla HTML, CSS, and JavaScript with no framework or build toolchain.

## Local Development

No build step required. Serve the root directory:

```bash
python3 -m http.server 8000
# or
npx serve
```

There are no tests, no linter, and no compile step.

## Architecture

### Central Configuration (`js/config.js`)

`js/config.js` is the single source of truth for all site-wide values. **Always update this file first** when changing versions, dates, community stats, social links, or banner strings. Every page loads it before `js/includes.js`.

Values are injected into the DOM via two attributes:
- `data-config="key"` — sets `textContent` (e.g. `<span data-config="walletVersion"></span>`)
- `data-config-href="social.twitter"` — sets `href` on links

Never hardcode version numbers, dates, or social URLs directly in HTML.

### Component Loading (`js/includes.js`)

All pages load `js/includes.js` (deferred), which fetches and injects:
1. `includes/header.html` — nav bar with dropdowns and mobile menu
2. `includes/footer.html` — site-wide footer
3. `includes/chat.html` — AI chat widget (inline scripts are re-executed manually after injection)

`includes.js` also fires an analytics beacon (`POST /api/v1/analytics/track`) on every page load, skipping `/admin.html` and `/login.html`.

Every HTML page includes only:
```html
<link rel="stylesheet" href="css/main.css">
<script src="js/config.js"></script>
<script src="js/includes.js" defer></script>
```
Page-specific stylesheets (e.g. `css/community.css`) are added on top.

### API Layer

**Vercel rewrites** (in `vercel.json`) proxy these paths to the backend at `69.167.168.176`:
- `/api/v1/*` → backend REST API
- `/api/explorer/*` → blockchain explorer data
- `/api/health` → health check

**Vercel serverless functions** (in `api/`):
- `api/peers.js` — proxies to `/api/v1/nodes/peers/mainnet`
- `api/testnet/peers.js` — proxies to testnet peers
- `api/chat.js` — Anthropic Claude chat with SSE streaming (`text/event-stream`); requires `ANTHROPIC_API_KEY` env var; keeps last 10 messages of conversation history

### Firebase Auth Pages

`login.html`, `dashboard.html`, and `admin.html` use Firebase Authentication (Google sign-in). Their Content-Security-Policy headers are configured in `vercel.json` to allow Firebase/Google domains. Do not tighten those CSP headers without testing Firebase flows.

### Page Structure

Each page uses `<section id="...">` with semantic IDs that nav links target (e.g. `#features`, `#masternodes`, `#quick-start`).

## Backend (Sibling Repo)

The backend lives at `~/projects/time-server` — a TypeScript/Fastify app running in Docker.
- **Docs:** `~/projects/time-server/OPERATIONS.md`
- **Restart:** `cd /opt/time-server && docker compose up -d --force-recreate api`
- **Env:** `/opt/time-server/.env`

New backend routes are immediately accessible to the frontend via the `/api/v1/*` rewrite — no Vercel config change needed.

## Conventions

### CSS

- All brand colors are CSS custom properties on `:root` in `css/main.css` — never hardcode them.
- Spacing uses 8px multiples. Utility classes `.mt-1`–`.mt-3`, `.mb-1`–`.mb-3`, `.p-1`–`.p-3`.
- Grid classes: `.grid`, `.grid-2`, `.grid-3`, `.grid-4`, `.grid-auto`.
- Breakpoints: `max-width: 768px` (mobile), `max-width: 1024px` (tablet).
- Navigation styles live in `css/navigation.css`; page-specific styles in their own files.
- Avoid `!important`. Use kebab-case for class names and IDs.

### JavaScript

- ES6+ syntax only; no jQuery or external libraries (except Firebase on auth pages and Chart.js via `js/chart.umd.min.js`).
- State management via `classList` toggling.
- Plain `<script>` tags — no module bundler.

### HTML

- 4-space indentation.
- All external links: `target="_blank" rel="noopener"`.
- Every page needs full SEO meta tags: `description`, `keywords`, OpenGraph (`og:*`), Twitter Card (`twitter:*`), and `canonical`.
- Use semantic elements: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`.

### Commits & Branches

Commit prefix: `Add:`, `Fix:`, `Update:`, `Remove:`, `Refactor:`, `Docs:`, `Style:`

Branch naming: `feature/`, `fix/`, `docs/`, `style/`
