// src/components/TaskList.jsx
import React, { useState } from 'react';
import TaskItem from './TaskItem.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

export default function TaskList({ tasks, onToggle, onDelete }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const { darkMode } = useTheme();

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === 'all'
        ? true
        : filter === 'action'
        ? filter === 'animation'
        : filter === 'comedy'
        ? filter === 'drama'
        : filter === 'romance'
        ? filter === 'sci-Fi'
        : filter === 'none';

    return matchesFilter;
  });

  
  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{cursor: 'pointer' }}
        >
           <option value="all">Tất cả</option>
          <option value="action">Action</option>
          <option value="animation">Animation</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="romance">Romance</option>
        <option value="sci-Fi">Sci-Fi</option>
        </select>



      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskItem
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