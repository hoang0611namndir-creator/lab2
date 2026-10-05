import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import movies from '../datas/movies.js';
import MovieItem from './MovieItem.js';

export default function SearchBar({movies, onFav, onDetail}){
const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const { darkMode } = useTheme();

  const filteredMovies = movies.filter((movie) => {
      
    const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  const inputStyle = {
    padding: '6px 10px',
    fontSize: '13px',
    borderRadius: '6px',
    border: `1px solid ${darkMode ? '#4b5563' : '#d1d5db'}`,
    backgroundColor: darkMode ? '#374151' : '#ffffff',
    color: darkMode ? '#ffffff' : '#111827'
  };
  return(
    <div>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ ...inputStyle, flex: 1 }}
        />

         <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onFav={onFav}
              onDetail={onDetail}
            />
          ))
        ) : (
          <li style={{ textAlign: 'center', padding: '16px', fontSize: '14px', color: '#9ca3af' }}>
            Không có phim nào.
          </li>
        )}
      </ul>
    </div>
  )

}