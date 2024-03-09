import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
 Alert,
  View,
} from 'react-native';
import { MonoText } from '../components/StyledText';

import { Button } from "react-native-elements"

export default function HomeScreen() {
  console.log("heleooooodas")
  return (
   
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        
        
        
        <View style={styles.coinContainer}>
          <Image
             source={
              __DEV__
                ? require('../assets/images/empty-gold-coin-icon.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.coinImage}
          />
        <View style={styles.helpContainer}>
        <Text style={styles.helpLinkText}>0000</Text>
        <Text style={styles.helpLinkText}>BeatonaCoin</Text>    
        
        </View>
        </View>

        <View style={styles.servicesContainer}>
        <Text style={styles.serviceText}>خدمات</Text> 
         
         <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false }>
           <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/wink2.png')}
              
              
              style={{ width: 50, height: 50}}
            />
             <Text style={styles.helpLinkText}></Text> 
             <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
              
                         <Text>كريم</Text>
                          </TouchableHighlight>
            
      </View>
     
                  
                 

                  <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/mecca-mall.png')}
              
              
              style={{ width: 50, height: 50}}
            />
                         <Text style={styles.helpLinkText}></Text> 
                         <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
              
                         <Text>مكة مول</Text>
                          </TouchableHighlight>

            
      </View>
                  

                  <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/220px-Gulf_logo.png')}
              
              
              style={{ width: 50, height: 50}}
            />
                         <Text style={styles.helpLinkText}></Text> 

                         <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
              
                         <Text>محطات غولف</Text>
                          </TouchableHighlight>
           
      </View>
                  

                  <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/aqabatransport.png')}
              
              
              style={{ width: 50, height: 50}}
            />
                         <Text style={styles.helpLinkText}></Text> 
                         <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
              
                         <Text>شركة العقبة للنقل</Text>
                          </TouchableHighlight>
            
      </View>
                  
                  <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/ziryab.png')}
              
              
              style={{ width: 50, height: 50}}
            />
                         <Text style={styles.helpLinkText}></Text> 
                         <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
              
                         <Text>زرياب</Text>
                          </TouchableHighlight>
           
      </View>
                  
      <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/carrefour.png')}
              
              
              style={{ width: 50, height:50}}
            />
                        <Text style={styles.helpLinkText}></Text> 
                        <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
              
                         <Text>كارفور</Text>
                          </TouchableHighlight>
            
              </View>
               </ScrollView>
            

        </View>

        <View style={styles.servicesContainer}>
        <Text style={styles.serviceText}>ترفيه</Text> 
         
         <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false }>
           <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/galaxypark.png')}
              
              
              style={{ width: 50, height: 50}}
            />
             <Text style={styles.helpLinkText}></Text>
             <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
              
                         <Text>جلاكسي بارك</Text>
                          </TouchableHighlight>
          
      </View>
     
                  
                 

          <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/jumpup.png')}
              
              
              style={{ width: 50, height: 50}}
            />
                         <Text style={styles.helpLinkText}></Text> 

                         <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
                         <Text>Jump Up</Text>
                          </TouchableHighlight>
         
      </View>
                  

                  <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/yippee.png')}
              
              
              style={{ width: 50, height: 50}}
            />
            <Text style={styles.helpLinkText}></Text> 
            <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
                         <Text>yippee!</Text>
                          </TouchableHighlight>
            
      </View>
                  

                  <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/escapetheroom.png')}
              
              
              style={{ width: 50, height: 50}}
            />
                         <Text style={styles.helpLinkText}></Text> 

                         <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
                         <Text> Escape The {'\n'} Room </Text>
                          </TouchableHighlight>
      </View>
                  
          
                  
     
               </ScrollView>
            

        </View>
        
        <View style={styles.servicesContainer}>
        <Text style={styles.serviceText}>طعام و شراب</Text> 
         
         <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false }>
           <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/pizzahut.png')}
              
              
              style={{ width: 50, height: 50}}
            />
             <Text style={styles.helpLinkText}></Text>
             <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
              
                         <Text>بيتزا هت</Text>
                          </TouchableHighlight>
          
      </View>
     
                  
                 

          <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/route.png')}
              
              
              style={{ width: 50, height: 50}}
            />
                         <Text style={styles.helpLinkText}></Text> 

                         <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
                         <Text>روت 65</Text>
                          </TouchableHighlight>
         
      </View>
                  

                  <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/mac.png')}
              
              
              style={{ width: 50, height: 50}}
            />
            <Text style={styles.helpLinkText}></Text> 
            <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
                         <Text>ماكدونالز</Text>
                          </TouchableHighlight>
            
      </View>
                  

                  <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/firefly.png')}
              
              
              style={{ width: 50, height: 50}}
            />
                         <Text style={styles.helpLinkText}></Text> 

                         <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
                         <Text> فايرفلاي برغر </Text>
                          </TouchableHighlight>
      </View>
      <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/chilihouse.png')}
              
              
              style={{ width: 50, height: 50}}
            />
                         <Text style={styles.helpLinkText}></Text> 

                         <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
                         <Text>تشيلي هاوس </Text>
                          </TouchableHighlight>
      </View>
          
      <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/gaadetjeeran.png')}
              
              
              style={{ width: 50, height: 50}}
            />
                         <Text style={styles.helpLinkText}></Text> 

                         <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
                         <Text> قعدة جيران </Text>
                          </TouchableHighlight>
      </View>  
      <View style={styles.servicepicContainer} >
          <Image
              source={require('../assets/images/waffle.png')}
              
              
              style={{ width: 50, height: 50}}
            />
                         <Text style={styles.helpLinkText}></Text> 

                         <TouchableHighlight
                          style={styles.button} 
                          onPress={onPressButton}
                        
                              >
                         <Text> وافل سكوير </Text>
                          </TouchableHighlight>
      </View>
               </ScrollView>
            

        </View>
        
             

      </ScrollView>
      

      
    </View>
  );
}
class LogoTitle extends React.Component {
  render() {
    return (
      <View>
        <Image
        source={require('../assets/images/robot-dev.png')}
        style={styles.headertit}
      />
      
      </View>
      
    );
  }
}
HomeScreen.navigationOptions = {
  headerTitle: <LogoTitle />,
  headerStyle:{
    backgroundColor: '#548235',
      },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      
      
    },
    
    
  
  
};



function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
           </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
         {learnMoreButton}
      </Text>
    );
  } else {
    console.log("heleooooodas")
    return (
      <Text style={styles.developmentModeText}>
      </Text>
    );
  }
}

function handleLearnMorePress() {

  
    return (
        <View>
            <Text> Hello, JSX! </Text>
        </View>
    );
}

function onPressButton() {
  Alert.alert('استبدال',
  ' 2000 coins رصيد 5 دنانير مقابل  ',
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
function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 20,
    backgroundColor:'#548235',
  },
  coinContainer: {
    alignItems: 'center',
    marginTop: -20,
    marginBottom: 20,
    backgroundColor:'#fff',
  },
  servicesContainer: {
    alignItems: 'center',
    marginTop: -10,
    marginBottom: 20,
    backgroundColor:'#fff',
    height:185,
  },
  servicesdescContainer: {
    alignItems: 'center',
    marginTop: -10,
    marginBottom: 20,
    backgroundColor:'#fff',
  },
  capture2Container: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 80,
    height: 60,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  coinImage :{
     
      width: 80,
      height: 80,
      resizeMode: 'contain',
      marginTop: -5,
      marginLeft: 9,
    

  },
  coinImage2 :{
     
    width: 80,
    height: 80,
    resizeMode: 'contain',
    
    marginLeft: 100,
    position:'absolute',
    left:-10,
    marginTop:-100,
  

},
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: -15,
    marginLeft:10,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 18,
    color: '#548235',
    fontWeight:'bold',
  },
  serviceText: {
    fontSize: 22,
    color: '#548235',
    fontWeight:'bold',
    textAlign:'right',
  },
  usernameText:{
    position:'absolute',
    right:10,
    marginTop:18,

    fontSize:18,
    textAlign:'right',
    color:'#fff',
  },
  titleText:{
  textAlign :'center',
  fontSize:32,
  color:'#548235',
  fontWeight:'bold',
  
  },
  title2Text:{
    textAlign :'center',
    fontSize:15,
    color:'#000000',
    marginTop: 13,
    fontWeight:'bold',
    },
  titleContainer: {
    marginTop: -5,
    marginLeft:0,
    alignItems: 'center',
    backgroundColor :'#fff'
    
  },
  servicepicContainer: {
    marginTop: 20,
    marginLeft:10,
    alignItems: 'center',
    backgroundColor:'#fff',
    width :120,
    height:120,
    borderColor:'#548235',
    borderLeftWidth:2,
    borderRightWidth:2,
    borderBottomWidth:2,
    borderTopWidth:2
    
  },
  headertit:{
  //textAlign:'center',
  marginLeft:160,
  marginTop:-8,
  width:50,
  height:50,
  },
  
 
   item:
   {
      padding: 3,
      color: '#548235',
      fontSize: 18,
      fontWeight:'bold',
   },
 
   separator:
   {
      width: 1,
      backgroundColor: 'black'
   },
   titleCont: {
    marginTop: 100,
    marginLeft:90,
    alignItems: 'center',
    backgroundColor:'#fff',
    width :150,
    height:150,
    borderColor:'#548235',
    borderLeftWidth:2,
    borderRightWidth:2,
    borderBottomWidth:2,
    borderTopWidth:2
    
  },
  titleTe:{
    textAlign :'center',
    fontSize:25,
    color:'#fff',
    fontWeight:'bold',
    marginTop : -20,
  
    
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#548235',
      padding: 3,
      borderRadius:3,
    },
    
});
