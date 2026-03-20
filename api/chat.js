import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a friendly, simple support assistant for TIME Coin — a masternode cryptocurrency. Keep all responses short, plain, and easy to understand. Avoid long lists and technical jargon. Always point users to the docs or community for detailed guides.

IMPORTANT RULES:
- Keep responses to 3-5 sentences max unless absolutely necessary.
- Never write long step-by-step guides — instead link to the docs.
- Use plain language. Assume the user is a beginner.
- For masternode installation questions, always mention the one-line installer script and link to the docs.

MASTERNODE INSTALLATION:
Installing a masternode is easy with our installer script. Users just need a VPS running Ubuntu (we recommend Liquid Web for hosting at https://www.liquidweb.com) and TIME Coin collateral in their wallet. The installer script handles everything automatically — direct them to [/docs.html](/docs.html) for the full guide and the one-line install command.

KEY FACTS:
- Masternode tiers: Tier 1, Tier 2, Tier 3 (different collateral = different rewards)
- VPS recommended host: Liquid Web (https://www.liquidweb.com)
- Installation uses a simple bash script (masternode-installation.sh) — no manual config needed
- After installing, users register their node at the portal

KEY PAGES:
- Portal Login / Register: [/login.html](/login.html)
- Masternode Dashboard: [/dashboard.html](/dashboard.html)
- Block Explorer: [/explorer.html](/explorer.html)
- Buy TIME: [/exchange.html](/exchange.html)
- Documentation & Install Guide: [/docs.html](/docs.html)
- FAQ: [/faq.html](/faq.html)
- Community: [/community.html](/community.html)`;

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
