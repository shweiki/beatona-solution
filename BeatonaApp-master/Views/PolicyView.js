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
export default class PolicyView extends Component{
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
       <Text style={styles.titleText1}> 
       {'\n'}
       السياسة :  </Text>
       <Text style={styles.titleText}>
            {'\n'}
           سياسة تطبيق بيئتنا تقوم على مبادىء بسيطة لخدمة المواطن و الحكومة ،
           يلتزم المواطن بعدة شروط لضمان جودة الخدمة المقدمة من التطبيق .
           {'\n'}
           1- الالتزام بأنواع المخلفات المنزلية المذكورة بالتطبيق فقط.
           {'\n'}
           2- التأكد من خلو الزجاجات و المعلبات و غيرها من أي مواد غذائية أو تنظيفية.
           {'\n'}
           3- الالتزام بتعبئة الكيس الواحد بنوع واحد فقط من المخلفات بلاستيك أو معادن أو زجاج أو ورق.
           {'\n'}
           4- الالتزام بتسليم أكياس النفايات الى مركز التسوق الذي قمت بشراء الكيس منه.
           {'\n'}
           {'\n'}
         
        
       </Text>
       <Text style={styles.titleText1}> سياسة الخصوصية :  </Text>
        <Text style={styles.titleText} >
        {'\n'}
          من بالغ الأهمية لدينا في بيئتنا أن نحتفظ بسرية و أمان معلوماتكم الشخصية 
          التي يتم تزويدنا بها عند التسجيل للحصول على حساب مستخدم 
        و التي قد تتضمن اسمك و معلومات الاتصال و الجنس و تاريخ الميلاد  
          و اسم محافظتك .
                  {'\n'}
        </Text>
        <Text style={styles.titleText}>
          سوف نبذل الجهود المعقولة  للحفاظ على أمان معلوماتك الشخصية عملاَ بسياسة الخصوصية هذه.
          
          </Text>
          <Text style={styles.titleText}>
           نحن نقوم بجمع هذه المعلومات عند قيامك بإنشاء حساب جديد و وفقاَ لهذه المعلومات يتم عمل إحصائية 
           عن أكثر محافظات المملكة التي تقوم باستغلال المخلفات بالطريقة الصحيحة ليتم تزويدها
           {'\n'}
          </Text>
          <Text style={styles.titleText}>
          بكافة الامكانيات لضمان 
           تحقيق الهدف المرجو من التطبيق ، و تشجيع المحافظات 
    
           الأقل تداولاَ للتطبيق بأهمية استخدامه.
               </Text>

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
          //fontWeight:'bold',
          color:'#000000',
          textAlign:'center',

        },
        titleText1:{
            fontSize:25,
            fontWeight:'bold',
            color:'#548235',
            textAlign:'center',
  
          },
        profilePicContainer: {
          alignItems: 'center',
          marginTop: -30,
          marginBottom: 20,
          backgroundColor:'#fff',
          
        },
        profilePicContainer2: {
            alignItems: 'center',
            marginTop: -10,
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