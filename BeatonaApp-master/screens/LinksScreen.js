import React from 'react';
import { ScrollView, StyleSheet,View,Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import MoreView from '../Views/MoreView';
import  PolicyView  from '../Views/PolicyView';
import  ProfileView  from '../Views/ProfileView'; 
import  PlasticView  from '../Views/PlasticView'; 
import GlassView from '../Views/GlassView'; 
import MetalView from '../Views/MetalView';
import PaperView from '../Views/PaperView'; 
import  AboutusView  from '../Views/AboutusView';
import LoginView from '../Views/LoginView'; 
import SignupView from '../Views/SignupView';
export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
  {/**
   * Go ahead and delete ExpoLinksView and replace it with your content;
   * we just wanted to provide you with some helpful links.
   */}
  
  <MoreView/>
</ScrollView>
);
  
}
class LogoTitle extends React.Component {
  render() {
    return (
      <View>
      <Text style={styles.headertit}>المزيد</Text>
      
      </View>
      
    );
  }
}


LinksScreen.navigationOptions = {
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
    backgroundColor: '#ccc',
  },
  headertit:{
    fontSize:26,
    fontWeight:'bold',
    //textAlign:'center',
    marginLeft:160,
    marginTop:-5,
    color:'#fff'
  }
});
