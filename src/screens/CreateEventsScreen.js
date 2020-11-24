import React from 'react';
import { View , Image, SafeAreaView} from 'react-native';
import {
  Button,
  CheckBox,
  Datepicker,
  Divider,
  Icon,
  Input,
  Layout,
  StyleService,
  Text,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
} from '@ui-kitten/components';
import ImagePicker from 'react-native-image-picker/src';
import { AppContext } from '../../AppContext';
import APIKit from '../../API';
import { ScrollView } from 'react-native-gesture-handler';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const CreateEventsScreen = ({ navigation }) => {

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] =  React.useState(null);
  const [image64, setImage64] =  React.useState(null);
  const [date, setDate] = React.useState(new Date());
  const {login} = React.useContext(AppContext)
  const styles = useStyleSheet(themedStyles);

  const handleChoosePhoto = () => {
    const options = {
      // noData: true,
      includeBase64:true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setImage64(response.data)
        setImage( response );
      }
    })
  }

  
  const onCreateEventPress = ()  => {
    const body = {
      title,
      description,
      image: image64 ? image64 : null,
      date
    }
    //const data = createFormData(avatar, body);
   //console.log(data["_parts"][0])
    APIKit.post("/api/events",body)
      .then(response => {
        console.log("upload succes", response);
        alert('event ajouté !');
      })
      .catch(error => {
        console.log(error)
        alert('big fail')
      });
    // navigation && navigation.goBack();
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1,}}>
      <ScrollView  >
      <TopNavigation title='Ajouter un Evènnement' alignment='center' accessoryLeft={BackAction}/>
      <Divider />
      <Layout
        style={styles.formContainer}
        level='1'>
      <Input
          autoCapitalize='none'
          placeholder='Titre'
          value={title}
          onChangeText={setTitle}
        />
        <Input
          autoCapitalize='none'
          placeholder='Description'
          value={description}
          onChangeText={setDescription}
          style={styles.emailInput}
          multiline={true}
          textStyle={{ minHeight: 164 }}
        />
        <Datepicker
        label='Date'
        placeholder='Pick Date'
        date={date}
        onSelect={nextDate => setDate(nextDate)}
        max={ (new Date((new Date).getFullYear()+10,12,31)) }
        // accessoryRight={ () => <Icon name='calendar'/> }
      />
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
            {image ? 'Changer l\'image' : "Ajouter une image"}
          </Button>
          {
            image &&
              <Image
              // source={{ uri:image.uri}}
              source={{ uri: "data:image/png;base64,"+image64}}
              style={{ width: 250, height: 250 }}
             />
          }
         </View>

         <Button
        style={styles.signUpButton}
        size='giant'
        onPress={onCreateEventPress}>
        Ajouter L'évènnement
      </Button>
      </Layout>
      </ScrollView>
    </SafeAreaView>
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