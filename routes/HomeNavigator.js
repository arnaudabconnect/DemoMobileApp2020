import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../src/screens/HomeScreen';
import { DetailsScreen, EventsScreen } from '../src/screens/EventsScreen';
import { NewsScreen } from '../src/screens/NewsScreen';
import { SingleNews } from '../src/screens/SingleNews';
import LoginNavigator from './LoginNavigator';
import { AppContext } from '../AppContext';
import LogoutScreen from '../src/screens/login_screens/LogoutScreen';
import UserNavigator from './UserNavigator';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  const {user} = React.useContext(AppContext)
  return (
    <Navigator headerMode='none'>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Events' component={EventsScreen}/>
    <Screen name='News' component={NewsScreen}/>
    <Screen name='SingleNews' component={SingleNews}/>
    {
      user ? 
        <Screen name='UserNavigator' component={UserNavigator} /> :
        <Screen name='LoginScreens' component={LoginNavigator} />
    }
  </Navigator>
);
} 

export default HomeNavigator;