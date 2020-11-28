import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../src/screens/login_screens/LoginScreen';
import RegisterScreen from '../src/screens/login_screens/RegisterScreen';
import ForgotPasswordScreen from '../src/screens/login_screens/ForgotPasswordScreen';

const { Navigator, Screen } = createStackNavigator();

const LoginNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Login' component={LoginScreen}/>
    <Screen name='Register' component={RegisterScreen}/>
    <Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
  </Navigator>
);

export default LoginNavigator;