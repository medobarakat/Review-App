import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/About";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

export default function AboutStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerStyle: { backgroundColor: "#eee" },
        }}
      >
        <Stack.Screen
          name="About Page"
          component={About}
          options={() => {
            return {
              //headerTitle: () => <Header navigation={navigation} about />,
              title: "About Game Zone",
            };
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
