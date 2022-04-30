import { View, Text, Image, ImageBackground } from "react-native";
import * as React from "react";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation, main, about }) => {
  const menuHandler = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={HeaderStyles.container}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={menuHandler}
        style={HeaderStyles.icon}
      />
      <View style={HeaderStyles.header}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={HeaderStyles.img}
        />
        {main && <Text style={HeaderStyles.txt}>Game Zone </Text>}
        {about && <Text style={HeaderStyles.txt}>About Game Zone </Text>}
      </View>
    </ImageBackground>
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
  },
  header: {
    flexDirection: "row",
  },
  txt: {
    letterSpacing: 1,
    fontSize: 25,
    fontFamily: "Nunito-bold",
    color: "#333",
  },
  icon: {
    position: "absolute",
    left: 5,
  },
  img: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
