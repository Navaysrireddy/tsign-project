// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { WiDaySunny, WiMoonAltWaxingCrescent3 } from 'react-icons/wi';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-button" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      {theme === 'light' ? <WiMoonAltWaxingCrescent3 className="theme-icon sun" /> : <WiDaySunny className="theme-icon moon" />}
    </button>
  );
};

export default ThemeToggle;