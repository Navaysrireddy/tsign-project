import React, { useEffect, useState, createContext, useContext } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  themeColor: 'teal',
  toggleTheme: () => {},
  setThemeColor: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [themeColor, setThemeColor] = useState('teal');

  useEffect(() => {
    /**
     * Applies theme and theme color to the <html> element.
     */
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${theme}-theme`);
    document.documentElement.setAttribute('data-theme', theme);

    document.documentElement.style.setProperty(
      '--theme-color',
      themeColor === 'teal'
        ? '#14b8a6'
        : themeColor === 'coral'
        ? '#ff7f50'
        : '#a855f7' // fallback: violet
    );
  }, [theme, themeColor]);

  // Exposed function to change theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Exposed function to change theme color
  const updateThemeColor = (color) => {
    setThemeColor(color);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeColor,
        toggleTheme,
        setThemeColor: updateThemeColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
