import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { ThemeContext } from '../../ThemeContext';

export const HomeScreen = ({ navigation }) => {
  const {toggleTheme } = React.useContext(ThemeContext);
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        <Button onPress={toggleTheme}>Change de theme ! </Button>
      </Layout>
    </SafeAreaView>
  );
};