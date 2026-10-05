import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

export default function MovieItem({ task, onFav, onDetail }) {
  const { darkMode } = useTheme();

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 12px',
    marginBottom: '8px',
    borderRadius: '6px',
    border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
    backgroundColor: darkMode ? '#374151' : '#f9fafb'
  };

  const textStyle = {
    fontSize: '14px',
    textDecoration: task.completed ? 'line-through' : 'none',
    color: task.completed
      ? darkMode ? '#9ca3af' : '#6b7280'
      : darkMode ? '#f3f4f6' : '#111827'
  };

  const detailBtnStyle = {
    fontSize: '12px',
    color: '#074dff',
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
          checked={task.completed}
          onChange={() => onFav(task.id)}
          style={{ cursor: 'pointer' }}
        />
        <span style={textStyle}>{task.title}</span>
      </div>
      <button onClick={() => onDetail(task.id)} style={detailBtnStyle}>
        Chi tiết
      </button>
    </li>
  );
}