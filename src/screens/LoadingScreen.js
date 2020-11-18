import React from 'react';
import { View } from 'react-native';
import { Spinner, Text  } from '@ui-kitten/components';

const LoadingScreen = ({message}) => (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'background-basic-color-1',
    }}>
      <Text 
        category='h3'
      >
       {message}
      </Text>
      <Spinner size='giant'/>
    </View>
  )

export default LoadingScreen;