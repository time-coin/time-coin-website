const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const file = path.join(process.cwd(), 'peers.json');
    const body = fs.readFileSync(file, 'utf8');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=60, stale-while-revalidate=300');
    res.status(200).send(body);
  } catch (e) {
    res.status(500).json({ error: 'Failed to load peers.json', detail: String(e) });
  }
};
