import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { StackNavigation } from 'react-navigation';
import { View, Text } from "react-native";

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import QrscannerScreen from '../screens/QrscannerScreen';
import TipsScreen from '../screens/TipsScreen';
import AboutusScreen from '../screens/AboutuScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});
const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
    Aboutus:  AboutusScreen ,
  },
{
  config
}
  
  
);

LinksStack.navigationOptions = {
  tabBarLabel: 'المزيد',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} 
    name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'} />
  ),
};

LinksStack.path = '';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home"
  }
  
);

HomeStack.navigationOptions = {
  tabBarLabel: 'الصفحة الرئيسية',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';




const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel : 'أنواع المخلفات',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-trash' : 'md-trash'} />
  ),
};

SettingsStack.path = '';

const TipsStack = createStackNavigator(
  {
    Tips: TipsScreen,
  },
  config
);

TipsStack.navigationOptions = {
  tabBarLabel : 'طريقة الاستخدام',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-help-circle' : 'md-help-circle'} />
  ),
};

TipsStack.path = '';

const QrscannerStack = createStackNavigator(
  {
    Qrscanner: QrscannerScreen,
  },
  config
);

QrscannerStack.navigationOptions = {
  tabBarLabel: 'QR Scanner',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios-qr-scanner' ? '' : 'md-qr-scanner'} />
  ),
};

QrscannerStack.path = '';


const tabNavigator = createBottomTabNavigator({
  LinksStack,
 
  
  SettingsStack, 
  TipsStack,
  HomeStack,
  //QrscannerStack,
  
},
//initialRouteName="HomeStack",
);

tabNavigator.path = '';

export default tabNavigator;
