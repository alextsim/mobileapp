import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function PlaybackScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Librarys</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.innerContainer}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text
          style={styles.text}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(155,155,155,0.8)">
            Recording 1
        </Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text
          style={styles.text}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(155,155,155,0.8)">
            Recording 2
        </Text>
      </View>
    </View>
  );
}


//styles are dupicated this should be moved to its own file

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  innerContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  text: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});