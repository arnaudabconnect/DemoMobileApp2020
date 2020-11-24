import React from 'react';
import { SafeAreaView } from 'react-native';
import { 
    Card,
    Divider,
    Icon,
    Layout,
    List,
    Text,
    TopNavigation,
    TopNavigationAction
 } from '@ui-kitten/components';
import { ScrollView } from 'react-native-gesture-handler';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);


export const SingleNews = ({ navigation, route }) => {
    const {item} = route.params;
    const navigateBack = () => {
        navigation.goBack();
      };
    
      const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
      );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
        
      <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', }}>

     
      <Text category='h1'>
         { item.title }
      </Text>
      <Text>
        { item.content }
      </Text>
      </Layout>
    </SafeAreaView>
  );
};
