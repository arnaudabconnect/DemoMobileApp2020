  
import React from 'react';
import { View } from 'react-native';
import {
  Button,
  CheckBox,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import { ProfileAvatar } from './extra/profile-avatar.component';
import { EmailIcon,PersonIcon, PlusIcon } from './extra/registerIcons';
import {  EyeIcon, EyeOffIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';

export default ({ navigation }) => {

  const [userName, setUserName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = ()  => {
    navigation && navigation.goBack();
  };

  const onSignInButtonPress = ()  => {
    navigation && navigation.navigate('Login');
  };

  const onPasswordIconPress = ()  => {
    setPasswordVisible(!passwordVisible);
  };

  const renderEditAvatarButton = () => (
    <Button
      style={styles.editAvatarButton}
      status='basic'
      accessoryRight={PlusIcon}
    />
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <ProfileAvatar
          style={styles.profileAvatar}
          resizeMode='center'
          source={require('./assets/image-person.png')}
          editButton={renderEditAvatarButton}
        />
      </View>
      <Layout
        style={styles.formContainer}
        level='1'>
        <Input
          autoCapitalize='none'
          placeholder='User Name'
          accessoryRight={PersonIcon}
          value={userName}
          onChangeText={setUserName}
        />
        <Input
          style={styles.emailInput}
          autoCapitalize='none'
          placeholder='Email'
          accessoryRight={EmailIcon}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.passwordInput}
          autoCapitalize='none'
          secureTextEntry={!passwordVisible}
          placeholder='Password'
          accessoryRight={passwordVisible ? () => <EyeIcon action={onPasswordIconPress} /> : () => <EyeOffIcon action={onPasswordIconPress} />}
          value={password}
          onChangeText={setPassword}
          onIconPress={onPasswordIconPress}
        />
        <CheckBox
          style={styles.termsCheckBox}
          checked={termsAccepted}
          onChange={(checked) => setTermsAccepted(checked)}
        >
          <Text style={styles.termsCheckBoxText} > I read and agree to Terms & Conditions' </Text>
        </CheckBox>
      </Layout>
      <Button
        style={styles.signUpButton}
        size='giant'
        onPress={onSignUpButtonPress}>
        SIGN UP
      </Button>
      <Button
        style={styles.signInButton}
        appearance='ghost'
        status='basic'
        onPress={onSignInButtonPress}>
        Already have an account? Sign In
      </Button>
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
  profileAvatar: {
    width: 116,
    height: 116,
    borderRadius: 58,
    alignSelf: 'center',
    backgroundColor: 'background-basic-color-1',
    tintColor: 'color-primary-default',
  },
  editAvatarButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  emailInput: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 24,
  },
  termsCheckBoxText: {
    color: 'text-hint-color',
  },
  signUpButton: {
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
});