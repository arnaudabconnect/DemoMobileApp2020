import React from 'react';
import { SafeAreaView, View, RefreshControl, Image } from 'react-native';
import { Card, Divider, Icon, Layout, List, Spinner, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import APIKit from '../../API';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const EventsScreen = ({ navigation }) => {
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true)
  const [refreshing, setRefreshing] = React.useState(false);
  const [nextPageUrl, setNextPageUrl] = React.useState(null);
 
  React.useEffect(() => {
    APIKit.get('/api/events').then( response => {
      setEvents(response.data.data);
      setNextPageUrl(response.data.next_page_url);
      setLoading(false);
    } ).catch(error => {
      console.log(error.response);
      setLoading(false);
    })
  }, [])
  const navigateBack = () => {
    navigation.goBack();
  };
  const onRefresh = () => {
    APIKit.get('/api/events').then( response => {
      setEvents(response.data.data);
      setNextPageUrl(response.data.next_page_url);
    } ).catch(error => {
      console.log(error.response);
    })
  }

  const onEndReached = () => {
    if(nextPageUrl){
    APIKit.get(nextPageUrl).then( response => {
      setEvents([...events, ...response.data.data]);
      setNextPageUrl(response.data.next_page_url);
    } ).catch(error => {
      console.log(error.response);
    })
    }
  }
  const EventItem = ({item}) => {
    return (

      <Card 
      onPress={() => navigation.navigate('SingleEvent', {item})}
      style={{
          marginVertical: 10,
          
      }} 
        header={() => {
          
          return <View>
          {
            item.image.length > 0 &&
              <Image
              // source={{ uri:image.uri}}
              source={{ uri: "data:image/png;base64,"+item.image[0].image}}
              style={{ width: '100%', height: 250 }}
             />
          }   
          <Text style={{padding:20}}  category='h6'> {item.title} </Text>
          </View>
        } 
      }
      >
        
      <Text>
          prévu le : {item.date}
      </Text>
      <Text>
          {item.description}
      </Text>

    </Card>
    );
  }
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {
          loading ? <Spinner  /> : (
            <List
            data={events}
            renderItem={EventItem}
            keyExtractor={item => item.id}
             style={{
             width:'100%',
             height:'100%',
             paddingHorizontal: 10
           }}
           refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReachedThreshold={0.01}
          onEndReached={onEndReached}
         />
 
          )
        }
      </Layout>
    </SafeAreaView>
  );
};