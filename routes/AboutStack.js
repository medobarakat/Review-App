import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
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
          options={{
            title: "About Game Zone",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
