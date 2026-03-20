import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a helpful support assistant for TIME Coin, a proof-of-stake cryptocurrency with a masternode network. Help users with:

- Setting up and managing masternodes (Tier 1, Tier 2, Tier 3)
- Using the TIME Coin Masternode Portal (registering nodes, checking status)
- Understanding TIME Coin technology, staking, and rewards
- Troubleshooting common issues (wallet sync, node connectivity, portal login)
- Finding resources on the website

Key pages:
- Portal Login / Register: /login.html
- Masternode Dashboard: /dashboard.html
- Block Explorer: /explorer.html
- Buy TIME (Exchange): /exchange.html
- Documentation: /docs.html
- FAQ: /faq.html
- Roadmap: /roadmap.html
- Community: /community.html
- Whitepaper: /whitepaper.html
- Technical Whitepaper: /technical-whitepaper.html

Keep answers concise and practical. If you're unsure about a specific detail, direct users to the docs or community.`;

export default async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
        return res.status(500).json({ error: 'Chat not configured' });
    }

    const { messages } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Invalid messages' });
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    try {
        const stream = client.messages.stream({
            model: 'claude-opus-4-6',
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: messages.slice(-10),
        });

        for await (const event of stream) {
            if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
                res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
            }
        }

        res.write('data: [DONE]\n\n');
    } catch (err) {
        res.write(`data: ${JSON.stringify({ error: 'Failed to get response. Please try again.' })}\n\n`);
    }

    res.end();
}
