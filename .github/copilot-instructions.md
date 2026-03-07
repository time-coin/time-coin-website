# Copilot Instructions for TIME Coin Website

## Project Overview

This is the official marketing and documentation website for TIME Coin, a cryptocurrency featuring 24-hour blocks, instant transaction finality via BFT consensus, and a three-tier masternode system. It is a **pure static site** — vanilla HTML, CSS, and JavaScript with no framework or build toolchain.

## Local Development

No build step is required. Serve the root directory with any static file server:

```bash
python3 -m http.server 8000
# or
npx serve
```

Then open `http://localhost:8000` in a browser. Files can also be opened directly without a server for most pages.

## Architecture

### Component Loading Pattern

All pages share a common header and footer via `js/includes.js`, which fetches `includes/header.html` and `includes/footer.html` at runtime and injects them into the DOM. Every HTML page includes only:

```html
<link rel="stylesheet" href="css/main.css">
<script src="js/includes.js" defer></script>
```

Page-specific stylesheets (e.g., `css/community.css`) are added on top of this baseline.

### API Endpoints

Two URL rewrites in `vercel.json` expose peer discovery as API endpoints:
- `GET /api/peers` → `peers.json`
- `GET /api/testnet/peers` → `testnet-peers.json`

`api/peers.js` is an alternative Vercel serverless handler but the rewrites in `vercel.json` are the primary mechanism — they serve the JSON files directly without needing a function.

### Page Structure

Each HTML page uses `<section id="...">` with semantic IDs (`#features`, `#masternodes`, `#quick-start`) that navigation links target.

## Conventions

### CSS

- **CSS custom properties** are defined on `:root` in `css/main.css` for all colors (e.g., `--primary-purple: #667eea`). Never hardcode these color values.
- **Spacing** uses multiples of 8px. Utility classes `.mt-1`–`.mt-3`, `.mb-1`–`.mb-3`, `.p-1`–`.p-3` exist in `main.css`.
- **Grid system**: Use `.grid`, `.grid-2`, `.grid-3`, `.grid-4` from `main.css` for multi-column layouts.
- **Naming**: kebab-case for class names and IDs. Avoid `!important`.
- **Mobile-first**: Media queries use `max-width: 768px` as the primary breakpoint.

### JavaScript

- ES6+ syntax only; no jQuery or external libraries.
- Functions should be small and focused. State management via `classList` toggling.
- No module bundler — scripts are plain `<script>` tags.

### HTML

- 4-space indentation.
- All external links use `target="_blank" rel="noopener"`.
- Each page includes full SEO meta tags: `description`, `keywords`, OpenGraph (`og:*`), and Twitter Card (`twitter:*`) tags.
- Use semantic elements (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`).

### Commits & Branches

Prefix commit messages with a type keyword:
`Add:`, `Fix:`, `Update:`, `Remove:`, `Refactor:`, `Docs:`, `Style:`

Branch naming: `feature/`, `fix/`, `docs/`, `style/`
