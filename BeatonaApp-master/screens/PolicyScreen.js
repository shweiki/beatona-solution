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
import  PolicyView  from '../Views/PolicyView'; 
export default function PolicyScreen() {
    return (
      <ScrollView style={styles.container}>
    {/**
     * Go ahead and delete ExpoLinksView and replace it with your content;
     * we just wanted to provide you with some helpful links.
     */}
    <PolicyView/>
  </ScrollView>
  );
  
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#ccc',
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