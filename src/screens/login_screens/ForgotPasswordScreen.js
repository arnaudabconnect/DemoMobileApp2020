import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Spinner, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { EmailIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import APIKit from '../../../API';
import Axios from 'axios';

export default ({ navigation }) => {

  const [email, setEmail] = React.useState();
  const [error, setError] = React.useState(false);
  const [good, setGood] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onResetPasswordButtonPress = ()  => {
    setLoading(true);
    const body = {
      email: email
    }
    //const data = createFormData(avatar, body);
   //console.log(data["_parts"][0])
    Axios.post("http://192.168.1.6/api/forgot-password",body)
      .then(response => {
        console.log("password reset link sent to your email", response);
        setLoading(false);
        setError(false);
        setGood(true);
      })
      .catch(error => {
        console.log(error)
        setLoading(false);
        setError(true);
      });
    // navigation && navigation.goBack();
  };

  return (
    <KeyboardAvoidingView>
      <ImageOverlay
        style={styles.container}
        source={require('./assets/image-background.jpg')}>

        {
          loading ?(
            <View style={{ display:'flex', justifyContent:'center', flex:1 }}>
              <Text category='h2' style={{ textAlign:'center', marginBottom: 15}}> envoie en cours ... </Text> 
            </View>
            ) : (
          <>
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

          {
          error ? 
            <Text category='s1' style={{color: 'red', textAlign:'center', marginBottom: 15}}> une erreur c'est produite ! </Text> : good ?
            <Text category='s1' style={{color: 'green', textAlign:'center', marginBottom: 15}}> un email de reset vous a été envoyé a l'adresse produite </Text> : null
          }
        </View>
        <Button
          size='giant'
          onPress={onResetPasswordButtonPress}>
          RESET PASSWORD
        </Button>

         

        </>
          )
    }
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
