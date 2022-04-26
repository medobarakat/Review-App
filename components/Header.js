import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// import { DrawerActions } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";

// const navigation = useNavigation();

const Header = ({ navigation }) => {
  const menuHandler = () => {
    // navigation.openDrawer();
    console.warn(navigation);
    // Navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View style={HeaderStyles.container}>
      <TouchableOpacity style={HeaderStyles.icon}>
        <MaterialIcons name="menu" size={28} onPress={menuHandler} />
      </TouchableOpacity>
      <Text style={HeaderStyles.txt}>Game Zone</Text>
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
    left: 12,
  },
});
