import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Home from "./screens/Home";
import About from "./screens/About";
import ReviewDetail from "./screens/ReviewDetail";
import { useFonts } from "expo-font";
import { globalStyles } from "./styles/global";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
