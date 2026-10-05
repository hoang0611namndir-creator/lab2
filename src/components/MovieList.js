import React, { useState } from 'react';
import MovieItem from './MovieItem.js';
import SearchBar from './SearchBar.js';
import GenreFilter from './GenreFilter.js';
import MovieDetail from './MovieDetail.js';
import { useTheme } from '../context/ThemeContext.js';

export default function MovieList({ movies, onToggleFav }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { darkMode } = useTheme();

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = filter === 'all' || movie.genre.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesGenre;
  });

  const favoriteCount = movies.filter((m) => m.isFavorite).length;

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <SearchBar search={search} onSearchChange={setSearch} />
        <GenreFilter filter={filter} onFilterChange={setFilter} />
      </div>

      <div style={{ fontSize: '12px', color: darkMode ? '#9ca3af' : '#6b7280', marginBottom: '12px' }}>
        Tổng: {movies.length} | Yêu thích: {favoriteCount}
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onFav={onToggleFav}
              onDetail={setSelectedMovie}
            />
          ))
        ) : (
          <li style={{ textAlign: 'center', padding: '16px', fontSize: '14px', color: '#9ca3af' }}>
            Không tìm thấy phim nào.
          </li>
        )}
      </ul>

      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}