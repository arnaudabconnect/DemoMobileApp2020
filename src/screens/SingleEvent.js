import React from 'react';
import { SafeAreaView, Image, ScrollView } from 'react-native';
import { 
    Card,
    Divider,
    Icon,
    Layout,
    List,
    Text,
    TopNavigation,
    TopNavigationAction,
 } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);


export const SingleEvent = ({ navigation, route }) => {
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
        prévu le {  item.date }
      </Text>
       
      <Text>
        { item.description }
      </Text>
       {
            item.image.length > 0 &&
            <ScrollView style={{height:'100%', width:'100%', marginVertical:30}}>
            {
            item.image.map(image => (
              <Image
              // source={{ uri:image.uri}}
              source={{ uri: "data:image/png;base64,"+image.image}}
              style={{ width: '100%', height: 250 , marginVertical:30}}
             />
            ))
          }

            </ScrollView>
              
          } 
      </Layout>
    </SafeAreaView>

  );
};


