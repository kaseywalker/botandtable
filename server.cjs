const express = require('express');
// Use dynamic import for node-fetch (ESM-only)
const fetch = (...args) => import('node-fetch').then(mod => mod.default(...args));
const cors = require('cors');

const app = express();
const PORT = 5185;

app.use(cors()); // Allow all origins (for development)
app.use(express.json());

app.post('/api/business-type', async (req, res) => {
  try {
    // Forward the request body to the n8n webhook
    const apiRes = await fetch('https://n8n.botandtable.com/webhook/business-type', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const data = await apiRes.json();
    res.status(apiRes.status).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch business type', details: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 