import React from 'react';
import APIKit, {setClientToken} from './API';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData =  (key, value) => {
  try {
     AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}

clearAll =  () => {
  try {
    AsyncStorage.clear()
  } catch(e) {
    // clear error
  }
}


export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    AsyncStorage.getItem('user').then(userString => {
      setUser(JSON.parse(userString))
      AsyncStorage.getItem('token').then(token => setClientToken(token));     
    })
  }, [])
  const login =  (email, password) => {
    setLoading(true);
    APIKit.post('/api/login', {
      email : "hichem@test.com",
      password : "123456",
      device_name: 'android'
    }).then( response => {
      console.log(response.data)
        setClientToken(response.data.token);
        setUser(response.data.user);
        setLoading(false);
        setError(null);
        storeData('user', JSON.stringify(response.data.user));
        storeData('token', response.data.token);
      }).catch( error => {
      console.log(error.response.data);
      setError(error.response.data);
      setLoading(false); 
    })
  }
  const logout = async () => {
    APIKit.post('/api/logout').then( response => {
      setUser(null);
      clearAll();
      console.log(response.data);
    }).catch( error => console.log(error.response) );
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