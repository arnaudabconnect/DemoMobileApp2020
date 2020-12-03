import React from 'react';
import APIKit, {setClientToken} from './API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging'
import Axios from 'axios';

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
  const [fcmtoken , setFcmtoken] = React.useState(null);
  const [userToken , setUserToken] = React.useState(null);

  React.useEffect(() => {
    AsyncStorage.getItem('user').then(userString => {
      setUser(JSON.parse(userString))
      AsyncStorage.getItem('token').then(token => {
        setClientToken(token)
        setUserToken(token);
      });     
    })
    // AsyncStorage.getItem('FCM_token').then(FCM_token => {
    //   setFcmtoken(FCM_token)
    // }).catch()
    messaging().getToken().then( fcm => { setFcmtoken(fcm) } )
  }, [])
  const login =  (email, password) => {
    setLoading(true);
    APIKit.post('/api/login', {
      email,
      password,
      device_name: 'android',
      device_token: fcmtoken,
    }).then( response => {
      console.log(response.data)
        setClientToken(response.data.token);
        setUser(response.data.user);
        setError(null);
        storeData('user', JSON.stringify(response.data.user));
        storeData('token', response.data.token);
        setUserToken(response.data.token);
        setLoading(false);
      }).catch( error => {
      console.log(error.response.data);
      setError(error.response.data);
      setLoading(false); 
    })
  }
  const logout = async () => {
    
    Axios.post('http://192.168.1.6/api/logout', {},{ headers: { Authorization: `Bearer ${userToken}`} }).then( response => {
      setUser(null);
      clearAll();
      console.log(response.data);
    }).catch( error => console.log(error.response) );
  }

  const getFcmToken = async () => {
  
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
     console.log(fcmToken);
     AsyncStorage.setItem('FCM_token', fcmToken).then( () => {
       console.log('fcm token saved !')
       setFcmtoken(fcmtoken)
      } )
     
    } else {
     console.log("Failed", "No token received");
    }
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
    
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