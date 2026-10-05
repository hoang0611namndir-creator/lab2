import React from 'react';
import { useTheme } from '../context/ThemeContext.js';

export default function MovieItem({ movie, onFav, onDetail }) {
  const { darkMode } = useTheme();

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 12px',
    marginBottom: '8px',
    borderRadius: '6px',
    border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
    backgroundColor: darkMode ? '#1f2937' : '#f9fafb'
  };

  const textStyle = {
    fontSize: '14px',
    fontWeight: movie.isFavorite ? 'bold' : 'normal',
    color: darkMode ? '#f3f4f6' : '#111827'
  };

  const detailBtnStyle = {
    fontSize: '12px',
    color: '#3b82f6',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    padding: '4px 8px'
  };

  return (
    <li style={itemStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input
          type="checkbox"
          checked={!!movie.isFavorite}
          onChange={() => onFav(movie.id)}
          style={{ cursor: 'pointer' }}
          title="Yêu thích"
        />
        <span style={textStyle}>
          {movie.title} ({movie.year})
        </span>
      </div>
      <button onClick={() => onDetail(movie)} style={detailBtnStyle}>
        Chi tiết
      </button>
    </li>
  );
}