const { initializeApp, getApps, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// Seed peers always included regardless of submissions
const SEED_PEERS = [
  '64.91.241.10',
  '50.28.104.50',
  '165.84.215.117',
  '69.167.168.176',
  '50.28.107.33',
  '185.33.101.187',
  '185.67.45.7',
  '64.91.248.55',
];

if (!getApps().length) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)),
  });
}

const db = getFirestore();

module.exports = async (req, res) => {
  try {
    const snap = await db
      .collection('masternode_submissions')
      .where('status', '==', 'approved')
      .where('network', '==', 'testnet')
      .get();

    const submitted = snap.docs.map((d) => d.data().ip);
    const peers = [...new Set([...SEED_PEERS, ...submitted])];

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    res.json(peers);
  } catch (err) {
    console.error(err);
    // Fall back to seed peers on error so the endpoint never goes dark
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(SEED_PEERS);
  }
};
