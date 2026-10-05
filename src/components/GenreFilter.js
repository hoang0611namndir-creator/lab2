import React from 'react';
import { useTheme } from '../context/ThemeContext.js';

export default function GenreFilter({ filter, onFilterChange }) {
  const { darkMode } = useTheme();

  const selectStyle = {
    padding: '6px 10px',
    fontSize: '13px',
    borderRadius: '6px',
    border: `1px solid ${darkMode ? '#4b5563' : '#d1d5db'}`,
    backgroundColor: darkMode ? '#374151' : '#ffffff',
    color: darkMode ? '#ffffff' : '#111827',
    cursor: 'pointer',
    outline: 'none'
  };

  return (
    <select
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
      style={selectStyle}
    >
      <option value="all">Tất cả thể loại</option>
      <option value="Action">Action</option>
      <option value="Animation">Animation</option>
      <option value="Comedy">Comedy</option>
      <option value="Drama">Drama</option>
      <option value="Romance">Romance</option>
      <option value="Sci-Fi">Sci-Fi</option>
    </select>
  );
}