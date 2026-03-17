# TIME Coin Website ⏰

> Official website for TIME Coin - A revolutionary cryptocurrency featuring 10-minute blocks, instant transaction finality, and a block reward emission system.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Testnet](https://img.shields.io/badge/testnet-Active-brightgreen.svg)]()

## 🌐 Live Website

**Main Site:** `https://time-coin.io`  
**GitHub Pages:** `https://time-coin.github.io/time-coin-website` *(Mirror)*

## 📖 About TIME Coin

TIME Coin is a next-generation cryptocurrency that reimagines blockchain architecture:

- **10-Minute Blocks** - Regular immutable checkpoints, not transaction gatekeepers
- **Instant Finality** - Transactions confirmed in under 5 seconds via BFT consensus
- **No Pre-Mine** — all TIME created through block rewards distributed to masternodes
- **four-tier masternodes** - Earn 18-30% APY with accessible entry requirements
- **Built in Rust** - Memory-safe, high-performance implementation
- **Open Source** - Fully transparent development

## 🚀 Website Features

This repository contains the complete TIME Coin marketing and documentation website:

### Pages
- **🏠 Home** (`index.html`) - Main marketing page with features and CTAs
- **📚 Documentation** (`docs.html`) - Comprehensive technical documentation
- **❓ FAQ** (`faq.html`) - Frequently asked questions across multiple categories
- **🗺️ Roadmap** (`roadmap.html`) - Development timeline
- **👥 Community** (`community.html`) - Community hub with social links
- **📰 Press Kit** (`press.html`) - Media resources and brand assets
- **💱 Exchange** (`exchange.html`) - Exchange listings and trading info
- **🔍 Explorer** (`explorer.html`) - Testnet block explorer

### Key Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern gradient UI with purple/blue theme
- ✅ Smooth animations and transitions
- ✅ Interactive elements (accordions, filters, search)
- ✅ Fast loading (vanilla HTML/CSS/JS, no frameworks)
- ✅ SEO optimized
- ✅ Accessible navigation

## 📂 Repository Structure

```text
time-coin-website/
├── index.html          # Main landing page
├── docs.html           # Technical documentation
├── whitepaper.html     # Technical whitepaper
├── faq.html            # FAQ page with search & filters
├── roadmap.html        # Development roadmap & timeline
├── community.html      # Community hub
├── guidelines.html     # Community guidelines
├── press.html          # Press kit & media resources
├── README.md           # This file
├── CONTRIBUTING.md     # Contribution guidelines
├── SECURITY.md         # Security policy
├── LICENSE             # MIT License
└── .gitignore          # Git ignore rules
```

## 🛠️ Development

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime, etc.)
- Git for version control

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/time-coin/time-wallet.git
cd time-coin-website
```

2. **Open in browser**
```bash
# Simple Python server (Python 3)
python3 -m http.server 8000

# Or using Node.js
npx serve

# Or just open index.html directly in your browser
```

3. **View the site**
```
http://localhost:8000
```

### Making Changes

1. Edit HTML/CSS/JavaScript files directly
1. Refresh browser to see changes
1. Test on multiple browsers and devices
1. Commit changes to git

## 🚀 Deployment

### Option 1: Cloudflare Pages (Recommended)

1. Push code to GitHub
1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
1. Connect your GitHub repository
1. Deploy settings:
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
1. Click "Save and Deploy"

**Result:** Site live at `https://time-coin-website.pages.dev`

### Option 2: GitHub Pages

1. Go to repository Settings
1. Navigate to Pages section
1. Source: Deploy from branch `main`
1. Folder: `/ (root)`
1. Save

**Result:** Site live at `https://time-coin.github.io/time-coin-website`

### Option 3: Vercel

1. Push code to GitHub
1. Import project on [Vercel](https://vercel.com)
1. Deploy with default settings

**Result:** Site live at `https://time-coin-website.vercel.app`

### Custom Domain

After deploying, add your custom domain:
- **Cloudflare:** Pages → Custom domains → Add domain
- **GitHub Pages:** Settings → Pages → Custom domain
- **Vercel:** Project settings → Domains → Add domain

## 🎨 Design System

### Colors
```css
Primary Purple:    #667eea
Secondary Purple:  #764ba2
Dark Background:   #0f0c29
Success Green:     #4ade80
Warning Yellow:    #fbbf24
```

### Typography
- **Font Family:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Headings:** Bold, gradient text effect
- **Body:** 16px base, 1.6 line-height

### Components
- Gradient buttons with hover effects
- Card-based layouts with subtle borders
- Smooth transitions and animations
- Mobile-first responsive design

## 🤝 Contributing

We welcome contributions to improve the TIME Coin website!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Follow existing code style
   - Test on multiple browsers
   - Ensure mobile responsiveness
4. **Commit your changes**
   ```bash
   git commit -m "Add: Brief description of changes"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- ✅ Keep code clean and readable
- ✅ Maintain consistent styling
- ✅ Test across browsers (Chrome, Firefox, Safari, Edge)
- ✅ Ensure mobile responsiveness
- ✅ Update documentation if needed
- ✅ One feature per pull request
- ❌ No external dependencies (keep it vanilla)
- ❌ No build tools required

### Areas for Contribution

- 🐛 Bug fixes
- 📱 Mobile optimization
- ♿ Accessibility improvements
- 🌐 Translations
- 📝 Content improvements
- 🎨 Design enhancements
- ⚡ Performance optimization

## 📋 Project Status

**Current Phase:** Testnet Active — Mainnet Pending

- ✅ Phase 1: Core protocol (Complete)
- 🔄 Phase 2: Testnet hardening (In Progress — Q1/Q2 2026)
- ⏳ Phase 3: Mainnet launch (Target Q3/Q4 2026)
- 🚀 Phase 4: Accessibility & growth (2027+)

[View Full Roadmap](roadmap.html)

## 🔗 Links

- **Website:** [time-coin.io](https://time-coin.io)
- **Main Repository:** [github.com/time-coin/time-wallet](https://github.com/time-coin/time-wallet)
- **Documentation:** [time-coin.io/docs.html](https://time-coin.io/docs.html)
- **Whitepaper:** [time-coin.io/whitepaper.html](https://time-coin.io/whitepaper.html)
- **Twitter/X:** [@TIMEcoin](https://x.com/TIMEcoin515010)
- **Community Discord:** [discord.gg/timecoin](https://discord.gg/timecoin) *(Coming Soon)*
- **Telegram:** [t.me/timecoin](https://t.me/timecoin) *(Coming Soon)*

## 📧 Contact

- **General Inquiries:** hello@time-coin.io
- **Press/Media:** press@time-coin.io
- **Development:** dev@time-coin.io
- **Support:** support@time-coin.io

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2025 TIME Coin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.

## 🙏 Acknowledgments

- Built with vanilla HTML, CSS, and JavaScript for maximum performance
- Inspired by modern web design principles
- Community-driven development
- Open source and transparent

## 📊 Website Stats

- **Pages:** 8+
- **Lines of Code:** ~8,000
- **Load Time:** <2 seconds
- **Mobile Score:** 95+
- **Accessibility:** WCAG 2.1 AA compliant
- **Browser Support:** All modern browsers

## 🔮 Future Enhancements

Planned improvements for the website:

- [ ] Blog/News section
- [ ] Multilingual support (translations)
- [ ] Interactive blockchain explorer preview
- [ ] Live masternode statistics
- [ ] Community forum integration
- [ ] Video tutorials section
- [ ] Advanced search functionality
- [ ] Dark/light mode toggle
- [ ] Newsletter signup
- [ ] Live chat support

## 💡 Development Notes

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- No external dependencies
- Optimized images (when added)
- Minimal JavaScript
- CSS-only animations where possible
- Lazy loading for images

### SEO
- Semantic HTML5
- Meta tags for all pages
- Open Graph tags
- Schema.org markup (planned)
- Sitemap (planned)

---

Made with ⏰ by the TIME Coin community

Last Updated: March 2026
