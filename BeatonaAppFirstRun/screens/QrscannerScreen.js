import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import  QrScannerView  from '../Views/QrScannerView';

export default function QrscannerScreen() {
  return (
    <ScrollView style={styles.container}>
  {/**
   * Go ahead and delete ExpoLinksView and replace it with your content;
   * we just wanted to provide you with some helpful links.
   */}
  <QrScannerView />
</ScrollView>
);

}

QrscannerScreen.navigationOptions = {
  title: 'QrScan',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
