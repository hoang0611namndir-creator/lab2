import React from 'react';
import { useTheme } from '../context/ThemeContext.js';

export default function SearchBar({ search, onSearchChange }) {
  const { darkMode } = useTheme();

  const inputStyle = {
    flex: 1,
    padding: '6px 10px',
    fontSize: '13px',
    borderRadius: '6px',
    border: `1px solid ${darkMode ? '#4b5563' : '#d1d5db'}`,
    backgroundColor: darkMode ? '#374151' : '#ffffff',
    color: darkMode ? '#ffffff' : '#111827',
    outline: 'none'
  };

  return (
    <input
      type="text"
      placeholder="Tìm kiếm phim..."
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      style={inputStyle}
    />
  );
}