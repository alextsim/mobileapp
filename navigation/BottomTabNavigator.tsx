/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import DJPadScreen from '../screens/DjPadScreen';
import InfoScreen from '../screens/InfoScreen';
import { BottomTabParamList, DJPadParamList, InfoParamList } from '../types';

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
      />
      <BottomTab.Screen
        name="Info"
        component={InfoNavigator}
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
        options={{ headerTitle: 'DJ App' }}
      />
    </DJPadStack.Navigator>
  );
}

const InfoStack = createStackNavigator<InfoParamList>();

function InfoNavigator() {
  return (
    <InfoStack.Navigator>
      <InfoStack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{ headerTitle: 'Info' }}
      />
    </InfoStack.Navigator>
  );
}
