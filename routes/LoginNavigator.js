import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../src/screens/login_screens/LoginScreen';
import { RegisterScreen } from '../src/screens/login_screens/RegisterScreen';

const { Navigator, Screen } = createStackNavigator();

const LoginNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Login' component={LoginScreen}/>
    <Screen name='Regiser' component={RegisterScreen}/>
  </Navigator>
);

export default LoginNavigator;