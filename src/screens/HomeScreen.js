import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';
import { Button, Card, Divider, Layout, TopNavigation, Text, Icon, List, Menu } from '@ui-kitten/components';
import { ThemeContext } from '../../ThemeContext';
import { Image } from 'react-native-svg';
import {menuItems} from './HomeMenuData';

export const HomeScreen = ({ navigation }) => {

  const {toggleTheme } = React.useContext(ThemeContext);
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  const MenuItem = ({item}) => {
    return(
      <Card style={styles.card} 
      onPress={ () => navigation.navigate(item.screen) }>
      <Icon
       style={styles.icon}
       fill='#8F9BB3'
       name={item.icon}
       style={{
        width: 32,
        height: 32,
      }}
       />
      <Text
        style={styles.itemTitle}
        category='s2'>
        {item.title}
      </Text>
    </Card>
    )
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'red' }}>
      <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      
      <Layout  style={styles.main_container}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        <Button onPress={toggleTheme}>Change de theme ! </Button>     
      <Layout  style={styles.container}>
        <List
           data={menuItems}
           renderItem={MenuItem}
           keyExtractor={item => item.title}
           numColumns={2}
           style={{
            width:'100%',
            height:'100%',
          }}
          contentContainerStyle={{
            alignItems:'center'
          }}
        />
      </Layout>
      </Layout>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems:'center'
  },
  card: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    marginVertical: 15,
    marginHorizontal: 15,
    height: 150,
    width: 150,
  },
  
  main_container: {
    flex: 1,
   
  }
});
