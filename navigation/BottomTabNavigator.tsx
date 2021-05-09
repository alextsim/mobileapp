/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import DJPadScreen from '../screens/DjPadScreen';
import PlaybackScreen from '../screens/PlaybackScreen';
import { BottomTabParamList, DJPadParamList, PlaybackParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="DJPad"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="DJPad"
        component={DJPadNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="music-circle" size={26} color="white" />,
        }}
      />
      <BottomTab.Screen
        name="Playback"
        component={PlaybackNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="my-library-music" size={26} color="white" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const DJPadStack = createStackNavigator<DJPadParamList>();

function DJPadNavigator() {
  return (
    <DJPadStack.Navigator>
      <DJPadStack.Screen
        name="DJPadScreen"
        component={DJPadScreen}
        options={{ headerTitle: 'To remove header' }}
      />
    </DJPadStack.Navigator>
  );
}

const PlaybackStack = createStackNavigator<PlaybackParamList>();

function PlaybackNavigator() {
  return (
    <PlaybackStack.Navigator>
      <PlaybackStack.Screen
        name="PlaybackScreen"
        component={PlaybackScreen}
        options={{ headerTitle: 'To remove header' }}
      />
    </PlaybackStack.Navigator>
  );
}
