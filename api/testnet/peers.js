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

function getDb() {
  const { initializeApp, getApps, cert } = require('firebase-admin/app');
  const { getFirestore } = require('firebase-admin/firestore');

  if (!getApps().length) {
    // Firebase private_key contains literal \n — replace so JSON.parse works
    // whether the env var was stored with real newlines or escaped ones
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT.replace(/\\n/g, '\n');
    const serviceAccount = JSON.parse(raw);
    initializeApp({ credential: cert(serviceAccount) });
  }

  return getFirestore();
}

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const db = getDb();
    const snap = await db
      .collection('masternode_submissions')
      .where('status', '==', 'approved')
      .where('network', '==', 'testnet')
      .get();

    const submitted = snap.docs.map((d) => d.data().ip);
    const peers = [...new Set([...SEED_PEERS, ...submitted])];

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    res.json(peers);
  } catch (err) {
    console.error('peers/testnet error:', err);
    res.json(SEED_PEERS);
  }
};
