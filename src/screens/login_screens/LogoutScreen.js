import React from 'react';
import LoadingScreen from '../LoadingScreen';
import { AppContext } from '../../../AppContext';
import { Layout, Spinner, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LogoutScreen(){
    const {logout} = React.useContext(AppContext)
    const styles = useStyleSheet(themedStyles);
    React.useEffect(() => {
        logout();
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
        
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

      <Text category='h2' style={{ textAlign:'center', marginBottom: 15}}> Déconnexion ... </Text> 
      <Spinner />

      </Layout>
    </SafeAreaView>
    )
    
}

const themedStyles = StyleService.create({
    container: {
      backgroundColor: 'background-basic-color-1',
    },
})