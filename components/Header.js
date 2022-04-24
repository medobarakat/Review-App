import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const Header = () => {
  return (
    <View>
      <Text style={HeaderStyles.txt}>Iam Header</Text>
    </View>
  );
};

export default Header;

const HeaderStyles = StyleSheet.create({
  txt: {
    backgroundColor: "red",
  },
});
