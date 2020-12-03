import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { EmailIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import APIKit from '../../../API';
import Axios from 'axios';

export default ({ navigation }) => {

  const [email, setEmail] = React.useState();

  const onResetPasswordButtonPress = ()  => {
    const body = {
      email: email
    }
    //const data = createFormData(avatar, body);
   //console.log(data["_parts"][0])
    Axios.post("http://192.168.43.44/api/forgot-password",body)
      .then(response => {
        console.log("password reset link sent to your email", response);
        alert('all good');
      })
      .catch(error => {
        console.log(error)
        alert('big fail')
      });
    // navigation && navigation.goBack();
  };

  return (
    <KeyboardAvoidingView>
      <ImageOverlay
        style={styles.container}
        source={require('./assets/image-background.jpg')}>
        <Text
          style={styles.forgotPasswordLabel}
          category='h4'
          status='control'>
          Forgot Password
        </Text>
        <Text
          style={styles.enterEmailLabel}
          status='control'>
          Please enter your email address
        </Text>
        <View style={styles.formContainer}>
          <Input
            status='control'
            placeholder='Email'
            icon={EmailIcon}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Button
          size='giant'
          onPress={onResetPasswordButtonPress}>
          RESET PASSWORD
        </Button>
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 24,
  },
  forgotPasswordLabel: {
    zIndex: 1,
    alignSelf: 'center',
    marginTop: 24,
  },
  enterEmailLabel: {
    zIndex: 1,
    alignSelf: 'center',
    marginTop: 64,
  },
});
