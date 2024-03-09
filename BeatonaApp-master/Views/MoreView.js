import * as WebBrowser from 'expo-web-browser';
import React ,{ Component }from 'react';
import { StyleSheet, Image, Text, View,ScrollView ,TouchableHighlight,Navigator,Alert} from 'react-native';


import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';


export default class MoreView extends Component{
    render () {
        return (
            <View style={styles.container}>

                   <ScrollView
                     style={styles.container}
                     contentContainerStyle={styles.contentContainer}>
                            <View style={styles.profilePicContainer}>
                                  <Image
                                   source={
                                           __DEV__
                                           ? require('../assets/images/profilepic.png')
                                           : require('../assets/images/robot-prod.png')
                                          }
                                    style={styles.profileImage}
                                  />
                            <View style={styles.usernameContainer}>
        
                             <Text style={styles.usernameText}>User Name</Text>    
        
                            </View>
                            <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}>
                        
                         <Text>MyCode</Text>
                          </TouchableHighlight>
                            </View>
                            
                          <View style={styles.settingsContainer}>
                          <Text style={styles.settingText}></Text>
                          <Text style={styles.settingText}></Text>
                          <Image
                                 source={require('../assets/images/Usersetting.png')}
              
                                    style={{ width: 35, height: 35, marginLeft:280}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                               onPress={onPressButton} >
                                 
                                  <Text style={styles.settingText}>إعدادات الحساب</Text>
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                            <Image
                                 source={require('../assets/images/record2.png')}
              
                                    style={{ width: 30, height: 30, marginLeft:280}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                               onPress={onPressButton} >
                                 
                                  <Text style={styles.settingText}>الحركات اليومية</Text>
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                            <Image
                                 source={require('../assets/images/aboutus.png')}
              
                                    style={{ width: 35, height: 35, marginLeft:280}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                               onPress={onPressButton} >
                                 
                                  <Text style={styles.settingText}>عنا</Text>
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                            <Image
                                 source={require('../assets/images/policy.png')}
              
                                    style={{ width: 35, height: 35, marginLeft:280}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                               onPress={onPressButton} >
                                 
                                  <Text style={styles.settingText}>السياسة و الخصوصية</Text>
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                            <Image
                                 source={require('../assets/images/logout.png')}
              
                                    style={{ width: 35, height: 35, marginLeft:280}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                               onPress={onPressButton} >
                                 
                                  <Text style={styles.settingText}>الخروج</Text>
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                            
                          </View>

</ScrollView>
      

      
             </View>
        
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
      flex: 1,
      backgroundColor: '#ccc',
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
     
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: 5,
        marginLeft: 9,
      
  
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
});