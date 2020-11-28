
import React from 'react';
import { View } from 'react-native';
import { Button, Icon, Input, Layout, Spinner, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { EyeIcon, EyeOffIcon, PersonIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import { AppContext } from '../../../AppContext';
import LoadingScreen from '../LoadingScreen';

export const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const {login, loading, error} = React.useContext(AppContext);
  const styles = useStyleSheet(themedStyles);



  const onSignUpButtonPress = () => {
    navigation && navigation.navigate('Register');
  };

  const onForgotPasswordButtonPress = () => {
    navigation && navigation.navigate('ForgotPassword');
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      {
      loading ? <LoadingScreen message="Connexion ..." /> :  (
        <>
      <View style={styles.headerContainer}>
        <Text
          category='h1'
          status='control'>
          Hello
        </Text>
        <Text
          style={styles.signInLabel}
          category='s1'
          status='control'>
          Sign in to your account
        </Text>
      </View>
      <Layout
        style={styles.formContainer}
        level='1'>
          {
            error ? <Text category='s1' style={{color: 'red', textAlign:'center', marginBottom: 15}}> Informations de connexion invalide ? </Text> : null
          }
        <Input
          placeholder='Email'
          accessoryRight={PersonIcon}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.passwordInput}
          placeholder='Password'
          accessoryRight={passwordVisible ? () => <EyeIcon action={onPasswordIconPress} /> : () => <EyeOffIcon action={onPasswordIconPress} />}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
          onIconPress={onPasswordIconPress}
        />
        <View style={styles.forgotPasswordContainer}>
          <Button
            style={styles.forgotPasswordButton}
            appearance='ghost'
            status='basic'
            onPress={onForgotPasswordButtonPress}>
            Forgot your password?
          </Button>
        </View>
      </Layout>
      <Button
        style={styles.signInButton}
        size='giant'
        onPress={() =>  login(email,password)}
        >
        SIGN IN
      </Button>
      <Button
        style={styles.signUpButton}
        appearance='ghost'
        status='basic'
        onPress={onSignUpButtonPress}>
        Don't have an account? Create
      </Button>
      </>
      )
    }
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: 'color-primary-default',
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});
