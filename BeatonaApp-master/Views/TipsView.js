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

export default class TipsView extends Component{
    render () {
        return (
            <View >
               <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false }>
               <Image
              source={require('../assets/images/stepone.png')}
              
              
              style={{ width: 375, height:400,marginTop:60}}
            />
                  
                  <Image
              source={require('../assets/images/steptwo.png')}
              
              
              style={{ width: 375, height:400,marginTop:60}}
            />
                  <Image
              source={require('../assets/images/stepthree.png')}
              
              
              style={{ width: 375, height:400,marginTop:60}}
            />
                  
                  
                  
                  <Image
              source={require('../assets/images/stepfour.png')}
              
              
              style={{ width: 375, height:400,marginTop:60}}
            />
                  
                  
                
                  <Image
              source={require('../assets/images/fifthstep.png')}
              
              
              style={{ width: 375, height:400,marginTop:60}}
            />
                  
                  
                  <Image
              source={require('../assets/images/sixthstep.png')}
              
              
              style={{width: 375, height:400,marginTop:60}}
            />
                  
                  
                  
              
              
              
            
            
                  
                  
               </ScrollView>
            </View>

        )
    }
}
const styles = StyleSheet.create({
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
});