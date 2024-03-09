import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import { ScrollView, StyleSheet,View,Text } from 'react-native';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ExpoConfigView />;
}

class LogoTitle extends React.Component {
  render() {
    return (
      <View>
      <Text style={styles.headertit}>أنواع المخلفات</Text>
      
      </View>
      
    );
  }
}
SettingsScreen.navigationOptions = {
  headerTitle: <LogoTitle />,
  
  headerStyle:{
    backgroundColor: '#548235',
      },
    headerTintColor: '#fff',
    
    headerTitleStyle: {
      fontWeight: 'bold',
      //textAlign:'center',
      
      
    },
    
};
const styles = StyleSheet.create({

  headertit:{
    fontSize:20,
    fontWeight:'bold',
    //textAlign:'center',
    marginLeft:125,
    marginTop:-5,
    color:'#fff'
  },
});

