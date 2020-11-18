import Axios from 'axios';
import React from 'react';
import APIKit, {setClientToken} from './API';

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const login =  (email, password) => {
    setLoading(true);
    APIKit.post('http://192.168.1.59/api/login', {
      email : "hichem@test.com",
      password : "123456",
      device_name: 'android'
    }).then( response => {
      console.log(response.data)
        setClientToken(response.data.token);
        setUser(response.data.user);
        setLoading(false);
        setError(null);
      }).catch( error => {
      console.log(error.response.data);
      setError(error.response.data);
      setLoading(false); 
    })
  }
  const logout = async () => {
    setUser(null);
  }
  return (
    <AppContext.Provider value={{
      user,
      loading,
      error,
      login,
      logout
    }}>
      {children}
    </AppContext.Provider>
  )
}