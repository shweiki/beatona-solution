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
export default class MetalView extends Component{
    render () {
        return (
            <View style={styles.container}>
                  <ScrollView style={styles.container}
             contentContainerStyle={styles.contentContainer }>
                         <View style={styles.settingsContainer1}>
                         <Text style={styles.settingText}></Text>
                         <Text style={styles.settingText}></Text>
                          <Image
                                 source={require('../assets/images/images.png')}
              
                                    style={{ width: 85, height: 80, marginLeft:250}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                                >
                                 
                                  <Text style={styles.settingText}>حافظات المياه و المشروبات الساخنة المعدنية {'\n'}
                                  </Text>
                                  
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                          
                          </View>
                          
                          <View style={styles.settingsContainer}>
                          <Text style={styles.settingText}></Text>
                          
                          <Image
                                 source={require('../assets/images/download.png')}
              
                                    style={{ width: 85, height: 85, marginLeft:250}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                                >
                                 
                                  <Text style={styles.settingText}> المعلبات الغذائية المعدنية{'\n'}
                                 </Text>
                                  
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                          </View>
                          <View style={styles.settingsContainer}>
                          <Text style={styles.settingText}></Text>
                          
                          <Image
                                 source={require('../assets/images/imagesmetal.png')}
              
                                    style={{ width: 85, height: 85, marginLeft:250}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                                >
                                 
                                  <Text style={styles.settingText}>حافظات الطعام المعدنية {'\n'}
                                  </Text>
                                  
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                          </View>
                          <View style={styles.settingsContainer}>
                          <Text style={styles.settingText}></Text>
                          
                          <Image
                                 source={require('../assets/images/stainless-steel-cooking.png')}
              
                                    style={{ width: 85, height: 85, marginLeft:250}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                                >
                                 
                                  <Text style={styles.settingText}>أواني الطبخ بكافة أحجامها {'\n'}
                                  </Text>
                                  
                            </TouchableHighlight>
                            <Text style={styles.settingText}></Text>
                            <Text style={styles.settingText}></Text>
                          </View>
                          <View style={styles.settingsContainer}>
                          <Text style={styles.settingText}></Text>
                          
                          <Image
                                 source={require('../assets/images/Soda-Cans.png')}
              
                                    style={{ width: 85, height: 85, marginLeft:250}}
                             />
                            <TouchableHighlight
                               style={styles.touchableStyle} 
                                >
                                 
                                  <Text style={styles.settingText}>علب العصائر و المشروبات الغازية {'\n'}
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