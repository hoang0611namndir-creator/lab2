import React, { useState } from 'react';
import MovieItem from './MovieItem.js';
import SearchBar from './SearchBar.js';
import GenreFilter from './GenreFilter.js';
import MovieDetail from './MovieDetail.js';
import { useTheme } from '../context/ThemeContext.js';

export default function MovieList({ movies, onToggleFav }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { darkMode } = useTheme();

  // Lọc danh sách phim theo tiêu chí tìm kiếm và thể loại
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = filter === 'all' || movie.genre.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesGenre;
  });

  // Sắp xếp danh sách đã lọc (sử dụng localeCompare để so sánh chuỗi chính xác)
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
    if (sortBy === 'title-desc') return b.title.localeCompare(a.title);
    if (sortBy === 'rating-desc') return b.rating - a.rating;
    if (sortBy === 'rating-asc') return a.rating - b.rating;
    if (sortBy === 'id-asc') return a.id - b.id;
    if (sortBy === 'id-desc') return b.id - a.id;
    return 0; // 'default': Giữ nguyên thứ tự ban đầu
  });

  const favoriteCount = movies.filter((m) => m.isFavorite).length;

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
        <SearchBar search={search} onSearchChange={setSearch} />
        <GenreFilter
          filter={filter}
          onFilterChange={setFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>

      <div style={{ fontSize: '12px', color: darkMode ? '#9ca3af' : '#6b7280', marginBottom: '12px' }}>
        Tổng: {movies.length} | Yêu thích: {favoriteCount}
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {sortedMovies.length > 0 ? (
          sortedMovies.map((movie) => (
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