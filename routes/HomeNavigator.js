import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../src/screens/HomeScreen';
import { DetailsScreen } from '../src/screens/DetailsScreen';
import { NewsScreen } from '../src/screens/NewsScreen';
import { SingleNews } from '../src/screens/SingleNews';
import LoginNavigator from './LoginNavigator';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Details' component={DetailsScreen}/>
    <Screen name='News' component={NewsScreen}/>
    <Screen name='SingleNews' component={SingleNews}/>
    <Screen name='LoginScreens' component={LoginNavigator} />
  </Navigator>
);

export default HomeNavigator;