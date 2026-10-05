import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '16px',
    marginBottom: '16px',
    borderBottom: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`
  };

  const buttonStyle = {
    padding: '6px 12px',
    fontSize: '12px',
    borderRadius: '6px',
    border: `1px solid ${darkMode ? '#4b5563' : '#d1d5db'}`,
    backgroundColor: darkMode ? '#374151' : '#f3f4f6',
    color: darkMode ? '#f3f4f6' : '#374151',
    cursor: 'pointer'
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>
        Mini Movie Manager
      </h1>
      <button onClick={toggleTheme} style={buttonStyle}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}