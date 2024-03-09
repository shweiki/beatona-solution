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
import  PlasticView  from '../Views/PlasticView'; 
import MetalView from '../Views/MetalView'; 
import PaperView from '../Views/PaperView'; 
import LoginView from '../Views/LoginView'; 
import SignupView from '../Views/SignupView'; 
export default function SignupScreen() {
    return (
      <ScrollView style={styles.container}>
    {/**
     * Go ahead and delete ExpoLinksView and replace it with your content;
     * we just wanted to provide you with some helpful links.
     */}
    <SignupView/>
  </ScrollView>
  );
  
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#548235',
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