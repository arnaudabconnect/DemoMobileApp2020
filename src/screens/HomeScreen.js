import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions, Image } from 'react-native';
import { Button, Card, Divider, Layout, TopNavigation, Text, Icon, List, Menu } from '@ui-kitten/components';
import { ThemeContext } from '../../ThemeContext';
import {menuItems, menuItemsUser} from './HomeMenuData';
import { AppContext } from '../../AppContext';

export const HomeScreen = ({ navigation }) => {

  const {toggleTheme, theme} = React.useContext(ThemeContext);
  const {user} = React.useContext(AppContext)
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  const MenuItem = ({item}) => {
    return(
      <Card style={styles.card} 
      onPress={item.navigator ? () => navigation.navigate(item.navigator, {screen: item.screen}) : () => navigation.navigate(item.screen) }>
      {/* <Icon
       style={styles.icon}
       fill='#8F9BB3'
       name={item.icon}
       style={{
        width: 32,
        height: 32,
      }}
       /> */}
      <Image
        source={item.image[theme]}
        style={styles.icon}
        style={{
        width: 64,
        height: 64,
        alignSelf:'center'
      }}
       />
      <Text
        style={{
          alignSelf: 'center',
          paddingVertical:5
        }}
        category='s2'>
        {item.title}
      </Text>
    </Card>
    )
  // return(
  //   <Card style={styles.card} 
  //   onPress={ () => navigation.navigate(item.screen) }>
  //   <Icon
  //    style={styles.icon}
  //    fill='#8F9BB3'
  //    name={item.icon}
  //    style={{
  //     width: 32,
  //     height: 32,
  //   }}
  //    />
  //   <Text
  //     style={styles.itemTitle}
  //     category='s2'>
  //     {item.title}
  //   </Text>
  // </Card>
  // )
  }


  return (
    <SafeAreaView style={{ flex: 1, }}>
      <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      
      <Layout  style={styles.main_container}>
        <Button onPress={toggleTheme}>Change de theme ! </Button>     
        <List
           data={ user ? menuItemsUser : menuItems}
           renderItem={MenuItem}
           keyExtractor={item => item.title}
           numColumns={2}
           style={{
            // width:'100%',
            height:'100%',
            paddingTop: 15
          }}
          contentContainerStyle={{
            alignItems:'center'
          }}
        />
      </Layout>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems:'center',
  },
  card: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    alignContent:'center',
    marginVertical: 8,
    marginHorizontal: 8,
    height: 150,
    width: 150,
  },
  
  main_container: {
    flex: 1,
  }
});
