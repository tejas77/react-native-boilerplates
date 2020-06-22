import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import AppNavigator from "./src/navigation/AppNavigator";
import store from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
