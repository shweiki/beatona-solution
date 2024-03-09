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
export default class PaperView extends Component{
    render () {
        return (
            <View style={styles.container}>
                  <ScrollView style={styles.container}
             contentContainerStyle={styles.contentContainer }>
                         <View style={styles.settingsContainer1}>
                         <Text style={styles.settingText}></Text>
                         <Text style={styles.settingText}></Text>
                          <Image
                                 source={require('../assets/images/newspaper.png')}
              
                                    style={{ width: 85, height: 80, marginLeft:250}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                                >
                                 
                                  <Text style={styles.settingText}>الصحف {'\n'}
                                  </Text>
                                  
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                          
                          </View>
                          
                          <View style={styles.settingsContainer}>
                          <Text style={styles.settingText}></Text>
                          
                          <Image
                                 source={require('../assets/images/art-paper-250x250.png')}
              
                                    style={{ width: 85, height: 85, marginLeft:250}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                                >
                                 
                                  <Text style={styles.settingText}> الأوراق بكافة أنواعها و أحجامها{'\n'}
                                 </Text>
                                  
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                          </View>
                          <View style={styles.settingsContainer}>
                          <Text style={styles.settingText}></Text>
                          
                          <Image
                                 source={require('../assets/images/cereal_boxes_2-620x330.png')}
              
                                    style={{ width: 85, height: 85, marginLeft:250}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                                >
                                 
                                  <Text style={styles.settingText}>المعلبات الكرتونية بكافة أنواعها  {'\n'}
                                  </Text>
                                  
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
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
            marginTop: -10,
            marginBottom: 20,
            backgroundColor:'#fff',
            //height:600,
          },
          settingsContainer1: {
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
            //width:150,
            marginLeft:-90,
            marginTop:-70,
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