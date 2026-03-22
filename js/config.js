/**
 * TIME Coin — Central Site Configuration
 *
 * Update values here to propagate them across all pages automatically.
 *
 * Usage in HTML:
 *   Text content:  <span data-config="devProgress">85%</span>
 *   Link href:     <a data-config-href="social.twitter" href="...">Twitter</a>
 */
const TIME_CONFIG = {
    // Software versions
    nodeVersion:    'v1.6.0',
    walletVersion:  'v0.4.0',
    mainnetVersion: 'v2.0.0',

    // Key dates
    mainnetDate:  'April 1, 2026',
    mainnetMonth: 'Apr',
    mainnetDay:   '01',
    mainnetYear:  '2026',

    // Development progress
    devProgress:    '85%',
    devProgressNum: 85,

    // Tokenomics
    blockReward: '100 TIME',
    txTime:      '<1s',

    // Community stats (update as these grow)
    communityMembers: '5K+',
    countries:        '50+',
    contributors:     '100+',

    // Banner / summary strings
    devNotice:    'Testnet Active \u2022 Node v1.6.0 Released \u2022 Wallet v0.4.0 Available \u2022 Mainnet targeting April 1, 2026',
    progressInfo: 'Node v1.6.0 \u2022 Wallet v0.4.0 \u2022 Security Audit Passed \u2022 Testnet Active \u2022 TLS Fully Implemented \u2022 On-Chain Governance Live \u2022 Mainnet v2.0.0 launching April 1, 2026',

    // Social links
    social: {
        twitter:  'https://x.com/TIMEcoin515010',
        discord:  'https://discord.gg/TSY56t53',
        facebook: 'https://www.facebook.com/profile.php?id=61579461609110',
        telegram: 'https://t.co/ISNmAW8gMV',
        github:   'https://github.com/time-coin/time-wallet',
        reddit:   'https://www.reddit.com/r/timecoin1',
    },

    // Contact
    contact: {
        press: 'press@time-coin.io',
    },
};

// Auto-inject values into elements tagged with data-config / data-config-href
(function applyConfig() {
    function resolve(key) {
        return key.split('.').reduce(function (obj, k) { return obj != null ? obj[k] : undefined; }, TIME_CONFIG);
    }

    function apply() {
        document.querySelectorAll('[data-config]').forEach(function (el) {
            var val = resolve(el.getAttribute('data-config'));
            if (typeof val === 'string') el.textContent = val;
        });
        document.querySelectorAll('[data-config-href]').forEach(function (el) {
            var val = resolve(el.getAttribute('data-config-href'));
            if (typeof val === 'string') el.setAttribute('href', val);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply);
    } else {
        apply();
    }
})();
