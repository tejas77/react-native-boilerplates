/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import store from './src/store';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      await Ionicons.loadFont();
      setFontLoaded(true);
    })();
  }, []);

  if (!fontLoaded) {
    return <View />;
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
