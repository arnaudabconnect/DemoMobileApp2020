import React from 'react';

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <AppContext.Provider value={{
      user,
      login: (username, password) => {

      }
    }}>
      {children}
    </AppContext.Provider>
  )
}