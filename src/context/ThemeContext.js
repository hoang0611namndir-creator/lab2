import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage('task_manager_theme', false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  // Style bọc ngoài cùng: Căn giữa toàn màn hình bằng Flexbox
  const containerStyle = {
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: darkMode ? '#000000' : '#ffffff',
    color: darkMode ? '#ffffff' : '#000000',
    transition: 'background-color 0.5s, color 0.5s',
    boxSizing: 'border-box',
    padding: '16px',
    fontFamily: 'sans-serif'
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div style={containerStyle}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme phải được sử dụng bên trong <ThemeProvider>');
  }
  return context;
};