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

export const NewsScreen = ({ navigation }) => {
  const newsData =  [
    {
        title: 'first',
        content: `TEST A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
        Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the
        Milky Way.`,
    },
    {
        title: 'second',
        content: `TEST A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
        Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the
        Milky Way.`,
    },
    {
        title: 'third',
        content: `TEST A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
        Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the
        Milky Way.`,
    },
  
    
  ]
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const NewsItem = ({item}) => {
    return (

      <Card 
      onPress={() => navigation.navigate('SingleNews', {item})}
      style={{
          marginVertical: 10,
          
      }} 
        header={() => <Text style={{padding:20}}  category='h6'> {item.title} </Text>}
      >
      <Text>
          {item.content}
      </Text>

    </Card>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
        
      <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', }}>

         <List
           data={newsData}
           renderItem={NewsItem}
           keyExtractor={item => item.title}
            style={{
            width:'100%',
            height:'100%',
            paddingHorizontal: 10
          }}
        />

      </Layout>
    </SafeAreaView>
  );
};


