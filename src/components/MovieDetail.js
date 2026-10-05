import React from 'react';
import { useTheme } from '../context/ThemeContext.js';

export default function MovieDetail({ movie, onClose }) {
  const { darkMode } = useTheme();

  if (!movie) return null;

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  };

  const modalStyle = {
    backgroundColor: darkMode ? '#1f2937' : '#ffffff',
    color: darkMode ? '#ffffff' : '#111827',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '380px',
    width: '90%',
    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
  };

  const closeBtnStyle = {
    marginTop: '16px',
    padding: '6px 12px',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%'
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{movie.title}</h2>
        <p style={{ margin: '4px 0', fontSize: '13px' }}><strong>Đạo diễn:</strong> {movie.director}</p>
        <p style={{ margin: '4px 0', fontSize: '13px' }}><strong>Thể loại:</strong> {movie.genre}</p>
        <p style={{ margin: '4px 0', fontSize: '13px' }}><strong>Năm phát hành:</strong> {movie.year}</p>
        <p style={{ margin: '4px 0', fontSize: '13px' }}><strong>Thời lượng:</strong> {movie.duration} phút</p>
        <p style={{ margin: '4px 0', fontSize: '13px' }}><strong>Đánh giá:</strong> ⭐ {movie.rating}/10</p>
        <p style={{ margin: '10px 0 0 0', fontSize: '13px', fontStyle: 'italic', color: darkMode ? '#9ca3af' : '#4b5563' }}>
          "{movie.description}"
        </p>
        <button style={closeBtnStyle} onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
}