// React imports
import * as React from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';

// project imports
import { View } from '../components/Themed';


// device width varible
const DeviceWidth = Dimensions.get('window').width

//main
export default function DJPadScreen() {
  
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/bg.jpeg')}  style={styles.container}>
        <View  style={styles.containerInner}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
        <View  style={styles.containerInner}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
        <View  style={styles.containerInner}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
        <View  style={styles.containerInner}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </ImageBackground>
    </View>
  );
}

//styles
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
  box: {
    width: DeviceWidth*0.1, 
    height: DeviceWidth*0.1, 
    marginBottom:10, 
    marginLeft:10, 
    backgroundColor: 'black', 
    opacity: 0.6
  }
});
