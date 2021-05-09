// React imports
import * as React from 'react';
import { Button, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { Audio } from 'expo-av';

// project imports
import { View } from '../components/Themed';


// device width varible
const DeviceWidth = Dimensions.get('window').width

async function playSound() {
  const source = {
    uri: "http://www.slspencer.com/Sounds/Chewbacca/Chewie3.mp3" 
  } 
  try {
    await Audio.setIsEnabledAsync(true);
    const sound = new Audio.Sound();
    await sound.loadAsync(source);
    await sound.playAsync(); 
  } catch(error) {
    console.error(error);
  }
}

//main
export default function DJPadScreen() {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/bg.jpeg')}  style={styles.container}>
        <View  style={styles.containerInner}>
          <View style={styles.box} >
          <Button title="Chewie we're home" onPress={playSound}/>
          </View>
          <View style={styles.box} >
          <Button title="Chewie we're home" onPress={playSound}/>
          </View>
          <View style={styles.box} >
          <Button title="Chewie we're home" onPress={playSound}/>
          </View>
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
