import { View, Text, TouchableOpacity } from "react-native";
import * as React from "react";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation, menu, main, about }) => {
  const menuHandler = () => {
    navigation.openDrawer();
  };
  return (
    <View style={HeaderStyles.container}>
      {menu && (
        <TouchableOpacity style={HeaderStyles.icon}>
          <MaterialIcons name="menu" size={28} onPress={menuHandler} />
        </TouchableOpacity>
      )}

      {/* <TouchableOpacity style={HeaderStyles.icon}>
        <MaterialIcons name="menu" size={28} onPress={menuHandler} />
      </TouchableOpacity> */}

      {main && <Text style={HeaderStyles.txt}>Game Zone </Text>}
      {about && <Text style={HeaderStyles.txt}>About Game Zone </Text>}
    </View>
  );
};

export default Header;

const HeaderStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  txt: {
    letterSpacing: 1,
    fontSize: 20,
    fontFamily: "Nunito-bold",
    color: "#333",
  },
  icon: {
    position: "absolute",
    left: 5,
  },
});
