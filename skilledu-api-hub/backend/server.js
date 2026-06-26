require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const apis = require('./apiConfig');
const customApis = require('./customApis');
const generatedApis = require('./generatedApis');

const app = express();
const PORT = 7866;

app.use(cors());
app.use(express.json());

// Mount our own custom built APIs
app.use('/api/custom', customApis);
app.use('/api/generated', generatedApis);

const proxyRequest = async (res, urlTemplate, params = {}, headers = {}) => {
  try {
    const defaultHeaders = { 'Accept': 'application/json' };
    
    // Inject path parameters (e.g. {ip}) into URL
    let targetUrl = urlTemplate;
    if (targetUrl.startsWith('/')) {
      targetUrl = `http://127.0.0.1:${PORT}${targetUrl}`;
    }
    const queryParams = { ...params };
    
    Object.keys(params).forEach(key => {
      const paramPlaceholder = `{${key}}`;
      if (targetUrl.includes(paramPlaceholder)) {
        targetUrl = targetUrl.replace(paramPlaceholder, encodeURIComponent(params[key]));
        delete queryParams[key]; // Remove it from query params since it's now in the path
      }
    });

    const response = await axios.get(targetUrl, { 
      params: queryParams,
      headers: { ...defaultHeaders, ...headers }
    });
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching from ${urlTemplate}:`, error.message);
    res.status(500).json({ error: 'Failed to fetch data from the external API', details: error.message });
  }
};

app.get('/api-list', (req, res) => {
  // Expose the necessary metadata including the original URL template for educational purposes
  const list = apis.map(api => ({
    id: api.id,
    name: api.name,
    category: api.category,
    desc: api.desc,
    params: api.params,
    originalUrl: api.url
  }));
  res.json(list);
});

// Dynamically generate routes based on config
apis.forEach(api => {
  app.get(`/api/${api.id}`, (req, res) => {
    // Forward all query parameters from the client to the target API builder
    proxyRequest(res, api.url, req.query);
  });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
  console.log(`Proxying ${apis.length} APIs`);
});
