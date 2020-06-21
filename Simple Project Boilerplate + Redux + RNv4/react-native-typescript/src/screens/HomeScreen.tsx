import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {
  NavigationStackProp,
  NavigationStackOptions,
} from 'react-navigation-stack';

import Colors from '../constants/Colors';
import logo from '../assets/logo.png';
import {AppState} from '../store/types';

const HomeScreen = () => {
  const home = useSelector((state: AppState) => state.home);
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.textStyle}>{home.projectType}</Text>
      <Image source={logo} resizeMode="contain" style={styles.imageStyle} />
      <Text style={styles.textStyle}>
        {home.projectType} Hearts: {home.loveReactNative}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20.0,
  },
  imageStyle: {height: 150},
});

HomeScreen.navigationOptions = (navData: {
  navigation: NavigationStackProp;
}): NavigationStackOptions => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Heart"
          iconName={Platform.OS === 'android' ? 'md-heart' : 'ios-heart'}
          onPress={() => {
            navData.navigation.push('Heart');
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default HomeScreen;
