import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AppContext } from '../AppContext';
import LogoutScreen from '../src/screens/login_screens/LogoutScreen';
import {CreateEventsScreen} from '../src/screens/CreateEventsScreen'

const { Navigator, Screen } = createStackNavigator();

const UserNavigator = () => {
  return (
    <Navigator headerMode='none'>
        <Screen name='CreateEventsScreen' component={CreateEventsScreen} /> 
        <Screen name='LogoutScreen' component={LogoutScreen} /> 
    </Navigator>
);
} 

export default UserNavigator;