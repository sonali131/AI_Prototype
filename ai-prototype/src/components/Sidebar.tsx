import React from 'react';
import './Sidebar.css';

type SidebarProps = {
  temperature: number;
  setTemperature: (val: number) => void;
  maxTokens: number;
  setMaxTokens: (val: number) => void;
  isDark: boolean;
  toggleTheme: () => void;
  isOpen: boolean; // New prop
  closeSidebar: () => void; // New prop
};

const Sidebar: React.FC<SidebarProps> = ({ 
  temperature, setTemperature, maxTokens, setMaxTokens, isDark, toggleTheme, isOpen, closeSidebar
}) => {
  return (
    <div className={`sidebar ${isDark ? 'dark' : 'light'} ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>AI Config</h2>
        <button className="close-btn-mobile" onClick={closeSidebar}>×</button>
      </div>
      
      <div className="control-group">
        <label>Temperature: {temperature}</label>
        <input 
          type="range" min="0" max="1" step="0.1"
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label>Max Tokens: {maxTokens}</label>
        <input 
          type="range" min="100" max="4000" step="100"
          value={maxTokens}
          onChange={(e) => setMaxTokens(parseInt(e.target.value))}
        />
      </div>

      <button onClick={toggleTheme} className="theme-btn">
        {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
};

export default Sidebar;