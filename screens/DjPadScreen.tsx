// React imports
import * as React from 'react';
import {ImageBackground, StyleSheet, Dimensions, TouchableHighlight, Text } from 'react-native';
import { Audio } from 'expo-av';
// project imports
import { View } from '../components/Themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';


///////DATA

//grid dimension helper
const DeviceWidth = Dimensions.get('window').width
//sounds
const sources = [
 "http://www.slspencer.com/Sounds/Chewbacca/Chewie3.mp3",
 require("../assets/sounds/acousticbassfsharp.mp3"),
 require("../assets/sounds/ride.mp3"),
 require("../assets/sounds/bdrum.mp3"),
 require("../assets/sounds/crash.mp3"),
 require("../assets/sounds/darkbass.mp3")
]

///HELPER FUNCTIONS

//audio playing
async function playSound(index: number) {
  const source = {
    uri: sources[index] 
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

///THEMES

//todo: change the styles dependending on variables




///RECORDING AND PLAYBACK

//todo: record screen audio, save
//these methods will be large, will be better to seperate into another file
function play(){

}

function stop(){

}



///DJPadScreen

export default function DJPadScreen() {

  //TouchableHighlight: used as buttons, seem to require inner text object
  
  return (
    //app container
    <View style={styles.container}>
      {/* //BACKGROUND */}
    <ImageBackground source={require('../assets/images/bg.jpeg')}  style={styles.container}>
        {/* PLAYERCONTROLS */}
        <View  style={styles.containerControls}>
        <MaterialCommunityIcons style={styles.containerControls} name="play" size={50} color="white" onPress={play}/>
        <MaterialCommunityIcons style={styles.containerControls} name="stop" size={50} color="white" onPress={stop}/>
        </View>
         {/* COLUMN */}
        <View  style={styles.containerInner}>
        <TouchableHighlight style={styles.box} onPress={() => playSound(0)}>
          <Text></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box} onPress={() => playSound(1)}>
          <Text></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box} onPress={() => playSound(3)}>
          <Text></Text>
        </TouchableHighlight>
        </View>
         {/* COLUMN */}
        <View  style={styles.containerInner}>
        <TouchableHighlight style={styles.box} onPress={() => playSound(0)}>
          <Text></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box} onPress={() => playSound(1)}>
          <Text></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box} onPress={() => playSound(3)}>
          <Text></Text>
        </TouchableHighlight>
        </View>
        {/* COLUMN */}
        <View  style={styles.containerInner}>
        <TouchableHighlight style={styles.box} onPress={() => playSound(0)}>
          <Text></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box} onPress={() => playSound(1)}>
          <Text></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box} onPress={() => playSound(3)}>
          <Text></Text>
        </TouchableHighlight>
        </View>
        </ImageBackground>
    </View>
  );
}

////STYLING

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    flexDirection: 'row',
    justifyContent: 'center',
  },
    containerInner: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  containerControls: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    marginBottom:15, 
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  box: {
    width: DeviceWidth*0.2, 
    height: DeviceWidth*0.2, 
    marginBottom:5, 
    marginLeft:5, 
    backgroundColor: 'black', 
    opacity: 0.6,
  }
});

