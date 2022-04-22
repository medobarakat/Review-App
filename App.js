import "react-native-gesture-handler";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import { globalStyles } from "./styles/global";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "./routes/HomeStack";
import DrawerNavigation from "./routes/drawerNavigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <HomeStack />
      {/* <DrawerNavigation /> */}
    </NavigationContainer>
  );
}
