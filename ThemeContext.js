import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

export const ThemeContext = React.createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('dark');
  React.useEffect(() => {
    AsyncStorage.getItem('themeChoice').then(themeChoice => {
      setTheme(themeChoice)
    }).catch( err => console.log(err) );
  }, []);
  
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    AsyncStorage.setItem('themeChoice', nextTheme).then( () => console.log('theme saved') ).catch( err => console.log(err) );
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