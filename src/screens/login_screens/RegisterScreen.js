  
import React from 'react';
import { View , Image} from 'react-native';
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
import ImagePicker from 'react-native-image-picker/src';
import APIKit from '../../../API';
import Axios from 'axios';
import { AppContext } from '../../../AppContext';

export default ({ navigation }) => {

  const [firstName, setfirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [avatar, setAvatar] =  React.useState(null);
  const [avatar64, setAvatar64] =  React.useState(null);
  const {login} = React.useContext(AppContext)
  const styles = useStyleSheet(themedStyles);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
      includeBase64:true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setAvatar( response );
        setAvatar64( response.base64 );
      }
    })
  }
  // const onSignUpButtonPressFetch = ()  => {
  //   const body = {
  //     firstName,
  //     email,
  //     password,
  //   }
  //   const data = createFormData(avatar, body);
  //   fetch("http://192.168.43.44/api/register", {
  //     method: "POST",
  //     body: data
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       console.log("upload succes", response);
  //       alert("Upload success!");
  //     })
  //     .catch(error => {
  //       console.log("upload error", error);
  //       alert("Upload failed!");
  //     });
  //   // navigation && navigation.goBack();
  // };

  const onSignUpButtonPress = ()  => {
    const body = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      avatar: avatar64
    }
    //const data = createFormData(avatar, body);
   //console.log(data["_parts"][0])
    Axios.post("http://192.168.43.44/api/register",body)
      .then(response => {
        console.log("upload succes", response);
        alert('all good');
        login(email, password);
      })
      .catch(error => {
        console.log(error)
        alert('big fail')
      });
    // navigation && navigation.goBack();
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

  const createFormData = (photo, body) => {
    const data = new FormData();
    data.append('file', {
        name: "truc.jpg",
        uri: Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
    });

    Object.keys(body).forEach(key => {
        data.append(key, body[key]);
    });

    return data;
};

 
  return (
    <KeyboardAvoidingView style={styles.container}>
      
      <Layout
        style={styles.formContainer}
        level='1'>
         <View style={{
            display: 'flex',
            justifyContent:'center',
            alignContent: 'center',
            alignItems:'center',
            marginBottom:10
         }}>
         <Button 
          onPress={handleChoosePhoto}
          style={{marginBottom: 10}}
          >
            {avatar ? 'Changer l\'avatar' : "Ajouter un avatar"}
          </Button>
          
          {
            avatar &&
              <Image
              
              source={{ uri:avatar.uri}}
              style={{ width: 250, height: 250 }}
             />
          }
         </View>

        <Input
          autoCapitalize='none'
          placeholder='first Name'
          accessoryRight={PersonIcon}
          value={firstName}
          onChangeText={setfirstName}
        />
        <Input
          autoCapitalize='none'
          placeholder='last Name'
          accessoryRight={PersonIcon}
          value={lastName}
          onChangeText={setLastName}
          style={styles.emailInput}
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