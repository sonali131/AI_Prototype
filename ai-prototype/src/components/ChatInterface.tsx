import React, { useState } from 'react';
import { models, templates } from './mockData';
import './ChatInterface.css';

type ChatInterfaceProps = {
  temperature: number;
  maxTokens: number;
  isDark: boolean;
  toggleSidebar: () => void; // New prop to open sidebar
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({ temperature, maxTokens, isDark, toggleSidebar }) => {
  const [selectedModel, setSelectedModel] = useState(models[0].id);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!prompt) return;
    setLoading(true);
    // Mock API simulation
    setTimeout(() => {
      setResponse(`[Output from ${selectedModel}]\nParams: Temp=${temperature}, MaxTokens=${maxTokens}\n\nGenerated response for: "${prompt}"`);
      setLoading(false);
    }, 1000);
  };

  // --- NEW FUNCTIONS ADDED HERE ---
  const downloadJSON = () => {
    if (!response) return;
    const data = JSON.stringify({ 
      model: selectedModel, 
      temperature, 
      maxTokens, 
      prompt, 
      response 
    }, null, 2);
    
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'session.json';
    a.click();
  };

  const copyToClipboard = () => {
    if (response) {
      navigator.clipboard.writeText(response);
      alert("Output copied to clipboard!");
    }
  };
  // --------------------------------

  return (
    <div className={`chat-container ${isDark ? 'dark' : 'light'}`}>
      <header className="chat-header">
        <div className="header-left">
          {/* Menu Button for Mobile */}
          <button className="menu-btn" onClick={toggleSidebar}>☰</button>
          <h1>Playground</h1>
        </div>
        
        <select 
          value={selectedModel} 
          onChange={(e) => setSelectedModel(e.target.value)}
          className="model-select"
        >
          {models.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
        </select>
      </header>

      <div className="templates">
        {templates.map(t => (
          <button key={t.id} onClick={() => setPrompt(t.content)} className="tag">
            {t.name}
          </button>
        ))}
      </div>

      <div className="input-area">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter prompt here..."
          className="prompt-box"
        />
        <button onClick={handleGenerate} disabled={loading} className="run-btn">
          {loading ? 'Generating...' : 'Run'}
        </button>
      </div>

      {response && (
        <div className="output-area">
          {/* --- NEW BUTTONS UI --- */}
          <div className="output-actions" style={{display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '10px'}}>
            <button 
              onClick={copyToClipboard} 
              style={{
                fontSize: '12px', 
                cursor: 'pointer', 
                padding: '5px 10px', 
                borderRadius: '4px', 
                border: '1px solid #ccc',
                background: isDark ? '#334155' : '#fff',
                color: isDark ? '#fff' : '#333'
              }}
            >
              Copy
            </button>
            <button 
              onClick={downloadJSON} 
              style={{
                fontSize: '12px', 
                cursor: 'pointer',
                padding: '5px 10px', 
                borderRadius: '4px', 
                border: '1px solid #ccc',
                background: isDark ? '#334155' : '#fff',
                color: isDark ? '#fff' : '#333'
              }}
            >
              Download JSON
            </button>
          </div>
          {/* ---------------------- */}
          
          <h3>Output:</h3>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;