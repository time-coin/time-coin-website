# Contributing to TIME Coin Website

Thank you for your interest in contributing to the TIME Coin website! We welcome contributions from the community and are grateful for your support.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Submitting Changes](#submitting-changes)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Community](#community)

## Code of Conduct

By participating in this project, you agree to abide by our code of conduct:

- **Be Respectful**: Treat everyone with respect and kindness
- **Be Constructive**: Provide helpful, actionable feedback
- **Be Collaborative**: Work together toward common goals
- **Be Patient**: Remember that everyone is learning
- **Be Inclusive**: Welcome and support people of all backgrounds

Harassment, discrimination, or disrespectful behavior will not be tolerated.

## Getting Started

### Prerequisites

- Git installed on your computer
- A text editor (VS Code, Sublime Text, etc.)
- A web browser for testing
- Basic knowledge of HTML, CSS, and JavaScript

### Setting Up Your Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/time-coin-website.git
   cd time-coin-website
   ```

3. **Add upstream remote**:

   ```bash
   git remote add upstream https://github.com/time-coin/time-coin-website.git
   ```

4. **Open the website** in your browser to test locally

## How to Contribute

### Types of Contributions

We welcome many types of contributions:

- 🐛 **Bug fixes** - Fix broken links, layout issues, or errors
- ✨ **New features** - Add new sections or functionality
- 📝 **Content improvements** - Enhance documentation or copy
- 🎨 **Design enhancements** - Improve UI/UX
- ♿ **Accessibility** - Make the site more accessible
- 🌐 **Translations** - Add support for other languages
- 📱 **Mobile optimization** - Improve responsive design
- ⚡ **Performance** - Speed improvements and optimization

### Good First Issues

Look for issues labeled `good first issue` - these are great for newcomers!

## Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:

- `feature/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `docs/documentation-name` - Documentation updates
- `style/style-name` - UI/style improvements

### 2. Make Your Changes

- Edit the relevant HTML, CSS, or JavaScript files
- Test your changes in multiple browsers
- Ensure mobile responsiveness
- Follow our style guidelines (see below)

### 3. Test Thoroughly

Before submitting, test your changes:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### 4. Commit Your Changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "Add: Brief description of what you added"
```

Commit message format:

- `Add:` - New feature or content
- `Fix:` - Bug fix
- `Update:` - Modification of existing feature
- `Remove:` - Deletion of feature or content
- `Refactor:` - Code restructuring
- `Docs:` - Documentation changes
- `Style:` - UI/CSS changes

### 5. Keep Your Fork Updated

```bash
git fetch upstream
git rebase upstream/main
```

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

## Style Guidelines

### HTML Guidelines

- Use semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<article>`)
- Indent with 4 spaces
- Use descriptive IDs and classes
- Include alt text for images
- Ensure proper heading hierarchy (h1 → h2 → h3)

```html
<!-- Good -->
<section class="feature-section">
    <h2>Features</h2>
    <p>Description of features</p>
</section>

<!-- Avoid -->
<div class="fs">
    <div class="t">Features</div>
    <div>Description of features</div>
</div>
```

### CSS Guidelines

- Use consistent spacing (4 spaces for indentation)
- Group related properties together
- Use CSS custom properties (variables) when appropriate
- Mobile-first responsive design
- Avoid `!important` unless absolutely necessary

```css
/* Good */
.button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 28px;
    border-radius: 25px;
    transition: transform 0.3s;
}

.button:hover {
    transform: translateY(-2px);
}
```

### JavaScript Guidelines

- Use modern ES6+ syntax
- Keep functions small and focused
- Use meaningful variable names
- Add comments for complex logic
- Avoid jQuery or external dependencies

```javascript
// Good
function toggleFAQ(element) {
    const item = element.parentElement;
    const isActive = item.classList.contains('active');
    
    if (!isActive) {
        item.classList.add('active');
    }
}

// Avoid
function t(e) {
    var x = e.parentElement;
    if (!x.classList.contains('active')) x.classList.add('active');
}
```

### Design Principles

- **Consistent spacing**: Use multiples of 8px (8, 16, 24, 32, etc.)
- **Color palette**: Stick to defined brand colors
- **Typography**: Use system font stack for performance
- **Animations**: Keep smooth (0.3s standard duration)
- **Accessibility**: Maintain 4.5:1 contrast ratio minimum

## Submitting Changes

### Pull Request Process

1. **Update documentation** if needed
2. **Test thoroughly** on multiple browsers
3. **Ensure code quality** - clean, readable, well-commented
4. **Create a pull request** with a clear title and description

### Pull Request Template

When creating a PR, include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style/UI improvement

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile

## Screenshots
If applicable, add screenshots

## Additional Notes
Any other relevant information
```

### Review Process

1. A maintainer will review your PR within 48 hours
2. Address any requested changes
3. Once approved, your PR will be merged
4. Your contribution will be credited in release notes

## Reporting Bugs

### Before Submitting a Bug Report

- Check if the bug has already been reported
- Test on the latest version
- Try to reproduce the bug consistently

### How to Submit a Bug Report

Create an issue with:

1. **Clear title** describing the problem
2. **Steps to reproduce** the issue
3. **Expected behavior** vs actual behavior
4. **Screenshots** if applicable
5. **Browser/device information**
6. **Console errors** if any

Example:

```markdown
**Bug**: Navigation menu not closing on mobile

**Steps to Reproduce**:
1. Open website on mobile device
2. Click hamburger menu
3. Click a navigation link
4. Menu stays open instead of closing

**Expected**: Menu should close after clicking link
**Actual**: Menu remains open

**Browser**: iOS Safari 15.0
**Device**: iPhone 12
```

## Suggesting Enhancements

We love new ideas! When suggesting enhancements:

1. **Check existing issues** to avoid duplicates
2. **Provide context** - why is this needed?
3. **Describe the solution** - how should it work?
4. **Consider alternatives** - are there other approaches?
5. **Add mockups** if applicable

Example:

```markdown
**Enhancement**: Add dark mode toggle

**Problem**: Some users prefer dark backgrounds
**Solution**: Add a toggle button to switch between light/dark themes
**Implementation**: Use CSS custom properties and localStorage
**Benefits**: Better user experience, reduced eye strain
```

## Community

### Getting Help

- **Discord**: Join our [Discord server](#) for real-time help
- **GitHub Discussions**: Ask questions in [Discussions](#)
- **Email**: Contact <dev@timecoin.io> for private inquiries

### Staying Updated

- **Watch** the repository for notifications
- **Follow** [https://x.com/TIMEcoin515010](#) on Twitter
- **Join** community channels for announcements

### Recognition

Contributors are recognized:

- Listed in release notes
- Added to CONTRIBUTORS.md
- Mentioned in community updates
- Eligible for contributor role in Discord

## Questions?

If you have questions about contributing, please:

1. Check this guide first
2. Search existing issues
3. Ask in Discord or GitHub Discussions
4. Email <dev@timecoin.io>

Thank you for contributing to TIME Coin! 🎉⏰
