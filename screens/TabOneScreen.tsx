import * as React from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { View } from '../components/Themed';

const DeviceWidth = Dimensions.get('window').width

export default function TabOneScreen() {
  
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/bg.jpeg')}  style={styles.container}>
        <View  style={styles.containerInner}>
          <View style={{width: DeviceWidth*0.1, height: DeviceWidth*0.1, marginBottom:10, marginLeft:10, backgroundColor: 'black', opacity: 0.8}} />
          <View style={{width: DeviceWidth*0.1, height: DeviceWidth*0.1, marginBottom:10, marginLeft:10,  backgroundColor: 'black', opacity: 0.8}} />
          <View style={{width: DeviceWidth*0.1,height: DeviceWidth*0.1, marginBottom:10, marginLeft:10,  backgroundColor: 'black', opacity: 0.8}} />
        </View>
        <View  style={styles.containerInner}>
          <View style={{width: DeviceWidth*0.1, height: DeviceWidth*0.1, marginBottom:10, marginLeft:10,  backgroundColor: 'black',opacity: 0.8}} />
          <View style={{width: DeviceWidth*0.1, height: DeviceWidth*0.1, marginBottom:10, marginLeft:10,  backgroundColor: 'black',opacity: 0.8}} />
          <View style={{width: DeviceWidth*0.1, height: DeviceWidth*0.1, marginBottom:10, marginLeft:10,  backgroundColor: 'black', opacity: 0.8}} />
        </View>
        <View  style={styles.containerInner}>
          <View style={{width: DeviceWidth*0.1, height: DeviceWidth*0.1, marginBottom:10, marginLeft:10,  backgroundColor: 'black', opacity: 0.8}} />
          <View style={{width: DeviceWidth*0.1, height: DeviceWidth*0.1, marginBottom:10, marginLeft:10,  backgroundColor: 'black', opacity: 0.8}} />
          <View style={{width: DeviceWidth*0.1, height: DeviceWidth*0.1, marginBottom:10, marginLeft:10,  backgroundColor: 'black', opacity: 0.8}} />
        </View>
        <View  style={styles.containerInner}>
          <View style={{width: DeviceWidth*0.1, height: DeviceWidth*0.1, marginBottom:10, marginLeft:10,  backgroundColor: 'black', opacity: 0.8}} />
          <View style={{width: DeviceWidth*0.1, height: DeviceWidth*0.1, marginBottom:10, marginLeft:10,  backgroundColor: 'black', opacity: 0.8}} />
          <View style={{width: DeviceWidth*0.1, height: DeviceWidth*0.1, marginBottom:10, marginLeft:10,  backgroundColor: 'black', opacity: 0.8}} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
    containerInner: {
    backgroundColor: 'transparent'
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
