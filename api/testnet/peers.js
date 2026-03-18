export default async function handler(req, res) {
    try {
        const response = await fetch('http://69.167.168.176/api/v1/nodes/peers/testnet');
        const data = await response.json();
        res.setHeader('Cache-Control', 'no-store');
        res.status(200).json(data);
    } catch {
        res.status(500).json({ error: 'Failed to fetch peers' });
    }
}
