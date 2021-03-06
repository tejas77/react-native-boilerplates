import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import * as homeActions from "../store/actions/homeActions";

const HeartScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.heartContainer}>
      <Ionicons.Button
        name={Platform.OS === "android" ? "md-heart" : "ios-heart"}
        backgroundColor={Colors.primary}
        onPress={() => {
          dispatch(homeActions.incrementLoveExpo());
        }}
        color="white"
      >
        I Love Expo
      </Ionicons.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  heartContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
});
export default HeartScreen;
