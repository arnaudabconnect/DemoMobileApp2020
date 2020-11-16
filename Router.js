import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppContext } from './AppContext';
import HomeNavigator from './routes/HomeNavigator';
import LoginNavigator from './routes/LoginNavigator';


const Routes = () => {
  const {user} = React.useContext(AppContext);
  return (
    <NavigationContainer>
       <HomeNavigator/>
    </NavigationContainer>
  )
  };

export default Routes;