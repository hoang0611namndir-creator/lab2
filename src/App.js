import React from 'react';
import Header from './components/Header.js';
import MovieList from './components/MovieList.js';
import useLocalStorage from './hooks/useLocalStorage.js';
import { movies as initialMovies } from './datas/movies.js';
import { ThemeProvider, useTheme } from './context/ThemeContext.js';

function MainCard() {
  const [movies, setMovies] = useLocalStorage('movie_manager_movies', initialMovies);
  const { darkMode } = useTheme();

  const handleToggleFav = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((m) =>
        m.id === id ? { ...m, isFavorite: !m.isFavorite } : m
      )
    );
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '420px',
    backgroundColor: darkMode ? '#111827' : '#ffffff',
    borderRadius: '12px',
    border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
    padding: '24px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box'
  };

  return (
    <div style={cardStyle}>
      <Header />
      <MovieList movies={movies} onToggleFav={handleToggleFav} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainCard />
    </ThemeProvider>
  );
}