// src/components/TaskList.jsx
import React, { useState } from 'react';
import MovieItem from './MovieItem.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

export default function TaskList({ tasks, onToggle, onDelete }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const { darkMode } = useTheme();

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === 'all'
        ? true
        : filter === 'active'
        ? !task.completed
        : task.completed;
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const inputStyle = {
    padding: '6px 10px',
    fontSize: '13px',
    borderRadius: '6px',
    border: `1px solid ${darkMode ? '#4b5563' : '#d1d5db'}`,
    backgroundColor: darkMode ? '#374151' : '#ffffff',
    color: darkMode ? '#ffffff' : '#111827'
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ ...inputStyle, cursor: 'pointer' }}
        >
          <option value="all">Tất cả</option>
          <option value="active">Action</option>
          <option value="completed">Animation</option>
        <option value="completed">Comedy</option>
        <option value="completed">Drama</option>
        <option value="completed">Romance</option>
        <option value="completed">Sci-Fi</option>




        </select>

        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ ...inputStyle, flex: 1 }}
        />
      </div>

      <div style={{ fontSize: '12px', color: darkMode ? '#9ca3af' : '#6b7280', marginBottom: '12px' }}>
        Tổng: {tasks.length} | Chưa làm: {tasks.filter(t => !t.completed).length} | Hoàn thành: {tasks.filter(t => t.completed).length}
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <MovieItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        ) : (
          <li style={{ textAlign: 'center', padding: '16px', fontSize: '14px', color: '#9ca3af' }}>
            Không có công việc nào.
          </li>
        )}
      </ul>
    </div>
  );
}