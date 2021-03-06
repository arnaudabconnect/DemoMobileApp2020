import React from 'react';

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}