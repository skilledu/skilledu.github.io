import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DynamicRenderer from './components/DynamicRenderer';
import CodeGenerator from './components/CodeGenerator';

const BACKEND_URL = window.location.hostname === 'localhost' ? 'http://localhost:7866' : window.location.origin;

function App() {
  const [apis, setApis] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedApi, setSelectedApi] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paramValues, setParamValues] = useState({});
  const [viewMode, setViewMode] = useState('visual'); 
  const [fetchStats, setFetchStats] = useState(null);
  
  // AI State
  const [aiExplanation, setAiExplanation] = useState(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  // New State for Phase 1
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem('history')) || []);

  useEffect(() => {
    // Apply theme
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    const fetchApis = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api-list`);
        setApis(res.data);
      } catch (err) {
        console.error("Failed to load APIs", err);
      }
    };
    fetchApis();
  }, []);

  const handleSelectApi = (api) => {
    setSelectedApi(api);
    setResponse(null);
    setFetchStats(null);
    setViewMode('visual');
    setAiExplanation(null);
    const initialParams = {};
    if (api.params && api.params.length > 0) {
      api.params.forEach(p => {
        initialParams[p.name] = p.default || '';
      });
    }
    setParamValues(initialParams);
  };

  const handleTest = async () => {
    if (!selectedApi) return;
    setLoading(true);
    setFetchStats(null);
    setAiExplanation(null);
    const startTime = Date.now();
    try {
      const res = await axios.get(`${BACKEND_URL}/api/${selectedApi.id}`, {
        params: paramValues
      });
      const endTime = Date.now();
      setResponse(res.data);
      setFetchStats({ status: res.status, time: endTime - startTime, ok: true });
      
      // Save to history
      const historyItem = {
        apiName: selectedApi.name,
        timestamp: new Date().toLocaleString(),
        status: res.status,
        url: getDynamicOriginalUrl()
      };
      setHistory(prev => [historyItem, ...prev].slice(0, 10)); // Keep last 10

    } catch (err) {
      const endTime = Date.now();
      setResponse(err.response?.data || { error: 'Failed to fetch', details: err.message });
      setFetchStats({ status: err.response?.status || 500, time: endTime - startTime, ok: false });
    }
    setLoading(false);
  };

  const toggleFavorite = (apiId, e) => {
    e.stopPropagation();
    if (favorites.includes(apiId)) {
      setFavorites(favorites.filter(id => id !== apiId));
    } else {
      setFavorites([...favorites, apiId]);
    }
  };

  const copyToClipboard = () => {
    if (response) {
      navigator.clipboard.writeText(JSON.stringify(response, null, 2));
      alert("Raw JSON copied to clipboard!");
    }
  };

  const handleExplainWithAI = async () => {
    if (!response) return;
    setIsAiLoading(true);
    setAiExplanation(null);
    try {
      const prompt = `Explain this API response simply in 2-3 sentences. Do not define what JSON or APIs are, just get straight to the point about what this specific data represents: ${JSON.stringify(response).substring(0, 500)}`;
      
      const aiRes = await axios.post('https://api.skilledu.in/api/ai_gateway.php', {
        message: prompt
      });
      
      if (aiRes.data && aiRes.data.success) {
        setAiExplanation(aiRes.data.response);
      } else {
        setAiExplanation("Sorry, the AI could not generate an explanation at this time.");
      }
    } catch (err) {
      setAiExplanation("Error connecting to AI Gateway.");
    }
    setIsAiLoading(false);
  };

  const getDynamicOriginalUrl = () => {
    if (!selectedApi || !selectedApi.originalUrl) return '';
    let url = selectedApi.originalUrl;
    
    // If it's a relative URL (custom local API), prepend the backend host
    if (url.startsWith('/')) {
      url = BACKEND_URL + url;
    }

    if (selectedApi.params) {
      selectedApi.params.forEach(p => {
        if (p.inPath) {
          url = url.replace(`{${p.name}}`, encodeURIComponent(paramValues[p.name] || ''));
        }
      });
    }
    // Also append query params to the URL for the code generator to see them!
    const queryParams = [];
    if (selectedApi.params) {
      selectedApi.params.forEach(p => {
        if (!p.inPath && paramValues[p.name]) {
          queryParams.push(`${encodeURIComponent(p.name)}=${encodeURIComponent(paramValues[p.name])}`);
        }
      });
    }
    if (queryParams.length > 0) {
      url += (url.includes('?') ? '&' : '?') + queryParams.join('&');
    }

    return url;
  };

  const filteredApis = apis.filter(a => a.name.toLowerCase().includes(search.toLowerCase()) || a.category.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="app-container">
      <header className="header">
        <h1>
          <img src="https://skilledu.in/assets/img/logo/skilledU_Logo.png" alt="Skilled.u Logo" height="40" style={{background: isDarkMode ? '#fff' : 'transparent', borderRadius: '4px', padding: '2px'}}/>
          API Hub
        </h1>
        <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
          <button className="theme-toggle-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
          <span className="dev-badge">Developed by SkillEdu</span>
        </div>
      </header>

      <main className="main-content">
        <div style={{marginBottom: '20px', textAlign: 'center'}}>
          <h2 style={{color: 'var(--primary)', marginBottom: '10px'}}>Explore Free Public APIs</h2>
          <p style={{color: 'var(--text-light)'}}>Test them out instantly. Build your next project using these data sources!</p>
        </div>
        
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search by API name or category (e.g., Animals, Finance, Data)..." 
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {history.length > 0 && (
          <div className="history-section" style={{marginBottom: '20px', padding: '15px', background: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border-color)'}}>
            <h3 style={{marginBottom: '10px'}}>Recent Requests</h3>
            <ul style={{fontSize: '0.85rem', listStyle: 'none'}}>
              {history.slice(0, 3).map((h, i) => (
                <li key={i} style={{marginBottom: '5px', display: 'flex', justifyContent: 'space-between'}}>
                  <span><strong>{h.apiName}</strong> <span style={{color: 'var(--text-light)'}}>({h.timestamp})</span></span>
                  <span style={{color: h.status === 200 ? '#10b981' : '#ef4444'}}>{h.status}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {apis.length === 0 ? (
          <div style={{textAlign: 'center', padding: '50px'}}>Loading APIs...</div>
        ) : (
          <div className="api-grid">
            {filteredApis.map((api) => (
              <div key={api.id} className="api-card" onClick={() => handleSelectApi(api)}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span className="badge">{api.category}</span>
                  <button 
                    onClick={(e) => toggleFavorite(api.id, e)}
                    style={{background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: favorites.includes(api.id) ? '#ef4444' : '#ccc'}}
                  >
                    {favorites.includes(api.id) ? '❤️' : '🤍'}
                  </button>
                </div>
                <h3>{api.name}</h3>
                <p>{api.desc}</p>
                <div style={{marginTop: '10px', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 'bold'}}>
                  Test Endpoint &rarr;
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        &copy; 2026 Skilled.u - Empowering Future Developers
      </footer>

      {selectedApi && (
        <div className="modal-overlay" onClick={() => setSelectedApi(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2 style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  {selectedApi.name}
                  <button 
                    onClick={(e) => toggleFavorite(selectedApi.id, e)}
                    style={{background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: favorites.includes(selectedApi.id) ? '#ef4444' : '#ccc'}}
                  >
                    {favorites.includes(selectedApi.id) ? '❤️' : '🤍'}
                  </button>
                </h2>
                <p style={{color: 'var(--text-light)', marginTop: '5px'}}>{selectedApi.desc}</p>
              </div>
              <button className="close-btn" onClick={() => setSelectedApi(null)}>&times;</button>
            </div>
            
            <div className="test-area">
              <div style={{background: 'var(--bg-color)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <div>
                  <span style={{fontWeight: 'bold', fontSize: '0.85rem', color: 'var(--text-light)'}}>Original External Endpoint:</span><br/>
                  <a href={getDynamicOriginalUrl()} target="_blank" rel="noreferrer" style={{color: 'var(--primary)', wordBreak: 'break-all'}}>{getDynamicOriginalUrl()}</a>
                </div>
                <div>
                  <span style={{fontWeight: 'bold', fontSize: '0.85rem', color: 'var(--text-light)'}}>Your Proxy Endpoint (CORS Safe):</span><br/>
                  <code style={{background: 'rgba(0,0,0,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.9rem'}}>
                    GET {BACKEND_URL}/api/{selectedApi.id}
                  </code>
                </div>
              </div>

              {selectedApi.params && selectedApi.params.length > 0 && (
                <div style={{margin: '15px 0'}}>
                  <h4 style={{marginBottom: '10px'}}>Parameters</h4>
                  {selectedApi.params.map(p => (
                    <div key={p.name} style={{marginBottom: '10px'}}>
                      <label style={{display: 'block', fontSize: '0.9rem', marginBottom: '5px'}}>{p.label}</label>
                      <input 
                        type="text" 
                        value={paramValues[p.name]} 
                        onChange={(e) => setParamValues({...paramValues, [p.name]: e.target.value})}
                        style={{width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: 'var(--text-dark)'}}
                      />
                    </div>
                  ))}
                </div>
              )}

              <CodeGenerator url={getDynamicOriginalUrl()} method="GET" />

              <button className="btn-test" onClick={handleTest} disabled={loading} style={{marginTop: '20px'}}>
                {loading ? 'Fetching Data...' : 'Send Request'}
              </button>
              
              {fetchStats && (
                <div style={{marginTop: '15px', display: 'flex', gap: '15px', fontSize: '0.9rem'}}>
                  <span style={{color: fetchStats.ok ? '#10b981' : '#ef4444', fontWeight: 'bold'}}>
                    Status: {fetchStats.status} {fetchStats.ok ? 'OK' : 'Error'}
                  </span>
                  <span style={{color: 'var(--text-light)'}}>
                    Time: {fetchStats.time}ms
                  </span>
                </div>
              )}

              {response && (
                <div style={{marginTop: '15px'}}>
                  <div className="tabs">
                    <button className={`tab-btn ${viewMode === 'visual' ? 'active' : ''}`} onClick={() => setViewMode('visual')}>Visual UI</button>
                    <button className={`tab-btn ${viewMode === 'raw' ? 'active' : ''}`} onClick={() => setViewMode('raw')}>Raw JSON</button>
                    <button className="tab-btn" onClick={handleExplainWithAI} disabled={isAiLoading} style={{marginLeft: 'auto', background: '#3b82f6', color: 'white', border: 'none'}}>
                      {isAiLoading ? '✨ Thinking...' : '✨ Explain with AI'}
                    </button>
                    <button className="tab-btn" onClick={copyToClipboard} style={{marginLeft: '10px', background: 'transparent', border: '1px solid var(--border-color)'}}>Copy JSON</button>
                  </div>
                  
                  {aiExplanation && (
                    <div style={{background: '#f0fdf4', color: '#166534', padding: '15px', borderRadius: '8px', marginBottom: '15px', border: '1px solid #bbf7d0', lineHeight: '1.5'}}>
                      <h4 style={{marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px'}}>✨ AI Explanation</h4>
                      <p>{aiExplanation}</p>
                    </div>
                  )}

                  <div className="response-box" style={{marginTop: '0', borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
                    {viewMode === 'visual' ? (
                      <DynamicRenderer data={response} />
                    ) : (
                      <pre style={{margin: 0, overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>
                        {JSON.stringify(response, null, 2)}
                      </pre>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
