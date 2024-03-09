import React ,{ Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  View,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
export default class LoginView extends Component{
    render () {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
               <Image
                     source={
                      __DEV__
                      ? require('../assets/images/Logo.png')
                      : require('../assets/images/robot-prod.png')
                            }
                     style={styles.profileImage}
                />
                <Text> </Text>
              <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='User Name' 
               placeholderTextColor='rgba(225,225,225,0.7)'/> 

<TextInput style = {styles.input}   
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Password' 
              placeholderTextColor='rgba(225,225,225,0.7)' 
              secureTextEntry/>  



              <TouchableOpacity style={styles.buttonContainer} 
                     onPress={onPressButton}>
             <Text  style={styles.buttonText}>LOGIN</Text>
         </TouchableOpacity>  
         <Text> </Text> 
         <TouchableOpacity style={styles.buttonContainer} 
                     onPress={onPressButton}>
             <Text  style={styles.buttonText}>SIGNUP</Text>
         </TouchableOpacity> 
      
             </KeyboardAvoidingView>
    
        
        )
    }
}


function onPressButton() {
  Alert.alert('My Code',
  'Code :',
  [
    
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},)
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#548235',
      padding:20,
    },

    contentContainer: {
        paddingTop: 30,
    },
    profilePicContainer: {
        alignItems: 'center',
        marginTop: -30,
        marginBottom: 20,
        backgroundColor:'#fff',
        height:150,
      },
      profileImage :{
        //position:'absolute',
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginTop: 5,
        marginLeft: 13,
        resizeMode :'contain',

  
    },
    usernameContainer: {
        marginTop: 20,
        marginLeft:10,
        alignItems: 'center',
      },
      usernameText: {
        fontSize: 18,
        color: '#548235',
        fontWeight:'bold',
      },
      settingsContainer: {
        alignItems: 'center',
        marginTop: -10,
        marginBottom: 20,
        backgroundColor:'#fff',
        //height:185,
      },
      touchableStyle: {
        //alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        width:150,
        marginLeft:32,
        marginTop:-38,
      },
      settingsiconContainer: {
       // alignItems: 'center',
        marginTop: -10,
        marginBottom: 20,
        marginRight:10,
        backgroundColor:'#fff',
        //height:185,
      },
      settingText: {
        fontSize:15,
       fontWeight:'bold',
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#548235',
        padding: 3,
        borderRadius:3,
        marginTop :-24,
        marginLeft:290,
      },
      input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#fff',
        paddingVertical: 15
    },
    buttonText:{
        color: '#000000',
        textAlign: 'center',
        fontWeight: '700'
    },
});