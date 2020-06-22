import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen, {
  screenOptions as homeScreenOptions,
} from '../screens/HomeScreen';
import HeartScreen, {
  screenOptions as heartScreenOptions,
} from '../screens/HeartScreen';
import Colors from '../constants/Colors';

const HomeStackNavigator = createStackNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.header,
    shadowColor: Colors.header,
  },
  headerTitleStyle: {
    color: 'white',
  },
  headerTintColor: Colors.primary,
  headerBackTitleStyle: {
    color: 'white',
  },
};

export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <HomeStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={homeScreenOptions}
      />
      <HomeStackNavigator.Screen
        name="Heart"
        component={HeartScreen}
        options={heartScreenOptions}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeNavigator;
