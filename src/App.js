import React from 'react';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.js';
import MovieList from './components/MovieList.jsx';
import useLocalStorage from './hooks/useLocalStorage.js';
import { movies } from './data/Movie.js';
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx';

function MainCard() {
  const [movie, setMovie] = useLocalStorage('task_manager_tasks', initialTasks);
  const { darkMode } = useTheme();

  const cardStyle = {
    width: '100%',
    maxWidth: '420px',
    backgroundColor: darkMode ? '#000000' : '#ffffff',
    // borderRadius: '12px',
    border: `1px solid ${darkMode ? '#000000' : '#ffffff'}`,
    padding: '24px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box'
  };

  return (
    <div style={cardStyle}>
      <Header />
      <MovieList
        tasks={movie}
      />
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