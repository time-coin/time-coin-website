# Security Policy

## Supported Versions

We are committed to maintaining the security of the TIME Coin website. Currently, we support the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest (main branch) | :white_check_mark: |
| Development branches | :x: |

## Reporting a Vulnerability

We take the security of TIME Coin seriously. If you discover a security vulnerability, please help us protect our users by reporting it responsibly.

### Where to Report

**DO NOT** create a public GitHub issue for security vulnerabilities.

Instead, please report security issues via:

- **Email**: security@time-coin.io
- **Subject Line**: "SECURITY: Brief description of issue"

### What to Include

When reporting a vulnerability, please include:

1. **Description**: Clear description of the vulnerability
1. **Impact**: Potential impact and severity
1. **Steps to Reproduce**: Detailed steps to reproduce the issue
1. **Proof of Concept**: Code snippet or screenshot (if applicable)
1. **Suggested Fix**: If you have ideas on how to fix it
1. **Your Contact**: How we can reach you for follow-up

### Example Report

```text
To: security@time-coin.io
Subject: SECURITY: XSS vulnerability in search function

Description:
Cross-site scripting vulnerability found in the FAQ search feature
that allows execution of arbitrary JavaScript.

Impact:
An attacker could inject malicious scripts that execute in the
context of other users' browsers.

Steps to Reproduce:
1. Navigate to /faq.html
2. Enter the following in search: <script>alert('XSS')</script>
3. Observe script execution

Proof of Concept:
[Screenshot or code example]

Suggested Fix:
Sanitize user input in searchFAQ() function before rendering.

Contact:
Your Name (yourname@email.com)
```

## Response Timeline

We are committed to responding to security reports promptly:

- **Initial Response**: Within 24 hours
- **Status Update**: Within 3 business days
- **Resolution Timeline**: Varies by severity
  - **Critical**: 1-7 days
  - **High**: 7-14 days
  - **Medium**: 14-30 days
  - **Low**: 30-90 days

## Disclosure Policy

### Coordinated Disclosure

We follow a coordinated disclosure process:

1. **Report Received**: You report the vulnerability privately
1. **Confirmation**: We confirm receipt and begin investigation
1. **Updates**: We keep you informed of our progress
1. **Fix Development**: We develop and test a fix
1. **Release**: We release the fix to production
1. **Public Disclosure**: After fix is deployed, we may publish details (with your permission)

### Public Disclosure Timeline

- We aim to fix and deploy critical vulnerabilities within 7 days
- We will work with you to coordinate public disclosure
- Public disclosure will not occur until:
  - A fix is deployed, or
  - 90 days have passed (for lower severity issues)

## Security Best Practices

### For Contributors

When contributing to the TIME Coin website, please:

- ✅ Sanitize all user inputs
- ✅ Avoid inline JavaScript
- ✅ Use HTTPS for all external resources
- ✅ Validate data on both client and server (when applicable)
- ✅ Keep dependencies updated
- ✅ Follow secure coding practices
- ❌ Never commit sensitive data (API keys, passwords, etc.)
- ❌ Don't use `eval()` or similar unsafe functions
- ❌ Avoid storing sensitive data in localStorage

### For Users

To stay safe when using the TIME Coin website:

- ✅ Always access via HTTPS (when deployed)
- ✅ Keep your browser updated
- ✅ Be cautious of phishing attempts
- ✅ Verify you're on the official domain
- ❌ Never share your wallet seed phrase
- ❌ Don't trust unsolicited DMs claiming to be from TIME team

## Known Security Considerations

### Current Website Scope

The TIME Coin website is currently a static HTML/CSS/JavaScript site. Security considerations include:

1. **XSS Prevention**: All user input (search, forms) must be sanitized
1. **Content Security Policy**: Implement CSP headers when deployed
1. **HTTPS**: Site must be served over HTTPS in production
1. **Dependencies**: Minimal external dependencies reduce attack surface

### Future Considerations

As the website evolves, additional security measures will be implemented:

- Web Application Firewall (WAF)
- DDoS protection (via Cloudflare)
- Rate limiting for API endpoints
- Security headers (CSP, HSTS, X-Frame-Options, etc.)
- Regular security audits
- Automated vulnerability scanning

## Security Updates

Security patches will be released as needed:

- **Critical/High**: Immediate release
- **Medium**: Next scheduled release
- **Low**: Future release or as part of routine updates

## Bug Bounty Program

We are planning to launch a bug bounty program in the future. Details will be announced on:

- Website: time-coin.io
- Twitter: [@TIMEcoin](https://x.com/TIMEcoin515010)
- Discord: discord.gg/timecoin

### Scope (Future)

When launched, the bug bounty program will cover:

- ✅ Website (time-coin.io)
- ✅ Web wallet (when released)
- ✅ API endpoints (when released)
- ❌ Third-party services
- ❌ Social media accounts
- ❌ Physical security

### Eligible Vulnerabilities

- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- SQL Injection (when applicable)
- Authentication/Authorization flaws
- Remote Code Execution
- Server-Side Request Forgery (SSRF)
- Sensitive Data Exposure

### Ineligible Issues

- Issues in third-party libraries (report to original maintainers)
- Social engineering attacks
- Denial of Service (DoS) attacks
- Issues requiring physical access
- Issues in deprecated or unsupported versions
- Theoretical vulnerabilities without proof of concept

## Security Contacts

- **General Security**: security@time-coin.io
- **Website Issues**: dev@time-coin.io
- **Press/Media**: press@time-coin.io

## Hall of Fame

We will recognize security researchers who responsibly disclose vulnerabilities:

*No vulnerabilities reported yet.*

<!-- Future entries:
- **Date**: Researcher Name - Brief description
-->

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [CWE Top 25](https://cwe.mitre.org/top25/)
- [Web Security Academy](https://portswigger.net/web-security)

## Questions?

If you have questions about our security policy:

- Email: security@time-coin.io
- Community: [Discord](https://discord.gg/timecoin) *(Coming Soon)*

Thank you for helping keep TIME Coin and our community safe!

---

Last Updated: October 2025