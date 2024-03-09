import React ,{ Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
export default class ProfileView extends Component{
    render () {
        return (
            <View style={styles.container}>
                  <ScrollView style={styles.container}
             contentContainerStyle={styles.contentContainer }>
                         <View style={styles.settingsContainer}>
                          <Text style={styles.settingText}></Text>
                          <Text style={styles.settingText}></Text>
                          <Image
                                 source={require('../assets/images/User2-512.png')}
              
                                    style={{ width: 35, height: 35, marginLeft:280}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                                >
                                 
                                  <Text style={styles.settingText}>User Name</Text>
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                            <Image
                                 source={require('../assets/images/file-email.png')}
              
                                    style={{ width: 30, height: 30, marginLeft:280}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                                >
                                 
                                  <Text style={styles.settingText}>example@gmail.com</Text>
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                            <Image
                                 source={require('../assets/images/phone.png')}
              
                                    style={{ width: 35, height: 35, marginLeft:280}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                                >
                                 
                                  <Text style={styles.settingText}>0777650419</Text>
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                            <Image
                                 source={require('../assets/images/location-icon.png')}
              
                                    style={{ width: 35, height: 35, marginLeft:280}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                                >
                                 
                                  <Text style={styles.settingText}>Aqaba</Text>
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                            


                            <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
              
                         <Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>تعديل</Text>
                          </TouchableHighlight>
                          <Text style={styles.settingText}></Text>
                            
                            
                          </View>


        
          
            
                
         
         

       
                 

           
          
         
         
          
            </ScrollView>
             
          
              
        
          </View>
          
          
          
          

        )
      }}


      function onPressButton() {
        alert('You tapped the button!')
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
            marginTop: -50,
            marginBottom: 20,
            backgroundColor:'#fff',
            //height:600,
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
            padding: 8,
            borderRadius:3,
            
          },
    });