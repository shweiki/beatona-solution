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

export default class AboutusView extends Component{
    render () {
        return (
          
          <View style={styles.profilePicContainer}>
            <ScrollView style={styles.container}
             contentContainerStyle={styles.contentContainer }>
            <Image
          source={
                  __DEV__
                  ? require('../assets/images/icon.png')
                  : require('../assets/images/robot-prod.png')
                 }
           style={styles.profileImage}
         />
         <Text style={styles.titleText}>
         {'\n'}
         {'\n'}
            إيماناَ منا بأهمية المحافظة على البيئة و الحد من مشكلة التلوث التي 
             
            ازدادت بالآونة الأخيرة ، و تأكيداَ على أهمية مواكبة وطننا
             العزيز المملكة الأردنية الهاشمية للتطور التكنولوجي قررنا 
          نحن مجموعة طلبة الجامعة الأردنية /العقبة بتطوير تطبيق يعمل على تحسين مستوى الوعي المجتمعي 
          لمشكلة النفايات وتحفيز المواطن و الحكومة على المبادرة لحل هذه المشكة. 
          {'\n'}
          {'\n'}
          تطبيق بيئتنا أول تطبيق بالمملكة الأردنية الهاشمية يهتم بإدارة النفايات و التخلص منها بطريقة بسيطة و سليمة 
          بحيث يستطيع المواطن بيع مخلفاته المنزلية للحكومة بطريقة غير مباشرة بدلاَ من إلقائها.
          {'\n'}
          {'\n'}
           
          
         </Text>
          <Text style={styles.titleText} >
          يحصل المواطن على مجموعة من النقاط مقابل كل كيس مخلفات يقوم بتسليمه و يقوم باستبدال هذه النقاط مقابل 
          الخدمات المختلفة و ذلك باتفاق الحكومة المسبق مع مزودي هذه الخدمات و هكذا يستطيع المواطن من استغلال مخلفاته 
          بدلاَ من اتلافها بطريقة ضارة بالبيئة.
          {'\n'}
          {'\n'}
           و من جهة أخرى تستطيع الحكومة تصدير المخلفات المفروزة للدول الخارجية بما يعود على الحكومة بدخل سنوي ، يساهم
           في ميزانية الدولة أو تستطيع الحكومة إعادة تدويرها لتوفير الطاقة و استخدامها كمواد خام.
           {'\n'}
           {'\n'}</Text>
            </ScrollView>
             
          
              
        
          </View>

        )
      }}

  const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
        titleText:{
          fontSize:16,
          fontWeight:'bold',
          color:'#000000',
          textAlign:'center',

        },
        profilePicContainer: {
          alignItems: 'center',
          marginTop: -30,
          marginBottom: 20,
          backgroundColor:'#fff',
          
        },
        profileImage :{
     
          width: 175,
          height: 175,
          resizeMode: 'contain',
          marginTop: 30,
         marginLeft: 88,
          
        
    
      },
      contentContainer: {
        paddingTop: 30,
      },
      });