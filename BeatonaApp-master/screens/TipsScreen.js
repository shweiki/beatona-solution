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

  View,
} from 'react-native';
import  TipsView  from '../Views/TipsView';  

export default function TipsScreen() {
  return (
    <ScrollView style={styles.container}>
  {/**
   * Go ahead and delete ExpoLinksView and replace it with your content;
   * we just wanted to provide you with some helpful links.
   */}
  <TipsView />
</ScrollView>
);

}

class LogoTitle extends React.Component {
  render() {
    return (
      <View>
      <Text style={styles.headertit}>طريقة الاستخدام</Text>
      
      </View>
      
    );
  }
}





TipsScreen.navigationOptions = {
   headerTitle: <LogoTitle />,
    headerStyle:{
      backgroundColor: '#548235',
        },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        //textAlign:'center',
        //alignSelf:'center',
      },
  };
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
    headertit:{
      fontSize:20,
      fontWeight:'bold',
      //textAlign:'center',
      marginLeft:125,
      marginTop:-5,
      color:'#fff'
    },
  });