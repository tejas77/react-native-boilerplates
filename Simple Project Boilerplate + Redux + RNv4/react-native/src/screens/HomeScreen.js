import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import logo from '../assets/logo.png';

const HomeScreen = (props) => {
  const home = useSelector((state) => state.home);
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

HomeScreen.navigationOptions = (navData) => {
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
